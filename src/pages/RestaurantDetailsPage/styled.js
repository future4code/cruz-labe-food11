import styled from 'styled-components'

// Página
export const Main = styled.main`
  margin: 4rem;
`

// Card Restaurante
export const CardRestaurant = styled.div`
  border-radius: 30px 30px 0 0;
  margin-bottom: 1.5rem;
`
export const Image = styled.img`
  border-radius: 30px 30px 0 0;
  width: 100%;
`
export const NameRestaurant = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  color: #e8222f;
  margin-top: .75rem;
`

const description = styled.p`
  font-size: 1.3rem;
  margin: 0.1rem 0;
  color: #b8b8b8;
`

export const Category = styled(description)``

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 75%;
`

export const DeliveryTime = styled(description)``
export const Shipping = styled(description)``
export const Address = styled(description)``


// Cardápio
export const Title = styled.p`
  width: 100%;
  padding: .2rem 0;
  margin-bottom: .5rem;
  font-weight: 500;
  font-size: 1.2rem;
  border-bottom: 1px solid rgb(0, 0, 0);
  
`


export const ButtonCart = styled.button `
  background: #e8222f;
  border-radius: 100%;
  position: fixed;
  bottom: 3rem;
  right: 3rem;
  padding: .5rem;
  color: white;

  &:hover{
    background: rgba(190, 26, 38);
    transform: scale(1.1)
  }

  &:active{
    background: #e8222f;
    transform: scale(1)
  }
`
