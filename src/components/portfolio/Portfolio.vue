<template>
    <div>
        <app-stock :stock="stock" v-for="stock in stocks"></app-stock>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import Stock from './Stock.vue'

    export default {
        name: 'portfolio',

        data() {
            return {}
        },

        computed: {
            ...mapGetters({
                stocks: 'stockPortfolio',
            }),
        },

        components: {
            appStock: Stock,
        },
    }
</script>

<style scoped>
</style>
