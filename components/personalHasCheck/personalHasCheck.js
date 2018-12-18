Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    checkList: [
      {
        id:1,
        name: "李花花",
        place: "上海",
        tel: 1581112231,
        balanceNum:1000,
        allMoney:1000,
        dudao:7
      },
      {
        id:2,
        name: "张三丰",
        place: "北京",
        tel: 1581112231,
        balanceNum: 11100,
        allMoney: 111000,
        dudao: 10
      },
      {
        id:3,
        name: "张三丰",
        place: "北京",
        tel: 1581112231,
        balanceNum: 11100,
        allMoney: 111000,
        dudao: 10
      },
      {
        id:4,
        name: "张三丰",
        place: "北京",
        tel: 1581112231,
        balanceNum: 11100,
        allMoney: 111000,
        dudao: 10
      },
      {
        id:5,
        name: "张三丰",
        place: "北京",
        tel: 1581112231,
        balanceNum: 11100,
        allMoney: 111000,
        dudao: 10
      },
      {
        id:6,
        name: "张三丰",
        place: "北京",
        tel: 1581112231,
        balanceNum: 11100,
        allMoney: 111000,
        dudao: 10
      }
    ],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    toPersonalDetail(e){
      console.log(e);
        // wx.navigateBack({
        //   url:''
        // })
    }
  },
  toPersonalDetail(e) {
    console.log(e);
    // wx.navigateBack({
    //   url:''
    // })
  },
   onReachBottom: function () {
    console.log('1111')
  },
})
