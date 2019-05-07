///////页面的request请求都放这里 方便管理
var API = {
    requestDomain: "https://danfossmas-test.beats-digital.com/Api/Handler.ashx?method=",
    networkType: "wifi",
    send: function (opts) {
        var that = this;
        var data = opts.data;
        var method = "POST" || opts.method;
        var headerType = "application/x-www-form-urlencoded" || opts.headerType;
        if (opts.url != "GetOpenID") {
            const app = getApp();
            data.SessionKey = app.data.SessionKey;
            data.OpenID = app.data.OpenID;
        }

        if (that.networkType != "none") {
            wx.request({
                url: that.requestDomain + opts.url,
                data: data,
                method: method,
                header: {
                    'content-type': headerType
                },
                dataType: 'json',
                success: (res) => {
                    if (res.errcode == 2) {
                        wx.showToast({
                            icon: "none",
                            title: '因为您长期未操作，现已回到登录页',
                            success: function () {
                                wx.redirectTo({
                                    url: '/pages/index/index',
                                })
                            }
                        })
                        return;
                    }
                    else if (opts.onSucces) opts.onSucces(res.data);
                },
                fail: (err) => {
                    if (opts.onFail) opts.onFail(err);
                },
                complete:()=>{
                    if (opts.onComplete) opts.onComplete()
                }
            });
        }
        else {
            wx.showToast({
                icon: "none",
                title: '没有网络，查看网络连接',
            })
        }

    },

    //通用login 所有小程序都会有登陆授权操作 去服务器获取sessionkey
    loginWX: function (code) {
        this.send({
            url: "GetOpenID",
            data: {
                code: code
            },
            onSucces: (res) => {
                const app = getApp();
                app.data.SessionKey = res.result.SessionKey;
                app.data.OpenID = res.result.OpenID;
                // setTimeout(()=>{
                //     this.requestCpmId();
                // },1000)
            }
        });
    },

    //判断网络
    // 获取网络状态
    getNetWorkType() {
        var that = this;
        wx.onNetworkStatusChange(function (res) {
            // console.log(res.isConnected,"==isConnected==")
            // console.log(res.networkType,"==networkType===");
            that.networkType = res.networkType;
        })
        wx.getNetworkType({
            success: function (res) {
                const networkType = res.networkType;
                // console.log(networkType,"===========")
                that.networkType = res.networkType;

                if (networkType == "none") {
                    wx.showToast({
                        icon: "none",
                        title: '没有网络，查看网络连接',
                    })
                    return;
                }
            },
        })
    }
};

module.exports = API;