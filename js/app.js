import * as ui from './ui.js'


export const loadCategories = () => {
    fetch('https://openapi.programming-hero.com/api/peddy/categories')
    .then(r => r.json())
    .then(json => ui.displayCategoryButtons(json.categories))
    .catch(e => console.log("error occurred: ", e))
}

export async function loadDeals(endpoint = 'pets'){
    try{
    const res = await fetch(`https://openapi.programming-hero.com/api/peddy/${endpoint}`)
    const json = await res.json()
    // console.log(json);
    ui.clearBestDeal()
    const pets = json.pets?json.pets:json.data
    pets.forEach(pet => {
        console.log(pet);
        ui.addBestDealCard(pet)
    });
    }catch(err){
        console.error("Error:::: ", err);
    }
}