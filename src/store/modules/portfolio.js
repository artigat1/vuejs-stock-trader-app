const state = {
    funds: 10000,
    portfolio: [],
}

const mutations = {
    'BUY_STOCK'(state, { stockId, quantity, stockPrice }) {
        const record = state.portfolio.find(element => element.id === stockId)
        if (record) {
            record.quantity += quantity
        } else {
            state.portfolio.push({
                id: stockId,
                quantity,
            })
        }
        state.funds -= stockPrice * quantity
    },

    'SELL_STOCK'(state, { stockId, quantity, stockPrice }) {
        const record = state.portfolio.find(element => element.id === stockId)
        if (parseInt(record.quantity) > quantity) {
            record.quantity -= quantity
        } else {
            state.portfolio.splice(state.portfolio.indexOf(record), 1)
        }
        state.funds += stockPrice * quantity
    },

    'SET_PORTFOLIO'(state, { portfolio, funds }) {
        state.funds = funds
        state.portfolio = portfolio ? portfolio : []
    },
}

const actions = {
    sellStock({ commit }, order) {
        commit('SELL_STOCK', order)
    },
}

const getters = {
    stockPortfolio(state, getters) {
        return state.portfolio.map(stock => {
            console.log('get all stocks', getters.getAllStocks)
            const record = getters.getAllStocks.find(element => element.id === stock.id)
            return {
                id: stock.id,
                name: record.name,
                quantity: stock.quantity,
                price: record.price,
            }
        })
    },

    funds(state) {
        return state.funds
    },
}

export default {
    state,
    mutations,
    actions,
    getters,
}
