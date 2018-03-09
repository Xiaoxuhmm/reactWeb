let symbolNum = 0;

export const addSymbol = symbol => ({
    type: 'ADD_SYMBOL',
    symbol
})

export const removeSymbol = symbol => ({
    type: 'REMOVE_SYMBOL',
    symbol
})
