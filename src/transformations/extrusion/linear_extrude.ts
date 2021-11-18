// https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/2D_to_3D_Extrusion#Linear_Extrude

import { ScadNumber } from '../../types/ScadNumber';
import { undef } from '../../types/undef';
import { Chainable } from '../../util/Chainable';
import { ITransformation, transformation } from '../internals';

type Params = {
  center?: boolean;
  convexity?: ScadNumber;
  twist?: string | undef;
  slices?: ScadNumber | undef;
  scale?: ScadNumber;
  $fn?: ScadNumber;
};

export type LinearExtrude = ITransformation<
  'linear_extrude',
  { height: ScadNumber } & Params
>;

export function linear_extrude(
  this: Chainable,
  height: ScadNumber,
  params: Params = {}
) {
  return transformation('linear_extrude', this, {
    height,
    ...params,
  });
}

linear_extrude.defaultParams = {} as Params;
