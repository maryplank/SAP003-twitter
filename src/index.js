const tweet = document.getElementById('tweet');
const feed = document.getElementById('feed');
const tweets = document.getElementById('tweets');
const submit = document.getElementById('submit');

// Start with the 'Tweet' button disabled
submit.disabled = true;

// if there is nothing typed in the box, the button will remain disabled
tweet.onkeyup = () => {
    if (tweet.value.length > 0)
        submit.disabled = false;
    else
        submit.disabled = true;
}

// If there is not a 'tweetList' variable saved to localStorage, create one.
if (!localStorage.getItem('tweetList')) {
    let tweetList = []
    localStorage.setItem('tweetList', JSON.stringify(tweetList));
}

// parse whatever is saved to local storage into this variable
let tweetList = JSON.parse(localStorage['tweetList']);

// print on the screen the tweets in local storage
tweetList.map(item => {
    const li = document.createElement('li');
    li.setAttribute("class", "tweet");
    li.innerHTML = item;
    tweets.prepend(li);
})

function post(event) {
    // prevent page from reloading
    event.preventDefault();
    
    // add the tweet to the list
    tweetList.push(tweet.value)

    // add the list to local storage
    localStorage.setItem('tweetList', JSON.stringify(tweetList));

    // parse the tweets array and put each one in an li item
    printTweet(tweet.value, tweets);

    // makes state of text and button as it was in the beggining
    tweet.value = '';
    submit.disabled = true;

    return false
}

function printList (list, content, element) {
    list.map(printTweet(content, element))
}

function printTweet (content, element) {
    const li = document.createElement('li');
    li.setAttribute("class", "tweet");
    li.innerHTML = content;
    element.prepend(li);
}

submit.addEventListener("click", post)