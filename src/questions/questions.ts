import { images } from '../images/images'

export interface IQuestion {
  id: number,
  image: string,
  answers: Array<string>,
  correctAnswer: string
};

export const QUESTIONS: Array<IQuestion> = [
  {
    id: 1,
    image: images.im1_1,
    answers: ['облысеть', 'сломать спину', 'стать известным', 'постареть'], // 2
    correctAnswer: images.im1_2
  },
  {
    id: 2,
    image: images.im2_1,
    answers: ['люблю Наруто', 'небольшого роста', 'фанат анимы', 'коллекционирую мангу'], // 1
    correctAnswer: images.im2_2
  },
  {
    id: 3,
    image: images.im3_1,
    answers: ['Here we go again', 'May the force be with you', 'I\'ll be back', 'Hasta la vista, baby'], // 1
    correctAnswer: images.im3_2
  },
  {
    id: 4,
    image: images.im4_1,
    answers: ['42069', '4000', '3000', '2000'], // 2
    correctAnswer: images.im4_2
  },
  {
    id: 5,
    image: images.im5_1,
    answers: ['Сфоткай типа звезда', 'И играть на барабанах', 'Мой девиз по жизни', 'Обожаю креативные афишы'], // 4
    correctAnswer: images.im5_2
  },
  {
    id: 6,
    image: images.im6_1,
    answers: ['курильщика', 'для базы приехала!', 'здорового барабанщика', 'Золотая - мое любимое пиво!'], // 3
    correctAnswer: images.im6_2
  },
  {
    id: 7,
    image: images.im7_1,
    answers: ['...ая ты хорошка', 'ты радуешься концерту', 'я налажал в партии', 'ты подпеваешь'], // 1
    correctAnswer: images.im7_2
  },
  {
    id: 8,
    image: images.im8_1,
    answers: ['будут заказывать на корпоративах', 'кавер будет в тиктоках', 'номинируют на Гремми', 'будут петь во дворах'], // 4
    correctAnswer: images.im8_2
  },
  {
    id: 10,
    image: images.im10_1,
    answers: ['еще и музыкант...', 'в другом городе, что ты мне сделаешь?', 'не твой мужчина', 'за барабанами'], // 4
    correctAnswer: images.im10_2
  },
  {
    id: 11,
    image: images.im11_1,
    answers: ['сломал последнюю палочку', 'вдруг захотелось в туалет', 'вспомнил, что не выключил утюг', 'забыл свою партию'], // 1
    correctAnswer: images.im11_2
  },
  {
    id: 12,
    image: images.im12_1,
    answers: ['Словил паничку перед концертом', 'Разминаюсь перед выходом на сцену', 'Выпили пивка с #needshes', 'Разнашиваю новые штаны'], // 2
    correctAnswer: images.im12_2
  },
  {
    id: 13,
    image: images.im13_1,
    answers: ['Джон Бонэм', 'козявочка', 'звезда', 'красоточка'], // 4
    correctAnswer: images.im13_2
  },
  {
    id: 14,
    image: images.im14_1,
    answers: ['люблю обнимать столбы', 'нашел своих братьев', 'учусь позировать', 'рвусь к власти'], // 2
    correctAnswer: images.im14_2
  },
  {
    id: 15,
    image: images.im15_1,
    answers: ['What are your musical tastes?', 'What is your "Groove" face?', 'What is your "War" face?', 'What is your "Power" stance?'], // 2
    correctAnswer: images.im15_2
  }
]