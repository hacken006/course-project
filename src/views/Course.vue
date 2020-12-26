<template>
  <div class="course">
	<section class="candy-wrapper">
	<article class="main"><h1>{{ course.name }}</h1>
		<router-view :key="$route.path" />
		<img :src="require(`@/assets/${course.image}`)" :alt="course.name">
		<br>
		<p>{{ course.description }}</p>
	</article>
	<!-- Leave No Space -->
	<aside class="sidebar make-me-sticky">
		<h2 style="color: white">Bài Học</h2>
		<div v-for="learn in course.learning"
		:key="learn.slug">
		<router-link :to="{name: 'courseDetails', params: {learnSlug: learn.slug}}">
		<span>{{learn.name}}</span>
		</router-link>
		</div>
	</aside>
	</section>

  </div>
</template>

<script>
import Data from '@/data.js';

export default {
  data(){
    return{
	  slug: this.$route.params.slug,
	  active: true,
    }
  },
  computed:{
    course(){
      return Data.courses.find(
        course => course.slug === this.slug
      )
    }
  },
  methods:{
	  changeClass(){
		  this.active = false;
	  }
  }  
}
</script>

<style scoped>
/* formatting */
*, *:before, *:after {
	margin: 0;
	padding: 0;
	-moz-box-sizing: border-box;
	-webkit-box-sizing: border-box;
	-ms-box-sizing: border-box;
	box-sizing: border-box;
}
html {
	height: 100%;
	font-size: 100%;
}
body {
	height: 100%;
	font: 1em/1.5 Georgia, serif;
	background-color: #222;
	color: #fff;
}
h1 {
	font: 2.25em/1 Helvetica, sans-serif;
	margin-bottom: .667em;
}
h2 {
	font: 1.5em/1 Helvetica, sans-serif;
	text-transform: uppercase;
	margin-bottom: .667em;
}
p {
	margin-bottom: 1em;
}
a{
  color: #f05123;
}
a:hover{
  color: white;
}
header, footer {
	background: #1a1a1a;
	padding: 2em;
	color: #fff;
	min-height: .5em;
	text-align: center;
}
.main {
	padding: 1.5em 3em 1.5em 1.5em;
}
.sidebar {
	padding: 2em 1.5em;
	background-color: #343a40;
  
}
.large-photo {
	height: 0;
	padding-top: 61.9%;
	background-color: #333;
	margin-bottom: 1em;
}
@media (min-width:43.75em) {

	/* responsive layout */
	.candy-wrapper {
		max-width: 80em;
		margin: 0 auto;
		position: relative;
	}
	.main {
		display: inline-block;
		width: 75%;
		}
	.sidebar {
		display: inline-block;
		width: 25%;
		vertical-align: top;
	}
}
.make-me-sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 40px;
}
.disableclass{
	display: none;
}
</style>
