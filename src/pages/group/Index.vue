
<template>
  <div>
  	<div class="kinderChoose">
  		<el-dropdown @command='handKidsCommand'>
		  <el-button type="primary" >
		    	{{target}}<i class="el-icon-caret-bottom el-icon--right"></i>
		  </el-button>
		  <el-dropdown-menu slot="dropdown">
		  	<el-dropdown-item v-for='item in garden' :key="item.name"  command='target'>{{item.name}}</el-dropdown-item>
		  </el-dropdown-menu>
		</el-dropdown>
  	</div>

	<el-row :gutter="20">
  		<el-col :xs="24" :sm="24" :md="24" :lg="12"><div class="grid-content">
  			<div id="kidInformation"></div>
  		</div></el-col>
  		<el-col :xs="24" :sm="24" :md="24" :lg="12"><div class="grid-content">
  			<el-table :data="kidData"  style="width: 100%">
		       <el-table-column prop="grade" label="年级"/>
		       <el-table-column prop="totle" label="应到人数"/>
		       <el-table-column prop="all" label="实到人数"/>
		       <el-table-column prop="out" label="缺勤"/>
		   		 <el-table-column prop="sth" label="事假"/>	
		    	 <el-table-column prop="ill" label="病假"/>
			     <el-table-column prop="mouster" label="体温异常"/>
		    </el-table>
  		</div></el-col>
	</el-row>
	
	<el-row :gutter='20'>
  		<el-col :xs="24" :sm="24" :md="24" :lg="12"><div class="grid-content">
  			<div id="teacherInformation"></div>
  		</div></el-col>
  		<el-col :xs="24" :sm="24" :md="24" :lg="12"><div class="grid-content">
  			<el-tabs type="border-card">
			  <el-tab-pane label="已到"></el-tab-pane>
			  <el-tab-pane label="未到"></el-tab-pane>
			  
			  <el-table :data="teacherData"  style="width: 100%">
			       <el-table-column prop="name" label="姓名"/>
			       <el-table-column prop="grade" label="班级"/>
			       <el-table-column prop="in" label="上班"/>
			       <el-table-column prop="out" label="下班"/>
			  </el-table>
			</el-tabs>
  			
  		</div></el-col>
	</el-row>
  	<div>
  		
  	</div>
  </div>
</template>

<script>
  import echarts from 'echarts'
 
  export default {
    name: 'index',
    data (){
    	return {
    		target:'幼儿园1',
    		garden:[
    			{name:'幼儿园1'},
    			{name:'幼儿园2'},
    			{name:'幼儿园3'},
    		],
    		teacherData:[
    			{name:'EVA',grade:'大班',in:'3:200',out:'6:00'},
    			{name:'EVA',grade:'大班',in:'3:200',out:'6:00'},
    			{name:'EVA',grade:'大班',in:'3:200',out:'6:00'},
    			{name:'EVA',grade:'大班',in:'3:200',out:'6:00'},
    		],
    		kidData: [{
	            grade: '小',
	            totle: '王小虎',
	            all: '132',
	            out: '4343',
	            all: '4343',
	            sth: '5454',
	            ill: '121',
	            mouster: '4343'
	          }, {
	           grade: '中',
	            totle: '王小虎',
	            all: '132',
	            out: '4343',
	            all: '4343',
	            sth: '5454',
	            ill: '121',
	            mouster: '4343'
	          }, {
	           grade: '大',
	            totle: '王小虎',
	            all: '132',
	            out: '4343',
	            all: '4343',
	            sth: '5454',
	            ill: '121',
	            mouster: '4343'
	          },{
	          	grade: '总计',
	            totle: 'fdfd',
	            all: '132',
	            out: '4343',
	            all: '4343',
	            sth: '5454',
	            ill: '121',
	            mouster: '4343'
	          }]
    	}
    },
    methods:{
    	getList:function(){
    		
    	},
    	trace:function(){
  
    	},
    	handKidsCommand:function(command){
    		console.log(command);
    	}
    },
    mounted (){
    	let kidCom = echarts.init(document.getElementById('kidInformation'));
    	kidCom.setOption({
				title: { text: '年级出勤情况',subtext: '纯属虚构'},
               legend: {
			        orient : 'vertical',
			        x : 'center',
			        data:['出勤','缺勤']
			    },
                xAxis: {
                    data: ["大班","中班","小班"]
                },
                yAxis: {},
                series: [{
                    name: '出勤',
                    type: 'bar',
                    data: [5, 20, 36]
                },{
                	name: '缺勤',
                    type: 'bar',
                    data: [5, 20, 36]
                }]
			})
    	let teacherCom = echarts.init(document.getElementById('teacherInformation'));
    	teacherCom.setOption({
				title: { text: '教师出勤情况',subtext: '纯属虚构',x: 'center'},
			    tooltip: {},
			    legend: {
			        orient : 'vertical',
			        x : 'left',
			        data:['出勤','缺勤']
			    },
			    toolbox: {
			        show : true,
			        feature : {
			            mark : {show: true},
			            dataView : {show: true, readOnly: false},
			            magicType : {
			                show: true, 
			                type: ['pie', 'funnel'],
			                option: {
			                    funnel: {
			                        x: '25%',
			                        width: '50%',
			                        funnelAlign: 'left',
			                        max: 1548
			                    }
			                }
			            },
			            restore : {show: true},
			            saveAsImage : {show: true}
			        }
			    },
			    calculable : true,
			    series : [
			        {
			            name:'访问来源',
			            type:'pie',
			            radius : '55%',
			            center: ['50%', '60%'],
			            data:[
			                {value:335, name:'出勤'},
			                {value:310, name:'缺勤'},
			            ]
			        }
			    ]
			})
    }
  }
</script>
<style scoped>
	.kinderChoose{
		margin: 20px 0 20px 0;
	}
	#kidInformation,#teacherInformation{
		width: 100%;
		height: 300px;
		border: 1px solid #e3e3e3;
	}
	.el-row {
	    margin-bottom: 20px;
	    &:last-child {
	      margin-bottom: 0;
	    }
  	}
</style>
