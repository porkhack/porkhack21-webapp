import { jsx } from '@emotion/react'

import { Modal, Button, Icon } from 'semantic-ui-react'
import {useOvermind} from '../overmind'

//import Header from './Header';
//import List from './List';
//import NewRule from './NewRule';

function EditAsnModal(props) {
  const { actions, state } = useOvermind();

  return (
    <Modal open={state.view.editAsn} onClose={actions.view.editAsnClosed}>
      <Modal.Content >
        <Button icon onClick={actions.pork.editAsnClosed}>
          <Icon name='close'/>
        </Button>

        <div css={{minHeight: 300, display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
    EDITING ASN HERE
        </div>
        <Button onClick={actions.pork.doneClicked}>
          Done
        </Button>
      </Modal.Content>
    </Modal>
  );
}

export default EditAsnModal;
