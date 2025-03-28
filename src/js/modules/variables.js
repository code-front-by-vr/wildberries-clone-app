import * as bootstrap from 'bootstrap'
import { getDataFromStorage } from './storage.js'

const data = {
    products: []
}

const storageKey = 'cart'
const cart = getDataFromStorage()

const currentDiscount = 20

const searchInputElement = document.querySelector('#searchInput')
const productContainerElement = document.querySelector('.main-page__content')
const cartIconElement = document.querySelector('.basket__notify')

// Bootstrap5 Modals
// Cart modal
const cartButtonElement = document.querySelector('.basket__link')
const cartModalElement = document.querySelector('#cartModal')
const cartModal = bootstrap.Modal.getOrCreateInstance(cartModalElement)

// Product preview modal
const previewModalElement = document.querySelector('#productModal')
const previewModal = bootstrap.Modal.getOrCreateInstance(previewModalElement)

export {
    data,
    cart,
    storageKey,
    currentDiscount,
    searchInputElement,
    productContainerElement,
    cartIconElement,
    cartButtonElement,
    cartModal,
    previewModalElement,
    previewModal
}