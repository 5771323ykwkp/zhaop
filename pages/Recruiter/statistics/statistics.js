Page({
  data: {
    activeTab: 0,
    activeJobs: [
      {
        id: 1,
        title: '高级前端工程师',
        salary: '25k-35k',
        location: '北京',
        views: 1200,
        applications: 56,
        interviews: 8
      },
      {
        id: 2,
        title: '产品经理',
        salary: '20k-30k',
        location: '上海',
        views: 980,
        applications: 43,
        interviews: 5
      },
      {
        id: 3,
        title: 'UI设计师',
        salary: '15k-25k',
        location: '广州',
        views: 750,
        applications: 38,
        interviews: 4
      }
    ],
    inactiveJobs: [
      {
        id: 4,
        title: 'Java后端工程师',
        salary: '30k-45k',
        location: '深圳',
        views: 1500,
        applications: 72,
        interviews: 10
      },
      {
        id: 5,
        title: '运营专员',
        salary: '10k-15k',
        location: '杭州',
        views: 620,
        applications: 28,
        interviews: 3
      }
    ]
  },

  onTabChange(event) {
    this.setData({
      activeTab: event.detail.index
    });
  },

  stopJob(event) {
    const jobId = event.currentTarget.dataset.id;
    const job = this.data.activeJobs.find(job => job.id === jobId);
    
    if (job) {
      // Remove job from activeJobs
      const updatedActiveJobs = this.data.activeJobs.filter(job => job.id !== jobId);
      
      // Add job to inactiveJobs
      const updatedInactiveJobs = [...this.data.inactiveJobs, job];
      
      this.setData({
        activeJobs: updatedActiveJobs,
        inactiveJobs: updatedInactiveJobs
      });
      
      wx.showToast({
        title: '职位已停止',
        icon: 'success'
      });
    }
  },

  reactivateJob(event) {
    const jobId = event.currentTarget.dataset.id;
    const job = this.data.inactiveJobs.find(job => job.id === jobId);
    
    if (job) {
      // Remove job from inactiveJobs
      const updatedInactiveJobs = this.data.inactiveJobs.filter(job => job.id !== jobId);
      
      // Add job to activeJobs
      const updatedActiveJobs = [...this.data.activeJobs, job];
      
      this.setData({
        activeJobs: updatedActiveJobs,
        inactiveJobs: updatedInactiveJobs
      });
      
      wx.showToast({
        title: '职位已重新发布',
        icon: 'success'
      });
    }
  },

  onLoad() {
    // 这里可以添加获取实际数据的逻辑
  },

  onPullDownRefresh() {
    // 添加下拉刷新逻辑
    wx.stopPullDownRefresh();
  }
});

