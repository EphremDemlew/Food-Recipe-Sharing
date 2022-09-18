<template>
  <div class="min-h-fit bg-white flex flex-col justify-center items-center">
    <div class="relative pt-12 scroll -pb-10 w-full sm:max-w-2xl sm:mx-auto">
      <div class="overflow-hidden z-0 rounded-full relative p-3">
        <form role="form" class="relative flex z-50 bg-white rounded-full">
          <input
            type="text"
            placeholder="enter your search here"
            class="rounded-full flex-1 px-6 py-4 text-gray-700 focus:outline-none w-2/3"
          />
          <button
            class="bg-red-500 text-white rounded-full font-semibold px-8 py-4 hover:bg-red-400 focus:bg-red-600 focus:outline-none"
          >
            Search
          </button>
        </form>
        <div class="glow glow-1 z-10 bg-red-400 absolute"></div>
        <div class="glow glow-2 z-20 bg-pink-400 absolute"></div>
        <div class="glow glow-3 z-30 bg-yellow-400 absolute"></div>
        <div class="glow glow-4 z-40 bg-pink-400 absolute"></div>
      </div>
    </div>
  </div>
</template>
<script setup></script>

<style scoped>
.glow {
  top: -10%;
  left: -10%;
  width: 120%;
  height: 120%;
  border-radius: 100%;
}

.glow-1 {
  animation: glow1 4s linear infinite;
}

.glow-2 {
  animation: glow2 4s linear infinite;
  animation-delay: 100ms;
}

.glow-3 {
  animation: glow3 4s linear infinite;
  animation-delay: 200ms;
}

.glow-4 {
  animation: glow4 4s linear infinite;
  animation-delay: 300ms;
}

@keyframes glow1 {
  0% {
    transform: translate(10%, 10%) scale(1);
  }
  25% {
    transform: translate(-10%, 10%) scale(1);
  }
  50% {
    transform: translate(-10%, -10%) scale(1);
  }
  75% {
    transform: translate(10%, -10%) scale(1);
  }
  100% {
    transform: translate(10%, 10%) scale(1);
  }
}

@keyframes glow2 {
  0% {
    transform: translate(-10%, -10%) scale(1);
  }
  25% {
    transform: translate(10%, -10%) scale(1);
  }
  50% {
    transform: translate(10%, 10%) scale(1);
  }
  75% {
    transform: translate(-10%, 10%) scale(1);
  }
  100% {
    transform: translate(-10%, -10%) scale(1);
  }
}

@keyframes glow3 {
  0% {
    transform: translate(-10%, 10%) scale(1);
  }
  25% {
    transform: translate(-10%, -10%) scale(1);
  }
  50% {
    transform: translate(10%, -10%) scale(1);
  }
  75% {
    transform: translate(10%, 10%) scale(1);
  }
  100% {
    transform: translate(-10%, 10%) scale(1);
  }
}

@keyframes glow4 {
  0% {
    transform: translate(10%, -10%) scale(1);
  }
  25% {
    transform: translate(10%, 10%) scale(1);
  }
  50% {
    transform: translate(-10%, 10%) scale(1);
  }
  75% {
    transform: translate(-10%, -10%) scale(1);
  }
  100% {
    transform: translate(10%, -10%) scale(1);
  }
}
</style>
