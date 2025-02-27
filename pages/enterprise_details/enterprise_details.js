Page({
  data: {
    enterpriseData: {},
    isFavorite: false
  },

  onLoad: function(options) {
    const enterpriseId = options.id;
    this.fetchEnterpriseDetails(enterpriseId);
    this.checkIfFavorite(enterpriseId);
  },

  // 获取企业详情
  fetchEnterpriseDetails: function(enterpriseId) {
    // 在实际应用中，你需要从API获取企业详情
    // 这里我们使用模拟数据
    const mockEnterpriseData = {
      id: enterpriseId,
      name: "科技创新有限公司",
      logo: "",
      industry: "互联网/人工智能",
      size: "500-1000人",
      location: "北京市朝阳区科技园区1号楼",
      description: "我们是一家致力于人工智能和大数据技术创新的科技公司。自成立以来，我们一直专注于为各行各业提供智能化解决方案，推动传统产业的数字化转型。我们的团队由来自世界顶尖大学和科技公司的精英组成，拥有深厚的技术积累和丰富的行业经验。",
      jobCount: 15
    };

    this.setData({
      enterpriseData: mockEnterpriseData
    });
  },

  // 检查是否已收藏
  checkIfFavorite: function(enterpriseId) {
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

  // 跳转到在招岗位列表
  goToJobList: function() {
    wx.navigateTo({
      url: `/pages/enterprise_jobs/enterprise_jobs?id=${this.data.enterpriseData.id}`
    });
  },

  // 分享功能
  onShareAppMessage: function() {
    return {
      title: this.data.enterpriseData.name,
      path: '/pages/enterprise_details/enterprise_details?id=' + this.data.enterpriseData.id
    };
  },

  // 下拉刷新
  onPullDownRefresh: function() {
    this.fetchEnterpriseDetails(this.data.enterpriseData.id);
    wx.stopPullDownRefresh();
  },

  // 上拉加载更多
  onReachBottom: function() {
    // 如果需要实现加载更多相关信息，可以在这里添加逻辑
  }
});

