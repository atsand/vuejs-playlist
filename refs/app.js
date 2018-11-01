new Vue({
    el: '#vue-app',
    data:{
        output: 'Your fav food'
    },
    methods:{
        readRefs: function(){
            this.output = this.$refs.input.value;
            console.log(this.$refs.test.innerText)
        }
    }
});