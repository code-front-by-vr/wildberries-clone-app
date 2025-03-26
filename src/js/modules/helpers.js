import { productContainerElement } from './variables.js'

async function fetchProducts() {
    try {
        const response = await fetch('https://fakestoreapi.com/products?limit=20')
        if (!response.ok) {
            throw new Error(`Ошибка загрузки: ${response.status}`)
        }
        const products = await response.json()
        renderProducts(products)
    } catch (error) {
        alert('Ошибка получения данных с сервера: ', error)
    }
}

function renderProducts(products) {
    productContainerElement.innerHTML = ''
    const html = products.reduce((acc, product) => acc + buildProductCard(product), '')
    productContainerElement.innerHTML = html
}

function calcDiscountedPrice(price, discountPercentage) {
    const discount = (price * discountPercentage) / 100
    return (price - discount).toFixed(2)
}

function buildProductCard({ id, title, image: url, price, category, discount = 10 }) {
    const discountedPrice = calcDiscountedPrice(price, discount)
    return `
        <article data-id="${id}" class="main-page__product product-card">
            <div class="product-card__wrapper">
            <div class="product-card__img">
                <div class="product-card__img-wrapper">
                <img src="${url}" alt="product-img" />
                </div>
                <button
                class="product-card__button product-card__button-preview"
                data-bs-toggle="modal"
                data-bs-target="#productModal"
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

export { fetchProducts }