<template>
  <div class="course">
    <h1>Course Details</h1>
    <h2>{{ course.name }}</h2>
    <img :src="require(`@/assets/${course.image}`)" alt="">
    <p>{{ course.description }}</p>
    <hr>

    <div v-for="learn in course.learning"
    :key="learn.slug">
      <router-link :to="{name: 'courseDetails', params: {learnSlug: learn.slug}}">
      <span>{{learn.name}}</span>
      </router-link>
    </div>

    <router-view :key="$route.path" />
  </div>
</template>

<script>
import Data from '@/data.js';

export default {
  data(){
    return{
      slug: this.$route.params.slug
    }
  },
  computed:{
    course(){
      return Data.courses.find(
        course => course.slug === this.slug
      )
    }
  }  
}
</script>