const recommendEmployee = async (req, res) => {
  try {
    res.json({
      recommendation:
        'Top performer eligible for promotion',
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  recommendEmployee,
};