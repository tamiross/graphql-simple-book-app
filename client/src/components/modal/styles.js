import styled from 'styled-components'

export const BaseStyle = styled.div({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: ' center',
    alignItems: 'center',
    background: 'white',
    borderRadius: 8,
    zIndex: 1000
})

export const ModalHeader = styled.div({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: '#1976d2',
    color: '#fff',
    fontWeight: 500,
    width: '100%',
    padding: '12px 24px',
    boxSizing: 'border-box',

})