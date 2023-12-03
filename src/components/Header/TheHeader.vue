<script>
  // import Logo from '../assets/logo.svg'
  import TheHeaderDropdown from './TheHeaderDropdown.vue'
  import HamburgerIcon from '../../assets/hamburgerIcon.svg'

  export default {
    components: {
      TheHeaderDropdown,
      HamburgerIcon
    },
    data() {
      return {
        headerActive: false,
      }
    },
    methods: {
      handleHeaderDropdown() {
        return this.headerActive = !this.headerActive
      }
    }
  }
  
</script>

<template>
  <header class="">
    <!-- Logo -->
    <router-link to="/" class="logo-group">
      <img src="../../assets/logo.svg" alt="" class="w-[65px] desktop:w-[95px]">
    </router-link>
    <!-- Mobile Hamburger -->
    <input type="checkbox" id="nav-input" class="nav-input">
    <label for="nav-input" id="nav-label" class="nav-label">
      <HamburgerIcon />
    </label>
    <!-- Navbar -->
    <nav class="navbar">
      <ul class="nav-list">
        <li class="nav-item relative">
          <button @click="handleHeaderDropdown">
            使用說明
            <span class="text-sm ml-[-4px]"><i class="fa-solid fa-angle-down"></i></span>
          </button>
          <TheHeaderDropdown :headerActive="headerActive">
            <router-link to="/instruction/borrow" class="px-4 py-2 hover:bg-olive-green rounded-sm desktop:hover:bg-gray-input desktop:rounded-none">借還方式</router-link>
            <router-link to="/instruction/remind" class="px-4 py-2 hover:bg-olive-green rounded-sm desktop:hover:hover:bg-gray-input desktop:rounded-none">騎乘須知</router-link>
            <!-- <router-link to="/instruction/insurance" class="px-4 py-2 hover:bg-olive-green rounded-sm desktop:hover:hover:bg-gray-input desktop:rounded-none">自行車保險</router-link> -->
          </TheHeaderDropdown>
        </li>
        <li class="nav-item">
          <router-link to="/payment">收費方式</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/stop-info">站點資訊</router-link>
        </li>
        <li class="nav-item">
          <router-link to="#">最新消息</router-link>
        </li>
      </ul>
      <div class="login-btn forMobile">
        <router-link to="/login" class="">登入</router-link>
      </div>
    </nav>
    <div class="login-btn forDesktop">
      <router-link to="/login" class="">登入</router-link>
    </div>
  </header>
</template>
<style lang="scss">
  header {
    position: sticky;
    z-index: 999;
    top: 0;
    width: 100%;
    height: 72px;
    background: #FFFFFF;
    border-bottom: 1px solid #EBEBEB;
    display: grid;
    grid-template-columns: 32px 1fr 1fr 32px;
    align-items: center;
    @media screen and (min-width: 1080px) {
      height: 104px;
      grid-template-columns: 124px 1fr 3fr 2fr 124px;
    }
  }
  .logo-group {
    grid-column: 2/3;
  }
  .nav-input {
    display: none;
    &:checked ~ nav {
      transform: scale(1, 1);
    }
    &:checked ~ nav li {
      opacity: 1;
      transition: opacity .2s ease-out .15s;
    }
  }
  .nav-label {
    grid-column: 3/4;
    justify-self: end;
    cursor: pointer;
    @media screen and (min-width: 1080px) {
      display: none;
    }
  }
  .navbar {
    position: absolute;
    top: 100%;
    padding: 32px;
    width: 100%;
    height: calc(100vh - 72px);
    background-color: #B5CC22;
    transform: scale(1, 0);
    transform-origin: top;
    transition: transform 0.3s ease-out;
    @media screen and (min-width: 1080px) {
      all: unset;
      background-color: #FFFFFF;
    }
  }
  .nav-list {
    @media screen and (min-width: 1080px) {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      // grid-gap: 40px;
    }
  }
  .nav-item {
    margin-bottom: 32px;
    opacity: 0;
    a {
      font-style: normal;
      font-weight: 500;
      line-height: 24px;
      letter-spacing: 3.24px;
      color: #FFFFFF;
      &.active {
        color: #677510;
      }
    }
    button {
      font-style: normal;
      font-weight: 500;
      line-height: 24px;
      letter-spacing: 3.24px;
      color: #FFFFFF;
      &.active {
        color: #677510;
      }
    }
    @media screen and (min-width: 1080px) {
      all: unset;
      a {
        color: #677510;
        &.active {
          color: #B5CC22;
        }
      }
      button {
        color: #677510;
        &.active {
          color: #B5CC22;
        }
      }
    }
  }
  .login-btn {
    position: fixed;
    bottom: 128px;
    background: #FFFFFF;
    padding: 10px 0;
    border-radius: 100px;
    width: 80px;
    text-align: center;
    // opacity: 1;
    a {
      color: #B5CC22;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
      letter-spacing: 0.1px;
    }
    &.forMobile {
      display: block;
    }
    &.forDesktop {
      display: none;
    }
    @media screen and (min-width: 1080px) {
      all: unset;
      justify-self: end;
      background-color: #B5CC22;
      padding: 10px 24px;
      border-radius: 100px;
      a {
        color: #FFFFFF;
      }
      &.forMobile {
        display: none;
      }
      &.forDesktop {
        display: block;
      }
    }
  }
</style>