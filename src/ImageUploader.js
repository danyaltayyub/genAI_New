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
  
  const handleImageUpload = () => {
    if (selectedImage) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64Data = reader.result.toString();

        console.log(typeof(base64Data),base64Data,'\asdasd')
        sendImageToEndpoint(base64Data);
      };
      reader.readAsDataURL(selectedImage);
    }
  };


    //     json={
    //         "image": sample_base64,
    //         "theme": "Surprise me"
    //     }

  const checkCredits = async() => {
    const endpoint_url = "http://api.pebblely.com/credits/v1/"
    const headers={
        "Content-Type": "application/json",
        "Accept": "*/*",
        "Connection": "keep-alive",
        "X-Pebblely-Access-Token": "7c9dbfb1-e2ad-4c8e-9aaa-91aa1db360d2",
    }
    axios.get(endpoint_url, {headers})
    .then(resp => {
        console.log("Response", resp)
    })
    .error(err => {
        console.log('Error', err)
    })
  }

  const sendImageToEndpoint = async(base64Data) => {
    const endpointUrl = "https://api.pebblely.com/create-background/v1/"; 
    // fetch(endpointUrl, {
    //   method: "POST",
    //   headers:{
    //     "Content-Type": "application/json",
    //     "X-Pebblely-Access-Token": "7c9dbfb1-e2ad-4c8e-9aaa-91aa1db360d2",
    // },
    // body:{
    //             "image": base64Data,
    //             "theme": "Surprise me"
    //         }
    // })

    
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log('this is data:',data)
    //     // Handle the response from the endpoint
    //   })
    //   .catch(error => {console.log('THis is Else',error)
    //     // Handle any errors that occur during the request
    //   });
    console.log('here', base64Image)

    const headers={
        "Content-Type": "application/json",
        "X-Pebblely-Access-Token": "7c9dbfb1-e2ad-4c8e-9aaa-91aa1db360d2",
    }
    const data={
        "image": base64Image,
        "theme": "Surprise me"
    }
    axios.post(endpointUrl, data, {headers})
    .then(res => {
        console.log("Response",res)
    })
    .catch(error => {
        console.log("Error", error)
    })

    // const data = await axios.get(endpointUrl, {
    //     withCredentials:false,
    //     headers: {
    //         'HOST':'www.pebblely.com',
    //         'Content-Type': 'application/json',
    //         "X-Pebblely-Access-Token": "7c9dbfb1-e2ad-4c8e-9aaa-91aa1db360d2"   ,
    //         'Access-Control-Allow-Origin':"*"
    //          }
    //   }
    // )
    //   console.log({data})
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