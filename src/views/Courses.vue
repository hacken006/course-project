<template>
  <div class="album py-5 bg-light">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-lg-4" v-for="course in courses"
      :key="course.id">
          <div class="card mb-4 shadow-sm">
            <div class="card-img-wrap">
            <img class="bd-placeholder-img card-img-top" :src="require(`@/assets/${course.image}`)" alt="course.name">
            </div>
              <div class="card-body">
                <p class="card-text">{{course.description}}</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <router-link class="btn btn btn-danger" :to="{name: 'Course', params: {slug:course.slug}}">Vào Học</router-link>
                    </div>
                    <small class="text-muted">{{course.jointed}} Joined</small>
                  </div>
              </div>
          </div>
        </div>
      </div>

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

<style scoped>
img{
  object-fit: cover;
  object-position: -20% 50%;
  width: 100%;
  height: 195px;
}

.card-img-wrap {
  overflow: hidden;
  position: relative;
}
.card-img-wrap:after {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(255,255,255,0.3);
  opacity: 0;
  transition: opacity .25s;
}
.card-img-wrap img {
  transition: transform .25s;
  width: 100%;
}
.card-img-wrap:hover img {
  transform: scale(1.2);
}
.card-img-wrap:hover:after {
  opacity: 1;
}

/*===========SHOW COURSE============*/
.jumbotron {
  padding-top: 3rem;
  padding-bottom: 3rem;
  margin-bottom: 0;
  background-color: #fff;
}
@media (min-width: 768px) {
  .jumbotron {
    padding-top: 6rem;
    padding-bottom: 6rem;
  }
}

.jumbotron p:last-child {
  margin-bottom: 0;
}

.jumbotron h1 {
  font-weight: 300;
}

.jumbotron .container {
  max-width: 40rem;
}

footer {
  padding-top: 3rem;
  padding-bottom: 3rem;
}

footer p {
  margin-bottom: .25rem;
}

.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}
/*===========END SHOW============*/

</style>