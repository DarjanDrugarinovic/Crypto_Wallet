import { Alert } from "react-native";

const ErrorDialog = ({ error }) => {
  return Alert.alert(String(error));
};

export default ErrorDialog;
