const app = Vue. createApp({
    data() {
        return {
            toggle: false,
            bgColor: '',
            user: ''
        }
    },
    methods: {
        toggleButton() {
            this.toggle = !this.toggle
        },
        changeColor(event) {
            this.bgColor = event.target.value
        },
        setUser(event) {
            this.user = event.target.value
        }
    }
})
app.mount('#assignment')