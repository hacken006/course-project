<template>
  <div>
  <a name="about"></a>
  <div class="intro-header">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="intro-message">
            <h1>Hi there!</h1>
            <h2>My name is Quang Truong. <br>I am Freelance Designer from Viet Nam.</h2>
            <h3>I have over 5 years experience of digital design expertise. I had the opportunity to produce numerous digital projects for national clients such as Takon, Spots, Pay.id, Appsence, Fasyen, TopUp and other exiciting projects. But enough about me, how have you been?</h3>

            <ul class="list-inline intro-social-buttons">
              <li>
                <a href="https://fb.me/qt1st" target="_blank" class="btn btn-default btn-lg"> <span class="network-name">Facebook</span></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
ul.list-inline li{
    display: inline;
}
.intro-header {
  text-align: left;
  color: #fff;
  background-color: #1c1c1c;
  background-size: cover;
  height: 800px;
}

.intro-message {
  position: relative;
  padding-top: 20%;
  padding-bottom: 20%;
}

.intro-message > h1 {
  margin: 0;
  font-size: 5em;
  font-weight: 700;
}

.intro-message > h2 {
  padding-top: 1%;
  padding-bottom: 1%;
}

.intro-message > h3 {
  font-size: 1.5em;
  color: #999999;
  line-height: 1.5;
  padding-top: 0%;
  padding-bottom: 3%;
  max-width: 70%;
}

@media(max-width:767px) {
  .intro-message {
    padding-bottom: 15%;
  }
  .intro-message > h1 {
    font-size: 3em;
  }
  ul.intro-social-buttons > li {
    display: block;
    margin-bottom: 0px;
    padding: 0;
  }
  ul.intro-social-buttons > li:last-child {
    margin-bottom: 0;
  }
  .intro-divider {
    width: 100%;
  }
}


/* social buttons */

.btn {
  display: inline-block;
  color: #959595;
  background: #1c1c1c;
  letter-spacing: 2px;
  transition: 0.2s;
  border: 0px outset rgba(28, 28, 28, 1);
}

.btn:hover {
  color: #fff;
  border: 0px outset rgba(255, 255, 255, 255.9);
  background: #1c1c1c;
  transform: scale(1.1);
  transition: 0.1s;
  letter-spacing: 2px;
}

</style>