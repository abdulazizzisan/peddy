export const displayCategoryButtons = (categories) => {
    const container = document.getElementById('buttons-container')
    categories.forEach(category => {
        const btn = document.createElement('button')
        btn.classList = 'btn ctg-btn w-fit h-fit text-xl px-5 py-2 bg-transparent border-gray-300'

        btn.innerHTML = `
            <img src="${category.category_icon}" alt="" class="size-[1.5rem]"> ${category.category}
        `

        btn.addEventListener('click', () => {
            clearButtonStyle()
            btn.classList = 'btn ctg-btn w-fit h-fit text-xl px-5 py-2 clicked rounded-3xl border-gray-300'
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
