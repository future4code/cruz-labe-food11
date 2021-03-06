export const goToEditProfilePage = (history) => {
    history.push('/perfil/editar')
    
}

export const goToEditAdressPage = (history) => {
    history.push('/perfil/editar/endereco')
}

export const gotoSignUpPage = (history) => {
    history.push('/cadastro')

}
export const goToLoginPage = (history) => {
    history.push('/login')
}

export const goToHomePage = (history) => {
    history.push('/HomePage')
}
export const goToProfilePage = (history) => {
    history.push('/perfil')
}
export const goToCartPage = (history, id) => {
    history.push(`/carrinho/${id}`)
}
export const goToCartHomePage = (history) => {
    history.push(`/carrinho`)
}

export const goToRegisterAddressPage = (history) => {
    history.push('/cadastro/endereco')
}
export const goToRestaurantDetailsPage = (history, id) => {
    history.push(`/restaurante/${id}`)
}
