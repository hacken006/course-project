<template>
  <div>
      <h1>FULL COURSE SHOW</h1>
      <div v-for="course in courses"
      :key="course.menus">
        <router-link :to="{name: 'Course', params: {slug:course.slug}}">
            {{course.menus}}
        </router-link>

      </div>
  </div>
</template>

<script>
import Data from '@/data.js';

export default {
    data(){
        return{
          courses: Data.courses,
        }
    }
}
</script>

<style>

</style>