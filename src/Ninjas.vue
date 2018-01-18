<template>
    <div>

        <h1>{{ title }} </h1>

        <ol>
            <li v-for="ninja in ninjas">{{ ninja }}</li>
        </ol>

    </div>
</template>
<script>
 export default {
     data() {
         return {
             title: "Ninja Componet",
             ninjas: ['Yoshi', 'Mario Saveca','Jose Seie']
         }
     }
 }
</script>
<style>

</style>