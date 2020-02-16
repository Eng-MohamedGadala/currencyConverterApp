import React, { Component } from 'react';
import { StatusBar, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Button';
import { LastConverted } from '../components/Text';
import { Header } from '../components/Header';
import { swapCurrency, changeCurrencyAmout } from '../redux/actions/currencies';

const TEMP_LAST_CONVERTED = new Date();
const TEMP_CONVERSION_RATE = 0.79739;

class Home extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func,
    baseCurrency: PropTypes.string,
    quoteCurrency: PropTypes.string,
    amount: PropTypes.number,
    conversionRate: PropTypes.number,
  };

  handleChangeText = (amount) => {
    const { dispatch } = this.props;
    dispatch(changeCurrencyAmout(amount));
  };

  handlePressBaseCurrency = () => {
    console.log('press base currency');

    this.props.navigation.navigate('CurrencyList', { title: 'Base Currency' });
  };

  handlePressQuoteCurrency = () => {
    console.log('press quote currency');
    this.props.navigation.navigate('CurrencyList', { title: 'Quote current' });
  };

  handleSwapCurrency = () => {
    const { dispatch } = this.props;
    dispatch(swapCurrency());
  };


  handleOptionsPress = () => {
    console.log('options press');
    this.props.navigation.navigate('Options');
  };

  render() {
    const quotePrice = (this.props.amount * this.props.conversionRate).toFixed(2);
    return (
      <Container>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <Header onPress={this.handleOptionsPress} />
        <KeyboardAvoidingView behavior="padding">
          <Logo />
          <InputWithButton
            buttonText={this.props.baseCurrency}
            onPress={this.handlePressBaseCurrency}
            defaultValue={this.props.amount.toString()}
            keyboardType="numeric"
            onChangeText={this.handleChangeText}
          />
          <InputWithButton
            editable={false}
            buttonText={this.props.quoteCurrency}
            onPress={this.handlePressQuoteCurrency}
            value={quotePrice}
          />
          <LastConverted
            date={TEMP_LAST_CONVERTED}
            base={this.props.baseCurrency}
            quote={this.props.quoteCurrency}
            conversionRate={TEMP_CONVERSION_RATE}
          />
          <ClearButton
            onPress={this.handleSwapCurrency}
            text="Reverse Currencies"
          />
        </KeyboardAvoidingView>
      </Container>
    );
  }
}
const mapStateToProps = (state) => {
  const {baseCurrency} = state.currencies;
  const {quoteCurrency} = state.currencies;
  const conversionSelector = state.currencies.conversions[baseCurrency] || {};
  const rates = conversionSelector.rates || {};

   return {
    baseCurrency,
    quoteCurrency,
    amount: state.currencies.amount,
    conversionRate: rates[quoteCurrency] || 0,

  };
};

export default connect(mapStateToProps)(Home);
