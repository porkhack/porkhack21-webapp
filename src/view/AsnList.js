import _ from 'lodash';
import { jsx, css } from '@emotion/react'

import TopBar from './TopBar';
import {Button, Dimmer, Divider, Icon, Image, Loader, Segment} from 'semantic-ui-react'
import useOvermind from '../../../overmind'

function Asn() {
  const {actions} = useOvermind()
  const myActions = actions.view.AsnList
  const pattern = /(input[0-9]+)/g;
  let { rule, id, service } = props;
  
  let icons = <div css={{display: 'flex', marginRight: 20}}>
    {
      _.map(rule.icons, (i) => {
        if (i === 'ift.svg') {
          return (
            <img key={i} css={{
              height: '25px'
            }} src={iconIFT} alt={i} />
          )
        }
        if (i === 'foodlogiq.svg') {
          return (
            <img key={i} css={{
              height: '25px'
            }} src={iconFoodLogiq} alt={i} />
          )
        }
        if (i === 'email.svg') {
          return (
            <img key={i} css={{
              height: '25px'
            }} src={iconEmail} alt={i} />
          )
        }
      })
    }
    </div>

  let active = rule.enabled === undefined ? true : rule.enabled;
          
  return (
    <div 
      css={css`
        display: flex;
        align-items: center;
        border: 1px solid rgba(34,36,38,.15);
        padding: 20px;
        border-radius: 12px;
        margin: 7px;
        cursor: pointer;
        transition: all 300ms;
        transition-property: box-shadow, top;
        &:hover {
          box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.25);
          top: -2px;
          border: 1px solid #fff;
        }
      `}
    >
      {icons}
      <RuleSentence service={service} rule={rule} />
      <Button toggle active={active} onClick={(evt) => myActions.toggleRuleClicked({rule: id, data: !active})}>
        {active ? 'On' : 'Off'}
      </Button>
    </div>
  )
}

function RuleGroup(props) {
  const {state, actions} = overmind()
  const myActions = actions.view.Pages.Rules;
  const { service } = props;
  let rules = state.rules.services[service].configured || {};
  rules = Object.keys(rules)
    .filter(key => key.charAt(0)!=='_')
    .reduce((obj, key) => {
      obj[key] = rules[key]
      return obj;
    }, {});

  return (
    <div css={{display: 'flex', flexDirection:'column'}}>
      <div css={{display: 'flex', alignItems: 'center'}}>
        <Divider css={{flexGrow: 1}} horizontal>
          <Icon name={services[service].icon || 'settings'} />
          {services[service].title}
        </Divider>
        <Button 
          onClick={evt=>{myActions.addRuleClicked({service})}}>
          <Icon name='add' />
          Add Rule
        </Button>
      </div>
      {Object.keys(rules).map(key =>
        <Rule service={service} rule={rules[key]} id={key} key={'current-rule-'+key}/>
      )}
      {Object.keys(rules).length === 0 ? 
          <div
            css={css`
              display: flex;
              align-items: center;
              border: 1px solid rgba(34,36,38,.15);
              padding: 20px;
              border-radius: 12px;
              margin: 7px;
              cursor: pointer;
              transition: all 300ms;
              transition-property: box-shadow, top;
              &:hover {
                box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.25);
                top: -2px;
                border: 1px solid #fff;
              }
            `}
          onClick={evt=>{myActions.addRuleClicked({service})}}>
          No rules. Click here to add one.</div>
          : null
      }
    </div>
  )
}

function Rules() {
  const {state, actions} = overmind()
  const myActions = actions.view.Pages.Rules;
  const rules = state.rules.services;
  if (!rules) return (<Segment style={{display:'flex', flex:'1'}}>
    <Dimmer active inverted>
      <Loader />
    </Dimmer>
  </Segment>)
  let ruleGp = Object.keys(rules)
    .filter(s => services[s])
  ruleGp = _.sortBy(ruleGp, o => Object.keys(o.configured || {}).length).reverse();
  ruleGp = ruleGp.map(service => 
    <RuleGroup service={service} key={'RuleGroup-'+service}/>
  )

  return (
    <div css={{
      flex: 1,
      display: 'flex',
      flexDirection: 'column'
    }}>
      <TopBar />
      <div css={css`
        height: 1px;
        background: #979797;
        margin-left: 20px;
        margin-right: 20px;
      `}/>
      <div css={{flex: 1, flexDirection:'column', padding: 30, paddingTop: 15, display: 'flex'}}>
        {ruleGp}
      </div>
    </div>
  );
}

export default Rules;
