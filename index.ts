enum Patente{
    FERRO = "Ferro",
    BRONZE = "Bronze",
    PRATA = "Prata",
    OURO = "Ouro",
    DIAMANTE = "Diamante",
    LENDARIO = "Lendário",
    IMORTAL = "Imortal"
}

const patentes = [
    {limiteInferior: 101, nome: Patente.IMORTAL},
    {limiteInferior: 91, nome: Patente.LENDARIO},
    {limiteInferior: 81, nome: Patente.DIAMANTE},
    {limiteInferior: 51, nome: Patente.OURO},
    {limiteInferior: 21, nome: Patente.PRATA},
    {limiteInferior: 11, nome: Patente.BRONZE},
    {limiteInferior: 10, nome: Patente.FERRO},

]


function calculaPatente(qtdVitorias: number, qtdDerrotas: number):string {
    let saldoRankeadas = qtdVitorias - qtdDerrotas

    for(const patente of patentes){
        if(qtdVitorias >= patente.limiteInferior){
            return `O Herói tem de saldo de ${saldoRankeadas} está no nível de ${patente.nome}`
        }
    }
    
    return ""
}