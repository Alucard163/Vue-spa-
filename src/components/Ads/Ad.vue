<template>
    <v-container>
        <v-layout row>
            <v-flex xs12>
                <v-card>
                    <v-img src="https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"></v-img>
                    <v-card-text>
                        <h1 class="text--primary">lorem</h1>
                        <p>Lorem ipsum</p>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn class="warning">Edit</v-btn>
                        <v-btn class="success">Buy</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "Ad.vue",
        data: () => ({

        })
    }
</script>

<style scoped>

</style>