import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import "./index.scss";

class InfoParam extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      current: 0
    };
  }

  componentWillMount() {}

  render() {
    const { info } = this.props;

    console.log(info);

    return (
      <View className="info-param">
        {info.sku_items.specs.map(item => {
          return (
            <View className="info-param__items" key={item.id}>
              <View className="info-param__items-name">{item.name}</View>
              <View className="info-param__items-attr">
                {item.list.map(item => {
                  return (
                    <View className="info-param__items-attr-val" key={item.id}>
                      {item.name}
                    </View>
                  );
                })}
              </View>
            </View>
          );
        })}
      </View>
    );
  }
}

export default InfoParam;
