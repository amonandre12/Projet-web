<script setup>
import HelloWorld from '@/components/HelloWorld.vue';
import { useRouter } from 'vue-router';
import { ref } from 'vue'
const title = ref('Available mentoring sessions') 
const router = useRouter()

const navigateTo = (ButtonOne) => {
  router.push((ButtonOne))
}
const navigate = (ButtonTwo) => {
  router.push((ButtonTwo))
}
</script>
<template>
    <div class="title">
        <h3>{{ title }}</h3>
        <p>From an one-on-one introduction to react's basics all the way up to a deep dive into state mechanics-we got just the right session for you </p>
    </div>
    <div class="about">
      <div class="students">
        <img src="@/assets/kickstart-react.jpg" alt="two students">
        <p>
          kickstart with react personal intro <br>
          Tailored guidance for total beginner in react
        </p>
        <button @click="navigateTo('ButtonOne')">Learn more</button>
      </div>
      <div class="code">
        <img src="@/assets/debug-code.jpg" alt="code">
        <p>
          Debugging your react code <br>
          Stuck with a react bug ? Let's squash it together
        </p>
        <button>Learn more</button>
      </div>
      <div class="blueptint">
        <img src="@/assets/blueprint-component.jpg" alt="blueprint">
        <p>
          React component best practices<br>
          Optimize and refactor your component
        </p>
        <button @click="navigate('ButtonTwo')">learn more</button>
      </div>
  </div>
  <HelloWorld/>
</template>

<style scoped>
.about {
  display: flex;
  justify-content:center;
  gap: 20px;
}
.about img {
width: 300px;
height: 310px;
}

.title {
  margin-left: 10%;
}
.students p {
  margin-left: 20px;
}

.students img {
  margin-right: 3px;
}
.students button {
  position: absolute;
  left:28%;
}
.code p {
  margin-left: 20px;
}

.code img {
  margin-left: 10px;
}
.code button {
  position: absolute;
  left:53%;
}

.blueptint p {
  margin-left: 20px;
}

.blueptint img {
  margin-right: 18px;
}
.blueptint button {
  position: absolute;
  right: 16%;
}
.about button {
  padding: 8PX 20px 8px 20px;
  cursor: pointer;
  background-color: rgb(34, 36, 36);
  color: aliceblue;
  border:none;
}
</style>
