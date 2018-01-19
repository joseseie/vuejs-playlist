<template>
    <div>

        <form-helper>

            <div slot="form-header">
                <h3>This is a title os the form</h3>
                <p>Information about the form</p>
            </div>
            <div slot="form-fields">
                <input type="text" placeholder="name" required/>
                <input type="password" placeholder="password" required/>

            </div>
            <div slot="form-controls">
                <button v-on:click="handleSubmit">Submit</button>
            </div>
        </form-helper>

        <!--<app-header v-bind:title="title" @changeTitle="changeTitle($event)"></app-header>-->

        <!--<ninjas v-bind:ninjas="ninjas"></ninjas>-->

        <!--<app-footer v-bind:title="title"></app-footer>-->

    </div>
</template>
<script>
    import Ninjas from './Ninjas.vue'
    import Header from './components/Header.vue'
    import Footer from './components/Footer.vue'
    import FormHelper from './components/FormHelper.vue'

     export default {
        components: {
            'ninjas' : Ninjas,
            'app-header' : Header,
            'app-footer' : Footer,
            'form-helper' : FormHelper
        },
         data() {
             return {
                 title: "Ninja App",
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
         },
         methods: {
             changeTitle(title) {
                 this.title = title
         }
         }
     }
</script>
<style scoped>
    h1 {
        color: purple;
    }

</style>