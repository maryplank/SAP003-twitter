window.twitter = {
    tweet: tweet,
    print: print
}

function print (content, element) {
    const li = document.createElement('li');
    li.setAttribute("class", "tweet");
    li.innerHTML = content;
    element.prepend(li);
    return 'banana'
}