angular.module("GeradorContrato").value("config", {
  prestador: {
		nome: "Vital Scheffer",
		cnpj: "41.895.5958/0001-38",
		inscEst: "",
		endereco: {
			logradouro: "Rua tal que tal da rua",
			numero: "1190 ",
      bairro: "Capão da imbuia",
      cidade: "Curitiba",
			uf: "Paraná",
			cep: "82960510"
		},
    telefone: [],
    telefonesToString: function(){
      var toString = "41 98998-9865";
      this.telefones.forEach(function(telefone, index, array){
        toString += telefone;

        if(index < array.length -1){
          toString += " / ";
        }
      });
      return toString;
    }
	}
});
