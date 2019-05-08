//index.js
//获取应用实例
const app = getApp()
// 引入bossAPI
const bossAPI = require("../../common/API/bossAPI.js")

Page({
    data: {
        motto: 'Hello World',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        name: "A",
        msg: "擦"
    },
    //事件处理函数
    bindViewTap: function () {
        wx.navigateTo({
            url: '../logs/logs'
        })
    },
    onLoad: function () {
        if (app.globalData.userInfo) {
            this.setData({
                userInfo: app.globalData.userInfo,
                hasUserInfo: true
            })
        } else if (this.data.canIUse) {
            // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
            // 所以此处加入 callback 以防止这种情况
            app.userInfoReadyCallback = res => {
                this.setData({
                    userInfo: res.userInfo,
                    hasUserInfo: true
                })
            }
        } else {
            // 在没有 open-type=getUserInfo 版本的兼容处理
            wx.getUserInfo({
                success: res => {
                    app.globalData.userInfo = res.userInfo
                    this.setData({
                        userInfo: res.userInfo,
                        hasUserInfo: true
                    })
                }
            })
        }



    },
    onShow:function(){
        var that = this;
        // that.getConstructorList();
        that.selectComponent('#music-component').onShow()
    },
    onHide:function(){
        that.selectComponent('#music-component').onHide()
    },
    getUserInfo: function (e) {
        console.log(e)
        app.globalData.userInfo = e.detail.userInfo
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
        })
    },
    handleTap() {
        console.log("11")
        var that = this;
        that.setData({
            name: "c"
        })
    },
    getConstructorList(){
        var that = this;
        var data = {};
        bossAPI.getConstructorList(data,function(res){
            console.log(res,"===res===")
        },function(err){},function(){
            console.log("我是完成")
        })
    },
    onMyevent(e) {
        //e.detail.count // 自定义组件触发事件时提供的detail对象，结果为1
        console.log(e.detail.count,"==e.detail.count==")
    }
})
