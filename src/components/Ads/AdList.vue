<template>
    <v-container>
        <v-layout row v-if="!loading && myAds.length !== 0">
            <v-flex xs12 sm6 offset-sm3>
                <h1 class="text--secondary mb-3">My ads</h1>
                <v-card
                        v-for="ad in myAds"
                        :key="ad.id"
                        class="elevation-10 mb-3">
                    <v-layout row>
                        <v-flex xs4>
                            <v-avatar
                                    class="ml-sm-2"
                                    size="150"
                                    tile
                            >
                                <v-img :src="ad.imageSrc"></v-img>
                            </v-avatar>
                        </v-flex>
                        <v-flex xs8>
                            <v-card-text>
                                <h2 class="text--primary">{{ad.title}}</h2>
                                <p>{{ad.description}}</p>
                            </v-card-text>
                            <v-card-actions>
                                <v-btn
                                        :to="'/ad/' + ad.id"
                                        class="info">Open</v-btn>
                            </v-card-actions>
                        </v-flex>
                    </v-layout>
                </v-card>
            </v-flex>
        </v-layout>
        <v-layout v-else-if="!loading && myAds.length === 0">
            <v-flex xs12 class="text-xl-center">
                <h1 class="text--primary">You have no ads</h1>
            </v-flex>
        </v-layout>
        <v-layout v-else>
            <v-progress-circular
                    :width="3"
                    color="green"
                    indeterminate
            ></v-progress-circular>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "AdList",
        data: () => ({

        }),
        computed: {
           myAds() {
               return this.$store.getters.myAds;
           },
            loading () {
               return this.$store.getters.loading
            }
        }
    }
</script>

<style scoped>

</style>