import React from 'react'
import { View, StyleSheet, Text, Button } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

interface OCRgoogleProps {

}

export default function OCRgoogle(props : OCRgoogleProps) {


    


    const [label, setLabel] = React.useState();
    const [text, setText] = React.useState();
    const [docText, setDocText] = React.useState();
    const [web, setWeb] = React.useState();

    const callGoogleVIsionApi = async (base64: String) => {
        
        let url: string = "https://vision.googleapis.com/v1/images:annotate?key=" + "AIzaSyA_6WHOi4peWyiPalbS5c4NUnW_PnxMIQM";
        await fetch(url, {
          method: 'POST',
          body: JSON.stringify({
            requests: [
              {
                image: {
                  content: base64,
                },
                features: [
                  { type: 'LABEL_DETECTION', maxResults: 10 },
                  { type: 'TEXT_DETECTION', maxResults: 5 },
                  { type: 'DOCUMENT_TEXT_DETECTION', maxResults: 5 },
                  { type: 'WEB_DETECTION', maxResults: 5 },
                ],
              },
            ],
          }),
        })
          .then((res) => res.json())
          .then((data) => {
              console.log(data)
          })
          .catch((err) => console.log('error : ', err));
      };

      const recognizeFromPicker = async () => {
        try {
          const image : any = await ImagePicker.openPicker({includeBase64 : true});
          callGoogleVIsionApi(image.data)
        } catch (err) {
          if (err.message !== 'User cancelled image selection') {
            console.error(err);
          }
        }
      };
    //   
        return (
            <View>
                <Button title="버튼" onPress={() => {recognizeFromPicker()}}></Button>
                <Text>웹베베베</Text>
            </View>
        );
}
const styles = StyleSheet.create({})