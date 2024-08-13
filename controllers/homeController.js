listaUser = [];

class HomeController {

    // dentro do homeRoute a funcao home é chamada e renderizada através de uma rota executando o home.ejs
    home(req,res) {
        res.render("home.ejs");
    }

    cadastro(req,res) {
        res.render("form.ejs");
    }

    cadastroUser(req,res) {
        const nome = req.body.nome;
        const sobrenome = req.body.sobrenome;
        const nome_sobrenome = nome+sobrenome;

        listaUser.push(nome_sobrenome);
        res.render("lista.ejs", {"lista": listaUser});
    }
}

module.exports = HomeController;