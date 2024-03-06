<script setup lang="ts">
import Package from '@@/package.json'
const pkg = Package
</script>

<template>
  <footer class="antialiased font-mono font-thin text-xs text-center">
    Copyright &copy; {{ new Date().getFullYear() }} - {{ $t('release') }}:
    {{ pkg.version }}
  </footer>
</template>
