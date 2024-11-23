<script setup>
import { ref } from 'vue'
// the fonction for form
const showForm = ref (false)

const toggleForm = () => {
  showForm.value=!showForm.value
}
</script>
<template>
  <div class="contente">
    <div>
      <img src="@/assets/kickstart-react.jpg" alt="the student">
    </div>
    <div>
      <h1>
        Kickstart with React:<br>
        Personal Intro<br>
      </h1>
      <p>Nov 1,2023</p>
      <button @click="toggleForm">Book Session</button><br>
      <div class="para">

        <p> Starting with React can be daunting.</p>
        <p> Yet with the right guidance, it can be an exhilarating journey</p>
        <p>In this session,we will begin by demystifying react's core philosophy</p>
        <p> Why was react created ?</p>
        <p>What problems does it solve in the world of web development?</p>
        <p>Together we"ll delve into the virtual DOM,JSX and components-based architecture</p>
        <p>No reed to worry about the jargon.l'll break everything down step by step</p>
        <p>We'll touch on the importance of unidirectional data flow and the component lifecycle.</p>
        <p>We'll set up a new React project together</p>
        <p>By the end of our session, you will heve a clear understanding and a roadmap tailored just for you to aid.</p>
      </div>
    </div>
  </div>
  <form>
   <div  class="contener-form" v-if="showForm" >
    <div class="formsearch">
      <h3>Book Session</h3>
      <p>Your name</p>
      <input type="text" required name="prenom"/><br>
      <p>Your Email</p>
      <input type="email" required v-model="searchForm">
      <div class="btn">
        <p> cancel </p><button @click="submitButton">Book Session</button>
    </div>
    </div>
   </div>
  </form>
</template>

<style scoped>
.contener-form {
  position: absolute;
  left: 55%;
  top: 40%;
}
.contente {
  display: flex;
  gap: 25px;
  position: absolute;
  left: 30%;
}

.contente img {
  width: 300px;
  height: 210px;
  object-fit: cover;
}

.contente button {
  padding: 8PX 20px 8px 20px;
  cursor: pointer;
  background-color: rgb(34, 36, 36);
  color: aliceblue;
  border:none;
}
.para {
  position: absolute;
  left: 10px;
  margin-top: 20px ;
}
input {
width: 200%;
height: 50px;
}

.formsearch p {
  margin-bottom: 4px;
}

.btn {
  display: flex;
  gap: 20px;
  position: absolute;
  left: 100%;
  margin-top: 20px
}

.btn button {
  width: 120px;
  height: 40px;
  cursor: pointer;
  background-color: rgb(34, 36, 36);
  color: aliceblue;
  border:none;
}
</style>
