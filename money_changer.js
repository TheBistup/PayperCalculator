var money_month = 0.0;
var current_money = 0.0;
var update = false;

self.addEventListener('message', function(e) {
    money_month = e.data;
    update = true;
    start();
});

async function start() {
    while (update) {
        self.postMessage(current_money);
        await sleep(1000);
        current_money += ((((money_month / 4) / 5) / 8) / 60) / 60;
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}