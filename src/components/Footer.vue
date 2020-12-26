<template>
    <div class="card">
        <div class="row mb-4 ">
            <div class="col-md-4 col-sm-11 col-xs-11">
                <div class="footer-text pull-left">
                    <div class="d-flex">
                        <h1 class="font-weight-bold mr-2 px-3" style="color:#16151a; background-color:#f05123"> T </h1>
                        <h1 style="color: #f05123">Devs</h1>
                    </div>
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi non pariatur numquam animi nam at impedit odit nisi.</p>
                </div>
            </div>
            <div class="col-md-2 col-sm-1 col-xs-1 mb-2"></div>
            <div class="col-md-2 col-sm-4 col-xs-4">
                <h5 class="heading">Services</h5>
                <ul>
                    <li>IT Consulting -</li>
                    <li>Development</li>
                    <li>Cloud</li>
                    <li>DevOps & Support</li>
                </ul>
            </div>
            <div class="col-md-2 col-sm-4 col-xs-4">
                <h5 class="heading">Industries</h5>
                <ul class="card-text">
                    <li>Finance</li>
                    <li>Public Sector</li>
                    <li>Smart Office</li>
                    <li>Retail</li>
                </ul>
            </div>
            <div class="col-md-2 col-sm-4 col-xs-4">
                <h5 class="heading">Company</h5>
                <ul class="card-text">
                    <li>About Us</li>
                    <li>Blog</li>
                    <li>Contact</li>
                    <li>Join Us</li>
                </ul>
            </div>
        </div>
        <div class="divider mb-4"> </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Titillium+Web:wght@700&display=swap');

body {
    background-color: #f3f6fd;
    font-size: 11.5px;
    font-weight: bold;
    color: rgb(189, 196, 203)
}

.card {
    padding: 2% 7%;
    color: #646771;
    background-color: #16151a;
    border-radius: 0;
}

ul {
    list-style-type: none;
    margin: 0;
    padding: 0
}

ul>li {
    padding: 4px
}

ul>li:hover {
    color: #f05123;
    cursor: pointer
}

hr {
    border-width: 3px
}

.social>i {
    padding: 1%;
    font-size: 15px
}

.social>i:hover {
    color: rgb(255, 166, 0);
    cursor: pointer
}

.policy>div {
    padding: 4px
}

.heading {
    font-family: 'Titillium Web', sans-serif;
    color: white
}

.divider {
    border-top: 2px solid rgba(189, 196, 203, 0.5);
}
</style>