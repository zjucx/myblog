<template>
<div class='navbar-zjucx'>
<div class="dropdown">
  <tooltip effect="scale" placement="right" content="zjucx"><button class="btn btn-default">飛</button></tooltip>
  <tooltip effect="scale" placement="right" content="zjucx"><button class="btn btn-default">飛</button></tooltip>
  <tooltip effect="scale" placement="right" content="zjucx"><button class="btn btn-default">飛</button></tooltip>
  <tooltip effect="scale" placement="right" content="zjucx"><button class="btn btn-default">飛</button></tooltip>
</div>
<div class="nav-user">
  <template>
  <tooltip effect="scale" placement="right" content="zjucx"><button class="btn btn-default">飛</button></tooltip>
  <tooltip effect="scale" placement="right" content="zjucx"><button class="btn btn-default">飛</button></tooltip>
  <tooltip effect="scale" placement="right" content="zjucx"><button class="btn btn-default">飛</button></tooltip>
  <tooltip effect="scale" placement="right" content="zjucx"><button class="btn btn-default">飛</button></tooltip>
</div>
</div>
</template>

<script>
import { tooltip } from 'vue-strap'
export default {
  name: 'navbar',
  components: {
    tooltip: tooltip
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar-zjucx {
  position: fixed;
  width: 45px;
  z-index: 1049;
  -webkit-backface-visibility: hidden;
  left: 0;
  top: 0;
  height: 100%;
  background: #2a2a2a;
}
.dropdown {
    position: relative;
}
.nav-user {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding-bottom: 5px;
}
</style>
