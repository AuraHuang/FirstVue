<template>
  <div v-for="index in sliderBcg" :key="index">
      <div class="slider" :style="sliderCarousel(index)" v-if="current == index"></div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            sliderBcg: 5,
            rgbNum: 200,
            current: 1,
            interval: "",
        }
    },
    methods: {
        sliderCarousel(index) {
            this.rgbNum = 150 + (20*index)
            return "background-color: rgb("+this.rgbNum+","+this.rgbNum+","+this.rgbNum+");"
        }
    },
    mounted() {
        this.interval = setInterval(() => {
            if (this.current == this.sliderBcg) {
                this.current = 1
            } else {
                this.current ++
            }
        }, 2000);
    },
    beforeUnmount() {
        clearInterval(this.interval);
    }
}
</script>

<style>
    .slider {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 80%;
        z-index: -1;
    }
</style>