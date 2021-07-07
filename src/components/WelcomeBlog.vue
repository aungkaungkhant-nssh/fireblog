<template>
   <div class="container-fluid welcomeblog">
              <div class="first">
                  <div class="row g-0">
                        <div class=" col-md-12 intro col-lg-5">
                            <div class="mb-3">
                                <h1>Welcome!</h1>
                                <p>Weekly blog articles with all things programming including HTML, CSS, JavaScript and more. Register today to never miss a post</p>
                            </div>
                           <a href="#" class="go">Login/Register</a>
                                <span class="material-icons arrow">
                                    east
                            </span>
                        </div> 
                        <div class="col-md-12 col-lg-7">
                            <img src="../assets/crop.jpeg" alt="" style="width:100% ; height:80vh">
                        </div> 
                  </div>
              </div>
             
  </div>
</template>

<script>

export default {
  components: { },

}
</script>

<style>
.welcomeblog{
    color:#fff;
    text-align: center;
   
}


.intro{
    background-color: #303030;
    padding-bottom:15px;
}
.intro div{
    text-align: center;
    padding: 45px 20px 10px 20px;
}
.intro h1{
    letter-spacing: 2px;
    line-height: 50px;
    color:#dfe6e9;
}
.intro p{
    color:#c8d6e5;
    letter-spacing: 1px;
    word-spacing: 2px;
}
.intro .go{
    text-decoration: none;
    font-size: 20px;
    margin-top: 20px;
    color:#dfe6e9;
    text-transform: uppercase;
    letter-spacing: 2px;
}
.arrow{
    position: relative;
    top:3px;
    left:10px;
    cursor: pointer;
}

</style>