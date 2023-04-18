<template>
  <tr class="py-10 border-b border-gray-700">
    <td class="px-4 py-6 text-gray-400">{{ rank }}</td>
    <td class="px-4 py-6">
      <a :href="songUrl" target="_blank" class="text-white hover:text-pink-300">{{ songTitle }}</a>
      <p class="text-gray-500">{{ artistName }}</p>
    </td>
    <td class="px-4 py-6 text-gray-500">{{ plays }} Wiedergaben</td>
  </tr>
</template>

<script>
export default {
  props: {
    rank: {
      type: Number,
      required: true,
    },
    songTitle: {
      type: String,
      required: true,
    },
    artistName: {
      type: String,
      required: true,
    },
    plays: {
      type: String,
      required: true,
    },
    songUrl: {
      type: String,
      required: true,
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
