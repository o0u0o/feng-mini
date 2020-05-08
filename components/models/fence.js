/**
 * @作者 岳川贵
 * @创建时间 2020-4-27 下午 9:32
 */
import {Cell} from "./Cell";

class Fence{

    cells = []
    specs

    constructor(specs) {
        this.specs = specs
    }

    //初始化Fence
    init(){
        this.specs.forEach(s =>{
            // this.pushValueTitle(s.value)
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
