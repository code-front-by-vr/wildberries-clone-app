import * as bootstrap from 'bootstrap'

const data = {
    products: []
}

const currentDiscount = 20

const searchInputElement = document.querySelector('#searchInput')
const productContainerElement = document.querySelector('.main-page__content')

// Bootstrap5 Modals
// Cart modal
const cartButtonElement = document.querySelector('.basket__link')
const cartModalElement = document.querySelector('#cartModal')
const cartModal = bootstrap.Modal.getOrCreateInstance(cartModalElement)

// Product preview modal
const previewModalElement = document.querySelector('#productModal')
const previewModal = bootstrap.Modal.getOrCreateInstance(previewModalElement)

export {
    currentDiscount,
    data,
    searchInputElement,
    productContainerElement,
    cartButtonElement,
    cartModal,
    previewModal
}