const MyModel = require("../Models/model");

exports.createData = async (req, res) => {
  try {
    const newData = new MyModel(req.body);
    await newData.save();
    res.json(newData);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAllData = async (req, res) => {
  try {
    const data = await MyModel.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateData = async (req, res) => {
  try {
    const id = req.params.id;
    const newData = req.body;
    await MyModel.findByIdAndUpdate(id, newData);
    res.json({ message: 'Data updated successfully' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteData = async (req, res) => {
  try {
    const id = req.params.id;
    await MyModel.findByIdAndDelete(id);
    res.json({ message: 'Data deleted successfully' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
