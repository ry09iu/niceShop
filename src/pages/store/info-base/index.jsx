import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import "./index.scss";

class InfoBase extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      current: 0
    };
  }

  componentWillMount() {}

  render() {
    const { info } = this.props;

    return (
      <View className="info-base">
        <View className="info-base__price">
          <View className="info-base__price-symbol">¥</View>
          <View className="info-base__price-txt">{info.price}</View>
          <View className="info-base__price-txt-ori">¥{info.ori_price}</View>
        </View>
        <View className="info-base__title">{info.spu_title}</View>
        <View className="info-base__desc">{info.desc}</View>
      </View>
    );
  }
}

export default InfoBase;
