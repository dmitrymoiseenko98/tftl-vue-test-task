<template>
  <main class="main">
    <div class="curve"></div>
    <div class="images">
      <img class="image image-left" src="../assets/images/main/image-left.png" alt="Image 1">
      <img class="image image-center" src="../assets/images/main/image-center.png" alt="Image 2">
      <img class="image image-right" src="../assets/images/main/image-right.png" alt="Image 3">
    </div>
    <div class="headers">
      <h1 class="header-center">Ink Lingerie</h1>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Main',
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/media.scss';

.main {
  position: relative;
  height: 100%;
  overflow: hidden;
}

.curve,
.images,
.headers {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
}

.curve {
  z-index: 0;
  width: 34rem;
  height: 43rem;
  background-image: url("../assets/images/main/curve.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

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

.images {
  z-index: 1;
  width: 0;
  height: 0;
}

.image {
  position: absolute;
}

.image-left {
  top: -16.2rem;
  left: -35.4rem;
  z-index: 0;
  display: none;
  width: 16.4rem;
  height: 22.6rem;
  transform: rotate(1.1deg);

  @include media("md") {
    display: block;
  }

  @include media("xl") {
    top: -23rem;
    left: -48.8rem;
    width: 23.8rem;
    height: 33rem;
  }
}

$imageCenterWidthXs: 25rem;
$imageCenterHeightXs: 36.8rem;
$imageCenterWidthSm: 27.4rem;
$imageCenterHeightSm: 40.4rem;
$imageCenterWidthMd: 36rem;
$imageCenterHeightMd: 53rem;
$imageCenterWidthXl: 47.6rem;
$imageCenterHeightXl: 70.2rem;

.image-center {
  z-index: 1;
  top: -($imageCenterHeightXs / 2);
  left: -($imageCenterWidthXs / 2);
  width: $imageCenterWidthXs;
  height: $imageCenterHeightXs;
  transform: rotate(1.5deg);

  @include media("sm") {
    top: -($imageCenterHeightSm / 2);
    left: -($imageCenterWidthSm / 2);
    width: $imageCenterWidthSm;
    height: $imageCenterHeightSm;
  }

  @include media("md") {
    top: -($imageCenterHeightMd / 2);
    left: -($imageCenterWidthMd / 2);
    width: $imageCenterWidthMd;
    height: $imageCenterHeightMd;
  }

  @include media("xl") {
    top: -($imageCenterHeightXl / 2);
    left: -($imageCenterWidthXl / 2);
    width: $imageCenterWidthXl;
    height: $imageCenterHeightXl;
  }
}

.image-right {
  z-index: 2;
  top: 0;
  left: 0;
  display: none;
  width: 23.4rem;
  height: 16.2rem;
  transform: rotate(2.04deg);

  @include media("md") {
    top: 5.8rem;
    left: 12.8rem;
    display: block;
  }

  @include media("xl") {
    top: 6.4rem;
    left: 17.2rem;
    width: 34.5rem;
    height: 23.8rem;
  }
}

.headers {
  z-index: 2;
  width: 0;
  height: 0;
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
</style>
