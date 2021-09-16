//peticion 
export const getGif = async( category ) => {
    const url = `http://api.giphy.com/v1/gifs/search?q=${ encodeURI( category )}&limit=1&api_key=XIc0wxtTo74x8vfSCP39lZgqFyuohIRA`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => {
        return{
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    // console.log(gifs);
    return gifs;
    

}