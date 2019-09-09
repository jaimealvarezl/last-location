// @flow

import type { Point } from './Point';

export type Employee = {
  id: string,
  fullName: string,
  avatarUrl: string,
  lastLocation: string,
  teamId: string,
  lastPosition?: Point
}
