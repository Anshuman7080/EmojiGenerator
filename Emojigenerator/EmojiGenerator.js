document.addEventListener('DOMContentLoaded', () => {
    let emoji_button_1 = document.querySelector(".emoji_button-1");
    let emoji_button_2 = document.querySelector(".emoji_button-2");
    let emoji_button_3 = document.querySelector(".emoji_button-3");
    let emoji_button_4 = document.querySelector(".emoji_button-4");
    let generate_random_btn = document.querySelector(".generate-random-button");
    let emoji_name = document.querySelector(".emoji_name");
    let emoji = document.querySelector(".emoji");

    emoji_button_1.addEventListener("click", () => {
        updateEmojiName(emoji_button_1);
        updateEmoji(emoji_button_1);
    });

    emoji_button_2.addEventListener("click", () => {
        updateEmojiName(emoji_button_2);
        updateEmoji(emoji_button_2);
    });

    emoji_button_3.addEventListener("click", () => {
        updateEmojiName(emoji_button_3);
        updateEmoji(emoji_button_3);
    });

    emoji_button_4.addEventListener("click", () => {
        updateEmojiName(emoji_button_4);
        updateEmoji(emoji_button_4);
    });

    

    function callEmoji() {
        return fetch('script.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Emoji Fetch Failed');
                }
                return response.json();
            });
    }

    function updateEmojiName(button) {
        emoji_name.textContent = button.innerText;
    }

    function updateEmoji(button) {
        callEmoji().then(data => {
            const category = button.innerText;
            const emojis = data[category];
            if (emojis && emojis.length > 0) {
                const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
                emoji.textContent = randomEmoji.emoji;
            } else {
                emoji.textContent = 'Emoji not found';
            }
        }).catch(error => {
            console.error('Error Occurred:', error);
            emoji.textContent = 'Error loading emoji';
        });
    }
});
