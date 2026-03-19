const app = Vue.createApp({
    data() {
        return {
            task: '',
            taskArray: [],
            hide: false,
            hideShow: 'Hide',
        }
    },
    computed: {
        showOrHide() {
            this.hideShow = this.hide ? 'Show' : 'Hide'
        }
    },
    methods: {
        pushTaskIntoArray() {
            this.taskArray.push(this.task)
            console.log(this.taskArray)
            this.task = ''
        },
        toggleHide() {
            this.hide = !this.hide
        }
    }
})
app.mount('#assignment')