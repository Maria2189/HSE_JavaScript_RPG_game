const characters = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'маг', health: 0 },
  { name: 'лучник', health: 0 },
];

const alive = characters.filter((item) => item.health > 0);

// Добавляем использование переменной, чтобы ESLint не выдавал ошибку "defined but never used"
console.log(alive);