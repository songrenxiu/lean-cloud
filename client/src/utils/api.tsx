import axios from 'axios'
import {getToken} from 'utils/cookie'
import {Encrypt} from './RSAUtils'
const instance = axios.create({
    timeout: 5000,
    headers: {'X-Custom-Header': 'foobar'},
    baseURL: 'http://localhost:3000/'

});

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    if (getToken('accessToken')) {
        config.headers.Authorization = getToken('accessToken');
    }
    config.params = {
        _t: Date.parse(new Date().toString()) / 1000,
        ...config.params
    }
    return config
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
}, function (err) {
    // 对响应错误做点什么
    if (err && err.response) {
        switch (err.response.status) {
            case 400:
                err.message = '请求错误'
                break
            case 401:
                err.message = '未授权，请登录'
                break
            case 403:
                err.message = '拒绝访问'
                break
            case 404:
                err.message = `请求地址出错: ${err.response.config.url}`
                break
            case 408:
                err.message = '请求超时'
                break
            case 500:
                err.message = '服务器内部错误'
                break
            case 501:
                err.message = '服务未实现'
                break
            case 502:
                err.message = '网关错误'
                break
            case 503:
                err.message = '服务不可用'
                break
            case 504:
                err.message = '网关超时'
                break
            case 505:
                err.message = 'HTTP版本不受支持'
                break
            default:
        }
    }
    return Promise.reject(err);
});


// instance.post('/Console',{phone:12345678,pwd:88888888}).then(res=>{
//     console.log(res)
// })
//
//
// instance.get('/foo',{
//     params:{
//         a:1,b:2,
//     },
//     // method?: Method;
//     // baseURL?: string;
//     // transformRequest?: AxiosTransformer | AxiosTransformer[];
//     // transformResponse?: AxiosTransformer | AxiosTransformer[];
//     // headers?: any;
//     // params?: any;
//     // paramsSerializer?: (params: any) => string;
//     // data?: any;
//     // timeout?: number;
//     // timeoutErrorMessage?: string;
//     // withCredentials?: boolean;
//     // adapter?: AxiosAdapter;
//     // auth?: AxiosBasicCredentials;
//     // responseType?: ResponseType;
//     // xsrfCookieName?: string;
//     // xsrfHeaderName?: string;
//     // onUploadProgress?: (progressEvent: any) => void;
//     // onDownloadProgress?: (progressEvent: any) => void;
//     // maxContentLength?: number;
//     // validateStatus?: ((status: number) => boolean) | null;
//     // maxBodyLength?: number;
//     // maxRedirects?: number;
//     // socketPath?: string | null;
//     // httpAgent?: any;
//     // httpsAgent?: any;
//     // proxy?: AxiosProxyConfig | false;
//     // cancelToken?: CancelToken;
//     // decompress?: boolean;
// }).then(res=>{
//     console.log(res)
// })


const request=async function(url:string,data?:any,method?:string){
    if(method?.toUpperCase()==='GET'){
        return  await instance.get(url,{params:data})
    }else{
        return await instance.post(url,data)
    }
}

// 1. 定义基础路径

/*****Home 模块*******/
export const getHomeData = () => request('homeApi');
// 特色专区
export const getHomeSpecialZone = () => request('homeApi/specialZone');

/***** 分类(Category) 模块 *******/
// Category 列表页面数据
export const getCategoryData = () => request('homeApi/categories');

// Category 右边内容页面数据 需要根据左边点击传值
export const getCategoryDetailData = (params: string) => request('homeApi/categoriesdetail' + params);

/***** 吃什么 模块 *******/
// 今日菜单的所有菜单分类
export const getTodayMenuCategoryList = () => request('recipe/allScene');
// 菜品菜单
export const getTodayMenuDetail = (params: string) => request('recipe/menulist' + params);

/***** 购物车页面 猜你喜欢*********/
export const getGuessYouLike = () => request('cart/youlike');

/***** 登录界面接口 *********/
// 1.获取手机验证码(GET)
// Easy Mock 模拟发送验证码
export const getPhoneCaptcha = (phoneNumber: any) => request('send_code', {
    phoneNumber
});

// 2.手机验证码登录(POST)
// Easy Mock 模拟用户登录
export const phoneCaptchaLogin = (phone: any, captcha: any) => request('login_code', {
    phone,
    captcha
}, 'POST');

export const register =async ({email:username, password,phone, smsCode,captcha}:{email:string,password:string,phone:number,smsCode:number,captcha:string}) => {
    return request('/register', {
        username,
        email:username,
        password:Encrypt(password),
        phone,
        smsCode,
        captcha
    }, 'POST')
};

// 3.账号密码登录(POST)
export const pwdLogin =async ({email:username, password, captcha}:{email:string,password:string,captcha:string}) => {
   return request('/login', {
        username,
        password:Encrypt(password),
        captcha
    }, 'POST')
};

/***** 个人中心 *********/
// 1.绿卡Vip
export const getVipContent = () => request('vip');
