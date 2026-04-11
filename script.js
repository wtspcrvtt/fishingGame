const fishingBtn = document.getElementById('fishingBtn');
const resultDiv = document.getElementById('result');
let totalMoney = 0;
let inventory = [];
let rodLevel = 1;

const rodDisplay = document.getElementById('rodDisplay');
const upgradeRodBtn = document.getElementById('upgradeRodBtn');

const moneyDisplay = document.getElementById('moneyDisplay');
const sellAllBtn = document.getElementById('sellAllBtn');

const fishSpots = [
    {name: 'Окунь', price: 10 },
    {name: 'Ботинок', price: 1 },
    {name: 'Щука', price: 5 },    
];

const inventoryDisplay = document.getElementById('inventoryDisplay');

function updateInventoryDisplay() {
    if (inventory.length === 0) {
        inventoryDisplay.textContent = `В инвентаре: пусто`;
        return;
    }
    let nameFish = '';
    for (let i = 0; i < inventory.length; i++) {
        const oneFish = inventory[i];
        nameFish = nameFish + oneFish.name + ', ';
    }
    nameFish = nameFish.slice(0, -2);
    
    inventoryDisplay.textContent = `В инвентаре: ${nameFish}`;
}

function GetRandomCatch() {
    let trashThreshold;
    let pikeThreshold;

    if (rodLevel === 1) {
        trashThreshold = 0.6;
        pikeThreshold = 0.9;
    }

    if (rodLevel === 2) {
        trashThreshold = 0.4;
        pikeThreshold = 0.75;
    }

    if (rodLevel === 3) {
        trashThreshold = 0.2;
        pikeThreshold = 0.6;
    }

    const rand = Math.random()

    let selectedFish;

    if ( rand < trashThreshold) {
        selectedFish = fishSpots[1];
    } else if (rand < pikeThreshold) {
        selectedFish = fishSpots[2];
    } else {
        selectedFish = fishSpots[0];
    }

    return {
        name: selectedFish.name,
        price: selectedFish.price
    }

}

function startFishing() {
    const fish = GetRandomCatch();
    inventory.push(fish);
    resultDiv.textContent = `Вы поймали: ${fish.name}. +${fish.price} монет.`;
    updateInventoryDisplay();
}


function updateMoneyDisplay() {
    moneyDisplay.textContent = `Денег: ${totalMoney}`;
}

function sellAllFish() {
    let sum = 0;
    for (let i = 0; i < inventory.length; i++) {
        sum = inventory[i].price + sum;
        
    }
    totalMoney = totalMoney + sum;
    inventory = [];
    updateMoneyDisplay()
    updateInventoryDisplay()
    
}

function upgradeRod() {
        const price = rodLevel * 200;
        if (totalMoney >= price) {
            totalMoney = totalMoney - price;
            rodLevel = rodLevel + 1;
            updateUpgradeButtonText();
            updateMoneyDisplay();
            updateRodDisplay();
            resultDiv.textContent = `Удочка улучшена до уровня ${rodLevel}!`;
        }
        else {resultDiv.textContent = `Не хватает денег. Нужно ${price} монет.`

    }
}

function updateRodDisplay() {
    rodDisplay.textContent = `Удочка: уровень ${rodLevel}`;
}

function updateUpgradeButtonText() {
    price = rodLevel * 200
    upgradeRodBtn.textContent = `⬆️ Купить апгрейд (${price})`
}



fishingBtn.addEventListener('click', startFishing);
sellAllBtn.addEventListener('click', sellAllFish);
upgradeRodBtn.addEventListener('click', upgradeRod);
updateUpgradeButtonText();
updateInventoryDisplay();
resultDiv.textContent = 'Нажми "Ловить рыбу", чтобы начать';









