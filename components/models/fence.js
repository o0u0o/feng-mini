/**
 * @作者 岳川贵
 * @创建时间 2020-4-27 下午 9:32
 */
import {Cell} from "./cell";

class Fence{

    cells = []
    //规格数组
    specs
    //规格名的名字
    title
    //规格名的主键，唯一ID
    id

    constructor(specs) {
        this.specs = specs
        //不建议使用下标直接从数组取
        this.title = specs[0].key
        this.title = specs[0].key_id
    }

    //初始化Fence
    init(){
        this._initCells()
    }

    //初始化Cells
    _initCells(){
        //some只要求数组一个符合表达式，返回true  every:要求所有的都符合才返回true
        // 实现规格去重
        this.specs.forEach(s =>{
            const existed = this.cells.some(c => {
                return c.id === s.value_id
            })
            if (existed){
                return
            }
            const cell = new Cell(s)
            this.cells.push(cell)
        })
    }
    // pushValueTitle(title){
    //     this.cells.push(title)
    // }
}

export {
    Fence
}
