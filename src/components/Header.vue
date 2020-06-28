<template>
  <header class="header">
    <router-link class="logo" to="/"></router-link>
    <nav class="nav">
      <button
        class="nav-toggle"
        @click="toggleNav()"
      >
        <span></span>
        <span></span>
      </button>
      <ul
        class="nav-list"
        :class="{open: isNavOpen}"
      >
        <li class="nav-item">
          <router-link class="nav-item__link" to="/">Commercial</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-item__link" to="/">Editorial</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-item__link" to="/">Reportage</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-item__link" to="/">Meet me</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import logo from '../assets/images/logo.svg';

export default {
  name: 'Header',
  data() {
    return {
      logo,
      isNavOpen: false,
    };
  },
  methods: {
    toggleNav() {
      this.isNavOpen = !this.isNavOpen;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/media.scss';
@import '../assets/scss/z-index.scss';

.header {
  position: absolute;
  top: 0;
  left: 0;
  z-index: z-index("header");
  width: 100%;
}

.logo,
.nav {
  position: absolute;
  top: 1.6rem;

  @include media("sm") {
    top: 3rem;
  }

  @include media("xl") {
    top: 4rem;
  }
}

.logo {
  left: 2rem;
  display: block;
  width: 10.2rem;
  height: 1.6rem;
  background-image: url("../assets/images/logo.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  @include media("sm") {
    left: 2.4rem;
  }

  @include media("lg") {
    left: 3rem;
  }

  @include media("xl") {
    left: 5rem;
  }
}

.nav {
  right: 2rem;

  @include media("sm") {
    right: 2.4rem;
  }

  @include media("lg") {
    right: 3rem;
  }

  @include media("xl") {
    right: 5rem;
  }
}

$headerNavToggleHeight: 2rem;

.nav-toggle {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: $headerNavToggleHeight + "rem";
  background-color: transparent;
  border: none;

  @include media("md") {
    display: none;
  }

  span {
    width: 100%;
    height: .1rem;
    background-color: rgba(40, 40, 40, .57);

    &:last-child {
      margin-top: .8rem;
    }
  }
}

.nav-list {
  position: absolute;
  top: $headerNavToggleHeight + 1.4rem;
  right: 0;
  z-index: z-index("dropdown");
  display: none;
  text-align: right;
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.4rem;
  text-transform: capitalize;

  &.open {
    display: block;
  }

  @include media("md") {
    display: block;
    top: 0;
  }
}

.nav-item {
  &:not(:first-child) {
    margin-top: 1.4rem;
  }
}

.nav-item__link {
  color: inherit;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}
</style>
