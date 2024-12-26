<template>
  <!-- MAIN PAGE -->
  <div class="bg-fixed" :style="['background-image: url(/' + 'fon-main.svg' + ');']">
    <AppTop />

    <!-- +Body -->
    <div class="max-w-[calc(80rem)] mx-auto">

      <AppSidebar/>      

      <!-- +Body content -->
      <div class="lg:ps-[260px] min-h-screen">
        <div class="reltive p-2 md:p-8">
          <!-- +content -->
          <div id="scrollspy" class="space-y-3 md:space-y-6">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
            <router-view/>
          </div>
          <!-- -content -->
        </div>
      </div>
      <!-- -Body content -->

    </div>
    <!-- -Body -->
    <AppBottomMobile />
  </div>
  <!-- +MAIN PAGE -->
</template>

<script setup lang="ts">
import AppTop from "@/components/AppTop.vue";
import AppBottomMobile from "@/components/AppBottomMobile.vue";
import AppSidebar from "@/components/AppSidebar.vue";
</script>
<style scoped lang="scss"></style>