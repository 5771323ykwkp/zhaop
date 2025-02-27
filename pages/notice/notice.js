Page({
  // 页面的初始数据
  data: {
    noticeSearchKey: "", // 搜索关键词
    total: 0, // 公告总数
    notices: [
      {
        id: 1,
        type: "招聘",
        time: "2024-12-4",
        title: "新疆大学辅导员招聘公告",
        contents: "新疆大学现招聘辅导员若干名，具体要求如下...",
        src: "/image/swiper/news.webp"
      },
      {
        id: 2,
        type: "求职",
        time: "2024-9-7",
        title: "小米招聘",
        contents: "小米科技诚招各类人才，欢迎加入我们的团队...",
        src: ""
      },
      {
        id: 3,
        type: "招聘",
        time: "2024-6-4",
        title: "腾讯招聘",
        contents: "腾讯公司2024年校园招聘正式启动，诚邀你的加入...",
        src: ""
      },
      {
        id: 4,
        type: "国家政策",
        time: "2024-5-9",
        title: "国家气象局招聘",
        contents: "国家气象局面向全国招聘气象工作人员，详情如下...",
        src: ""
      },
      {
        id: 5,
        type: "自治区政策",
        time: "2024-8-9",
        title: "国家石油新疆公司招聘",
        contents: "国家石油新疆公司2024年度招聘开始，欢迎各界人才...",
        src: ""
      }
    ]
  },

  // 生命周期函数--监听页面加载
  onLoad: function() {
    this.updateTotal();
  },

  // 更新公告总数
  updateTotal: function() {
    this.setData({
      total: this.data.notices.length
    });
  },

  // 搜索框输入变化处理
  onSearchChange: function(e) {
    this.setData({
      noticeSearchKey: e.detail
    });
  },

  // 搜索提交处理
  onSearch: function() {
    // 实现搜索逻辑
    console.log('搜索关键词:', this.data.noticeSearchKey);
    // 这里可以添加搜索接口调用
  },

  // 跳转到公告详情页
  navigateToNoticeDetail: function(e) {
    const noticeId = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/notice_details/notice_details?id=${noticeId}`
    });
  },

  // 下拉刷新
  onPullDownRefresh: function() {
    // 实现下拉刷新逻辑
    wx.stopPullDownRefresh();
  },

  // 上拉加载更多
  onReachBottom: function() {
    // 实现加载更多逻辑
  }
});

