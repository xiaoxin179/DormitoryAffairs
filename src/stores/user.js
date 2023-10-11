import { defineStore } from 'pinia'   
export const useUserStore = defineStore('user', {
    state: () => ({
        user: {}
    }),
    getters: {
        getUserId() {
            return this.user ? this.user.id : 0
        },
        getUser() {
            return this.user ||{}
        }
    },
    actions: {
        setUser(user) {
            this.user = user
        },
        setPassword(password){
            this.password=password
        }
    },
    // 开启数据持久化
    persist: true
})
