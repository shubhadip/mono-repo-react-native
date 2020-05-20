import * as React from 'react';
import {View, Button, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    viewContainer: {
      backgroundColor: '#fff',
    }
  });

  interface Iprops {
      text?: string
      onClick?: () => void
      customContainerClass?: object
      buttonColor?: string
      disabled?: boolean
  };

  const defaultProps: Iprops = {
      customContainerClass: {},
      buttonColor: 'blue',
      disabled: false
  }

const ButtonNative : React.FunctionComponent<Iprops> = (props) => {

    const handlePress = () => {
        props.onClick ? props.onClick() : null
    }

    const title = props.text || 'Button Native  I am '

    return (
        <View style={[styles.viewContainer, props.customContainerClass]}>
            {props.children ? props.children : <Button title={title} onPress={handlePress} color={props.buttonColor} />}
        </View>
    )
}

ButtonNative.defaultProps = defaultProps;

export default ButtonNative;