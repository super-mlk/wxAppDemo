// pages/fzwxRequest/fzwxRequest.js
import http from "../../utils/api.js"
Page({

    /**
     * 页面的初始数据
     */
    data: {
        femaleList:[]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        http.femaleNameApi({ // 调用接口，传入参数
            data: {
                page: 1
            },
            success: res => {
                console.log('接口请求成功', res)
                this.setData({
                    femaleList: res.data
                })
            },
            fail: err => {
                console.log(err)
            }
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})