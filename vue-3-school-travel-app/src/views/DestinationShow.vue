<template>
  <section
    v-if="destination"
    class="destination"
  >
    <h1>{{ destination.name }}</h1>
    <div class="destination-details">
      <img
        :src="`/images/${destination.image}`"
        :alt="destination.name"
      >
      <p>{{ destination.description }}</p>
    </div>
  </section>
</template>

<script>
import SourceData from "@/data.json";

export default {
  data() {
    return {
      destination: null,
    };
  },
  computed: {
    destinationId() {
      return this.$route.params.slug;
    },
  },
  async created() {
    this.initData();
  },
  methods: {
    async initData() {
      const response = await fetch(
        `https://travel-dummy-api.netlify.app/${this.$route.params.slug}`
      );
      this.destination = await response.json();
    },
  },
};
</script>

<style></style>
