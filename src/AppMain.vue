<template>
    <div>
        <app-header></app-header>
        <router-view></router-view>
        <!--<show-blog></show-blog>-->
        <!--<provinces></provinces>-->
        <!--<list-blog></list-blog>-->
        <!--O <keepalive> mantem os dados do formulario sempre disponivel-->
        <!--<keep-alive>-->
            <!--<component v-bind:is="component"></component>-->
        <!--</keep-alive>-->
        <!--<button @click="component = 'form-two'">Show form Two</button>-->
        <!--<button @click="component = 'form-one'">Show form one</button>-->
        <!--<button @click="httpRequest">HTTP Request (Save)</button>-->

        <!--<form-helper>-->

            <!--<div slot="form-header">-->
                <!--<h3>This is a title os the form</h3>-->
                <!--<p>Information about the form</p>-->
            <!--</div>-->
            <!--<div slot="form-fields">-->
                <!--<input type="text" placeholder="name" required/>-->
                <!--<input type="password" placeholder="password" required/>-->

            <!--</div>-->
            <!--<div slot="form-controls">-->
                <!--<button v-on:click="">Submit</button>-->
            <!--</div>-->
        <!--</form-helper>-->


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

    import FormOne from './components/FormOne.vue'
    import FormTwo from './components/FormTwo.vue'

    import ShowBlog from './components/showBlog.vue'
    import ListBlog from './components/listBlogs.vue'
    import ShowProvinces from './components/Provincias.vue'


    export default {
        components: {
            'ninjas' : Ninjas,
            'app-header' : Header,
            'app-footer' : Footer,
            'form-helper' : FormHelper,
            'form-one' : FormOne,
            'form-two' : FormTwo,
            'show-blog' : ShowBlog,
            'list-blog' : ListBlog,
            'provinces' : ShowProvinces,
        },
         data() {
             return {
                 title: "Ninja App",
                 component: 'form-two',
                 submited : false,
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
            },
             httpRequest() {
                 alert('Making http_request')
                 this.$http.post('https://jsonplaceholder.typicode.com/posts',{
                     title: "New Title",
                     body: "sdffdg dffdfdgfd dfgdfgdfg dfg",
                     userId: 1
                 }).then(function (data) {
                     console.log(data)
                 })

             }
         }
     }
</script>
<style scoped>
    h1 {
        color: purple;
    }

</style>