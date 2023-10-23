
//Объявляем константы


const MIN_LIKES = 15;
const MAX_LIKES = 200;
const MAX_COMMENTS = 30;
const MAX_AVATAR = 6;
const MAX_PICTURES = 25;

const SOME_COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const SOME_NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];

const DESCRIPTIONS = [
  'В целом всё неплохо. Но не всё.',
  'Cool',
  'Круто #отрыв',
  'Урррра отпуск',
  'После сытного обеда, по закону Архимеда...',
  'Шла Саша по шоссе...',
];


//Создаем рандомное число из диапазона
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

//Возвращаем рандомный элемент из массива
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

//Создаем уникальный Id
const createIdGenerator = () => {
  let lastGeneratedId = 0;

  return () => {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
};

const generateCommentId = createIdGenerator;

const createMessage = () => Array.from(
  {length: getRandomInteger(1, 2) },
  () => getRandomArrayElement(SOME_COMMENTS),
).join(' ');

const createComment = () => ({
  id : generateCommentId,
  avatar : `img/avatar-${getRandomInteger(1, MAX_AVATAR)}.svg`,
  message : createMessage,
  name : getRandomArrayElement(SOME_NAMES),
});

const generatePictureId = createIdGenerator();

const createPictures = () => ({
  id : generatePictureId,
  url : `photos/${this.id}`,
  description : getRandomArrayElement(DESCRIPTIONS),
  likes : getRandomInteger(MIN_LIKES, MAX_LIKES),
  comments : Array.from(
    {length : getRandomInteger(0,MAX_COMMENTS)},
    createComment),
});

const createData = () => Array.from(
  {length : MAX_PICTURES },
  createPictures);

createData();


