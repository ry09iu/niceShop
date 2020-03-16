import Taro, { Component } from "@tarojs/taro";
import { View, Button, Text } from "@tarojs/components";

import "./index.scss";

const GRID_LIST = [
  {
    key: "hot",
    text: "新热推荐",
    img: require("./assets/hot.png")
  },
  {
    key: "category",
    text: "商品分类",
    img: require("./assets/category.png")
  },
  {
    key: "coupon",
    text: "领券中心",
    img: require("./assets/coupon.png")
  },
  {
    key: "favorite",
    text: "我的收藏",
    img: require("./assets/favorite.png")
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
