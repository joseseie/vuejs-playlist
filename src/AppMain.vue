<template>
    <div>


        <app-header></app-header>

        <ninjas></ninjas>

        <app-footer></app-footer>

    </div>
</template>
<script>
    import Ninjas from './Ninjas.vue'
    import Header from './components/Header.vue'
    import Footer from './components/Footer.vue'

     export default {
        components: {
            'ninjas' : Ninjas,
            'app-header' : Header,
            'app-footer' : Footer
        },
         data() {
             return {
                 title: "Ninja App",
             }
         }
     }
</script>
<style scoped>
    h1 {
        color: purple;
    }

</style>