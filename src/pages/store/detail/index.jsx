import Taro, { Component } from "@tarojs/taro";
import { View, Button, Text } from "@tarojs/components";
import "./index.scss";

export default class Detail extends Component {
  render() {
    return (
      <View className="info__reviews">
        <View className="info__reviews-header">
          <View className="info__reviews-header-title">详情</View>
        </View>

        <View className="info__reviews-content">暂无详情</View>
      </View>
    );
  }
}
