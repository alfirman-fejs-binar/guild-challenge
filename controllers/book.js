const homepage = (req, res) => {
  res.render("homepage.ejs");
};

const detailPage = (req, res) => {
  const id = req.params.id
  res.render("detail-page.ejs", {id: id} );
}


module.exports = { homepage, detailPage };
