<template>
  <main class="main">
    <span
      class="drag-me"
      v-if="dragMe.show"
      :style="{
        top: `${(mousePosition.y - 16) / 10}rem`,
        left: `${(mousePosition.x + 16) / 10}rem`,
        opacity: dragMe.opacity,
      }"
    >
      Drag Me
    </span>
    <div
      class="headers-container swiper-container"
      @mouseover="showDragMe()"
      @mouseleave="hideDragMe()"
    >
      <div
        class="headers-wrapper swiper-wrapper"
      >
        <div
          v-for="header in slider.headers"
          :key="header.id"
          class="header-slide swiper-slide"
        ></div>
      </div>
    </div>
    <div class="parallax" ref="parallax">
      <div
        class="parallax-layer"
        :data-depth="images.curve.dataDepth"
      >
        <div class="parallax-layer__inner">
          <img
            class="curve"
            :src="images.curve.src"
            :alt="images.curve.alt"
          />
        </div>
      </div>
      <div
        v-for="(item, index) in images.models.containers"
        :key="item.id"
        class="parallax-layer"
        :data-depth="item.dataDepth"
      >
        <div class="parallax-layer__inner">
          <div :class="['model', item.className]">
            <img
              class="model__image"
              :src="images.models.sources[index].src"
              :alt="images.models.sources[index].alt"
            />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Parallax from 'parallax-js';
import Swiper from 'swiper';
import curve from '../assets/images/main/curve.svg';
import model1 from '../assets/images/main/model-1.png';
import model2 from '../assets/images/main/model-2.png';
import model3 from '../assets/images/main/model-3.png';

export default {
  name: 'Main',
  data() {
    return {
      slider: {
        prevIndex: 0,
        headers: [
          { id: 0 },
          { id: 1 },
          { id: 2 },
        ],
      },
      images: {
        curve: {
          src: curve,
          alt: 'Curve',
          dataDepth: 0.2,
        },
        models: {
          containers: [
            {
              id: 0,
              className: 'model-left',
              dataDepth: 0.4,
            },
            {
              id: 1,
              className: 'model-center',
              dataDepth: 0.6,
            },
            {
              id: 2,
              className: 'model-right',
              dataDepth: 0.8,
            },
          ],
          sources: [
            {
              src: model1,
              alt: 'Model 1',
            },
            {
              src: model2,
              alt: 'Model 2',
            },
            {
              src: model3,
              alt: 'Model 3',
            },
          ],
        },
      },
      dragMe: {
        show: false,
        opacity: 0,
        timeout: 0,
      },
    };
  },
  computed: {
    ...mapState(['mousePosition']),
  },
  methods: {
    ...mapActions(['setMousePosition']),
    initBackgroundParallax() {
      new Parallax(this.$refs.parallax); // eslint-disable-line
    },
    initHeadersSlider() {
      const component = this;

      const options = {
        loop: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        slideActiveClass: 'active',
        on: {
          touchMove(event) {
            component.setMousePosition(event);
          },
          slideChange() {
            component.updateModelPhotos(this.realIndex);
          },
        },
      };

      new Swiper('.headers-container', options); // eslint-disable-line
    },
    showDragMe() {
      if (this.dragMe.timeout) {
        clearTimeout(this.dragMe.timeout);
      }

      this.dragMe.show = true;

      const transitionDelay = 0; // Min delay to activate transition animation

      this.dragMe.timeout = setTimeout(() => {
        this.dragMe.opacity = 1;
      }, transitionDelay);
    },
    hideDragMe() {
      if (this.dragMe.timeout) {
        clearTimeout(this.dragMe.timeout);
      }

      this.dragMe.opacity = 0;

      const transitionDuration = 300; // Duration of .drag-me opacity transition

      this.dragMe.timeout = setTimeout(() => {
        this.dragMe.show = false;
      }, transitionDuration);
    },
    updateModelPhotos(currentIndex) {
      // Prevent case when Swiper fires slideChange event and pass 0 twice
      // after passing the loop
      if (this.slider.prevIndex === currentIndex) {
        return;
      }

      const isNext = (
        currentIndex - this.slider.prevIndex === 1
      ) || (
        this.slider.prevIndex === this.slider.headers.length - 1 && currentIndex === 0
      );

      if (isNext) {
        this.images.models.sources = [
          ...this.images.models.sources.slice(1),
          this.images.models.sources[0],
        ];
      } else {
        this.images.models.sources = [
          this.images.models.sources[this.images.models.sources.length - 1],
          ...this.images.models.sources.slice(0, this.images.models.sources.length - 1),
        ];
      }

      this.slider.prevIndex = currentIndex;
    },
  },
  mounted() {
    this.initBackgroundParallax();
    this.initHeadersSlider();
  },
};
</script>

<style lang="scss" scoped>
@import '~swiper/css/swiper.css';
@import '../assets/scss/media.scss';
@import '../assets/scss/z-index.scss';

.main {
  position: relative;
  height: 100%;
  overflow: hidden;
}

.drag-me {
  position: absolute;
  left: 20rem;
  top: 20rem;
  z-index: z-index("dropdown");
  display: block;
  width: 4rem;
  height: 1rem;
  font-size: .8rem;
  line-height: 1rem;
  text-transform: uppercase;
  transition: opacity .3s;
}

.headers-container {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3.8rem;
  margin: auto;

  @include media("sm") {
    height: 4.2rem;
  }

  @include media("md") {
    height: 8.4rem;
  }

  @include media("xl") {
    height: 11rem;
  }
}

.header-slide {
  width: 21.4rem;
  margin: 0 2.8rem;

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    transition: opacity .5s;
  }

  &::before {
    opacity: 0;
    background-image: url("../assets/images/main/header.svg");
  }

  &::after {
    opacity: 1;
    background-image: url("../assets/images/main/header-transparent.svg");
  }

  &.active {
    &::before {
      opacity: 1;
    }

    &::after {
      opacity: 0;
    }
  }

  @include media("sm") {
    width: 23.4rem;
    margin: 0 3.2rem;
  }

  @include media("md") {
    width: 46.6rem;
    margin: 0 6rem;
  }

  @include media("md") {
    margin: 0 10rem;
  }

  @include media("xl") {
    width: 61rem;
    margin: 0 15rem;
  }

  &.swiper-slide-prev {
    transform: rotate(-1.5deg);
  }

  &.swiper-slide-next {
    transform: rotate(1.5deg);
  }
}

.parallax,
.parallax-layer,
.parallax-layer__inner {
  width: 100%;
  height: 100%;
}

.parallax-layer__inner {
  display: flex;
  justify-content: center;
  align-items: center;
}

.curve {
  width: 34rem;
  height: 43rem;

  @include media("sm") {
    width: 39.2rem;
    height: 49.4rem;
  }

  @include media("md") {
    width: 62.8rem;
    height: 79rem;
  }

  @include media("lg") {
    width: 50.6rem;
    height: 60.5rem;
  }

  @include media("xl") {
    width: 60.8rem;
    height: 72.6rem;
  }
}

.model {
  position: relative;
}

.model-left {
  display: none;
  width: 16.4rem;
  height: 22.6rem;
  transform: rotate(1.1deg);

  @include media("md") {
    margin-top: -9.6rem;
    margin-left: -54rem;
    display: block;
  }

  @include media("xl") {
    margin-top: -12.4rem;
    margin-left: -73rem;
    width: 23.8rem;
    height: 33rem;
  }
}

.model-center {
  width: 25rem;
  height: 36.8rem;
  transform: rotate(1.5deg);

  @include media("sm") {
    width: 27.4rem;
    height: 40.4rem;
  }

  @include media("md") {
    width: 36rem;
    height: 53rem;
  }

  @include media("xl") {
    width: 47.6rem;
    height: 70.2rem;
  }
}

.model-right {
  display: none;
  width: 23.4rem;
  height: 16.2rem;
  transform: rotate(2.04deg);

  @include media("md") {
    display: block;
    margin-right: -49.6rem;
    margin-bottom: -28.4rem;
  }

  @include media("xl") {
    width: 34.5rem;
    height: 23.8rem;
    margin-right: -70rem;
    margin-bottom: -38rem;
  }
}

.model__image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
