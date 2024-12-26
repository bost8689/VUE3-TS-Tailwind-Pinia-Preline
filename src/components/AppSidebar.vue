<template>
    <!-- +Sidebar -->

    <div id="hs-application-sidebar"
        class="hs-overlay [--auto-close:lg] hs-overlay-open:translate-x-0 translate-x-full transition-all duration-300 transform w-[260px] h-full hidden fixed inset-y-0 end-0 z-[60] bg-neutral-400/90 border-e border-gray-400 lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 dark:bg-neutral-800 dark:border-neutral-700"
        role="dialog" tabindex="-1" aria-label="Sidebar">
        <div class="relative flex flex-col h-full max-h-full">
            <div class="px-6 pt-4">
                <div class="flex justify-between">
                    <div></div>
                    <!-- End Logo -->
                    <ThemeButton />
                </div>
            </div>

            <!-- +Menu -->
            <div
                class="h-full overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
                <nav class="hs-accordion-group p-3 w-full flex flex-col flex-wrap" data-hs-accordion-always-open>
                    <ul class="flex flex-col space-y-1" data-hs-scrollspy="#scrollspy">
                    </ul>
                </nav>
            </div>
            <!-- -Menu -->
        </div>
    </div>
    <!-- -Sidebar -->
</template>
<script setup lang="ts">
import ThemeButton from "@/components/ThemeButton.vue";
</script>
<style scoped lang="scss"></style>