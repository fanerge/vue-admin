/**
 * EVA
 * 幼儿管理-幼儿考勤-病假追踪-弹出框
 */
<template>
	<div>
		<el-row>
			<el-col :span='18' :offset='3'>
				<el-form ref="form" :model="form" label-width="100px">
				    <el-form-item label="正在记录">
				   		 王大锤   草莓1（学前4班） 女 3岁 2014-24-2
				    </el-form-item>
				    <el-form-item label="联系方式">
						带是多少的撒打算 大声道 
					</el-form-item>
					<el-form-item label="主要症状">
						<el-checkbox-group>
						    <el-checkbox label="复选框 A" style='margin-left: 15px;'></el-checkbox>
						    <el-checkbox label="复选框 B"></el-checkbox>
						    <el-checkbox label="复选框 C"></el-checkbox>
						    <el-checkbox label="复选框 A"></el-checkbox>
						    <el-checkbox label="复选框 B"></el-checkbox>
						    <el-checkbox label="复选框 C"></el-checkbox>
						    <el-checkbox label="复选框 A"></el-checkbox>
						    <el-checkbox label="复选框 B"></el-checkbox>
						    <el-checkbox label="复选框 C"></el-checkbox>
						    <el-checkbox label="复选框 A"></el-checkbox>
						    <el-checkbox label="复选框 B"></el-checkbox>
						    <el-checkbox label="复选框 C"></el-checkbox>
						    <el-checkbox label="复选框 A"></el-checkbox>
						    <el-checkbox label="复选框 B"></el-checkbox>
						    <el-checkbox label="复选框 C"></el-checkbox>
						    <el-checkbox label="复选框 A"></el-checkbox>
						    <el-checkbox label="复选框 B"></el-checkbox>
						    <el-checkbox label="复选框 C"></el-checkbox>
						</el-checkbox-group>
					</el-form-item>
					<el-form-item label="就医医院">
					    <el-input></el-input>
					</el-form-item>
					<el-form-item label="诊断结果">
					    <el-input></el-input>
					</el-form-item>
					<el-form-item label="是否传染病">
					    <el-radio-group >
					      <el-radio label="线上品牌商赞助"></el-radio>
					      <el-radio label="线下场地免费"></el-radio>
					    </el-radio-group>
					</el-form-item>
					<el-form-item label="居家/住院">
					    <el-radio-group >
					      <el-radio label="线上品牌商赞助"></el-radio>
					      <el-radio label="线下场地免费"></el-radio>
					    </el-radio-group>
					</el-form-item>
					<el-form-item label="目前状态">
					    <el-radio-group >
					      <el-radio label="线上品牌商赞助"></el-radio>
					      <el-radio label="线下场地免费"></el-radio>
					    </el-radio-group>
					</el-form-item>
					<el-form-item label="预计返校时间">
					     <el-date-picker type="date" placeholder="选择日期"  style="width: 100%;"></el-date-picker>
					</el-form-item>
					<el-form-item label="备注">
					     <el-input :autosize="{ minRows: 6, maxRows: 10}" type="textarea"></el-input>
					</el-form-item>
					<el-form-item>
					    <el-button type='primary'>确定</el-button>
					    <el-button >取消</el-button>
					</el-form-item>
				</el-form>
			</el-col>
		</el-row>
	</div>
	
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
	
</style>


