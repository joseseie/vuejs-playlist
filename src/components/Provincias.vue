<template>
    <div v-theme="'narrow'" id="show-blogs">
        <h1>Todas Provincias</h1>
        <input type="text" v-model="search" placeholder="Search Provinces"/>
        <div v-for="p in filterProvinces" class="single-blog">
            <h2 v-rainbow>Tipo: {{ p.description | toUpperCase }} </h2>
            <article>Nome da {{ p.description }}: {{ p.name  }} </article>
            {{ p }}
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                provinces: [],
                search: '',
            }
        },
        created() {
            let vm = this;

            axios.get('http://apimoz.herokuapp.com/api/v1.0/provinces\n' +
                '\t? key=bf82ec128a49240cea7d3635e6934382cef63859').then(function (data) {
//                alert('blgs buscados com sucesso')
                vm.provinces = data.data.places;
                console.log(vm.provinces)
            }).catch(function (error) {
                console.log(error);
            });

        },
        computed: {
            filterProvinces: function () {
                return this.provinces.filter((province)=> {
                    return province.name.toLowerCase().match(this.search.toLowerCase());
                })
            }
        },
        filters: {
            toUpperCase(value) {
                return value.toUpperCase();
            }
        },
        directives: {
            'rainbow':{
                bind(el,binding,vnode) {
                    el.style.color = "#" + Math.random().toString(16).slice(2,8);
                }
            }
        }
    }
</script>
<style>
    #show-blogs {
        max-width: 800px;
        margin: 0 auto;
    }
    .single-blog {
        padding: 20px;
        margin: 20px 0;
        box-sizing: border-box;
        background: #eee;
    }
</style>