import { OnInitialize } from "overmind";
import { asn as asntree } from "@pork/trees";

export const onInitialize: OnInitialize = async ({
  state,
  actions,
  effects,
}) => {
  await actions.oada
    .connect({
      token: "changeme",
      domain: "https://farmer.porkhack1.openag.io",
    })
    .then((response) => {
      console.log(response);
      if (!response.error) {
        state.connection = response.connectionId;
      }
      return response;
    });
  const requests = [
    {
      path: "/bookmarks/trellisfw/asns",
      tree: asntree,
      watch: {
        actions: [],
      },
    },
  ];
  await actions.oada.get({ requests, connection_id: state.connection });
  state.loaded = true;
};
