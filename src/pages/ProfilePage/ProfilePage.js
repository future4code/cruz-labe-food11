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
  TextHistoryStyle
} from './styled'

import { Box } from '@chakra-ui/react'
import Footer from '../../components/Footer/Footer'
import { Container } from '../../components/Container/Container'
import Header from '../../components/Header/Header'
import EditIcon from '../../components/EditIcon/EditIcon'

function ProfilePage() {
  const profile = useRequestData({}, 'profile')
  const ordersHistory = useRequestData({}, 'orders/history')
  const history = useHistory()

  const listOrderHistory = ordersHistory.orders && ordersHistory.orders.map((order) => {
    return <Box border={'1px solid black'}>
      <p>{order.restaurantName}</p>
      <p>R${order.totalPrice.toFixed(2)}</p>
    </Box>
  })

  return (

    <Container>
      <Header text="Meu perfil" />
      <PageDiv>
        <InfoDiv>
          <EditDiv>
            <TextStyle >{profile.user && profile.user.name}</TextStyle>
            <IconButton
              bg={'none'}
              onClick={() => goToEditProfilePage(history)}
              icon={<EditIcon />} />
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
              icon={<EditIcon />} />
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
      <Footer activeAvatar='true' />

    </Container>
  )
}

export default ProfilePage
