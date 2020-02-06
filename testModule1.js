let times = [
    9800, 5300, 4200, 5100, 9700,
    4600, 2400, 2200, 1500, 6000,
    1400, 2200, 6500, 500, 700,
    7900, 7600, 8000, 4200, 6500,
    5800, 2900, 1100, 9100, 8900,
    100, 6300, 3700, 4100, 2000
]

function fetch(url, key){
    return new Promise((resolve, reject) => {
        let time = times[key];
        setTimeout(() => {
            resolve({url, time});
        }, time)
    })
}

function getResults2(urls) {
    const results = [];
    let urlQueue = urls
        .slice(0, 5)
        .map((url, key) => ({
            promise: fetch(url, key)
                        .then(({url, time}) => {
                            console.log("DONE " + url + " in " + time + "ms");
                            return url;
                        }),
            url,
        }));

    return Promise
        .race(urlQueue.map(({promise}) => promise))
        .then(raceSubscriber({results, urlQueue, urls}));
}

const raceSubscriber = ({results, urlQueue, urls}) => res => {
    results.push(res);

    urlQueue = urlQueue.reduce((queue, element) => {
        const newUrl = urls[4 + results.length];
        if (!newUrl) return queue;
        if (element.url === res ) {
            queue.push({
                promise: new Promise(async resolve => {
                    const promise = await fetch(newUrl, 4 + results.length);
                    resolve({
                        url: newUrl,
                        promise,
                    });
                }).then(({url, promise}) => {
                    console.log("DONE " + url + " in " + promise.time + "ms");
                    return url;
                }),
                url: newUrl,
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


    console.timeEnd('Vadim')
    return results;
};

console.time('Vadim');
getResults2(["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29"]);
