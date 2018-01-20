<template>
    <div id="single-blog">
        <h1> {{ blog.title }}</h1>
        <article> {{ blog.body }} </article>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                id: this.$route.params.id,
                blog: {}
            }
        },
        created() {
            let vm = this;

            axios.get('https://jsonplaceholder.typicode.com/posts/' + this.id).then(function (data) {
                vm.blog = data.data;
                console.log(vm.blog)
            }).catch(function (error) {
                console.log(error);
            });
        }
    }
</script>