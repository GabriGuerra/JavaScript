var xhr = new XMLHttpRequest();
var url = 'https://emojihub.yurace.pro/api/all';
xhr.open('GET', url, true);
xhr.responseType = 'json';


xhr.onload = function() {

    var emojis = xhr.response;
    var emojisDiv = document.getElementById('emojis');
    
    

    emojis.forEach(function(emoji) {
        
        var emojiDiv = document.createElement('div');
        emojiDiv.classList.add('emoji');

        var name = document.createElement('h2');
        name.textContent = emoji.name;
        
        var category = document.createElement('p');
        category.textContent = emoji.category;

        var group = document.createElement('p');
        group.textContent = emoji.group;

        var htmlcode = document.createElement('p');
        htmlcode.textContent = emoji.htmlCode;

        var unicode = document.createElement('p');
        unicode.textContent = emoji.unicode;

        emojisDiv.appendChild(name);
        emojisDiv.appendChild(category);
        emojisDiv.appendChild(group);
        emojisDiv.appendChild(htmlcode);
        emojisDiv.appendChild(unicode);
        emojisDiv.appendChild(emojiDiv);
    });
};

xhr.send();