import Taro, { Component } from "@tarojs/taro";
import { View, Button, Text, Image } from "@tarojs/components";
import { connect } from "@tarojs/redux";
import { AtSearchBar } from "taro-ui";
import { add, minus, asyncAdd } from "../../actions/counter";
import "./home.scss";

@connect(
  ({ counter }) => ({
    counter
  }),
  dispatch => ({
    add() {
      dispatch(add());
    },
    dec() {
      dispatch(minus());
    },
    asyncAdd() {
      dispatch(asyncAdd());
    }
  })
)
class Index extends Component {
  config = {
    navigationBarTitleText: "奈斯数码商城"
  };

  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  onChange(value) {
    this.setState({
      value: value
    });
  }

  render() {
    return (
      <View className="home">
        <View className="home__header">
          <AtSearchBar
            value={this.state.value}
            onChange={this.onChange.bind(this)}
          />
        </View>
      </View>
    );
  }
}

export default Index;
