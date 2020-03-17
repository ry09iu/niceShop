import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import "./index.scss";

const POPULAR_LIST = [
  {
    id: 1,
    image_url: require("./assets/r1.png")
  },
  {
    id: 2,
    image_url: require("./assets/r2.jpg")
  },
  {
    id: 3,
    image_url: require("./assets/r3.jpg")
  }
];

class Popular extends Component {
  constructor() {
    super(...arguments);
    this.state = {};
  }

  componentWillMount() {}

  render() {
    return (
      <View className="popular">
        <View className="popular__wrap">
          <View className="popular__wrap-left-txt">火热爆款</View>
          <View className="popular__wrap-more">
            <Text className="popular__wrap-more-txt">查看更多</Text>
            <View className="at-icon at-icon-chevron-right"></View>
          </View>
        </View>
        <View className="popular__wrap-imgs">
          <Image
            className="popular__wrap-imgs-one"
            src={POPULAR_LIST[0].image_url}
          />
          <View className="popular__wrap-imgs-right">
            <Image
              className="popular__wrap-imgs-two"
              src={POPULAR_LIST[1].image_url}
            />
            <Image
              className="popular__wrap-imgs-three"
              src={POPULAR_LIST[2].image_url}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default Popular;
