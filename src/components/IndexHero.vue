<template>
    <div class="container px-5 mx-auto">
        <div class="flex flex-col w-full mb-20 text-center">
        <Header title="Hey du," description="Ich bin Yao." text="Ich bin Applikationsentwickler und interessiere mich für vielfältige Frontend Applikationen. In meinem Gebiet bin ich vielseitig wissbegierig und freue mich, neue Kontakte zu knüpfen."></Header>
        <transition name="view" appear>
            <p class="mx-auto text-lg leading-relaxed text-gray-400 lg:w-2/3" v-show="this.$route.query.redirect !== undefined && this.redirectInfo == true" id="redirectInfo">{{"➡️Weitergeleitet von " + this.$route.query.redirect + ".ch"}}</p>
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
