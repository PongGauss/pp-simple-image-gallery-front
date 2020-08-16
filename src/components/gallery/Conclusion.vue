<template>
    <div>
        <appOverall></appOverall>
        <appUsage></appUsage>
    </div>
</template>

<script>
    import Overall from './Overall.vue'
    import Usage from './Usage.vue'
    export default {
        name: 'Conclusion',
        components: {
            appOverall: Overall,
            appUsage: Usage
        }
    }
</script>