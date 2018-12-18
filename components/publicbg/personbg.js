Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的属性列表
   */
  properties: {
    placeNum: {            // 属性名
      type: Number,     // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: '100'     // 属性初始值（可选），如果未指定则会根据类型选择一个
    },
    isShowPlace: { //是否有启动大区
      type: Boolean,
      value: false
    },
    isShowDudao: {  //是否有督导
      type: Boolean,
      value: false
    },
    isShowCheck: {   //是否有待审核
      type: Boolean,
      value: false
    },
    isShowBtn: {   //是否有分成设置按钮
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    num:11,
    waitNum:1,
    isShow:true 
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})

