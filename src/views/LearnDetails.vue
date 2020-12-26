<template>
  <section>
      <!-- LEARN DETAIL PAGE -->
      <div class="container">
      <iframe class="youtube" frameborder="2" :src="learn.link"></iframe>
      </div>
      <span>{{learn.name}}</span>
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

<style scoped>
.container {
    overflow: hidden;
    position: relative;
    width:100%;
}

.container::after {
    padding-top: 56.25%;
    display: block;
    content: '';
}

.container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>