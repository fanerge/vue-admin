<template>

		  
	<el-tabs type="border-card" active-name="first">
	    <el-tab-pane label="考勤表" name="first">
	    	<childrenAttendanceForm></childrenAttendanceForm>
	    </el-tab-pane>
	    <!--<el-tab-pane label="出勤分析" name="second">
	    </el-tab-pane>-->
	    <el-tab-pane label="病假追踪" name="third">
	    	<childrenSickLeaveForm></childrenSickLeaveForm>
	    </el-tab-pane>
	    <el-tab-pane label="刷卡记录" name="fourth">
	    	<childrenRecordForm></childrenRecordForm>
	    </el-tab-pane>
	 </el-tabs>
</template>

<script>
  import childrenAttendanceForm from '@/components/AttendanceCom/ysChildrenAttendance_form'
  import childrenSickLeaveForm from '@/components/AttendanceCom/ysChildrenSickLeave_form'
  import childrenRecordForm from '@/components/AttendanceCom/ysChildrenRecord_form'


  export default {
    name: 'online',
    data () {
    	return{
    		value3: '',
	        value4: '',
	        value5: '',
	        op:{
	        	onPick:function(e){
	        		console.log(e);
	        	}
	        },
	        chooseDate:''
    	}
    },
    methods:{
    	onPickBack:function(e){
    		this.chooseDate = e;
    		var year = e.split('-')[0];
    		var month = e.split('-')[1];
    		var maxDay = new Date(year,month,0).getDate();
    	}
    },
    components:{
    	childrenAttendanceForm,
    	childrenSickLeaveForm,
    	childrenRecordForm
    }
  }
  
</script>

<style scoped>

</style>
