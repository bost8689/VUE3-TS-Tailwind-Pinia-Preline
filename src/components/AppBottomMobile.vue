<template>
    <!-- +Mobile bottom -->
    <div
        class="sticky bottom-0 inset-x-0 z-[61] bg-neutral-300 border-gray-300 border-y px-4 sm:px-6 lg:px-8 lg:hidden dark:bg-neutral-800 dark:border-neutral-700">
        <div class="flex justify-between items-center py-2">
            <div></div>
            <!-- Navigation Toggle -->
            <button type="button"
                class="size-8 flex justify-center items-center gap-x-2 border border-gray-200 text-gray-800 hover:text-gray-500 rounded-lg focus:outline-none focus:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-neutral-200 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
                aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-application-sidebar"
                aria-label="Toggle navigation" data-hs-overlay="#hs-application-sidebar">
                <span class="sr-only">Toggle Navigation</span>
                <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round">
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <path d="M15 3v18" />
                    <path d="m8 9 3 3-3 3" />
                </svg>
            </button>
            <!-- End Navigation Toggle -->
        </div>
    </div>
    <!-- -Mobile bottom -->
</template>
<script setup lang="ts">

// import { ref, computed } from "vue";
</script>
<style scoped lang="scss"></style>