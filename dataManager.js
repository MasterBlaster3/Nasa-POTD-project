// fetchs and api keys go here
// nasa's api key= https://api.nasa.gov/planetary/apod?api_key=bYU3IQcCvI2VeNgFcoq2HBvazJAbG0H0BSDOonY9
//bday date fetch
export const getSpaced = () => {
    return fetch("https://api.nasa.gov/planetary/apod?api_key=bYU3IQcCvI2VeNgFcoq2HBvazJAbG0H0BSDOonY9"), {
        headers: {
            accept: "applications/json"
        }
    }
    .then((response) => response.json())
    .then((space) => space);
}

export const bdayPic = (bDay) => {
    return fetch(`https://api.nasa.gov/planetary/apod?api_key=bYU3IQcCvI2VeNgFcoq2HBvazJAbG0H0BSDOonY9&date=${bDay}`)
    .then (response => response.json())
    .then(picture => picture)
}
