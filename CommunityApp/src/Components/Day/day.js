/**
 * 
 */

import React, { Component } from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import Button from 'react-native-button';

var styles = require('./style.js');
var Event = require("./../Event/Event.js");
var CalendarView = require("./../CalendarView/CalendarView.js");

class Day extends Component {

  static defaultProps = {
    dayOfWeek: "No Day",
    dayNum: "0",
    event: "No Event",
  }

  constructor(props) {
    super(props);
  }

  _navigate(destination, thisComponentsName, title, attribute, attribute2, attribute3) {
    this.props.navigator.push({
      name: destination,
      passProps: {
        eventTitle: title,
        eventAttribute: attribute,
        eventAttribute2: attribute2,
        eventAttribute3: attribute3,
        name: thisComponentsName
      }
    });
  }

  render() {

    return (

      <View style = {{flex: 1}}>

          <View style = {styles.cal_day}>

            <View style = {styles.cal_day_top}>

              <View style = {styles.cal_day_number}>
                <Text style = {styles.cal_day_number_text}>
                   {this.props.dayNum}
                 </Text>
              </View>

              <View style = {styles.cal_day_ofWeek}>
                <Text style = {styles.cal_day_ofWeek_text}>
                  {this.props.dayOfWeek}
                </Text>
              </View>

            </View>

            <View style = {styles.cal_day_bottom}>             

              <View style = {styles.cal_day_event}>
                
                <Button onPress={() => {this._navigate('EventDetails', 'me', this.props.event1Title, this.props.event1Detail1, this.props.event1Detail2, this.props.event1Detail3)}}>
                <Event event = {this.props.event}/>
                </Button>

                <Button onPress={() => {this._navigate('EventDetails', 'me', this.props.event2Title, this.props.event2Detail1, this.props.event2Detail2, this.props.event2Detail3)}}>
                <Event event = {this.props.event2}/>
                </Button>


              </View>

            </View>

          </View>

      </View> 
    );
  }
}

module.exports = Day;