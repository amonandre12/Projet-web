<script setup>
import { ref }  from 'vue'
const title= ref("Our Mission: Your Success")
</script>
<template>
  <main>
    <div>
  <h1>{{ title }}</h1>
 </div>
    <div class="content">
      <div class="conte">
        <img src="@/assets/students.jpg" alt="les élèves" >
     <div>
       <h3>what we do</h3>
        <p>
          ReactMentoring is a platform for react developers to find mentors who can <br>
          help therm with their react-related questions and problems.We are a <br>
          community of react developers who want to help each other succeed
        </p>
     </div>
      </div>
        <div class="conte-one">
          <div>
         <h3>What we offer</h3>
         <p>
          We offer a variety of mentoring sessions from one-on-one mentoring to <br>
          group mentoring sessions.Browse our available sessions to find the one<br>
          that best fits your reads
         </p>
          </div>
        <img src="@/assets/list.jpg" alt="the list" >
      </div>
      <div class="conteneur">
        <img src="@/assets/certificate.jpg" alt="the certificate">
        <div class="contener">
          <h3>what you get</h3>
        <p>
          no matter if ypu are a beginner or an experienced react developers we are <br>
          here to help you level up your react skills
        </p>
        </div>
      </div>
    </div>
  </main>
</template>
<style scoped>
h1 {
  margin-left:25% ;
}
.content img  {
 width: 9%;
 height: 50%;
 border-radius: 50%;
 margin-top: 30px;
}

.content {
  margin-left: 25%;
}
.conte {
  display: flex;
  gap: 20px;
  margin-left: 60px;
}

.conte-one {
  display: flex;
  gap: 20px;
  margin-left: 70px;
}
.conte-one img {
  margin-left: 50px;
}
.conteneur {
  display: flex;
  gap: 20px;
}

.contener {
  margin-left: 30px
}
.conteneur img {
  margin-left: 20px;
  position: relative;
  left: 20px;
  bottom:10px;
}
</style>
