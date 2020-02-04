import {config} from "../config/config";
import {promisic} from "./util";
class Http {

    /**
     *
     * @param url
     * @param data 数据
     * @param method 方法
     * @returns {Promise<*>}
     */
    static async request({
                             url,
                             data,
                             method = 'GET'
                        }) {
      const res = await promisic(wx.request)({
            url: `${config.apiBaseUrl}${url}`,
            data,
            method,
            header:{
                appkey: config.appKey
            }
        })
        return res.data
    }

    //统一异常处理防范
}

//导出Http 工具
export {
    Http
}