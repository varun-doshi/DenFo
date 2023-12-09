const getMetadataUrl = async (metadataUri) => {
  let metadataUrl;
  if (metadataUri.startsWith("ipfs://")) {
    metadataUrl = `https://ipfs.io/ipfs/${metadataUri.split("ipfs://")[1]}`;
  } else if (metadataUri.startsWith("https://")) {
    metadataUrl = metadataUri;
  }
  // const arweaveLink = metadataUri.toString();
  console.log("Metadata uri before ", metadataUri);
  // metadataUri = `https://qatfrcthwimr2j432bykj5awy6juqgytxrwjvtmnhkaorgqm4y2q.arweave.net/${
  //   arweaveLink.split("ar://")[1]
  // }`;
  console.log("Metadata URI", metadataUrl);
  const metadata = await axios.get(metadataUrl);
  return metadata;
};

module.exports = getMetadataUrl;
