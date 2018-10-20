class DateHelper {

    constructor() {

        throw new Error('Esta classe não pode ser instanciada');
    }

    static dataParaTexto(data) {
        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
    }

    static textoParaData(texto) {

        if (!/\d{4}-\d{2}-\d{2}/.test(texto))
            throw new Error('Deve estar no formato aaaa-mm-dd');

        return new Date(...texto.split('-').map((item, indice) => item - indice % 2));
    }

    static jsonToData(jsonDate) {
        let newDate = eval(jsonDate.replace(/\/Date\((\d+)\)\//gi, "new Date($1)"));
        return this.dataParaTexto(newDate);

    }

    static mesPorExtenso(num) {
        debugger
        let mes = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
            'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];

        return  `${mes[num - 1]} `
    }

    static dataComMesPorExtenso(texto) {
      
        let novaData = texto.split('/');
        let numMes = parseInt(novaData[1]);
        let mes = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
                   'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
        return `${novaData[0]} de ${mes[numMes - 1]} de  ${novaData[2]}` 
        
    } 
}