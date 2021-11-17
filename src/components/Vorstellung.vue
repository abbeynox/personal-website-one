<template>
    <section class="text-gray-400 bg-black body-font">
    <div class="container flex flex-col items-center mx-auto md:flex-row">
        <div class="flex flex-col items-center mx-5 text-left lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:mb-0">


        <p class="leading-relaxed">
            Hallo! Ich bin <b>Yao Kaiser</b>, {{ age }} Jahre alt und mache gerade eine Ausbildung zum Software-Entwickler.
            Ich interessiere mich für jegliche Art von Frontend-Anwendungen, aber auch serverseitige Applikationen. 
            Ich bin neugierig und offen neues zu lernen.
            Parallel dazu absolviere ich die Berufsmatura an der BBW Winterthur.
            <br>Aufgewachsen bin ich in Oberglatt ZH, heute lebe ich mit meiner Familie in Bülach.
            Ich tausche mich gerne mit anderen Informatikern über die neusten Technologien aus, zögere nicht, mich zu kontaktieren. 
            <br>Sonst wünsche ich Dir noch viel Spass auf meiner Website.<br> 
        </p>

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
