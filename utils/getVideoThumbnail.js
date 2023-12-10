const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
const { config } = require("dotenv");
config();

// APYHUB endpoint URL
const apiUrl = 'https://api.apyhub.com/generate/video-thumbnail/file';

const apyToken = process.env.APYHUB_API;

const generateThumbnail = async() => {
  const form = new FormData();
  form.append('video', fs.readFileSync('video.mp4'), 'video.mp4');
  form.append('time', '1');
  form.append('size', '400x300');

  const response = await axios.post(
    'https://api.apyhub.com/generate/image-thumbnail/file/url',
    form,
    {
      params: {
        'output': 'image_thumbnail.png'
      },
      headers: {
        ...form.getHeaders(),
        'apy-token': apyToken,
        'content-type': 'multipart/form-data'
      }
    }
  );
  const img_tn_url = response.data.data;
  const filePath = 'videoTnUrl.txt';
  fs.writeFile(filePath, img_tn_url, (err) => {
    if (err) {
      console.error('Error writing to file:', err);
    } else {
      console.log('Value written to file successfully:', filePath);
    }
  });
}

generateThumbnail().catch(e => console.log(e));