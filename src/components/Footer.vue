<template>
  <footer class="footer">
    <div class="social">
      <div class="social-item">
        <a class="social-item__link" href="https://www.instagram.com/thefirstthelast.agency/">Inst</a>
      </div>
      <div class="social-item">
        <a class="social-item__link" href="https://www.facebook.com/thefirstthelast.agency/">Fb</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/media.scss';
@import '../assets/scss/z-index.scss';

.footer {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: z-index("footer");
  width: 100%;
}

.social {
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  display: flex;
  font-size: 1.1rem;
  line-height: 1.3rem;

  @include media("sm") {
    bottom: 2.4rem;
    left: 2.4rem;
  }

  @include media("md") {
    bottom: 3.2rem;
    left: 3.2rem;
  }

  @include media("xl") {
    bottom: 5rem;
    left: 5rem;
  }
}

.social-item:last-child {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: .8rem;

  &::before {
    content: "";
    display: block;
    width: 5.6rem;
    height: .1rem;
    margin-right: .8rem;
    background: #393939;
    opacity: .24;
  }
}

.social-item__link {
  color: inherit;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}
</style>
