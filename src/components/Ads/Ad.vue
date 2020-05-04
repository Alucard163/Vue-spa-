<template>
    <v-container>
        <v-layout row>
            <v-flex xs12>
                <v-card v-if="!loading">
                    <v-img :src="ad.imageSrc"></v-img>
                    <v-card-text>
                        <h1 class="text--primary">{{ad.title}}</h1>
                        <p>{{ad.description}}</p>
                    </v-card-text>
                    <v-card-actions>
<!--                        <v-btn class="warning">Edit</v-btn>-->
                        <addEditAdModal :ad="ad" v-if="isOwner"></addEditAdModal>
                        <app-buy-modal :ad="ad"></app-buy-modal>
                    </v-card-actions>
                </v-card>
                <div v-else class="text-xs-center">
                    <v-progress-circular
                            :width="3"
                            color="green"
                            indeterminate
                    ></v-progress-circular>
                </div>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import EditAdModal from "@/components/Ads/EditAdModal";
    export default {
        name: "Ad.vue",
        props: ['id'],
        data: () => ({

        }),
        computed: {
            ad () {
                const id = this.id;
                return this.$store.getters.adById(id)
            },
            loading () {
                return this.$store.getters.loading
            },
            isOwner () {
                return this.ad.ownerId === this.$store.getters.user.id
            }
        },
        components: {
            addEditAdModal: EditAdModal
        }
    }
</script>

<style scoped>

</style>