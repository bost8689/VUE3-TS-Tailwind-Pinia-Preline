<template>
  <div class="about">
    <button type="button"
      class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 text-gray-500 hover:border-blue-600 hover:text-blue-600 focus:outline-none focus:border-blue-600 focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-blue-500 dark:hover:border-blue-600 dark:focus:text-blue-500 dark:focus:border-blue-600">
      Outline
    </button>
  </div>
</template>

<script setup lang="ts">
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
console.log(process.env.VUE_APP_API_URL);

</script>