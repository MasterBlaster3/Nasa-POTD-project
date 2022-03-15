// import "./styles.css";
//import {getSpaced } from "./dataManager.js";



const getAPISpaced = () => {
    return fetch("https://api.nasa.gov/planetary/apod?api_key=bYU3IQcCvI2VeNgFcoq2HBvazJAbG0H0BSDOonY9", {
        headers: {
            accept: "application/json"
        }
    })
    .then((response) => {
        console.log("what is response", response);
        return response.json();
    })
    .then((space) => {
        console.log("Wanna go to Space?", space);
        return space;
    });
};

const getSpaced = () => {
    getAPISpaced().then((bacon) => {
        const htmlElement = document.querySelector(".pic-goes-here");
        htmlElement.innerHTML = `<image src=${bacon.url} alt="Space"></image> `;
    });
};

document.querySelector("#spaceButton").addEventListener("click", getSpaced);

getSpaced();