class HomeController {

    // dentro do homeRoute a funcao home é chamada e renderizada através de uma rota executando o home.ejs
    home(req,res) {
        res.render("home.ejs");
    }
}

module.exports = HomeController;