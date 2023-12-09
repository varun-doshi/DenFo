require("dotenv").config();
const lighthouse = require("@lighthouse-web3/sdk");

const sendIpfsData = async (req, res) => {
  const { fCid, name, fType, description, timestamp } = req.body;

  //create vector from the description

  const finalData = {
    fCid,
    image: fCid,
    name,
    description,
    context_vec: "con",
    attributes: [
      {
        trait_type: "fType",
        value: fType,
      },
      {
        trait_type: "timestamp",
        value: timestamp,
      },
    ],
  };
  let mCid;
  let jsonStrign = JSON.stringify(finalData);
  const bufferData = Buffer.from(jsonStrign);
  try {
    mCid = await uploadLighthouse(bufferData);
  } catch (error) {
    console.log(error);
  }
  res.send(mCid);
};

const uploadLighthouse = async (data) => {
  const response = await lighthouse.uploadText(
    data,
    process.env.LIGHTHOUSE_API_KEY,
    data.name
  );
  //console.log("https://gateway.lighthouse.storage/ipfs/" + response.data.Hash);
  return response.data.Hash;
};

module.exports = { sendIpfsData };
