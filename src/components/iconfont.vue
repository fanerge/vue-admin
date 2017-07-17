/**
 * Created by yuzhenfan on 2017/6/14.
 */
<template>
  	<svg class="icon" :style="{width: width + 'em', height: height + 'em', verticalAlign: verticalAlign + 'em'}" aria-hidden="true">
	  <use :xlink:href="iconName"></use>
	</svg>
</template>

<script>
  export default {
    name: 'iconfont',
    props: {
    	icon: {
    		type: String,
    		required: true 
    	},
    	width: {
    		type: Number,
    		default: 1
    	},
    	height: {
    		type: Number,
    		default: 1
    	},
    	verticalAlign: {
    		type: Number,
    		default: -0.15
    	}
    },
    data () {
      return {
      }
    },
    computed: {
    	iconName () {
    		return `#${this.icon}`
    	}
    }
  }
</script>

<style scoped>
  .icon {
	   fill: currentColor;
	   overflow: hidden;
	}
</style>

