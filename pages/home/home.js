// pages/home/home.js
//导入配置文件config.js
import {Theme} from "../../model/theme";
import {Banner} from "../../model/banner";
import {Category} from "../../model/category";
import {Activity} from "../../model/activity";

Page({

  /**
   * 组件的初始数据
   */
  data: {
    themeA: null,
    bannerB: null,
    grid: [],
    activityD: null
  },

  /**
   * JS类型的约束
   * 业务逻辑
   * 页面的js 数据绑定
   *
   * 生命周期函数--监听页面加载
   * @param options
   */
  async onLoad(options) {
    this.initAllData()
  },

  //初始化所有数据
  async initAllData() {
    const themeA = await Theme.getHomeLocationA()
    const bannerB = await Banner.getHomeLocationB()
    const grid = await Category.getHomeLocationC()
    const activityD = await Activity.getHomeLocationD()
    this.setData({
      themeA: themeA[0],
      bannerB,
      grid,
      activityD
    })
  },

  onPullDownRefresh: function(){

  },

  onReachBottom: function(){

  },

  onShareAppMessage: function(){

  },


  /**
   * 组件的方法列表
   */
  methods: {

  }
})
