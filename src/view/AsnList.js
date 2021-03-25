import _ from 'lodash';
import { jsx, css } from '@emotion/react'

import {Button, Dimmer, Divider, Icon, Image, Loader, Segment} from 'semantic-ui-react'
import {useOvermind} from '../overmind'

function AsnList() {
  const {actions} = useOvermind()
  const myActions = actions.view.AsnList
  return (
    <div css={{
      flex: 1,
      display: 'flex',
      flexDirection: 'column'
    }}>Hello World
    </div>
  );
}

export default AsnList;
