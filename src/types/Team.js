// @flow

import type { Employee } from './Employee';

export type Team = {
  id: string,
  name: string,
  employees: Array<Employee>
}
