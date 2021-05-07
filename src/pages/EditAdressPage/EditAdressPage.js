import React from 'react'
import AdressForm from '../../components/AdressForm/AdressForm'
import { IoIosArrowBack } from "react-icons/io"
import {IconButton} from '@chakra-ui/react'
import { PageDiv, 
  HeaderDiv,
  HeaderText, 
  StyledBackButton} from './styled'
import { useHistory } from 'react-router-dom'
import {goToProfilePage} from '../../routes/coordinator'

function EditAdressPage(){
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
        <HeaderText>Editar endereço</HeaderText>
      </HeaderDiv>
      <AdressForm />
    </PageDiv>
  )
}

export default EditAdressPage