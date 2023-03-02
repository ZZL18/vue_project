import Mock from "mockjs";
import homeApi from './mockServeData/home'
import user from './mockServeData/user'
import permission from "./mockServeData/permission";
// 定义mock请求拦截
Mock.mock('/api/home/getData', homeApi)
    // 用户列表数据
Mock.mock('/api/user/add', user.createUser)
Mock.mock('/api/user/edit', user.updateUser)
Mock.mock('/api/user/del', user.deleteUser)
Mock.mock(/api\/user\/getUser/, user.getUserList)

Mock.mock(/api\/permission\/getMenu/, permission.getMenu)