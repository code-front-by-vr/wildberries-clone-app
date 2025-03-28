import './swiper.js'
import '../scss/style.scss'

import {
    searchInputElement,
    cartButtonElement,
    productContainerElement,
    previewModalElement
} from './modules/variables.js'
import { fetchProducts, updateCartIcon } from './modules/helpers.js'
import {
    handleInputSearch,
    handleToggleCartModal,
    handleClickAddToCart,
    handleClickModalAdd
} from './modules/handlers.js'

fetchProducts()
updateCartIcon()

searchInputElement.addEventListener('input', handleInputSearch)
cartButtonElement.addEventListener('click', handleToggleCartModal)
productContainerElement.addEventListener('click', handleClickAddToCart)
previewModalElement.addEventListener('click', handleClickModalAdd)