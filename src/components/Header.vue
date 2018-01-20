<template>
    <nav>
        <ul>
            <li><router-link to="/">Blog</router-link></li>
            <li><router-link to="/provincias">Mostrar Provincias</router-link></li>
        </ul>
    </nav>
</template>
<script>
    import { bus } from '../main'
    export default {
        props: ['title'],
        data() {
            return {
                titles: 'Vue Seie'
            }
        },
        methods: {
            changeTitle() {
//                this.$emit('changeTitle','Change title in parent')
                this.title = 'Change title in Header'
                bus.$emit('titleChanged',this.title);
            }
        }
    }
</script>
<style scoped>
    ul {
        list-style-type: none;
        text-align: center;
        margin: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #fff;
        text-decoration: none;
        padding: 6px 8px;
        border-radius: 10px;
    }
    nav {
        background: #444;
        padding: 14px 0;
        margin-bottom: 40px`;
    }
    .router-link-exact-active {
        background: #eee;
        color: #444;
    }

</style>