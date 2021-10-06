<template>
    <section class="text-gray-400 bg-black body-font">
    <div class="container flex flex-col items-center mx-auto md:flex-row">
        <div class="flex flex-col items-center m-4 mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">


        <p class="mb-8 leading-relaxed">
            Hallo! Ich bin <b>Yao Kaiser</b>, {{ age }} Jahre alt und mache gerade eine Ausbildung zum Software-Entwickler.<br/>
            Ich interessiere mich für jegliche Art von Frontend-Anwendungen, aber auch serverseitige Applikationen. 
            Ich bin neugierig und offen neues zu lernen.
            Parallel dazu absolviere ich die Berufsmatura an der <a class="inline-flex items-center mt-4 text-purple-400" href="https://bbw.ch">BBW Winterthur</a>.
            Aufgewachsen bin ich in Oberglatt ZH, heute lebe ich mit meiner Familie in Bülach.
            <br />
            Ich bin mir noch unsicher, was ich hier noch dazu schreiben kann. Wenn Du Ideen hast, kannst Du mich gerne <a class="inline-flex items-center mt-4 text-purple-400" href="mailto:yao@ywk.ch"> kontaktieren</a>. 
            Allgemein bin ich für Feedback sehr dankbar.
            Sonst wünsche ich Dir noch viel Spass auf meiner Website.<br> 
        </p>

        </div>
        <div class="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
        <img class="object-cover object-center rounded" alt="hero" src="../assets/Yao_Full.jpg">
        </div>
    </div>
    </section>
</template>

<script>
import day from 'dayjs'
const birthday = day('6 June 2004');
const age = Math.abs(
    new Date(Date.now() - birthday.toDate().getTime()).getUTCFullYear()- 1970
);

export default {
    name: 'Vorstellung',
    created() {
        this.age = age;
    }
}
</script>
