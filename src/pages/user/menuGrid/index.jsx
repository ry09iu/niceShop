import Taro, { Component } from "@tarojs/taro";
import { View, Button, Text } from "@tarojs/components";

import "./index.scss";

const GRID_LIST = [
  {
    key: "pay",
    text: "待付款",
    img: require("./assets/obligation.png")
  },
  {
    key: "wait",
    text: "待发货",
    img: require("./assets/tobeshipped.png")
  },
  {
    key: "shipped",
    text: "待收货",
    img: require("./assets/shipped.png")
  },
  {
    key: "complete",
    text: "待评价",
    img: require("./assets/complete.png")
  }
];

export default class MenuGrid extends Component {
  handleClick = menu => {
    Taro.showToast({
      title: menu.text + " 功能尚未实现",
      icon: "none"
    });
  };

  render() {
    return (
      <View className="user__order--wrap">
        <View className="user__order--item-tab">
          <Text>我的订单</Text>
          <View className="user__order--item-tab-right">
            <Text>查看全部</Text>
            <View className="at-icon at-icon-chevron-right"></View>
          </View>
        </View>

        <View className="user__order--item-grid">
          {GRID_LIST.map(item => {
            return (
              <View
                key={item.key}
                className="user__order--item-grid-inner"
                onClick={this.handleClick.bind(this, item)}
              >
                <Image
                  src={item.img}
                  className="user__order--item-grid-icon"
                ></Image>
                <Text className="user__order--item-grid-text">{item.text}</Text>
              </View>
            );
          })}
        </View>
      </View>
    );
  }
}
