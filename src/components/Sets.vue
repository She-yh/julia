<template>
  <section id="setsContainer">
    <div>
      <div class="setsTitle">迭代</div>
      <i class="demo-icon" @click="ITERATION+=10;setHandler();">&#xe806;</i>
      <i class="demo-icon" @click="ITERATION-=10;setHandler();">&#xe807;</i>
      <button id="auto" v-text="auto" @click="autoHandler"></button>
    </div>
    <div>
      <div class="setsTitle">缩放</div>
      <i class="demo-icon" @click="zoom+=zoom/4;setHandler();">&#xe805;</i>
      <i class="demo-icon" @click="zoom-=zoom/4;setHandler();">&#xe804;</i>
    </div>
    <div>
      <div class="setsTitle">偏移</div>
      <i class="demo-icon" @click="offset_y+=40;setHandler();">&#xe803;</i>
      <i class="demo-icon" @click="offset_y-=40;setHandler();">&#xe800;</i>
      <i class="demo-icon" @click="offset_x+=40;setHandler();">&#xe801;</i>
      <i class="demo-icon" @click="offset_x-=40;setHandler();">&#xe802;</i>
    </div>
  </section>
</template>

<script>
export default {
  name: "Sets",
  data() {
    return {
      sub:10,
      Inter: '',
      auto: 'auto',
      ITERATION: 20,
      offset_y: 175,
      offset_x: 175,
      canvas_width: 350,
      canvas_height: 350,
      IMG_CONSTANT: 0.01,
      REAL_CONSTANT: 0.285,
      reds: [],
      greens: [],
      zoom: 100,
      blues: [],
      imageData: [],
    }
  },
  methods: {
    setHandler() {
      this.set_color()
      this.draw_julia(this.zoom)
    },
    set_color() {
      for (let i = 0; i < this.ITERATION; i++)//产生颜色表
      {
        this.reds[i] = (i * 8 * 256 / this.ITERATION) % 256;
        this.greens[i] = (i * 6 * 256 / this.ITERATION) % 256;
        this.blues[i] = (i * 4 * 256 / this.ITERATION) % 256;
      }
    },
    timeHandler() {
      this.ITERATION = this.ITERATION + this.sub;
      if (this.ITERATION > 500 || this.ITERATION < 10) this.sub = -this.sub;
      this.setHandler();
      console.log(this.ITERATION)
    },
    draw_julia(zoom) {
      let canvas = document.getElementById("canvas-julia");
      let ctx = canvas.getContext('2d');
      this.imageData = ctx.createImageData(350, 350);
      let tmp1, tmp2, num_real, num_img;
      var x, y, k = 0;
      for (y = 0; y < this.canvas_height; y++) {
        let i = 0, radius = 0;
        for (x = 0; x < this.canvas_width; x++) {
          num_real = y - this.offset_y;
          num_img = x - this.offset_x;
          num_real = num_real / zoom;
          num_img = num_img / zoom;
          i = 0;
          radius = 0;
          while ((i < this.ITERATION - 1) && (radius < 4)) {
            tmp1 = num_real * num_real;
            tmp2 = num_img * num_img;
            num_img = 2 * num_real * num_img + this.IMG_CONSTANT;
            num_real = tmp1 - tmp2 + this.REAL_CONSTANT;
            radius = tmp1 + tmp2;
            i++;
          }
          this.imageData.data[k] = this.reds[i];
          this.imageData.data[k + 1] = this.blues[i];
          this.imageData.data[k + 2] = this.greens[i];
          this.imageData.data[k + 3] = 255;
          k += 4;
        }
      }
      ctx.putImageData(this.imageData, 0, 0);
    },
    autoHandler() {
      if (this.auto === 'auto') {
        this.auto = 'stop';
        this.Inter = setInterval(this.timeHandler);
      } else {
        this.auto = 'auto';

        clearInterval(this.Inter);
      }
    },
  },
  mounted() {
    this.set_color();
    this.draw_julia(this.zoom);
  }
}
</script>

<style scoped>
</style>