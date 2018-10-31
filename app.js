new Vue({
    el:'#vue-app',
    data:{
        name:'',
        job:'Ninja',
        website: 'http://www.thenetninja.co.uk',
        websiteTag:'<a href="http://www.thenetninja.co.uk">The Ninja Site</a>',
        age: 20,
        x:0,
        y:0,
        a:0,
        b:0,
        available: false,
        nearby: false,
        error: false,
        success: false
    },
    computed:{
        addthem: function(){
            return this.a + this.b
        },
        compClasses: function(){
            return {
                available: this.available,
                nearby: this.nearby
            }
        }
    },
    methods:{
        greet: function(time){
            return 'Good ' + time + ' ' + this.name;
        }, 
        add: function(x){
            this.age += x;
        },
        subtract: function(x){
            this.age -= x;
        },
        updateXY: function(event){
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        click: function(){
            alert('clicked me');
        },
        logName: function(){
            console.log("you entered your name");
        },
        logAge: function(){
            console.log("you entered your name")
        }
    }
});