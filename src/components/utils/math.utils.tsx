import { ProdutoInterface } from "@/context/ProdutoContext";

export const findItem = (produtos: ProdutoInterface[], cardId: number): ProdutoInterface | undefined => {
    return produtos.find(produto => produto?.id ===  cardId)
}
export const somaMaisUm = (produtos: ProdutoInterface[], cardId: number, setProdutos: (produtos:ProdutoInterface[]) => void) => {
    const item = findItem(produtos, cardId)
   if(!item) {
        return;
   }
    if(!item?.qtd){
        item.qtd = 1
        setProdutos([...produtos])
        return;
    }
    item.qtd++
   setProdutos([...produtos])
}

export const subtraiUm = (produtos: ProdutoInterface[], cardId: number, setProdutos: (produtos:ProdutoInterface[]) => void) => {
    const item = findItem(produtos, cardId)
   if(!item) {
        return;
   }
    if(!item?.qtd){
        return;
    }
    item.qtd--
   setProdutos([...produtos])
}


export const resetQtdItem = (produto: ProdutoInterface | undefined) => {
    if(produto?.id){
        produto.qtd = 0
    }
}
