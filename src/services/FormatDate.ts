class FormatDate {
  //*****   MÉTODO DE CONVERSÃO DE DATAS US TO BR   *****
  dateUsToBr() {
    let datetoformat: Date = new Date();
    //Funções auxiliares para formatar a data sem zero para inserir o zero
    // "5/2/2022" ---> "05/02/2022"
    function padTo2Digits(num: number) {
      return num.toString().padStart(2, "0");
    }
    function formatDate(date: Date) {
      return [
        padTo2Digits(date.getDate()),
        padTo2Digits(date.getMonth() + 1),
        date.getFullYear(),
      ].join("/");
    }

    let date = formatDate(datetoformat);

    return { date };
  }

  //***** MÉTODO DE CONVERSÃO DE DATAS US TO BR/DADOS *****
  dateUsToBrWithData(date: Date) {
    //Funções auxiliares para formatar a data sem zero para inserir o zero
    // "5/2/2022" ---> "05/02/2022"
    function padTo2Digits(num: number) {
      return num.toString().padStart(2, "0");
    }
    function formatDate(date: Date) {
      return [
        padTo2Digits(date.getDate()),
        padTo2Digits(date.getMonth() + 1),
        date.getFullYear(),
      ].join("/");
    }

    let dateFormatted = formatDate(date);

    return { dateFormatted };
  }

  //*****   MÉTODO DE CONVERSÃO DE DATAS BR TO US   *****
  dateBrToUs() {
    let datetoformat: Date = new Date();
    //Funções auxiliares para formatar a data sem zero para inserir o zero
    // "2022-2-5" ---> "2022-02-05"
    function padTo2Digits(num: number) {
      return num.toString().padStart(2, "0");
    }
    function formatDate(date: Date) {
      return [
        date.getFullYear(),
        padTo2Digits(date.getMonth() + 1),
        padTo2Digits(date.getDate()),
      ].join("-");
    }

    let date = formatDate(datetoformat);

    return { date };
  }

  //***** MÉTODO DE CONVERSÃO DE DATAS BR TO US/DADOS *****
  dateBrToUsWithData(date: Date) {
    //Funções auxiliares para formatar a data sem zero para inserir o zero
    // "5-2-2022" ---> "05-02-2022"
    var newDate = new Date(date)
    
    function padTo2Digits(num: number) {
      return num.toString().padStart(2, "0");
    }
    function formatDate(date: Date) {
      
      return [
        newDate.getFullYear(),
        padTo2Digits(newDate.getMonth() + 1),
        padTo2Digits(newDate.getDate()),
      ].join("-");
    }

    var dateFormatted = formatDate(newDate);

    return { dateFormatted };
  }
}

export default FormatDate;
