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


function ProfilePage() {
  const profile = useRequestData({}, 'profile')
  const history = useHistory() 

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
  )
}

export default ProfilePage
