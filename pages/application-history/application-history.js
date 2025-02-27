Page({
  data: {
    active: 0,
    pendingList: [
      { id: 1, jobTitle: "前端开发工程师", company: "科技有限公司", applyDate: "2024-03-15" },
      { id: 2, jobTitle: "产品经理", company: "互联网金融公司", applyDate: "2024-03-14" },
    ],
    interviewingList: [
      { id: 1, jobTitle: "后端开发工程师", company: "电商平台", interviewDate: "2024-03-20" },
    ],
    acceptedList: [
      { id: 1, jobTitle: "UI设计师", company: "设计工作室", offerDate: "2024-03-10" },
      { id: 2, jobTitle: "数据分析师", company: "大数据公司", offerDate: "2024-03-08" },
      { id: 3, jobTitle: "人力资源专员", company: "人力资源公司", offerDate: "2024-03-05" },
    ],
    rejectedList: [
      { id: 1, jobTitle: "市场营销专员", company: "广告公司", rejectDate: "2024-03-12" },
    ],
  },

  onLoad: function(options) {
    if (options.status) {
      const statusMap = {
        'pending': 0,
        'interviewing': 1,
        'accepted': 2,
        'rejected': 3
      };
      this.setData({
        active: statusMap[options.status] || 0
      });
    }
  },

  onChange(event) {
    this.setData({
      active: event.detail.index
    });
  },

  onPullDownRefresh() {
    // 实现下拉刷新逻辑
    wx.stopPullDownRefresh();
  },

  onReachBottom() {
    // 实现上拉加载更多逻辑
  },

  onShareAppMessage() {
    return {
      title: '我的申请记录',
      path: '/pages/application-history/application-history'
    };
  }
});

