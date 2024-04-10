<template>
  <v-hover>
    <template v-slot:default="{ isHovering, props }"
      ><v-icon
        v-bind="props"
        icon="mdi-account"
        size="large"
        style="cursor: pointer"
        :color="isHovering ? 'primary' : undefined"
      ></v-icon
    ></template>
  </v-hover>
</template>

<script setup></script>

<style scoped></style>
