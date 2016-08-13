var React = require('react');

import { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Dimensions
} from 'react-native';

var Day = require("./../Day/day.js");
var Filter = require("./../Filter/filter.js");
var Label = require("./../Label/label.js")
var DropMenu = require("./../Test/test.js")

class CalendarView extends Component{
  constructor(props) {
    if(!props.hasOwnProperty('navigator')){
      console.log('Error: calendar view has no navigator');
    }
    super(props);
  }

  render(){
    return( 
      <View style = {{flex: 1}}>

        <Label navigator = {this.props.navigator}/>

    	  <ScrollView style = {{flex: 10, backgroundColor: "green"}}>

          <Day
           navigator = {this.props.navigator}
           dayOfWeek = "Friday"
           dayNum = {1}
           event = "7 pm: OTHS Football Game"
           event1Title = "OTHS Football Game"
           event1Detail1 = "Location: OTHS Victory Field"
           event1Detail2 = "Time: 7pm - 9pm"
           event1Detail3 = "Notes: Cheer on the Coyotes as they take on Orono."

           event2 = "10 pm: Waterfront Fireworks"
           event2Title = "Waterfront Fireworks"
           event2Detail1 = "Location: Riverfront Park"
           event2Detail2 = "Time: 10pm - 10:30pm"
           event2Detail3 = "Notes: Dance in the streets and watch a sweet firework show!"
          />

    		  <Day
          navigator = {this.props.navigator} 
          dayOfWeek = "Saturday"
          dayNum = {2} 
          event = "10 am: Riverfest Parade" 
          event2 = "12 am: OTHS Cross Country Meet"
          />

    		  <Day
          navigator = {this.props.navigator}
          dayOfWeek = "Sunday"
          dayNum = {3}
          event = "3:30 pm: Outdoor Concert"
          event2 = "5:30 pm: Old Town Museum Open House"
          />

    	  </ScrollView>
          <DropMenu/>
          <Filter xPos={Dimensions.get('window').height - 60} yPos={Dimensions.get('window').width/2 - 60}/>
      </View>
    );
  }
}

module.exports = CalendarView;
