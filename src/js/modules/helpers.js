import {
    currentDiscount,
    data,
    productContainerElement,
    previewModal
} from './variables.js'

async function fetchProducts() {
    try {
        const response = await fetch('https://fakestoreapi.com/products?limit=20')
        if (!response.ok) {
            throw new Error(`Ошибка загрузки: ${response.status}`)
        }
        data.products = await response.json()
        renderProducts(data.products)
        addPreviewListeners()
    } catch (error) {
        console.error('Ошибка получения данных с сервера: ', error)
    }
}

function renderProducts(products) {
    productContainerElement.innerHTML = ''
    const html = products.reduce((acc, product) => acc + buildProductCard(product), '')
    productContainerElement.innerHTML = html
}

function addPreviewListeners() {
    const previewButtonElements = document.querySelectorAll('.product-card__button-preview')
    previewButtonElements.forEach(button => {
        button.addEventListener('click', function ({ target }) {
            const productId = target.closest('.product-card').dataset.id
            const product = data.products.find(p => p.id == productId)
            if (product) {
                openPreviewModal(product)
            }
        })
    })
}

function openPreviewModal({ title, image, price, description }) {
    const discountedPrice = calcDiscountedPrice(price, currentDiscount)
    // Fill modal fields with product data
    document.querySelector('#productModalLabel').textContent = title
    document.querySelector('.product-modal__image').src = image
    document.querySelector('.product-modal__description').textContent = description
    document.querySelector('.product-modal__price').textContent = `$${discountedPrice}`

    previewModal.toggle()
}

function calcDiscountedPrice(price, discountPercentage) {
    const discount = (price * discountPercentage) / 100
    return (price - discount).toFixed(2)
}

function buildProductCard({ id, title, image: url, price, category, discount = currentDiscount }) {
    const discountedPrice = calcDiscountedPrice(price, discount)
    return `
        <article class="main-page__product product-card" data-id="${id}">
            <div class="product-card__wrapper">
            <div class="product-card__img">
                <div class="product-card__img-wrapper">
                <img src="${url}" alt="product-img" />
                </div>
                <button
                class="product-card__button product-card__button-preview"
                >
                Быстрый просмотр
                </button>
                <span class="product-card__discount">-${discount}%</span>
            </div>
            <div class="product-card__info">
                <div class="product-card__prices">
                <div class="product-card__prices-new">$${discountedPrice}</div>
                <div class="product-card__prices-old">$${price}</div>
                </div>
                <h5 class="product-card__title">${title}</h5>
                <div>
                    <div class="product-card__category">${category}</div>
                    <button class="product-card__buy">В корзину</button>
                </div>
            </div>
            </div>
        </article>
    `
}

export { renderProducts, fetchProducts }