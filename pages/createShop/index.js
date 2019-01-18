//获取应用实例
var tcity = require("../../utils/citys.js");
var app = getApp()
Page({
  data: {
    provinces: [],
    province: "",
    provinceId:'',
    citys: [],
    city: "",
    cityId:'',
    countys: [],
    county: '',
    countyId:'',
    value: [0, 0, 0],
    values: [0, 0, 0],
    isShow:true,
    condition: false,
    defSrc:'http://p2a60yqmm.bkt.clouddn.com/uploadImg.png',
    img:'',
    storeName: '',
    mobile: '',
    realName:'',
    addressDetail:''
  },
  phoneNumber(e) {
    this.setData({
      mobile: e.detail.value
    })
  },
  realName(e) {
    this.setData({
      realName: e.detail.value
    })
  },
  storeName(e) {
    this.setData({
      storeName: e.detail.value
    })
  },
  addressDetail(e) {
    this.setData({
      addressDetail: e.detail.value
    })
  },
  bindChange: function (e) {
    //console.log(e);
    var val = e.detail.value
    var t = this.data.values;
    var cityData = this.data.cityData;
    if (val[0] != t[0]) {
      const citys = [];
      const countys = [];
      for (let i = 0; i < cityData[val[0]].child.length; i++) {
        citys.push(cityData[val[0]].child[i].name)
      }
      for (let i = 0; i < cityData[val[0]].child[0].child.length; i++) {
        countys.push(cityData[val[0]].child[0].child[i].name)
      }
      this.setData({
        province: this.data.provinces[val[0]],
        provinceId: cityData[val[0]].id,
        city: cityData[val[0]].child[0].name,
        cityId: cityData[val[0]].child[0].id,
        citys: citys,
        county: cityData[val[0]].child[0].child[0].name,
        countyId: cityData[val[0]].child[0].child[0].id,
        countys: countys,
        values: val,
        value: [val[0], 0, 0]
      })

      return;
    }
    if (val[1] != t[1]) {
      console.log('city no');
      const countys = [];
      for (let i = 0; i < cityData[val[0]].child[val[1]].child.length; i++) {
        countys.push(cityData[val[0]].child[val[1]].child[i].name)
      }
      this.setData({
        city: this.data.citys[val[1]],
        county: cityData[val[0]].child[val[1]].child[0].name,
        countyId: cityData[val[0]].child[val[1]].child[0].id,
        countys: countys,
        values: val,
        value: [val[0], val[1], 0]
      })
      return;
    }
    if (val[2] != t[2]) {
      console.log('county no');
      this.setData({
        county: this.data.countys[val[2]],
        values: val
      })
      return;
    }


  },
  open: function () {
    this.setData({
      condition: !this.data.condition
    })
  },
  onLoad: function () {
    console.log("onLoad");
    var that = this;
    tcity.init(that);
    var cityData = that.data.cityData;
    const provinces = [];
    const citys = [];
    const countys = [];

    for (let i = 0; i < cityData.length; i++) {
      provinces.push(cityData[i].name);
    }
    console.log('省份完成');
    for (let i = 0; i < cityData[0].child.length; i++) {
      citys.push(cityData[0].child[i].name)
    }
    console.log('city完成');
    for (let i = 0; i < cityData[0].child[0].child.length; i++) {
      countys.push(cityData[0].child[0].child[i].name)
    }
    that.setData({
      'provinces': provinces,
      'citys': citys,
      'countys': countys,
      'province': cityData[0].name,
      'provinceId': cityData[0].id,
      'city': cityData[0].child[0].name,
      'cityId': cityData[0].child[0].id,
      'county': cityData[0].child[0].child[0].name,
      'countyId': cityData[0].child[0].child[0].id
    })
    console.log('初始化完成');
  },
  toAuth:function(){
    const provinceId = this.data.provinceId;
    const pName = this.data.province;

    const cityId = this.data.cityId;
    const cName = this.data.city;

    const areaId = this.data.countyId;
    const aName = this.data.county;

    const address = this.data.addressDetail;
    const storeName = this.data.storeName;
    const ownerName = this.data.realName;
    const contact = this.data.mobile;
    const storePic = this.data.img;
    if (provinceId == null || provinceId == '') {
      wx.showToast({
        title: '请选择门店地址',
        icon: 'none'
      })
      return
    }
    if (pName == null || pName == '') {
      wx.showToast({
        title: '请选择门店地址',
        icon: 'none'
      })
      return
    }
    if (cityId == null || cityId == '') {
      wx.showToast({
        title: '请选择门店地址',
        icon: 'none'
      })
      return
    }
    if (cName == null || cName == '') {
      wx.showToast({
        title: '请选择门店地址',
        icon: 'none'
      })
      return
    }
    if (provinceId == null || provinceId == '') {
      wx.showToast({
        title: '请选择门店地址',
        icon: 'none'
      })
      return
    }
    if (provinceId == null || provinceId == '') {
      wx.showToast({
        title: '请选择门店地址',
        icon: 'none'
      })
      return
    }
    if (provinceId == null || provinceId == '') {
      wx.showToast({
        title: '请选择门店地址',
        icon: 'none'
      })
      return
    }
    if (provinceId == null || provinceId == '') {
      wx.showToast({
        title: '请选择门店地址',
        icon: 'none'
      })
      return
    }
    wx.request({
      url: app.getUseData.url +'store/createdStore',
      method: 'post',
      data:{
        provinceId: provinceId,
        pName: pName,
        cityId: cityId,
        cName: cName,
        areaId: areaId,
        aName: aName,
        address: address,
        storeName: storeName,
        ownerName: ownerName,
        contact: contact,
        storePic: storePic
      },
      header:app.getUseData.headerConfig,
      success:(res)=>{
          console.log(res);
      }
    })
  },
  chooseImage(e) {
    wx.chooseImage({
      sizeType: ['original', 'compressed'],  //可选择原图或压缩后的图片
      sourceType: ['album', 'camera'], //可选择性开放访问相册、相机
      success: res => {
        this.setData({
          isShow:false,
          img: res.tempFilePaths[0]
        })
        const tempFilePaths = res.tempFilePaths
        wx.uploadFile({
          url: 'https://example.weixin.qq.com/upload', // 仅为示例，非真实的接口地址
          filePath: tempFilePaths[0],
          name: 'file',
          data: {
            user: 'test'
          },
          success(res) {
            const data = res.data
            // do something
          },
          fail(e){
            console.log(e);
          }
          ,complete(e){
            console.log(e);
          }
        })

      
      }
    })
  }
})
