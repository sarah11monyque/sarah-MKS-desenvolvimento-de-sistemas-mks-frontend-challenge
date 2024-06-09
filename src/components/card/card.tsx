import Image from "next/image"
import styled from "styled-components"
import iconComprar from '../../../public/icon-comprar.svg'
import { LazyMotion, Variants, domAnimation, m } from "framer-motion"
import { ProdutoInterface, ProdutosContext } from "@/context/ProdutoContext"
import { useContext } from "react"
import { somaMaisUm } from "../utils/math.utils"
import { formatPrice } from "../utils/currency.utils"

const Card = styled.div({
    width: '260px',
    height: '340px',
    boxShadow: '0px 2px 8px 0px #00000022',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
})

const CardContainer = styled.div({
    display: 'flex',
    maxWidth: '1118px',
    margin: '69px auto 0px',
    gap: '19px',
    flexWrap: 'wrap',
    justifyContent: 'center'
})

const ImageContainer = styled.div({
    display: 'flex',
    height: '150px',
    margin: '18px auto 0px'
})

const TitleProduct = styled.h6({
    fontSize: '16px',
    fontWeight: 400,
    textWrap: 'wrap',
    paddingRight: '16px'
})

const TitleAndPriceContainer = styled.div({
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0px 20px'
})

export const SpanPrice = styled.span({
    display: 'flex',
    height: '26px',
    backgroundColor: '#373737',
    padding: '0px 8px',
    color: '#fff',
    border: 0,
    fontSize: '15px',
    fontWeight: 700,
    borderRadius: '5px',
    alignItems: 'center',
    alignSelf: 'center'
})

const DescricaoProduto = styled.p({
    widows: '100%',
    padding: '0px 20px',
    textWrap: 'wrap',
    fontSize: '10px',
    fontWeight: 300,
    color: '#2C2C2C'
})

const ButtonComprar = styled.button({
    width: '100%',
    height: '31.91px',
    backgroundColor: '#0F52BA',
    border: 0,
    borderRadius: '0px 0px 8px 8px',
    padding: '0px 80px',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    fontSize: '14px',
    fontWeight: 600,
    color: '#fff'
})

export const CardContainerLayoutLoad = () => {
    return (
        <CardContainer>
            <CardLoad></CardLoad>
            <CardLoad></CardLoad>
            <CardLoad></CardLoad>
            <CardLoad></CardLoad>
            <CardLoad></CardLoad>
            <CardLoad></CardLoad>
            <CardLoad></CardLoad>
            <CardLoad></CardLoad>
        </CardContainer>
    )
}

export const CardContainerLayout = (props: {
    cards: ProdutoInterface[]
}) => {
    const cardsList = props.cards
    if(!cardsList?.length){
        return (
        <CardContainerLayoutLoad />
    )}
    return(
        <CardContainer>
            {cardsList.map((card, i) =><CardLayout key={card.id} card={card} />)}
        </CardContainer>
    )
}

export const CardLayout = (props: {
    card: ProdutoInterface
}) => {
    const {produtos, setProdutos} = useContext(ProdutosContext)

    return(
        <Card>
            <ImageContainer>
                <Image src={props.card.photo} alt={props.card.name} width='150' height='150' />
            </ImageContainer>
            <TitleAndPriceContainer>
                <TitleProduct>{props.card.name}</TitleProduct>
                <SpanPrice>{formatPrice(props.card.price)}</SpanPrice>
            </TitleAndPriceContainer>
            <DescricaoProduto>{props.card.description}</DescricaoProduto>
            <ButtonComprar onClick={() => {somaMaisUm(produtos, props.card.id, setProdutos.bind(this))}}><Image src={iconComprar} alt="comprar" width={16} height={16}/> Comprar</ButtonComprar>
        </Card>
    )
}

export const CardLoad = () => {
    const variants: Variants = {
        start: { 
            background: '#808080'
        },
        end: {
            background: '#c8c8c8'
        }
    }

    return(
        <LazyMotion features={domAnimation} 
      >
             <m.div
             style={{
                backgroundColor: '#a0a0a0',
                width: '260px',
                height: '340px',
                
             }}
             initial="start"
             animate="end"
             variants={variants}
             transition={{
                ease: 'easeInOut',
                duration: 0.4,
                repeat: Infinity
             }}
             />
        </LazyMotion>
    )
}
