/**
 * @作者 岳川贵
 */
class Matrix {
    constructor(matrix) {
        this.m = matrix
    }

    //获取矩阵的长度
    get rowsNum(){
        return this.m.length
    }

    get colsNum(){
        return this.m[0].length
    }

    forEach(cb){
        for (let j = 0; j < this.colsNum; j++){
            for (let i = 0; i < this.rowsNum; i++){
                const element = this.m[i][j]
                //回调函数
                cb(element, i, j)
            }
        }
    }
}

export {
    Matrix
}
