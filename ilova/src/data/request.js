export const host = process.env.REACT_APP_SERVER_URL;
export const key = "b857af049a843225777ec8732bc31115";

export function post(url, body, setData) {
    fetch(host + url, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    })
        .then(res => res.json())
        .then(data => setData(data))
}
