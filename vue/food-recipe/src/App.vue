<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import footerPart from "./components/footer.vue";
import navbar from "./components/navbar.vue";
</script>

<template>
  <div>
    <navbar />
    <router-view></router-view>
    <footerPart />
  </div>
</template>

<style></style>
