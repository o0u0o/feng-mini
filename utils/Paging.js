/**
 * @作者 o0u0o ..
 * 分页工具
 * */
import {Http} from "./http";
import boolean from "../miniprogram_npm/lin-ui/common/async-validator/validator/boolean";

class Paging {
    //不关心细节

    start
    count
    req
    locker = false     //默认没锁
    url
    moreData = true //默认为true
    accumulator = []

    /**
     * 构造方法
     * @param url 服务器链接
     * @param start 分页开始
     * @param count 数量 默认为10
     */
    constructor(req, count = 10, start= 0 ) {
        this.req = req;
        this.count = count;
        this.start = start;
        this.url = req.url;
    }

    /**
     * 获取更多的数据
     * 借用生成器 Generator 思想
     */
    async getMoreData(){
        if (!this.moreData){
            return
        }
        //getLocker 获取锁判断是否锁定
        if (!this._getLocker()){
            return
        }
        const data = await this._actualGetData()
        // releaseLocker 放开锁
        this._releaseLocker()
        //发送请求 request 发送之前使用数据锁
        return data;
    }

    /**
     * 真实获取数据
     * 调用服务器API
     * @private
     */
    async _actualGetData(){
        const req = this._getCurrentReq()
        let paging = await Http.request(req)
        if(!paging){
            return null
        }

        //没数据的情况
        if (paging.total === 0){
            return {
                empty: true,
                items: [],
                moreData: false,
                accumulator: []
            }
        }

        this.moreData = Paging._moreData(paging.total_page, paging.page)
        if (this.moreData){
            this.start += this.count
        }
        this._accumulate(paging.items)
        return {
            empty: false,
            items: paging.items,
            moreData: this.moreData,
            accumulator: this.accumulator
        }

    }

    _accumulate(items){
        this.accumulator = this.accumulator.concat(items)
    }

    /**
     * 更多分页
     * @param totalPage 总页数
     * @param pageNum 当前页数
     * @returns {boolean}
     * @private
     */
    _moreData(totalPage, pageNum){
        return pageNum < totalPage - 1
    }

    /**
     * 获取当前请求对象
     * @returns {*}
     * @private
     */
    _getCurrentReq(){
        let url = this.url
        const params = `start=${this.start}&count=${this.count}`
        //判断url内是否有"？"
        if(url.includes('?')){
            url += '&' + params
        }
        else {
            url += '?' + params
        }
        this.req.url = url
        return this.req
    }

    /**
     * 获取锁
     * @returns {boolean}
     * @private
     */
    _getLocker(){
        if (this.locker){
            return false
        }
        this.locker = true
        return true
    }

    /**
     * 放开锁
     * @private
     */
    _releaseLocker(){
        this.locker = false
    }
}

export {
    Paging
}
