//业务对象 Theme
import {Http} from "../utils/http";

class Theme {
    static async getHomeLocationA() {
        return await Http.request({
            //请求连接
            url: `theme/by/names`,
            //请求数据
            data: {
                names: 't-1'
            }
        })
    }
}

//导出Theme
export {
    Theme
}
