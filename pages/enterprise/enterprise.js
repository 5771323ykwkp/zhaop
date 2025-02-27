Page({
  // 页面的初始数据
  data: {
    enterpriseKey: "", // 搜索关键词
    total: 0, // 企业总数
    enterprises: [
      {
        id: 1,
        name: "中国张三有限服务责任公司",
        logo: "/image/swiper/news.webp",
        scale: "500-1000人",
        type: "互联网",
        location: "新疆乌鲁木齐市高新区",
        tags: ["五险一金", "年终奖", "带薪休假"]
      },
      {
        id: 2,
        name: "新疆李四汽车服务有限公司",
        logo: "/image/swiper/news.webp",
        scale: "100-499人",
        type: "汽车服务",
        location: "新疆乌鲁木齐市经济开发区",
        tags: ["环境优美", "发展空间大", "定期体检"]
      },
      {
        id: 3,
        name: "新疆智慧科技有限公司",
        logo: "/image/swiper/news.webp",
        scale: "1000-2000人",
        type: "科技",
        location: "新疆乌鲁木齐市天山区",
        tags: ["弹性工作", "免费班车", "股票期权"]
			},
			{
        id: 4,
        name: "新疆智慧科技有限公司",
        logo: "/image/swiper/news.webp",
        scale: "1000-2000人",
        type: "科技",
        location: "新疆乌鲁木齐市天山区",
        tags: ["弹性工作", "免费班车", "股票期权"]
      }
    ]
  },

  // 生命周期函数--监听页面加载
  onLoad: function(options) {
    this.updateTotal();
    // 这里可以添加获取企业列表数据的接口调用
  },

  // 更新企业总数
  updateTotal: function() {
    this.setData({
      total: this.data.enterprises.length
    });
  },

  // 搜索框输入变化处理
  onSearchChange: function(e) {
    this.setData({
      enterpriseKey: e.detail
    });
  },

  // 搜索提交处理
  onSearch: function() {
    // 实现搜索逻辑
    console.log('搜索关键词:', this.data.enterpriseKey);
    // 这里可以添加搜索接口调用
  },

  // 跳转到企业详情页
  navigateToDetail: function(e) {
    const enterpriseId = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/enterprise_details/enterprise_details?id=${enterpriseId}`
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

