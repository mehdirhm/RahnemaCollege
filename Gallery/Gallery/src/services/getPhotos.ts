
export const getPhotos = async (api: string) => {
    if(api === 'All') {
        const URL = 'https://frontend-gallery.darkube.app'
    const response = await fetch(`${URL}/api/photos`);
    const data = await response.json();
    return data;

    }
    const URL = 'https://frontend-gallery.darkube.app'
    const response = await fetch(`${URL}/api/categories/${api}/photos`);
    const data = await response.json();
    return data;
}