import {Message} from "element-ui";
export default function({$axios, redirect}){
  $axios.onError(err => {
    const {statusCode, message} = err.response.data;
    // 还未使用
    // if(statusCode === 401 || statusCode === 403){
    //     Message.warning({message: "请先登录"});
    //     redirect("/user/login");
    // }
    if (statusCode === 400){
      Message.error({message});
    }
    // 没有权限
    if (statusCode === 401 || statusCode === 403) {
      Message.error('不能进行该操作，请先登录');
      setTimeout(() => {
        // 重定向到登录页面
        redirect('/user/login')
      },3000)
    }
  })
}
