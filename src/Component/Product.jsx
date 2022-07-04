import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material"
import styled from "styled-components"
import Img from "../Images/blog.jpg"

const Item = styled.div`
  opacity: 0;
  width: 40px;
  height: 40px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  cursor: pointer;
  transition: 1s transform ease;
  z-index: 5;
  &:hover {
    background-color: lightgray;
    transform: scale(1.2);
  }
`

const Container = styled.div`
  width: 23%;
  height: 450px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover ${Item} {
    opacity: 1;
    transition: 2s all ease;
  }
`
const Wrapper = styled.div`
  margin: auto;
  position: relative;
  overflow: hidden;
  &:before {
    content: "";
    width: 100%;
    height: 100%;
    background-color: black;
    top: 0;
    position: absolute;
    z-index: 2;
    opacity: 0.3;
  }
`
const Image = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  z-index: 1;
`
const ProductAction = styled.div`
  width: auto;
  height: 80px;
  position: absolute;
  top: 40%;
  right: 20%;
  display: flex;
  align-items: center;
`

export const Product = (items) => {
  return (
    <Container>
      <Wrapper>
        <Image src={items.url} alt="product Image" />
        <ProductAction>
          <Item>
            <ShoppingCartOutlined />
          </Item>
          <Item>
            <SearchOutlined />
          </Item>
          <Item>
            <FavoriteBorderOutlined />
          </Item>
        </ProductAction>
      </Wrapper>
    </Container>
  )
}
