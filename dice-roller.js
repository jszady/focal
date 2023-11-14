let rollAmount = process.argv.slice(2);

rollAmount = Number(rollAmount);

const getRandomInt = function()
{
  return Math.ceil(Math.random() * 6);
};

let arrOfRolledDice = [];

for (let i = 0; i < rollAmount; i++)
{
  arrOfRolledDice[i] = getRandomInt();
}

let finalStr = arrOfRolledDice.join(", ");

console.log(`Rolled ${rollAmount} dice: ${finalStr}`);
