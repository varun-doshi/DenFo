const axios = require("axios");

const getMetadataUrl = async (metadataUri) => {
  let metadataUrl;
  if (metadataUri.startsWith("ipfs://")) {
    metadataUrl = `https://ipfs.io/ipfs/${metadataUri.split("ipfs://")[1]}`;
  } else if (metadataUri.startsWith("https://")) {
    metadataUrl = metadataUri;
  }
  console.log("Metadata uri before ", metadataUri);
  console.log("Metadata URI", metadataUrl);
  const metadata = await axios.get(metadataUrl);
  return metadata;
};

module.exports = getMetadataUrl;
