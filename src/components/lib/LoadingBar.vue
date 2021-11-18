/* eslint-disable no-mixed-spaces-and-tabs */
<template>
    <div class="w-full">
        <div class="w-full overflow-hidden">
            <div class="relative inline-block w-1/2 fluentProgressBar-waiting"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "LoadingBar",
}
</script>




<style>
  
.fluentProgressBar-waiting {
	background: rgba(0,120,212,0);
	background: -moz-linear-gradient(left, rgba(212, 0, 194, 0) 0%, rgb(121, 0, 177) 51%, rgba(0,120,212,0) 100%);
	background: -webkit-gradient(left top, right top, color-stop(0%, rgba(0,120,212,0)), color-stop(51%, rgb(121, 0, 177)), color-stop(100%, rgba(0,120,212,0)));
	background: -webkit-linear-gradient(left, rgba(0,120,212,0) 0%, rgb(121, 0, 177) 51%, rgba(0,120,212,0) 100%);
	background: -o-linear-gradient(left, rgba(0,120,212,0) 0%, rgb(121, 0, 177) 51%, rgba(0,120,212,0) 100%);
	background: -ms-linear-gradient(left, rgba(0,120,212,0) 0%, rgb(121, 0, 177) 51%, rgba(0,120,212,0) 100%);
	background: linear-gradient(to right, rgba(0,120,212,0) 0%, rgb(121, 0, 177) 51%, rgba(0,120,212,0) 100%);
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#0078d4', endColorstr='#0078d4', GradientType=1 );
	height: 4px;
  
    -webkit-animation: progressBarAnimation 2s linear infinite;
	animation: progressBarAnimation 2s linear infinite;
}

@keyframes progressBarAnimation {
	0% {
		left: -50%;
	}
	100% {
		left: 100%;
	}
}
</style>

