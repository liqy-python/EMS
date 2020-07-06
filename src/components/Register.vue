<template>
    <div id="wrap">
        <div id="top_content">
                <div id="header">
                    <div id="rightheader">
                        <p>
                            2009/11/20
                            <br />
                        </p>
                    </div>
                    <div id="topheader">
                        <h1 id="title">
                            <a href="#">main</a>
                        </h1>
                    </div>
                    <div id="navigation">
                    </div>
                </div>
            <div id="content">
                <p id="whereami">
                </p>
                <h1>
                    注册
                </h1>
                    <table cellpadding="0" cellspacing="0" border="0"
                        class="form_table">
                        <tr>
                            <td valign="middle" align="right">
                                用户名:
                            </td>
                            <td valign="middle" align="left">
                                <input type="text" class="inputgri" name="username" v-model="username" />
                            </td>
                        </tr>
                        <tr>
                            <td valign="middle" align="right">
                                真实姓名:
                            </td>
                            <td valign="middle" align="left">
                                <input type="text" class="inputgri" name="real_name" v-model="real_name"/>
                            </td>
                        </tr>
                        <tr>
                            <td valign="middle" align="right">
                                密码:
                            </td>
                            <td valign="middle" align="left">
                                <input type="password" class="inputgri" name="password" v-model="password"/>
                            </td>
                        </tr>
                        <tr>
                            <td valign="middle" align="right">
                                确认密码:
                            </td>
                            <td valign="middle" align="left">
                                <input type="password" class="inputgri" name="re_password" v-model="re_password"/>
                            </td>
                        </tr>
                        <tr>
                            <td valign="middle" align="right">
                                性别:
                            </td>
                            <td valign="middle" align="left">
                                男
                                <input type="radio" class="inputgri" name="gender" value="0" checked="checked" v-model="gender"/>
                                女
                                <input type="radio" class="inputgri" name="gender" value="1" v-model="gender"/>
                            </td>
                        </tr>
                    </table>
                    <p>
                        <input type="submit" class="button" @click="user_register" value="注册"/>
                    </p>
            </div>
        </div>
        <div id="footer">
            <div id="footer_bg">
            ABC@126.com
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Register",
        data(){
            return{
                username:"",
                password:"",
                re_password:"",
                real_name:"",
                gender:"",
            }
        },
        methods:{
            user_register(){
                this.$axios({
                    url: "http://127.0.0.1:8000/user/user_api/",
                    method: "post",
                    data: {
                        username:this.username,
                        password:this.password,
                        re_password:this.re_password,
                        real_name:this.real_name,
                        gender:this.gender
                    },
                }).then(res => {
                    console.log(res.data['message']);
                    if (res.data['message']){
                        this.$router.push("/login")
                    }
                }).catch(error => {
                    this.$message.error("用户信息填写错误")
                })
            }
        }
    }
</script>

<style scoped>

</style>
