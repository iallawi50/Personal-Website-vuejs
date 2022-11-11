<template>
  <div class="container services">
    <div class="box">
      <div class="img-holder">
        <img src="@/assets/imgs/coding.png" />
      </div>

      <span> برمجة وتطوير الواجهات الامامية</span>
    </div>
    <div class="box">
      <div class="img-holder">
        <img src="@/assets/imgs/uiux.png" />
      </div>

      <span>تصميم واجهة و تجربة المستخدم</span>
    </div>
    <a href="https://wa.me/966565595718">
      <div class="box">
        <div class="img-holder">
          <img src="@/assets/imgs/order.png" />
        </div>

        <span>تقدم بطلب مشروعك</span>
      </div>
    </a>
  </div>
</template>
<script>
export default {
  name: "ServicesView",
  
}
</script>
<style lang="scss" scoped>
a {
  text-decoration: none;
}

.services {
  margin-top: 60px;
  margin-bottom: 60px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  direction: rtl;
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
    // border-radius: 0 0 15px 15px;
    display: block;
  }
}
</style>
