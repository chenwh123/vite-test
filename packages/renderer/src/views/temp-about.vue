<script lang="ts" setup>
import { userStore } from '/@/store/user';
// 状态值+1
const user_store = userStore();
let a = user_store.myCount;
user_store.changeState(1);
console.log(a);

</script>

<template>
  <h1>About Page</h1>
</template>
