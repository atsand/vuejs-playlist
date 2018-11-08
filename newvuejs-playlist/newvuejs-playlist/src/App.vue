<template>
  <form-helper>
    <h2 slot="slotTitle">{{ title }}</h2>
    <p slot="slotParagraph">This is the slot paragraph</p>
  </form-helper>
</template>

<script>
import formHelper from './components/formHelper'

export default {
  components:{
    'form-helper':formHelper
  },
  data () {
    return {
      title:'I am a dynamic slot title'
    }
  },
  methods:{
    
  }
}
</script>

<style scoped>


</style>
