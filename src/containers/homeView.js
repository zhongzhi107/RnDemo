'use strict';

import React, {
  StyleSheet,
  Navigator,
  Component,
  View,
  ScrollView,
  Text,
  TabBarIOS,
  TouchableOpacity,
  TouchableHighlight,
  PixelRatio,
} from 'react-native';

class NavButton extends React.Component {
  render() {
    return (
      <TouchableHighlight
        style={styles.button}
        underlayColor="#B5B5B5"
        onPress={this.props.onPress}>
        <Text style={styles.buttonText}>{this.props.text}</Text>
      </TouchableHighlight>
    );
  }
}

export default class HomeView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabIndex: props.initTabIndex || 0,
      title: 'Top Rated'
    };
  }

  renderScene(route, navigator) {
    return (
      <TabBarIOS>
        <TabBarIOS.Item
          //enum('bookmarks', 'contacts', 'downloads', 'favorites', 'featured', 'history', 'more', 'most-recent', 'most-viewed', 'recents', 'search', 'top-rated')
          systemIcon="top-rated"
          selected={this.state.tabIndex === 0}
          onPress={() => {
            this.setState({
              tabIndex: 0,
            });
          }}
        >
          <ScrollView style={styles.container}>
            <ScrollView>
              <NavButton
                text="子页1"
                onPress={() => {
                  this.props.navigator.push({
                    message: '子页1',
                    sceneConfig: Navigator.SceneConfigs.FloatFromRight,
                  });
                }}
              />
              <NavButton text="首页 2" />
              <NavButton text="首页 3" />
            </ScrollView>
          </ScrollView>
        </TabBarIOS.Item>

        <TabBarIOS.Item
          systemIcon="history"
          selected={this.state.tabIndex === 1}
          onPress={() => {
            this.setState({
              tabIndex: 1,
            });
          }}
        >
          <ScrollView style={styles.container}>
            <ScrollView>
              <NavButton text="历史 1" />
            </ScrollView>
          </ScrollView>
        </TabBarIOS.Item>

        <TabBarIOS.Item
          systemIcon="more"
          selected={this.state.tabIndex === 2}
          onPress={() => {
            this.setState({
              tabIndex: 2,
            });
          }}
        >
          <ScrollView style={styles.container}>
            <ScrollView>
              <NavButton text="more 1" />
            </ScrollView>
          </ScrollView>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }

  render() {
    return (
      <Navigator
        debugOverlay={false}
        renderScene={this.renderScene.bind(this)}
        navigator={this.props.navigator}
        navigationBar={
          <Navigator.NavigationBar
            style={styles.navigationBar}
            routeMapper={NavigationBarRouteMapper}
          />
        }
      />
    );
  }
}

var NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    return null;
  },

  RightButton(route, navigator, index, navState) {
    return null;
  },

  Title(route, navigator, index, navState) {
    return (
      <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}>
        <Text style={styles.navigationBarTitle}>
          首页
        </Text>
      </TouchableOpacity>
    );
  }
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
  button: {
    backgroundColor: 'white',
    padding: 15,
    borderBottomWidth: 1 / PixelRatio.get(),
    borderBottomColor: '#CDCDCD',
  },
  buttonText: {
    fontSize: 17,
    fontWeight: '500',
  },
  navigationBar: {
    backgroundColor: '#246dd5'
  },
  navigationBarTitle: {
    color: 'white',
    margin: 10,
    fontSize: 16
  }
});
