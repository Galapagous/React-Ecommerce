import React from "react"
import Navbar from "../Component/Navbar"
import { Newsletter } from "../Component/Newsletter"
import styled from "styled-components"
import { Footer } from "../Component/Footer"
import { Add, Remove } from "@mui/icons-material"

const Container = styled.div``
const Wrapper = styled.div`
  display: flex;
  padding: 0px 50px;
  /* align-items: center; */
  /* justify-content: center; */
`
const ImageContainer = styled.div`
  flex: 1;
  overflow: hidden;
`
const Image = styled.img`
  width: 100%;
  height: 100%;
`
const InfoContainer = styled.div`
  flex: 1;
  padding: 20px;
`
const Title = styled.div`
  font-size: 2rem;
  font-weight: 200;
`
const Desc = styled.p`
  margin: 20px 0px;
  font-size: 1rem;
`
const Price = styled.h1`
  font-size: 4rem;
  font-weight: 100;
`
const FilterContainer = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-between;
  margin: 20px 0px;
`
const Filter = styled.div`
  display: flex;
  align-items: center;
`
const FilterTitle = styled.span`
  font-size: 1.2rem;
  font-weight: 400;
`
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.bg};
  margin: 0px 5px;
  cursor: pointer;
`
const FilterSize = styled.select`
  padding: 5px;
  margin-left: 10px;
`
const FilterSizeOption = styled.option``

const AddContainer = styled.div`
  display: flex;
  align-items: left;
`
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const Amount = styled.span`
  margin: 0px 10px;

  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 2px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Button = styled.button`
  margin-left: 20px;
  cursor: pointer;
  border: 2px solid teal;
  height: 50px;
  background-color: white;
`

export const Product = () => {
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <ImageContainer>
          <Image src="https://images.unsplash.com/photo-1454720503269-3a35c21bebc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=706&q=80" alt="jumpsuit" />
        </ImageContainer>
        <InfoContainer>
          <Title>Jeans</Title>
          <Desc>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Desc>
          <Price>$20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor bg="black" />
              <FilterColor bg="darkblue" />
              <FilterColor bg="grey" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove style={{ cursor: "pointer" }} />
              <Amount>1</Amount>
              <Add style={{ cursor: "pointer" }} />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  )
}
