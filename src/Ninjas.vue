<template>
    <div id="ninjas">

        <h1>{{ title }} </h1>

        <ul>
            <li v-for="ninja in ninjas" @click="ninja.show = !ninja.show">
                <h3> Name: {{ ninja.name }} </h3>
                <h4 v-if="ninja.show">Speciality: {{ ninja.specialiity }}</h4>
            </li>
        </ul>

    </div>
</template>
<script>
 export default {
     props: ['ninjas'],
     data() {
         return {
             title: "Ninja Componet",

         }
     }
 }
</script>
<style>
    #ninjas {
        width: 100%;
        max-width: 1200px;
        margin: 40px auto;
        padding: 0 20px;
        box-sizing: border-box;
    }
    ul{
        display: flex;
        flex-wrap: wrap;
        list-style-type: none;
        padding: 0;
    }
    li {
        flex-grow: 1;
        flex-basis: 300px;
        text-align: center;
        padding: 30px;
        border: 1px solid #222;
        margin: 10px;
    }

</style>