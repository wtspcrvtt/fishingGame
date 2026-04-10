const fishingBtn = document.getElementById('fishingBtn');
const resultDiv = document.getElementById('result');
let totalMoney = 0;
let inventory = [];
let rodLevel = 1;

const moneyDisplay = document.getElementById('moneyDisplay');
const sellAllBtn = document.getElementById('sellAllBtn');

const catches = ['Окунь', 'Ботинок', 'Щука'];
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
    const randomIndex = Math.floor(Math.random() * catches.length);
    return {
        name: catches[randomIndex],
        price: fishSpots[randomIndex].price
    };
}

function startFishing() {
    const fish = GetRandomCatch();
    inventory.push(fish);
    resultDiv.textContent = `Вы поймали: ${fish.name}. +${fish.price} монет.`;
    updateInventoryDisplay();
}




const showInventoryBtn = document.getElementById ('showInventoryBtn');



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

fishingBtn.addEventListener('click', startFishing);
showInventoryBtn.addEventListener('click', updateInventoryDisplay);
sellAllBtn.addEventListener('click', sellAllFish);









