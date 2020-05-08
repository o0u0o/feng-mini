/**
 * 矩阵工具类 处理矩阵操作
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

    //以下代码为自己实现矩阵转置
    transpose(){
        //定义一个转置后的数组
        const desArr = []
        //循环
        for (let j = 0; j < this.colsNum; j++){
            //创建子数组
            desArr[j] = []
            for (let i = 0; i < this.rowsNum; i++){
                //进行行列颠倒
                desArr[j][i] = this.m[i][j]
            }
        }
        return desArr
    }


}

export {
    Matrix
}
