const fishingBtn = document.getElementById('fishingBtn');
const resultDiv = document.getElementById('result');
let totalMoney = 0;
let inventory = [];

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
        const oneFish = inventory [i];
        nameFish = nameFish + oneFish.name + ', ';
    }
    
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
    totalMoney = totalMoney + fish.price;
    resultDiv.textContent = `Вы поймали: ${fish.name}. +${fish.price} монет. Всего денег: ${totalMoney}`;
    updateInventoryDisplay();
}

fishingBtn.addEventListener('click', startFishing);


const showInventoryBtn = document.getElementById ('showInventoryBtn');

showInventoryBtn.addEventListener('click', updateInventoryDisplay);









