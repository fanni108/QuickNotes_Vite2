<template>
  <!-- This reusable card is a simple layout wrapper.
       It gives every note the same visual style without repeating HTML. -->
  <div class="card">
    <div v-if="$slots.header" class="card-header">
      <slot name="header" />
    </div>
    <div class="card-body">
      <slot />
    </div>
  </div>
</template>
