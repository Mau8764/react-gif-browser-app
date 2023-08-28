export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=xoG0nPZ4obUKBTtDTbvJj9w0KgMd6yho&q=${ category }&limit=10`
    const resp = await fetch(url)
    const { data = [] } = await resp.json()
    const gifs = data.map( ({ id, title, images:{ downsized:{ url } } }) => ({
        id: id,
        title: title,
        url: url
    }))

    return gifs;
}