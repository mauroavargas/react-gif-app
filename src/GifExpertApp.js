import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Sailor Moon']);

    // const handleAdd = () => {
    //     // setCategories( [...categories, 'Sailor Moon'] ); 
    //     setCategories( cats => [...cats, 'Sailor Moon'] );
    // }

    return (
        <>
            <h1>Gif Expert App</h1>
            <hr />

            <h2>Categories</h2>
            <AddCategory setCategories={setCategories} />
            
            <div>
                {
                    categories.map( category => (
                        <GifGrid
                            key={category}
                            category={category} />
                    ))
                }
            </div>
        </>
    )
}