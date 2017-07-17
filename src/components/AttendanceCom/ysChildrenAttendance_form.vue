/**
 * EVA
 * 幼儿管理-幼儿考勤-考勤组件
 */
<template>
	<div>
		<div class="contralHead">
			<el-row>
				<el-col :span='12'>
					<el-date-picker  @change='onPickBack'
					    v-model="monthValue"
					    type="month"
					    placeholder="选择月"
					    :default-value="showNowMonth">
					</el-date-picker>
					<el-dropdown>
						<el-button>
						    班级选择<i class="el-icon-caret-bottom el-icon--right"></i>
						</el-button>
						<el-dropdown-menu slot="dropdown">
						   <el-dropdown-item>1班</el-dropdown-item>
						   <el-dropdown-item>2班</el-dropdown-item>
						</el-dropdown-menu>
					</el-dropdown>
					<el-input placeholder="查找" icon="search" style='width:200px'></el-input>
				</el-col>
				<el-col :span='12'>
					<el-button type="success" @click='exportExcel'>导出</el-button>
					<el-button type="success">打印</el-button>
					<el-button type="success">导出空表</el-button>
					<el-button type="success">打印空表</el-button>
				</el-col>
			</el-row>
		</div>
		
		<div  class="block"> 
			<div class="tableTitle">{{headTitle}}</div>
			<div class="childrenCom">
				<div class="childrenComTitle">孩子列表</div>
				<div class="childrenComContent" ref='childrenComContent'>
					<div class='childrenItem' v-for='item in children'>{{item.name}}</div>
				</div>
			</div>
			<div class="informationCom">
				<div class="informationCom_title">
					<span v-for='item in dayData' class="informationCom_titleBox">
						<div style="border-bottom: 1px solid #bfcbd9;">{{item.date}}</div>
						 <el-tooltip effect="dark" content="点击可以互改工作日或者休日哦">
					        <div :class="item.day=='休'?'grayBack':'' " @click='onChangeDayToWork(item)' v-model='item.day'>{{item.day}}</div>
					    </el-tooltip>
					</span>
				</div>
				<div class="informationCom_content" ref='informationCom_content'>
					<div v-for='itemChildren in children' style="width: 100%;height: 60px;line-height: 40px;">
						<span v-for='item in dayData' class="informationCom_contentBox">
							<div :class="item.day=='休'?'grayBack':'informationCom_contentBox' ">{{'o'}}</div>
						</span>
					</div>
	
				</div>
			</div>
		</div>
		
		
		
		
		<el-dialog
		  title="提示"
		  :visible.sync="dialogVisible">
		  <el-form>
			  <el-form-item label="类型">
				    <el-radio-group  v-model="dayType">
				      <el-radio label="上课"></el-radio>
				      <el-radio label="休假"></el-radio>
				    </el-radio-group>
			  </el-form-item>
		  </el-form>
		  
		  <span slot="footer" class="dialog-footer">
		    <el-button @click="dialogVisible = false">取 消</el-button>
		    <el-button type="primary" @click="onDayTypeSure">确 定</el-button>
		  </span>
		</el-dialog>
	</div>
</template>

<script>
  import excelOperation from '@/util/excelOperation'

  export default {
  	props:[
		'timeData'
  	],
    name: 'XX',
    data () {
      return {
      	 headTitle:'标题',
      	 monthValue:'',
      	 showNowMonth: new Date(),
      	 targetDayData:'',//当前选中的设置当天状态item
      	 dayType:'',//设置当天上课还是休息状态
      	 dialogVisible:false,
		 children:[
		 	{name:'xxx'},
		 	{name:'xxx'},
		 	{name:'xxx'},
		 	{name:'xxx'},
		 	{name:'xxx'},
		 	{name:'xxx'},
		 	{name:'xxx'},
		 	{name:'xxx'},
		 	{name:'xxx'},
		 	{name:'xxx'},
		 	{name:'xxx'},
		 	{name:'xxx'},
		 	{name:'xxx'},
		 	{name:'xxx'},
		 	{name:'xxx'},
		 	{name:'xxx'},
		 	{name:'xxx'},
		 	{name:'xxx'},
		 	{name:'xxx'},
		 	{name:'xxx'},
		 	{name:'xxx'},
		 	{name:'xxx'},
		 	{name:'xxx'},
		 	{name:'xxx'},
		 ],
		 dayData:[]
      }
    },
    watch:{
    	timeData (val){
    		var str = val;
    		try{
    			var year = val.split('-')[0];
	    		var month = val.split('-')[1];
	    		var maxDay = new Date(year,month,0).getDate();
	    		var weeks = ['日','一','二','三','四','五','六','休','课'];
	    		this.dayData = [];
	    		for(let i = 0;i<maxDay;i++){
	    			var item = {};
	    			var id = new Date(year,month,(i+1)).getDay();
	    			if(id == 0 || id == 6){
	    				id = 7;
	    			}
	    			item.date = (i+1);
	    			item.day = weeks[id];
	    			this.dayData.push(item);
	    		}
    		}
    		catch(e){
    			
    		}
    		
    	}
    },
    methods:{
    	exportExcel:function(e){
    		var excel = new excelOperation();
    		excel.test();
//			excel.importE();	
    	},
    	onChangeDayToWork:function(item){
    		console.log(2);
    		this.dialogVisible = true;
    		this.targetDayData = item;
    	},
    	onDayTypeSure:function(item){
    		this.dialogVisible = false;
    		if(this.dayType == '上课'){
    			if(this.targetDayData.day == '休'){
    				this.targetDayData.day ='课'
    			}
    		}
    		else if(this.dayType == '休假'){
    			if(this.targetDayData.day != '休'){
    				this.targetDayData.day = '休'
    			}
    		}
    	},
    	onPickBack:function(val){
//  		this.chooseDate = e;
    		var year = val.split('-')[0];
    		var month = val.split('-')[1];
    		this.headTitle = val + '考勤';
    		var maxDay = new Date(year,month,0).getDate();
    		var weeks = ['日','一','二','三','四','五','六','休','课'];
    		this.dayData = [];
    		for(let i = 0;i<maxDay;i++){
    			var item = {};
    			var id = new Date(year,month,(i+1)).getDay();
    			if(id == 0 || id == 6){
    				id = 7;
    			}
    			item.date = (i+1);
    			item.day = weeks[id];
    			this.dayData.push(item);
    		}
    		
    	}
    },
    mounted:function(){

		this.$refs.childrenComContent.addEventListener('scroll',function(e){
//			console.log(e.target)
			this.$refs.informationCom_content.scrollTop =  e.target.scrollTop;
			console.log(this.$refs.informationCom_content.scrollTop+"|"+e.target.scrollTop);
		}.bind(this));
    }
  }
</script>

<style scoped>
	.block{
		border: 1px solid #bfcbd9;
		height: 660px;
	}
	.tableTitle{
		width: 100%;
		height: 60px;
		border-bottom: 1px solid #bfcbd9;
		text-align: center;
		line-height: 60px;
		font-weight: bold;
		font-size: 18px;
	}
	.contralHead{
		width: 100%;
		min-height: 60px;
		/*margin-bottom: 20px;*/
	}
	.childrenCom{
		/*background: #20A0FF;*/
		width: 150px;
		height: 460px;
		float: left;
	}
	.childrenComTitle{
		height: 120px;
		text-align: center;
		line-height: 120px;
		border-bottom: 1px solid #bfcbd9;
	}
	.childrenComContent{
		overflow-y: scroll;
		/*height: 437px;*/
		height: 460px;
	}
	.childrenItem{
		text-align: center;
		height: 60px;
		line-height: 60px;
		border-bottom: 1px solid #bfcbd9;
	}
	.informationCom{
		overflow-x: scroll;
		border-left: 1px solid #bfcbd9;
		min-height: 500px;
	}
    
	.informationCom_title,.informationCom_content{
		min-width: 2000px;
		max-height: 460px;
	}
	.informationCom_content{
		height: 500px;
		overflow-y:hidden;
	}
	.informationCom_titleBox,.informationCom_contentBox{
		display:inline-block;
		width: 60px;
		height: 120px;
		line-height: 60px;
		border-bottom: 1px solid #bfcbd9;
		/*border-top: 1px solid #bfcbd9;*/
		border-right: 1px solid #bfcbd9;
		text-align: center;
	}
	.informationCom_contentBox{
		height: 60px;
	}
	.grayBack{
		background-color: #f1f1f1;
		/*content: '';*/
		/*border-bottom: 1px solid #bfcbd9;*/
	}
	*{
		cursor: default;
	}
</style>


