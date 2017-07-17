
<template>
  <div class="loginCom">
  	<div class="title">用户登录</div>
  	<div>
  		 <input type="text" placeholder="手机号码" v-model.number.trim='form.account'/>
  	</div>
   	<div>
  		 <input type="password" placeholder="密码" v-model.trim='form.passWord'/>
  	</div>
    <div class="loginSave">
      <el-switch
        v-model="isSaved"
        on-color="#13ce66"
        off-color="#ff4949"
      >
      </el-switch>
      记住密码
    </div>
  	<div class="loginBtn" @click='onLogin(form)'>登录</div>
  </div>
</template>

<script>
  // 引入对H5localstorage的封装
  import LocalStorage from 'storejs'

  export default {
    name: 'login',
    data () {
      return {
        form: {
        	account: '',
        	passWord: ''
        },
        isSaved: false,
        errorMsg: '',
        token: ''
      }
    },
    methods: {
      onLogin (data) {
        // 用户名为空
        if (!data.account) {
          this.errorMsg = '手机号码为空'
          this.$message({
            type: 'error',
            message: this.errorMsg,
            duration: 1000
          })
          return
        }
        // 手机号格式不对
        if (!/^1[3|4|5|7|8][0-9]{9}$/.test(data.account)) {
          this.errorMsg = '手机号码格式不对'
          this.$message({
            type: 'error',
            message: this.errorMsg,
            duration: 1000
          })
          return
        }
        // 密码为空
        if (!data.passWord) {
          this.errorMsg = '登录密码为空';
          this.$message({
            type: 'error',
            message: this.errorMsg,
            duration: 1000
          })
          return
        }
				this.$store.dispatch('login', data)
				.then((res) => {
					if (res.status === 200) {
						this.$router.replace({path: '/group'})
					}
				})
				.catch((err) => {
					console.error(err)
				})
      }
    },
    created: function () {
      if (LocalStorage.get('username')) {
        this.form.account = LocalStorage.get('username')
        this.form.passWord = LocalStorage.get('password')
      }
    }
  }
</script>
<style scoped>
	.title{
		/*text-align: center;*/
		background: #78c4ec;
		border-radius: 20px 20px 0 0;
		height: 100px;
		color: #FFFFFF;
		line-height: 100px;
		/*font-size: px;*/
	}
	.loginCom{
		text-align: center;
    top: 50%;
		left: 50%;
		position: absolute;
		width: 400px;
		height: 400px;
    margin: -200px 0 0 -200px;
		background: #fff;
		border-radius: 20px;
	}
	.loginCom input{
		width: 300px;
		height: 40px;
		border:solid 1px #aaaaaa;
		border-radius: 30px;
		padding:20px;
		font-size: 14px;
		box-sizing: border-box;
		outline: none;
		margin-top: 30px;
	}
	.loginCom input:focus{
		border:solid 1px #52a3fb;
	}
	.loginCom p{
		margin-top: 30px;
		color: red;
	}
  .loginSave{
    margin-top: 10px;
    padding-left: 60px;
    height: 30px;
    line-height: 30px;
    color: #666;
    font-size: 14px;
    text-align: left;
  }
	.loginBtn{
		position: absolute;
		bottom: 40px;
		left: 50%;
		margin-left: -150px;
		color: #FFF;
		width: 300px;
		height: 40px;
    cursor: pointer;
		background: #78c4ec;
		border-radius: 30px;
		box-sizing: border-box;
		line-height: 40px;
		text-align: center;
	}
	.loginBtn:hover{
		background: #72bbe1;
	}
	.loginBtn:active{
		background: #6db3d8;
	}
  .title,
  .loginSave,
  .loginBtn{
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
</style>
