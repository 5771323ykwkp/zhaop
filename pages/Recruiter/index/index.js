Page({
  // 页面的初始数据
  data: {
    // 状态栏高度
		statusBarHeight: 0,
		// 公告内容
		notice:"根据国家数据统计我国今年毕业人数1000多万，所以国家规定企业鼓励招聘优秀的人才为企业发展奠定基础，行动起来！！！",
    // 轮播图数据
    bannerList: [
      {
        id: 1,
        imageUrl: '/image/swiper/swiper1.webp'
      },
      {
        id: 2,
        imageUrl: '/image/swiper/swiper2.webp'
      },
      {
        id: 3,
        imageUrl: '/image/swiper/swiper3.webp'
      }
    ],
    // 最新动态数据
    newsList: [
      {
        id: 1,
        title: '2024年春季招聘会即将开始',
        time: '2024-01-15',
        image: ''
      },
      {
        id: 2,
        title: '关于企业招聘补贴政策的通知',
        time: '2024-01-14',
        image: ''
      },
      {
        id: 3,
        title: '新版招聘系统功能更新说明',
        time: '2024-01-13',
        image: ''
			},
			{
					id: 4,
					title: '新版招聘系统功能更新说明',
					time: '2024-01-13',
					image: ''
			}
    ]
  },

  // 生命周期函数--监听页面加载
  onLoad() {
    // 获取系统信息，设置状态栏高度
    const systemInfo = wx.getSystemInfoSync();
    this.setData({
      statusBarHeight: systemInfo.statusBarHeight
    });
  },

  // 生命周期函数--监听页面显示
  onShow() {
    // 检查用户角色
    this.checkRecruiterRole();
  },

  // 页面跳转方法（根据database.url跳转到相应的页面）
  navigateTo(e) {
		// 创建一个url变量，获取用户点击的按钮URL
		const url = e.currentTarget.dataset.url;
		
    wx.navigateTo({
      url: url
		});
		// wx.showModal({
		// 	title: '提示',
		// 	content: '系统某些模块正在开发中，请激情等待！！',
		// 	complete: (res) => {
		// 		// 当户点击取消时
		// 		if (res.cancel) {
		// 			wx.showLoading({
		// 				title: '激情开发中！！！',
		// 			})
		// 		}
		// 		// 当用户点击确定按钮时
		// 		if (res.confirm) {
		// 			wx.reLaunch({
		// 				url: '/pages/index/index',
		// 			})
		// 		}
		// 	}
		// })
  },

	// 跳转到公告详情页面
	notice:function(){
		wx.navigateTo({
			url: '/pages/Recruiter/notice_details/notice_details',
		})
	},

	// 企业端企业登录和注册
	logins:function(){
		wx.navigateTo({
			url: '/pages/Recruiter/logins/logins',
		})
	},

  // 检查用户是否为企业用户
  checkRecruiterRole() {
    const role = wx.getStorageSync('userRole');
    if (role !== 'recruiter') {
      wx.showModal({
        title: '提示',
        content: '请先选择企业身份',
        showCancel: false,
        success: () => {
          wx.reLaunch({
            url: '/pages/index/index'
          });
        }
      });
    }
  },

  // 禁止页面下拉刷新
  onPullDownRefresh() {
    wx.stopPullDownRefresh();
  }
});

