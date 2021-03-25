import { createHook } from "overmind-react";
import { namespaced } from 'overmind/config';
import { state } from "./state";
import * as actions from "./actions";
//import { onInitialize } from "./onInitialize";
import { IConfig } from "overmind";
import oadaCacheOvermind from "@oada/oada-cache-overmind";
import * as view from './view'
import * as pork from './pork'
import * as app from './app'
import * as OADAManager from './OADAManager'

const oada = oadaCacheOvermind("oada");

/*
export const config = {
  state,
  actions: { oada: oada.actions, ...actions },
  effects: { oada: oada.effects },
  onInitialize,
};
*/
export const config = namespaced({
  app,
  oada,
  view,
  pork,
  OADAManager,
})

declare module "overmind" {
  interface Config extends IConfig<typeof config> {}
}

export const useOvermind = createHook<typeof config>();
