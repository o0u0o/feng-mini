/**
 * @作者 岳川贵
 * Sell 对象 单元格
 */
class Cell {
    title
    id

    //构造函数
    constructor(spec) {
        this.title = spec.value
        this.id = spec.value_id
    }
}

//导出Cell对象
export {
    Cell
}
