<template>
    <header>

        <h1 @click="changeTitle">{{ title }}</h1>

    </header>
</template>
<script>
    export default {
        props: ['title'],
        data() {
            return {
                titles: 'Vue Seie'
            }
        },
        methods: {
            changeTitle() {
                this.$emit('changeTitle','Change title in parent')
            }
        }
    }
</script>
<style scoped>
    header {
        background: lightgreen;
        padding: 10px;
    }
    h1 {
        color: #222;
        text-align: center;
    }
</style>