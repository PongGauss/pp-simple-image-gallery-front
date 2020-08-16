<template>
    <div>
        <div class="card w-75">
            <div class="card-header">
                Disk Usage Compositions
            </div>
            <div class="card-body">
                <div class="row" v-if="compositions.length > 0">
                    <div class="col-lg">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Type</th>
                                    <th scope="col">No of files</th>
                                    <th scope="col">Size</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="detail-row" v-for="item in compositions" v-bind:key="item.sum_size_ext">
                                    <td>{{ item.image_ext }}</td>
                                    <td>{{ item.count_ext }}</td>
                                    <td>{{ item.sum_size_ext }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="row" v-else>
                    <div class="col col-lg-3">
                        No Data
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Usage',  
        data() {
            return {
                compositions: [],
            }
        },
        beforeMount() {
            this.$store.dispatch('loadGalleryConclusionUsage')
            const usageState = this.$store.state.gallery.usageData
            this.compositions = usageState
        },
    }
</script>

<style>
    .card {
        margin: 0 auto;
        float: none;
        margin-bottom: 10px;
    }
</style>