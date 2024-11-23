<template>
  <div class="btn">
  <div>
   <img src="@/assets/blueprint-component.jpg" alt="the blue">
  </div>
 <div>
  <h1>React Component Best<br> Practices </h1>
  <p>Nov 7,2023</p>
  <button @click="submitButton">Book Session</button>
 </div>
  <div class="titre">
    <p>
  Brink your existing components and let"s refactor them.Learn the best practices to create scalable and
  reusable components
    </p>
  </div>
</div>
  <form>
   <div  class="contener-form"  v-if="showForm">
    <div class="formsearch">
      <h3>Book Session</h3>
      <p>Your name</p>
      <input type="text" name="prenom" id="prenom" required v-model="searchForm"/><br>
      <p>Your Email</p>
      <input type="email" required v-model="searchForm">
      <div class="btn">
       <p class="cancel">cancel </p><button @click="navigateTo('ButtonTwo')">Book Session</button>
      </div>
    </div>
  </div>
  </form>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router= useRouter()
import { ref } from 'vue'
const showForm = ref(false)
const submitButton = () => {
  showForm.value=!showForm.value
}
 const navigateTo = (ButtonTwo) => {
  router.push((ButtonTwo))
}
</script>

<style scoped>
.contener-form {
  display: flex;
  position: absolute;
  left: 53%;
  top: 16%;
}

input {
width: 210%;
height: 51px;
}

.btn {
  gap: 20px;
  margin-top: 50px;
}
.formsearch p {
  margin-bottom: 4px;
}
.btn button {
  width: 120px;
  height: 40px;
  cursor: pointer;
  background-color: rgb(34, 36, 36);
  color: aliceblue;
  border:none;
  position: relative;
  left: 100px;
  bottom: 30px
}

.cancel {
  position: relative;
  left: 100px;
  bottom: 30px
}
.btn {
  display: flex;
  gap: 25px;
  position: absolute;
  left: 30%;
}

.btn img {
  width: 300px;
  height: 225px;
  object-fit: cover;
}

.btn button {
  padding: 8PX 20px 8px 20px;
  cursor: pointer;
  background-color: rgb(34, 36, 36);
  color: aliceblue;
  border:none;
}

.titre {
  position: absolute;
  left: 10px;
  margin-top: 40%;
  font-size: 1.1rem;
}
</style>
