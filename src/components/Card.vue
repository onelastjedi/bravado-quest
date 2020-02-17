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
    <div class="card_btn">
      Mark as suitable
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
  grid-template-rows: 1fr auto;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  background: #FAFAFA;
  margin-bottom: 21px;
  grid-template-areas:
            "a b b"
            "a b b"
            "a c c";

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
    grid-area: b;
  }

  &_pic {
    background-color: rgba(0, 0, 0, 0.25);
    grid-area: a;
    display: grid;
  }

  &_btn {
    grid-area: c;
    color: #009688;
    height: 40px;
    line-height: 40px;
    border-top: 1px solid rgba(0, 0, 0, 0.12);
    font-weight: 500;
    text-transform: uppercase;
    padding-left: 40px;
    font-size: 14px;
  }
}
</style>
