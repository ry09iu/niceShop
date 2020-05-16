import Taro, { Component } from "@tarojs/taro";
import { View, Button, Text } from "@tarojs/components";
import "./index.scss";

export default class Review extends Component {
  render() {
    return (
      <View className="info__reviews">
        <View className="info__reviews-header">
          <View className="info__reviews-header-title">服务</View>
          <View className="info__reviews-header-right">
            <View className="info__reviews-header-right-info">好评度 100%</View>
            <View className="at-icon at-icon-chevron-right"></View>
          </View>
        </View>

        <View className="info__reviews-content">暂无评价</View>
      </View>
    );
  }
}
