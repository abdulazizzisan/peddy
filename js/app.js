import * as ui from './ui.js'


export const loadCategories = () => {
    fetch('https://openapi.programming-hero.com/api/peddy/categories')
    .then(r => r.json())
    .then(json => ui.displayCategoryButtons(json.categories))
    .catch(e => console.log("error occurred: ", e))
}

