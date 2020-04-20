// components/spu-preview/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    data:Object
  },

  /**
   * 组件的初始数据
   *
   */
  data: {
    tags: Array
  },

  /**
   * 定义一个监听器
   * 将标签（tags）分割为数组
   */
  observers:{
    data: function (data) {
      if (!data){
        return
      }
      if (!data.tags){
        return;
      }
      const tags = data.tags.split('$')
      this.setData({
          tags
      })
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {

    //图片加载时
    onImgLoad(event){
      const {width, height} = event.detail
      //如果让图片不失真，需要保持图片比例（固定宽度）w: 缩放后的高度 340rpx
      this.setData({
        w: 340,
        h: 340*(height/width)
      })
      // console.log(width, height)
    },

    //点击瀑布流的item时
    onItemTap(event){
      //拿到商品ID号(在wxss中进行的绑定)
      const pid = event.currentTarget.dataset.pid
      //进行路由跳转 传到参数pid(商品ID)
      wx.navigateTo({
        url:`/pages/detail/detail?pid=${pid}`
      })
    }

    /**
     * 跳转路由应该交到home中来进行跳转
     * 自定义组件分类：
     * 1、业务型组件
     * 2、通用型组件
     *
     * 页面跳转时传参问题
     * 通过两个页面的事件进行传参数
     * EventChannel
     */

  }
})
