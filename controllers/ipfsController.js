const sendIpfsData = (req, res) => {
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
  res.send(finalData);
};

module.exports = { sendIpfsData };
