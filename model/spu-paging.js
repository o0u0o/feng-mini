/** @作者 o0u0o ..*/
import {Paging} from "../utils/Paging"

class SpuPaging{
    static async getLatestPaging(){
        return new Paging({
            url: `spu/latest`
        }, 3)

    }
}

export {
    SpuPaging
}
/**
 * 1、考虑：没有数据
 * 2、最后一页 还有没有更多数据
 * 3、考虑到累加 1-20 21-40 ... 每次 setData 是考虑到之前的数据 重新渲染页面
 * 4、分页数据的加载状态
 *      非分页数据：
 *          a、正在加载 loading
 *          b、数据为空
 *      分页数据：
 *          a、正在加载
 *          b、加载完成
 *          c、没有更多数据了
 * 5、服务器性能: 避免用户重复发送请求（避免上滑触底用户多次发送）1、前端限制，保护服务器性能 2、可以通过redis高速缓存（防止脚本恶意发送）
 *    提交数据（写入数据） 规避 防抖 截流问题 用户点击后按钮禁用、倒计时（模态 loading） 数据锁
 *
 *    如何封装：
 *    1、以类为思想 ES6 的类与其他主流语言相似的思维方式 具有面向对象的思维
 *    2、以函数为思想
 */
