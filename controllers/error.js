//This exports the .get404 and gets the get404 function to render 404
exports.get404 = (req, res, next) => {
    res.status(404).render('404', { pageTitle: 'Page Not Found' });
  };
  