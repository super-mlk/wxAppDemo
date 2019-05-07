const API = require('API.js');

var bossAPI = {
    //老板获取施工人员列表
    getConstructorList: function (data, success, fail, complete) {
        API.send({
            url: "GetConstructorList",
            data: {
            },
            onSucces: success,
            onFail: fail,
            onComplete: complete
        })
    },
}

module.exports = bossAPI;