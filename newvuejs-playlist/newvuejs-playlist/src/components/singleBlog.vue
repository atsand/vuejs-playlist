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
        // this.$http.get('https://nn-vue-playlist-13b5f.firebaseio.com/posts.json/' + this.id)
        // .then(function(data){
        //     return data.json();
        // })
        // .then(function(data){
        //     this.blog = data;
        // })
        var self = this;
        self.axios
        .get('https://cors-anywhere.herokuapp.com/https://nn-vue-playlist-13b5f.firebaseio.com/posts.json/' + self.id)
        .then(function(result){
            console.log(result)
            self.blog = result;
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