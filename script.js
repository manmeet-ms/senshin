let btn=document.querySelector('button')


console.log("Script is working.");
// alert("Script is working.");
// alert("Script worked.");


quotes = ["Trying then fail is better than failing to try ", "Get comfortable by being uncomfortable", "You will Gap in your comfort zone!", "Eat the Frog 🐸\nConquer the struggling tasks like a pro with the Eat the Frog strategy.", "20 second rule; Ikk vaari\nOne step forward - Ikk vaari shuru kar k ta'an dekh technique (for 20 sec)", "3 seconds rule\nDefy procrastination by moving into action within 3 seconds. ", "Move before you are motivated\nMove before you're motivated (Count down to 3 sec Rule and START!)", "Sugoi! That was just your 40%\nPush past the 40% potential barrier. Your brain got governors push that to 100% performance", "Procrastination steals your Time; seize it back with dominance.\nProcrastination is the thief of Time, your enemy. (Dominate it, before it takes charge on yourself)", "Dream ↑  Efforts ↑ ( D ∝ E)\nAs your dreams rise, let your efforts soar.", "You must ACT!\n Indecision is the enemy; decisive action is the key.", "Put ENERGY, Get RESULTS\nInvest your energy, harvest incredible results.", "Cut fkin' distractions\nAchievement demands focus; eliminate distractions ruthlessly.", "The harder the battle, the sweeter the victory.", "FEAR is temporary, REGRET is permanent"]


let sendNotif = (quoReceived) => {
    Notification.requestPermission().then(perm => {
        if (perm === "granted") {
            const n = new Notification("Senshin | 先心",
                {
                    body: quoReceived,
                    vibrate: true,
                    icon: "archived/javascriptone/public/favicon.ico",
                    // image:"archived/javascriptone/public/reference.jpeg",

                })
        }
    })
}

let TimeModule = new Date();
// let Time = `${TimeModule.getHours()}:${TimeModule.getMinutes()}:${TimeModule.getSeconds()}`
Time = "16:00:00"
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function Pomodoro(quoString) {
    sendNotif(quoString)
    console.log(quoString)
    await sleep(5000);
}

if (Time >= "16:00:00" && Time <= "22:00:00") {

    choice = Math.floor(Math.random() * (quotes.length) + 1); // 0-9
    const element = quotes[choice];
    let a = document.getElementById('quote3')
    // document.querySelector('.timestamp').innerHTML=Time
    a.innerHTML = element
    console.log(element);
    Pomodoro(element)
}

// alert("Script worked.");
