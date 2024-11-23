<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView} from 'vue-router'
const title = ref ('ReactMentoring')
const upcoming = ref('Upcoming Session')
const  hidden= ref(false)
const upComing  = ()=> {
  hidden.value=!hidden.value
}
const myClose=() =>{
  hidden.value=!hidden.value
}
const myCancel=ref(true)  
const cancel =() => {
  myCancel.value=!myCancel.value
}
</script>
<template>
  <header>
    <div>
      <h1>{{title}}</h1>
    </div>
      <nav>
        <RouterLink to="/" class="mission">Our Missions</RouterLink>
        <RouterLink to="/about" class="browse">Browse Sessions</RouterLink>
        <RouterLink to="/about" class="upcoming" @click="upComing">Upcoming Sessions</RouterLink>
      </nav>
  </header>
  <div v-if="hidden" class="title-one">
    <div v-if="myCancel">
      <h3>{{upcoming}}</h3>
      <p>
        Kickstart with react personal intro  <button @click="cancel">cancel</button><br>
       Tailored guidance for total beginners in react   <br>
       Nov 1,2023
      </p>
    </div>
    <div>
      <p>
        React component best practices <button>cancel</button> <br>
        Optimize and refactor your component<br>
        Nov 7,2023 
      </p>
      </div>
    <div>
      <button class="btone" @click="myClose">Close</button>
    </div>
  </div>
  <RouterView />
</template>
<style scoped>

.title-one {
 position: absolute; 
 left: 40%;
 bottom: 29%;
}
.btone {
  position: absolute;
  left: 50%;
  padding: 8PX 20px 8px 20px;
  cursor: pointer;
  background-color: rgb(34, 36, 36);
  color: aliceblue;
  border:none;
}
header {
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  align-items: center;
}

header h1 {
  max-height: 50%;
  margin-left: 50px;
}

  header nav {
font-size: 1.1em;
}

.mission {
  text-decoration: none;
  margin-right: 13px;
}
.mission:focus {
  text-decoration: underline;
}
.browse {
  text-decoration: none;
}
.browse:focus {
  text-decoration: underline;
}
.upcoming {
  margin-left:10px;
  text-decoration: none;
  background-color: rgb(34, 36, 36);
  color: aliceblue;
  padding: 8px 15px 8px 15px;

}
</style>
