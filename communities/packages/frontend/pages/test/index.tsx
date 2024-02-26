import React from 'react'
import styled from "styled-components"

const Spacing = `margin-bottom:15px`

const Header = styled.header`
    background: tomato;
    text-align: center;
    padding: 10px;
`

const Title = styled.h1`
    font-size: 2rem;
    color: #fff;   
`

const Wrapper = styled.div`
    max-width: 900px;
    margin: 0 auto;
    padding: 15px;
    h2: {
        font-size: 1.4rem;
    }
    .content {
        padding:15px;
        background: #f0f0f0
    }
    p {
        ${Spacing}
    }
`


const index = () => {
  return (
    <div>
        <Header>
        <Title>Titre de la page</Title>
        </Header>
        <Wrapper>
            <h2>Second titre de la page</h2>
          <div className='content'> 
          <p>Ici le contenu de notre page</p>
          </div>
        </Wrapper>
    </div>
  )
}

export default index