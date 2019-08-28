window.twitter = {
    post: post,
    print: print
}

function print (content, element) {
    const li = document.createElement('li');
    li.setAttribute("class", "tweet");
    li.innerHTML = content;
    element.prepend(li);
}

function post (list, content, element) {
    list.push(content);
    localStorage.setItem('tweetList', JSON.stringify(list));
    print(content, element);
}