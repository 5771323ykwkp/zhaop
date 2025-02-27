Page({
  data: {
    jobData: {},
    similarJobs: [],
    isFavorite: false
  },

  onLoad: function(options) {
    const jobId = options.id;
    this.fetchJobDetails(jobId);
    this.fetchSimilarJobs(jobId);
    this.checkIfFavorite(jobId);
  },

  fetchJobDetails: function(jobId) {
    // 在实际应用中，你需要从API获取职位详情
    // 这里我们使用模拟数据
    const mockJobData = {
      id: jobId,
      title: "高级前端工程师",
      salary: "25k-35k",
      company: "科技有限公司",
      location: "北京",
      tags: ["五险一金", "年终奖", "加班补助"],
      description: "负责公司核心产品前端开发，包括但不限于PC端、移动端的开发和优化。参与产品需求分析和功能设计，确保产品的可用性和性能。",
      requirements: "1. 本科及以上学历，计算机相关专业；\n2. 3年以上前端开发经验；\n3. 精通HTML、CSS、JavaScript，熟悉主流前端框架如React、Vue等；\n4. 有良好的代码风格和编程习惯，注重代码质量；\n5. 具备良好的沟通能力和团队协作精神。",
      workHours: "周一至周五 9:00-18:00，每周双休",
      workLocation: "北京市朝阳区科技园区1号楼"
    };

    this.setData({
      jobData: mockJobData
    });
  },

	// 职位推荐数据获取
  fetchSimilarJobs: function(jobId) {
    // 在实际应用中，你需要从API获取相似职位
    // 这里我们使用模拟数据
    const mockSimilarJobs = [
      { id: 2, title: "中级前端工程师", salary: "15k-25k" },
      { id: 3, title: "高级后端工程师", salary: "30k-45k" },
      { id: 4, title: "产品经理", salary: "20k-35k" }
    ];

    this.setData({
      similarJobs: mockSimilarJobs
    });
  },

  checkIfFavorite: function(jobId) {
    // 在实际应用中，你需要检查本地存储或通过API来确定是否已收藏
    // 这里我们使用随机布尔值模拟
    const isFavorite = Math.random() < 0.5;
    this.setData({ isFavorite });
  },

  applyJob: function() {
    wx.showModal({
      title: '投递简历',
      content: '确定要投递该职位吗？',
      success: (res) => {
        if (res.confirm) {
          wx.showToast({
            title: '申请成功',
            icon: 'success',
            duration: 2000
          });
        }
      }
    });
  },

	// 点击收藏按钮
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

	// 跳转到相似职位列表
  goToJobDetail: function(e) {
    const jobId = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/job_details/job_details?id=${jobId}`
    });
  },
	// 点击返回首页按钮
  goToHome: function() {
    wx.switchTab({
      url: '/pages/home/homs'
    });
  },
	// goToHome: function() {
	// 	console.log("返回首页按钮被点击");
	// 	wx.switchTab({
	// 		url: '/pages/home/home',
	// 		success: function() {
	// 			console.log("成功返回首页");
	// 		},
	// 		fail: function(err) {
	// 			console.error("返回首页失败: ", err);
	// 		}
	// 	});
	// }
	
  onShareAppMessage: function() {
    return {
      title: this.data.jobData.title,
      path: '/pages/job_details/job_details?id=' + this.data.jobData.id
    };
  },

  onPullDownRefresh: function() {
    this.fetchJobDetails(this.data.jobData.id);
    this.fetchSimilarJobs(this.data.jobData.id);
    wx.stopPullDownRefresh();
  },

  onReachBottom: function() {
    // 如果需要实现加载更多相似职位，可以在这里添加逻辑
  }
});

