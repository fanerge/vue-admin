/**
 * Created by yuzhenfan on 2017/6/14.
 */
<template>
  <div class="ys-container">
  	<div>
    	<ys-nav></ys-nav>
    </div>
    <div class="main">
    	<ys-header></ys-header>
      <div class="breadcrumb">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <transition name="fade">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  import ysHeader from '@/components/ysHeader'
  import ysNav from '@/components/ysNav'

  export default {
    name: 'main',
    computed: mapState({
      fullscreenLoading: 'fullscreenLoading'
    }),
    methods: {
      openFullScreen() {
        this.$store.commit('changeFullscreenLoading', { show: true })
        setTimeout(() => {
          this.$store.commit('changeFullscreenLoading', { show: false })
        }, 3000);
      }
    },
    components: {
      ysHeader,
      ysNav
    }
  }
</script>

<style scoped>
	.ys-container {
		overflow-x: hidden;
	}
	.ys-container:after {
		clear: both;
	}
	.main {
		width: 83.6vw;
		float: right;
	}
  .breadcrumb{
    height: 30px;
    padding-top: 8px;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .2s
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
</style>
