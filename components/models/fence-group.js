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

    //初始化Fences
    initFences(){
        const matrix = this._createMatrix(this.skuList);
        const fences = []
        let currentJ = -1;
        matrix.forEach((element, i , j)=>{
            //开启了数组的新列
            if (currentJ !== j){
                //开启一个新列，需要创建一个新的Fence
                currentJ = j
                fences[currentJ] = this._createFence(element)
            }
            fences[currentJ].pushValueTitle(element.value)
        })

        console.log(fences)
    }

    //创建Fence
    _createFence(element){
        const fence = new Fence()
        //fence.pushValueTitle(element.value)
        return fence
    }

    _createMatrix(skuList){
        //使用二维数组
        const m = []
        skuList.forEach(sku =>{
            m.push(sku.specs)
        })
        return new Matrix(m)
    }

    //转置矩阵 1.使用函数库 mathjs 问题:体积大 2.
}

export {
    FenceGroup
}
