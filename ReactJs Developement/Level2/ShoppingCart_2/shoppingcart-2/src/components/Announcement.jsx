import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    justify-content: center;
    font-size: 19px;
`




const Announcement = () => {
  return (
    <Container>Announcement on 12 January</Container>
  )
}

export default Announcement