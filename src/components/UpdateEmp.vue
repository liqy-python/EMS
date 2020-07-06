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
								<a href="#">Main</a>
							</h1>
						</div>
						<div id="navigation">
						</div>
					</div>
				<div id="content">
					<p id="whereami">
					</p>
					<h1>
						更新员工
					</h1>
						<table cellpadding="0" cellspacing="0" border="0"
							class="form_table">
							<tr>
								<td valign="middle" align="right">
									id:
								</td>
								<td valign="middle" align="left">
                                    {{this.$route.params.id}}
								</td>
							</tr>
							<tr>
								<td valign="middle" align="right">
									name:
								</td>
								<td valign="middle" align="left">
									<input type="text" class="inputgri" name="name" v-model="emp_name"/>
								</td>
							</tr>
							<tr>
								<td valign="middle" align="right">
									photo:
								</td>
								<td valign="middle" align="left">
									<input type="file" name="photo" ref="photo"/>
								</td>
							</tr>
							<tr>
								<td valign="middle" align="right">
									salary:
								</td>
								<td valign="middle" align="left">
									<input type="text" class="inputgri" name="salary" v-model="salary"/>
								</td>
							</tr>
							<tr>
								<td valign="middle" align="right">
									age:
								</td>
								<td valign="middle" align="left">
									<input type="text" class="inputgri" name="age" v-model="age"/>
								</td>
							</tr>
						</table>
						<p>
							<input type="submit" class="button" value="修改" @click="updateEmp"/>
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
        name: "UpdateEmp",
        data(){
             return{
                emp_name:"",
                img:"",
                salary:"",
                age:"",
                emp_id:"",
                emp:{},
            }
        },
        methods: {
            get_emp_id() {
                let emp_id = this.$route.params.id;

                this.$axios.get("http://127.0.0.1:8000/user/emp/"+'${emp_id}').then(res=>{
                    this.emp = res.data;
                }).catch(error=>{
                    this.$message.error("修改错误")
                });
            },
            updateEmp() {
                let emp_id = this.$route.params.id;
                this.$axios({
                    url: "http://127.0.0.1:8000/user/emp/"+'${emp_id}',
                    method: "put",
                    headers:{
                        'content-type':'application/x-www-form-urlencoded'
                    },
                }).then(res => {
                    console.log(res.data);
                    this.$router.push("/emplist")
                }).catch(error => {
                    this.$message.error("修改失败")
                })
            },
        },
        created() {
            this.get_emp_id();
        }
    }
</script>

<style scoped>

</style>
