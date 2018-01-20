<template>
    <div>
        <button @click="post">Gravar dados no firebase</button>
        <button @click="get">Buscar os dados no firebase</button>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                blog: {
                    title: 'Terceiro blog postado',
                    content: 'PPPPPPPPPPP SSSSSSSSSSSS fglfkdj sfns  qeqwm wr ew retlkfjdk',
                    categories: ['Ninjas','Pipocas','Mais nada'],
                    author: 'Jorge Bila Januario'
                }
            }
        },

        methods: {

            post: function () {

                axios.post('https://vue-project-7415b.firebaseio.com/posts.json', this.blog).then(function (data) {
                    console.log(data)
                    alert('Blog postado no firebbase com sucesso');
                })
            },
            get: function () {

                axios.get('https://vue-project-7415b.firebaseio.com/posts.json').then(function (data) {
                    console.log(data.data);
                    var blogsArray =[];
                    var obj = data.data;
                    for (let key in obj)
                    {
                        obj[key].id = key;
                        blogsArray.push(obj[key]);
                    }
                    console.log(blogsArray)
                });
            }

        }

    }
</script>