import React from "react";
import videos from "../../json/db.json";
import Card from "../../components/Card";
import { useFavoriteContext } from "../../contexts/Favorites";

function Favoritos() {
    const { favorite } = useFavoriteContext()
    return (
        <section>
            <h2>Meus Favoritos</h2>
            {favorite.map((video) => <Card 
                key={video.id} 
                id={video.id} 
                link={video.link} 
                titulo={video.titulo}
                autor={video.autor}
                categoria={video.categoria}
                assunto={video.assunto}
            />)}
        </section>
    )
}

export default Favoritos