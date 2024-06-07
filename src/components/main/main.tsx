import { Context, Suspense, createContext, useContext, useEffect, useState } from "react";
import { CardContainerLayout, CardContainerLayoutLoad } from "../card/card";
import styled from "styled-components";
import { ProdutoInterface, ProdutosContext } from "@/context/ProdutoContext";



const Main = styled.main({
    padding: '0px 30px'
})

const MainComponent = () => {
    const { produtos, setProdutos } = useContext(ProdutosContext)
    
    useEffect(() => {
        fetch('https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=20&sortBy=id&orderBy=DESC')
            .then( (response) => response.json() )
            .then( (data) => {
                setProdutos([...data.products])
            })
    }, []); 

    if (!produtos) return <CardContainerLayoutLoad />

    return (
        <Main>
            <CardContainerLayout  cards={produtos}/>
        </Main>
    )
};

export default MainComponent