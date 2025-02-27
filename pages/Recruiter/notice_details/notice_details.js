Page({
  data: {
    noticeData: {},
    isFavorite: false
  },

  onLoad: function(options) {
    const noticeId = options.id;
    this.fetchNoticeDetails(noticeId);
    this.checkIfFavorite(noticeId);
  },

  // 获取公告详情
  fetchNoticeDetails: function(noticeId) {
    // 在实际应用中，你需要从API获取公告详情
    // 这里我们使用模拟数据
    const mockNoticeData = {
      id: noticeId,
      title: "2025年春季校园招聘正式启动",
      date: "2024-12-14",
      type: "招聘公告",
      imageUrl: "",
      content: "我们很高兴地宣布，2025年春季校园招聘现已正式启动！我们诚挚邀请全国各高校的优秀毕业生加入我们的团队。本次招聘涵盖技术研发、产品设计、市场营销、人力资源等多个岗位。我们提供具有竞争力的薪酬待遇、广阔的职业发展空间和丰富的培训机会。如果你对我们的岗位感兴趣，请密切关注我们的招聘动态，并通过官方渠道提交你的申请。让我们一起创造未来！"
    };

    this.setData({
      noticeData: mockNoticeData
    });
  },

  // 检查是否已收藏
  checkIfFavorite: function(noticeId) {
    // 在实际应用中，你需要检查本地存储或通过API来确定是否已收藏
    // 这里我们使用随机布尔值模拟
    const isFavorite = Math.random() < 0.5;
    this.setData({ isFavorite });
  },

  // 切换收藏状态
  toggleFavorite: function() {
    const newFavoriteStatus = !this.data.isFavorite;
    // 在实际应用中，你需要更新本地存储或通过API更新收藏状态
    this.setData({ isFavorite: newFavoriteStatus });
    
    wx.showToast({
      title: newFavoriteStatus ? '已收藏' : '已取消收藏',
      icon: 'success',
      duration: 2000
    });
  },

  // 分享功能
  onShareAppMessage: function() {
    return {
      title: this.data.noticeData.title,
      path: '/pages/notice_details/notice_details?id=' + this.data.noticeData.id
    };
  },

  // 下拉刷新
  onPullDownRefresh: function() {
    this.fetchNoticeDetails(this.data.noticeData.id);
    wx.stopPullDownRefresh();
  },

  // 上拉加载更多
  onReachBottom: function() {
    // 如果需要实现无限滚动，可以在这里添加逻辑
  }
});

