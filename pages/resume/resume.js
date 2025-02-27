// 默认头像 URL
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0';

Page({
  // 页面的初始数据
  data: {
    activeTab: 0, // 当前激活的标签页索引
    userInfo: {
      avatarUrl: defaultAvatarUrl,
      name: '',
      title: '',
      phone: '',
      email: '',
      gender: '',
      birthday: '',
      education: ''
    },
    workExperiences: [], // 工作经历数组
    educationExperiences: [], // 教育经历数组
    skillsText: '', // 技能文本输入
    skills: [], // 技能标签数组
    showGenderPicker: false, // 控制性别选择器的显示
    showDatePicker: false, // 控制日期选择器的显示
    showEducationPicker: false, // 控制学历选择器的显示
    genderOptions: ['男', '女'], // 性别选项
    educationOptions: ['高中', '专科', '本科', '硕士', '博士'], // 学历选项
    currentDate: new Date().getTime(), // 当前日期（用于日期选择器）
    minDate: new Date(1900, 0, 1).getTime(), // 最小可选日期
    maxDate: new Date().getTime(), // 最大可选日期（当前日期）
    isEditing: false // 是否处于编辑模式
  },

  // 生命周期函数--监听页面加载
  onLoad() {
    this.loadUserData();
  },

  // 加载用户数据
  loadUserData() {
    // 从本地存储加载用户数据
    const storedData = wx.getStorageSync('userResumeData');
    if (storedData) {
      this.setData(JSON.parse(storedData));
    } else {
      // 如果没有存储的数据，设置默认值
      this.setData({
        userInfo: {
          avatarUrl: defaultAvatarUrl,
          name: '',
          title: '',
          phone: '',
          email: '',
          gender: '',
          birthday: '',
          education: ''
        },
        workExperiences: [],
        educationExperiences: [],
        skillsText: '',
        skills: []
      });
    }
  },

  // 标签页切换处理
  onTabChange(event) {
    this.setData({ activeTab: event.detail.index });
  },

  // 选择头像
  onChooseAvatar() {
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        this.setData({
          'userInfo.avatarUrl': res.tempFilePaths[0]
        });
      }
    });
  },

  // 处理输入字段变化
  onFieldChange(e) {
    const { field } = e.currentTarget.dataset;
    this.setData({
      [`userInfo.${field}`]: e.detail
    });
  },

  // 显示性别选择器
  showGenderPicker() {
    this.setData({ showGenderPicker: true });
  },

  // 确认性别选择
  onGenderConfirm(e) {
    this.setData({
      'userInfo.gender': e.detail.value,
      showGenderPicker: false
    });
  },

  // 关闭性别选择器
  onGenderPickerClose() {
    this.setData({ showGenderPicker: false });
  },

  // 显示日期选择器
  showDatePicker() {
    this.setData({ showDatePicker: true });
  },

  // 确认日期选择
  onDateConfirm(e) {
    this.setData({
      'userInfo.birthday': this.formatDate(new Date(e.detail)),
      showDatePicker: false
    });
  },

  // 关闭日期选择器
  onDatePickerClose() {
    this.setData({ showDatePicker: false });
  },

  // 显示学历选择器
  showEducationPicker() {
    this.setData({ showEducationPicker: true });
  },

  // 确认学历选择
  onEducationConfirm(e) {
    this.setData({
      'userInfo.education': e.detail.value,
      showEducationPicker: false
    });
  },

  // 关闭学历选择器
  onEducationPickerClose() {
    this.setData({ showEducationPicker: false });
  },

  // 添加工作经历
  addWorkExperience() {
    const workExperiences = this.data.workExperiences;
    workExperiences.push({ company: '', position: '', duration: '' });
    this.setData({ workExperiences });
  },

  // 处理工作经历变化
  onWorkExperienceChange(e) {
    const { field, index } = e.currentTarget.dataset;
    const { workExperiences } = this.data;
    workExperiences[index][field] = e.detail;
    this.setData({ workExperiences });
  },

  // 删除工作经历
  deleteWorkExperience(e) {
    const { index } = e.currentTarget.dataset;
    const workExperiences = this.data.workExperiences;
    workExperiences.splice(index, 1);
    this.setData({ workExperiences });
  },

  // 添加教育经历
  addEducationExperience() {
    const educationExperiences = this.data.educationExperiences;
    educationExperiences.push({ school: '', major: '', duration: '' });
    this.setData({ educationExperiences });
  },

  // 处理教育经历变化
  onEducationExperienceChange(e) {
    const { field, index } = e.currentTarget.dataset;
    const { educationExperiences } = this.data;
    educationExperiences[index][field] = e.detail;
    this.setData({ educationExperiences });
  },

  // 删除教育经历
  deleteEducationExperience(e) {
    const { index } = e.currentTarget.dataset;
    const educationExperiences = this.data.educationExperiences;
    educationExperiences.splice(index, 1);
    this.setData({ educationExperiences });
  },

  // 处理技能变化
  onSkillsChange(e) {
    const skillsText = e.detail;
    const skills = skillsText.split(',').map(skill => skill.trim()).filter(skill => skill);
    this.setData({ skillsText, skills });
  },

  // 编辑简历
  editResume() {
    this.setData({ isEditing: true });
    wx.showToast({
      title: '进入编辑模式',
      icon: 'success',
      duration: 2000
    });
  },

  // 保存简历
  saveResume() {
    if (!this.data.isEditing) {
      wx.showToast({
        title: '请先进入编辑模式',
        icon: 'none',
        duration: 2000
      });
      return;
    }

    const resumeData = {
      userInfo: this.data.userInfo,
      workExperiences: this.data.workExperiences,
      educationExperiences: this.data.educationExperiences,
      skills: this.data.skills
    };

    // 保存到本地存储
    wx.setStorageSync('userResumeData', JSON.stringify(resumeData));

    // TODO: 如果需要，这里可以添加将数据发送到服务器的逻辑

    this.setData({ isEditing: false });
    wx.showToast({
      title: '简历保存成功',
      icon: 'success',
      duration: 2000
    });
  },

  // 上传简历
  uploadResume() {
    if (this.data.isEditing) {
      wx.showToast({
        title: '请先保存简历',
        icon: 'none',
        duration: 2000
      });
      return;
    }

    wx.showLoading({
      title: '正在上传简历...',
    });

    // 模拟上传过程
    setTimeout(() => {
      wx.hideLoading();
      wx.showToast({
        title: '简历上传成功',
        icon: 'success',
        duration: 2000
      });
    }, 2000);

    // TODO: 实际的上传逻辑应该在这里实现
    // 可以使用 wx.uploadFile 或者其他适合的方法
  },

  // 格式化日期
  formatDate(date) {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
});

