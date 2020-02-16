
import React, { Component } from 'react';
import {
  ScrollView, StatusBar, Linking 
} from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import { ListItem, Separator } from '../components/List';
import { connectAlert } from '../components/Alert';

// const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';
// const ICON_COLOR = '#868686';
// const ICON_SIZE = 23;

class Options extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    alertWithType: PropTypes.func,
  };

  handlePressThemes = () => {
    console.log('press themes');
    this.props.navigation.navigate('Themes');
  };

  handlePressSite = () => {
    console.log('press site');
    Linking.openURL('htttp://fixer.io').catch(() => this.props.alertWithType(
      'error',
      'title Sorry',
      'Fixer cant be fight now ',
    ),);
  };

  render() {
    return (
      <ScrollView>
        <StatusBar translucent={false} barStyle="default" />
        <ListItem
          text="Themes"
          onPress={this.handlePressThemes}
          // customIcon={
          //   <Ionicons name={`${ICON_PREFIX}-arrow-forward`} size={ICON_SIZE} color={ICON_COLOR} />
          // }
        />
        <Separator />
        <ListItem
          text="Fixer.io"
          onPress={this.handlePressSite}
          // customIcon={<Ionicons name={`${ICON_PREFIX}-link`} size={ICON_SIZE} color={ICON_COLOR} />}
        />
        <Separator />
      </ScrollView>
    );
  }
}
export default connectAlert(Options);
