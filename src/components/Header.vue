<template>
    <div class="header">
        <nav class="navbar smart-scroll navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
                <router-link class="navbar-brand" to="/"><img :src="require(`@/assets/logo.png`)" alt=""></router-link>
                
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_nav">
	                <span class="navbar-toggler-icon"></span>
	            </button>
                
                <div class="collapse navbar-collapse" id="main_nav"> 
                    <ul class="navbar-nav mx-auto">
                        <li class="nav-item"><router-link class="nav-link" to="/">Trang Chủ</router-link></li>
                        <li class="nav-item"><router-link class="nav-link" to="/courses">Khóa Học</router-link></li>
                        <li class="nav-item"><router-link class="nav-link" to="/code">Code Online</router-link></li>
                        <!-- <li class="nav-item"><router-link class="nav-link" to="/about">About Us</router-link></li> -->
                    </ul>
                </div>
            </div>
        </nav>

    </div>
</template>

<script>
export default {
    data(){
        return{
        }
    },


}
</script>

<style scoped>

.nav-link{
    text-transform: uppercase;
}
div a img{
    height: 34px;
}

/* ============ bootstrap css default ============ */
.smart-scroll{
	position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1030;
}
.scrolled-down{
	transform:translateY(-100%); transition: all 0.3s ease-in-out;
}
.scrolled-up{
	transform:translateY(0); transition: all 0.3s ease-in-out;
}
/* ============ only desktop view ============ */
@media all and (min-width: 992px) {
	.navbar .nav-item .dropdown-menu{  display:block; opacity: 0;  visibility: hidden; transition:.3s; margin-top:0;  }
	.navbar .nav-item:hover .nav-link{ color: #fff;  }
	.navbar .dropdown-menu.fade-down{ top:80%; transform: rotateX(-75deg); transform-origin: 0% 0%; }
	.navbar .dropdown-menu.fade-up{ top:180%;  }
	.navbar .nav-item:hover .dropdown-menu{ transition: .3s; opacity:1; visibility:visible; top:100%; transform: rotateX(0deg); }
}
/* ============ desktop view .end// ============ */
</style>