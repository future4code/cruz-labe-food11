import React from 'react'
import { IconButton } from '@chakra-ui/react'
import useRequestData from '../../hooks/useRequestData'
import { useHistory } from 'react-router-dom'
import { goToEditProfilePage, goToEditAdressPage } from '../../routes/coordinator'
import {
  PageDiv,
  TextStyle,
  SubText,
  InfoDiv,
  Adressdiv,
  HistoryDiv,
  CardsHistoryDiv,
  EditDiv,
  TextHistoryStyle,
  ContainerOrder,
  TitleOrder,
  DateOrder,
  TotalValueOrder
} from './styled'

import { Box } from '@chakra-ui/react'
import Footer from '../../components/Footer/Footer'
import { Container } from '../../components/Container/Container'
import Header from '../../components/Header/Header'
import EditIcon from '../../components/EditIcon/EditIcon'
import Loading from '../../components/Loading/Loading'

function ProfilePage() {
  const profile = useRequestData({}, 'profile')
  const ordersHistory = useRequestData([], 'orders/history')
  const history = useHistory()

  const listOrderHistory = ordersHistory.orders && ordersHistory.orders.map((order) => {
    const date = new Date(order.createdAt)
    const day = date.getDate()
    const month = date.getMonth()
    const year = date.getFullYear()

    return <ContainerOrder >
      <TitleOrder>{order.restaurantName}</TitleOrder>
      <TotalValueOrder>data do pedido: {day} {month} {year}</TotalValueOrder>
      <DateOrder>SUBTOTAL R${order.totalPrice.toFixed(2)}</DateOrder>
    </ContainerOrder>
  })

  return (

    <Container>
      <Header text="Meu perfil" />
      {!profile.user ? <Loading /> :
        <PageDiv>
          <InfoDiv>
            <EditDiv>
              <TextStyle >{profile.user && profile.user.name}</TextStyle>
              <IconButton
                bg={'none'}
                onClick={() => goToEditProfilePage(history)}
                icon={< EditIcon />}
              />
            </EditDiv>
            <TextStyle>{profile.user && profile.user.email}</TextStyle>
            <TextStyle >{profile.user && profile.user.cpf}</TextStyle>

          </InfoDiv>
          <Adressdiv>
            <EditDiv>
              <SubText >  Endereço Cadastrado: </SubText>
              <IconButton
                bg={'none'}
                onClick={() => goToEditAdressPage(history)}
                icon={< EditIcon />}
              />
            </EditDiv>
            <TextStyle>{profile.user && profile.user.address}</TextStyle>

          </Adressdiv>
          <HistoryDiv>
            <TextHistoryStyle>Histórico de Pedidos</TextHistoryStyle>
          </HistoryDiv>
          <CardsHistoryDiv>
            {listOrderHistory}

          </CardsHistoryDiv>
        </PageDiv>
      }

      <Footer activeAvatar='true' />
    </Container>
  )
}

export default ProfilePage
