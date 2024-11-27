<script setup>
import {useUserStore} from "../store/user.js"
const user = useUserStore();
</script>

<template>
 <div class="text-red-500">啥啥啥</div>
 <span>{{ user.token }}</span>
 <el-button type="primary" class="">按钮哈哈哈哈</el-button>
 <el-icon><House /></el-icon>
</template>