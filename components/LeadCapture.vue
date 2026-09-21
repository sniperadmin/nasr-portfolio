<template>
  <section class="mt-24 md:mt-32 mb-24">
    <div class="bg-surface-1 border border-border-subtle rounded relative overflow-hidden">
      <!-- Decorator Lines -->
      <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-phosphor-emerald to-transparent opacity-50"></div>
      
      <div class="grid grid-cols-1 md:grid-cols-2">
        <div class="p-8 md:p-12 border-b md:border-b-0 md:border-r border-border-subtle flex flex-col justify-center">
          <div class="font-mono text-xs text-phosphor-emerald mb-4 uppercase tracking-widest">System Integration</div>
          <h2 class="text-3xl font-bold tracking-tight text-white mb-4">Request a Systems Audit</h2>
          <p class="text-content-secondary text-sm font-sans mb-8">
            Get the "10-Point AI Systems" checklist and see how we can architect a scalable solution for your business. We engineer for speed, conversion, and autonomy.
          </p>
          <ul class="space-y-3 font-mono text-xs text-content-primary mb-8">
            <li class="flex items-center gap-2"><span class="text-phosphor-emerald">✓</span> Workflow mapping & bottleneck identification</li>
            <li class="flex items-center gap-2"><span class="text-phosphor-emerald">✓</span> Tech stack performance review</li>
            <li class="flex items-center gap-2"><span class="text-phosphor-emerald">✓</span> Conversion latency profiling</li>
          </ul>
        </div>
        
        <div class="p-8 md:p-12 bg-surface-2">
          <form @submit.prevent="handleSubmit" class="flex flex-col gap-4">
            <div class="flex flex-col gap-1.5">
              <label class="font-mono text-xs text-content-secondary uppercase tracking-wider">Email Address</label>
              <input 
                type="email" 
                v-model="email" 
                required
                placeholder="sysadmin@company.com" 
                class="bg-canvas border border-border-subtle rounded px-4 py-3 text-sm text-content-primary focus:outline-none focus:border-phosphor-emerald focus:ring-1 focus:ring-phosphor-emerald transition-shadow font-mono"
              />
            </div>
            
            <div class="flex flex-col gap-1.5">
              <label class="font-mono text-xs text-content-secondary uppercase tracking-wider">System Goals</label>
              <textarea 
                v-model="goals" 
                rows="3" 
                placeholder="What bottlenecks are you trying to resolve?" 
                class="bg-canvas border border-border-subtle rounded px-4 py-3 text-sm text-content-primary focus:outline-none focus:border-phosphor-emerald focus:ring-1 focus:ring-phosphor-emerald transition-shadow font-sans resize-none"
              ></textarea>
            </div>
            
            <button type="submit" class="mt-4 bg-phosphor-emerald text-canvas font-mono font-medium text-sm px-6 py-3 rounded hover:bg-emerald-400 transition-colors flex items-center justify-center gap-2 group">
              <span>Initialize_Audit</span>
              <span class="group-hover:translate-x-1 transition-transform">-></span>
            </button>
            <div class="mt-2 text-center font-mono text-[10px] text-content-inert">
              [Encrypted transmission to Firestore dispatcher]
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const goals = ref('')

const handleSubmit = () => {
  // Logic to dispatch to Firestore goes here
  console.log('Dispatching lead:', email.value)
  email.value = ''
  goals.value = ''
}
</script>
