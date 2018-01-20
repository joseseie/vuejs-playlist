import addBlog from './components/AddBlog.vue';
import showBlog from './components/showBlog.vue';
import provincias from './components/Provincias.vue';
import singleBlog from './components/SingleBlog.vue';

export default [
    { path: '/', component: showBlog},
    { path: '/add-blog', component: addBlog},
    { path: '/provincias', component: provincias },
    { path: '/blog/:id', component: singleBlog}

]