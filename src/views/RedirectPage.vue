<template>
    <div>
        <Header title="Einen Moment" description="Weiterleitung erfolgt."></Header>
        <LoadingBar></LoadingBar>
    </div>
</template>


<script>
import Header from "../components/Header"
import LoadingBar from "../components/lib/LoadingBar"
import routes from "../data/routes.js"

export default {
    name: 'Weiterleitung',
    title: 'Weiterleiten...',
    components: {
        Header,
        LoadingBar
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
                console.log("Bei der Weiterleitung ist ein Fehler aufgetreten!");
                setTimeout( () => location.href = "/404?error=Bei der Weiterleitung ist ein Fehler aufgetreten.", 1000)
            }
        }
        // GET Path: this.$router.currentRoute
        //setTimeout( () => location.href = 'https://google.com', 2000)
    }
}
</script>
