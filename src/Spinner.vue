<template>
  <img ref="img" :src="imgFileName"/>
</template>
<script>
import {Linear} from 'gsap'
import {TweenMax} from "gsap/TweenMax";
export default {
  props: {
    spinsPerSecond: { type: Number, default: 1 },
    type: { type: String, default: 'blue' }
  },
  data() {
    return {
      tween: null,
      timeline: null,
    }
  },
  computed: {
    imgFileName() { return "./assets/" + this.type + ".png "}
  },
  watch: {
    spinsPerSecond: function(newSpeed) {
      if (this.tween && newSpeed != 0) {
        TweenMax.to(this.tween, 2, {timeScale:newSpeed});
      }
    }
  },
  mounted() {
    this.tween = TweenMax.to(this.$refs["img"], this.spinsPerSecond, 
      {rotationZ:350, repeat:-1, ease:Linear.easeNone}
    )
  }
}
</script>
