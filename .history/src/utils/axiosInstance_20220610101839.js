import axios from "axios";
//引用轻提示
import { Toast } from "vant";
import store from "../store";

const axiosInstance=axios.create({
    baseURL:"https://m.maizuo.com/",
    timeout:5000,
   
})

//请求拦截器
// axiosInstance.interceptors.request.use(function (request) {
//     // 在发送请求之前做些什么
//     if(store.state.token!==null){
//         request.headers.softeem_ele_client_token=store.state.token;
//     }
//     return request;
//   }, function (error) {
//     // 对请求错误做些什么
//     Toast.clear()
//     Toast.fail('请求失败');
//     return Promise.reject(error);
//   })


// 添加响应拦截器，挂载在实例上
axiosInstance.interceptors.response.use(function (response) {
        if(response.data.msg=='ok'){
            return Promise.resolve(response.data.data)
        }else if(response.data.msg=='表示成功'){
            return Promise.resolve(response.data.data)
        }
        else{
            //服务器请求是成功，但是返回的结果不是我想要的
            Toast.clear()//先清空所有提示
            console.log("服务器请求是成功，但是返回的结果不是我想要的")
            console.log(response)
            return Promise.reject(response.data);
        }
    }, function (error) {
      // 这里是系统级错误，http请求协议上的错误
      Toast.clear()//先清空所有提示
      Toast.fail('加载失败')
      return Promise.reject(error);
    });

export default axiosInstance;

