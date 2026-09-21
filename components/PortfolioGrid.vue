<template>
  <section class="mt-24 md:mt-32">
    <div class="flex items-end justify-between mb-12 border-b border-border-subtle pb-4">
      <div>
        <h2 class="text-3xl font-bold tracking-tight text-white mb-2">Deployed Architecture</h2>
        <p class="font-mono text-sm text-content-secondary uppercase tracking-widest">Case Studies & Visuals</p>
      </div>
      <button class="hidden sm:flex font-mono text-xs text-phosphor-emerald items-center gap-2 hover:underline">
        [View All Logs]
      </button>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-gutter">
      <!-- Project 1 -->
      <div class="group cursor-pointer">
        <div class="bg-surface-1 border border-border-subtle rounded aspect-video mb-4 overflow-hidden relative">
          <div class="absolute inset-0 bg-surface-2 opacity-50"></div>
          <div class="absolute inset-0 flex items-center justify-center border border-dashed border-border-active m-8 rounded bg-canvas/50">
            <!-- Placeholder for Archify SVG or Spatial Screen -->
            <span class="font-mono text-xs text-content-inert">[WebGL Integration Pending]</span>
          </div>
          <!-- Corner Accents -->
          <div class="absolute top-0 left-0 w-4 h-4 border-t border-l border-phosphor-emerald opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div class="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-phosphor-emerald opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
        <div class="flex justify-between items-start">
          <div>
            <h3 class="text-lg font-bold text-white mb-1 group-hover:text-phosphor-emerald transition-colors">VisionOS XR Spatial Command</h3>
            <p class="text-sm text-content-secondary font-sans">Nuxt 3, Vue 3, Z-Depth Nodes</p>
          </div>
          <div class="font-mono text-xs text-content-inert">2026.09</div>
        </div>
      </div>

      <!-- Project 2 -->
      <div class="group cursor-pointer">
        <div class="bg-surface-1 border border-border-subtle rounded aspect-video mb-4 overflow-hidden relative">
          <div class="absolute inset-0 bg-surface-2 opacity-50"></div>
          <div class="absolute inset-0 flex items-center justify-center border border-dashed border-border-active m-8 rounded bg-canvas/50">
            <!-- Placeholder for Archify SVG -->
             <span class="font-mono text-xs text-content-inert">[Dataflow Diagram Render]</span>
          </div>
           <!-- Corner Accents -->
          <div class="absolute top-0 left-0 w-4 h-4 border-t border-l border-phosphor-cyan opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div class="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-phosphor-cyan opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
        <div class="flex justify-between items-start">
          <div>
            <h3 class="text-lg font-bold text-white mb-1 group-hover:text-phosphor-cyan transition-colors">Serverless Analytics Pipeline</h3>
            <p class="text-sm text-content-secondary font-sans">Python, Firestore, LangGraph</p>
          </div>
          <div class="font-mono text-xs text-content-inert">2026.08</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>
