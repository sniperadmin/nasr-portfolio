<template>
  <section class="mt-24 md:mt-32">
    <div class="mb-12 border-b border-border-subtle pb-4">
      <h2 class="text-3xl font-bold tracking-tight text-white mb-2">Systems Architecture</h2>
      <p class="font-mono text-sm text-content-secondary uppercase tracking-widest">Service Offerings & Stack</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-gutter">
      <!-- Tier 1 -->
      <div class="bg-surface-1 border border-border-subtle rounded p-6 flex flex-col hover:border-phosphor-emerald transition-colors duration-300 group">
        <div class="font-mono text-xs text-phosphor-emerald mb-4 flex items-center gap-2">
          <span class="w-1.5 h-1.5 bg-phosphor-emerald rounded-full"></span> 
          L1 // High-Converting Web
        </div>
        <h3 class="text-xl font-bold mb-3 group-hover:text-phosphor-emerald transition-colors">Marketing Funnels</h3>
        <p class="text-content-secondary text-sm font-sans mb-6 flex-1">
          Modern, high-performance websites engineered for conversion. PWA and SPA architecture with sub-150ms interaction latency.
        </p>
        <div class="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border-subtle">
          <span class="font-mono text-[10px] bg-surface-2 border border-border-subtle px-2 py-1 rounded text-content-primary">Nuxt 3</span>
          <span class="font-mono text-[10px] bg-surface-2 border border-border-subtle px-2 py-1 rounded text-content-primary">Vue</span>
          <span class="font-mono text-[10px] bg-surface-2 border border-border-subtle px-2 py-1 rounded text-content-primary">Tailwind</span>
          <span class="font-mono text-[10px] bg-surface-2 border border-border-subtle px-2 py-1 rounded text-content-primary">Framer</span>
        </div>
      </div>

      <!-- Tier 2 -->
      <div class="bg-surface-1 border border-border-subtle rounded p-6 flex flex-col hover:border-phosphor-cyan transition-colors duration-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] relative overflow-hidden group">
        <div class="absolute top-0 right-0 p-4">
           <svg class="w-6 h-6 text-phosphor-cyan opacity-20 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        </div>
        <div class="font-mono text-xs text-phosphor-cyan mb-4 flex items-center gap-2">
          <span class="w-1.5 h-1.5 bg-phosphor-cyan rounded-full"></span> 
          L2 // Scalable Apps
        </div>
        <h3 class="text-xl font-bold mb-3 group-hover:text-phosphor-cyan transition-colors">Full-Stack Engineering</h3>
        <p class="text-content-secondary text-sm font-sans mb-6 flex-1">
          Production-grade web applications with serverless backend integration, real-time sync, and scalable databases.
        </p>
        <div class="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border-subtle">
          <span class="font-mono text-[10px] bg-surface-2 border border-border-subtle px-2 py-1 rounded text-content-primary">React / Next.js</span>
          <span class="font-mono text-[10px] bg-surface-2 border border-border-subtle px-2 py-1 rounded text-content-primary">Supabase</span>
          <span class="font-mono text-[10px] bg-surface-2 border border-border-subtle px-2 py-1 rounded text-content-primary">Firebase</span>
          <span class="font-mono text-[10px] bg-surface-2 border border-border-subtle px-2 py-1 rounded text-content-primary">Python</span>
        </div>
      </div>

      <!-- Tier 3 -->
      <div class="bg-surface-1 border border-border-subtle rounded p-6 flex flex-col hover:border-phosphor-indigo transition-colors duration-300 group">
        <div class="font-mono text-xs text-phosphor-indigo mb-4 flex items-center gap-2">
          <span class="w-1.5 h-1.5 bg-phosphor-indigo rounded-full"></span> 
          L3 // Autonomous Systems
        </div>
        <h3 class="text-xl font-bold mb-3 group-hover:text-phosphor-indigo transition-colors">AI & Automation</h3>
        <p class="text-content-secondary text-sm font-sans mb-6 flex-1">
          Custom AI workflows and business automation systems. Connecting APIs, training models, and deploying intelligent agents.
        </p>
        <div class="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border-subtle">
          <span class="font-mono text-[10px] bg-surface-2 border border-border-subtle px-2 py-1 rounded text-content-primary">LLMs</span>
          <span class="font-mono text-[10px] bg-surface-2 border border-border-subtle px-2 py-1 rounded text-content-primary">n8n</span>
          <span class="font-mono text-[10px] bg-surface-2 border border-border-subtle px-2 py-1 rounded text-content-primary">LangChain</span>
          <span class="font-mono text-[10px] bg-surface-2 border border-border-subtle px-2 py-1 rounded text-content-primary">Stitch MCP</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>
