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
    buttonColor: 'green',
    disabled: false
};
var ButtonWeb = function (props) {
    var handlePress = function () {
        props.onClick ? props.onClick() : null;
    };
    var title = props.text || 'Button';
    return (React.createElement(View, { style: [styles.viewContainer, props.customContainerClass] }, props.children ? props.children : React.createElement(Button, { title: title, onPress: handlePress, color: props.buttonColor, disabled: props.disabled })));
};
ButtonWeb.defaultProps = defaultProps;
export default ButtonWeb;
//# sourceMappingURL=index.web.js.map