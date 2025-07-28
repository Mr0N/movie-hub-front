import React, { useState } from "react";
import "./card-site.css";
import preview from "../../assets/preview.svg";
import anime from "../../assets/card/anime.svg"
import cartoons from "../../assets/card/cartoons.svg"
import movies from "../../assets/card/movies.svg"
import serials from "../../assets/card/serials.svg"
let Anime = () => {
    return <div className="card-block">
        <p>Аниме</p>
        <img className="card-icon-data" src={anime}></img>
    </div>
}
let Cartoons = () => {
    return <div className="card-block">
        <p>Мультфильмы</p>
        <img className="card-icon-data" src={cartoons}></img>
    </div>
}
let Serials = () => {
    return <div className="card-block">
        <p>Сериалы</p>
        <img className="card-icon-data" src={serials}></img>
    </div>
}
let Movies = () => {
    return <div className="card-block">
        <p>Фильм</p>
        <img className="card-icon-data" src={movies}></img>
    </div>
}
let AnimeCard = ({ backgroundImg }) => {
    return <Card backgroundImg={backgroundImg} BlockData={Anime} />
}
let CartoonsCard = ({ backgroundImg }) => {
    return <Card backgroundImg={backgroundImg} BlockData={Cartoons} />
}
let SerialsCard = ({ backgroundImg }) => {
    return <Card backgroundImg={backgroundImg} BlockData={Serials} />
}
let MoviesCard = ({ backgroundImg }) => {
    return <Card backgroundImg={backgroundImg} BlockData={Movies} />
}

let Card = ({ backgroundImg, BlockData }) => {
    let [objShow, setShow] = useState(false);
    let [objViewTrailer, setViewTrailer] = useState(false);
    return <div
        style={{ height:"250px",width:"166px",backgroundImage:`url(${backgroundImg})` }}
        className="card-container" onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
         
            <div className="card-header">
                <BlockData />
            </div>
            <div className="card-trailer" onMouseLeave={() => setViewTrailer(false)} >
                <div className={objViewTrailer ? "card-opacity" : ""} onMouseEnter={() => setViewTrailer(true)} className="card-header-icon-trailer">
                    <img className="card-icon-trailer" src={preview}></img>
                </div>
                <div class={objViewTrailer ? "card-trailer-site card-opacity" : "card-trailer-site card-hide"}>
                    <p style={{
                        textTransform: "upper",
                        color: "white",
                        fontSize: "10px"
                    }} >Смотреть трейлер</p>
                </div>
            </div>
            <div className="card-icon">
                <img className={`card-icon-img ${!objShow ? "card-hide" : ""}`} src={preview}></img>
            </div>
            <div className="card-footer">4</div>
    </div>
}

export { MoviesCard, SerialsCard, AnimeCard, CartoonsCard };