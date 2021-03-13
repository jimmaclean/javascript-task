export default function getListApi() {
    return fetch('./src/data/journeys.json')
        .then(response => response.json())
}

