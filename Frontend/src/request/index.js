export default async function fetchApi(url, method, body) {
    const data = await fetch('http://localhost:5000' + url, {
        method: method,
        headers: {
            Accept: 'application/json',
            "Content-Type": "application/json",
            // "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDhkNjVjOWQxYWI5ZjNhYjBlMjExZTEiLCJpYXQiOjE2MTk5NzUxMzZ9.OheJWInP43demCaqH8VzS9QxDjk4aRrPiUxbv0uI2f4"
        },
        body,
    },
    )
        .then((response) => response.json())
        .then((responseJson) => {
            return responseJson
        })
        .catch((error) => {
            console.log(error)
            throw error;
        });
    return data;
}