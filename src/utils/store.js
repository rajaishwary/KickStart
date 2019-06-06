import { AsyncStorage } from 'react-native';

export async function getAuthDetails() {
  try {
    const data = await AsyncStorage.getItem('auth');
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function setAuthDetails(data) {
  try {
    await AsyncStorage.setItem('auth', data);
  } catch (error) {
    console.log(error);
  }
}

export async function deleteAuthDetails() {
  try {
    await AsyncStorage.removeItem('auth');
  } catch (error) {
    console.log(error);
  }
}
