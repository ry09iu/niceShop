import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import "./index.scss";

const RECOMMEND_LIST = [
  {
    spu_id: 1,
    spu_name: "HUAWEI Watch GT 2",
    label: "新品,爆款",
    desc: "限时最高直降50元",
    price: "1438",
    oriPrice: "1488",
    paidNum: 109,
    image_url: require("./assets/com1.jpg")
  },
  {
    spu_id: 2,
    spu_name: "HUAWEI nova 6 SE",
    label: "爆款,超长待机",
    desc: "下单立即优惠180，赠送半年屏保",
    price: "2099",
    oriPrice: "2299",
    paidNum: 231,
    image_url: require("./assets/com3.png")
  },
  {
    spu_id: 3,
    spu_name: "华为随行WiFi 2 畅享版",
    label: "",
    desc: "限时优惠，支持6期免息",
    price: "1049",
    oriPrice: "1199",
    paidNum: 839,
    image_url: require("./assets/com4.jpg")
  },
  {
    spu_id: 4,
    spu_name: "HUAWEI FreeLace",
    label: "",
    desc: "限时优惠100元，享3期免息",
    price: "399",
    oriPrice: "",
    paidNum: 1783,
    image_url: require("./assets/com5.jpg")
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
      <View className="recommend">
        <View className="recommend__title">─ 猜你喜欢 ─</View>
        <View className="recommend__list">
          {RECOMMEND_LIST.map(item => {
            return (
              <View key={item.spu_id} className="recommend__list-item">
                <Image
                  src={item.image_url}
                  className="recommend__list-item-img"
                ></Image>
                <View className="recommend__list-item-footer">
                  <Text className="recommend__list-item-footer-txt">
                    {item.spu_name}
                  </Text>
                  {item.label && (
                    <View className="recommend__list-item-footer-label">
                      {item.label.split(",").map((option, index) => {
                        return (
                          <View
                            key={index}
                            className="recommend__list-item-footer-label-item"
                          >
                            {option}
                          </View>
                        );
                      })}
                    </View>
                  )}
                  <View className="recommend__list-item-footer-sale">
                    <View>
                      <Text className="recommend__list-item-footer-sale-symbol">
                        ¥
                      </Text>
                      <Text className="recommend__list-item-footer-sale-price">
                        {item.price}
                      </Text>
                    </View>
                    <View className="recommend__list-item-footer-sale-paid-num">
                      {item.paidNum} 人付款
                    </View>
                  </View>
                  {item.oriPrice && (
                    <View className="recommend__list-item-footer-ori-price">
                      ¥{item.oriPrice}
                    </View>
                  )}
                </View>
              </View>
            );
          })}
        </View>
      </View>
    );
  }
}

export default recommend;
