// @flow

import * as React from 'react';
import type { Team } from '../../types/Team';
import { SelectedEmployeeContext } from '../Employee/SelectedEmpoyeeProvider';
import teamsService from '../../services/teamsService';
import type { Employee } from '../../types/Employee';
import type { Point } from '../../types/Point';

function useLastLocation() {
  const [teams, setTeams] = React.useState<Array<Team>>([]);
  const { selectedEmployee } = React.useContext(SelectedEmployeeContext);

  React.useEffect(() => {
    teamsService.getTeams()
      .then((result) => {
        setTeams(result.data);
      });
  }, []);

  const employees = React.useMemo<Array<Employee>>(() => teams.reduce((acc, team) => {
    Array.prototype.push.apply(acc, team.employees);
    return acc;
  }, []), [teams]);

  const employeeList = React.useMemo<Array<Employee>>(() => {
    if (selectedEmployee) {
      return [selectedEmployee];
    }
    return employees;
  }, [selectedEmployee, employees]);

  const bounds = React.useMemo<Array<Point>>(() => employeeList.map((employee) => {
    const [lat, lng] = employee.lastLocation.split(',')
      .map((number) => Number.parseFloat(number));
    return {
      lat,
      lng,
    };
  }), [employees]);

  return {
    bounds,
    employees: employeeList,
    teams,
  };
}

export default useLastLocation;
