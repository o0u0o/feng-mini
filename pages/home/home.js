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
    themeE: null,
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
    const theme = new Theme()
    await theme.getThemes()

    const themeA = await theme.getHomeLocationA()
    const themeE = await theme.getHomeLocationE()
    //判断themeE是否是上线状态
    let themeESpu = []
    if(themeE.online){
      const  data = await Theme.getHomeLocationESpu()
      if(data){
        //截取数据
        themeESpu = data.spu_list.slice(0,8)
      }
    }

    const themeF = await theme.getHomeLocationF()

    const bannerB = await Banner.getHomeLocationB()
    const grid = await Category.getHomeLocationC()
    const activityD = await Activity.getHomeLocationD()

    const bannerG = await Banner.getHomeLocationG()

    const themeH = theme.getHomeLocationH()

    this.setData({
      themeA,
      bannerB,
      activityD,
      grid,
      themeE,
      themeESpu,
      themeF,
      bannerG,
      themeH
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
