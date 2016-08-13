/**
 *
 */

import React, { Component } from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import Button from 'react-native-button';

var styles = require('./style.js');
var EventAttribute = require("./../EventAttribute/EventAttribute.js");

class EventDetails extends Component {

  static defaultProps = {
  }

  constructor(props) {
    super(props);
    console.log(props);
  }

  _navigate(destination, thisComponentsName) {
    this.props.navigator.push({
      name: destination,
      passProps: {
        name: thisComponentsName
      }
    });
  }

  render() {

    return (

      <View style = {{flex: 1, backgroundColor: "green"}}>

        <View style = {styles.details_label}>

          <Button onPress={() => {this._navigate('CalendarFromDetails', 'me')}}>
            <Image source = {require("./back.jpg")} style = {{margin: 5}}/>
          </Button>

          <Text style = {styles.details_label_text}>
             Details
          </Text>

        </View>

        <View style = {styles.details_banner}>

          <View style = {styles.details_banner_title}>
            <Text style = {styles.details_banner_title_text}>
              {this.props.eventTitle}
            </Text>
          </View>

          <View style = {styles.details_banner_info}>
            <EventAttribute eventAttribute = {this.props.eventAttribute}/>
            <EventAttribute eventAttribute = {this.props.eventAttribute2}/>
            <EventAttribute eventAttribute = {this.props.eventAttribute3}/>
          </View>

        </View>

      </View>
    );
  }
}

module.exports = EventDetails;
