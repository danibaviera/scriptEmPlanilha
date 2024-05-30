function enviarEmailsAntesDaData() {
  var planilha = SpreadsheetApp.getActiveSpreadsheet();
  var aba = planilha.getSheetByName("lab");
  var dados = aba.getDataRange().getValues();


  for (var i = 1; i < dados.length; i++) { 
    var dataEnvioEmail = new Date(dados[i][3]); 


    var diaEnvioEmail = dataEnvioEmail.getDate()
    var mesEnvioEmail = dataEnvioEmail.getMonth()
    var anoEnvioEmail = dataEnvioEmail.getFullYear()
    var diadehojediaEnvioEmail = `${diaEnvioEmail}/${mesEnvioEmail}/${anoEnvioEmail}`


    var dataCalibracao = new Date(dados[i][4]); // Suponha que a data de calibração está na quinta coluna (índice 4)
   
    var today = new Date();
    var dia = today.getDate()
    var mes = today.getMonth()
    var ano = today.getFullYear()
    var diadehoje = `${dia}/${mes}/${ano}`


    console.log(diadehoje)
    console.log(diadehojediaEnvioEmail)
        if (diadehoje === diadehojediaEnvioEmail) {
     
      var destinatario = dados[i][0]; 
      var assunto = "Lembrete de Calibração";
      var mensagem = "Lembrete: A calibração para " + dados[i][1] + " está agendada para " + dataCalibracao.toDateString() + ". Por favor, verifique e não esqueça de enviar o equipamento!.";


      MailApp.sendEmail(destinatario, assunto, mensagem);
    }
  }
}
