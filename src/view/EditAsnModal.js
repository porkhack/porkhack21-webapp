/** @jsx jsx */ /** @jsxRuntime classic */
import { jsx } from "@emotion/react";

import { Modal, Divider, Button, Icon, Form } from "semantic-ui-react";
import { useOvermind } from "../overmind";

function EditAsnModal(props) {
  const { actions, state } = useOvermind();
  let id = state.pork.selectedAsn;
  let asn = (id==='new') ? state.pork.newAsn : state.pork.asns[id];
  asn = asn || {};

  let things = ["haulers", "processors", "locations"];
  let options = {};
  things.forEach((key) => {
    options[key] = Object.values(state.pork[key]).map((item) => ({
      key: item.name,
      text: item.name,
      value: item.name,
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
              value={asn.scheduled && asn.scheduled.shipfromlocation && asn.scheduled.shipfromlocation.name || ''}
              onChange={(evt, {value}) => actions.pork.inputChanged({value, type: 'location'})}
            />
            <Form.Select
              fluid
              label="Hauler"
              options={options.haulers}
              placeholder='Hauler'
              value={asn.hauler && asn.hauler.name || ''}
              onChange={(evt, {value}) => actions.pork.inputChanged({value, type: 'hauler'})}
            />
            <Form.Select
              fluid
              label="Processor"
              options={options.processors}
              placeholder='Processor'
              value={asn.processor && asn.processor.name || ''}
              onChange={(evt, {value}) => actions.pork.inputChanged({value, type: 'processor'})}
            />
          <Divider>Load Info</Divider>
          <Form.Input fluid label='Head Count' value={asn.enroute && asn.enroute.head && asn.enroute.head.value} onChange={(evt, {value}) => actions.pork.inputChanged({value, type:'count'})}/>
          <Form.Input fluid label='Load Weight (lbs)' value={asn.enroute && asn.enroute.weight && asn.enroute.weight.value} onChange={(evt, {value}) => actions.pork.inputChanged({value, type: 'weight'})}/>
          <Button type='submit'>Submit</Button>
        </Form>
        </div>
        <Button onClick={actions.pork.doneClicked}>Done</Button>
      </Modal.Content>
    </Modal>
  );
}

export default EditAsnModal;
