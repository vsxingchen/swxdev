/*index.js*/
//获取应用实例
const app = getApp()
var util = require('../../utils/util.js');
Page({  
  data: {    
    imgalist: [{ "barCode": "", "categoryId": 6218, "characteristic": "1.5~2.8万元，拎包入住", "commission": 0.00, "commissionType": 0, "dateAdd": "2018-01-18 13:52:11", "dateStart": "2018-01-18 13:51:53", "dateUpdate": "2018-01-18 13:52:19", "gotScore": 0, "gotScoreType": 0, "id": 19132, "kanjia": false, "kanjiaPrice": 0.00, "logisticsId": 0, "minPrice": 0.00, "minScore": 0, "name": "出租房", "numberFav": 0, "numberGoodReputation": 0, "numberOrders": 0, "numberSells": 0, "originalPrice": 0.00, "paixu": 0, "pic": "cloud://wj-38d226.776a-wj-38d226/chuzu.jpg", "pingtuan": false, "pingtuanPrice": 0.00, "recommendStatus": 0, "recommendStatusStr": "普通", "shopId": 0, "status": 0, "statusStr": "上架", "stores": 0, "userId": 3387, "videoId": "", "views": 0, "weight": 0.00 }, { "barCode": "", "categoryId": 6218, "characteristic": "3.9~9.8万，简单拎包入住", "commission": 0.00, "commissionType": 0, "dateAdd": "2018-01-18 13:51:43", "dateStart": "2018-01-18 13:51:23", "dateUpdate": "2018-01-18 13:51:50", "gotScore": 0, "gotScoreType": 0, "id": 19131, "kanjia": false, "kanjiaPrice": 0.00, "logisticsId": 0, "minPrice": 0.00, "minScore": 0, "name": "简单装修", "numberFav": 0, "numberGoodReputation": 0, "numberOrders": 0, "numberSells": 0, "originalPrice": 0.00, "paixu": 0, "pic": "cloud://wj-38d226.776a-wj-38d226/jianzhuang.jpg", "pingtuan": false, "pingtuanPrice": 0.00, "recommendStatus": 0, "recommendStatusStr": "普通", "shopId": 0, "status": 0, "statusStr": "上架", "stores": 0, "userId": 3387, "videoId": "", "views": 0, "weight": 0.00 }, { "barCode": "", "categoryId": 6218, "characteristic": "精装9.8~35万，拎包入住", "commission": 0.00, "commissionType": 0, "dateAdd": "2018-01-18 13:51:06", "dateStart": "2018-01-18 13:50:49", "gotScore": 0, "gotScoreType": 0, "id": 19130, "kanjia": false, "kanjiaPrice": 0.00, "logisticsId": 0, "minPrice": 0.00, "minScore": 0, "name": "豪华装修", "numberFav": 0, "numberGoodReputation": 0, "numberOrders": 0, "numberSells": 0, "originalPrice": 0.00, "paixu": 0, "pic": "cloud://wj-38d226.776a-wj-38d226/jingzhuang.jpg", "pingtuan": false, "pingtuanPrice": 0.00, "recommendStatus": 0, "recommendStatusStr": "普通", "shopId": 0, "status": 0, "statusStr": "上架", "stores": 0, "userId": 3387, "videoId": "", "views": 0, "weight": 0.00 }]
	},
	onLoad: function(){
		var _this = this;
		// 案例列表获取
	    util.requestFun({
	    //  url: 'shop/goods/list?categoryId=6218&pageSize=6',
	      success: function(res){
	        _this.setData({
	         // imgalist : res.data.data
	        })
	      }
	    })
	},
	showImages:function(event){
    app.showImages(event, this.data.imgalist)
  } 
})