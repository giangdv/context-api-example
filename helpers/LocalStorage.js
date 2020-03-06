import AsyncStorage from '@react-native-community/async-storage';

export default class LocalStorage {
  static token = null;

  static async init() {
    LocalStorage.token = await AsyncStorage.getItem("token");
  }
}
