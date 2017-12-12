import React from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

function Button({ iconName, onPress }){
    return (
            <TouchableHighlight onPressOut={onPress}>
                <FontAwesome name={iconName} size={80} color='white' />
            </TouchableHighlight>
    );
};

Button.propTypes = {
    iconName: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired
}

export default Button;

