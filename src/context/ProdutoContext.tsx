import { Context, Dispatch, SetStateAction, createContext } from "react";

export const ProdutosContext: Context<{produtos: ProdutoInterface[], setProdutos: Dispatch<SetStateAction<ProdutoInterface[]>> }> = createContext({} as {produtos: ProdutoInterface[], setProdutos: Dispatch<SetStateAction<ProdutoInterface[]>>})

export interface ProdutoInterface {
    id: number,
    name: string,
    brand: string,
    description: string,
    photo: string,
    price: string,
    qtd: number,
    
}