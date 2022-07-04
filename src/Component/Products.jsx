import styled from "styled-components"
import { Product } from "./Product"
import { ProductItem } from "./Data"

const Container = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  margin: auto;
`

export const Products = () => {
  return (
    <Container>
      {ProductItem.map((item) => {
        return <Product url={item.url} />
      })}
    </Container>
  )
}
