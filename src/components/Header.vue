<template>
    <header>

        <h1 @click="changeTitle">{{ title }}</h1>

    </header>
</template>
<script>
    import { bus } from '../main'
    export default {
        props: ['title'],
        data() {
            return {
                titles: 'Vue Seie'
            }
        },
        methods: {
            changeTitle() {
//                this.$emit('changeTitle','Change title in parent')
                this.title = 'Change title in Header'
                bus.$emit('titleChanged',this.title);
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