Page({

    /**
     * 页面的初始数据
     */
    data: {
        canvasImg:""
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        // 使用 wx.createContext 获取绘图上下文 context
        const context = wx.createCanvasContext('firstCanvas');
        context.setStrokeStyle('#00ff00')
        context.setLineWidth(5)
        context.rect(0, 0, 200, 200)
        context.stroke()
       

        // context.setFontSize(20);
        // context.setFillStyle("#F00")
        // context.fillText('Hello',20 , 20);
        // context.fillText('Mina', 120, 120);

        // 合成图片
        context.drawImage("/assets/images/a1.jpg",0,0,300,200);
         context.setFontSize(20);
         context.setFillStyle("#F00")
        context.fillText('￥120',20 , 200);
        context.draw()

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        var canvasWidth;
        var canvasHeight;
        wx.createSelectorQuery().select('#firstCanvas').boundingClientRect(function (rect) {
            console.log(rect,"==rect==")
            canvasWidth = rect.width;
            canvasHeight = rect.height;
            console.log(canvasWidth, "==canvasWidth=")
        }).exec();

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
        var that = this;
        var canvasImg = that.data.canvasImg;
        console.log(canvasImg,"==canvasImg==")
        return {
            title: '合成的图片', //自定义转发标题
            path: '/page/user?id=123', //分享页面路径
            imageUrl: canvasImg //分享图片 宽高比 5:4
        }
    },
    canvasIdErrorCallback(e) {
        console.log(e.detail.errMsg);
    },
    export(){
        var that = this;
        wx.canvasToTempFilePath({
            canvasId: 'firstCanvas',
            // x: 0,
            // y: 0,
            // width: 100,
            // height: 100,
            success(res) {
                console.log(res.tempFilePath,"===res==")
                that.setData({
                    canvasImg: res.tempFilePath
                })
                // wx.saveImageToPhotosAlbum({
                //     filePath: res.tempFilePath,
                //     success: (res) => {
                //         console.log(res.tempFilePath,"==tempFilePath==")
                //     },
                //     fail: (err) => {
                //         console.error(err)
                //     }
                // })
            }
        })
    }
})