import {
    data,
    cartModal
} from './variables.js'
import { renderProducts } from './helpers.js'

function handleInputSearch({ target }) {
    const string = target.value.toLowerCase()
    const filteredProducts = data.products.filter(product => {
        return product.title.toLowerCase().includes(string) || product.category.toLowerCase().includes(string)
    })
    renderProducts(filteredProducts)
}

function handleToggleCartModal() {
    cartModal.toggle()
}

export { handleInputSearch, handleToggleCartModal }