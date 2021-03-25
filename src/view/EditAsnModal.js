/** @jsx jsx */ /** @jsxRuntime classic */
import { jsx } from "@emotion/react";

import { Modal, Divider, Button, Icon, Form } from "semantic-ui-react";
import { useOvermind } from "../overmind";
//import Form from '@rjsf/semantic-ui'

//import Header from './Header';
//import List from './List';
//import NewRule from './NewRule';

function EditAsnModal(props) {
  const { actions, state } = useOvermind();
  let asn = state.pork.newAsn || {};

  let things = ["haulers", "processors", "locations"];
  let options = {};
  things.forEach((key) => {
    options[key] = Object.values(state.pork[key]).map((item) => ({
      key: item.name,
      text: item.name,
      value: item.id,
    }));
  });

  return (
    <Modal open={state.view.editAsn} onClose={actions.view.editAsnClosed}>
      <Modal.Content>
        <Button icon onClick={actions.pork.editAsnClosed}>
          <Icon name="close" />
        </Button>

        <div
          css={{
            minHeight: 300,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Form>
            <Form.Select
              fluid
              label="Ship From Location"
              options={options.locations}
              placeholder='Ship From Location'
              onChange={(evt) => actions.pork.inputChanged({evt, type: 'locations'})}
            />
            <Form.Select
              fluid
              label="Hauler"
              options={options.haulers}
              placeholder='Hauler'
              value={asn.hauler && asn.hauler.name || ''}
              onChange={(evt) => actions.pork.inputChanged({evt, type: 'locations'})}
            />
            <Form.Select
              fluid
              label="Processor"
              options={options.processors}
              placeholder='Processor'
              onChange={(evt) => actions.pork.inputChanged({evt, type: 'locations'})}
            />
          <Divider>Load Info</Divider>
          <Form.Input fluid label='Head Count' onChange={(evt) => actions.pork.inputChanged({evt, type:'count'})}/>
          <Form.Input fluid label='Load Weight (lbs)' onChange={(evt) => actions.pork.inputChanged({evt, type: 'weight'})}/>
          <Button type='submit'>Submit</Button>
        </Form>
        </div>
        <Button onClick={actions.pork.doneClicked}>Done</Button>
      </Modal.Content>
    </Modal>
  );
}

export default EditAsnModal;
