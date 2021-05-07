import React from 'react'
import { MdEdit } from 'react-icons/md'
import {IconButton, Divider} from '@chakra-ui/react'
import useRequestData from '../../hooks/useRequestData'
import { useHistory } from 'react-router-dom'
import { goToEditProfilePage, goToEditAdressPage } from '../../routes/coordinator'
import { PageDiv,
        TextStyle,
        SubText, 
        HeaderText, 
        HeaderDiv,
        InfoDiv,
        Adressdiv,
        HistoryDiv, 
        CardsHistoryDiv,
        EditDiv,
        TextHistoryStyle } from './styled'

// import { Button, Box } from '@chakra-ui/react'
// import useRequestData from '../../hooks/useRequestData'
// import { useHistory } from 'react-router-dom'
// import { goToEditProfilePage, goToEditAdressPage } from '../../routes/coordinator'
// import Footer from '../../components/Footer/Footer'
// import { Container } from '../../components/Container/Container'
// import Header from '../../components/Header/Header'

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
    <PageDiv>
      <HeaderDiv>
        <HeaderText>Meu Perfil</HeaderText>
      </HeaderDiv>
      <InfoDiv>
        <EditDiv>
          <TextStyle >{profile.user && profile.user.name}</TextStyle> 
          <IconButton 
            bg={'none'} 
            onClick={() => goToEditProfilePage(history)} 
            icon={< MdEdit/>} />
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
              icon={< MdEdit/>} />
          </EditDiv>
          <TextStyle>{profile.user && profile.user.address}</TextStyle>
          
        </Adressdiv>
        <HistoryDiv>
          <TextHistoryStyle>Histórico de Pedidos</TextHistoryStyle>
        </HistoryDiv>
        <CardsHistoryDiv>

        </CardsHistoryDiv>
    </PageDiv>
//     <Container>
//       <Header text="Meu perfil" needHeader="true"/>
//       <p>{profile.user && profile.user.name}</p>
//       <p>{profile.user && profile.user.cpf}</p>
//       <p>{profile.user && profile.user.email}</p>
//       <Button  onClick={() => goToEditProfilePage(history)}>Editar perfil</Button>
//       <br /><br />

//       <b>Endereço: </b>
//       <p>{profile.user && profile.user.address}</p>
//       <Button  onClick={() => goToEditAdressPage(history)}>Editar endereço</Button>
//       <Footer activeAvatar='true'/>
//       <b>Histórico de pedidos</b> 
//       {listOrderHistory}
//       {/* onSubmit={(evt) => loginOrSignUp('login', form, history, evt) */}
//     </Container>
  )
}

export default ProfilePage
