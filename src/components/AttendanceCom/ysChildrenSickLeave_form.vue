/**
 * EVA
 * 幼儿管理-幼儿考勤-病假追踪
 */
<template>
	<div>
		<el-dropdown>
			<el-button>
			    班级选择<i class="el-icon-caret-bottom el-icon--right"></i>
			</el-button>
			<el-dropdown-menu slot="dropdown">
			   <el-dropdown-item>1班</el-dropdown-item>
			   <el-dropdown-item>2班</el-dropdown-item>
			</el-dropdown-menu>
		</el-dropdown>
		<el-dropdown>
			<el-button>
			    全部状态<i class="el-icon-caret-bottom el-icon--right"></i>
			</el-button>
			<el-dropdown-menu slot="dropdown">
			   <el-dropdown-item>死了</el-dropdown-item>
			   <el-dropdown-item>活着</el-dropdown-item>
			</el-dropdown-menu>
		</el-dropdown>
		<el-table :data="tableData" border style="width: 100%;margin: 20px 0;">
		   <el-table-column prop="name" label="姓名" width='100'/>
	       <el-table-column prop="totle" label="性别"  width='100'/>
	       <el-table-column prop="all" label="日期"  width='150'/>
	       <el-table-column prop="out" label="主要症状"  width='150'/>
		   <el-table-column prop="sth" label="就医医院"  width='150'/>
		   <el-table-column prop="ill" label="诊断结果（病名）"  width='150'/>
		   <el-table-column prop="mouster" label="是否传染"  width='150'/>
		   <el-table-column prop="mouster" label="住院/居家"  width='150'/>
		   <el-table-column prop="mouster" label="目前状况"  width='150'/>
		   <el-table-column prop="mouster" label="预计返校日"  width='150'/>
		   <el-table-column prop="mouster" label="备注"  width='150'/>
		    <el-table-column label="操作"  width='80'>
		      <template scope="scope">
		        <el-button  size="small" @click='onEdit'>编辑</el-button>
		      </template>
		    </el-table-column>
		</el-table>
		<div class="block">
		  <el-pagination
		    layout="prev, pager, next"
		    :total="100">
		  </el-pagination>
		</div> 
		<el-dialog title='记录病假追踪' :visible.sync="dialogVisible" size='small'>
			<leaveEdit></leaveEdit>
		</el-dialog>
	</div>
</template>

<script>
  import leaveEdit from '@/components/AttendanceCom/ysChildrenSickLeave_form_edit'
	
  export default {
    name: 'XX',
    data () {
      return {
      	dialogVisible:false,
      	tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    },
    methods:{
    	onEdit:function(e){
    		console.log(1);
    		this.dialogVisible = true;
    	}
    },
    components:{
    	leaveEdit
    }
  }
</script>

<style scoped>
	
</style>


