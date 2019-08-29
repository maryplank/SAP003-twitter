window.twitter = {
    post: post,
    print: print,
    count: count
}

function print (content, element) {
    const li = document.createElement("li");
    li.setAttribute("class", "tweet");
    li.innerHTML = content;
    element.prepend(li);
}

function post (list, content, element) {
    list.push(content);
    localStorage.setItem("tweetList", JSON.stringify(list));
    print(content, element);
}

function count(chars, counter) {
    counter.innerHTML = Number(counter.innerHTML = 140 - chars.value.length);
}