const { createWorker } = require('tesseract.js');

const worker = createWorker();

(async () => {
    await worker.load();
    await worker.loadLanguage('eng');
    await worker.initialize('eng');
    //Placa: BRA2O20 Esperado: BRA2O20
    let { data: { text } } = await worker.recognize('https://utschbrasil.com/wp-content/uploads/2020/01/Placa-Mercosul_BRA_sem-difrativo-2020-1024x334.png');
    //Placa CSC-2013 Esperado: CSC2013
    //let { data: { text } } = await worker.recognize('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT88Vz2C3IxOATOEFuqUxZk6SuA9l4F3nupStovro0dM94BEK-lkzSZwpJ3c8mGVrKHoE&usqp=CAU');
    //Placa: VIP2E20 Esperado: VIP2E20
    //let { data: { text } } = await worker.recognize('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ71hkV5dxi3U10KHfSKzPcDETIHTUUvWrWTw&usqp=CAU');
    //Placa PLA-0000 Esperado: PLA0000
    //let { data: { text } } = await worker.recognize('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFycq-GByc2XEImH8uMFJwPF9X5lrRywYIXg&usqp=CAU');
    
    console.log(text);
    await worker.terminate();
    var element = "-";
    if (text.includes(element)) {
        console.log("Padrão antigo");
        text = text.replaceAll(/\W/gi, '');
        text = text.split("");
        console.table(text);
        text[0,1,2] = text[0,1,2].replace('0', 'O');
    } else {
        console.log("Padrão Mercosul")
        text = text.replaceAll(/\W/gi, '');
        text = text.split("");
        console.table(text);
        text[0,1,2,4] = text[0,1,2,4].replaceAll('0', 'O');
        text[3,5,6] = text[3,5,6].replace('O', '0');
    }
    text = text.join("");
    console.log(text);


    //let tratamento = text.slice(1, 8);
    //tratamento.split('');
    //console.log(tratamento);

    //tratamento = tratamento.replace("0", "O");


    // // if(tratamento[0,1,2,4] == "0"){
    // //     tratamento = tratamento[0,1,2,4].replace("0", "O");
    // // }
    // for (let index = 0; index < tratamento.length; index++) {
    //     const element = tratamento[index];
    //     // if (tratamento.indexOf(0)) {
    //     //     if (tratamento[index] == "0") {
    //     //         let teste = "O";
    //     //         console.log(teste);
    //     //     } else {
    //             let teste = element.replace("0", "O");
    //             console.log(teste);
    //         //}
    //     //}
    // };
    //console.log(tratamento);
})();

