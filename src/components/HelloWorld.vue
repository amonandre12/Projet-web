<template>
    <div class="conteners">
      <div class="state">
        <img src="@/assets/-flow.jpg" alt="state">
        <p>
          Effective state management tactics <br>
          Strategies to manage state efficiently
        </p>
        <button>learn More</button>
      </div>
      <div class="hooks">
        <img src="@/assets/hooks.jpg" alt="the hooks">
        <p>
          Custom hooks Creation<br>
          Craft your custom hooks
        </p>
        <button>learn More</button>
      </div>
      <div class="styling">
        <img src="@/assets/styling.jpg" alt="the styling">
        <p>
          Styling Strategies in React <br>
          Discuss and implement styling solutions.
        </p>
        <button>learn More</button>
      </div>
    </div>
</template>
<script setup>

</script>

<style scoped>

.conteners {
   display: flex;
   margin-top: 55px;
   justify-content:center;
   gap: 30px;
}

.conteners img {
  width: 300px;
  height: 310px;
}

.conteners button {
  padding: 8px 20px 8px 20px;
  cursor: pointer;
  background-color: rgb(34, 36, 36);
  color: aliceblue;
  border:none;
}

.state button {
   position: absolute;
   left:30%;
}

.hooks button {
  position: absolute;
  left:53%;
}

.styling button {
  position: absolute;
  right: 16%;
}
</style>
