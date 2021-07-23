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

  export const signInWithKakao = async (): Promise<KakaoOAuthToken> => {
    const token: KakaoOAuthToken = await login();
    
    return token
  };

  export const signOutWithKakao = async (): Promise<string> => {
    const message = await logout();

    return message
  };

  export const getProfile = async (): Promise<KakaoProfile> => {
    const profile: KakaoProfile = await getKakaoProfile();

    return profile
  };

  export const unlinkKakao = async (): Promise<string> => {
    const message = await unlink();
    
    return message
  };