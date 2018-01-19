<template>
    <div id="ninjas">

        <h1>{{ title }} </h1>

        <ul>
            <li v-for="ninja in ninjas">Name: {{ ninja.name }},
            <br>
                <span v-if="ninja.show">Speciality: {{ ninja.specialiity }}</span>
            </li>
        </ul>

    </div>
</template>
<script>
 export default {
     data() {
         return {
             title: "Ninja Componet",
             ninjas: [
                 {name: 'Rye', specialiity: 'Vue Component',show: false},
                 {name: 'Crystal', specialiity: 'HTML Wizard',show: false},
                 {name: 'Hitoshi', specialiity: 'Click Events',show: false},
                 {name: 'Tango', specialiity: 'Conditions',show: false},
                 {name: 'Kami', specialiity: 'Webpack',show: false},
                 {name: 'Yoshi', specialiity: 'Data Diggin',show: false},
                 {name: 'Marcos', specialiity: 'Vuex',show: false},
             ]

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