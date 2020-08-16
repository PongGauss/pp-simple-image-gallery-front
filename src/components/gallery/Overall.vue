<template>
    <div>
        <div class="card w-75">
            <div class="card-header">
                Disk Usage Overview
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col col-lg-3">
                        Total Size:
                    </div>
                    <div class="col-lg-auto" v-html="totalFileSize">
                    </div>
                </div>
                <div class="row">
                    <div class="col col-lg-3">
                        No of files:
                    </div>
                    <div class="col-lg-auto" v-html="totalFileCount">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Overall',
        data() {
            return {
                totalFileSize: "",
                totalFileCount: 0
            }
        },
        beforeMount() {
            console.log('beforeMount')
            this.$store.dispatch('loadGalleryConclusionOverall');
            const overAllState = this.$store.state.gallery.overallData
            console.log(overAllState.count_all)
            this.totalFileCount = overAllState.count_all
            const byte = overAllState.sum_size_all
            const mbyte = parseFloat(overAllState.sum_size_all) / 1000000
            this.totalFileSize = `${mbyte}MB (${byte}B)`

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