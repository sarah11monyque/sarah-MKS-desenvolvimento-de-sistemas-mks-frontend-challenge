'use client'

import { Suspense, useState } from "react";
import dynamic from "next/dynamic";
import Menu from "@/components/menu/menu";
import { ProdutoInterface, ProdutosContext } from "@/context/ProdutoContext";
import Main from "../components/main/main";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

export default function Loja() {

  const [produtos, setProdutos] = useState([] as ProdutoInterface[]);

  return (
    <>
        <div>
      <ProdutosContext.Provider value={ {produtos: produtos, setProdutos: setProdutos}}>
          <Header />
          <Main />
      </ProdutosContext.Provider>
        </div>
        <Footer />
    </>
  );
}


