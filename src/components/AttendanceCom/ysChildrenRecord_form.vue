/**
 * EVA
 * 幼儿管理-幼儿考勤-刷卡记录
 */
<template>
	<div>
		<div style='display: inline-block;'>
		    <el-date-picker
		      type="date"
		      placeholder="选择日期"
		      >
		    </el-date-picker>
		</div>
		<el-dropdown>
			<el-button>
			    班级选择<i class="el-icon-caret-bottom el-icon--right"></i>
			</el-button>
			<el-dropdown-menu slot="dropdown">
			   <el-dropdown-item>1班</el-dropdown-item>
			   <el-dropdown-item>2班</el-dropdown-item>
			</el-dropdown-menu>
		</el-dropdown>
		<el-input style='width:200px'
		  	placeholder="输入姓名"
		  	icon="search"
		  	>
		</el-input>
	</div>
</template>

<script>
  export default {
    name: 'XX',
    data () {
      return {
      	
      }
    },
    
  }
</script>

<style scoped>
	
</style>


