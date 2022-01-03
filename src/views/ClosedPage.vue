<template>
    <div>
        <Header title="Bald wieder verfügbar" description="Diese Seite wird aktualisiert" text="Ich bitte um Geduld. Folge in dieser Zeit meinen Twitteraccount."></Header>
        <LoadingBar></LoadingBar>
    </div>
</template>


<script>
import Header from "../components/Header"
import LoadingBar from "../components/lib/LoadingBar"

export default {
    name: 'ClosedPage',
    title: 'Website wird aktualisiert',
    components: {
        Header,
        LoadingBar
    }
}
</script>
