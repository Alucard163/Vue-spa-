<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <h1 class="text--secondary mb-3">Create new ad</h1>
                <v-form v-model="valid" ref="form" validation class="mb-3">
                    <v-text-field
                            label="Ad title"
                            name="title"
                            type="text"
                            v-model="title"
                            required
                            :rules="[v = !!v || 'Title is required']"
                    />

                    <v-text-field
                            label="Ad description"
                            name="description"
                            type="text"
                            :rules="[v = !!v || 'Description is required']"
                            multi-line
                            v-model="description"
                    />
                </v-form>
                <v-layout row mb-3>
                    <v-flex xs12>
                        <v-btn
                                color="blue-grey"
                                class="ma-2 white--text warning"
                        >
                            Upload
                            <v-icon right dark>mdi-cloud-upload</v-icon>
                        </v-btn>
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex xs12>
                        <img src="" height="100px" alt="">
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex xs12>
                        <v-switch
                        label="Add to promo?"
                        v-model="promo">
                        </v-switch>
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex xs12>
                        <v-spacer></v-spacer>
                        <v-btn
                                :disabled="!valid"
                                class="success"
                                @click="createAd">Create ad</v-btn>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "NewAd",
        data: () => ({
            title:'',
            description: '',
            promo:false,
            valid: false
        }),
        methods: {
            createAd () {
                if (this.$refs.form.validate()) {
                   const ad = {
                       title: this.title,
                       description: this.description,
                       promo: this.promo
                   };
                   console.log(ad);
                }
            }
        }
    }
</script>

<style scoped>

</style>