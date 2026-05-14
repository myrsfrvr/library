const Author = require('../models/authorModel');

exports.checkAuthor = async (req, res, next) => {
  try {
    const names = req.body.author;
    if (!names || !Array.isArray(names) || names.length === 0) {
      return res.status(400).json({
        status: 'fail',
        message: 'Book must include an author array',
      });
    }

    const existingAuthors = await Author.find({
      name: { $in: names },
    });
    const existingNames = existingAuthors.map(a => a.name);

    const missingNames = names.filter(
      name => !existingNames.includes(name)
    );

    const newAuthors = await Author.insertMany(
      missingNames.map(name => ({ name }))
    );

    const allAuthors = [...existingAuthors, ...newAuthors];

    req.body.author = allAuthors.map(a => a._id);

    next();
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.getAllAuthors = async (req, res) => {
  try {
    const authors = await Author.find();

    res.status(200).json({
      status: 'success',
      results: authors.length,
      data: {
        authors,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getAuthor = async (req, res) => {
  try {
    const author = await Author.findById(req.params.id);

    res.status(200).json({
      status: 'success',
      data: {
        author,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.createAuthor = async (req, res) => {
  try {
    const newAuthor = await Author.create(req.body);

    res.status(200).json({
      status: 'success',
      data: {
        author: newAuthor,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.updateAuthor = async (req, res) => {
  try {
    const author = await Author.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(200).json({
      status: 'success',
      data: {
        author,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.deleteAuthor = async (req, res) => {
  try {
    await Author.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
