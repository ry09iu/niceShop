import Taro, { Component } from "@tarojs/taro";
import { View, Button, Text } from "@tarojs/components";
import "./cart.scss";

const IMG_LIST = [
  require("./assets/checked.png"),
  require("./assets/uncheck.png"),
  require("./assets/subtract.png"),
  require("./assets/add.png")
];

const CART_LIST = [
  {
    id: 1,
    sku_id: 1,
    sku_name: "华为 P40 5G 全网通",
    sku_image: require("../category/assets/p40.jpg"),
    sku_attrs: [
      {
        id: 1,
        name: "皓月白"
      },
      {
        id: 2,
        name: "全网通 8+128G"
      },
      {
        id: 3,
        name: "官方标配"
      }
    ],
    total_price: 4188,
    total_num: 1
  },
  {
    id: 2,
    sku_id: 2,
    sku_name: "荣耀 30 Pro 全网通",
    sku_image: require("../category/assets/honor30pro.jpg"),
    sku_attrs: [
      {
        id: 1,
        name: "晨曦金"
      },
      {
        id: 2,
        name: "全网通 8+256G"
      },
      {
        id: 3,
        name: "官方标配"
      }
    ],
    total_price: 9976,
    total_num: 2
  }
];

export default class Cart extends Component {
  config = {
    navigationBarTitleText: "购物车"
  };

  render() {
    return (
      <View className="cart">
        {CART_LIST.map(item => {
          return (
            <View className="cart__item" key={item.id}>
              <View className="cart__item-left">
                <Image
                  className="cart__item-left-chx"
                  src={IMG_LIST[0]}
                ></Image>
                <Image
                  className="cart__item-left-img"
                  src={item.sku_image}
                ></Image>
              </View>
              <View className="cart__item-right">
                <View className="cart__item-right-name">{item.sku_name}</View>
                <View className="cart__item-right-attr">
                  {item.sku_attrs.map((val, index) => {
                    const filter = index < item.sku_attrs.length - 1;
                    return (
                      <Text className="cart__item-right-attr-item" key={val.id}>
                        {val.name}
                        {filter && <Text>,</Text>}
                      </Text>
                    );
                  })}
                </View>
                <View className="cart__item-right-footer">
                  <View className="cart__item-right-price">
                    <Text className="cart__item-right-price-symbol">¥</Text>
                    <Text className="cart__item-right-price-txt">
                      {item.total_price}
                    </Text>
                  </View>

                  <View className="cart__item-right-add-wrap">
                    <Image
                      className="cart__item-right-add"
                      src={IMG_LIST[2]}
                    ></Image>
                    <Text className="cart__item-right-txt">
                      {item.total_num}
                    </Text>
                    <Image
                      className="cart__item-right-subtract"
                      src={IMG_LIST[3]}
                    ></Image>
                  </View>
                </View>
              </View>
            </View>
          );
        })}
      </View>
    );
  }
}
