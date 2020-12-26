<template>
  <div class="py-5">
    <div class="container">
  <div class="row">
    <div class="col-sm-12 col-md-5">
       <textarea v-model="htmlCode" class="form-control" id="code" rows="20"></textarea>
    </div>
    <div class="col-sm-12 col-md-7">
          <p class="out_html" v-html="htmlCode"></p>
    </div>
  </div>
</div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      htmlCode: '<h1>Welcome Tdevs Code Online</h1>'
    }
  },
}
</script>

<style scoped>
  .out_html{
    width: 100%;
    border: 1px solid green;
    border-radius: 4px;
    min-height: 100%;
    height: auto;
  }
</style>
