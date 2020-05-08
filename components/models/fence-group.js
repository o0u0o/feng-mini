/**
 * @作者 岳川贵
 * @创建时间 2020-4-27 下午 9:33
 */
import {Matrix} from "./matrix";
import {Fence} from "./fence";

class FenceGroup {
    spu
    skuList = []

    constructor(spu) {
        this.spu = spu
        this.skuList = spu.sku_list
    }



    //使用自己实现的矩阵初始化Fences
    initFences() {
        const matrix = this._createMatrix(this.skuList)
        console.log("skuList"+this.skuList)
        const fences = []
        const AT = matrix.transpose()
        AT.forEach(r => {
            const fence = new Fence(r)
            //初始化fence
            fence.init()
            //将fence push 到 fences中
            fences.push(fence)
        })
        console.log(fences)
    }

    //创建Fence
    _createFence(element){
        const fence = new Fence()
        //fence.pushValueTitle(element.value)
        return fence
    }

    //创建矩阵
    _createMatrix(skuList){
        //使用二维数组
        const m = []
        //遍历skuList 并将spesc push 到m 数组中
        skuList.forEach(sku =>{
            m.push(sku.specs)
        })
        return new Matrix(m)
    }

    //转置矩阵 1.使用函数库 mathjs 问题:体积大 2.借助矩阵思维
}

export {
    FenceGroup
}
