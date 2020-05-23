Page({
  data: {
    __num: "",
    main_text: [{
        type: 1,
        title: "在泥泞道路上行车要紧方向盘加速通过1在泥泞道路上行车要紧方向盘加速通过1在泥泞道路上行车要紧方向盘加速通过1在泥泞道路上行车要紧方向盘加速通过1",
        option: [{
            content1: "A",
            content_text1: "正确",
          },
          {
            content1: "B",
            content_text1: "错误",
          }
        ]
      },
      {
        type: 2,
        title: "在泥泞道路上行车要紧方向盘加速通过2",
        option: [{
            content1: "A",
            content_text1: "选择答案1",
          },
          {
            content1: "B",
            content_text1: "选择答案2",
          },
          {
            content1: "C",
            content_text1: "选择答案3",
          },
          {
            content1: "D",
            content_text1: "选择答案4",
          },
        ]
      },
      {
        type: 2,
        title: "在泥泞道路上行车要紧方向盘加速通过2",
        option: [{
            content1: "A",
            content_text1: "选择答案1",
          },
          {
            content1: "B",
            content_text1: "选择答案2",
          },
          {
            content1: "C",
            content_text1: "选择答案3",
          },
          {
            content1: "D",
            content_text1: "选择答案4",
          },
        ]
      },
    ],
    current: 0
  },
  swiper_change: function(e) {
    this.setData({
      current: e.detail.current,
    })
  },

  // 多选加背景色
  back: function(e) {
    console.log(e)
    var idx = e.currentTarget.dataset.idx;
    var idx2 = e.currentTarget.dataset.idx2;
    var type = e.currentTarget.dataset.type;
    var main_text = this.data.main_text;
    console.log(idx + 'aa');
    console.log(idx2);
    if (type == 1) { //单选题
      for (var i=0; i < main_text[idx].option.length; i++) {
        console.log(i)
        main_text[idx].option[i].check = false;
      }
      main_text[idx].option[idx2].check = true;
      this.jump_page()
    }
    if (type == 2) { //多选题
      main_text[idx].option[idx2].check = !main_text[idx].option[idx2].check;
    }
    this.setData({
      main_text: main_text,
    })
  },

  jump_page:function(){
    var length = this.data.main_text.length;
    if (length == this.data.current + 1) {
      return false;
    }
    this.setData({
      current: this.data.current + 1,
    })
  }

})