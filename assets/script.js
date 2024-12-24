document.addEventListener('DOMContentLoaded', function() {
    const rssUrl = 'https://api.allorigins.win/get?url=' + encodeURIComponent('https://blog.mohittanwani.me/rss.xml'); // Replace with your RSS feed URL
    const targetDiv = document.getElementsByClassName('retro-blog-list')[0];

    fetch(rssUrl)
        .then(response => response.json())
        .then(data => new window.DOMParser().parseFromString(data.contents, 'text/xml'))
        .then(data => {
            console.log(data)
            const items = data.querySelectorAll('item');
            let content = '';
            for (let i = 0; i < Math.min(2, items.length); i++) {
                const title = items[i].querySelector('title').textContent;
                let description = items[i].querySelector('description').textContent;
                if (description.length > 140) {
                    description = description.substring(0, 30) + '...';
                }
                const link = items[i].querySelector('link').textContent;
                content += `    
                    <div class="retro-blog-post" onclick="window.open('${link}', '_blank')">
                        <h2>${title}</h2>
                        <p>${description} &rarr;</p>
                    </div>
                `;
            }
            targetDiv.innerHTML = content;  
        })
        .catch(error => console.error('Error fetching RSS feed:', error));
});

document.addEventListener("DOMContentLoaded", function () {
  const emojis =
    "😀,😃,😄,😁,😆,😅,😂,🤣,😊,😇,🙂,🙃,😉,😌,😍,🥰,😘,😗,😙,😚,😋,😛,😜,🤪,😝,🤑,🤗,🤭,🤫,🤔,🤐,🤨,😐,😑,😶,😏,😒,🙄,😬,🤥,😌,😔,😪,🤤,😴,😷,🤒,🤕,🤢,🤮,🤧,😵,🤯,🤠,🥳,😎,🤓,🧐,😕,😟,🙁,😮,😯,😲,😳,🥺,😦,😧,😨,😰,😥,😢,😭,😱,😖,😣,😞,😓,😩,😫,😤,😡,😠,🤬,😈,👿,💀,☠️,💩,🤡,👹,👺,👻,👽,👾,🤖,😺,😸,😹,😻,😼,😽,🙀,😿,😾,🙈,🙉,🙊,💋,💌,💘,💝,💖,💗,💓,💞,💕,💟,❣️,💔,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍,💯,💢,💥,💫,💦,💨,🕳️,💣,💬,👁️‍🗨️,🗨️,🗯️,💭,💤,👋,🤚,🖐️,✋,🖖,👌,🤌,🤏,✌️,🤞,🤟,🤘,🤙,👈,👉,👆,🖕,👇,☝️,👍,👎,✊,👊,🤛,🤜,👏,🙌,👐,🤲,🤝,🙏,✍️,💅,🤳,💪,🦾,🦵,🦿,🦶,👂,🦻,👃,🧠,🫀,🫁,🦷,🦴,👀,👁️,👅,👄".split(
      ","
    );
  const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
  const body = document.body;
  body.style.backgroundImage = `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" opacity="0.3"><text y="50%" font-size="30">${randomEmoji}</text></svg>')`;
});
