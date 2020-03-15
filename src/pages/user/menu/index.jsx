import Taro, { Component } from "@tarojs/taro";
import { View, Button, Text } from "@tarojs/components";
import "./index.scss";

const MENU_LIST = [
  {
    key: "address",
    text: "收货地址",
    img: require("./assets/address.png")
  },
  {
    key: "service",
    text: "联系客服",
    img: require("./assets/service.png")
  },
  {
    key: "about",
    text: "关于奈斯",
    img: require("./assets/about.png")
  }
];

export default class Menu extends Component {
  handleClick = menu => {
    if (menu.key === "about") {
      Taro.login({
        success: function(res) {
          console.log(res);
        }
      });
    } else {
      Taro.showToast({
        title: menu.text + " 功能尚未实现",
        icon: "none"
      });
    }
  };

  render() {
    return (
      <View className="user__menu--wrap">
        {MENU_LIST.map(item => {
          return (
            <View
              key={item.key}
              className="user__menu--wrap-item"
              onClick={this.handleClick.bind(this, item)}
            >
              <View className="user__menu--wrap-item-left">
                <Image
                  src={item.img}
                  className="user__menu--wrap-item-icon"
                ></Image>

                <Text className="user__menu--wrap-item-text">{item.text}</Text>
              </View>
              <View className="at-icon at-icon-chevron-right"></View>
            </View>
          );
        })}
      </View>
    );
  }
}
