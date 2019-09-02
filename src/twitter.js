window.twitter = {
    post: post,
    print: print,
    count: count,
    expand: expand
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

function count (chars, counter, num) {

    counter.innerHTML = Number(counter.innerHTML = num - chars.value.length);
    
    if (counter.innerHTML >= 10 && counter.innerHTML <= 19) {
        counter.style.color = "#a293a3";
    } else if (counter.innerHTML >= 1 && counter.innerHTML <= 9) {
        counter.style.color = "#bb746b";
    } else if (counter.innerHTML <= 0) {
        counter.style.color = "#c93d16";
    } else {
        counter.style.color = "#03befc";
    }
}

function expand (text, div) {
    text.style.cssText = 'height: auto;';
    text.style.cssText = 'height:' + text.scrollHeight + 'px;';
    div.style.cssText = 'height: auto;';
    div.style.cssText = 'height' + text.scrollHeight + 'px;';
}