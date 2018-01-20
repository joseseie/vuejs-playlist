<template>
    <div v-theme="'narrow'" id="show-blogs">
        <h1>All blog articles</h1>
        <input type="text" v-model="search" placeholder="Search Blogs"/>
        <div v-for="blog in filterBlogs" class="single-blog">
            <h2 v-rainbow>{{ blog.title | to-uppercase }} </h2>
            <article>{{ blog.body | snipped }} </article>
        </div>
    </div>
</template>
<script>
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
        computed: {
            filterBlogs: function () {
                return this.blogs.filter((blog)=> {
                    return blog.title.match(this.search);
                })
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