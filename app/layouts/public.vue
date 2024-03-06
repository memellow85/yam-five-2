<template>
  <div class="h-dvh w-dvw grid grid-cols-1 place-items-center overflow-hidden">
    <div class="w-96 grid grid-cols-1">
      <StructuresHeader />
      <slot />
      <StructuresFooter />
    </div>
  </div>
</template>
