<template lang="html">
  <div class="col-sm-6 col-sm-offset-3">
      <h1>Get a Free Chuck Norris Quote!</h1>
      <button class="btn btn-primary" v-on:click="getQuote()">Get a Quote</button>
      <div class="quote-area" v-if="quote">
        <h2><blockquote>{{ quote }}</blockquote></h2>
      </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      quote: ''
    }
  },
  methods: {
    getQuote() {
      axios.get('http://localhost:3001/api/random-quote')
        .then((response) => {
          this.quote = response.data;
        })
        .catch((err) => console.log(err))
    }
  }
}
</script>

<style lang="css">
</style>
