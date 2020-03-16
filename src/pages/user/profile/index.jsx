import Taro, { Component } from "@tarojs/taro";
import { View, Button, Text, Picker } from "@tarojs/components";
import { AtForm, AtInput, AtButton, AtRadio } from "taro-ui";
import { connect } from "@tarojs/redux";
import * as actions from "@actions/user";
import "./index.scss";

@connect(state => state.user, { ...actions })
class Profile extends Component {
  config = {
    navigationBarTitleText: "我的信息"
  };

  constructor() {
    super(...arguments);
    this.state = {
      gender: "",
      dateSel: "请设置生日信息，保存后将不可更改",
      curDate: "2020-01-01",
      dateColor: "#ccc"
    };
    this.info = {};
  }

  componentWillMount() {
    const { gender, birthday } = this.props.userInfo;
    this.setState({
      gender: String(gender),
      dateSel: String(birthday),
      dateColor: "#333"
    });
  }

  handleChange(key, value) {
    this.info[key] = value;
  }

  handleGenderChange(value) {
    this.info["gender"] = value;
    this.setState({
      gender: value
    });
  }

  onSubmit(event) {
    console.log(this.info);
    let that = this;
    Taro.showLoading({
      title: "提交中",
      icon: "none"
    });
    this.props.dispatchUserUpdate(this.info).then(res => {
      that.props.dispatchUser().then(res => {
        Taro.hideLoading();
        Taro.navigateBack({ delta: 2 });
      });
    });
  }

  onDateChange = e => {
    this.setState(
      {
        dateSel: e.detail.value,
        dateColor: "#333"
      },
      () => {
        this.info["birthday"] = e.detail.value;
      }
    );
  };

  render() {
    const { userInfo } = this.props;
    const { dateColor } = this.state;

    return (
      <View className="user-profile">
        <AtForm onSubmit={this.onSubmit.bind(this)}>
          <AtInput
            name="username"
            title="昵称"
            type="text"
            value={userInfo.nickName}
            onChange={this.handleChange.bind(this, "username")}
            clear
          />
          <View className="user-profile__item-wrap">
            <View className="user-profile__item-tab">性别</View>
            <View className="user-profile__item-input">
              <AtRadio
                options={[
                  { label: "男", value: "1" },
                  { label: "女", value: "2" }
                ]}
                value={this.state.gender}
                onClick={this.handleGenderChange.bind(this)}
              />
            </View>
          </View>

          <AtInput
            name="phone"
            title="电话"
            type="phone"
            placeholder="输入要绑定的手机号"
            placeholderClass="user-profile__item-placeholder"
            value={userInfo.phone}
            onChange={this.handleChange.bind(this, "phone")}
            clear
          />
          <View className="user-profile__item-wrap-birth">
            <View className="user-profile__item-tab">生日</View>
            <View className="user-profile__item-input-birth">
              <Picker
                mode="date"
                onChange={this.onDateChange.bind(this)}
                start="1900-01-01"
                end={curDate}
              >
                <View
                  className="picker"
                  style={{ color: dateColor, fontSize: "30rpx" }}
                >
                  {this.state.dateSel}
                </View>
              </Picker>
            </View>
          </View>
          <AtButton type="primary" formType="submit">
            提交
          </AtButton>
        </AtForm>
      </View>
    );
  }
}

export default Profile;
