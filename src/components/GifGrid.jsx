import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

import "../styles/loader.css"




export const GifGrid = ({ category }) => {


    const { images, isLoading} = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && (<span className="loader"></span>)
            }
            <div className="card-grid">
                {
                    images.map((image) => (
                        <GifItem
                            key={image.id}
                            { ...image }
                        />
                        //<li key={ id }> { title } </li>
                    ))
                }
            </div>
        </>
    )
}
