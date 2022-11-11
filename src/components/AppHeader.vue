<template>
  <div>
    <nav>
      <router-link to="/">الرئيسية</router-link>
      <router-link to="/about">أعمالي</router-link>
      <router-link to="/skills">المهارات</router-link>
      <router-link to="/services">الخدمات</router-link>
    </nav>
  </div>
</template>

<style lang="scss">
nav {
  display: flex;
  justify-content: center;
  flex-direction: row-reverse;
  background: #555574;
  padding: 10px;

  a {
    font-weight: bold;
    text-decoration: none;
    color: #fff;
    margin: 0 16px;
    font-size: 14px;

    &.router-link-exact-active {
      color: #cbcbff;
    }
  }
}
</style>
