﻿﻿import stocks from '../../data/stocks'

const state = {
    stocks: []
}

const mutations = {
    'SET_STOCKS'(state, stocks) {
        state.stocks = stocks
    },

    'RND_STOCKS'(state) {
        state.stocks.stocks.forEach(stock => {
            stock.price = Math.round(stock.price * (1 + Math.random() - 0.5))
        })
        console.log('randomised stocks', state.stocks)
    },
}

const actions = {
    buyStock: ({ commit }, order) => {
        commit('BUY_STOCK', order)
    },

    initStocks: ({ commit }) => {
        commit('SET_STOCKS', stocks)
    },

    randomiseStocks: ({ commit }) => {
        commit('RND_STOCKS')
    },
}

const getters = {
    getAllStocks: state => state.stocks,
}

export default {
    state,
    mutations,
    actions,
    getters,
}
