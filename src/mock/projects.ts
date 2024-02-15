import type { IProject } from "../types/data";
import { scanImg, linksImg, playerImg, tetrisImg, booksImg, repoImg } from "../assets/images/images"; 
import { cssIcon, htmlIcon, jsIcon, reactIcon, reduxIcon, sassIcon, tsIcon } from "../assets/icons/icons";

export const projects: IProject[] =  [
    {
        id: 1,
        title: 'СКАН',
        description: 'Разработал сервис по поиску публикаций о компании по его ИНН. Пользователь, введя ИНН интересующей его компании, и, добавив необходимые параметры для поиска, может увидеть, какие публикации делала компания за выбранный промежуток времени',
        img: scanImg,
        link: 'https://kivavlad.github.io/Scan-service-ts/',
        stack: [reactIcon, tsIcon, reduxIcon, sassIcon]
    },
    {
        id: 2,
        title: 'Короткие ссылки',
        description: 'Разработал приложение для создания коротких URL адресов. Пользователь может ввести любой ULR адрес и в ответ получит его сокращенную аналогию.',
        img: linksImg,
        link: ' https://kivavlad.github.io/Shorter-links/',
        stack: [reactIcon, jsIcon, reduxIcon, cssIcon],
    },
    {
        id: 3,
        title: 'Музыкальный плеер',
        description: 'Разработал музыкальный плеер для воспроизведения аудиофайлов с возможностью визуализации звуковых волн в реальном времени.',
        img: playerImg,
        link: 'https://kivavlad.github.io/music-player/',
        stack: [htmlIcon, cssIcon, jsIcon],
    },
    {
        id: 4,
        title: 'Тетрис',
        description: 'Разработал классическую игру «Тетрис». Реализовал механику падающих фигур, их повороты и перемещения. Добавил систему счета и проверку на конец игры при достижении верхней границы.',
        img: tetrisImg,
        link: 'https://kivavlad.github.io/tetris-game/',
        stack: [htmlIcon, cssIcon, jsIcon],
    },
    {
        id: 5,
        title: 'Google книги',
        description: 'Разработал приложение для поиска необходимых книг по названию с помощью Google API. Пользователь может в строке поиска ввести название книги и в ответе получить полученные результаты на свой запрос.',
        img: booksImg,
        link: 'https://kivavlad.github.io/Google-books/',
        stack: [reactIcon, jsIcon, reduxIcon, sassIcon],
    },
    {
        id: 6,
        title: 'Repositories finder',
        description: 'Разработал SPA приложения, которое взаимодействует с GitHub API для поиска репозиториев. По введенному названию происходит поиск репозиториев. Данные выводятся в карточки ниже. При скролле до конца страницы происходит подгрузка данных.',
        img: repoImg,
        link: 'https://kivavlad.github.io/repositories-finder/',
        stack: [reactIcon, tsIcon, reduxIcon, cssIcon],
    },
]