import type { IProject } from "../types/data";
import scanImg from '../assets/images/scan.png';
import linksImg from '../assets/images/links.png';
import playerImg from '../assets/images/player.png';
import tetrisImg from '../assets/images/tetris.png';
import booksImg from '../assets/images/books.png';
import japanImg from '../assets/images/japan.png';
import repoImg from '../assets/images/repofinder.png';
import catsImg from '../assets/images/cats.png';

export const projects: IProject[] =  [
    {
        id: 1,
        title: 'СКАН',
        description: 'Разработал сервис по поиску публикаций о компании по его ИНН. Пользователь, введя ИНН интересующей его компании, и, добавив необходимые параметры для поиска, может увидеть, какие публикации делала компания за выбранный промежуток времени; Разработка: React, TypeScript, Redux-toolkit;',
        img: scanImg,
        link: 'https://kivavlad.github.io/Scan-service-ts/',
    },
    {
        id: 2,
        title: 'Короткие ссылки',
        description: 'Разработал приложение для создания коротких URL адресов. Пользователь может ввести любой ULR адрес и в ответ получит его сокращенную аналогию. Разработка: React.js, Redux-toolkit',
        img: linksImg,
        link: ' https://kivavlad.github.io/Shorter-links/'
    },
    {
        id: 3,
        title: 'Музыкальный плеер',
        description: 'Разработал музыкальный плеер для воспроизведения аудиофайлов с возможностью визуализации звуковых волн в реальном времени. Разработка: HTML, CSS, JavaScript',
        img: playerImg,
        link: 'https://kivavlad.github.io/music-player/'
    },
    {
        id: 4,
        title: 'Тетрис',
        description: 'Разработал классическую игру «Тетрис». Реализовал механику падающих фигур, их повороты и перемещения. Добавил систему счета и проверку на конец игры при достижении верхней границы. Разработка: HTML, CSS, JavaScript',
        img: tetrisImg,
        link: 'https://kivavlad.github.io/tetris-game/'
    },
    {
        id: 5,
        title: 'Google книги',
        description: 'Разработал приложение для поиска необходимых книг по названию с помощью Google API. Пользователь может в строке поиска ввести название книги и в ответе получить полученные результаты на свой запрос. Разработка: React.js, Redux-toolkit',
        img: booksImg,
        link: 'https://kivavlad.github.io/Google-books/'
    },
    {
        id: 6,
        title: 'Discover Amazing places in Japan',
        description: 'Сверстал лэндинг страницу сайта о путешествиях. Разработка: HTML, CSS, JavaScript',
        img: japanImg,
        link: 'https://kivavlad.github.io/Travel-landing-page/'
    },
    {
        id: 7,
        title: 'Repositories finder',
        description: 'Разработал SPA приложения, которое взаимодействует с GitHub API для поиска репозиториев. По введенному названию происходит поиск репозиториев. Данные выводятся в карточки ниже. При скролле до конца страницы происходит подгрузка данных. Разработка: React, TypeScript, Redux-toolkit',
        img: repoImg,
        link: 'https://kivavlad.github.io/repositories-finder/'
    },
    {
        id: 8,
        title: 'Кошачий пинтерест',
        description: 'Разработал SPA приложение, которое взаимодействует с https://thecatapi.com/ . У пользователя есть возвожность добавлять/удалять картинки в избранное, просматривать избранные картинки на отдельной страницы. При скролле до конца страницы происходит подгрузка картинок. Разработка: React, TypeScript, Redux-toolkit',
        img: catsImg,
        link: 'https://kivavlad.github.io/frontend-challenge/'
    }
]