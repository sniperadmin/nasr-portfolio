<template>
  <div class="min-h-screen bg-canvas text-content-primary selection:bg-phosphor-emerald selection:text-canvas">
    <!-- Grid Background Lines -->
    <div class="fixed inset-0 pointer-events-none z-0" style="background-image: linear-gradient(to right, #1f2937 1px, transparent 1px), linear-gradient(to bottom, #1f2937 1px, transparent 1px); background-size: 4rem 4rem; opacity: 0.2;"></div>

    <main class="relative z-10 container mx-auto px-4 md:px-margin sm:px-margin-sm py-12 flex flex-col gap-10">
      <HeroTerminal />
      <OfferMatrix />
      <PortfolioGrid />
      <LeadCapture />
    </main>
  </div>
</template>

<script setup>
import HeroTerminal from '~/components/HeroTerminal.vue'
import OfferMatrix from '~/components/OfferMatrix.vue'
import PortfolioGrid from '~/components/PortfolioGrid.vue'
import LeadCapture from '~/components/LeadCapture.vue'
</script>
