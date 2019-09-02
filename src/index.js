const tweet = document.getElementById("tweet");
const tweetDiv = document.getElementById("newTweet");
const feed = document.getElementById("feed");
const submit = document.getElementById("submit");
const counter = document.getElementById("counter");
const numOfChars = 140;

// Start with the "Tweet" button disabled
submit.disabled = true;

// if there is no text, or a text bigger than 140 chars, the button will be disabled
tweet.oninput = () => {
    if (tweet.value.length <= 0 || tweet.value.length >= 141)
        submit.disabled = true;
    else
        submit.disabled = false;
}

// set counter to 140
counter.innerHTML = numOfChars;

// If there is not a "tweetList" variable saved to localStorage, create one.
if (!localStorage.getItem("tweetList")) {
    let tweetList = []
    localStorage.setItem("tweetList", JSON.stringify(tweetList));
}

// parse whatever is saved to local storage into this variable
let tweetList = JSON.parse(localStorage["tweetList"]);

// print on the screen the feed in local storage
tweetList.map(item => window.twitter.print(item, feed))

function callPost(event) {
    event.preventDefault();
    window.twitter.post(tweetList, tweet.value, feed)
    
    // after the post, clear the tweet's field
    tweet.value = "";
    submit.disabled = true;
    counter.innerHTML = 140;
    counter.style.color = "#03befc"
}

function callCount() {
    window.twitter.count(tweet, counter, numOfChars)
}

function callExpand() {
    window.twitter.expand(tweet, tweetDiv)
}

tweet.addEventListener("input", callCount)
tweet.addEventListener("input", callExpand)
submit.addEventListener("click", callPost)