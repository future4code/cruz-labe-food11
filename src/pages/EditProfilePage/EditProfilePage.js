import React from 'react'
import { HeaderDiv, HeaderText, PageDiv, StyledBackButton} from './styled'
import {IconButton} from '@chakra-ui/react'
import { Container } from '../../components/Container/Container'
import Header from '../../components/Header/Header'
import EditProfileForm from './EditProfileForm'
import { IoIosArrowBack } from "react-icons/io"
import { useHistory } from 'react-router-dom'

import {goToProfilePage} from '../../routes/coordinator'


function EditProfilePage() {
  const history = useHistory() 
  return (
    <PageDiv>
      <HeaderDiv>
        <StyledBackButton>
        <IconButton
              bg={'white'} 
              onClick={() => goToProfilePage(history)}   
              icon={< IoIosArrowBack/>} />
        </StyledBackButton>
        <HeaderText> Editar Perfil</HeaderText>
      </HeaderDiv>
      <EditProfileForm />
    </PageDiv>
//     <Container>
//       <Header needHeader="true" text="Editar"/>
//       <EditProfileForm />
//     </Container>
  )
}

export default EditProfilePage