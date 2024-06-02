// pages/login/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //两个用于学生登录的变量
    stuId:'',//学号
    password:'',//密码

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  login(){
    const postData={
      stuId : this.data.stuId,
      password : this.data.password

    }
    //向接口发出请求
    wx.request({
      url: 'http://localhost:3000/login',
      data:postData,
      method:'POST',
      success(res){
        console.log(res)
        if(res.data.code == -1){
          wx.showToast({
            title: res.data.msg,
            icon:'none'
          })
          return
        }else{
          wx.setStorageSync('token', res.data.data.cookie),
          wx.showToast({
            title: "登录成功",
            icon:'none'
          })
        }
    
      
       
      }
    })

   
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})