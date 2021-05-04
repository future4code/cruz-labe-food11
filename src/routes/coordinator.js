
export const gotoSignUpPage = (history) => {
    history.push('/cadastro')

}
export const goToLoginPage = (history) => {
    history.push('/login')
}

export const goToHomePage = (history) => {
    history.push('/')
}
export const goToProfilePage = (history) => {
    history.push('/perfil')
}
export const goToCartPage = (history) => {
    history.push('/carrinho')
}
export const goToRestaurantDetailsPage = (history, id) => {
    history.push(`/restaurante/${id}`)
}
