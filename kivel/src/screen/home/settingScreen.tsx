import {
    KakaoOAuthToken,
    KakaoProfile,
    getProfile as getKakaoProfile,
    login,
    logout,
    unlink,
    KakaoAccessTokenInfo,
    getAccessToken,
  } from '@react-native-seoul/kakao-login';
import React, {useState} from 'react';
import { View , StyleSheet, Button} from 'react-native';
import { ApplicationState, kakaoLogin } from '../../redux/store';  
import { useSelector, useDispatch } from 'react-redux';
  
  export default function settingScreen() : React.ReactElement {
    const dispatch = useDispatch()
    const {user, error} = useSelector((state : ApplicationState) => state.userReducer);
    
    const login = () =>{
        dispatch(kakaoLogin());
    }

    console.log('setting : ', user)

    // const [result, setResult] = useState<string>('');
  
    // const signInWithKakao = async (): Promise<void> => {
    //   const token: KakaoOAuthToken = await login();
  
    //   setResult(JSON.stringify(token));
    // };
  
    // const refreshTest = async (): Promise<void> =>{
    //     const test : KakaoAccessTokenInfo = await getAccessToken();

    //     console.log(test)
    // }
    // const signOutWithKakao = async (): Promise<void> => {
    //   const message = await logout();
  
    //   setResult(message);
    // };
  
    // const getProfile = async (): Promise<void> => {
    //   const profile: KakaoProfile = await getKakaoProfile();
        
    //   setResult(JSON.stringify(profile));
    // };
  
    // const unlinkKakao = async (): Promise<void> => {
    //   const message = await unlink();
  
    //   setResult(message);
    // };
  
    // console.log(result)

    return (
        
      <View style={styles.container}>
        
        <View style={styles.ButtonWrapper}>
          <Button 
            onPress={() => login()}
            title={'카카오 로그인'}
          />
          <View style={{marginTop: 12, backgroundColor : 'red'}} />
          {/* <Button  
            onPress={() => getProfile()}
            title={'프로필 조회'}
          />
          <View style={{marginTop: 12}} />
          <Button
            onPress={() => unlinkKakao()}
            title={'링크 해제'}
          />
          <View style={{marginTop: 12}} />
          <Button
            onPress={() => signOutWithKakao()}
            title={'카카오 로그아웃'}
          /> */}
          <View style={{marginTop: 40}} />
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
      container : {    
        flex: 1,
        alignSelf: 'stretch',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        overflow: 'hidden',
      },
      ButtonWrapper : {
        position: 'absolute',
        bottom: 40,
        width: '85%',
        alignSelf: 'center',
      }
  })