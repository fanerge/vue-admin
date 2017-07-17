<template>
  <div style="position: relative; min-width: 600px;">
  	 <el-row :gutter="0" >
	     <el-col style="margin-bottom: 20px;" :span='24'>
	     		<el-input placeholder="请输入幼儿姓名或卡号" icon="search"></el-input>
					<el-button type="primary" @click='onRegister'>入园登记</el-button>
					<el-button type="primary" @click='onClassUpGrade'>新学期升级</el-button>
					<el-button type="primary">导入</el-button>
					<el-button type="primary">下载模板</el-button>
	     </el-col>
     </el-row>
     <el-row :gutter="0" >
	  		<el-col :xs="24" :sm="24" :md="24" :lg="12" class='graBorder'><div class="grid-content">
					 <div class="dateShow_headTitle">
					 	 <span>班级姓名</span>
					 	 <span>(总人数10人，男/女 = 6/3)</span>
					 	 <span>班级ID：4348273</span>
					 </div>
					 <el-row :gutter='20'>
					 			<el-col :span='6'   v-for='(item,index) in kids' :key="index"><div class="grid-content graBorder kidCard">
					  				{{item.name}}
					  				<img src="../../assets/boy.png" v-if='item.isBoy'/>
					  				<img src="../../assets/girl.png" v-if='!item.isBoy'/>
					  		</div></el-col>
					 </el-row>
	  		</div></el-col>
	  		
	  		<el-col  :xs="24" :sm="24" :md="24" :lg="11" :offset='1'   class=''><div class="grid-content graBorder">
					 <el-row>
					 			<el-col :span='8'   v-for='(item,index) in classData' :key="index"><div class="grid-content graBorder classCard">
					  				<p>{{item.name}}</p>
					  				<p></p>
					  				<img src="../../assets/boy.png" />：
					  				<img src="../../assets/girl.png"/>={{item.boy+':'+item.girl}}
					  				<p>{{item.id}}</p>
					  		</div></el-col>
					 </el-row>
	  		</div></el-col>
			</el-row>
			<!--<div class="childInformationComParent">
				
			</div>-->
			<el-dialog :title='comContralState.comTitle' :visible.sync="dialogVisible">
				<childInformation v-if='comContralState.childInformationShow'></childInformation>
				<classUpGrade v-if='comContralState.classUpGradeShow'></classUpGrade>
			</el-dialog>
			
  </div>
</template>

<script>
	import childInformation from '@/components/ChildInformationCom/ysChildInformationForm'
	import classUpGrade from '@/components/ChildInformationCom/ysClassUpGrade'


  export default {
    name: 'online',
    data () {
    	return{
    		dialogVisible: false,
    		kids:[
    			{name:'张华',isBoy:true},
    			{name:'张华',isBoy:true},
    			{name:'张华',isBoy:false},
    			{name:'张华',isBoy:true},
    			{name:'张华',isBoy:true},
    		],
    		comContralState:{
    			childInformationShow:false,
    			classUpGradeShow:false,
    			comTitle: this.childInformationShow ? '入园登记' : '新学期升级'
    		},
    		classData:[
    			{name:'1班',id:123213,boy:12,girl:24},
    			{name:'1班',id:123213,boy:12,girl:24},
    			{name:'1班',id:123213,boy:12,girl:24},
    			{name:'1班',id:123213,boy:12,girl:24},
    		]
    	}
    },
		methods:{
			//入园登记
			onRegister:function(){
				this.dialogVisible   = !this.dialogVisible;
				this.comContralState.childInformationShow = true;
				this.comContralState.classUpGradeShow = false;
				this.comContralState.comTitle = '入园登记'
			},
			//班级升级
			onClassUpGrade: function(){
				this.dialogVisible   = !this.dialogVisible;
				this.comContralState.classUpGradeShow = true
				this.comContralState.childInformationShow = false;
				this.comContralState.comTitle = '新学期升级'
			}
		},
		components:{
			childInformation,
			classUpGrade
		}
  }
  
</script>

<style scoped>
	.el-input{
		width: 200px;
	}
	.graBorder{
		border: 1px solid #e3e3e3;
	}
	.dateShow_headTitle{
		padding-left: 20px;
		height: 50px;
		line-height: 50px;
		border-bottom: 1px solid #e3e3e3;
	}
	.kidCard{
		margin: 20px;
		text-align: center;
		line-height:150px;
		position: relative;
		height: 150px;
	}
	.kidCard img{
		width: 40%;
		/*float: right;*/
		position: absolute;
		right:0px;
	}
	.classCard{
		margin: 20px;
		text-align: center;
		height: 150px;
		/*line-height:150px;*/
	}
	.classCard img{
		position: ;
		width: 30px;
	}
	.childInformationComParent{
		position: absolute;
		top: 0;
		left: 50%;
		margin-left: -390px;
	}
</style>
