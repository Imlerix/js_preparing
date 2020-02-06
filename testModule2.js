const promises = [
    'url',
    'url2',
    'url2',
    'url2',
    'url2',
    'url6',
];

async function getResult(urls) {
    // return Promise.resolve([{"status": "resolved", "value": 42}, {"status": "rejected", "reason": "nope"}]);

    let results = []

    let ferst5 = urls.slice(0, 4);
    const race5 = await Promise
        .race(ferst5.map(async url => ({
            res: await fetch(url),
            url
        })))
        .then(res => res)
    results.push(race5)
    if (urls.length > 0) {
        results = [...results, ...(await getResult(urls.filter(url => url !== race5.url))) ]
    }

    return results;
}

function getResults2(urls) {
    const results = [];
    let urlQueue = urls
        .slice(0, 4)
        .map(url => ({promise: fetch(url), url}));

    return Promise
        .race(urlQueue.map(({promise}) => promise))
        .then(raceSubscriber({results, urlQueue, urls}));
}

const raceSubscriber = ({results, urlQueue, urls}) => res => {
    results.push(res.data);

    urlQueue = urlQueue.map(({url, promise}) => {
        if (url === res.url) {
            return new Promise(async resolve => {
                const newUrl = urls[4 + results.length];
                const promise = await fetch(newUrl);

                resolve({
                    url: newUrl,
                    promise,
                });
            });
        }

        return {url, promise};
    });

    if (urlQueue.length) {
        return Promise.race(urlQueue)
            .then(raceSubscriber({results, urlQueue, urls}));
    }

    return results;
};
