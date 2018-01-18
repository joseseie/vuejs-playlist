<template>
    <div>

        <h1>{{ title }} </h1>

        <p>Meu primeiro paragrafo</p>

        <ninjas></ninjas>

    </div>
</template>
<script>
    import Ninjas from './Ninjas.vue'
     export default {
        components: {
            'ninjas' : Ninjas
        },
         data() {
             return {
                 title: "Ninja App",
             }
         }
     }
</script>
<style>

</style>