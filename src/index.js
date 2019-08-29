const tweet = document.getElementById("tweet");
const feed = document.getElementById("feed");
const tweets = document.getElementById("tweets");
const submit = document.getElementById("submit");
let counter = document.getElementById("counter")

// Start with the "Tweet" button disabled
submit.disabled = true;

// if there is nothing typed in the box, the button will remain disabled
tweet.onkeyup = () => {
    if (tweet.value.length > 0)
        submit.disabled = false;
    else
        submit.disabled = true;
}

// If there is not a "tweetList" variable saved to localStorage, create one.
if (!localStorage.getItem("tweetList")) {
    let tweetList = []
    localStorage.setItem("tweetList", JSON.stringify(tweetList));
}

// parse whatever is saved to local storage into this variable
let tweetList = JSON.parse(localStorage["tweetList"]);

// print on the screen the tweets in local storage
tweetList.map(item => window.twitter.print(item, tweets))

function callPost(event) {
    event.preventDefault();
    window.twitter.post(tweetList, tweet.value, tweets)
    
    // after the post, clear the tweet"s field
    tweet.value = "";
    submit.disabled = true;
    counter.innerHTML = 140;
}

function callCount() {
    window.twitter.count(tweet, counter)
}

tweet.addEventListener("keyup", callCount)
submit.addEventListener("click", callPost)