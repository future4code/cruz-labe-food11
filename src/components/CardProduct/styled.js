import styled from 'styled-components'

export const CardItem = styled.div`
  margin: .5rem 0;
  border-radius: 10px;
  border: 1px solid #b8b8b8;
  display: flex;
  height: 9rem;
  border: 1px solid #b8b8b8;
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
  justify-content: center;
  width: 100%;
  height: 100%;
  position:relative;
`

export const NameProduct = styled.p`
  margin: 2rem 0 0 1rem;
  color: #e8222f;
  font-size: 1rem;
  font-weight: 500;
`
export const DescriptionProduct = styled.p`
  width: 90%;
  margin-left: 1rem;
  color: #b8b8b8;
  margin-top: .5rem;
  font-size:0.75rem;
`

export const Flex = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: auto;
`

export const Price = styled.p`
  margin: 0 0 1.2rem 1rem;
  font-size: 1rem;
  font-weight: 600;
`

export const Button = styled.button`
  align-self: flex-end;
  border: ${(props) => props.border};
  color: ${(props) => props.color};
  border-radius: 10px 0 10px 0;
  padding: .5rem 1.5rem;
`

//Provover
export const ContainerButton = styled.div `
  display: flex;
`
export const ButtonGroup = styled.div `
  text-align: right;
`
export const ButtonProvover = styled.button `
  color: #4f81a8;
  margin: 0 .5rem;
`
export const ButtonProvoverCancel = styled(ButtonProvover) `
  color: #000;
  margin: 0 .5rem;
`
export const Input = styled.input `
  border: 1px solid #b8b8b8;
  padding: .8rem;
  margin: .8rem;
`