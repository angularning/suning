import "../../utils/util.js"
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    gender: ['今日预估','今日实际'],
    iconTrue:true,
    downIcon: '/image/selectIcon.png',
    upIcon:'/image/selectUpIcon.png',
    detail:'',
    selectName:'今日预估',
    selectList:[
      { name: "今日预估", value:"今日预估" },
      { name: "今日实际", value:"今日实际"}
    ],
    placeList: [
      {
        "place": "北京",
        "num": "100",
        "money": "12333"
      },
      {
        "place": "北京",
        "num": "100",
        "money": "12333"
      },
      {
        "place": "北京",
        "num": "100",
        "money": "12333"
      },
      {
        "place": "北京",
        "num": "100",
        "money": "12333"
      },
      {
        "place": "北京",
        "num": "100",
        "money": "12333"
      },
      {
        "place": "北京",
        "num": "100",
        "money": "12333"
      },
      {
        "place": "北京",
        "num": "100",
        "money": "12333"
      },
      {
        "place": "北京",
        "num": "100",
        "money": "12333"
      },
      {
        "place": "北京",
        "num": "100",
        "money": "12333"
      },
      {
        "place": "北京",
        "num": "100",
        "money": "12333"
      },
      {
        "place": "北京",
        "num": "100",
        "money": "12333"
      },
      {
        "place": "北京",
        "num": "100",
        "money": "12333"
      },
      {
        "place": "北京",
        "num": "100",
        "money": "12333"
      },
      {
        "place": "北京",
        "num": "100",
        "money": "12333"
      },
      {
        "place": "北京",
        "num": "100",
        "money": "12333"
      },
      {
        "place": "北京",
        "num": "100",
        "money": "12333"
      },
      {
        "place": "北京",
        "num": "100",
        "money": "12333"
      },
      {
        "place": "北京",
        "num": "100",
        "money": "12333"
      },
      {
        "place": "北京",
        "num": "100",
        "money": "12333"
      },
      {
        "place": "北京",
        "num": "100",
        "money": "12333"
      },
      {
        "place": "北京",
        "num": "100",
        "money": "12333"
      },
      {
        "place": "北京",
        "num": "100",
        "money": "12333"
      },
      {
        "place": "北京",
        "num": "100",
        "money": "12333"
      },
      {
        "place": "北京",
        "num": "100",
        "money": "12333"
      },
      {
        "place": "北京",
        "num": "100",
        "money": "12333"
      },
      {
        "place": "北京",
        "num": "100",
        "money": "12333"
      },
      {
        "place": "北京",
        "num": "100",
        "money": "12333"
      },
      {
        "place": "北京",
        "num": "100",
        "money": "12333"
      },
      {
        "place": "北京",
        "num": "100",
        "money": "12333"
      },
      {
        "place": "北京",
        "num": "100",
        "money": "12333"
      },
      {
        "place": "北京",
        "num": "100",
        "money": "12333"
      },
      {
        "place": "北京",
        "num": "100",
        "money": "12333"
      },
      {
        "place": "北京",
        "num": "100",
        "money": "12333"
      },
      {
        "place": "北京",
        "num": "100",
        "money": "12333"
      },
      {
        "place": "北京",
        "num": "100",
        "money": "12333"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getDataList(0);
  },
  chooseSelect:function(e){
    this.setData({
      iconTrue:!this.data.iconTrue
    });
  },
  changeSelect:function(e){
    console.log(e);
    //点击下拉框的时候去做请求
    if (e.currentTarget.dataset.name=='今日预估'){
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
    
  },
  toRequestData(value){
    wx.request({
      url: app.globalData.url+'home',
      data:{
        value: value
      },
      success:function(data){
          console.log(data)
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
    if (selectName=='今日实际'){
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
    // this.watchSelectName;
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