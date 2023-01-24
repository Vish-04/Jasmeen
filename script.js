var images = ["gursheen.jpg","ria.jpg", "kina.jpg", "liza.jpg", "meena.jpg", "nitin.jpg", "sandeep.jpg", "suhani.jpg", "rishi.jpeg", "kris.jpg", "diya.jpg", "sanjay.jpg"],
    captions = ["Silent but present. I think that explains our relationship very well. From the day I invited you into my dorm to today, you’ve been a strong and steady person that I know I can rely on if I ever face any difficulty. I hope you feel the same about me. I’ll always be there if you ever need me. Although we do not talk a lot, your presence in my life gives me a lot of joy. Our shared music, culture, and life experiences gives me a lot of comfort in a place where I don’t see many people like myself. Keep being yourself and let no one change you. ~ Love, Gursheen", "Dear Jasmeen, The first day I met u, I knew we would become really good friends and i am so glad to have someone like u in my life. You are amazing inside and out and always stay that way! The care present between us is something i will always cherish. Thank you for being an understanding and awesome friend! Never change and keep smiling! Wishing you many more downtown trips to temple coffee!! Love u loads ~ Ria😘", "Happy Birthday Jasmeen, the mother penguin to all our friends: From the first night of move in, when we went on a night run to the library and the 7 am run the next day, I am so glad to have seen both the composed person you are and the chaos that appears at our late night talks. Even though we’ve had few conversations, I’ve come to respect your sense of self, your experiences, and your love for music. I hope to be there to help you the way you have been there for me when I needed it. If you ever want to wash dishes at 1 am or go running at the crack of dawn, you know I’m always free! I’m so excited to live with you next year <3 ~ Kina & Vish", "Happy birthday Jasmine 🎂💖 U r gorgeous mashaallah May this be the best year of ur life!! And yes, we need to go to  Philz soon🧋 ~ Liza", "HAPPY BIRTHDAY JASMEEN!!!! Have fun being old >:) i cant wait to see u on tv one day working with the president :)", "Jasmeen Bhai, this is Nitin machi wishing you a very loving and wonderful 19th birthday ~ love Nitin", "To many more French classes, Croissants and socializing ~ Sandeep", "Happy birthday Jasmeen! I hope this year will be your happiest!! ~ Suhani", "Happy birthday Jasmeen!!I wish you a solid semester!  Can’t wait to make more memories with you ~ Rishi", "Here's to ur 19th year of living and it's gonna be a great one. i am so glad i met you here and continue making people laugh and smile. it has been a pleasure to hang out with you, and i am looking forward towards so many more memories.", "To our dearest Jasmeen, You have a calm and comforting personality, and that follows you wherever you go. Your stories and our talks are always so inspiring. You are an amazing singer, never failing to amaze us with your melodious songs. We love how you spontaneously burst into songs and still make it sound effortless. In a way, your musical talent makes us appreciate the music itself, and our admiration for you only grows. You have been there for many firsts and many core memories since the start of this new chapter in our lives. You live a busy life and we don’t get to see you very often, but now as we spend more time together, we are only more excited for the coming three years to get closer and become a part of the memories you make at Davis. ~ Diya", "W Jasmeen ~ Sanjay"],
    index = 0;

function nextImage() {
    index++;
    if (index >= images.length) {
        index = 0;
    }
    document.getElementById("image").src = images[index];
    document.getElementById("caption").innerHTML = captions[index];
}

function prevImage() {
    index--;
    if (index < 0) {
        index = images.length - 1;
    }
    document.getElementById("image").src = images[index];
    document.getElementById("caption").innerHTML = captions[index];
}
