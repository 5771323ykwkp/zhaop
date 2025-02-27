Page({
  data: {
    notice: "中国移动2025年春季招聘工作开始了，请各个朋友们积极投递简历",
    swiperList: [
      {
        id: 1,
        imageUrl: "/image/swiper/swiper1.webp"
      },
      {
        id: 2,
        imageUrl: "/image/swiper/swiper2.webp"
      },
      {
        id: 3,
        imageUrl: "/image/swiper/swiper3.webp"
      }
    ],
    featuredEnterprises: [
      {
        id: 1,
        name: "腾讯科技",
        logo: "",
        industry: "互联网",
        scale: "10000人以上"
      },
      {
        id: 2,
        name: "阿里巴巴",
        logo: "",
        industry: "电子商务",
        scale: "10000人以上"
      },
      {
        id: 3,
        name: "字节跳动",
        logo: "",
        industry: "互联网",
        scale: "10000人以上"
      },
      {
        id: 4,
        name: "华为技术",
        logo: "",
        industry: "通信设备",
        scale: "10000人以上"
      }
    ],
    recommendedJobs: [
      {
        id: 1,
        title: "高级前端工程师",
        salary: "25k-35k",
        company: "腾讯科技",
        location: "深圳",
        tags: ["五险一金", "年终奖", "股票期权"]
      },
      {
        id: 2,
        title: "产品经理",
        salary: "20k-30k",
        company: "阿里巴巴",
        location: "杭州",
        tags: ["双休", "免费三餐", "带薪年假"]
      },
      {
        id: 3,
        title: "Android开发工程师",
        salary: "30k-45k",
        company: "字节跳动",
        location: "北京",
        tags: ["弹性工作", "免费班车", "补充医疗"]
      }
    ],
    latestNotices: [
      {
        id: 1,
        title: "2025年春季校园招聘正式启动",
        time: "2024-12-14"
      },
      {
        id: 2,
        title: "关于举办2024年冬季双选会的通知",
        time: "2024-12-13"
      },
      {
        id: 3,
        title: "2024年应届生招聘政策更新公告",
        time: "2024-12-12"
      }
    ],
    menuItems: [
      { id: 1, text: "通知公告", icon: "/image/menu/notice.png", action: "notice" },
      { id: 2, text: "申请职位", icon: "/image/menu/job.png", action: "job" },
      { id: 3, text: "企业库", icon: "/image/menu/enterprise.png", action: "enterprise" },
      { id: 4, text: "个人简历", icon: "/image/menu/resume.png", action: "resume" }
    ]
  },

  // 轮播图点击事件
  onSwiperTap(e) {
		wx.switchTab({
			url: '/pages/job/job',
		})
    const id = e.currentTarget.dataset.id;
    console.log('轮播图点击:', id);
  },

  // 导航按钮点击事件
  notice() {
    console.log('点击了公告按钮');
    wx.switchTab({
      url: '/pages/notice/notice'
    });
  },

  job() {
    console.log('点击了职位按钮');
    wx.switchTab({
      url: '/pages/job/job'
    });
  },

  enterprise() {
    console.log('点击了企业库按钮');
    wx.switchTab({
      url: '/pages/enterprise/enterprise'
    });
  },

  resume() {
    console.log('点击了个人简历按钮');
    wx.navigateTo({
      url: '/pages/resume/resume'
    });
  },

  // 查看更多点击事件
  viewMoreEnterprises() {
    wx.switchTab({
      url: '/pages/enterprise/enterprise'
    });
  },

  viewMoreJobs() {
    wx.switchTab({
      url: '/pages/job/job'
    });
  },

  viewMoreNotices() {
    wx.switchTab({
      url: '/pages/notice/notice'
    });
  },

  // 详情页跳转事件
  goToEnterpriseDetail(e) {
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/enterprise-detail/enterprise-detail?id=${id}`
    });
  },

  goToJobDetail(e) {
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/job-detail/job-detail?id=${id}`
    });
  },

  goToNoticeDetail(e) {
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/notice-detail/notice-detail?id=${id}`
    });
  },

  onLoad() {
    // 页面加载时可以从服务器获取数据
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
      title: '求职招聘系统',
      path: '/pages/home/home'
    };
  }
});

