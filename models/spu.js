/**
 * @作者 岳川贵
 * @创建时间 2020-4-27 下午1:33
 */
import {Http} from "../utils/http";

class Spu{

    //请求获取详情接口
    static getDetail(id){
        return Http.request({
            url: `spu/id/${id}/detail`
        });
    }
}

export {
    Spu
}
