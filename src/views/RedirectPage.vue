<template>
    <div>
        <Header title="Einen Moment" description="Weiterleitung erfolgt."></Header>
        <LoadingBar></LoadingBar>
        <div></div>
    </div>
</template>


<script>
import Header from "../components/Header"
import LoadingBar from "../components/lib/LoadingBar"
import routes from "../router/index.js"

export default {
    name: 'Weiterleitung',
    title: 'Weiterleiten...',
    components: {
        Header,
        LoadingBar
    },
    data: function() {
        return {
            routes: routes
        };
    },
    created() {
        //setTimeout( () => location.href = 'https://google.com', 2000)
        console.log("Folgende Routes wurden gefunden: "+ routes)
    }
}
</script>
