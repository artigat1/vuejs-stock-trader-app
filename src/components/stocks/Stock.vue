﻿<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-success">
            <div class="panel-heading">
                <h3 class="panel-title">
                    {{ stock.name }}
                    <small>(Price: {{ stock.price | currency }})</small>
                </h3>
            </div>
            <div class="panel-body">
                <div class="pull-left">
                    <input :class="{ danger: insufficientFunds }"
                           class="form-control"
                           placeholder="Quantity"
                           type="number"
                           v-model="quantity" />
                </div>
                <div class="pull-right">
                    <button :disabled="insufficientFunds || !isAbleToBuy"
                            @click="buyStock"
                            class="btn btn-success">
                        {{ insufficientFunds ? 'Can\'t afford' : 'Buy' }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Stock',

        props: ['stock'],

        data() {
            return {
                quantity: 0,
            }
        },

        computed: {
            funds() {
                return this.$store.getters.funds
            },

            isAbleToBuy() {
                return this.quantity > 0 && parseInt(this.quantity)
            },

            insufficientFunds() {
                return this.quantity * this.stock.price > this.funds
            },
        },

        methods: {
            buyStock() {
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: this.quantity,
                }

                this.$store.dispatch('buyStock', order)
                this.quantity = 0
            },
        }
    }
</script>

<style scoped>
    .danger {
        border: solid 1px red;
    }
</style>
