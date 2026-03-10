const app = Vue.createApp({
    data() {
        return {
            text: '',
            text2: ''
        }
    },
    methods: {
        enterClick(event) {
            this.text2 = event.target.value
        },
        btnClick() {
            console.log('clicked button!')
            alert('OKAY YEP WHAT?!')
        },
        txtDisplay(event) {
            this.text = event.target.value
        }
    }
})
app.mount('#assignment')