const Memos = require('../model/memoModel.js');

module.exports = {
  getMemos: (req, res) => {
    Memos.find({})
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(404);
      });
  },
  addMemo: (req, res) => {
    const newMemo = req.body;

    Memos.create(newMemo)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(404);
      });
  },
  // editMemo: (req, res) => {
  //   Memos.findOneAndUpdate(req.body, { $set: { memoTile: , memoText: } }, { new: true })
  //   .then((data) => {
  //     res.json(data);
  //   })
  //   .catch((err) => {
  //     res.sendStatus(404);
  //   })
  // },
  deleteMemo: (req, res) => {
    Memos.findOneAndRemove({ _id: req.body.memoId })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        console.log(err);
        res.status(404).send(err);
      });
  },
};
