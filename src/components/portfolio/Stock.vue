﻿<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-info">
            <div class="panel-heading">
                <h3 class="panel-title">
                    {{ stock.name }}
                    <small>(Price: {{ stock.price | currency }} | Quantity: {{ stock.quantity }})</small>
                </h3>
            </div>
            <div class="panel-body">
                <div class="pull-left">
                    <input class="form-control"
                           placeholder="Quantity"
                           :class="{ danger: insufficientQuantity }"
                           type="number"
                           v-model="quantity" />
                </div>
                <div class="pull-right">
                    <button :disabled="insufficientQuantity || !canSell"
                            @click="sellStock"
                            class="btn btn-success">
                        {{insufficientQuantity ? 'Not enough' : 'Sell'}}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'

    export default {
        name: 'Stock',

        props: ['stock'],

        data() {
            return {
                quantity: 0,
            }
        },

        computed: {
            canSell() {
                return this.quantity <= 0 || !Number.isInteger(this.quantity)
            },

            insufficientQuantity() {
                return this.quantity > this.stock.quantity
            }
        },

        methods: {
            ...mapActions({
                placeSellOrder: 'sellStock'
            }),

            sellStock() {
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: this.quantity,
                }

                this.placeSellOrder(order)
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
