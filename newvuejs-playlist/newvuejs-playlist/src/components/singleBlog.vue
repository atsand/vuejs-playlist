<template>
    <div id="single-blog">
        <h1>{{ blog.title }}</h1>
        <article>{{ blog.body }}</article>
    </div>
</template>

<script>
export default{
    data(){
        return {
            id: this.$route.params.id,
            blog:{}
        }
    },
    created(){
        var self = this;
        self.axios
        .get('https://nn-vue-playlist-13b5f.firebaseio.com/posts.json/' + self.id)
        .then(function(result){
            console.log(result.data)
            self.blog = result.data;
        })
    }
}

</script>

<style>
#single-blog{
    max-width: 960px;
    margin: 0 auto;
}
</style>