import {mask, doll, bag, bread, cake} from '../../images/imagesUrl'

export const productsMock = [
    {name: 'Máscara', quantityAvailable: 20, colors: ['vermelho', 'verde', 'preto'], text: 'Máscara usada para protecção individual', imgUrl: mask, price: 5},
    {name: 'Boneco', quantityAvailable: 5, colors: ['branco'], text: 'Boneco usado para brincar', imgUrl: doll, price: 10},
    {name: 'saco', quantityAvailable: 13, colors: ['preto', 'azul'], text: 'Saco usado para compras', imgUrl: bag, price: 20},
    {name: 'pão', quantityAvailable: 100, colors: ['preto', 'azul'], text: 'Pão artesanal', imgUrl: bread, price: 2},
    {name: 'bolo', quantityAvailable: 1, colors: ['preto', 'azul'], text: 'Bolo de iogurte', imgUrl: cake, price: 13}
]
