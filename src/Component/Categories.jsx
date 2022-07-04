import styled from "styled-components"
import { Category } from "./Category"
import { CategoryItem } from "../Component/Data"
import img from "../Images/take.jpg"

const MainCategory = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Categories = () => {
  return (
    <MainCategory>
      {CategoryItem.map((items) => {
        console.log(items)
        return <Category key={items.id} title={items.title} url={items.url} />
      })}
    </MainCategory>
  )
}
