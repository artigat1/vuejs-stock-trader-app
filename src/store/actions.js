import Vue from 'vue'

export const loadData = ({ commit }) => {
    console.log('fetching data')
    Vue.http.get('data.json')
        .then(response => response.json())
        .then(data => {
            console.log('data', data)
            if (data) {
                const stocks = data.stocks
                const funds = data.funds
                const portfolio = data.stockPortfolio

                const stockPortfolio = {
                    portfolio,
                    funds
                }

                commit('SET_STOCKS', stocks)
                commit('SET_PORTFOLIO', stockPortfolio)
            }
        })
}
