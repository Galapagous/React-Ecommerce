import styled from "styled-components"

const Container = styled.div`
  background-color: #004b93;
  height: 30px;
  color: white;
  text-align: center;
  font-weight: 500;
  font-size: 1.2rem;
  letter-spacing: 0.3rem;
`

function Announcement() {
  return <Container>Super Deal! Free Shipping On Order Above $50</Container>
}

export default Announcement
