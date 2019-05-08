Page({
    data: {
    },
    onLoad: function (options) {
        const context = wx.createCanvasContext('myCanvas')
        var text = '这是一段文字用于文本自动换行文本长度自行设置欢迎大家指出缺陷 ';//这是要绘制的文本
        var chr = text.split("");//这个方法是将一个字符串分割成字符串数组
        var temp = "";
        var row = [];
        context.setFontSize(18)
        context.setFillStyle("#000")
        for (var a = 0; a < chr.length; a++) {
            if (context.measureText(temp).width < 250) {
                temp += chr[a];
            }
            else {
                a--; //这里添加了a-- 是为了防止字符丢失，效果图中有对比
                row.push(temp);
                temp = "";
            }
        }
        row.push(temp);
        //如果数组长度大于2 则截取前两个
        if (row.length > 2) {
            var rowCut = row.slice(0, 2);
            var rowPart = rowCut[1];
            var test = "";
            var empty = [];
            for (var a = 0; a < rowPart.length; a++) {
                if (context.measureText(test).width < 220) {
                    test += rowPart[a];
                }
                else {
                    break;
                }
            }
            empty.push(test);
            var group = empty[0] + "..."//这里只显示两行，超出的用...表示
            rowCut.splice(1, 1, group);
            row = rowCut;
        }
        for (var b = 0; b < row.length; b++) {
            context.fillText(row[b], 10, 30 + b * 30, 300);
        }
        context.draw()
    }
})