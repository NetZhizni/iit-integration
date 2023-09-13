<template>
  <div>
    test
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import * as EndUser from 'euscp';

onMounted(() => {
  console.log(EndUser);
});
</script>
