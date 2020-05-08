import Taro, { Component } from "@tarojs/taro";
import { View, Button, Text, Image } from "@tarojs/components";
import Menu from "./menu";
import MenuSub from "./menu-sub";
import "./store.scss";

class Store extends Component {
  config = {
    navigationBarTitleText: "商品详情"
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="store">
        <View className="store__header">商品详情页头部</View>
      </View>
    );
  }
}

export default Store;
