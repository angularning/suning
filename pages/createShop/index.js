//获取应用实例
var tcity = require("../../utils/citys.js");
var app = getApp()
const u = require('../../utils/util.js');
const c = u.a();
Page({
  data: {
    check: 1,
    fileUpload: '',
    defultWord: '请选择大区',
    provinces: [],
    province: "",
    provinceId: '',
    citys: [],
    city: "",
    cityId: '',
    countys: [],
    county: '',
    countyId: '',
    value: [0, 0, 0],
    values: [0, 0, 0],
    isShow: true,
    condition: false,
    defSrc: 'http://p2a60yqmm.bkt.clouddn.com/uploadImg.png',
    img: '',
    storeName: '',
    mobile: '',
    realName: '',
    addressDetail: ''
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
  bindChange: function(e) {
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
  open: function() {
    this.setData({
      condition: !this.data.condition
    })
  },
  onLoad: function() {
    wx.request({
      url: c.url + 'store/selectRegionList',
      method: 'post',
      data: {},
      header: {
        'content-type': 'application/json',
        'Cookie': 'ticket=' + wx.getStorageSync('ticket')
      },
      success: (res) => {
        console.log(res.data.data);
        this.setData({
          placeList: res.data.data
        })
      }
    })

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
    for (let i = 0; i < cityData[0].child.length; i++) {
      citys.push(cityData[0].child[i].name)
    }
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
  agree: function(e) {
    console.log(e);
    if (e.detail.value == 0) {
      this.setData({
        check: 0
      })
    } else {
      this.setData({
        check: 1
      })
    }
  },
  bindShowMsg() {
    this.setData({
      select: !this.data.select
    })
  },
  mySelect(e) {
    console.log(e)
    this.setData({
      defultWord: e.currentTarget.dataset.name,
      placeId: e.currentTarget.dataset.id,
      select: false
    })
  },
  toAuth: function() {
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
    const fileUpload = this.data.fileUpload;
    const placeId = this.data.placeId;
    const check = this.data.check;
    if (storeName == null || storeName == '') {
      wx.showToast({
        title: '请填写门店名称',
        icon: 'none'
      })
      return
    }
    if (placeId == null || placeId == '') {
      wx.showToast({
        title: '请选择大区',
        icon: 'none'
      })
      return
    }
    if (contact == null || contact == '') {
      wx.showToast({
        title: '请填写注册手机号',
        icon: 'none'
      })
      return
    }
    if (contact.trim().length != 11 || !/^1[3|4|5|6|7|8|9]\d{9}$/.test(contact)) {
      wx.showToast({
        title: '手机号格式不正确',
        icon: 'none',
        duration: 2000
      });
      return
    }
    if (ownerName == null || ownerName == '') {
      wx.showToast({
        title: '请填写真实姓名',
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
    if (areaId == null || areaId == '') {
      wx.showToast({
        title: '请选择门店地址',
        icon: 'none'
      })
      return
    }
    if (aName == null || aName == '') {
      wx.showToast({
        title: '请选择门店地址',
        icon: 'none'
      })
      return
    }
    if (address == null || address == '') {
      wx.showToast({
        title: '请填写详细地址',
        icon: 'none'
      })
      return
    }
    if (fileUpload == null || fileUpload == '') {
      wx.showToast({
        title: '请上传照片',
        icon: 'none'
      })
      return
    }
    if (check == 0) {
      wx.showToast({
        title: '请勾选同意协议',
        icon: 'none'
      })
      return
    }
    wx.request({
      url: c.url + 'store/createdStore',
      method: 'post',
      data: {
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
        storePic: fileUpload,
        placeId: placeId
      },
      header: {
        'content-type': 'application/json',
        'Cookie': 'ticket=' + wx.getStorageSync('ticket')
      },
      success: (res) => {
        console.log(res);
        if (res.data.code == 1000000) {
          wx.showToast({
            title: res.data.msg,
            icon: 'none'
          });
          setTimeout(function () {
            wx.switchTab({
              url: '/pages/indexOne/index',
            })
          }, 1000);
          wx.setStorageSync('loginUserInfo', res.data.data.data);

        } else {
          wx.showToast({
            title: res.data.msg,
            icon: 'none'
          })
        }
      }
    })
  },
  chooseImage(e) {
    var that = this;
    wx.chooseImage({
      sizeType: ['original', 'compressed'], //可选择原图或压缩后的图片
      sourceType: ['album', 'camera'], //可选择性开放访问相册、相机
      success: res => {
        this.setData({
          isShow: false,
          img: res.tempFilePaths[0]
        })
        const tempFilePaths = res.tempFilePaths
        var ticket = wx.getStorageSync('ticket');
        wx.uploadFile({
          url: c.url + 'common/upload',
          filePath: tempFilePaths[0],
          header: {
            'content-type': 'multipart/form-data' // 默认值
              ,
            'Cookie': 'ticket=' + ticket
          },
          name: 'file',
          formData: {
            // user: 1
          },
          success(res) {
            console.log(res);
            var c = res.data;
            c = c.replace(/\ufeff/g, "");
            var nd = JSON.parse(c);
            console.log(nd);
            if (nd.code == 1000000) {
              that.setData({
                fileUpload: nd.data
              })
            }
          },
          fail(e) {
            console.log(e);
          },
          complete(e) {
            console.log(e);
          }
        })


      }
    })
  }
})