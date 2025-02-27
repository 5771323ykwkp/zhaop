Page({
  data: {
    activeTab: 'pending',
    pendingList: [],
    approvedList: [],
    rejectedList: []
  },

  onLoad() {
    // 页面加载时立即获取数据
    this.loadResumeData();
  },

  onShow() {
    // 页面显示时刷新数据
    this.loadResumeData();
  },

  loadResumeData() {
    // 模拟从服务器获取数据
    const mockData = [
      {
        id: 1,
        name: '张三',
        avatar: '',
        position: '前端工程师',
        education: '本科',
        experience: '3年经验'
      },
      {
        id: 2,
        name: '李四',
        avatar: '',
        position: '产品经理',
        education: '硕士',
        experience: '5年经验'
      },
      {
        id: 3,
        name: '王五',
        avatar: '',
        position: 'UI设计师',
        education: '本科',
        experience: '2年经验'
      }
    ];

    // 使用setData更新数据
    this.setData({
      pendingList: mockData
    });
  },

  onTabChange(event) {
    this.setData({
      activeTab: event.detail.name
    });
  },

  viewResumeDetail(event) {
    const { id } = event.currentTarget.dataset;
    wx.navigateTo({
      url: `/pages/Recruiter/resume-detail/resume-detail?id=${id}`
    });
  },

  approveResume(event) {
    const { id } = event.currentTarget.dataset;
    const resume = this.data.pendingList.find(item => item.id === id);
    
    if (resume) {
      // 从待筛选列表中移除
      const newPendingList = this.data.pendingList.filter(item => item.id !== id);
      // 添加到已通过列表
      const newApprovedList = [...this.data.approvedList, resume];
      
      this.setData({
        pendingList: newPendingList,
        approvedList: newApprovedList
      });

      wx.showToast({
        title: '已通过',
        icon: 'success'
      });
    }
  },

  rejectResume(event) {
    const { id } = event.currentTarget.dataset;
    const resume = this.data.pendingList.find(item => item.id === id);
    
    if (resume) {
      // 从待筛选列表中移除
      const newPendingList = this.data.pendingList.filter(item => item.id !== id);
      // 添加到已拒绝列表
      const newRejectedList = [...this.data.rejectedList, resume];
      
      this.setData({
        pendingList: newPendingList,
        rejectedList: newRejectedList
      });

      wx.showToast({
        title: '已拒绝',
        icon: 'success'
      });
    }
  }
});

