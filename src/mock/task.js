const getRandomInt = (min, max) => {
  return min + Math.floor((max - min) * Math.random());
};

const getRandomArrayItem = (array) => {
  return array[getRandomInt(0, array.length)];
};

const Descriptions = [
  `Изучить теорию`,
  `Сделать домашку`,
  `Пройти интенсив на соточку`
];

const RepeatingDays = {
  'mo': false,
  'tu': false,
  'we': false,
  'th': false,
  'fr': false,
  'sa': false,
  'su': false
};

const Tags = [
  `homework`,
  `theory`,
  `practice`,
  `intensive`,
  `keks`
];

const Colors = [`black`, `yellow`, `blue`, `green`, `pink`];

const getRandomDate = () => {
  const targetDate = new Date();
  const sign = Math.random() > 0.5 ? 1 : -1;
  const diffValue = sign * getRandomInt(0, 7);
  targetDate.setDate(targetDate.getDate() + diffValue);
  return targetDate;
};

const getRepeatingDays = () => {
  return Object.assign({}, RepeatingDays, {
    'mo': Math.random() > 0.5,
  });
};

const getRandomTags = (tags) => {
  return tags
    .filter(() => Math.random() > 0.5)
    .slice(0, 3);
};

const generateTask = () => {
  const dueDate = Math.random() > 0.5 ? null : getRandomDate();
  return {
    id: String(new Date() + Math.random()),
    description: getRandomArrayItem(Descriptions),
    dueDate,
    repeatingDays: dueDate ? RepeatingDays : getRepeatingDays(),
    tags: new Set(getRandomTags(Tags)),
    color: getRandomArrayItem(Colors),
    isFavorite: Math.random() > 0.5,
    isArchive: Math.random() > 0.5
  };
};

const generateTasks = (count) => {
  return Array.from({length: count}, () => generateTask());
};

export {generateTask, generateTasks};
