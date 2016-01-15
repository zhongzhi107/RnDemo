'use strict';

import React, {
  Navigator,
  Component,
  View,
  Text,
  AlertIOS,
  TouchableOpacity
} from 'react-native';

import HomeView from './homeView';
import SubView from './subView';
// import FeedView from './feedView';

export default class App extends Component {
  configureScene(route) {
    return Navigator.SceneConfigs.HorizontalSwipeJump;
  }

  renderScene(router, navigator) {
    var Component = null;
    // console.log(router);
    switch(router.id) {
      case 'home':
        Component = HomeView;
        break;
      // case "feed":
      //   Component = FeedView;
      //   break;
      default:
        Component = SubView;
    }

    return (
      <Component navigator={navigator} />
    )
  }

  render() {
    return (
      <Navigator
        initialRoute={{ id: 'home' }}
        configureScene={ this.configureScene.bind(this) }
        renderScene={ this.renderScene }
      />
    );
  }
}
