import { loadDeals } from "./app.js";

export const displayCategoryButtons = (categories) => {
    const container = document.getElementById('buttons-container')
    categories.forEach(category => {
        const btn = document.createElement('button')
        btn.classList = 'btn ctg-btn w-fit h-fit text-xl px-5 py-2 bg-transparent border-gray-300'

        btn.innerHTML = `
            <img src="${category.category_icon}" alt="" class="size-[1.5rem]"> <span>${category.category}<span />
        `

        btn.addEventListener('click', () => {
            clearButtonStyle()
            btn.classList = 'btn ctg-btn w-fit h-fit text-xl px-5 py-2 clicked rounded-3xl border-gray-300'
            loadDeals(`category/${category.category}`)
        })

        container.appendChild(btn)
    });
}

const clearButtonStyle = () => {
    const buttons = document.querySelectorAll('.ctg-btn')

    buttons.forEach((button) => {
        button.classList = 'btn ctg-btn w-fit h-fit text-xl px-5 py-2 bg-transparent border-gray-300'
    })
}

export function clearBestDeal() {
    document.getElementById('deals').innerHTML = ''
}

export function addBestDealCard(pet) {
    const container = document.getElementById('deals')
    const card = document.createElement('div')

    card.classList = 'card bg-base-100 w-96 shadow-sm'
    card.innerHTML = `
                            <figure class="h-1/3">
                                <img class="object-fill" src="${pet.image}"
                                    alt="Shoes" />
                            </figure>
                            <div class="card-body">
                                <h2 class="card-title">${pet.pet_name}</h2>
                                <p>Breed: ${pet.breed}</p>
                                <p>Birth: ${pet.date_of_birth}</p>
                                <p>Gender: ${pet.gender}</p>
                                <p>Price: ${pet.price}$</p>
                                <div class="card-actions justify-between">
                                    <button class="btn like-btn btn-outline"><img class="size-7" src="https://img.icons8.com/?size=50&id=24816&format=png" alt=""></button>
                                    <div>
                                    <button class="btn btn-outline">Adopt</button>
                                    <button class="btn modal-btn btn-outline" >Details</button>
                                    </div>
                                </div>
                            </div>
    `
    container.appendChild(card)
}

export function showModal(pet){
    document.getElementById('my_modal_1').innerHTML = `
                <div class="modal-box">
                <img class='mx-auto' src="${pet.image}">
            <h3 class="text-lg font-bold">${pet.pet_name}</h3>
            <p class="py-4">${pet.pet_details}</p>
            <div class="modal-action">
                <form method="dialog">
                    <!-- if there is a button in form, it will close the modal -->
                    <button class="btn">Close</button>
                </form>
            </div>
        </div>
    `

    my_modal_1.showModal()
}

export function addToFav(pet){
    const image = document.createElement('img')
    image.src = pet.image
    image.classList = 'mb-0 p-0'

    document.getElementById('liked').appendChild(image)
}