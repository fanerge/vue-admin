/**
 * EVA
 * 幼儿管理-在园幼儿-入园登记组件
 */
<template>
	<div class="childInformationCom">
		<div class="childInformationCom_title">入园登记<span>X</span></div>
		<el-tabs type="card">
		  <el-tab-pane label="基本信息">
		  	<childInformationForm_basic></childInformationForm_basic>
		  </el-tab-pane>
		  <el-tab-pane label="详细信息">
		  	 <childInformationForm_detail></childInformationForm_detail>
		  </el-tab-pane>
		  <div>

		  </div>
		</el-tabs>
	</div>
</template>

<script>

  import childInformationForm_basic from '@/components/ChildInformationCom/ysChildInformationForm_basic'
  import childInformationForm_detail from '@/components/ChildInformationCom/ysChildInformationForm_detail'

  export default {
    name: 'header',
    data () {
      return {
        teacherName: 'fanerge',
        telNumber: 4008008888
      }
    },
    components:{
    	childInformationForm_basic,
    	childInformationForm_detail
    }
  }
</script>

<style scoped>
	.childInformationCom{
		/*width: 780px;*/
		width: 100%;
	}
	.childInformationCom_title{
		display: none;
		width: 100%;
		height: 60px;
		background: #ffd600;
		line-height: 60px;
		color: #ffffff;
		padding:0 20px;
		box-sizing: border-box;
	}
	.childInformationCom_title span{
		float: right;
	}
</style>


