import { useState, useEffect } from 'react';
import AdminComponent from '../../../../components/shared/AdminComponent';
import TitleAdminPanel from '../../../../components/shared/TitleAdminPanel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faMicrochip } from '@fortawesome/free-solid-svg-icons';
import AdminListTable from '../../../../components/shared/AdminListTable';
import AdminDeleteModal from '../../../../components/shared/AdminDeleteModal';

import withAuthAdmin from '../../../../components/withAuthAdmin';

import useSwr from 'swr';
import UrlService from '../../../../util/UrlService';

import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';

import SystemRequirementsService from '../../../../services/systemRequirements';
import { toast } from 'react-toastify';

import NoData from '../../../../components/shared/NoData';
import SystemRequirement from '../../../../dtos/SystemRequirement';
import { setSystemRequirementToEdit } from '../../../../store/modules/admin/systemRequirement/reducer';

const defaultUrl = '/admin/v1/system_requirements';

const List: React.FC = () => {
  /* é usada para controlar se algum elemento deve ser exibido ou oculto na interface */
  const [show, setShow] = useState(false);
  /* armazenar a URL que será usada para buscar dados relacionados a requisitos do sistema */
  const [url, setUrl] = useState(defaultUrl);
  /* usada para rastrear qual requisito do sistema está prestes a ser removido ou excluído */
  const [systemRequirementToRemove, setSystemRequirementToRemove] = useState(0);

  /* extrai um valor específico do estado global, que está relacionado à pesquisa */
  const search = useSelector(state => state.search);
  /* permite lidar com o roteamento e a navegação programática no aplicativo */
  const router = useRouter();
  /* pode ser usada para enviar ações ao Redux, afetando o estado global da aplicação */
  const dispatch = useDispatch();

  /* 'mutate' é uma função que pode ser usada para forçar uma revalidação dos dados */
  const { data, error, mutate } = useSwr(url, SystemRequirementsService.index);

  /* realiza ações sempre que as dependências especificadas no array sofrerem alterações */
  /* útil para buscar dados relevantes com base nos filtros de pesquisa e na página atual */
  useEffect(() => {
    setUrl(
      defaultUrl + 
      UrlService.execute({ page: router.query.page, search })
    );
  }, [search, router.query.page])

  const handleShow = (id: number): void => {
    /* é usado para mostrar o elemento */
    setShow(true) 
    /* rastrear qual elemento está prestes a ser removido ou excluído */
    setSystemRequirementToRemove(id); 
  }

  const handleClose = async (success: boolean): Promise<void> => {
    /* é usado para ocultar um elemento ou componente na interface de usuário */
    setShow(false);

    if (!success) return;

    try {
      /* chama a função para tentar excluir o elemento indicado */
      await SystemRequirementsService.delete(systemRequirementToRemove);
      toast.info('Requisito de sistema removido com sucesso!');
      /* é chamada para atualizar os dados após a remoção bem-sucedida */
      mutate();
    } catch (err) {
      toast.error('Ocorreu um erro ao remover o requisito de sistema, tente novamente.');
      console.log(err);
    }
  }

  /* é usada para tratar a ação de edição de um requisito de sistema */
  const handleEdit = (systemRequirement: SystemRequirement): void => {
    /* indica que um requisito de sistema específico deve ser editado */
    dispatch(setSystemRequirementToEdit(systemRequirement));
    /* redireciona o usuário para a rota */
    router.push('/Admin/SystemRequirements/Edit');
  }

  if (error) {
    /* uma notificação de erro é exibida ao usuário */
    toast.error('Erro ao listar os requisitos de sistema');
    /* os detalhes do erro são registrados no console  */
    console.log(error);
  }

  return (
    <AdminComponent>
      <TitleAdminPanel 
        title="Requisitos" 
        path="Dashboard > Requisitos" 
        icon={faMicrochip} 
        newPath="/Admin/SystemRequirements/New" 
      />

      <AdminDeleteModal handleClose={handleClose} show={show} target="requisito de sistema" />

      {
        data && data.system_requirements && data.system_requirements.length > 0 ? (
          <AdminListTable 
            first_title="Nome" 
            second_title="Sistema Operacional" 
            third_title="Armazenamento" 
            fourth_title="Processador" 
            fifth_title="Memória" 
            sixth_title="Placa de vídeo"
            meta={data.meta}
          >
            {
              data.system_requirements.map(system_requirement => (
                <tr key={system_requirement.id}>
                  <td>{system_requirement.name}</td>
                  <td>{system_requirement.operational_system}</td>
                  <td>{system_requirement.storage}</td>
                  <td>{system_requirement.processor}</td>
                  <td>{system_requirement.memory}</td>
                  <td>{system_requirement.video_board}</td>
                  <td>
                    <div>
                      <FontAwesomeIcon 
                        icon={faEdit} 
                        onClick={() => handleEdit(system_requirement)}
                        />
                    </div>
                  </td>
                  <td>
                    <div>
                      <FontAwesomeIcon 
                        icon={faTrash} 
                        onClick={() => handleShow(system_requirement.id)} />
                    </div>
                  </td>
                </tr>
              ))
            }
          </AdminListTable>
        ) : (
          <NoData />
        )
      }
    </AdminComponent>
  )
}

export default withAuthAdmin(List);