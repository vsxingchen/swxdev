//index.js
var util = require('../../utils/util.js');
//获取应用实例
Page({
  data: {
    //banner-轮播配置
    imgUrls: [
      { "businessId": 0, "dateAdd": "2018-01-18 13:56:54", "id": 4046, "linkUrl": "", "paixu": 0, "picUrl": "cloud://wxxc-5bc915.7778-wxxc-5bc915/20181221150335.jpg", "remark": "", "status": 0, "statusStr": "显示", "title": "首页banner2", "type": "banner", "userId": 3387 }, { "businessId": 0, "dateAdd": "2018-01-18 13:56:39", "id": 4045, "linkUrl": "", "paixu": 0, "picUrl": "cloud://wxxc-5bc915.7778-wxxc-5bc915/20181221150504.jpg", "remark": "", "status": 0, "statusStr": "显示", "title": "首页banner1", "type": "banner", "userId": 3387 }
    ],
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 1000,

    // 案例展示
    productImgUrls: [
      { "barCode": "", "categoryId": 6218, "characteristic": "厨柜", "commission": 0.00, "commissionType": 0, "dateAdd": "2018-01-18 13:52:11", "dateStart": "2018-01-18 13:51:53", "dateUpdate": "2018-01-18 13:52:19", "gotScore": 0, "gotScoreType": 0, "id": 19132, "kanjia": false, "kanjiaPrice": 0.00, "logisticsId": 0, "minPrice": 0.00, "minScore": 0, "name": "厨柜", "numberFav": 0, "numberGoodReputation": 0, "numberOrders": 0, "numberSells": 0, "originalPrice": 0.00, "paixu": 0, "pic": "cloud://wxxc-5bc915.7778-wxxc-5bc915/20181221150423.jpg", "pingtuan": false, "pingtuanPrice": 0.00, "recommendStatus": 0, "recommendStatusStr": "普通", "shopId": 0, "status": 0, "statusStr": "上架", "stores": 0, "userId": 3387, "videoId": "", "views": 0, "weight": 0.00 }, { "barCode": "", "categoryId": 6218, "characteristic": "镁钛门", "commission": 0.00, "commissionType": 0, "dateAdd": "2018-01-18 13:51:43", "dateStart": "2018-01-18 13:51:23", "dateUpdate": "2018-01-18 13:51:50", "gotScore": 0, "gotScoreType": 0, "id": 19131, "kanjia": false, "kanjiaPrice": 0.00, "logisticsId": 0, "minPrice": 0.00, "minScore": 0, "name": "镁钛门", "numberFav": 0, "numberGoodReputation": 0, "numberOrders": 0, "numberSells": 0, "originalPrice": 0.00, "paixu": 0, "pic": "cloud://wxxc-5bc915.7778-wxxc-5bc915/20181221150440.jpg", "pingtuan": false, "pingtuanPrice": 0.00, "recommendStatus": 0, "recommendStatusStr": "普通", "shopId": 0, "status": 0, "statusStr": "上架", "stores": 0, "userId": 3387, "videoId": "", "views": 0, "weight": 0.00 }, { "barCode": "", "categoryId": 6218, "characteristic": "电视背景墙", "commission": 0.00, "commissionType": 0, "dateAdd": "2018-01-18 13:51:06", "dateStart": "2018-01-18 13:50:49", "gotScore": 0, "gotScoreType": 0, "id": 19130, "kanjia": false, "kanjiaPrice": 0.00, "logisticsId": 0, "minPrice": 0.00, "minScore": 0, "name": "电视背景墙", "numberFav": 0, "numberGoodReputation": 0, "numberOrders": 0, "numberSells": 0, "originalPrice": 0.00, "paixu": 0, "pic": "cloud://wxxc-5bc915.7778-wxxc-5bc915/20181221150443.jpg", "pingtuan": false, "pingtuanPrice": 0.00, "recommendStatus": 0, "recommendStatusStr": "普通", "shopId": 0, "status": 0, "statusStr": "上架", "stores": 0, "userId": 3387, "videoId": "", "views": 0, "weight": 0.00 }, { "barCode": "", "categoryId": 6218, "characteristic": "卫生间", "commission": 0.00, "commissionType": 0, "dateAdd": "2018-01-18 13:50:47", "dateStart": "2018-01-18 13:50:28", "dateUpdate": "2018-01-18 13:51:14", "gotScore": 0, "gotScoreType": 0, "id": 19128, "kanjia": false, "kanjiaPrice": 0.00, "logisticsId": 0, "minPrice": 0.00, "minScore": 0, "name": "卫生间", "numberFav": 0, "numberGoodReputation": 0, "numberOrders": 0, "numberSells": 0, "originalPrice": 0.00, "paixu": 0, "pic": "cloud://wxxc-5bc915.7778-wxxc-5bc915/20181221150446.jpg", "pingtuan": false, "pingtuanPrice": 0.00, "recommendStatus": 0, "recommendStatusStr": "普通", "shopId": 0, "status": 0, "statusStr": "上架", "stores": 0, "userId": 3387, "videoId": "", "views": 0, "weight": 0.00 }, { "barCode": "", "categoryId": 6218, "characteristic": "电视背景墙", "commission": 0.00, "commissionType": 0, "dateAdd": "2018-01-18 13:50:25", "dateStart": "2018-01-18 13:49:59", "gotScore": 0, "gotScoreType": 0, "id": 19127, "kanjia": false, "kanjiaPrice": 0.00, "logisticsId": 0, "minPrice": 0.00, "minScore": 0, "name": "电视背景墙", "numberFav": 0, "numberGoodReputation": 0, "numberOrders": 0, "numberSells": 0, "originalPrice": 0.00, "paixu": 0, "pic": "cloud://wxxc-5bc915.7778-wxxc-5bc915/20181221150448.jpg", "pingtuan": false, "pingtuanPrice": 0.00, "recommendStatus": 0, "recommendStatusStr": "普通", "shopId": 0, "status": 0, "statusStr": "上架", "stores": 0, "userId": 3387, "videoId": "", "views": 0, "weight": 0.00 }, { "barCode": "", "categoryId": 6218, "characteristic": "吉林长春", "commission": 0.00, "commissionType": 0, "dateAdd": "2018-01-18 13:49:55", "dateStart": "2018-01-18 13:49:38", "gotScore": 0, "gotScoreType": 0, "id": 19126, "kanjia": false, "kanjiaPrice": 0.00, "logisticsId": 0, "minPrice": 0.00, "minScore": 0, "name": "屏风", "numberFav": 0, "numberGoodReputation": 0, "numberOrders": 0, "numberSells": 0, "originalPrice": 0.00, "paixu": 0, "pic": "cloud://wxxc-5bc915.7778-wxxc-5bc915/20181221150451.jpg", "pingtuan": false, "pingtuanPrice": 0.00, "recommendStatus": 0, "recommendStatusStr": "屏风", "shopId": 0, "status": 0, "statusStr": "上架", "stores": 0, "userId": 3387, "videoId": "", "views": 0, "weight": 0.00 }
    ],

    // 小样定制图片
    modelImgUrls: [
      { "barCode": "", "categoryId": 6221, "characteristic": "门小样", "commission": 0.00, "commissionType": 0, "dateAdd": "2018-01-18 13:16:29", "dateStart": "2018-01-18 13:16:06", "gotScore": 0, "gotScoreType": 0, "id": 19121, "kanjia": false, "kanjiaPrice": 0.00, "logisticsId": 0, "minPrice": 0.00, "minScore": 0, "name": "金刚网", "numberFav": 0, "numberGoodReputation": 0, "numberOrders": 0, "numberSells": 0, "originalPrice": 0.00, "paixu": 0, "pic": "cloud://wxxc-5bc915.7778-wxxc-5bc915/20181221150426.jpg", "pingtuan": false, "pingtuanPrice": 0.00, "recommendStatus": 0, "recommendStatusStr": "普通", "shopId": 0, "status": 0, "statusStr": "上架", "stores": 0, "userId": 3387, "videoId": "", "views": 0, "weight": 0.00 }, { "barCode": "", "categoryId": 6221, "characteristic": "小样", "commission": 0.00, "commissionType": 0, "dateAdd": "2018-01-18 13:16:02", "dateStart": "2018-01-18 13:15:36", "gotScore": 0, "gotScoreType": 0, "id": 19120, "kanjia": false, "kanjiaPrice": 0.00, "logisticsId": 0, "minPrice": 0.00, "minScore": 0, "name": "金刚网", "numberFav": 0, "numberGoodReputation": 0, "numberOrders": 0, "numberSells": 0, "originalPrice": 0.00, "paixu": 0, "pic": "cloud://wxxc-5bc915.7778-wxxc-5bc915/20181221150430.jpg", "pingtuan": false, "pingtuanPrice": 0.00, "recommendStatus": 0, "recommendStatusStr": "普通", "shopId": 0, "status": 0, "statusStr": "上架", "stores": 0, "userId": 3387, "videoId": "", "views": 0, "weight": 0.00 }, { "barCode": "", "categoryId": 6221, "characteristic": "金刚网", "commission": 0.00, "commissionType": 0, "dateAdd": "2018-01-18 13:15:30", "dateStart": "2018-01-18 13:15:09", "gotScore": 0, "gotScoreType": 0, "id": 19119, "kanjia": false, "kanjiaPrice": 0.00, "logisticsId": 0, "minPrice": 0.00, "minScore": 0, "name": "双玻小样", "numberFav": 0, "numberGoodReputation": 0, "numberOrders": 0, "numberSells": 0, "originalPrice": 0.00, "paixu": 0, "pic": "cloud://wxxc-5bc915.7778-wxxc-5bc915/20181221150434.jpg", "pingtuan": false, "pingtuanPrice": 0.00, "recommendStatus": 0, "recommendStatusStr": "普通", "shopId": 0, "status": 0, "statusStr": "上架", "stores": 0, "userId": 3387, "videoId": "", "views": 0, "weight": 0.00 }, { "barCode": "", "categoryId": 6221, "characteristic": "屏风", "commission": 0.00, "commissionType": 0, "dateAdd": "2018-01-18 13:15:08", "dateStart": "2018-01-18 13:14:42", "gotScore": 0, "gotScoreType": 0, "id": 19118, "kanjia": false, "kanjiaPrice": 0.00, "logisticsId": 0, "minPrice": 0.00, "minScore": 0, "name": "屏风", "numberFav": 0, "numberGoodReputation": 0, "numberOrders": 0, "numberSells": 0, "originalPrice": 0.00, "paixu": 0, "pic": "cloud://wxxc-5bc915.7778-wxxc-5bc915/20181221150559.jpg", "pingtuan": false, "pingtuanPrice": 0.00, "recommendStatus": 0, "recommendStatusStr": "普通", "shopId": 0, "status": 0, "statusStr": "上架", "stores": 0, "userId": 3387, "videoId": "", "views": 0, "weight": 0.00 }, { "barCode": "", "categoryId": 6221, "characteristic": "白色小样", "commission": 0.00, "commissionType": 0, "dateAdd": "2018-01-18 13:14:39", "dateStart": "2018-01-18 13:14:24", "gotScore": 0, "gotScoreType": 0, "id": 19117, "kanjia": false, "kanjiaPrice": 0.00, "logisticsId": 0, "minPrice": 0.00, "minScore": 0, "name": "屏风", "numberFav": 0, "numberGoodReputation": 0, "numberOrders": 0, "numberSells": 0, "originalPrice": 0.00, "paixu": 0, "pic": "cloud://wxxc-5bc915.7778-wxxc-5bc915/20181221150604.jpg", "pingtuan": false, "pingtuanPrice": 0.00, "recommendStatus": 0, "recommendStatusStr": "普通", "shopId": 0, "status": 0, "statusStr": "上架", "stores": 0, "userId": 3387, "videoId": "", "views": 0, "weight": 0.00 }, { "barCode": "", "categoryId": 6221, "characteristic": "镁钛门", "commission": 0.00, "commissionType": 0, "dateAdd": "2018-01-18 13:14:04", "dateStart": "2018-01-18 13:12:11", "dateUpdate": "2018-01-18 13:14:20", "gotScore": 0, "gotScoreType": 0, "id": 19116, "kanjia": false, "kanjiaPrice": 0.00, "logisticsId": 0, "minPrice": 0.00, "minScore": 0, "name": "镁钛门", "numberFav": 0, "numberGoodReputation": 0, "numberOrders": 0, "numberSells": 0, "originalPrice": 0.00, "paixu": 0, "pic": "cloud://wxxc-5bc915.7778-wxxc-5bc915/20181221150609.jpg", "pingtuan": false, "pingtuanPrice": 0.00, "recommendStatus": 0, "recommendStatusStr": "普通", "shopId": 0, "status": 0, "statusStr": "上架", "stores": 0, "userId": 3387, "videoId": "", "views": 0, "weight": 0.00 }
    ],

    // 产品展示
    componentImgUrls: [
      { "barCode": "", "categoryId": 6217, "characteristic": "卫生间", "commission": 0.00, "commissionType": 0, "dateAdd": "2018-01-18 12:00:18", "dateStart": "2018-01-18 12:00:03", "gotScore": 0, "gotScoreType": 0, "id": 19103, "kanjia": false, "kanjiaPrice": 0.00, "logisticsId": 0, "minPrice": 0.00, "minScore": 0, "name": "卫生间", "numberFav": 0, "numberGoodReputation": 0, "numberOrders": 0, "numberSells": 0, "originalPrice": 0.00, "paixu": 0, "pic": "cloud://wxxc-5bc915.7778-wxxc-5bc915/20181221150521.jpg", "pingtuan": false, "pingtuanPrice": 0.00, "recommendStatus": 0, "recommendStatusStr": "普通", "shopId": 0, "status": 0, "statusStr": "上架", "stores": 0, "userId": 3387, "videoId": "", "views": 0, "weight": 0.00 }, { "barCode": "", "categoryId": 6217, "characteristic": "厨柜门", "commission": 0.00, "commissionType": 0, "dateAdd": "2018-01-18 12:00:02", "dateStart": "2018-01-18 11:59:19", "gotScore": 0, "gotScoreType": 0, "id": 19101, "kanjia": false, "kanjiaPrice": 0.00, "logisticsId": 0, "minPrice": 0.00, "minScore": 0, "name": "厨柜门", "numberFav": 0, "numberGoodReputation": 0, "numberOrders": 0, "numberSells": 0, "originalPrice": 0.00, "paixu": 0, "pic": "cloud://wxxc-5bc915.7778-wxxc-5bc915/20181221150554.jpg", "pingtuan": false, "pingtuanPrice": 0.00, "recommendStatus": 0, "recommendStatusStr": "普通", "shopId": 0, "status": 0, "statusStr": "上架", "stores": 0, "userId": 3387, "videoId": "", "views": 0, "weight": 0.00 }, { "barCode": "", "categoryId": 6217, "characteristic": "柜门", "commission": 0.00, "commissionType": 0, "dateAdd": "2018-01-18 11:59:17", "dateStart": "2018-01-18 11:58:40", "gotScore": 0, "gotScoreType": 0, "id": 19099, "kanjia": false, "kanjiaPrice": 0.00, "logisticsId": 0, "minPrice": 0.00, "minScore": 0, "name": "柜门", "numberFav": 0, "numberGoodReputation": 0, "numberOrders": 0, "numberSells": 0, "originalPrice": 0.00, "paixu": 0, "pic": "cloud://wxxc-5bc915.7778-wxxc-5bc915/20181221150557.jpg", "pingtuan": false, "pingtuanPrice": 0.00, "recommendStatus": 0, "recommendStatusStr": "普通", "shopId": 0, "status": 0, "statusStr": "上架", "stores": 0, "userId": 3387, "videoId": "", "views": 0, "weight": 0.00 }, { "barCode": "", "categoryId": 6217, "characteristic": "柜门", "commission": 0.00, "commissionType": 0, "dateAdd": "2018-01-18 11:58:36", "dateStart": "2018-01-18 11:56:52", "gotScore": 0, "gotScoreType": 0, "id": 19098, "kanjia": false, "kanjiaPrice": 0.00, "logisticsId": 0, "minPrice": 0.00, "minScore": 0, "name": "柜门", "numberFav": 0, "numberGoodReputation": 0, "numberOrders": 0, "numberSells": 0, "originalPrice": 0.00, "paixu": 0, "pic": "cloud://wxxc-5bc915.7778-wxxc-5bc915/20181221150621.jpg", "pingtuan": false, "pingtuanPrice": 0.00, "recommendStatus": 0, "recommendStatusStr": "普通", "shopId": 0, "status": 0, "statusStr": "上架", "stores": 0, "userId": 3387, "videoId": "", "views": 0, "weight": 0.00 }, { "barCode": "", "categoryId": 6217, "characteristic": "推拉门", "commission": 0.00, "commissionType": 0, "dateAdd": "2018-01-18 11:56:50", "dateStart": "2018-01-18 11:54:57", "gotScore": 0, "gotScoreType": 0, "id": 19097, "kanjia": false, "kanjiaPrice": 0.00, "logisticsId": 0, "minPrice": 0.00, "minScore": 0, "name": "推拉门", "numberFav": 0, "numberGoodReputation": 0, "numberOrders": 0, "numberSells": 0, "originalPrice": 0.00, "paixu": 0, "pic": "cloud://wxxc-5bc915.7778-wxxc-5bc915/20181221150712.jpg", "pingtuan": false, "pingtuanPrice": 0.00, "recommendStatus": 0, "recommendStatusStr": "普通", "shopId": 0, "status": 0, "statusStr": "上架", "stores": 0, "userId": 3387, "videoId": "", "views": 0, "weight": 0.00 }, { "barCode": "", "categoryId": 6217, "characteristic": "套装门", "commission": 0.00, "commissionType": 0, "dateAdd": "2018-01-18 11:54:18", "dateStart": "2018-01-18 11:53:59", "gotScore": 0, "gotScoreType": 0, "id": 19095, "kanjia": false, "kanjiaPrice": 0.00, "logisticsId": 0, "minPrice": 0.00, "minScore": 0, "name": "套装门", "numberFav": 0, "numberGoodReputation": 0, "numberOrders": 0, "numberSells": 0, "originalPrice": 0.00, "paixu": 0, "pic": "cloud://wxxc-5bc915.7778-wxxc-5bc915/20181221150709.jpg", "pingtuan": false, "pingtuanPrice": 0.00, "recommendStatus": 0, "recommendStatusStr": "普通", "shopId": 0, "status": 0, "statusStr": "上架", "stores": 0, "userId": 3387, "videoId": "", "views": 0, "weight": 0.00 }
    ]
  },
  onLoad: function(){
    var _this = this;

    /*util.requestFun({
      url: 'shop/goods/category/all',
      method: 'post',
      success: function(res){
        console.log(res)
      }
    })*/

    // 首页banner  type=banner
   /* util.requestFun({
      url: 'banner/list?type=banner',
      success: function(res){
        _this.setData({
          imgUrls : res.data.data
        })
      }
    })

    // 产品列表获取
    util.requestFun({
      url: 'shop/goods/list?categoryId=6217&pageSize=6',
      success: function(res){
        _this.setData({
          componentImgUrls : res.data.data
        })
      }
    })

    // 小样儿列表获取
    util.requestFun({
      url: 'shop/goods/list?categoryId=6221&pageSize=6',
      success: function(res){
        _this.setData({
          modelImgUrls : res.data.data
        })
      }
    })

    // 案例列表获取
    util.requestFun({
      url: 'shop/goods/list?categoryId=6218&pageSize=6',
      success: function(res){
        _this.setData({
          productImgUrls : res.data.data
        })
      }
    })*/
  },
  showImages:function(event){
    var classify = event.currentTarget.dataset.classify;
    var index = event.currentTarget.dataset.current;
    switch(classify){
      case 'productions':
        var urls = this.RebuildImgUrl(this.data.productImgUrls, 'pic');
        wx.previewImage({
          current: urls[index], // 当前显示图片的http链接
          urls: urls // 需要预览的图片http链接列表
        })
        break;
      case 'models':
        var urls = this.RebuildImgUrl(this.data.modelImgUrls, 'pic');
        wx.previewImage({
          current: urls[index], // 当前显示图片的http链接
          urls: urls // 需要预览的图片http链接列表
        })
        break;
      case 'components':
        var urls = this.RebuildImgUrl(this.data.componentImgUrls, 'pic');
        wx.previewImage({
          current: urls[index], // 当前显示图片的http链接
          urls: urls // 需要预览的图片http链接列表
        })
        break;
    }
  },
  RebuildImgUrl: function(list, paramName){
    var imageList = [];
    for (var i = 0; i < list.length; i++) {
      imageList[i] = list[i][paramName]
    }
    return imageList;
  }
})
