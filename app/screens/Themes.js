import React, { Component } from 'react';
import { ScrollView, StatusBar } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { PropTypes } from 'prop-types';
import {connect} from 'react-redux';
import { ListItem, Separator } from '../components/List';
import { changeThem } from '../redux/actions/currencies';


const styles = EStyleSheet.create({
  $blue: '$primaryBlue',
  $orange: '$primaryOrange',
  $green: '$primaryGreen',
  $purple: '$primaryPurple',
});

class Themes extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  };

  handlePressTheme = (selectedItem) => {
    console.log('press theme',selectedItem);
    const { dispatch } = this.props;
    dispatch(changeThem(selectedItem));
    this.props.navigation.navigate('Home', { style: selectedItem });
  };

  // this only for testing 
  handleChangeThemes = (theme) => {
    const { dispatch } = this.props;
    dispatch(changeThem(theme));
  };

  render() {
    return (
      <ScrollView>
        <StatusBar translucent={false} barStyle="default" />
        <ListItem
          text="Blue"
          onPress={() => this.handlePressTheme(styles.$blue)}
          selected
          checkmark={false}
          iconBackground={styles.$blue}
        />
        <Separator />
        <ListItem
          text="Orange"
          onPress={() => this.handlePressTheme(styles.$orange)}
          selected
          checkmark={false}
          iconBackground={styles.$orange}
        />
        <Separator />
        <ListItem
          text="Green"
          onPress={() => this.handlePressTheme(styles.$green)}
          selected
          checkmark={false}
          iconBackground={styles.$green}
        />
        <Separator />
        <ListItem
          text="Purple"
          onPress={() => this.handlePressTheme(styles.$purple)}
          selected
          checkmark={false}
          iconBackground={styles.$purple}
        />
        <Separator />
      </ScrollView>
    );
  }
}
const mapStateToProps = (state) => {
  const {themes} = state.themes;


   return {
    themes

  };
};
export default connect(mapStateToProps)(Themes);
