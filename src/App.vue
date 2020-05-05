<template>
    <div class="container">
        <app-header/>
        <div class="row">
            <div class="col-md-12">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from './components/Header.vue'

    export default {
        name: 'App',

        components: {
            appHeader: Header,
        },

        created() {
            this.$store.dispatch('initStocks')
        }
    }
</script>

<style>
    body {
        padding: 30px;
    }

    h2 {
        padding: .75em 0;
    }
</style>
