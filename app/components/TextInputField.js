import React, {useState, useEffect, useRef} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  TouchableWithoutFeedback,
  Text,
  Easing,
  TouchableOpacity,
  Animated,
} from 'react-native';
import Close from '../assets/svg/close.svg';
import Restart from '../assets/svg/restart.svg';
import Eye from '../assets/svg/eye.svg';
import EyeSlash from '../assets/svg/eye-slash.svg';
const TextInputField = props => {
  const {
    label,
    viewStyle,
    inputStyle,
    errorText,
    value,
    onPress,
    button,
    mark,
    component,
    onBlur,
    onFocus,
    ...restOfProps
  } = props;
  const [isFocused, setIsFocused] = useState(false);
  const [clear, setClear] = useState(false);
  const inputRef = useRef(null);
  const focusAnim = useRef(new Animated.Value(0)).current;
  let width = 16;
  let height = 16;
  let buttonIcon;
  switch (button) {
    case 'Close':
      buttonIcon = (
        <Close width={width} height={height} style={styles.inputButton} />
      );
      break;
    case 'Restart':
      buttonIcon = (
        <Restart width={width} height={height} style={styles.inputButton} />
      );
      break;
    case 'Eye':
      buttonIcon = (
        <Eye width={width} height={height} style={styles.inputButton} />
      );
      break;
    case 'EyeSlash':
      buttonIcon = (
        <EyeSlash width={width} height={height} style={styles.inputButton} />
      );
      break;
    default:
      buttonIcon = null;
      break;
  }
  const colors = {
    black: '#000000',
    gray: '#868A9A',
    red: '#ff0000',
  };
  let color = isFocused || !!value ? colors.black : colors.gray;
  if (errorText) {
    color = colors.red;
  }

  useEffect(() => {
    Animated.timing(focusAnim, {
      toValue: isFocused || !!value ? 1 : 0,
      duration: 150,
      easing: Easing.bezier(0.4, 0, 0.2, 1),
      useNativeDriver: true,
    }).start();
  }, [focusAnim, isFocused]);

  return (
    <View
      style={[
        styles.inputContainer,
        // eslint-disable-next-line react-native/no-inline-styles
        {
          borderWidth: 1,
          borderColor: !!errorText == true ? color : 'white',
          marginBottom: !!errorText == true ? 15 : 0,
        },
        !!viewStyle && viewStyle,
      ]}>
      <TextInput
        style={[
          styles.input,
          {
            borderColor: color,
            color: colors.gray,
          },
          !!inputStyle && inputStyle,
        ]}
        ref={inputRef}
        {...restOfProps}
        value={value}
        onBlur={event => {
          setIsFocused(false);
          onBlur?.(event);
        }}
        onFocus={event => {
          setIsFocused(true);
          onFocus?.(event);
        }}
      />
      <TouchableWithoutFeedback onPress={() => inputRef.current?.focus()}>
        <Animated.View
          style={[
            styles.labelContainer,
            {
              transform: [
                {
                  scale: focusAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [1, 0.7],
                  }),
                },
                {
                  translateY: focusAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [10, -5],
                  }),
                },
                {
                  translateX: focusAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [16, 10],
                  }),
                },
              ],
            },
          ]}>
          <Text
            style={[
              styles.label,
              {
                color: isFocused || !!value ? colors.black : colors.gray,
              },
            ]}>
            {label}
          </Text>
        </Animated.View>
      </TouchableWithoutFeedback>
      {!!errorText && <Text style={styles.error}>{errorText}</Text>}
      {isFocused || !!value 
        ? ( buttonIcon 
            ? ( <TouchableWithoutFeedback onPress={() => { onPress() }}>
                  {buttonIcon}
                </TouchableWithoutFeedback>) 
            : null) 
        : ( !!mark && {...mark})
      }
      {isFocused || value ? (component ? {...component} : null) : null}
    </View>
  );
};



const styles = StyleSheet.create({

  input: {
    fontFamily: 'Proxima Nova', 
    fontSize: 16,
    lineHeight:16,
    fontWeight:'400',
    height:'100%',
    paddingLeft:20,
    paddingTop:18,
    borderColor: '#F7F6FB', 
    borderRadius: 10, 
    width:'100%',
  },

  inputContainer:{
    width:'100%',
    backgroundColor: 'white',
    height:50,
    borderRadius:10,
    zIndex:3,
    marginTop:10,
  },

  input: {
    fontFamily: 'Proxima Nova',
    fontSize: 16,
    lineHeight: 16,
    fontWeight: '400',
    height: '100%',
    paddingLeft: 20,
    paddingVertical: 1,
    paddingTop: 15,
    borderColor: '#F7F6FB',
    backgroundColor: 'white',
    borderRadius: 10,
    width: '100%',
    position: 'relative',
  },

  labelContainer: {
    position: 'absolute',
    marginTop: 3,
    zIndex: 5,
  },

  label: {
    fontFamily: 'Proxima Nova',
    fontSize: 16,
    fontWeight: '400',
  },

  error: {
    marginLeft: 12,
    fontSize: 13,
    color: '#ff0000',
    fontFamily: 'Proxima Nova',
  },

  inputMy: {
    margin: 10,
    backgroundColor: 'white',
  },

  inputButton:{
    position:'absolute',
    width:16,
    height:16,
    alignSelf:'flex-end',
    marginRight:'20%',
    marginTop:15,
    zIndex:99
  },

  inputRow: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#F7F6FB',
  },

  inputButton: {
    position: 'absolute',
    alignSelf:'flex-end',
    width: 16,
    height: 16,
    marginTop: 15,
    paddingRight:50,
    zIndex: 99,
  },

});

export default TextInputField;
