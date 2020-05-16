import Taro, { Component } from "@tarojs/taro";
import { View, Swiper, SwiperItem } from "@tarojs/components";
import "./index.scss";

const headerPicList = [
  {
    id: 1,
    image_url: require("../../category/assets/nova7.jpg")
  },
  {
    id: 2,
    image_url: require("../../category/assets/p40.jpg")
  },
  {
    id: 3,
    image_url: require("../../category/assets/honor30pro.jpg")
  }
];

class Header extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      current: 0
    };
  }

  componentWillMount() {}

  handleChange = e => {
    const { current } = e.detail;
    this.setState({ current });
  };

  render() {
    const { current } = this.state;
    const { gallery } = this.props;

    return (
      <View className="header-swiper">
        <Swiper
          className="header-swiper__wrap"
          onChange={this.handleChange}
          circular
        >
          {gallery.map(item => (
            <SwiperItem key={item.spu_id} className="header-swiper__wrap-item">
              <Image src={item.image_url} className="header-swiper__wrap-img" />
            </SwiperItem>
          ))}
        </Swiper>
        <View className="header-swiper__indicator">
          <View className="header-swiper__indicator-txt">
            {`${current + 1}/${gallery.length}`}
          </View>
        </View>
      </View>
    );
  }
}

export default Header;
