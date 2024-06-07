import Image from "next/image";
import styled from "styled-components";
import iconCart from '../../../public/icon-cart.svg'
import { Dispatch, SetStateAction, Suspense, useContext, useState } from "react";
import dynamic from "next/dynamic";
import { ProdutosContext } from "@/context/ProdutoContext";



const Header = styled.header({
    width: '100%',
    height: '101px',
    backgroundColor: '#0F52BA',
    paddingLeft: '2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
})
const H1 =  styled.h1({
    fontSize: '40px',
    fontWeight: '600',
    color: '#fff'
  })
  
  const Span = styled.span({
    fontSize: '20px',
    fontWeight: 300
  })
  
  const ButtonCarrinho = styled.button({
    width: '90px',
    height: '45px',
    borderRadius: '8px',
    backgroundColor: '#fff',
    border: 0,
    marginRight: 64,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  })
  
  const Count = styled.span({
    fontSize: '18px',
    fontWeight: '700'
  })

  const Menu = dynamic(() => import('../menu/menu'), {
    ssr: false
  })

const HeaderComponent = () => {
  const [isOpen, setIsOpen] = useState(false)
  const {produtos} = useContext(ProdutosContext);

    return (
      <>
        <Header>
            <H1>MKS <Span>Sistemas</Span></H1>
            <ButtonCarrinho onClick={() => setIsOpen(!isOpen)}>
                <Image src={iconCart} alt='carrinho de compras' height={18} width={20}/>
                <Count>{produtos?.map(prd => prd.qtd ? prd.qtd : 0).reduce((a,b) => a+b, 0)}</Count>
            </ButtonCarrinho>
        </Header>
        <Menu isOpen={isOpen} methodIsOpen={setIsOpen}></Menu>
      </>
    )
};

export default HeaderComponent