export const getGifs = async (category) => {

    const url = `http://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=JQAryVjVsSi2I9AyguXwKLZ8vHT52lMu`;

    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.fixed_width_downsampled.url
        }
    } )

    return gifs;
    
}