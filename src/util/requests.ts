export const post = (url: string, data: object) => {
    const content = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }

    return fetch(url, content).then(res => res.json())
}

// export const patch = () => {}

// export const get = () => {}