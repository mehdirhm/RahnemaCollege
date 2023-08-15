
export const getCategories = async () => {
    const URL = 'https://frontend-gallery.darkube.app'
    const response = await fetch(`${URL}/api/categories`);
    const data = await response.json();
    return data;
}