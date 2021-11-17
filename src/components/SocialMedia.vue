<template>
	<div>
    <Header title="Social Media" description="Neuste Aktivitäten." text="Hier ist noch nichts zu sehen. #StayTuned" titleColor="text-pink-400"></Header>
  </div>
</template>

<script>
import Header from "./Header.vue";

export default {
  name: "SocialMedia",
  components: {
    Header,
  },
  mounted() {
    var axios = require('axios');
    var AUTH_OBJ = {
      oauth_consumer_key: "NOAEuJ0g8emWaEwycuFwI1wZH", // API Key
      oath_consumer_secret: "PEyo4elLKvWtNZoFWcfju5qXWWzrAl9sL7m5VRh1JQV7Ccjf1Z", //API Secret Key  
      oauth_signature_method: "HMAC-SHA1",
      oauth_timestamp: "1473647719",
      oauth_token: "PEyo4elLKvWtNZoFWcfju5qXWWzrAl9sL7m5VRh1JQV7Ccjf1Z",
    };

    axios.defaults.headers.common['Authorization'] = AUTH_OBJ;

    axios.get('https://api.twitter.com/1.1/trends/place.json', {
      id: 1
    }).then(function(resp) {
      console.log(resp);
    }).catch(function(e) {
      console.log(e)
    });
  },
  data() {
    return {
    }
  }
};
</script>
