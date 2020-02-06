const crypto = require('crypto');

let times = [
    9800, 5300, 4200, 5100, 9700,
    4600, 2400, 2200, 1500, 6000,
    1400, 2200, 6500, 500, 700,
    7900, 7600, 8000, 4200, 6500,
    5800, 2900, 1100, 9100, 8900,
    100, 6300, 3700, 4100, 2000
]
const maxParallelsFetch = 2;
const memoizedFetch = memoizeFetchURL(fetch, 5000);
const urlsPost = [
    {
        name: 'f0',
        body: {
            id: 1,
            data: 'hello',
        },
        method: 'POST',
    },
    {
        method: 'DELETE',
        name: 'f1',
        body: {
            data: 'hello',
            id: 1,
        },
    },
    {
        method: 'DELETE',
        name: 'f1',
        body: {
            data: 'hello',
            id: 1,
        },
    },
    {
        method: 'POST',
        name: 'f0',
        body: {
            data: 'hello',
            id: 1,
        },
    },
];

const sampleUrls = ["f2","f0","f0","f0","f0","f0","f5","f3","f0"];

//                  0    1    2    3    4 |  5    6    7    8
getResults2(urlsPost);

function fetch(key, url){
    return new Promise((resolve, reject) => {
        let time = times[key];
        setTimeout(() => {
            console.log("DONE " + url.name + " in " + time + "ms | " + key);
            resolve({
                url,
                time,
                key,
            });
        }, time)
    })
}



function getResults2(urls) {
    const results = [];
    let urlQueue = urls
        .slice(0, maxParallelsFetch)
        .map((url, key) => ({
            promise: memoizedFetch(key, url),
            url,
            key,
        }));

    return Promise
        .race(urlQueue.map(({promise}) => promise))
        .then(raceSubscriber({results, urlQueue, urls}));
}

function raceSubscriber({results, urlQueue, urls}) {
    return res => {
        results.push(res);

        urlQueue = urlQueue.reduce((queue, element) => {
            const key = maxParallelsFetch - 1 + results.length;
            const newUrl = urls[key];
            if (!newUrl) return queue;
            if ( element.url === res.url && element.key === res.key ){
                queue.push({
                    promise: new Promise(async resolve => {
                        const promise = await memoizedFetch(key, newUrl);
                        resolve({
                            url: newUrl,
                            promise,
                            key,
                        });
                    }),
                    url: newUrl,
                    key,
                });
            }else {
                queue.push(element);
            }
            return queue;
        }, []);

        if (urlQueue.length) {
            return Promise
                .race(urlQueue.map(({promise}) => promise))
                .then(raceSubscriber({results, urlQueue, urls}));
        }

        return results;
    };
}

function memoizeFetchURL(func, ms) {
    let cache = {};

    return function (id, ...args) {
        const argsHashed = hashArgs(args);

        if (cache[argsHashed]) {
            cache[argsHashed].key = id;
            console.log('cache! ' + "DONE " + args[0].name + " in " + 0 + "ms" + " | " + cache[argsHashed].key );
            return Promise.resolve(cache[argsHashed]);
        }
        return new Promise(async (resolve) => {
            const result = await func.apply(this, [id, ...args]);
            cache[argsHashed] = result;
            resolve(result);

            if (ms){
                setTimeout(() => {
                    delete cache[argsHashed];
                }, ms)
            }
        })
    }
}

function hashArgs(arrayArgs) {
    console.log(crypto.createHmac('sha256', stringifyAnArray(arrayArgs))
        .digest('hex'));
    return crypto.createHmac('sha256', stringifyAnArray(arrayArgs))
                 .digest('hex')
}

function stringifyAnArray(prop) {
    if (!Array.isArray(prop)){
        return stringifyCurrent(prop)
    }

    const arrayToString = prop.reduce((sum, current) => {
        return stringifyCurrent(current, sum)
    }, '')

    return arrayToString;
}

function stringifyCurrent(current, sum = '') {
    if (Array.isArray(current)){
        current.sort((a, b) => a >= b ? 1 : -1);
        sum += stringifyAnArray(current);
    }
    if (typeof current === 'object'){
        const entriedObject = Object.fromEntries(
                                Object.entries(current)
                                    .sort((a, b) => a[0] >= b[0] ? 1 : -1)
                                    .map(el => ([
                                        el[0],
                                        stringifyCurrent(el[1])
                                    ]))
                              );
        sum += JSON.stringify(entriedObject, checkCircularJSON(entriedObject));
    }
    sum += current.toString();

    return sum;
}

function checkCircularJSON(mainObj){
    return (key, value) => {
        return (key != "" && value == mainObj) ? undefined : value;
    }
}

// getResults2(["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29"]);

