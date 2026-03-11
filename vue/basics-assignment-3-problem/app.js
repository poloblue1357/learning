const app = Vue.createApp({
    data() {
        return {
            num: 0,
        }
    },
    watch: {
        num() {
            setTimeout(() => {
                this.num = 0
            }, 5000)  
        },
    },
    computed: {
        result() {
            if(this.num < 37) {
                return 'Not there yet'
            } else if (this.num > 37) {
                return 'Too much!'
            } else {
                return this.num
            }
        }
    }, 
    methods: {
        increment() {
            return this.num += 5
        },
        add() {
            return this.num += 1
        }
    }
})
app.mount('#assignment')