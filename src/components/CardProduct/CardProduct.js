import React from 'react'
import { CardItem, ImageItem, ContainerInfoProducts, NameProduct, DescriptionProduct, Price, Button, Flex, ContainerButton, ButtonProvover, Input} from './styled'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Portal
} from "@chakra-ui/react"


function CardProduct(props) {
  const initRef = React.useRef()
  return <CardItem>
    <ImageItem src={props.photoUrl} />

    <ContainerInfoProducts>
      <NameProduct>{props.name}</NameProduct>
      <DescriptionProduct>{props.description}</DescriptionProduct>
      <Flex>
        <Price>R${props.price}</Price>
        <Popover closeOnBlur={false} placement="left" initialFocusRef={initRef}>
      {({ isOpen, onClose }) => (
        <>
          <PopoverTrigger>
          <Button>adicionar</Button>
          </PopoverTrigger>
          <Portal>
            <PopoverContent
            padding={'2rem 1.5rem'}>
              <PopoverCloseButton />
              <PopoverBody>
              <PopoverArrow />
              <PopoverHeader>Selecione a quantidade desejada</PopoverHeader>
              <PopoverCloseButton />
              <ContainerButton>
                  <ButtonProvover  onClick={props.onClick }>ADICIONAR AO CARRINHO</ButtonProvover>
                </ContainerButton>
                <Input
                type={'number'}
                name={props.nameInput}
                value={props.value}
                onChange={props.onChange}
              />
                <Button
                  mt={4}
                  colorScheme="blue"
                  onClick={function(event){props.onClick();onClose()}}
                  ref={initRef}
                >
                  ADICIONAR AO CARRINHO
                </Button>
              </PopoverBody>
            </PopoverContent>
          </Portal>
        </>
      )}
    </Popover>







      </Flex>
    </ContainerInfoProducts>
  </CardItem>
}

export default CardProduct