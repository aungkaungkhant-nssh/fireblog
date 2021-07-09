<template>
  <div class="container register text-center">
    <LoginForm v-if="show" @showForm="showForm"></LoginForm>
    <RegisterForm v-if="!show" @showForm="showForm"></RegisterForm>     
  </div>
</template>

<script>
import RegisterForm from '../components/RegisterForm'
import LoginForm from '../components/LoginForm'
import { ref } from '@vue/reactivity'
export default {
  components: {
    RegisterForm, LoginForm },
  setup(){
    let show=ref(true);
    let showForm=()=>{
      show.value=!show.value;
    }
    return{showForm,show}
  }
}
</script>

<style>
.register{
  width: 500px;
  margin: 160px auto;
}
.register h1{
  font-weight: bolder;
  letter-spacing: 2px;
}
.register span{
  cursor: pointer;
  font-size: 18px;
  color:#95a5a6;
  text-decoration: underline;
}
</style>