export const host = process.env.REACT_APP_SERVER_URL;
export const key = process.env.REACT_APP_WEATHER_API_KEY;

export function post(url, body, reply) {
    fetch(host + url, {
        method: 'post',
        // mode: "no-cors", // cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    })
        .then(res => res.json())
        .then(data => reply(data))
        .catch(err => reply(null, err))
}
