import React from 'react'
import { StyleSheet, Text, View, Button, ActivityIndicator } from 'react-native'
import { ApplicationState, kakaoLogin } from '../../redux/store';  
import { useSelector, useDispatch } from 'react-redux';
import Modal from '../../components/common/modal'

export default function homeScreen() {

    
    const {user, error} = useSelector((state : ApplicationState) => state.userReducer);
    console.log('home : ', user)
    
    const [modalVisible, setModalVisible] = React.useState(false);
    const onStart = () => {
        setModalVisible(true);
    };

    return (
        
        <View style={{ flex : 1, backgroundColor : 'white'}}>
            <Button title='아시부레' onPress={() => onStart()}></Button>
            <ActivityIndicator size="large" color="#123456" ></ActivityIndicator>
            <Modal
                modalVisible = {modalVisible}
                setModalVisible = {setModalVisible}
            >
                
                <View style={{backgroundColor : 'white', borderRadius : 15,}}>
                <Text>asldj alskd</Text>
                <Text>asldj alskd</Text>
                <Text>asldj alskd</Text>
                <Text>asldj alskd</Text>
                <Text>asldj alskd</Text>
                <Text>asldj alskd</Text>
                <Text>asldj alskd</Text>
                <Text>asldj alskd</Text>
                <Text>asldj alskd</Text>

                    <Button title ="우에에ㅔㅇㄱ" onPress= {() => {setModalVisible(false)}}></Button>
                </View>
                
            </Modal>
            
        </View>
    )
}

const styles = StyleSheet.create({})
