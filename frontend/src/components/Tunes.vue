<template>
  <section class="text-gray-400 bg-black body-font">
    <div class="container mx-auto">
      <div class="mb-20">
        <Header
          title="Musik"
          description="Meine Lieblings-Songs."
          :text="
            'Diese Rangliste wird wöchentlich neu aktualisiert.\n Mit ' +
            favArtist[0].playcount +
            ' Wiedergaben ist ' +
            favArtist[0].name +
            ' mein Lieblings-Artist. Danach folgt ' +
            favArtist[1].name +
            ' mit ' +
            favArtist[1].playcount +
            ' Wiedergaben.'
          "
          titleColor="text-pink-300"
        ></Header>

        <!-- Table start -->
        <div class="w-full px-4 pb-4 bg-transparent rounded-md">
          <div class="mt-6 overflow-x-auto">
            <table class="w-full border-collapse table-fixed">
              <thead>
                <tr
                  class="text-sm font-medium text-left text-gray-700 rounded-lg"
                  style="font-size: 0.9674rem"
                >
                  <th
                    class="w-1/12 px-4 py-2 bg-transparent"
                    style="background-color: bg-black"
                  ></th>
                  <th
                    class="w-6/12 px-4 py-2"
                    style="background-color: bg-black"
                  ></th>
                  <th
                    class="w-5/12 px-4 py-2"
                    style="background-color: bg-black"
                  ></th>
                </tr>
              </thead>

              <tbody
                class="text-lg font-normal text-gray-700"
                v-for="index in 10"
                v-bind:key="index"
              >
                <TuneCard
                  :songTitle="lastFMd[index - 1].name"
                  :artistName="lastFMd[index - 1].artist['#text']"
                  :plays="lastFMd[index - 1].playcount"
                  :rank="lastFMd[index - 1]['@attr'].rank"
                  :songUrl="lastFMd[index - 1].url"
                ></TuneCard>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Table end -->
      </div>
    </div>
  </section>
</template>

<script>
import Header from "./Header.vue";
import axios from "axios";
import TuneCard from "./cards/TuneCard.vue";

export default {
  name: "Tunes",
  components: {
    Header,
    TuneCard,
  },

  data() {
    return {
      loading: true,
      lastFM: [],
      lastFMd: [],
      favArtist: [],
      tuneId: null,
      keys: [38, 38, 40, 40, 37, 39, 37, 39, 66, 65],
      isChecked: {
        0: false,
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        9: false,
      },
      current: 0,
    };
  },

  created() {
    window.addEventListener("keyup", this.listen);
  },
  mounted() {
    axios
      .get(
        "https://ws.audioscrobbler.com/2.0/?method=user.getweeklytrackchart&user=kaiseryao&api_key=fff9cc076ea593164f0823f20ed10bcc&format=json"
      )
      .then((response) => {
        this.lastFM = response.data;
        this.lastFMd = response.data.weeklytrackchart.track;
        this.loading = false;
        this.getFavArtist();
      });

    setInterval(this.updateTracks, 10000);
  },
  methods: {
    updateTracks() {
      axios
        .get(
          "https://ws.audioscrobbler.com/2.0/?method=user.getweeklytrackchart&user=kaiseryao&api_key=fff9cc076ea593164f0823f20ed10bcc&format=json"
        )
        .then((response) => {
          this.lastFM = response.data;
        });
    },
    getFavArtist() {
      axios
        .get(
          "https://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=kaiseryao&api_key=fff9cc076ea593164f0823f20ed10bcc&format=json"
        )
        .then((response) => {
          this.favArtist = response.data.topartists.artist;
        });
    },
    listen(e) {
      const key = e.which || e.keyCode || e.detail;
      if (this.keys.includes(key)) {
        if (key === this.keys[this.current]) {
          this.current += 1;
          this.isChecked[this.current - 1] = true;
          if (this.current === this.keys.length) {
            this.trigger();
            this.reset();
          }
        } else {
          this.reset();
        }
      }
    },
  },
};
</script>
<style>
thead tr th:first-child {
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}
thead tr th:last-child {
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}

tbody tr td:first-child {
  border-top-left-radius: 5px;
  border-bottom-left-radius: 0px;
}
tbody tr td:last-child {
  border-top-right-radius: 5px;
  border-bottom-right-radius: 0px;
}
</style>
