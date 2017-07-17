/**
 * EVA
 * 幼儿管理-在园幼儿-入园登记组件-基本信息
 */
<template>
	<div>
		<el-form  label-width="80px">
			 <el-row :gutter="0" >
			 	<el-col :span='14' :md='24' :lg='14' :sm='24' :xs='24' class='graBorder'><div class="grid-content">
			 		<el-form-item label="姓名"   >
					    <el-input style="width: 100%;"></el-input>
					 </el-form-item>
					 <el-form-item label="出生日期">
					     <el-date-picker type="date" placeholder="选择日期"  style="width: 100%;"></el-date-picker>
					 </el-form-item>
					 
					  <el-form-item label="家庭信息" >
					     <el-select  placeholder="家庭成员" value='' style="width:30%;">
					       <el-option label="外公" value="shanghai"></el-option>
					       <el-option label="爸爸" value="beijing"></el-option>
					     </el-select>
					     <el-input style='width:26%;' placeholder='姓名'></el-input>
					     <el-input style='width:41%;' placeholder='电话'></el-input>
					 </el-form-item>
					 <el-form-item label="班级名称">
					     <el-select  placeholder="班级名称" value=''style='width:100%'>
					       <el-option label="1班" value="dsd"></el-option>
					       <el-option label="2班" value="4343"></el-option>
					     </el-select>
					 </el-form-item>
					 <el-form-item label="性别">
					     <el-radio-group >
					       <el-radio label="男"></el-radio>
					       <el-radio label="女"></el-radio>
					     </el-radio-group>
					 </el-form-item>
					 <el-form-item label="入园日期">
					   <el-date-picker type="date" placeholder="选择日期"  style="width: 100%;"></el-date-picker>
					 </el-form-item>
					 <el-form-item label="接送卡号">
					    <el-input  style="width: 100%;"></el-input>
					 </el-form-item>
					 <el-form-item label="收费方案">
					     <el-select  placeholder="收费方案" value='' style="width: 100%;">
					       <el-option label="继父" value="1"></el-option>
					       <el-option label="岳父" value="2"></el-option>
					       <el-option label="父亲" value="3"></el-option>
					     </el-select>
					 </el-form-item>
			 	</div></el-col>
			 	<el-col :span='8'  :md='24' :lg='8' :sm='24' :xs='24' class='graBorder'><div class="grid-content">
			 		<el-upload
					  class="avatar-uploader"
					  action="https://jsonplaceholder.typicode.com/posts/"
					  :show-file-list="false"
					  :on-success="handleAvatarSuccess"
					  :before-upload="beforeAvatarUpload">
					  <img v-if="imageUrl" :src="imageUrl" class="avatar">
					  <i v-else class="el-icon-plus avatar-uploader-icon">上传头像</i>					 
					 </el-upload>
			 	</div></el-col>
			 </el-row>
			    

		</el-form>
	</div>
</template>

<script>
  export default {
    name: 'XX',
    data () {
      return {
		imageUrl:''
      }
    },
    methods: {
		handleAvatarSuccess(res, file) {
	        this.imageUrl = URL.createObjectURL(file.raw);
	      },
	      beforeAvatarUpload(file) {
	        const isJPG = file.type === 'image/jpeg';
	        const isLt2M = file.size / 1024 / 1024 < 2;
	
	        if (!isJPG) {
	          this.$message.error('上传头像图片只能是 JPG 格式!');
	        }
	        if (!isLt2M) {
	          this.$message.error('上传头像图片大小不能超过 2MB!');
	        }
	        return isJPG && isLt2M;
	      }
    }
  }
</script>

<style scoped>
	 .avatar-uploader{
	 	width: 178px;
	    border: 1px dashed #d9d9d9;
	    border-radius: 6px;
	    cursor: pointer;
	    position: relative;
	    overflow: hidden;
	    float: right;
	  }
	  .avatar-uploader .el-upload:hover {
	    border-color: #20a0ff;
	  }
	  .avatar-uploader-icon {
	    font-size: 28px;
	    color: #8c939d;
	    width: 178px;
	    height: 178px;
	    line-height: 178px;
	    text-align: center;
	    font-size: 18px;
	  }
	  .avatar {
	    width: 178px;
	    height: 178px;
	    display: block;
	  }
</style>


