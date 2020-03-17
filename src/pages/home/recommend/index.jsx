import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import "./index.scss";

const RECOMMEND_LIST = [
  {
    id: 1,
    image_url: require("./../popular/assets/r1.png")
  },
  {
    id: 2,
    image_url: require("./../popular/assets/r2.jpg")
  },
  {
    id: 3,
    image_url: require("./../popular/assets/r3.jpg")
  }
];

class recommend extends Component {
  constructor() {
    super(...arguments);
    this.state = {};
  }

  componentWillMount() {}

  render() {
    return (
      <View className="recommend__wrap">
        <View className="recommend__wrap-title">猜你喜欢</View>
        <View className="recommend__wrap-list"></View>
      </View>
    );
  }
}

export default recommend;
