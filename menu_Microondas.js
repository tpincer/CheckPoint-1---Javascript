function results(tempoAlimento, tempoEscolhido) {
    if (tempoEscolhido < tempoAlimento) {
        console.log("tempo insuficiente");
    } else if (tempoEscolhido > (tempoAlimento * 2) && (tempoEscolhido <= (tempoAlimento * 3))) {
        console.log("A comida queimou");
    } else if (tempoEscolhido >= ((tempoAlimento * 3) + 1)){
        console.log("Kabumm");
    } else {
        console.log(" Prato pronto, bom apetite!!!");            
    }    
}

function microondas(alimento, tempo) {
    switch (alimento){
        case "Pipoca":
            return results(10, tempo);
            break;

        case "Macarrão":
            return results(8, tempo);
            break;    

        case "Carne":
            return results(15, tempo);
            break;       
            
        case "Feijão":
            return results(12, tempo);
            break;     

        case "Brigadeiro":
            return results(8, tempo);
            break;    
        default:
            console.log("Prato inexistente");    
            break;    
    }
}
console.log(` Opções:
1 - Pipoca – 10 segundos (padrão);
2 - Macarrão – 8 segundos (padrão);
3 - Carne – 15 segundos (padrão);
4 - Feijão – 12 segundos (padrão);
5 - Brigadeiro – 8 segundos (padrão); 
`);
microondas("Brigadeiro", 8)