export const formatPrice = (price:  string | number) => `${Number(price).toLocaleString('pt-BR', {
    style: 'currency', 
    currency: 'BRL',

})}`