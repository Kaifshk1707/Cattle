import { StyleSheet, Text, TextInput, TextStyle, View } from 'react-native'
import React, { FC } from 'react'
import { s, vs } from 'react-native-size-matters';
import { globalColor } from '../../styles/globalColor';

    interface AppTextInputProps {
      value: string
      onChangeText: (text: string) => void;
      placeholder: string;
      secureTextEntry?: boolean;
      keyboardType?: "default" | "email-address" | "numeric";
      style?: TextStyle
    }

const AppTextInput :FC<AppTextInputProps> = ({
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  keyboardType,
  style,
}) => {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      style={[styles.textInput, style]}
    />
  );
};

export default AppTextInput

const styles = StyleSheet.create({
  textInput: {
    height: vs(40),
    borderRadius: vs(25),
    borderWidth: 1.3,
    borderColor: globalColor.blueGray,
    paddingHorizontal: s(15),
    fontSize: s(16),
    backgroundColor: globalColor.white,
    width: "100%",
    marginBottom: vs(10),
  },
});