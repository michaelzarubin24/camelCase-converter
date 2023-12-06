import { Component } from "../core/component";

export const isComponent = (obj: any): obj is Component => {
  return obj instanceof Component;
};
