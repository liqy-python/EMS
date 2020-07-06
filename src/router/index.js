import Vue from 'vue'
import Router from 'vue-router'
import Login from "../components/Login";
import Register from "../components/Register";
import Emplist from "../components/Emplist";
import AddEmp from "../components/AddEmp";
import UpdateEmp from "../components/UpdateEmp";


Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        name:'Login',
        component:Login,
    },
    {
        path: '/login',
        name:'Login',
        component:Login,
    },
    {
        path: '/register',
        name:'Register',
        component:Register,
    },
    {
        path: '/emplist',
        name:'Emplist',
        component:Emplist,
    },
    {
        path: '/add',
        name:'AddEmp',
        component:AddEmp,
    },
    {
        path: '/update',
        name:'UpdateEmp',
        component:UpdateEmp,
    },
    {
        path: '/update/:id',
        name:'UpdateEmp',
        component:UpdateEmp,
    },
  ]
})
