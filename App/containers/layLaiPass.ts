import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { useEffect, useState } from 'react';
import SCREEN from '../navigators/RouteKey';
import AsyncStorage from '@react-native-async-storage/async-storage';

const layLaiPass = () => {
  const navigation = useNavigation();
  const [Name, setName] = useState('');
  const [Gmail, setGmail] = useState('');
  const [KoTrung, setKoTrung] = useState(false);
  const [PassXuat,setPassXuat] =useState('');
  const onChangeName = (value: string) => {
    setName(value);
  };

  const onChangeGmail = (value: string) => {
    setGmail(value);
  };
  const PassX = async () =>{
    const PassXX = await AsyncStorage.getItem('PassXuat');
    setPassXuat(PassXX);
  }
  useEffect (()=>{
    PassX();
  },[]);
  const onSave = () => {
    setKoTrung(false);
    axios
      .get('https://653a3aeae3b530c8d9e958c7.mockapi.io/api/register/account')
      .then((response) => {
        const user = response.data.find(
          (account: any) => account.name === Name && account.email === Gmail
        );
        if (user) {
          AsyncStorage.setItem('PassXuat', user.password)
          navigation.navigate(SCREEN.TEXTPASS_SCREEN);
        } else {
          setKoTrung(true);
        }
      })
      .catch((err) => {
        console.error('Lỗi:', err);
        // Hiển thị thông báo lỗi
      });
  };

  return {
    Name,
    setName,
    Gmail,
    setGmail,
    onChangeName,
    onChangeGmail,
    onSave,
    KoTrung,
    setKoTrung,
    PassXuat,
  };
};

export default layLaiPass;
