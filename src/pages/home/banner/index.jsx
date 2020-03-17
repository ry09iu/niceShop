import Taro, { Component } from "@tarojs/taro";
import { View, Swiper, SwiperItem } from "@tarojs/components";
import "./index.scss";

const AD_LIST = [
  {
    id: 1,
    image_url: require("./assets/1.jpg")
  },
  {
    id: 6,
    image_url: require("./assets/6.jpg")
  }
];

class Banner extends Component {
  constructor() {
    super(...arguments);
    this.state = {};
  }

  componentWillMount() {}

  render() {
    return (
      <View className="ad-swiper">
        <Swiper
          className="ad-swiper__wrap"
          indicatorColor="rgba(255, 255, 255, 0.200)"
          indicatorActiveColor="rgba(255, 255, 255, 0.800)"
          circular
          indicatorDots
          autoplay
        >
          {AD_LIST.map(item => (
            <SwiperItem key={item.id} className="ad-swiper__wrap-item">
              <Image src={item.image_url} className="ad-swiper__wrap-img" />
              {/* <View
                style={{ backgroundImage: "url(" + item.image_url + ")" }}
                className="ad-swiper__wrap-img"
              /> */}
            </SwiperItem>
          ))}
        </Swiper>
      </View>
    );
  }
}

export default Banner;
