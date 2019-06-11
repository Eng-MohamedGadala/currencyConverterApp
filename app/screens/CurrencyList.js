import React, { Component } from 'react';
import {
  FlatList, StatusBar, View,
} from 'react-native';

import { ListItem, Separator } from '../components/List';
import currencies from '../data/currencies';
import {PropTypes} from 'prop-types'
const TEMP_CURRENT_CURRENCY = 'CAD';

class CurrencyList extends Component {
  static propTypes = {
    navigation:PropTypes.object,
  }
  handlePress = () => {
    console.log('row press');
    this.props.navigation.goBack(null);
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar translucent={false} barStyle="default" />
        <FlatList
          data={currencies}
          renderItem={({ item }) => (
            <ListItem
              text={item}
              selected={item === TEMP_CURRENT_CURRENCY}
              onPress={this.handlePress}
            />
          )}
          keyExtractor={item => item}
          ItemSeparatorComponent={Separator}
        />
      </View>
    );
  }
}

export default CurrencyList;
