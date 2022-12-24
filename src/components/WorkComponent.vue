<template>
  <div>
    <a target="_blank" :href="link">
      <div class="box">
        <ul>
          <li v-for="(lang, i) in langs" :key="i">
            <img :src="require(`@/assets/imgs/${lang}.png`)" alt="" />
          </li>
        </ul>
        <div class="img-holder">
          <img :src="require(`@/assets/imgs/${img}`)" alt= />
        </div>

        <span>{{ title }}</span>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "MyWork",
  props: {
    title: String,
    link: String,
    img: String,
    langs: Array,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
a {
  text-decoration: none;
}

ul {
  position: absolute;
  left: -30px;
  top: 50%;
  transform: translateY(-50%);
  list-style-type: none;
  margin: 0;
  display: flex;
  flex-direction: column;
  li {
    width: 30px;
    height: 30px;
    img {
      width: 100%;
      padding: 3px 0;
      transform: scale(1.2);
    }
  }
}

.box {
  margin: 0 auto;
  width: 300px;
  text-align: center;
  position: relative;
  .img-holder {
    background: #fbfbfb;
    box-shadow: 1px 1px 10px 0.5px rgba(0, 0, 0, 0.509);
    overflow: hidden;
          width: 100%;
      height: 230px;
    img {
      padding: 30px;
      transition: 0.3s;
      &:hover {
        transform: rotate(5deg) scale(1.2);
      }
    }
  }
  span {
    padding: 10px;
    color: var(--altColor);
    background: var(--mainColor);
    //border-radius: 0 0 15px 15px;
    display: block;
  }
}
</style>
