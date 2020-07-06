<template>
    <div id="wrap">
			<div id="top_content">
				<div id="header">
					<div id="rightheader">
						<p>
							2009/11/20
							<br/>
                            <a href="#" @click="quit">安全退出</a>
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
						Welcome!{{user_msg}}
					</h1>
					<table class="table">
						<tr class="table_header">
							<td>ID</td>
							<td>Name</td>
							<td>Photo</td>
							<td>Salary</td>
							<td>Age</td>
							<td>Operation</td>
						</tr>
						<tr class="row1" v-for="(emp,index) in emp_list" :key="emp.id" :class="index%2==0?'row1':'row2'">
							<td>{{emp.id}}</td>
							<td>{{emp.emp_name}}</td>
							<td><img :src="emp.img" style="height: 60px;"></td>
							<td>{{emp.salary}}</td>
							<td>{{emp.age}}</td>
							<td><router-link :to="/update/+emp.id">更改员工</router-link>&nbsp;
                                <a href="javascript:;" @click="del(emp.id)">删除员工</a></td>

						</tr>
					</table>
					<p>
                        <el-button type="success"><router-link to="/add">添加员工</router-link></el-button>
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
        name: "Emplist",
        data(){
            return{
                user_msg:"",
                emp_list:[],
            }
        },
        methods:{
          //显示所有信息
            findAllEmp(){
                this .$axios.get("http://127.0.0.1:8000/user/emp/").then(res=>{
                    console.log(res.data.results);
                    this.emp_list=res.data.results;
                }).catch(error=>{
                    this.$.error("查询出错")
                })
            } ,
            del(id){
                // console.log(id)
                this.$axios({
                    url: "http://127.0.0.1:8000/user/emp/"+`${id}`,
                    method: "delete",
                }).then(res => {
                    console.log(res.data);
                    this.findAllEmp();
                }).catch(error => {
                    this.$message.error("删除失败")
                })

            },
            quit(){
                localStorage.removeItem("user");
                this.$router.push("/login")

            },

        },
        created() {
            let username = localStorage.getItem("user")
            this.user_msg=username;
            if (username){
            }else{
                this.$message.error("您还没有登录,请登录");
                this.$router.push("/login")
            }
            this.findAllEmp();
        }
    }
</script>

<style scoped>

</style>
