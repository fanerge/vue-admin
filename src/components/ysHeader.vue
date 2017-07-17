/**
* Created by yuzhenfan on 2017/6/14.
*/

<template>
  <div class="header">
    <el-row :gutter="10">
      <el-col :xs="10" :sm="10" :md="14" :lg="14">
        <div class="grid-content bg-purple logo-container">
          <iconfont icon="icon-google" :width="3" :height="3" :verticalAlign="-0.5"></iconfont>
        </div>
      </el-col>
      <el-col :xs="6" :sm="6" :md="4" :lg="4">
        <div class="grid-content bg-purple-light tel-number">
          咨询电话：{{telNumber}}

        </div>
      </el-col>
      <el-col :xs="4" :sm="4" :md="3" :lg="3">
        <div class="grid-content tab-park">
          <el-dropdown>
              <span class="el-dropdown-link">
                切换园区<i class="el-icon-caret-bottom el-icon--right"></i>
              </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>幼儿园1</el-dropdown-item>
              <el-dropdown-item>幼儿园2</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <screenfull style="float: right;margin-top: 18px;"></screenfull>
        </div>
      </el-col>
      <el-col :xs="4" :sm="4" :md="3" :lg="3">
        <div class="grid-content bg-purple-light">
          <div class="header-dropdown">
            <el-dropdown @command="handleCommand">
              <span class="el-dropdown-link">
                个人中心<i class="el-icon-caret-bottom el-icon--right"></i>
                <div class="header-icon">
                  <img src="../assets/user-icon.gif" alt="user-icon" height="40" width="40">
                </div>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="goChangeUserInfo">修改密码</el-dropdown-item>
                <el-dropdown-item command="signOut">退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-dialog size="tiny" title="修改密码" :visible.sync="dialogFormVisible">
      <div class="dialog-header">
        <el-tag type="danger">请确保新密码与原密码不同</el-tag>
        <el-tag type="danger">密码必须是6-12位</el-tag>
      </div>
      <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="100px">
        <el-form-item label="原始密码" prop="oldPass">
          <el-input type="password" v-model="ruleForm2.oldPass"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm('ruleForm2')">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
	import iconfont from '@/components/iconfont'
	import screenfull from '@/components/screenfull'
  export default {
    name: 'header',
    data () {
      let checkOldPass = (rule, value, callback) => {
        // 这里进行服务器原始密码请求
        if (value === '') {
          callback(new Error('请输入原始密码'));
        } else {
          callback();
        }
      };
      let validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (value.length < 6 || value.length >12 ) {
            callback(new Error('密码只能6~12位'));
          }
          if (this.ruleForm2.oldPass === this.ruleForm2.pass ) {
            callback(new Error('新密码不能喝原始密码相同'));
          }
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      let validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        teacherName: 'fanerge',
        telNumber: 4008008888,
        dialogFormVisible: false,
        ruleForm2: {
          oldPass: '',
          pass: '',
          checkPass: ''
        },
        rules2: {
          oldPass: [
            {validator: checkOldPass, trigger: 'blur'}
          ],
          pass: [
            {validator: validatePass, trigger: 'blur'}
          ],
          checkPass: [
            {validator: validatePass2, trigger: 'blur'}
          ],
        }
      };
    },
    methods: {
      handleCommand (command) {
        if (command === 'goChangeUserInfo') {
          this.dialogFormVisible = true;
        }
        if (command === 'signOut') { // 这里做登出处理
          this.$store.commit('logout'); // 清除浏览器token和全局状态token
          this.$router.replace({path: '/'}); // 回到登录页面
        }
      },
      submitForm (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // 在这里向后台提交更改密码数据
            // console.log(this.$store.state.token, this.ruleForm2.oldPass, this.ruleForm2.pass)
            this.axios.post(API.updatePwd, {
              'token': this.$store.state.token,
              'oldPassword': this.ruleForm2.oldPass,
              'newPassword': this.ruleForm2.pass
            })
            .then((res) => {
              // console.log(res)
              /*if(){
                this.$message({
                  message: '恭喜你，密码修改成功！',
                  type: 'success',
                  duration: 1000
                });
                // 重新登录操作
              }else{
                this.$message({
                  message: '对不起密码修改失败！',
                  type: 'error',
                  duration: 1000
                });
              }*/
            })
            .catch((err) => {
              console.log(err)
            });
          } else {
            console.log('不能提交后台');
            return false;
          }
        });
      },
    },
    components: {
    	iconfont,
    	screenfull
    }
  }
</script>

<style scoped>
  .header {
    background: #20a0ff;
  }

  .header-icon {
    margin-top: 5px;
    margin-left: 10px;
    float: right;
    height: 40px;
    width: 40px;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 20px;
    overflow: hidden;
  }
  .tab-park {
    cursor: pointer;
  }
  .header-dropdown {
    float: left;
    cursor: pointer;
  }
  .tel-number {
    color: #48576a;
    font-size: 14px;
  }
  .logo-container {
    padding: 2px;
  }
  .grid-content {
    border-radius: 4px;
    height: 50px;
    line-height: 50px;
  }
  .dialog-header{
    margin-bottom: 20px;
    text-align: center;
  }
</style>


