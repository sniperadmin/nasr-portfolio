<template>
  <section class="grid grid-cols-1 md:grid-cols-12 gap-gutter mt-16 md:mt-24">
    <!-- Copy Column -->
    <div class="col-span-1 md:col-span-7 flex flex-col justify-center">
      <div class="inline-flex items-center gap-2 mb-6 text-phosphor-emerald font-mono text-sm uppercase tracking-widest">
        <span class="w-2 h-2 bg-phosphor-emerald rounded-full animate-pulse"></span>
        CTO & Systems Architect
      </div>
      <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-8 leading-tight">
        I pass life force through <span class="text-phosphor-emerald">systems</span> with my AI team.
      </h1>
      <p class="text-content-secondary text-lg md:text-xl max-w-2xl mb-10 font-sans">
        Designing and deploying production-grade AI & business automation workflows, scalable full-stack web applications, and modern high-converting systems.
      </p>
      
      <div class="flex flex-col sm:flex-row gap-4 font-mono">
        <button class="bg-phosphor-emerald text-canvas px-6 py-3 rounded hover:bg-emerald-400 transition-colors font-medium text-sm flex items-center justify-center gap-2">
          <span>> Deploy_System</span>
        </button>
        <button class="border border-border-subtle text-content-primary px-6 py-3 rounded hover:border-phosphor-emerald hover:text-phosphor-emerald transition-colors font-medium text-sm flex items-center justify-center gap-2">
          <span>--view-architecture</span>
        </button>
      </div>
    </div>
    
    <!-- Terminal Column -->
    <div class="col-span-1 md:col-span-5 relative mt-10 md:mt-0">
      <div class="bg-surface-1 border border-border-subtle rounded flex flex-col h-full shadow-modal overflow-hidden">
        <div class="flex items-center px-4 py-3 border-b border-border-subtle bg-surface-2 gap-2">
          <div class="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div class="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div class="w-3 h-3 rounded-full bg-green-500/80"></div>
          <div class="ml-auto text-xs font-mono text-content-inert flex items-center gap-2">
            <span>root@nasr-studio:~</span>
          </div>
        </div>
        
        <div class="p-5 font-mono text-sm leading-relaxed overflow-y-auto flex-1 h-[300px] md:h-auto">
          <div class="text-phosphor-emerald mb-2">$ ./init-systems-check.sh</div>
          <div class="text-content-secondary mb-1">>[OK] Edge caching initialized (4.2ms)</div>
          <div class="text-content-secondary mb-1">>[OK] Obsidian Precision tokens mapped</div>
          <div class="text-content-secondary mb-1">>[OK] VDOM hydration complete</div>
          <div class="text-content-secondary mb-4">>[OK] System architecture verified</div>
          
          <div class="text-phosphor-emerald mb-2">$ cat /var/log/nasr-studio/status.log</div>
          <div class="text-phosphor-cyan mb-1">SYSTEM ONLINE</div>
          <div class="text-content-primary mb-1">Active nodes: 14</div>
          <div class="text-content-primary mb-1">Throughput: 14,280 evt/s</div>
          <div class="text-content-primary mb-1 flex">Status: <span class="text-phosphor-emerald ml-2 flex items-center gap-1"><span class="w-1.5 h-1.5 bg-phosphor-emerald rounded-full"></span> NOMINAL</span></div>
          
          <div class="mt-4 flex items-center animate-pulse text-phosphor-emerald">
            <span class="mr-2">_</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>
