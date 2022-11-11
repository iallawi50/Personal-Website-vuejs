<template>
  <div>
    <a target="blank" :href="link">
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
  z-index: 3;
  li {
    display: flex;
    justify-content: center;
    align-content: center;
    width: 30px;
    height: 30px;
    background: rgb(255, 255, 255);
    overflow: hidden;
    img {
      margin: 5px 0;
      transform: scale(1.3);
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
    overflow: hidden;
    img {
      padding: 30px;
      transition: 0.3s;
      &:hover {
        transform: rotate(2deg) scale(1.2);
      }
    }
  }
  span {
    padding: 10px;
    color: white;
    background: var(--mainColor);
    border-radius: 0 0 15px 15px;
    display: block;
  }
}
</style>
