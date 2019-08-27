const tweet = document.getElementById('tweet');
const feed = document.getElementById('feed');
const tweets = document.getElementById('tweets');
const submit = document.getElementById('submit');
let tweetList = JSON.parse(localStorage['tweetList']);

// Start with the 'Tweet' button disabled
submit.disabled = true;

// if there is no tweet, the button will remain disabled
tweet.onkeyup = () => {
    if (tweet.value.length > 0)
        submit.disabled = false;
    else
        submit.disabled = true;
}

// If there is a 'tweetList' variable saved to localStorage, get it, else create one.
if (!localStorage.getItem('tweetList')) {
    localStorage.setItem('tweetList', JSON.stringify(tweetList));
}

// parse the tweets array and put each one in an li item
tweetList.map(item =>  {
    const li = document.createElement('li');
    li.setAttribute("class", "tweet");
    li.innerHTML = item;
    tweets.prepend(li)
})

function post(event) {
    // prevent page from reloading
    event.preventDefault();
    
    // add the tweet to the list
    tweetList.push(tweet.value)

    // add the list to local storage
    localStorage.setItem('tweetList', JSON.stringify(tweetList));

    // parse the tweets array and put each one in an li item
    tweetList.map(item =>  {
        const li = document.createElement('li');
        li.setAttribute("class", "tweet");
        li.innerHTML = item;
        tweets.prepend(li)
    })

    // makes state of text and button as it was in the beggining
    tweet.value = '';
    submit.disabled = true;

    return false
}

submit.addEventListener("click", post)