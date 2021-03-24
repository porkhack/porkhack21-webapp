import { createHook } from "overmind-react";
import { state } from "./state";
import * as actions from "./actions";
import { onInitialize } from "./onInitialize";
import { IConfig } from "overmind";
import oadaCacheOvermind from "@oada/oada-cache-overmind";

const oada = oadaCacheOvermind("oada");

export const config = {
  state,
  actions: { oada: oada.actions, ...actions },
  effects: { oada: oada.effects },
  onInitialize,
};

declare module "overmind" {
  interface Config extends IConfig<typeof config> {}
}

export const useOvermind = createHook<typeof config>();
