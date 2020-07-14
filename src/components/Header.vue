<template>
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <router-link class="navbar-brand" to="/">Stock Trader</router-link>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">
                    <router-link active-class="active" tag="li" to="/portfolio"><a>Portfolio</a></router-link>
                    <router-link active-class="active" tag="li" to="/stocks"><a>Stocks</a></router-link>
                </ul>

                <strong class="navbar-text navbar-right">Funds: {{ funds | currency }}</strong>

                <ul class="nav navbar-nav navbar-right">
                    <li><a @click="endDay" href="#">End Day</a></li>
                    <li :class="{ open: isDropdownOpen }" class="dropdown">
                        <a @click="isDropdownOpen = !isDropdownOpen"
                           aria-expanded="false"
                           aria-haspopup="true"
                           class="dropdown-toggle"
                           data-toggle="dropdown"
                           href="#"
                           role="button">
                            Save & Load <span class="caret"></span>
                        </a>
                        <ul class="dropdown-menu">
                            <li><a @click="saveData" href="#">Save Data</a></li>
                            <li><a @click="loadData" href="#">Load Data</a></li>
                        </ul>
                    </li>
                </ul>
            </div><!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->
    </nav>
</template>

<script>
    import { mapActions } from 'vuex'

    export default {
        name: 'Header',

        data() {
            return {
                isDropdownOpen: false,
            }
        },

        computed: {
            funds() {
                return this.$store.getters.funds
            }
        },

        methods: {
            ...mapActions({
                randomiseStocks: 'randomiseStocks',
                fetchData: 'loadData',
            }),

            endDay() {
                this.randomiseStocks()
            },

            saveData() {
                const data = {
                    funds: this.$store.getters.funds,
                    stockPortfolio: this.$store.getters.stockPortfolio,
                    stocks: this.$store.getters.getAllStocks,
                }

                this.$http.put('data.json', data)
                this.isDropdownOpen = false
            },

            loadData() {
                this.fetchData()
                this.isDropdownOpen = false
            },
        },
    }
</script>

<style scoped>
    nav {
        background-color: #e3f2fd;
    }
</style>
