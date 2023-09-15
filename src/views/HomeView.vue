<template>
  <div class="main">
    <label for="file">
      Key
      <input type="file" name="file" @change="setKey">
    </label>
    <br>
    <label for="password">
      Password
      <input type="text" name="password" v-model="password">
    </label>
    <br>
    <button @click="readKey">Read</button>

    <br>
    <br>
    <label for="file">
      Data to sign
      <input type="file" name="file" @change="setData">
    </label>
    <br>
    <button @click="sign">Sign</button>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { Eds } from 'eds';
import { FileConverter } from '@/eds/FileConverter';

const eds = new Eds();
const file = ref<File | null>();
const dataToSign = ref<File | null>();
const password = ref('Olyaolya03');
const setKey = ($e: Event) => {
  const target = $e.target as HTMLInputElement;
  if (target.files) {
    file.value = target?.files[0];
  }
};
const setData = ($e: Event) => {
  const target = $e.target as HTMLInputElement;
  if (target.files) {
    dataToSign.value = target?.files[0];
  }
};
const readKey = async () => {
  await eds.init();
  try {
    const pkey = await eds.readPrivateKey(file.value as File, password.value);
    console.log(pkey);
  } catch (e) {
    console.error(e);
  }
};

const sign = async () => {
  await eds.init();
  try {
    const fileToSign = await FileConverter.toArrayBuffer(dataToSign.value as File);
    const signature = await eds.signData(fileToSign.data, false);
    console.log(signature);

    const linkSource = `data:application/pkcs7-signature;base64,${signature}`;
    const downloadLink = document.createElement('a');
    document.body.appendChild(downloadLink);

    downloadLink.href = linkSource;
    downloadLink.target = '_self';
    downloadLink.download = 'signature.p7s';
    downloadLink.click();
  } catch (e) {
    console.error(e);
  }
};

onMounted(async () => {
  await eds.init();
});
</script>

<style lang="scss" scoped>
.main {
  width: 200px;
  display: flex;
  flex-direction: column;
}
</style>
