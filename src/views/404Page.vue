<template>
    <div>
        <Header title="404 - Not found" description="Diese Seite wurde nicht gefunden." text="Du befindest dich an einem seltsamen Ort. Hast du dich eventuell vertippt? Überprüfe die URL und versuche es nochmals."></Header>
    </div>
</template>


<script>
import Header from "../components/Header"

export default {
    name: '404Page',
    title: '404 - Nicht gefunden',
    components: {
        Header
    }
}
</script>
