import React, { useState } from 'react';
import axios from 'axios';
const ImageUploader = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [base64Image, setBase64Image] = useState('');

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setSelectedImage(file);

        const reader = new FileReader()
        reader.onload = () => {
            const base64Data = reader.result;
            setBase64Image(base64Data)
        };
        reader.readAsDataURL(file)
    };

    const checkCredits = async () => {
        const endpoint_url = "http://api.pebblely.com/credits/v1/"
        const headers = {
            "Content-Type": "application/json",
            "Accept": "*/*",
            "Connection": "keep-alive",
            "X-Pebblely-Access-Token": "7c9dbfb1-e2ad-4c8e-9aaa-91aa1db360d2",
        }
        axios.get(endpoint_url, { headers })
            .then(resp => {
                console.log("Response", resp)
            })
            .error(err => {
                console.log('Error', err)
            })
    }

    const sendImageToEndpoint = async (base64Data) => {
        const endpointUrl = "https://api.pebblely.com/create-background/v1/";
        console.log('here base64Image=====', base64Image)

        const headers = {
            "Content-Type": "application/json",
            "X-Pebblely-Access-Token": "7c9dbfb1-e2ad-4c8e-9aaa-91aa1db360d2",
        }
        const data = {
            "image": base64Image,
            "theme": "Surprise me"
        }
        axios.post(endpointUrl, data, { headers })
            .then(res => {
                console.log("Response", res)
            })
            .catch(error => {
                console.log("Error", error)
            })
    };
    return (
        <div>
            <input type='file' onChange={handleImageChange} />
            <button onClick={sendImageToEndpoint}>Upload</button>
            <br />
            <button onClick={checkCredits}>Reterive Credits</button>
        </div>
    );
};
export default ImageUploader;