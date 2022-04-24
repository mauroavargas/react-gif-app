import { useState, useEffect } from "react"
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {

    const [loading, setLoading] = useState({
        data: [],
        loading: true
    })

    useEffect( () => {
        getGifs( category )
            .then( imgs => {
                setLoading({
                    data: imgs,
                    loading: false                
                })
            } )
    }, [category])

    return loading; // { data: [], loading: true }

}