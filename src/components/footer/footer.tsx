import styled from "styled-components"

const Footer = styled.footer({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EEEEEE',
    height: '34px',
    marginTop: '100px'
})

const Text = styled.p({
    fontSize: '12px',
    fontWeight: '400'

})

const FooterComponent = () => {
    return (
        <Footer>
            <Text>MKS sistemas © Todos os direitos reservados</Text>
        </Footer>
    )
}




export default FooterComponent;