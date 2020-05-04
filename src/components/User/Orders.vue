<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 class="text-xl-center pt-5" v-if="loading">
                <v-progress-circular
                        :width="3"
                        color="green"
                        indeterminate
                ></v-progress-circular>
            </v-flex>
            <v-flex xs12 sm6 offset-sm3 v-else-if="!loading && orders.length !== 0 ">
                <h1 class="text--secondary mb3">Orders</h1>
                <v-list
                        subheader
                        two-line
                        flat
                >
                    <v-list-item-group
                            multiple
                    >
                        <v-list-item
                                v-for="order in orders"
                                :key="order.id"
                                >
                            <template>
                                <v-list-item-action>
                                    <v-checkbox
                                            color="success"
                                            :input-value="order.done"
                                            @change="markDone(order)"
                                    ></v-checkbox>
                                </v-list-item-action>

                                <v-list-item-content>
                                    <v-list-item-title>{{order.name}}</v-list-item-title>
                                    <v-list-item-subtitle>{{order.phone}}</v-list-item-subtitle>
                                </v-list-item-content>
                                <v-list-item-action>
                                    <v-btn
                                            :to="'/ad/'+order.adId"
                                            class="primary">Open</v-btn>
                                </v-list-item-action>
                            </template>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
            </v-flex>
            <v-flex xs12 class="text-xl-center" v-else>
                <h1 class="text--secondary">You have no orders</h1>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "Orders",
        data: () => ({
            orders: [
                {
                    id: 'fds3',
                    name: 'Sergey',
                    phone: '8-966-35-55',
                    adId: '123',
                    done: false
                }
            ]
        }),
        methods: {
            markDone (order) {
                this.$store.dispatch('markOrderDone', order.id)
                .then(() => {
                    order.done = true
                })
                .catch(() => {})
            }
        },
        created () {
            this.$store.dispatch('fetchOrders');
        },
        computed: {
            loading () {
                return this.$store.getters.loading
            },
            orders () {
                return this.$store.getters.orders()
            }
        },
        getters: {
            doneOrders (state) {
                return state.orders.filter(o => o.done);
            },
            undoneOrders (state) {
                return state.orders.filter(o => !o.done)
            },
            orders (state, getters) {
                return getters.undoneOrders.concat(getters.doneOrders)
            }
        }
    }
</script>

<style scoped>

</style>