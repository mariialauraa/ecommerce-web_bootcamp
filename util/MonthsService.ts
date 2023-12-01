import { ptBR } from 'date-fns/locale';

const MonthsService = {
  execute(): string[] {
    const months = [];
    for (var i = 0; i < 12; i++) {
      const month = ptBR.localize.month(i);
      //transforma a primeira letra em maiúsculo e faz a concatenação com o restante da palavra
      //e adiciona no array 'months.push'
      months.push(month[0].toUpperCase() + month.slice(1));
    }

    return months;
  }
}

export default MonthsService;