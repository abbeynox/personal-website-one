<template>
    <div class="container mx-auto">
        <div class="flex flex-col w-full text-center">
        <Header title="Hey," description="Ich bin Yao." text="Ich bin ein 17 Jahre alter Softwareentwickler Lernender aus der Schweiz. Auf dieser Website wirst du mich etwas besser kennenlernen und einen Blick in die Projekte, an die ich zurzeit arbeite, werfen können."></Header>
        <transition name="view" appear>
            <p class="mx-auto text-lg leading-relaxed text-gray-400 lg:w-2/3" v-show="this.$route.query.redirect !== undefined && this.redirectInfo == true" id="redirectInfo">{{"➡️Weitergeleitet von " + this.$route.query.redirect + ""}}</p>
        </transition>
        </div>  
    </div>
</template>

<script>
import Header from "../components/Header"

export default {
    name: 'Hero',
        components: {
        Header
    },
    data() {
        return {
            redirectInfo: true
        }
    },
    created() {
            setTimeout(() => this.redirectInfo = false, 2000);
        }
}

</script>
