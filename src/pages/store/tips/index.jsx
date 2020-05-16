import Taro, { Component } from "@tarojs/taro";
import { View, Button, Text } from "@tarojs/components";
import CheckIcons from "./assets/check.png";
import "./index.scss";

const TIP_LIST = [
  {
    text: "七天无理由"
  },
  {
    text: "正品保证"
  },
  {
    text: "售后无忧"
  }
];

export default class Tips extends Component {
  render() {
    return (
      <View className="info__tips">
        <View className="info__tips-title">服务</View>
        <View className="info__tips-wrap">
          {TIP_LIST.map((item, index) => {
            return (
              <View key={index} className="info__tips-wrap-inner">
                <Image
                  src={CheckIcons}
                  className="info__tips-wrap-icon"
                ></Image>
                <Text className="info__tips-wrap-text">{item.text}</Text>
              </View>
            );
          })}
        </View>
      </View>
    );
  }
}
