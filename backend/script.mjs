import fetch from "node-fetch";
import promptSync from 'prompt-sync';
import Leaderboard from "../src/Components/Leadeboard.jsx";
const prompt = promptSync();
const express = require("express");
let USERNAME = prompt('Enter Username: ');
let SCORE = prompt('Enter Score: ');

const cors = require("cors");
express.use(cors());


// Makes a post request to be sent to the DB.

fetch("http://localhost:4000/user/signup", {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        username: `${USERNAME}`,
        score: `${SCORE}`
    })
}).then(res => {
    return res.json();
})
    .then(data => console.log(data))
    .catch(error => console.log('error'))

// Prints the leaderboard.

const getLeaderboard = () => {
    return fetch("http://localhost:4000/user/leaderboard")
        .then(res => res.json())
        .then(posts => displayLeaderboard(posts))
}

async function displayLeaderboard(posts) {
    posts.sort((p1, p2) => (p1.score < p2.score) ? 1 : (p1.score > p2.score) ? 0 : -1);
    posts.forEach((result, i) => {
        console.log(result.username, result.score);
    });
}

getLeaderboard();