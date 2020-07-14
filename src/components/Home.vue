<template>
    <div>
        <h1>Trade or view your portfolio</h1>
        <h6>You may save and load your data</h6>
        <h6>Click on 'End Day' to begin a new day</h6>
        <hr />
        <p>Your funds: {{ funds | currency }}</p>
    </div>
</template>

<script>
    export default {
        name: 'Home',

        data() {
            return {}
        },

        computed: {
            funds() {
                return this.$store.getters.funds
            },
        },
    }
</script>

<style scoped>
</style>
