import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useUserStore = defineStore('user', ()=>{
    const token = ref("111");
    return { token };
})