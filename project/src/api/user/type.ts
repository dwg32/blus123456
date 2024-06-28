//登录接口需要携带参数ts类型
//这边插个题外话，interface定义了对象的结构但是并不实现它
//这边都看接口写
export interface loginForm {
  username: string;
  password: string;
}

interface dataType {
  token: string;
}
//登录接口返回数据类型
export interface loginResponseData {
  code: number;
  data: dataType;
}

//服务器返回用户信息相关的数据类型,其实可以any 嗯。。。
interface userInfo {
  userId: number;
  avatar: string;
  username: string;
  desc: string;
  password: string;
  roles: string[];
  buttons: string[];
  routes: string[];
  token: string;
}
interface user {
  checkUser: userInfo;
}
export interface userResponseData {
  code: number;
  data: user;
}
