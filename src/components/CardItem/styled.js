


import styled from 'styled-components'

export const Main = styled.main`
`
export const CardItem = styled.div`
  margin: .5rem 0;
  border-radius: 10px;
  border: 1px solid #b8b8b8;
  display: flex;
  height: 9rem;
`
export const ImageItem = styled.img`
  width: 35%;
  object-fit: cover;
  object-position: center;
  border-radius: 10px 0 0 10px;
`
export const ContainerInfoProducts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`

export const NameProduct = styled.p`
  margin: 2rem 0 0 1rem;
  color: #e8222f;
  font-size: 1rem;
  font-weight: 500;
`
export const Quantity = styled.p`
  color: #e8222f;
  font-size: 1.5rem;
  font-weight: 500;
  border: 1px solid #e8222f;
  border-radius: 0 10px 0 10px;
  padding: .5rem .8rem;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const DescriptionProduct = styled.p`
  width: 90%;
  margin: 0 0 .8rem 1rem;
  color: #b8b8b8;
  font-size:0.75rem;
`

export const Flex = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  /* margin-top: auto; */
`

export const Price = styled.p`
  margin: 0 0 1.2rem 1rem;
  font-size: 1rem;
  font-weight: 600;
`

export const Button = styled.button`
  align-self: flex-end;
  border: 1px solid #e8222f;
  color: #e8222f;
  border-radius: 10px 0 10px 0;
  padding: .5rem 1.5rem;
`
export const ContainerButton = styled.div`
  text-align: right;
`
export const Text = styled.p`
  color: #b8b8b8;
  margin: .5rem 0;

`

export const DeliveryAdress = styled.div`
  margin-bottom: 1.8rem;
`

export const Adress = styled.p`
  font-weight: 600;
`

export const NameRestaurant = styled.p`
  font-weight: 600;
  color: #e8222e;
`

export const Shipping = styled.p`
  font-weight: bold;
  text-align: right;
  margin: .8rem 0;
`

export const Subtotal = styled.p`
  color: #e8222e;
  font-weight: 600;
  margin: .8rem 0;
  font-size: 1.3rem;

  display: flex;
  justify-content: space-between;
`

export const SubtotalText = styled.span`
  font-size: 1rem;
  color: #000;
  font-weight: bold;
`

export const TitlePayment = styled.p`
  width: 100%;
  padding: .2rem 0;
  margin: 1rem 0;
  font-weight: 500;
  border-bottom: 1px solid rgb(0, 0, 0);
  font-size: 1.2rem;

`

export const FormOfPayment = styled.form`
  color: #000;

  display: flex;
  flex-direction: column;
`
export const RadioGroup = styled.div`
  margin: .2rem;
`
export const Radio = styled.input`
  margin-right: .5rem;
`

export const ButtonConfirm = styled.button`
  margin-top: 1.5rem;
  background: #e8222e;
  padding: .8rem;
  width: 100%;
  &:disabled{
    background-color: rgba(232, 34, 46, 0.5);
    
  }
`

export const CenteredP = styled.p`
text-align:center;
`

