import React from 'react'
import styled from 'styled-components'

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="loader">
        <span>&lt;</span>
        <span>Coding...</span>
        <span>/&gt;</span>
      </div>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  .loader {
    font-size: 2em;
    font-weight: 900;
  }
  .loader > * {
    color: black;
  }
  .loader span {
    display: inline-flex;
  }
  .loader span:nth-child(2) {
    letter-spacing: -1em;
    overflow: hidden;
    animation: reveal 1500ms cubic-bezier(0.645, 0.045, 0.355, 1) infinite
      alternate;
  }
  @keyframes reveal {
    0%,
    100% {
      opacity: 0.5;
      letter-spacing: -1em;
    }
    50% {
      opacity: 1;
      letter-spacing: 0em;
    }
  }
`

export default Loader
