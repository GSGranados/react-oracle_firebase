const controller = {}

controller.test = (req,res) => {

  const data = {
    Issue: "Cannot Join Meet in ChromeBook CN65",
    priority: 'P1',
    owner: 'Gcruz'
  }

  console.log("Send data from controller Issue");
  res.json(data);

};

module.exports = controller;