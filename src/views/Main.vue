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
    <div class="headers">
      <h1
        class="header-center"
        @mouseover="showDragMe()"
        @mouseleave="hideDragMe()"
      >
        Ink Lingerie
      </h1>
    </div>
    <div class="parallax" ref="parallax">
      <div
        v-for="item in images"
        :key="item.id"
        :data-depth="item.dataDepth"
        class="parallax-layer"
      >
        <div class="parallax-layer__inner">
          <img
            :class="['parallax-layer__image', item.className]"
            :src="item.src"
            :alt="item.alt"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapState } from 'vuex';
import Parallax from 'parallax-js';
import curve from '../assets/images/main/curve.svg';
import imageLeft from '../assets/images/main/image-left.png';
import imageCenter from '../assets/images/main/image-center.png';
import imageRight from '../assets/images/main/image-right.png';

export default {
  name: 'Main',
  data() {
    return {
      images: [
        {
          id: 0,
          className: 'parallax-layer__image-curve',
          src: curve,
          alt: 'Curve',
          dataDepth: 0.2,
        },
        {
          id: 1,
          className: 'parallax-layer__image-left',
          src: imageLeft,
          alt: 'Image 1',
          dataDepth: 0.4,
        },
        {
          id: 2,
          className: 'parallax-layer__image-center',
          src: imageCenter,
          alt: 'Image 2',
          dataDepth: 0.6,
        },
        {
          id: 3,
          className: 'parallax-layer__image-right',
          src: imageRight,
          alt: 'Image 3',
          dataDepth: 0.8,
        },
      ],
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
    initParallax() {
      new Parallax(this.$refs.parallax); // eslint-disable-line
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
  },
  mounted() {
    this.initParallax();
  },
};
</script>

<style lang="scss" scoped>
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

.headers {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 0;
  height: 0;
  margin: auto;
}

$headerWidthXs: 21.4rem;
$headerHeightXs: 3.8rem;
$headerWidthSm: 23.4rem;
$headerHeightSm: 4.2rem;
$headerWidthMd: 46.6rem;
$headerHeightMd: 8.4rem;
$headerWidthLg: $headerWidthMd;
$headerHeightLg: $headerHeightMd;
$headerWidthXl: 61rem;
$headerHeightXl: 11rem;

.header-center,
.headers::before,
.headers::after {
  position: absolute;
  top: -($headerHeightXs / 2);
  width: $headerWidthXs;
  height: $headerHeightXs;

  @include media("sm") {
    top: -($headerHeightSm / 2);
    width: $headerWidthSm;
    height: $headerHeightSm;
  }

  @include media("md") {
    top: -($headerHeightMd / 2);
    width: $headerWidthMd;
    height: $headerHeightMd;
  }

  @include media("xl") {
    top: -($headerHeightXl / 2);
    width: $headerWidthXl;
    height: $headerHeightXl;
  }
}

.header-center {
  left: -($headerWidthXs / 2);
  color: #580300;
  font-family: "Schnyder X Condensed XL";
  font-size: 4.4rem;
  font-weight: 600;
  line-height: $headerHeightXs;
  text-align: center;
  text-transform: uppercase;

  @include media("sm") {
    left: -($headerWidthSm / 2);
    font-size: 4.8rem;
    line-height: $headerHeightSm;
  }

  @include media("md") {
    left: -($headerWidthMd / 2);
    font-size: 9.6rem;
    line-height: $headerHeightMd;
  }

  @include media("xl") {
    left: -($headerWidthXl / 2);
    font-size: 12.6rem;
    line-height: $headerHeightXl;
  }
}

.headers::before,
.headers::after {
  content: "";
  display: block;
  background-image: url("../assets/images/main/header-duplicate.svg");
  background-repeat: no-repeat;
  background-size: 88% 88%;
  background-position: center;
}

.headers::before {
  left: -($headerWidthXs * 1.5 + 5.6rem);
  transform: rotate(-1.5deg);

  @include media("sm") {
    left: -($headerWidthSm * 1.5 + 6.4rem);
  }

  @include media("md") {
    left: -($headerWidthMd * 1.5 + 11.8rem);
  }

  @include media("lg") {
    left: -($headerWidthLg * 1.5 + 19.8rem);
  }

  @include media("xl") {
    left: -($headerWidthXl * 1.5 + 31.8rem);
  }
}

.headers::after {
  left: $headerWidthXs / 2 + 5.6rem;
  transform: rotate(1.5deg);

  @include media("sm") {
    left: $headerWidthSm / 2 + 6.4rem;
  }

  @include media("md") {
    left: $headerWidthMd / 2 + 11.8rem;
  }

  @include media("lg") {
    left: $headerWidthLg / 2 + 19.8rem;
  }

  @include media("xl") {
    left: $headerWidthXl / 2 + 31.8rem;
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

.parallax-layer__image-curve {
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

.parallax-layer__image-left {
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

.parallax-layer__image-center {
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

.parallax-layer__image-right {
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
</style>
