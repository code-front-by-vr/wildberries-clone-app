import './swiper.js'
import '../scss/style.scss'

import {
    searchInputElement,
    cartButtonElement,
} from './modules/variables.js'
import { fetchProducts } from './modules/helpers.js'
import {
    handleInputSearch,
    handleToggleCartModal
} from './modules/handlers.js'

fetchProducts()

searchInputElement.addEventListener('input', handleInputSearch)
cartButtonElement.addEventListener('click', handleToggleCartModal)