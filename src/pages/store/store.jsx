import Taro, { Component } from "@tarojs/taro";
import { View, Button, Text, Image } from "@tarojs/components";
import Header from "./header";
import InfoBase from "./info-base";
import InfoParam from "./info-param";
import Tips from "./tips";
import Review from "./review";
import Detail from "./detail";
import Footer from "./footer";
import "./store.scss";

const MENU_LIST = [
  {
    category_id: 1,
    title: "热销商品",
    list: [
      {
        category_id: 3,
        spu_id: 1,
        spu_name: "荣耀 30 Pro",
        spu_title:
          "荣耀 30 Pro 50倍远摄 麒麟990 5G 4000万超感光摄影 3200W美颜自拍 全网通",
        label: "爆款,超长待机",
        desc: "下单立即优惠100，赠送半年屏保",
        sku_items: {
          specs: [
            {
              id: 1,
              name: "颜色",
              list: [
                {
                  id: 1,
                  name: "亮黑色",
                  value: 1
                },
                {
                  id: 2,
                  name: "晨曦金",
                  value: 2
                },
                {
                  id: 3,
                  name: "零度白",
                  value: 3
                }
              ]
            },
            {
              id: 2,
              name: "规格",
              list: [
                {
                  id: 1,
                  name: "5G全网通 8G+128G",
                  price: "4299",
                  value: 1
                },
                {
                  id: 2,
                  name: "5G全网通 8G+256G",
                  price: "4799",
                  value: 2
                },
                {
                  id: 3,
                  name: "5G全网通 12G+256G",
                  price: "5799",
                  value: 3
                }
              ]
            },
            {
              id: 3,
              name: "套餐",
              list: [
                {
                  id: 1,
                  name: "官方标配",
                  value: 1
                }
              ]
            }
          ]
        },
        price: "4299",
        ori_price: "4399",
        paidNum: 531,
        image_url: require("../category/assets/honor30pro.jpg")
      },
      {
        category_id: 3,
        spu_id: 2,
        spu_name: "HUAWEI P40",
        label: "莱卡拍照",
        desc: "下单立享12期免息，赠送半年屏保",
        price: "4188",
        ori_price: "4188",
        paidNum: 203,
        image_url: require("../category/assets/p40.jpg")
      },
      {
        category_id: 3,
        spu_id: 3,
        spu_name: "HUAWEI Nova 7",
        label: "超长待机",
        desc: "送耳机，12期免息",
        price: "3588",
        ori_price: "3588",
        paidNum: 188,
        image_url: require("../category/assets/nova7.jpg")
      }
    ]
  },
  {
    category_id: 2,
    title: "新品上架",
    list: []
  },
  {
    category_id: 3,
    title: "手机专区"
  },
  {
    category_id: 4,
    title: "专属配件",
    list: []
  }
];

class Store extends Component {
  config = {
    navigationBarTitleText: "商品详情"
  };

  constructor(props) {
    super(props);
    this.state = {};
    this.itemId = parseInt(this.$router.params.itemId);
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    const { list } = MENU_LIST[0];

    return (
      <View className="store">
        {/* 顶部轮播图 */}
        <Header gallery={list} />
        {/* 商品基本信息 */}
        <InfoBase info={list[0]} />
        {/* 商品规格 */}
        <InfoParam info={list[0]} />
        {/* 商品服务 */}
        <Tips />
        {/* 商品评价 */}
        <Review />
        {/* 商品详情 */}
        <Detail />
        {/* 底部购物栏 */}
        <Footer />
      </View>
    );
  }
}

export default Store;
