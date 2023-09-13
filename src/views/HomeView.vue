<template>
  <div class="main">
    <label for="file">
      File
      <input type="file" name="file" @change="setKey">
    </label>
    <br>
    <label for="password">
      PWD
      <input type="text" name="password" v-model="password">
    </label>
    <br>
    <button @click="readKey">Read</button>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { EndUser, EndUserConstants } from 'euscp';
// import * as euscp from 'euscp';

const file = ref<File | null>();
const password = ref('');
const setKey = ($e: Event) => {
  const target = $e.target as HTMLInputElement;
  if (target.files) {
    file.value = target?.files[0];
  }
};
const readKey = () => {
  console.log('read key');
};

onMounted(async () => {
  /* eslint-disable */
  const euscp = new EndUser('iit/euscp.worker.ex.js', EndUserConstants.EndUserLibraryType.JS);
  const res = await euscp.Initialize({
    language: 'uk',
    encoding: 'utf-8',
    httpProxyServiceURL: './iit/ProxyHandler.php',
    directAccess: true,
    CAs: './iit/CAs.json',
    CACertificates: './iit/CACertificates.p7b',
  });
  const isInitialized = await euscp.IsInitialized();
  const libInfo = await euscp.GetLibraryInfo();
  console.log('EUSCP Library initialized');
  console.log(libInfo)
});
</script>

<style lang="scss" scoped>
.main {
  width: 200px;
  display: flex;
  flex-direction: column;
}
</style>
