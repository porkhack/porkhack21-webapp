/** @jsx jsx */ /** @jsxRuntime classic */
import { jsx, css } from "@emotion/react";

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
  let certs = [
    {
      key: 'TQA',
      text: 'TQA',
      value: 'TQA',
    },{
      key: 'PQA - PLUS',
      text: 'PQA - PLUS',
      value: 'PQA - PLUS',
    }
  ];

  let statuses = [
    {
      key: 'scheduled',
      text: 'Scheduled',
      value: 'scheduled',
    },{
      key: 'Cancelled',
      text: 'Cancelled',
      value: 'Cancelled',
    },{
      key: 'en route',
      text: 'En Route',
      value: 'en route',
    },{
      key: 'arrived',
      text: 'Arrived',
      value: 'arrived',
    }, {
      key: 'received',
      text: 'Recieved',
      value: 'received'
    }
  ]

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
              label="Status"
              options={statuses}
              placeholder="Status"
              value={asn?.status}
              onChange={(_, { value }) =>
                actions.pork.inputChanged({value, type: "status"})
              }
            />

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
            <Divider>Load Info - En Route </Divider>
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
            <div css={css`display: flex; flex-direction: row; width: 100%; align-items: center`}>
              <Form.Input
                css={css`flex-grow: 1`}
                fluid
                label="Departure Time"
                value={asn?.enroute?.departuretime}
                onChange={(_, { value }) =>
                  actions.pork.inputChanged({ value, type: "departuretime" })
                }
              />
              <Button css={css`max-height: 40px`} onClick={() => actions.pork.setNow({ key: 'enroute.departuretime' })}>
                Now
              </Button>
            </div>
            <div css={css`display: flex; flex-direction: row; width: 100%; align-items: center`}>
              <Form.Input
                css={css`flex-grow: 1`}
                fluid
                label="ETA"
                value={asn?.enroute?.arrivaltime}
                onChange={(_, { value }) =>
                  actions.pork.inputChanged({ value, type: "etatime" })
                }
              />
              <Button  css={css`max-height: 40px`} onClick={() => actions.pork.setNow({ key: 'enroute.arrivaltime' })}>
                Now
              </Button>
            </div>

            <Divider>Load Info - Arrival</Divider>
            <Form.Input
              fluid
              label="Head Count"
              value={asn?.arrived?.head?.value}
              onChange={(_, { value }) =>
                actions.pork.inputChanged({ value, type: "acount" })
              }
            />
            <Form.Input
              fluid
              label="Load Weight (lbs)"
              value={asn?.arrived?.weight?.value}
              onChange={(_, { value }) =>
                actions.pork.inputChanged({ value, type: "aweight" })
              }
            />
            <div css={css`display: flex; flex-direction: row; width: 100%; align-items: center`}>
              <Form.Input
                css={css`flex-grow: 1`}
                fluid
                label="Arrival Time"
                value={asn?.arrived?.arrivaltime}
                onChange={(_, { value }) =>
                  actions.pork.inputChanged({ value, type: "arrivaltime" })
                }
              />
              <Button  css={css`max-height: 40px`} onClick={() => actions.pork.setNow({ key: 'arrived.arrivaltime' })}>
                Now
              </Button>
            </div>
            <Divider>Certifications - Hauler</Divider>
            <Form.Select
              fluid
              label="Certification Type"
              options={certs}
              value={asn?.hauler?.certifications?.test?.certtype}
              placeholder="Certification Type"
              onChange={(_, { value }) =>
                actions.pork.inputChanged({value, type: 'hcerttype'})
              }
            />
            <Form.Input
              fluid
              label="Certification ID"
              value={asn?.hauler?.certifications?.test?.certificationid}
              onChange={(_, { value }) =>
                actions.pork.inputChanged({ value, type: "hcertid" })
              }
            />
            <Form.Input
              fluid
              label="Certification Expiration Date"
              value={asn?.hauler?.certifications?.test?.expiration}
              onChange={(_, { value }) =>
                actions.pork.inputChanged({ value, type: "hcertexp" })
              }
            />
            <Divider>Certifications - Processor</Divider>
            <Form.Select
              fluid
              label="Certification Type"
              options={certs}
              value={asn?.hauler?.certifications?.test?.certtype}
              placeholder="Certification Type"
              onChange={(_, { value }) =>
                actions.pork.inputChanged({value, type: 'pcerttype'})
              }
            />
            <Form.Input
              fluid
              label="Certification ID"
              value={asn?.hauler?.certifications?.test?.certificationid}
              onChange={(_, { value }) =>
                actions.pork.inputChanged({ value, type: "pcertid" })
              }
            />
            <Form.Input
              fluid
              label="Certification Expiration Date"
              value={asn?.hauler?.certifications?.test?.expiration}
              onChange={(_, { value }) =>
                actions.pork.inputChanged({ value, type: "pcertexp" })
              }
            />


          </Form>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Button onClick={actions.pork.editAsnClosed}>Close</Button>
          <div style={{ flexGrow: 1 }} />
          <Button onClick={actions.pork.doneClicked}>Submit</Button>
        </div>
      </Modal.Content>
    </Modal>
  );
}

export default EditAsnModal;
