<script setup>
import footerVue from "../components/footer.vue";
import navBar from "../components/navbar.vue";
import cards from "../components/cards.vue";
import status from "../components/status.vue";
</script>
<template>
  <div>
    <navBar />
    <status />

    <cards class="flex justify-center mt-8 p-2" />
    <footerVue />
  </div>
</template>
