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
                    <li><a href="#" @click="endDay">End Day</a></li>
                    <li class="dropdown">
                        <a aria-expanded="false"
                           aria-haspopup="true"
                           class="dropdown-toggle"
                           data-toggle="dropdown"
                           href="#"
                           role="button">
                            Save & Load <span class="caret"></span>
                        </a>
                        <ul class="dropdown-menu">
                            <li><a href="#">Save Data</a></li>
                            <li><a href="#">Load Data</a></li>
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
            return {}
        },

        computed: {
            funds() {
                return this.$store.getters.funds
            }
        },

        methods: {
            ...mapActions([
                'randomiseStocks'
            ]),

            endDay() {
                this.randomiseStocks()
            },
        },
    }
</script>

<style scoped>
    nav {
        background-color: #e3f2fd;
    }
</style>
