import './App.css';
// import logo from './sample.png'
import ImageUploader from "./ImageUploader"
function App() {

  // """
  // Sample code for querying Pebblely API to create a new background
  // """
  // import base64
  // import io

  // import requests
  // from PIL import Image


  // # View sample image
  // # image = Image.open(io.BytesIO(sample_url_response.content))
  // # image.show()

  // # Convert image to Base64
  // buffer = io.BytesIO(sample_url_response.content)
  // sample_base64 = base64.b64encode(buffer.getvalue()).decode('utf-8')

  // # Query API
  // api_url = "https://api.pebblely.com"
  // endpoint = "/create-background/v1/"
  // response = requests.post(
  //     api_url + endpoint,
  //     headers={
  //         "Content-Type": "application/json",
  //         "X-Pebblely-Access-Token": "fa9ac919-966f-49f0-9b13-25b33e9b979b",
  //     },
  //     json={
  //         "image": sample_base64,
  //         "theme": "Surprise me"
  //     }
  // )

  // if response.ok:
  //     # Success! View image and remaining credits
  //     response_json = response.json()
  //     print(f'Remaining credits: {response_json["credits"]}')
  //     image_b64 = response_json["data"]
  //     image_encoded = image_b64.encode("utf-8")
  //     image_bytes = io.BytesIO(base64.b64decode(image_encoded))
  //     image = Image.open(image_bytes)
  //     image.show()
  // else:
  //     # Error - print error message
  //     print(response.json())





  return (
    <div className="App">
      <h1>Pebel App</h1>

      <ImageUploader />
      {/* <img alt="sample" src={logo}/> */}
    </div>
  );
}

export default App;
