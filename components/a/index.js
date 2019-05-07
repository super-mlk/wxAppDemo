const app = getApp();
Component({
    onMyEvent(e) {
        e.detail.count // 自定义组件触发事件时提供的detail对象，结果为1
    }
})
