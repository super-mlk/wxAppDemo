Component({
    properties: {},
    methods: {
        onTap() {
            const myEventDetail = { count: 1 } // detail对象，提供给事件监听函数
            const myEventOption = {} // 触发事件的选项
            this.triggerEvent('myevent', myEventDetail, myEventOption)
        }
    }
})