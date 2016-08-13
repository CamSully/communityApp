import React, { Component } from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import Button from 'react-native-button';

var styles = require('./style.js');

class Filter extends Component {

  static defaultProps = {
    xPos: 0,
    yPos: 0
  }

  constructor(props) {
    super(props);
    this.state = {showingMenu: false};
  }

  showMenu(){
    this.setState({showingMenu: true});
  }

  hideMenu(){
    this.setState({showingMenu: false});
  }

  render() {
    var inner;
    var showingTopOffset = 0;
    var showingLeftOffset = 0;
    if(this.state.showingMenu){
      showingTopOffset = 100
      showingLeftOffset = -25
      inner = <View style={styles.cal_filter_popup}><Text style = {styles.cal_filter_items_text}> Music {"\n"} Sports {"\n"} Civil</Text>

        <Button style={styles.calButtonTextStyleHide} containerStyle={styles.calButtonContainerStyleHide}
          onPress={() => {this.hideMenu()}}>
          Hide </Button>

      </View>
    }
    else{
      inner = <View><Button style={styles.calButtonTextStyle} containerStyle={styles.calButtonContainerStyle}
        onPress={() => {this.showMenu()}}>Filter Events</Button></View>
    }

    return (

      <View style = {{height: 50+showingTopOffset, alignItems: "center", position: "absolute", top: this.props.xPos-showingTopOffset, left: this.props.yPos - showingLeftOffset}}>
      {inner}

      </View>
    );
  }
}

module.exports = Filter;