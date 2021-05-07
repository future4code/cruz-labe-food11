import React from 'react'
import { HeaderDiv, HeaderText, PageDiv, StyledBackButton} from './styled'
import {IconButton} from '@chakra-ui/react'
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
  )
}

export default EditProfilePage