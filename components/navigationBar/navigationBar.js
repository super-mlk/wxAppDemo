const app = getApp()
Component({
    options: {
        multipleSlots: true
    },
    properties: {
        backgroundColor: {
            type: String,
            value: 'rgba(0,0,0,0)'
        }
    },
    data: {},
    ready() {
        let {
            statusBarHeight,
            navBarHeight
        } = app.globalData;
        this.setData({
            statusBarHeight,
            navBarHeight
        })
    },
    methods: {
        back() {
            wx.navigateBack({
                delta: 1
            })
        }
    }
})