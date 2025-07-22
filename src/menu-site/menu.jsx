import React, { useState } from "react";
import SearchPanel from "./search-panel-site/search-panel";
import "./menu.css"
import List from "./list-site/list.jsx";
import Icon from "./icon-brand-site/icon-brand";
import NetFlix from "../assets/netflix.svg";
import Find from "./find-site/find";
let GetCinema = () => {
    const Cinema = [
        "Вестерны",
        "Семейные",
        "Фэнтези",
        "Биографические",
        "Арт-хаус",
        "Боевики",
        "Военные",
        "Детективы",
        "Криминал",
        "Приключения",
        "Драмы",
        "Спортивные",
        "Фантастика",
        "Комедии",
        "Мелодрамы",
        "Триллеры",
        "Ужасы",
        "Мюзиклы",
        "Музыкальные",
        "Исторические",
        "Документальные",
        "Эротика",
        "Детские",
        "Путешествия",
        "Познавательные",
        "Театр",
        "Концерт",
        "Стендап",
        "Короткометражные",
        "Русские",
        "Украинские",
        "Зарубежные"
    ];
    return Cinema;
}
let GetSerials = () => {
    const genres = [
        "Военные",
        "Боевики",
        "Арт-хаус",
        "Триллеры",
        "Ужасы",
        "Приключения",
        "Семейные",
        "Фантастика",
        "Фэнтези",
        "Драмы",
        "Мелодрамы",
        "Спортивные",
        "Комедии",
        "Детективы",
        "Криминал",
        "Исторические",
        "Биографические",
        "Вестерны",
        "Документальные",
        "Музыкальные",
        "Реальное ТВ",
        "Телепередачи",
        "Стендап",
        "Эротика",
        "Русские",
        "Украинские",
        "Зарубежные"
    ];
    return genres;
}

let GetCartoons = () => {
    return [
        "Фантастика",
        "Фэнтези",
        "Боевики",
        "Биографические",
        "Комедии",
        "Вестерны",
        "Военные",
        "Драмы",
        "Мелодрамы",
        "Арт-хаус",
        "Детективы",
        "Криминал",
        "Триллеры",
        "Исторические",
        "Документальные",
        "Эротика",
        "Сказки",
        "Семейные",
        "Ужасы",
        "Приключения",
        "Спортивные",
        "Познавательные",
        "Мюзиклы",
        "Аниме",
        "Детские",
        "Для взрослых",
        "Мультсериалы",
        "Короткометражные",
        "Полнометражные",
        "Советские",
        "Русские",
        "Украинские",
        "Зарубежные"
    ];

}
let GetAnime = () => {
    return [
        "Военные",
        "Драмы",
        "Детективы",
        "Триллеры",
        "Комедии",
        "Фантастика",
        "Фэнтези",
        "Приключения",
        "Романтические",
        "Исторические",
        "Ужасы",
        "Мистические",
        "Музыкальные",
        "Эротика",
        "Боевики",
        "Боевые искусства",
        "Самурайский боевик",
        "Спортивные",
        "Образовательные",
        "Повседневность",
        "Пародия",
        "Школа",
        "Детские",
        "Сказки",
        "Кодомо",
        "Сёдзё-ай",
        "Сёдзё",
        "Сёнэн",
        "Сёнэн-ай",
        "Этти",
        "Махо-сёдзё",
        "Меха"
    ];

}
let Arrow = ({ styleData }) => {

    return <span style={styleData} className="arrow-menu" ></span>
}

let GetStyle = (action) => {
    let styleData = {
        display: "inline-block",
        transform: action() ? "rotate(180deg)" : "rotate(360deg)"
    }
    return styleData;
}

let Panel = ({ checkShowFunction, listCategory, children }) => {
    return (<div className={`cinema ${checkShowFunction() ? "hide-menu" : ""}`}>
        <div className="category">
            <div className="list-category">
                <List items={listCategory} />
            </div>
            <div className="logo-category">
                {children}
            </div>
        </div>
        <div>
            <SearchPanel />
        </div>


    </div>);
}
let showFindTool = () => {
    let menu = document.querySelector(".menu-item");
    if (!menu.classList.contains("showFindTool"))
        menu.classList.add("showFindTool");

}
let hideFindTool = () => {
    let menu = document.querySelector(".menu-item");
    if (menu.classList.contains("showFindTool"))
        menu.classList.remove("showFindTool");
}
let Menu = () => {
    const [obj, setHovered] = useState({ cinema: true, serials: true, cartoons: true, anime: true });

    return <div className="menu">
        <ul className="menu-item">
            <li onMouseLeave={() => setHovered({ cinema: true, serials: true, cartoons: true, anime: true })}
                onMouseEnter={() => setHovered({ cinema: false, serials: true, cartoons: true, anime: true })}>
                <p className="cinema-item item-menu">Фильмы<Arrow styleData={GetStyle(() => obj.cinema)} /></p>
                <Panel checkShowFunction={() => obj.cinema}
                    listCategory={GetCinema()}>
                    <Icon pathToUri={NetFlix} width="87" heigth="25" />
                </Panel>
            </li>
            <li onMouseLeave={() => setHovered({ cinema: true, serials: true, cartoons: true, anime: true })}
                onMouseEnter={() => setHovered({ cinema: true, serials: false, cartoons: true, anime: true })}>
                <p className="serials-item item-menu">Сериалы<Arrow styleData={GetStyle(() => obj.serials)} /></p>
                <Panel checkShowFunction={() => obj.serials}
                    listCategory={GetSerials()}>
                    <Icon pathToUri={NetFlix} width="87" heigth="25" />
                </Panel>
            </li>
            <li onMouseLeave={() => setHovered({ cinema: true, serials: true, cartoons: true, anime: true })}
                onMouseEnter={() => setHovered({ cinema: true, serials: true, cartoons: false, anime: true })}>
                <p className="cartoons-item item-menu">Мультфильмы<Arrow styleData={GetStyle(() => obj.cartoons)} />
                </p>
                <Panel checkShowFunction={() => obj.cartoons}
                    listCategory={GetCartoons()}>
                    <Icon pathToUri={NetFlix} width="87" heigth="25" />
                </Panel>
            </li>
            <li onMouseLeave={() => setHovered({ cinema: true, serials: true, cartoons: true, anime: true })}
                onMouseEnter={() => setHovered({ cinema: true, serials: true, cartoons: true, anime: false })}>
                <p className="anime-item item-menu">Аниме<Arrow styleData={GetStyle(() => obj.anime)} /></p>
                <Panel checkShowFunction={() => obj.anime}
                    listCategory={GetAnime()}>
                    <Icon pathToUri={NetFlix} width="87" heigth="25" />
                </Panel>
            </li>
            <li>
                <a className="item-menu">Новинки</a>
            </li>
            <li>
                <a className="item-menu">Анонсы</a>
            </li>
            <li>
                <a className="item-menu">Подборки</a>
            </li>
        </ul>
        <div className="find-tool">
            <Find findTool={showFindTool} hideTool={hideFindTool} />
        </div>
    </div>
}
export default Menu;





