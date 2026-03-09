const app = Vue.createApp({
    data() {
        return {
            name: 'dan',
            age: 40,
            img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fapexbase.com%2Fwp-content%2Fuploads%2F2020%2F01%2Fatair-osp2-2.jpg&f=1&nofb=1&ipt=707206b6f5cf660307009b01651078b61091ddacde8328e0ad03836e03c9b3c1'
        }
    },
    methods: {
        outputNum() {
            const num = Math.random()
            return num
        }
    }
})

app.mount('#assignment')