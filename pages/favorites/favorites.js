Page({
  data: {
    active: 0,
    favoriteNotices: [
      { id: 1, title: "2025年春季校园招聘正式启动", date: "2024-12-14" },
      { id: 2, title: "关于举办2024年冬季双选会的通知", date: "2024-12-13" },
      { id: 3, title: "2024年应届生招聘政策更新公告", date: "2024-12-12" }
    ],
    favoriteJobs: [
      { id: 1, title: "高级前端工程师", company: "科技有限公司", salary: "25k-35k" },
      { id: 2, title: "产品经理", company: "互联网金融公司", salary: "20k-30k" },
      { id: 3, title: "数据分析师", company: "电商平台", salary: "18k-28k" }
    ],
    favoriteEnterprises: [
      { id: 1, name: "科技创新有限公司", industry: "互联网/人工智能", logo: "" },
      { id: 2, name: "未来金融集团", industry: "金融科技", logo: "" },
      { id: 3, name: "智慧教育科技", industry: "教育科技", logo: "" }
    ]
  },

  onLoad: function(options) {
    // 页面加载时可以从服务器获取收藏数据
  },

  onTabChange: function(event) {
    this.setData({ active: event.detail.index });
  },

  goToNoticeDetail: function(event) {
    const noticeId = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/notice_details/notice_details?id=${noticeId}`
    });
  },

  goToJobDetail: function(event) {
    const jobId = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/job_details/job_details?id=${jobId}`
    });
  },

  goToEnterpriseDetail: function(event) {
    const enterpriseId = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/enterprise_details/enterprise_details?id=${enterpriseId}`
    });
  },

  removeFavorite: function(event) {
    const { type, id } = event.currentTarget.dataset;
    let listName, title;

    switch (type) {
      case 'notice':
        listName = 'favoriteNotices';
        title = '公告';
        break;
      case 'job':
        listName = 'favoriteJobs';
        title = '职位';
        break;
      case 'enterprise':
        listName = 'favoriteEnterprises';
        title = '企业';
        break;
    }

    wx.showModal({
      title: '确认删除',
      content: `确定要取消收藏这个${title}吗？`,
      success: (res) => {
        if (res.confirm) {
          const updatedList = this.data[listName].filter(item => item.id !== id);
          this.setData({
            [listName]: updatedList
          });

          wx.showToast({
            title: '已取消收藏',
            icon: 'success',
            duration: 2000
          });

          // 在实际应用中，你还需要向服务器发送请求以更新用户的收藏状态
        }
      }
    });
  },

  onPullDownRefresh: function() {
    // 实现下拉刷新逻辑
    wx.stopPullDownRefresh();
  },

  onReachBottom: function() {
    // 实现上拉加载更多逻辑
  },

  onShareAppMessage: function() {
    return {
      title: '我的收藏',
      path: '/pages/favorites/favorites'
    };
  }
});

