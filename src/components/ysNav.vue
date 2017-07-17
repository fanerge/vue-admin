/**
 * Created by yuzhenfan on 2017/6/14.
 */
<template>
  <el-menu default-active="1" class="el-menu" @open="handleOpen" @close="handleClose" theme="dark" router>
    <el-menu-item index="/group">
    	<iconfont icon="icon-daxiang" :width="2" :height="2" :verticalAlign="-0.5"></iconfont>
    	集团首页</el-menu-item>
    <el-menu-item index="/department">
    	<iconfont icon="icon-lang" :width="2" :height="2" :verticalAlign="-0.5"></iconfont>
    	园长首页</el-menu-item>
    <el-submenu index="">
      <template slot="title">
      	<iconfont icon="icon-huli" :width="2" :height="2" :verticalAlign="-0.5"></iconfont>
      	幼儿管理</template>
      <el-menu-item-group>
        <el-menu-item index="/childmanage/online">
        	<iconfont icon="icon-gongji" :width="1" :height="1"></iconfont>
        	在园幼儿</el-menu-item>
        <el-menu-item index="/childmanage/dataShow">
        	<iconfont icon="icon-lu" :width="1" :height="1"></iconfont>
        	幼儿考勤</el-menu-item>
        <el-menu-item index="/childmanage/classmanage">
        <iconfont icon="icon-hema" :width="1" :height="1"></iconfont>
        	班级管理</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
import iconfont from '@/components/iconfont'
  export default {
    name: 'nav',
    data () {
      return {

      }
    },
    methods: {
      handleOpen: function () {
        console.log('菜单打开了')
      },
      handleClose: function () {
        console.log('菜单关闭了')
      }
    },
    components: {
    	iconfont
    }
  }
</script>

<style scoped>
  .el-menu {
  	position: fixed;
  	top: 0;
  	left: 0;
  	bottom: 0;
  	width: 15vw;
  }
</style>

