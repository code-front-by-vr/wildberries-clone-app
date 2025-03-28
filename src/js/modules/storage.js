import { storageKey } from './variables.js'

function getDataFromStorage() {
    const data = localStorage.getItem(storageKey)
    return data ? JSON.parse(data) : []
}

function setDataToStorage(product) {
    localStorage.setItem(storageKey, JSON.stringify(product))
}

export { getDataFromStorage, setDataToStorage }