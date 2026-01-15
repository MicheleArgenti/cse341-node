const mongodb = require('../data/database');
const objectId = require('mongodb').ObjectId;

const getAllContacts = async (req, res) => {
  const result = await mongodb.getDatabase().db('contacts').collection('contacts').find();
  result.toArray()
    .then((contacts) => {
      res.setHeader('Content-type', 'application/json');
      res.status(200).json(contacts);
    })
    .catch((err) => {
      res.status(500).json({ message: err });
    });
};

const getContactById = async (req, res) => {
  const contactId = new objectId(req.params.id);
  const result = await mongodb.getDatabase().db('contacts').collection('contacts').find({ _id: contactId });
  result.toArray()
    .then((contacts) => {
      res.setHeader('Content-type', 'application/json');
      res.status(200).json(contacts);
    })
    .catch((err) => {
      res.status(500).json({ message: err });
    });
};

module.exports = {
  getAllContacts,
  getContactById
};