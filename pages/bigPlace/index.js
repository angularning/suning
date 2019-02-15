// import "../../utils/util.js"
const app = getApp();
const u = require('../../utils/util.js');
const c = u.a(); 
Page({
  /**
   * 页面的初始数据
   */
  data: {
    gender: ['今日收益'],
    iconTrue:true,
    downIcon: '/image/selectIcon.png',
    upIcon:'/image/selectUpIcon.png',
    detail:'',
    selectName:'今日收益',
    selectList:[
      { name: "今日收益", value:"今日收益" },
      // { name: "今日实际", value:"今日实际"}
    ],
    placeList: [
      // {
      //   "place": "北京",
      //   "num": "100",
      //   "money": "12333"
      // },
      // {
      //   "place": "北京",
      //   "num": "100",
      //   "money": "12333"
      // },
      // {
      //   "place": "北京",
      //   "num": "100",
      //   "money": "12333"
      // },
      // {
      //   "place": "北京",
      //   "num": "100",
      //   "money": "12333"
      // },
      // {
      //   "place": "北京",
      //   "num": "100",
      //   "money": "12333"
      // },
      // {
      //   "place": "北京",
      //   "num": "100",
      //   "money": "12333"
      // },
      // {
      //   "place": "北京",
      //   "num": "100",
      //   "money": "12333"
      // },
      // {
      //   "place": "北京",
      //   "num": "100",
      //   "money": "12333"
      // },
      // {
      //   "place": "北京",
      //   "num": "100",
      //   "money": "12333"
      // },
      // {
      //   "place": "北京",
      //   "num": "100",
      //   "money": "12333"
      // },
      // {
      //   "place": "北京",
      //   "num": "100",
      //   "money": "12333"
      // },
      // {
      //   "place": "北京",
      //   "num": "100",
      //   "money": "12333"
      // },
      // {
      //   "place": "北京",
      //   "num": "100",
      //   "money": "12333"
      // },
      // {
      //   "place": "北京",
      //   "num": "100",
      //   "money": "12333"
      // },
      // {
      //   "place": "北京",
      //   "num": "100",
      //   "money": "12333"
      // },
      // {
      //   "place": "北京",
      //   "num": "100",
      //   "money": "12333"
      // },
      // {
      //   "place": "北京",
      //   "num": "100",
      //   "money": "12333"
      // },
      // {
      //   "place": "北京",
      //   "num": "100",
      //   "money": "12333"
      // },
      // {
      //   "place": "北京",
      //   "num": "100",
      //   "money": "12333"
      // },
      // {
      //   "place": "北京",
      //   "num": "100",
      //   "money": "12333"
      // },
      // {
      //   "place": "北京",
      //   "num": "100",
      //   "money": "12333"
      // },
      // {
      //   "place": "北京",
      //   "num": "100",
      //   "money": "12333"
      // },
      // {
      //   "place": "北京",
      //   "num": "100",
      //   "money": "12333"
      // },
      // {
      //   "place": "北京",
      //   "num": "100",
      //   "money": "12333"
      // },
      // {
      //   "place": "北京",
      //   "num": "100",
      //   "money": "12333"
      // },
      // {
      //   "place": "北京",
      //   "num": "100",
      //   "money": "12333"
      // },
      // {
      //   "place": "北京",
      //   "num": "100",
      //   "money": "12333"
      // },
      // {
      //   "place": "北京",
      //   "num": "100",
      //   "money": "12333"
      // },
      // {
      //   "place": "北京",
      //   "num": "100",
      //   "money": "12333"
      // },
      // {
      //   "place": "北京",
      //   "num": "100",
      //   "money": "12333"
      // },
      // {
      //   "place": "北京",
      //   "num": "100",
      //   "money": "12333"
      // },
      // {
      //   "place": "北京",
      //   "num": "100",
      //   "money": "12333"
      // },
      // {
      //   "place": "北京",
      //   "num": "100",
      //   "money": "12333"
      // },
      // {
      //   "place": "北京",
      //   "num": "100",
      //   "money": "12333"
      // },
      // {
      //   "place": "北京",
      //   "num": "100",
      //   "money": "12333"
      // }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.toRequestData(1);
  },
  chooseSelect:function(e){
    this.setData({
      iconTrue:!this.data.iconTrue
    });
  },
  changeSelect:function(e){
    console.log(e);
    //点击下拉框的时候去做请求
    if (e.currentTarget.dataset.name=='今日收益'){
      this.toRequestData(1)
    }
    this.setData({
      selectName: e.currentTarget.dataset.name
    });

  },
  bindPickerChange: function (e) {
    console.log(e);
  },
  toPlaceDetail: function (e) {
    let id = e.currentTarget.dataset.id;
    let name = e.currentTarget.dataset.name;
    wx.navigateTo({
      url: '/pages/placeDetail/index?id='+id+'&name='+name,
    })
  },
  toRequestData(value){
    wx.request({
      url: c.url +'store/regionList',
      data:{},
      header: {        'content-type': 'application/json'        , 'Cookie': 'ticket=' + wx.getStorageSync('ticket')      },
      success: (res) => {
        console.log(res);
        if (res.data.code == 1000000) {
          this.setData({
            placeList: res.data.data
          })
          wx.hideLoading();
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },
  watchSelectName:function(){
    var selectName = this.data.watchSelectName;
    if (selectName=='今日收益'){
      console.log('1222');
    }
  },
  getDataList(pageNo) {
    this.loading = true;

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.showLoading({
      title: '加载中......'
    })
    console.log(this.data.placeList.length);
    if (this.data.placeList.length>0){
      wx.hideLoading();
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})