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
// import { Container } from '../../components/Container/Container'
// import Header from '../../components/Header/Header'
// import Title from '../../components/Title/Title'

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
//     <Container>
//       <Header needHeader="true" text="Endereço"/>
//       {/* <Title text="Editar Endereço"/> */}
//       <AdressForm />
//     </Container>
  )
}

export default EditAdressPage