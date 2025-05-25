let data = JSON.parse(localStorage.getItem('mjs-drift-boss-game-v1.0.2-dailyreward'));

alert(
  "thanks for using drifthack\n\n" +
  "keybinds:\n" +
  "c = custom coins amount\n" +
  "d = custom double score amount\n" +
  "i = custom 'car insurance' amount\n" +
  "r = custom 'coin rush' amount\n" +
  "o = auto-own every car\n" +
  "t = skip both tutorials\n" +
  "s = set a custom score"
);

function update() {
    localStorage.setItem('mjs-drift-boss-game-v1.0.2-dailyreward', JSON.stringify(data));
}

document.addEventListener('keydown', function (e) {
    switch (e.key.toUpperCase()) {
        case 'C':
            let coins = prompt('enter custom coin amount:', data.collectedCoin || 0);
            if (coins !== null) {
                data.collectedCoin = +coins || 0;
                update();
                alert('your coins have been updated!');
            }
            break;
        case 'D':
            let score = prompt('enter custom double score amount:', data.booster1 || 1);
            if (score !== null) {
                data.booster1 = +score || 1;
                update();
                alert('your double score amount has been updated!');
            }
            break;
        case 'I':
            let insurance = prompt('enter custom car insurance amount:', data.booster2 || 1);
            if (insurance !== null) {
                data.booster2 = +insurance || 1;
                update();
                alert('car insurance changed!');
            }
            break;
        case 'R':
            let rush = prompt('enter custom coin rush amount:', data.booster3 || 1);
            if (rush !== null) {
                data.booster3 = +rush || 1;
                update();
                alert('coin rush amount changed!');
            }
            break;
        case 'O':
            data.cars = [0, 7, 6, 5, 4, 3, 2, 1];
            data.currentCar = 7;
            update();
            alert('you own every car now, you\'re so rich omg!');
            break;
        case 'T':
            if (!data.hasShownTutorial && !data.hasShownBoosterTutorial) {
                data.hasShownTutorial = true;
                data.hasShownBoosterTutorial = true;
                update();
                alert('successfully skipped tutorials!');
            } else {
                alert('you already went through the tutorials, noob');
            }
            break;
        case 'S':
            let customScore = prompt('set custom score:', data.score || 0);
            if (customScore !== null) {
                data.score = +customScore || 0;
                update();
                alert('set custom best score! (only for flexing)');
            }
            break;
        default:
            break;
    }
});
