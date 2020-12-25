<template>
  <div class="home">
    <h1>HOME COURSE PAGE</h1>
    <div v-for="course in courses"
    :key="course.name">
      <router-link :to="{name : 'Course', params : {slug:course.slug} }">
        <h2>{{course.name}}</h2>
      </router-link>
      <figure>
        <router-link :to="{name : 'Course', params : {slug:course.slug} }">
          <img :src="require(`@/assets/${course.image}`)" alt="course.name">
        </router-link>
      </figure>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Data from '@/data.js';

export default {
  name: "Home",
  components: {},
  data(){
    return{
      courses: Data.courses
    }
  }
};
</script>
