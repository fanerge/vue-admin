/**
 * Created by yuzhenfan on 2017/6/14.
 */
<template>
  	<iconfont @click.native="toggleFullScreen" :icon="iconType"></iconfont>
</template>

<script>
import screenfull from 'screenfull'
import iconfont from '@/components/iconfont'
  export default {
    name: 'screenfull',
    data () {
      return {
        isFullscreen: false,
        iconType: 'icon-quanping'
      }
    },
    methods: {
    	toggleFullScreen () {
    		if (!screenfull.enabled) {
	            this.$message({
	              message: 'you browser can not work',
	              type: 'warning'
	            });
	            return false;
	        }
    		this.iconType = this.isFullscreen ? 'icon-quanping' : 'icon-tuichuquanping'
	        screenfull.toggle()
	        this.isFullscreen = !this.isFullscreen
    	}
    },
    components: {
    	iconfont
    }
  }
</script>

<style scoped>
  .icon {
	   fill: currentColor;
	   overflow: hidden;
	}
</style>

