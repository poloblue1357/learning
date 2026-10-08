const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.message = this.currentUserInput
      this.message = this.$refs.userText.value
      // console.dir(this.$refs.userText)
    },
  },

  // list of lifecycle hooks
  beforeCreate() {
    console.log("beforeCreate()")
    // can send http request in here
  },
  created() {
    console.log('created()')
  },
  beforeMount() {
    console.log('beforeMount()')
  },
  mounted() {
    console.log('mounted()')
  },
  beforeUpdate() {
    console.log('beforeUpdate()')
  },
  updated() {
    console.log('updated()')
  },
  beforeUnmount() {
    console.log('beforeUnmount()')
  },
  unmounted() {
    console.log('unmounted()')
  }
});

app.mount('#app');

setTimeout(() => {
  app.unmount()
}, 5000);


const app2 = Vue.createApp({
  template: `
    <p>{{ favoriteMeal }}</p>
  `,
  data() {
    return {
      favoriteMeal: 'Pizza'
    }
  }
})
app2.mount('#app2')


// how vue works using proxy's

// const data = {
//   message: 'Hello!',
//   longMessage: 'Hello! World!'
// }

// const handler = {
//   set(target, key, value) {
//     if (key === 'message') {
//       target.longMessage = value + ' World!'
//     }
//     target.message = value
//     console.log('target.message:', target.message)
//   }
// }

// const proxy = new Proxy(data, handler)

// proxy.message = 'Hello!!!!'

// console.log(proxy.longMessage)
