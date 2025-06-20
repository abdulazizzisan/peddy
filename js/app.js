import * as ui from './ui.js'


export const loadCategories = () => {
    fetch('https://openapi.programming-hero.com/api/peddy/categories')
        .then(r => r.json())
        .then(json => ui.displayCategoryButtons(json.categories))
        .catch(e => console.log("error occurred: ", e))
}

export function loadDeals(endpoint = 'pets', sorted = false) {
    fetch(`https://openapi.programming-hero.com/api/peddy/${endpoint}`)
        .then(res => res.json())
        .then((json) => {
            ui.clearBestDeal()

            let pets = json.pets ? json.pets : json.data
            if (sorted === true) {
                pets = pets.sort((a, b) => {
                    if (parseInt(a.price) < parseInt(b.price)) return -1;

                    if (parseInt(a.price) > parseInt(b.price)) return 1;

                    return 0;
                })
            }
            pets.forEach(pet => {
                console.log(pet);
                ui.addBestDealCard(pet)
            });
            return pets;
        })
        .then(pets => {
            document.querySelectorAll('.modal-btn').forEach((btn, index) => {
                console.log(btn);
                btn.addEventListener('click', () => {
                    ui.showModal(pets[index])
                })
            })
            document.querySelectorAll('.like-btn').forEach((btn, index) => {
                console.log(btn);
                btn.addEventListener('click', () => {
                    ui.addToFav(pets[index])
                })
            })
        })
        .catch((err) => {
            console.error("Error:::: ", err);
        })
}

document.getElementById('sort').addEventListener('click', () => {
    if (document.querySelectorAll('.clicked').length != 0) {
        const category = document.querySelector('.clicked').children[1].innerText
        console.log(category);
        loadDeals(`category/${category}`, true)
        return;
    }

    loadDeals('pets', true)
})