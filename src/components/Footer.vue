<template>
    <footer>

        <p>Footer added</p>
        <p>{{ copyrigt }}</p>

    </footer>
</template>
<script>
    export default {
        data() {
            return {
                copyrigt: 'Cotyright 2017 Vuw'
            }
        }
    }
</script>
<style scoped>

    footer {
        background: #222;
        padding: 6px;
    }
    p {
        text-align: center;
        color: white;
    }

</style>