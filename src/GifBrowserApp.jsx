import { useState } from "react"
import { AddCategory, GifGrid} from "./components";

export const GifBrowserApp = () => {

    const [categories, setCategories] = useState(["Dragon ball"]);

    const onAddCategory = (newCategory) => {
        //console.log(newCategory)
        if (categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories])
        //setCategories( cat => [...cat, "Naruto"] )
    }
    return (
        <>
            <h1>Gif Browser App</h1>
            <AddCategory
                //setCategories={ setCategories }
                onNewCategory={(value) => onAddCategory(value)}
            />


            {
                categories.map((category) => (
                    <GifGrid
                        key={category}
                        category={category}
                    />
                ))
            }


        </>
    )
}
