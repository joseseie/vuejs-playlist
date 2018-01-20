<template>
    <div v-theme="'narrow'" id="show-blogs">
        <h1>All blog articles</h1>
        <input type="text" v-model="search" placeholder="Search Blogs"/>
        <div v-for="blog in filterBlogs" class="single-blog">
            <router-link v-bind:to="'/blog/' + blog.id">
                <h2 v-rainbow>{{ blog.title | toUpperCase }} </h2>
            </router-link>
            <article>{{ blog.body | snipped }} </article>
        </div>
    </div>
</template>
<script>
    import searchMixin  from '../mixins/SearchMixin'
    export default {
        data() {
            return {
                blogs: [],
                search: '',
            }
        },
        created() {
            let vm = this;

            axios.get('https://jsonplaceholder.typicode.com/posts').then(function (data) {
//                alert('blgs buscados com sucesso')
                vm.blogs = data.data;
//                console.log(vm.blogs)
            }).catch(function (error) {
                console.log(error);
            });

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
        },
        mixins: [searchMixin]
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