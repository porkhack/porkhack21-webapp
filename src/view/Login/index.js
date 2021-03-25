/** @jsx jsx */ /** @jsxRuntime classic */
import { jsx, css } from "@emotion/react";

import { useOvermind } from "../../overmind";
import { Input, Button, Form } from "semantic-ui-react";

import { ReactComponent as Farmer } from "../../svg/farmer.svg";

function Login() {
  const { state, actions } = useOvermind();
  const myState = state.view.Login;
  const myActions = actions.view.Login;

  return (
    <div
      css={css`
        height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: url(imgs/login-background.jpg) no-repeat center center fixed;
        background-size: cover;
      `}
    >
      <div
        css={css`
          width: 400px;
          display: flex;
          flex-direction: column;
          background: #fff;
          padding: 15px;
          padding-top: 7px;
          border-radius: 5px;
        `}
      >
        <Farmer />
        <Form
          css={css`
            display: flex;
            flex-direction: column;
          `}
          onSubmit={myActions.login}
        >
          <Input
            placeholder="OADA Domain..."
            value={myState.domain}
            onChange={(evt, data) => myActions.domainChange(data)}
          />
          <Button
            style={{ marginTop: 7 }}
            primary
            loading={myState.loading}
            disabled={myState.loading}
          >
            Connect to Your OADA Cloud
          </Button>
          <Button
            style={{ marginTop: 7 }}
            onClick={myActions.viewDemo}
            disabled={myState.loading}
          >
            View Demo
          </Button>
        </Form>
      </div>
      <button
        css={css`
          display: none;
          position: absolute;
          top: 10px;
          right: 10px;
          font-size: 1.2em;
          color: #ffffff;
          cursor: pointer;
        `}
        onClick={myActions.logout}
      >
        Logout
      </button>
    </div>
  );
}

export default Login;
