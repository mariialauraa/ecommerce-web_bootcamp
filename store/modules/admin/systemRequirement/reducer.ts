// funções que atualizam o estado e descreve uma mudança no estado
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import SystemRequirement from '../../../../dtos/SystemRequirement';

// função do Redux Toolkit que permite criar um slice do estado Redux 
// aceita um objeto de configuração que descreve o nome do slice, o estado inicial e os reducers
const systemRequirementSlice = createSlice({
  name: 'systemRequirement',
  initialState: null,
  reducers: {
    // recebe o estado atual (state) e a ação (action) como argumentos
    // o action.payload contém os dados do requisito do sistema e,
    // ao retornar state = action.payload, você está substituindo o estado atual pelo novo valor
    setSystemRequirementToEdit(state: SystemRequirement, action: PayloadAction<SystemRequirement>) {
      return state = action.payload;
    },
    // é usado para limpar o requisito do sistema a ser editado,
    // é útil quando você deseja desfazer a edição de um requisito do sistema
    clearSystemRequirementToEdit(state: SystemRequirement) {
      return state = null;
    }
  }
});

export const { setSystemRequirementToEdit, clearSystemRequirementToEdit } = systemRequirementSlice.actions;
export default systemRequirementSlice.reducer;