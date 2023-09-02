let TimeModule = new Date();

let Time = `${TimeModule.getHours()}:${TimeModule.getMinutes()}:${TimeModule.getSeconds()}`;
Time = "18:00:00";
console.log(Time)
const quotes = [
"You will gap in your comfort zone!", 
"🤞 Trying then fail is better than failing to try", 
"🐸 Eat the Frog Conquer the struggling tasks like a pro with the Eat the Frog strategy.", 
"⏲️ 20 second rule; Ikk vaari shuru kar k ta'an dekh technique (for 20 sec)", 
"⏲️ 3, 2, 1 rule Kill procrastination by moving into action within 3 seconds.", 
"🚀 Move before you crave for any motivation", 
"0% Motivation 100% Discipline", 
"Sugoi! That was just your 40% Push past the 40% potential barrier. Your brain got governors push that to 100% performance", 
"Procrastination steals your Time; seize it back with dominance. Procrastination is the thief of Time, your enemy. (Dominate it, before it takes charge on yourself)", 
"☘️ Dream ↑  Efforts ↑ ( D ∝ E) As your dreams rise, let your efforts soar.", 
"You must ACT!  Indecision is the enemy; decisive action is the key.", 
"⚡ Put ENERGY, Get RESULTS Invest your energy, harvest incredible results.", 
"✂️ Cut fkin' distractions Achievement demands focus; eliminate distractions ruthlessly.", 
"The harder the battle, the sweeter the victory.", 
"FEAR is temporary, REGRET is permanent",
"🎇 I submit to a higher power; they are acting through me.",
"✨ Your worship directs the manifestation process.",
"💖 As higher power says, as one worships me, that is how I manifest to them.",
];

const sendNotif = (quoReceived) => {
    Notification.requestPermission().then((perm) => {
        if (perm === "granted") {
            const n = new Notification("Senshin | 先心", {
                body: `${quoReceived}`,
                vibrate: true,
                timestamp: Time,
                icon: "2177172.png",
                buttons:["DFD", "DFDF"],
                title:"DFD"
            });
        }
    });
};

const getRandomQuote = () => {
    const choice = Math.floor(Math.random() * quotes.length);
    return quotes[choice];
};

const pomodoroInterval = 5.75 * 60 * 1000; // in minutes

const updateQuoteAndNotify = () => {
    const quoString = getRandomQuote();
    let a = document.getElementById("quotebox");
    a.innerHTML = quoString;
    console.log(quoString);
    sendNotif(quoString);
};

if (Notification.permission === "granted") {
    if (Time >= "16:00:00" && Time <= "22:00:00") {
        setInterval(updateQuoteAndNotify, pomodoroInterval);
     
    }
}

fetch('https://api.adviceslip.com/advice') 
    .then(response => response.json())
    .then(htmlContent => {
        console.log("html", htmlContent);
        obj2 = htmlContent
        sendNotif(obj2["slip"]["advice"])
    })
    .catch(error => {
        log=error
        console.error('Error:', error);
        sendNotif(error)
        
    });