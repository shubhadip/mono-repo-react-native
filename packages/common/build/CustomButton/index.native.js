import * as React from 'react';
import { View, Button, StyleSheet } from 'react-native';
var styles = StyleSheet.create({
    viewContainer: {
        backgroundColor: '#fff',
    }
});
;
var defaultProps = {
    customContainerClass: {},
    buttonColor: 'blue',
    disabled: false
};
var ButtonNative = function (props) {
    var handlePress = function () {
        props.onClick ? props.onClick() : null;
    };
    var title = props.text || 'Button Native  I am ';
    return (React.createElement(View, { style: [styles.viewContainer, props.customContainerClass] }, props.children ? props.children : React.createElement(Button, { title: title, onPress: handlePress, color: props.buttonColor })));
};
ButtonNative.defaultProps = defaultProps;
export default ButtonNative;
//# sourceMappingURL=index.native.js.map