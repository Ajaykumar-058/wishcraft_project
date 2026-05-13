exports.generateCard = async (req, res) => {

  try {

    const {
      template_id,
      final_image_url
    } = req.body;

    const user_id = req.user.id;

    res.json({
      success: true,
      message: "Card generated",
      data: {
        template_id,
        final_image_url,
        user_id
      }
    });

  } catch (err) {

    res.status(500).json({
      error: err.message
    });
  }
};