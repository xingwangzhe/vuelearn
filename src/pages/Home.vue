<script setup>
import {useUserStore} from "../store/user.js"
const user = useUserStore();
</script>

<template>
 <div>啥啥啥</div>
 <span>{{ user.token }}</span>
</template>