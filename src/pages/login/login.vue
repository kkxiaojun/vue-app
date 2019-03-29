<template>
	<div>
		<header>登录页</header>
		<el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
			<el-form-item label="密码" prop="pass">
				<el-input type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
			</el-form-item>
			<el-form-item label="确认密码" prop="checkPass">
				<el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off"></el-input>
			</el-form-item>
			<el-form-item label="年龄" prop="age">
				<el-input v-model.number="ruleForm2.age"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="checkLogin()">登录</el-button>
				<!-- <el-button @click="resetForm('ruleForm2')">重置</el-button> -->
			</el-form-item>
		</el-form>
	</div>
</template>
<script>
import {mapActions} from 'vuex';
import {getLogin} from "@/service/authService";
import md5 from "js-md5";
  export default {
    data() {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm2: {
          pass: '',
          checkPass: '',
          age: ''
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          age: [
            { validator: checkAge, trigger: 'blur' }
          ]
        }
      };
		},
    methods: {
      ...mapActions(['userLogin']),
      async checkLogin() {
        let formData = {
          account: 'admin',
          password: md5('admin')
        };
        let res = await getLogin(formData);
        if (res.state.code === 200) {
          this.userLogin(res.data);
          this.$message.success(`${res.state.msg}`);
          // 登录成功 跳转至首页
          this.$router.push("/home");
        } else {
          this.$message.error(`${res}`);
        }
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
<style lang="less" scoped>
@import 'login.less';
</style>
