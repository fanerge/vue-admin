/**
 * EVA
 * 幼儿管理-在园幼儿-入园登记组件-详情
 */
<template>
	<div>
		<el-form  label-width="120px">
			<el-row>
				<el-col :span='12' :md='24' :lg='12' :sm='24' :xs='24'>
					 <el-form-item label="幼儿身份证类型">
					     <el-select  placeholder="请选择" value=''>
					       <el-option label="外公" value="shanghai"></el-option>
					       <el-option label="爸爸" value="beijing"></el-option>
					     </el-select>
					 </el-form-item>
					 <el-form-item label="幼儿证件号码">
					     <el-input  placeholder='证件号码'></el-input>
					 </el-form-item>
					 <el-form-item label="户口性质">
					     <el-select  placeholder="请选择" value=''>
					       <el-option label="外公" value="shanghai"></el-option>
					       <el-option label="爸爸" value="beijing"></el-option>
					     </el-select>
					 </el-form-item>
					 <el-form-item label="非农业户口类型">
					     <el-select  placeholder="请选择" value=''>
					       <el-option label="外公" value="shanghai"></el-option>
					       <el-option label="爸爸" value="beijing"></el-option>
					     </el-select>
					 </el-form-item>
					 <el-form-item label="监护人姓名">
					     <el-input  placeholder='姓名'></el-input>
					 </el-form-item>
					 <el-form-item label="监护人证件号码类型">
					     <el-select  placeholder="请选择" value=''>
					       <el-option label="外公" value="shanghai"></el-option>
					       <el-option label="爸爸" value="beijing"></el-option>
					     </el-select>
					 </el-form-item>
					 <el-form-item label="监护人证件号码">
					     <el-input  placeholder='证件号码'></el-input>
					 </el-form-item>
					 <el-form-item label="出生所在地">
					     <el-input ></el-input>
					 </el-form-item>
					 <el-form-item label="户口所在地">
					     <el-input ></el-input>
					 </el-form-item>
					 <el-form-item label="现住址">
					     <el-input :autosize="{ minRows: 6, maxRows: 10}" type="textarea"></el-input>
					 </el-form-item>
				</el-col>
				<el-col :span='12' :md='24' :lg='12' :sm='24' :xs='24'>
					<el-form-item label="国籍">
					     <el-select  placeholder="请选择" value=''>
					       <el-option label="外公" value="shanghai"></el-option>
					       <el-option label="爸爸" value="beijing"></el-option>
					     </el-select>
					 </el-form-item>
					 <el-form-item label="民族">
					     <el-select  placeholder="请选择" value=''>
					       <el-option label="外公" value="shanghai"></el-option>
					       <el-option label="爸爸" value="beijing"></el-option>
					     </el-select>
					 </el-form-item>
					 <el-form-item label="籍贯">
					     <el-input ></el-input>
					 </el-form-item>
					 <el-form-item label="血型">
					     <el-select  placeholder="请选择" value=''>
					       <el-option label="外公" value="shanghai"></el-option>
					       <el-option label="爸爸" value="beijing"></el-option>
					     </el-select>
					 </el-form-item>
					 <el-form-item label="健康状况">
					     <el-select  placeholder="请选择" value=''>
					       <el-option label="外公" value="shanghai"></el-option>
					       <el-option label="爸爸" value="beijing"></el-option>
					     </el-select>
					 </el-form-item>
					 <el-form-item label="是否港澳台侨">
					     <el-select  placeholder="请选择" value=''>
					       <el-option label="外公" value="shanghai"></el-option>
					       <el-option label="爸爸" value="beijing"></el-option>
					     </el-select>
					 </el-form-item>
					 <el-form-item label="是否留守儿童">
					     <el-select  placeholder="请选择" value=''>
					       <el-option label="外公" value="shanghai"></el-option>
					       <el-option label="爸爸" value="beijing"></el-option>
					     </el-select>
					 </el-form-item>
					 <el-form-item label="进城务工子女">
					     <el-radio-group >
					       <el-radio label="男"></el-radio>
					       <el-radio label="女"></el-radio>
					     </el-radio-group>
					 </el-form-item>
					 <el-form-item label="是否孤儿">
					     <el-radio-group >
					       <el-radio label="男"></el-radio>
					       <el-radio label="女"></el-radio>
					     </el-radio-group>
					 </el-form-item>
					 <el-form-item label="是否独生子女">
					     <el-radio-group >
					       <el-radio label="男"></el-radio>
					       <el-radio label="女"></el-radio>
					     </el-radio-group>
					 </el-form-item>
					 <el-form-item label="是否残疾幼儿">
					     <el-radio-group >
					       <el-radio label="男"></el-radio>
					       <el-radio label="女"></el-radio>
					     </el-radio-group>
					 </el-form-item>
					 <el-form-item label="就读方式">
					     <el-select  placeholder="请选择" value=''>
					       <el-option label="外公" value="shanghai"></el-option>
					       <el-option label="爸爸" value="beijing"></el-option>
					     </el-select>
					 </el-form-item>
				</el-col>
			</el-row>
			
		</el-form>
	</div>
</template>

<script>
  export default {
    name: 'XX',
    data () {
      return {
		
      }
    }
  }
</script>

<style scoped>
	.el-input,.el-select{
		width: 90%
	}
</style>


