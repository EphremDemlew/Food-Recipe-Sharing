<script setup>
import footerVue from "../components/footer.vue";
import navBar from "../components/navbar.vue";
import cards from "../components/cards.vue";
import status from "../components/status.vue";
</script>
<template>
  <div class="flex flex-col justify-center items-center">
    <navBar />

    <cards />

    <footerVue />
  </div>
</template>
