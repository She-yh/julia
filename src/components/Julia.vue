<template>
  <section id="julia-container">
    <sets></sets>
    <div id="canvas-container">
      <canvas id="canvas-julia" width="350px" height="350px" style="display: block">你好，你的浏览器不支持canvas，请更换浏览器</canvas>
    </div>
  </section>
</template>

<script>
import Sets from "@/components/Sets";
export default {
  components:{Sets},
  name: "julia",
  data() {
    return {
    }
  },
  computed: {
  },
  methods: {
  },
  mounted() {
  }
}
</script>

<style scoped>
#julia-container {
  align-items: center;
  display: flex;
  flex-direction: row;
}
#canvas-julia {
  box-shadow: 0 0 20px 5px rgba(160, 160, 160, 0.1);
}
@media screen and (max-width:576px) {
  #julia-container {
    flex-direction: column-reverse;
  }
  #canvas-julia{
    width: 300px;
    height: 300px;
  }
}
</style>