/*index.js*/
var util = require('../../utils/util.js');
var WxParse = require('../../wxParse/wxParse.js');
Page({  
  data: {    
    newsDetail: { "author": "", "categoryId": 1330, "commentNumber": 169, "content": "", "id": 2812, "income": "", "isRecommend": false, "keywords": "", "paixu": 0, "pic": "cloud://wxxc-5bc915.7778-wxxc-5bc915/ygm.jpg", "status": 2, "statusStr": "审核通过", "tags": "", "title": "免漆套装门！衣柜门", "uid": 0, "unusefulNumber": 0, "usefulNumber": 0, "userId": 3387, "views": 46},
		dateAdd : "",
		content : ""
	},
	onLoad: function (options) { 
		var _this = this;
		console.log(options.id) 
		util.requestFun({
    //  url: 'cms/news/detail?id='+options.id,
      success: function(res){
        var contentTemp = WxParse.wxParse('content', 'html', res.data.data.content , _this, 5);
        _this.setData({
       //   newsDetail : res.data.data,
          //dateAdd : res.data.data.dateAdd.split(" ")[0],
          //content : contentTemp
        })
      }
    })
	} 
})