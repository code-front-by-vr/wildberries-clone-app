import {
    data,
    cart,
    cartModal,
    previewModalElement,
    previewModal
} from './variables.js'
import {
    renderProducts,
    updateCartIcon,
    updateButtonStyle
} from './helpers.js'
import { setDataToStorage } from './storage.js'

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

function handleClickAddToCart({ target }) {
    if (target.dataset.role !== 'add-to-cart') return
    const { id } = target.closest('.product-card').dataset
    const targetCard = data.products.find(p => p.id == id)

    if (!cart.some(item => item.id === targetCard.id)) {
        cart.push(targetCard);
        setDataToStorage(cart)
        updateCartIcon()
        updateButtonStyle(target)
    }
}

function handleClickModalAdd({ target }) {
    if (target.dataset.role !== 'add-to-cart') return

    const productId = Number(previewModalElement.dataset.productId)
    const product = data.products.find(item => item.id === productId);

    if (product && !cart.some(item => item.id === productId)) {
        cart.push(product);
        setDataToStorage(cart);
        updateCartIcon();
    }

    //Change product buy button on main page
    const productCard = document.querySelector(`.product-card[data-id="${productId}"]`)
    if (productCard) {
        const productCardButton = productCard.querySelector('[data-role="add-to-cart"]');
        if (productCardButton) {
            updateButtonStyle(productCardButton);
        }
    }
    previewModal.hide();
}

export { handleInputSearch, handleToggleCartModal, handleClickAddToCart, handleClickModalAdd }