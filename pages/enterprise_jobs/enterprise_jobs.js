Page({
  // 页面的初始数据
  data: {
    jobSearchKey: "", // 搜索关键词
    total: 0, // 职位总数
    jobs: [
      {
        id: 1,
        jobname: "高级前端开发工程师",
        payroll: "15K-25K",
        company: "科技有限公司",
        location: "北京",
        jobcont: "负责公司核心产品的前端开发，优化用户体验，参与技术方案设计。",
        Qualifications: "本科及以上学历，3年以上前端开发经验，精通Vue.js或React。",
        tags: ["五险一金", "年终奖", "弹性工作"]
      },
      {
        id: 2,
        jobname: "产品经理",
        payroll: "20K-35K",
        company: "互联网金融公司",
        location: "上海",
        jobcont: "负责公司金融产品的规划和设计，推动产品落地和迭代优化。",
        Qualifications: "本科及以上学历，5年以上互联网产品经验，有金融产品经验优先。",
        tags: ["股票期权", "免费三餐", "带薪年假"]
      },
      {
        id: 3,
        jobname: "数据分析师",
        payroll: "18K-30K",
        company: "电商平台",
        location: "杭州",
        jobcont: "负责公司核心业务数据的分析和挖掘，为决策提供数据支持。",
        Qualifications: "统计学或计算机相关专业，熟练使用SQL、Python，有机器学习经验优先。",
        tags: ["定期体检", "员工旅游", "技能培训"]
      }
    ]
  },

  // 生命周期函数--监听页面加载
  onLoad: function() {
    this.updateTotal();
  },

  // 更新职位总数
  updateTotal: function() {
    this.setData({
      total: this.data.jobs.length
    });
  },

  // 搜索框输入变化处理
  onSearchChange: function(e) {
    this.setData({
      jobSearchKey: e.detail
    });
  },

  // 搜索提交处理
  onSearch: function() {
    // 实现搜索逻辑
    console.log('搜索关键词:', this.data.jobSearchKey);
    // 这里可以添加搜索接口调用
  },

  // 跳转到职位详情页
  navigateToJobDetail: function(e) {
    const jobId = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/job_details/job_details?id=${jobId}`
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

