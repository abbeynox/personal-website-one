<template>
  <div>
    <div class="center">
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "AnimatedRainbow",
};
</script>

<style lang="css" scoped>
/* .center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
} */
ul {
  margin: 0;
  padding: 0;
  position: relative;
  /* width: 400px;
  height: 240px; */
  margin-right: -20px;
  margin-left: -20px;
  margin-bottom: 35px;
  width: 100px;
  height: 60px;
  overflow: hidden;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}
ul li {
  list-style: none;
  border-radius: 50%;
  /* border: 15px solid #000; */
    border: 3.75px solid #000;

  position: absolute;
  top: 100%;
  left: 50%;
  border-bottom-color: transparent !important;
  border-left-color: transparent !important;
  animation: animate 5s infinite alternate;
  transform: translate(-50%, -50%);
}
ul li:nth-child(1) {
  /* width: 60px;
  height: 60px; */
  width: 15px;
  height: 15px;
  border-color: #ff0000;
  animation-delay: 0.2s;
}
ul li:nth-child(2) {
  /* width: 90px;
  height: 90px; */
  width: 22.5px;
  height: 22.5px;
  border-color: #ff7f00;
  animation-delay: 0.4s;
}
ul li:nth-child(3) {
  /* width: 120px;
  height: 120px; */
  width: 30px;
  height: 30px;
  border-color: #ffff00;
  animation-delay: 0.6s;
}
ul li:nth-child(4) {
  /* width: 150px;
  height: 150px; */
  width: 37.5px;
  height: 37.5px;
  border-color: #00ff00;
  animation-delay: 0.8s;
}
ul li:nth-child(5) {
  /* width: 180px;
  height: 180px; */
  width: 45px;
  height: 45px;
  border-color: #0000ff;
  animation-delay: 1s;
}
ul li:nth-child(6) {
  /* width: 210px;
  height: 210px; */
  width: 52.5px;
  height: 52.5px;
  border-color: #4b0082;
  animation-delay: 1.2s;
}
ul li:nth-child(7) {
  /* width: 240px;
  height: 240px; */
  width: 60px;
  height: 60px;
  border-color: #9400d3;
  animation-delay: 1.4s;
}
@keyframes animate {
  0% {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(315deg);
  }
}
</style>
