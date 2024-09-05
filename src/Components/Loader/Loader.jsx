import React from "react"
import styled from "styled-components"

const Loader = () => {
  return (
    <StyledWrapper className='flex items-center justify-center mt-8'>
      <div className='loader' />
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  .loader {
    width: fit-content;
    font-weight: bold;
    font-family: monospace;
    font-size: 30px;
    background: radial-gradient(circle closest-side, #000 94%, #0000)
      right/calc(200% - 1em) 100%;
    animation: l24 1s infinite alternate linear;
  }

  .loader::before {
    content: "Coding...";
    line-height: 1em;
    color: #0000;
    background: inherit;
    background-image: radial-gradient(circle closest-side, #fff 94%, #000);
    -webkit-background-clip: text;
    background-clip: text;
  }

  @keyframes l24 {
    100% {
      background-position: left;
    }
  }
`

export default Loader