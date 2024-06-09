import { ProdutoInterface, ProdutosContext } from "@/context/ProdutoContext";
import { Variants, motion } from "framer-motion";
import Image from "next/image";
import { Dispatch, SetStateAction, Suspense, useContext, useEffect, useState } from "react";
import styled from "styled-components";
import './menu.scss';
import { findItem, resetQtdItem, somaMaisUm, subtraiUm } from "../utils/math.utils";
import { formatPrice } from "../utils/currency.utils";
import { SpanPrice } from "../card/card";

const TituloMenuAndCloseStyle = styled.div({
    display: 'flex',
    justifyContent: 'space-between',
    color: '#fff',
    marginBottom: '30px'
})

const TituloMenu = styled.h3({
    fontSize: '27px',
    fontWeight: 700,
    width: '180px'
})

const CardMenuStyled = styled.div({
    width: '100%',
    height: '95px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    borderRadius: '8px',
    margin: '15px 0px',
    color: '#000000',
    position: 'relative'
})

const CardName = styled.div({
    width: '100px'
})

const CardButtonsAndQuantidade = styled.div({
    width: '80px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
})

const CardButtons = styled.div({
    width: '100%',
    border: 'solid 1px #BFBFBF',
    display: 'flex',
    justifyContent: 'space-between',
    borderRadius: '3px',
    padding: '5px'
})

const CardButton = styled.div({
    padding: '0px 6px'
})

const CardPrice = styled.div({
    padding: '30px 15px',
    fontSize: '14px',
    fontWeight: 700
})

const CardButtonsAndPrice = styled.div({
    display: 'flex',
    
})

const BtnClosedCardMenu = styled.div({
    position: 'absolute',
    right: '-6px',
    top: '-6px',
    width: '15px',
    height: '15px',
})

const SvgClosedCardMenu = (props: {
    methodClosed: () => void
}) => {
    return(
        <motion.svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                initial="hidden"
                animate="visible"
                onClick={() => props.methodClosed()}
                style={{backgroundColor: 'black', borderRadius: '100px', margin: '0px 0px 0px 0px', alignSelf: 'center'}}
            >
                <motion.line
                    x1="5"
                    y1="5"
                    x2="10"
                    y2="10"
                    stroke="#fff"
                    custom={2}
                    />
                <motion.line
                    x1="5"
                    y1="10"
                    x2="10"
                    y2="5"
                    stroke="#fff"
                    custom={2.5}
                    />
            </motion.svg>
    )
}

const CardMenu = (props: {
    card: ProdutoInterface
}) => {

    const {produtos, setProdutos} = useContext(ProdutosContext)

    const excluirCardMenu = () => {
        const item = findItem(produtos, props.card.id)
        resetQtdItem(item)
        setProdutos([...produtos])
    }

    
    return (
        <CardMenuStyled className="mobile-card">
            <BtnClosedCardMenu>
                <SvgClosedCardMenu methodClosed={excluirCardMenu.bind(this)}/>
            </BtnClosedCardMenu>
            <Image src={props.card.photo} alt={props.card.name} width={80} height={80}/>
            <CardName className="card-titulo">
                {props.card.name}
            </CardName>
            <CardButtonsAndPrice className="card-buttons-price">
                <CardButtonsAndQuantidade className="card-buttons-qtd">
                    <div className="qtd">
                        Qtd
                    </div>
                    <CardButtons>
                        <CardButton
                            onClick={()=> somaMaisUm(produtos, props.card.id, setProdutos.bind(this))}
                            >
                                +
                        </CardButton>
                            <hr/>
                        <CardButton>
                                {props.card.qtd}
                        </CardButton>
                        <hr />
                        <CardButton
                            onClick={()=> subtraiUm(produtos, props.card.id, setProdutos.bind(this))}
                            >
                                -
                        </CardButton>
                    </CardButtons>
                </CardButtonsAndQuantidade>
                <div className="card-price">
                    <CardPrice className="mobile-hidden">
                        { formatPrice(props.card.price)}
                    </CardPrice>
                    <SpanPrice className="mobile-show">{ formatPrice(props.card.price)}</SpanPrice>
                </div>
            </CardButtonsAndPrice>
        </CardMenuStyled>
    )
}

const BtnClosedMenu = (props: {
    isOpen: boolean,
    methodIsOpen: Dispatch<SetStateAction<boolean>>
}) => {
    return(
        <motion.svg
                width="40"
                height="40"
                viewBox="0 0 60 60"
                initial="hidden"
                animate="visible"
                style={{backgroundColor: 'black', borderRadius: '100px', margin: '0px 20px 0px 20px', alignSelf: 'center'}}
                onClick={() => props.methodIsOpen(!props.isOpen)}
            >
                <motion.line
                    x1="20"
                    y1="20"
                    x2="40"
                    y2="40"
                    stroke="#fff"
                    custom={2}
                    />
                <motion.line
                    x1="20"
                    y1="40"
                    x2="40"
                    y2="20"
                    stroke="#fff"
                    custom={2.5}
                    />
            </motion.svg>
    )
}

const TituloMenuAndClose = (props: {
    isOpen: boolean,
    methodIsOpen: Dispatch<SetStateAction<boolean>>
}) => {
    return(
        <TituloMenuAndCloseStyle>
            <TituloMenu>Carrinho<br /> de Compras</TituloMenu>
            <BtnClosedMenu isOpen={props.isOpen} methodIsOpen={props.methodIsOpen}/>
        </TituloMenuAndCloseStyle>
    )
}

const variants: Variants = {
    active: { opacity: 1, x: 0, height: '100vh'},
    defaultConfig: { 
        opacity: 0, 
        x: "100%" ,
        backgroundColor: '#0F52BA',
        height: '100vh',
        position: 'fixed',
        right: 0,
        top: 0,
        width: '486px',
        boxShadow: '-5px 0px 6px 0px #00000021',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        color: '#fff'
    }
}


const CardContainerLayout = styled.div({
    width: '100%',
    maxHeight: '52vh',
    overflowX: 'auto',
    scrollbarWidth: 'thin',
    transform: 'translateY(180deg)',
    padding: '0px 10px'
})

const ButtonFinalizarStyled = styled.div({
    width: '100%',
    height: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
    fontSize: '28px',
    fontWeight: 700

})

const TotalCompraStyled = styled.div({
    padding: '10px 40px 20px 20px',
    display: 'flex',
    justifyContent: 'space-between'
})


const TotalCompra = (props: {
    total: number
}) => {
    return (
        <TotalCompraStyled>
            <div >
                Total:
            </div>
            <div>
                {formatPrice(props.total)}
            </div>
        </TotalCompraStyled>
    )
}

const ButtonFinalizar = (props: {
    total: number
}) => {
    return(
    <div> 
        <TotalCompra total={props.total}/>
        <ButtonFinalizarStyled>
            Finalizar Compra
        </ButtonFinalizarStyled>
    </div>
    )
}

const MenuContainerStyled = styled.div({
    padding: '20px 20px 0px 20px'
})

const Menu = (props: {
    isOpen: boolean,
    methodIsOpen: Dispatch<SetStateAction<boolean>>
}) => {
    const {produtos} = useContext(ProdutosContext);
    const produtosComCompra = produtos.filter(prd => !!prd.qtd)

    const totalCompra = produtosComCompra.map(prd => prd.qtd * Number(prd.price)).reduce((a,b) => a+b, 0)
    return (
        <motion.nav
            animate={props.isOpen ? 'active' : ''}
            variants={variants}
            initial="defaultConfig"
            className="menu-mobile"
            >
                <MenuContainerStyled className="menu-mobile">
                    <TituloMenuAndClose  isOpen={props.isOpen}  methodIsOpen={props.methodIsOpen}/>
                    <CardContainerLayout>
                        {produtosComCompra.map((prd, i) => <CardMenu key={i} card={prd}/>)}
                    </CardContainerLayout>
                </MenuContainerStyled>
                <ButtonFinalizar total={totalCompra}/>
        </motion.nav>
    )
}
export default Menu