<template>
    <div>
        <slot name="slotTitle"></slot>
        <h1>I'm the formHelper title</h1>
        <slot name="slotParagraph"></slot>
    </div>
</template>

<script>


export default {
  components:{
    
  },
  data () {
    return {
      
    }
  },
  methods:{
    
  }
}
</script>

<style scoped>
h1{
    color:red
}

</style>
