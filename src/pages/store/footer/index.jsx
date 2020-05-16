import Taro, { Component } from "@tarojs/taro";
import { View, Button, Text } from "@tarojs/components";
import "./index.scss";

const PIC_LIST = [
  {
    id: 1,
    name: "首页",
    image_url: require("./assets/footer_home.png")
  },
  {
    id: 2,
    name: "喜欢",
    image_url: require("./assets/footer_like.png")
  },
  {
    id: 3,
    name: "购物车",
    image_url: require("./assets/footer_cart.png")
  }
];

export default class Footer extends Component {
  render() {
    return (
      <View className="footer">
        <View className="footer__left">
          {PIC_LIST.map(item => {
            return (
              <View className="footer__left-item" key={item.id}>
                <Image
                  className="footer__left-item-img"
                  src={item.image_url}
                ></Image>
                <View className="footer__left-item-txt">{item.name}</View>
              </View>
            );
          })}
        </View>
        <View className="footer__right">
          <View className="footer__right-add">加入购物车</View>
          <View className="footer__right-buy">立即购买</View>
        </View>
      </View>
    );
  }
}
