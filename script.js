console.log("Script is working.");
// alert("Script is working.");
function sendNotif() {
    Notification.requestPermission().then(perm => {
        if (perm === "granted") {
            const n = new Notification("Senshin | 先心",
                {
                    body: "Details",
                    vibrate: true,
                    icon: "archived/javascriptone/public/favicon.ico",
                    // image:"archived/javascriptone/public/reference.jpeg",

                })
        }
    })
}
// Notification.requestPermission()
sendNotif()
