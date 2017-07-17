/**
 * EVA
 * 幼儿管理-在园幼儿-学期升级组件
 */
<template>
	<div class="childInformationCom">
		<div class="childInformationCom_title">新学期升级<span>X</span></div>
		
		<el-row>
			<el-col :span='20' :offset='2'>
				<el-form>
					<el-form-item label="升班时是否同时修改班级名称" label-width='300px'>
					     <el-radio-group >
					       <el-radio label="升班改名"></el-radio>
					       <el-radio label="升班保留原班名"></el-radio>
					     </el-radio-group>
					</el-form-item>
				</el-form>
			</el-col>
			<el-col :span='20' :offset='2'>
				<el-table  :data="tableData3">
				    <el-table-column  type="selection" style="width:10%"> </el-table-column>
				    <el-table-column label="全选"  style="width:10%">
				      <template scope="scope"></template>
				    </el-table-column> 
				    <el-table-column  prop="name" label="当前班级" style="width:30%"/>
				    <el-table-column  prop="address"  label="升班后"  style="width:30%" show-overflow-tooltip/>
				</el-table>
			</el-col>
		</el-row>
		
		
	</div>
</template>

<script>
  export default {
    name: 'XX',
    data () {
      return {
		 tableData3: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],

      }
    }
  }
</script>

<style scoped>
    *{
    	/*font-weight:0 !imp*/
    }
	.childInformationCom{
		/*width: 780px;*/
		width: 100%;
		background: #FFFFFF;
		height: 300px;
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
	.el-checkbox{
		display: block;
	}
	.el-table{
		border: 0px;
	}
	.el-table td, .el-table th.is-leaf {
	    border: 0px;
	}
	.el-table::after, .el-table::before {
		background:0px;
	}
</style>


