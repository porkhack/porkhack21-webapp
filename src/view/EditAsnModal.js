/** @jsx jsx */ /** @jsxRuntime classic */
import { jsx } from "@emotion/react";

import { Modal, Divider, Button, Icon, Form } from "semantic-ui-react";
import { useOvermind } from "../overmind";

function EditAsnModal(props) {
  const { actions, state } = useOvermind();
  let id = state.pork.selectedAsn;
  let asn = state.pork.newAsn;

  let things = ["haulers", "processors", "locations"];
  let options = {};
  things.forEach((key) => {
    options[key] = Object.values(state.pork[key]).map((item) => ({
      key: item.id,
      text: item.name,
      value: item.id,
    }));
  });
  let title = state.pork.selectedAsn === "new" ? "Add New ASN" : "Edit ASN";

  console.log(options);

  return (
    <Modal
      centered
      style={{ top: "auto" }}
      open={state.view.editAsn}
      onClose={actions.view.editAsnClosed}
    >
      <Modal.Header>{title}</Modal.Header>
      <Modal.Content>
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
              placeholder="Ship From Location"
              value={asn?.scheduled?.shipfromlocation?.id}
              onChange={(_, { value }) =>
                actions.pork.inputLocationChanged(value)
              }
            />
            <Form.Select
              fluid
              label="Hauler"
              options={options.haulers}
              placeholder="Hauler"
              value={asn?.farmer?.haulerid}
              onChange={(_, { value }) =>
                actions.pork.inputHaulerChanged(value)
              }
            />
            <Form.Select
              fluid
              label="Processor"
              options={options.processors}
              placeholder="Processor"
              value={asn?.farmer?.processorid}
              onChange={(_, { value }) =>
                actions.pork.inputProcessorChanged(value)
              }
            />
            <Divider>Load Info</Divider>
            <Form.Input
              fluid
              label="Head Count"
              value={asn?.enroute?.head?.value}
              onChange={(_, { value }) =>
                actions.pork.inputChanged({ value, type: "count" })
              }
            />
            <Form.Input
              fluid
              label="Load Weight (lbs)"
              value={asn?.enroute?.weight?.value}
              onChange={(_, { value }) =>
                actions.pork.inputChanged({ value, type: "weight" })
              }
            />
          </Form>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Button onClick={actions.pork.doneClicked}>Submit</Button>
          <div style={{ flexGrow: 1 }} />
          <Button onClick={actions.pork.editAsnClosed}>Close</Button>
        </div>
      </Modal.Content>
    </Modal>
  );
}

export default EditAsnModal;
