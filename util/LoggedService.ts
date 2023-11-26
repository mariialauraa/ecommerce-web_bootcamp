import Cookie from 'js-cookie';

const LoggedService = {
  execute(): boolean {
    const apiData = Cookie.get('@api-data');
    //avalia o valor booleano 'T or F'
    return !!apiData; 
  }
}

export default LoggedService;