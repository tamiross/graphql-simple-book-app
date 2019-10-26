import styled from 'styled-components'

export const BaseStyle = styled.div({
    position: 'fixed',
    top: 0,
    left: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'rgba(0,0,0,0.6)',
    width: '100vw',
    height: '100vh',
    zIndex: 999
})
