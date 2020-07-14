<template>
    <div>
        <app-stock :key="stock.id" :stock="stock" v-for="stock in stocks"/>
    </div>
</template>

<script>
    import Stock from './Stock.vue'

    export default {
        name: 'Stocks',

        computed: {
            stocks() {
                return this.$store.getters.getAllStocks
            }
        },

        components: {
            appStock: Stock,
        }
    }
</script>

<style scoped>
</style>
