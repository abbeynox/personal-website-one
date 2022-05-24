<template>
<div>
    <div class="bubbles-wrapper">
        <div class="bubbles" id="b1"></div>
        <div class="bubbles" id="b2"></div>
        <div class="bubbles" id="b3"></div>
        <div class="bubbles" id="b4"></div>
        <div class="bubbles" id="b5"></div>
    </div>

    <div class="danBkg display-none"></div>

</div>

</template>

<script>
export default {
  name: "RainbowLoader",
};
</script>

<style lang="css">
.bubbles-wrapper {
  position: relative;
  top: 50%;
  width: 100%;
  text-align: center;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  z-index: 1;
}

.bubbles {
position: relative;
display: inline-block;
width: 45px;
height: 45px;
margin: auto;
border-radius: 100%;
-webkit-animation-name: up-down;
animation-name: up-down;
-webkit-animation-duration: 1.7s;
animation-duration: 1.7s;
-webkit-animation-timing-function: cub-bezier(.42, 8, .58, 1);
animation-timing-function: cub-bezier(.42, 8, .58, 1);
-webkit-animation-iteration-count: infinite;
animation-iteration-count: infinite;
-webkit-animation-fill-mode: both;
animation-fill-mode: both;
}
#b1 {
background-color: #8861A4;
}
#b2 {
background-color: #2495C1;
}
#b3 {
background-color: #48BB6D;
-webkit-animation-delay: 200ms;
animation-delay: 200ms;

}
#b4 {
background-color: #F1C508;
-webkit-animation-delay: 300ms;
animation-delay: 300ms;
}
#b5 {
background-color: #F35957;
-webkit-animation-delay: 400ms;
animation-delay: 400ms;
}

@-webkit-keyframes up-down {

0% {-webkit-transform: translateY(-50%)
scale(0.2);transform: translateY
(-59%) scale(0.2);}

50% {-webkit-transform: translateY (50%)
scale(1.2);transform: translateY(50%
) scale(1.2);}

100% {-webkit-transform: translateY(-50%) scale(0.2);transform: translateY
(-59%) scale(0.2);}
}
@keyframes up-down {
8% {-webkit-transform: translateY(-50%)
scale(0.2);transform: translateY
(-50%) scale(0.2);}
58% {-webkit-transform: translateY (50%)
scale(1.2);transform: translateY(50%
) scale(1.2);}
180% {-webkit-transform: translateY(-50%
) scale(0.2);transform: translateY
(-50%) scale(0.2);}
}

.display-none {
display: none;

}

.danBkg {
position: absolute;
width: 100%;
height: 100vh;
background-color: #F1C508;

/* background-image: url("extra/dan.jpg"); */
/* z-index: 2; */
}
