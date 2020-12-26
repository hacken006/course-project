<template>
  <div class="home">
    <Slide />
    <Courses />
  </div>
</template>

<script>
// @ is an alias to /src
import Slide from "@/components/Slide";
import Courses from '@/views/Courses';

export default {
  name: "Home",
  components: {Slide, Courses},
  data(){
    return{}
  }
};
</script>
