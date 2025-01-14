// https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Transformations#resize

import { ScadNumber } from '../index';
import { ScadVector, ScadVector3 } from '../types/ScadVector';
import { Vector, Vector3 } from '../types/Vector';
import type { Chainable } from '../util/Chainable';
import { vector, vector3 } from '../util/vector-conversion';
import { ITransformation, transformation } from './internals';

export type Resize = ITransformation<
  'resize',
  { newsize: ScadVector; auto: boolean | ScadVector3<boolean> }
>;

export function resize(
  this: Chainable,
  newsize: Vector,
  auto = resize.defaultAuto
) {
  return transformation('resize', this, {
    newsize: vector<ScadNumber>(newsize),
    auto: vector3(auto),
  });
}

resize.defaultAuto = false as boolean | Vector3<boolean>;
