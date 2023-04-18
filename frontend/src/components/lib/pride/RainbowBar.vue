<template>
  <div class="rainbowbar-container">
    <div class="rainbowbar"></div>
  </div>
</template>

<script>
export default {
  name: "RainbowBar",
};
</script>

<style lang="css" scoped>
.rainbowbar-container {
  display: flex;
  justify-content: center;
  align-items: center;
  /* height: 100vh;
  width: 100vw; */
  background-color: black;
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  z-index: 999999;
}

.rainbowbar {
  height: 5px;
  width: 100%;
  border-radius: 3px;
  background: linear-gradient(
    90deg,
    red 0%,
    yellow 15%,
    lime 30%,
    cyan 50%,
    blue 65%,
    magenta 80%,
    red 100%
  );
  background-size: 200%;
  animation: moveGradient 5s linear infinite;
}
@keyframes moveGradient {
  0% {
    background-position: -200% 0%;
  }
  100% {
    background-position: 0% 0%;
  }
}
</style>
