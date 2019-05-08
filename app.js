//app.js
const API = require('./common/API/API.js')
App({
    onLaunch: function() {
        // 展示本地存储能力
        var logs = wx.getStorageSync('logs') || []
        logs.unshift(Date.now())
        wx.setStorageSync('logs', logs)

        // 登录
        wx.login({
            success: res => {
                // 发送 res.code 到后台换取 openId, sessionKey, unionId
                if (res.code) {
                    // API.loginWX(res.code);
                } else {
                    console.log('登录失败!' + res.errMsg)
                }
            }
        })
        // 获取用户信息
        wx.getSetting({
            success: res => {
                if (res.authSetting['scope.userInfo']) {
                    // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
                    wx.getUserInfo({
                        success: res => {
                            // 可以将 res 发送给后台解码出 unionId
                            this.globalData.userInfo = res.userInfo

                            // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
                            // 所以此处加入 callback 以防止这种情况
                            if (this.userInfoReadyCallback) {
                                this.userInfoReadyCallback(res)
                            }
                        }
                    })
                }
            }
        })

        // 获取手机系统信息
        wx.getSystemInfo({
            success: res => {
                //导航高度
                this.globalData.navHeight = res.statusBarHeight + 46;
                this.globalData.statusBarHeight = res.statusBarHeight
                this.globalData.navBarHeight = 44 + res.statusBarHeight
            },
            fail(err) {
                console.log(err);
            }
        })
    },
    data: {
        SessionKey: null,
        OpenID: null
    },
    globalData: {
        userInfo: null,
        navHeight: 0,
        statusBarHeight: 0,
        screenHeight: 0
    }
})