<template>
    <v-dialog width="400px" v-model="modal">
        <v-btn class="primary" text slot="activator">Buy</v-btn>
        <v-card>
            <v-container>
                <v-layout row>
                    <v-flex xs12>
                        <v-card-title>
                            <h1 class="text--primary">Edit ad</h1>
                        </v-card-title>
                    </v-flex>
                </v-layout>
                <v-divider></v-divider>
                <v-layout row>
                    <v-flex xs12>
                        <v-card-text>
                            <v-text-field
                                    label="Your name"
                                    name="title"
                                    type="text"
                                    v-model="name"
                            />
                            <v-text-field
                                    label="Your phone"
                                    name="phone"
                                    type="text"
                                    multi-line
                                    v-model="phone"
                            />
                        </v-card-text>
                    </v-flex>
                </v-layout>
                <v-divider></v-divider>
                <v-layout row>
                    <v-flex xs12>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn class=""
                                   @click="onCancel"
                                   :disabled="localLoading"
                            >Close</v-btn>
                            <v-btn class="success"
                                   @click="onSave"
                                   :disabled="localLoading"
                                   :loading="localLoading"
                            >Buy it!</v-btn>
                        </v-card-actions>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        props: ['ad'],
        name: "BuyModal",
        data: () => ({
            modal: false,
            name: '',
            phone: '',
            localLoading: false
        }),
        methods: {
            onCancel () {
                this.name = '';
                this.phone = '';
                this.modal = false;
            },
            onSave () {
                if (this.name !== '' && this.phone !=='') {
                    this.localLoading = true;
                    this.$store.dispatch('createOrder', {
                        name: this.name,
                        phone: this.phone,
                        adId: this.ad.id,
                        ownerId: this.ad.ownerId
                    })
                    .finally(() => {
                        this.name = '';
                        this.phone = '';
                        this.localLoading = false;
                        this.modal = false;
                    });
                    this.modal = false;
                }
            }
        }
    }
</script>

<style scoped>
</style>