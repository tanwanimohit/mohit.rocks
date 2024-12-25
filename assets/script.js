/**
 * An object containing special emojis for specific dates.
 * Each key is a date in "MM-DD" format, and the value is an array of emojis associated with that date.
 */
const specialEmojis = {
  "12-25": "🎄,🎅,🤶,🦌,🎁,🌟,❄️,⛄,🛷,🍪,🥛".split(","), // Christmas
  "12-26": "🎄,🎅,🤶,🦌,🎁,🌟,❄️,⛄,🛷,🍪,🥛".split(","), // Christmas
  "12-27": "🎄,🎅,🤶,🦌,🎁,🌟,❄️,⛄,🛷,🍪,🥛".split(","), // Christmas
  "12-28": "🎄,🎅,🤶,🦌,🎁,🌟,❄️,⛄,🛷,🍪,🥛".split(","), // Christmas
  "12-29": "🎄,🎅,🤶,🦌,🎁,🌟,❄️,⛄,🛷,🍪,🥛".split(","), // Christmas
  "12-30": "🎄,🎅,🤶,🦌,🎁,🌟,❄️,⛄,🛷,🍪,🥛".split(","), // Christmas
  "12-31": "🎄,🎅,🤶,🦌,🎁,🌟,❄️,⛄,🛷,🍪,🥛".split(","), // Christmas
  "10-31": "🎃,👻,🕸️,🕷️,🧙,🧛,🧟,🧞,🧚,🦇,🍬,🍭".split(","), // Halloween
  "07-04": "🎆,🎇,🇺🇸,🗽,🎉,🎊".split(","), // Independence Day (USA)
  "01-01": "🎉,🎊,🥂,🍾,🎆,🎇".split(","), // New Year's Day
  "08-15": "🇮🇳,🎉,🎊,🪁".split(","), // Independence Day
  "01-26": "🇮🇳,🎉,🎊,🪁".split(","), // Republic Day
  "10-02": "🕊️,🌿,🇮🇳".split(","), // Gandhi Jayanti
  "10-21": "🪔,🎆,🎇,🎉,🎊".split(","), // Diwali (2025)
  "03-14": "🌈,🎨,🎉,🎊".split(","), // Holi (2025)
  "04-13": "🌸,🌼,🎉,🎊".split(","), // Baisakhi (2025)
};

const greetings = {
  "12-25": "Merry Christmas!",
  "12-26": "Happy Holidays!",
  "12-27": "Happy Holidays!",
  "12-28": "Happy Holidays!",
  "12-29": "Happy Holidays!",
  "12-30": "Happy Holidays!",
  "12-31": "Happy New Year's Eve!",
  "01-01": "Happy New Year!",
  "10-31": "Happy Halloween!",
  "08-15": "Happy Independence Day!",
  "01-26": "Happy Republic Day!",
  "10-02": "Happy Gandhi Jayanti!",
  "10-21": "Happy Diwali!",
  "03-14": "Happy Holi!",
  "04-13": "Happy Baisakhi!",
  "01-13": "Happy Lohri",
  "01-14": "Happy Makar Sankranti",
  "02-02": "Happy Vasant Panchami",
  "02-26": "Happy Maha Shivaratri",
  "04-06": "Happy Rama Navami",
  "05-11": "Happy Mothers' Day",
  "06-15": "Happy Fathers' Day",
  "07-10": "Happy Guru Purnima",
  "08-03": "Happy Friendship Day",
  "08-16": "Happy Janmashtami",
  "08-27": "Happy Ganesh Chaturthi",
  "11-05": "Happy Guru Nanak Jayanti",
};

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

function setRandomEmojiBackground() {
  let emojis =
    "🇮🇳, 😀,😃,😄,😁,😆,😅,😂,🤣,😊,😇,🙂,🙃,😉,😌,😍,🥰,😘,😗,😙,😚,😋,😛,😜,🤪,😝,🤑,🤗,🤭,🤫,🤔,🤐,🤨,😐,😑,😶,😏,😒,🙄,😬,🤥,😌,😔,😪,🤤,😴,😷,🤒,🤕,🤢,🤮,🤧,😵,🤯,🤠,🥳,😎,🤓,🧐,😕,😟,🙁,😮,😯,😲,😳,🥺,😦,😧,😨,😰,😥,😢,😭,😱,😖,😣,😞,😓,😩,😫,😤,😡,😠,🤬,😈,👿,💀,☠️,🤡,👹,👺,👻,👽,👾,🤖,😺,😸,😹,😻,😼,😽,🙀,😿,😾,🙈,🙉,🙊,💋,💌,💘,💝,💖,💗,💓,💞,💕,💟,❣️,💔,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍,💯,💢,💥,💫,💦,💨,🕳️,💣,💬,👁️‍🗨️,🗨️,🗯️,💭,💤,👋,🤚,🖐️,✋,🖖,👌,🤌,🤏,✌️,🤞,🤟,🤘,🤙,👈,👉,👆,👇,☝️,👍,👎,✊,👊,🤛,🤜,👏,🙌,👐,🤲,🤝,🙏,✍️,💅,🤳,💪,🦾,🦵,🦿,🦶,👂,🦻,👃,🧠,🫀,🫁,🦷,🦴,👀,👁️,👅,👄".split(
      ","
    );

  const today = new Date();
  const formattedDate = `${String(today.getMonth() + 1).padStart(
    2,
    "0"
  )}-${String(today.getDate()).padStart(2, "0")}`;

  if (specialEmojis[formattedDate]) {
    emojis = specialEmojis[formattedDate];
  }
  const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
  const body = document.body;

  body.style.backgroundImage = `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" opacity="0.3"><text y="50%" font-size="30">${randomEmoji}</text></svg>')`;
}

document.addEventListener("DOMContentLoaded", function () {

  const today = new Date();
  const formattedDate = `${String(today.getMonth() + 1).padStart(
    2,
    "0"
  )}-${String(today.getDate()).padStart(2, "0")}`;

  if (greetings[formattedDate]) {
    const greetingElement = document.getElementById("greeting");
    if (greetingElement) {
      greetingElement.textContent = greetings[formattedDate];
    }
  }

  if (window.innerWidth > 768) {
    setRandomEmojiBackground();
    setInterval(setRandomEmojiBackground, 10000);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("dark-mode-toggle");
  const body = document.body;

  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    body.classList.add("dark-mode");
    const darkModeButton = document.getElementById("dark-mode-button");
    darkModeButton.classList.add("dark-mode");
    darkModeButton.classList.remove("fa-sun");
    darkModeButton.classList.add("fa-moon");
  }

  toggleButton.addEventListener("click", function () {
    const darkModeButton = document.getElementById("dark-mode-button");
    body.classList.toggle("dark-mode");
    darkModeButton.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
      darkModeButton.classList.remove("fa-sun");
      darkModeButton.classList.add("fa-moon");
    } else {
      darkModeButton.classList.remove("fa-moon");
      darkModeButton.classList.add("fa-sun");
    }
  });
});
