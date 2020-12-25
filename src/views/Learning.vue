<template>
  <section>
      <!-- LEARN DETAIL PAGE -->
      <h1>{{learn.name}}</h1>
      <iframe width="420" height="345" :src="learn.link">
        </iframe>
  </section>
</template>

<script>
import Data from '@/data.js';

export default {
    props:{
        slug: {
            type: String,
            required: true
        },
        learnSlug: {
            type: String,
            required: true
        }
    },
    computed: {
        course(){
            return Data.courses.find(
                course => course.slug === this.slug
            )
        },
        learn(){
            return this.course.learning.find(
                learn => learn.slug === this.learnSlug
            )
        }
    }
}
</script>

<style>

</style>