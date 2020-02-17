<template>
  <div class="card">
    <div class="card_pic">
      <img :src="user.pic" />
    </div>
    <div class="card_info">
      <div class="column">
        <h3 v-html="highlight(user.name)" />
        <p><b v-html="highlight(user.title)" /></p>
        <p v-html="highlight(user.address)" />
      </div>
      <span v-html="highlight(user.email)" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    q: String,
    user: Object
  },
  methods: {
    highlight (string) {
      const re = new RegExp(`(${this.q})`, 'ig')
      return string.match(re) ? string.replace(re, '<em>$1</em>') : string
    }
  }
}
</script>

<style lang="scss">
.card {
  display: grid;
  grid-template-columns: 134px 1fr;
  height: 136px;
  overflow: hidden;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  background: #FAFAFA;
  margin-bottom: 21px;

  h3 {
    font-size: 24px;
    font-weight: normal;
    margin: 0;
    color: rgba(0, 0, 0, 0.87);
    line-height: 32px;
  }

  em {
    font-style: normal;
    background-color: #FFF73B;
  }

  p {
    font-size: 14px;
    margin: 0;
    color: rgba(0, 0, 0, 0.543846);
    line-height: 20px;
  }

  span {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.54);
  }

  &_info {
    padding: 10px 10px 10px 30px;
    display: grid;
    grid-template-columns: 1fr auto;
  }

  &_pic {
    background-color: rgba(0, 0, 0, 0.25);
  }
}
</style>
