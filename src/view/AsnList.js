import _ from 'lodash';
import { jsx, css } from '@emotion/react'

import {Button, Icon, Card} from 'semantic-ui-react'
import {useOvermind} from '../overmind'
import moment from 'moment';


function Asn(props) {
  const asn = props.asn;
  const {state, actions} = useOvermind()
  let shipdate = moment(asn.shipdate).format('MM/DD/YYYY');
  let status = asn.status.split(' ').map(word => word[0].toUpperCase()+word.substring(1)).join(' ');

  return (
    <div css={{
      flex: 1,
      display: 'flex',
      flexDirection: "row",
    }}>
      {asn.location.name}
      <div>Ship Date: {shipdate}</div>
      <div>Status: {status}</div>
      <Button icon onClick={actions.pork.editAsn}>
        <Icon name='edit' />
      </Button>
      <Button icon onClick={actions.pork.selectAsn}>
        <Icon name='down arrow' />
        More Details
      </Button>
    </div>
  )
}

function AsnList() {
  const {state, actions} = useOvermind()
  const myActions = actions.view.AsnList
  const asns = state.pork.asns; 
  console.log('asns', asns)
  return (
    <div css={{
      flex: 1,
      display: 'flex',
      flexDirection: 'column'
    }}>
    <Button icon onClick={actions.pork.addAsn}>
      <Icon name='add' />
      Add New ASN
    </Button>

    {Object.values(asns || {}).map(item => 
      <Asn asn={item} />
    )}
    </div>
  );
}

export default AsnList;
