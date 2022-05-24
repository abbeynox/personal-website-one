<template>
    <div>
        <Header title="One moment" description="Forwarding occurs."></Header>
        <LoadingBar></LoadingBar>
        <RainbowLoader></RainbowLoader>
    </div>
</template>


<script>
import Header from "../components/Header"
import LoadingBar from "../components/lib/LoadingBar"
import routes from "../data/routes.js"
import RainbowLoader from "../components/lib/RainbowLoader.vue";


export default {
    name: 'Weiterleitung',
    title: 'Redirect...',
    components: {
    Header,
    LoadingBar,
    RainbowLoader
},
    data: function() {
        return {
            routes: routes,
        };
    },
    created() {
        console.log(this.$router.currentRoute);
        for (var i in routes) {
            if (routes[i].path === this.$router.currentRoute.path) {
                console.log(routes[i].path + " found. His RedirectUri is " + routes[i].redirectUri);
                setTimeout( () => location.href = routes[i].redirectUri, 1000)
                break;
            }
            else {
                console.log("An error occurred during forwarding!");
                setTimeout( () => location.href = "/404?error=An error occurred during forwarding!", 1000)
            }
        }

    }
}
</script>
