// @flow

import * as React from 'react';
import { SelectedEmployeeContext } from '../Employee/SelectedEmpoyeeProvider';
import teamsService from '../../services/teamsService';
import type { Team } from '../../types/Team';
import type { Employee } from '../../types/Employee';
import type { Point } from '../../types/Point';

function useLastLocation() {
  const [teams, setTeams] = React.useState<Array<Team>>([]);
  const { selectedEmployee } = React.useContext(SelectedEmployeeContext);

  React.useEffect(() => {
    teamsService.getTeams()
      .then((result) => {
        const processedTeams = result.data.map((t: Team) => {
          const employees = t.employees.map((employee) => {
            const [lat, lng] = employee.lastLocation.split(',')
              .map((num) => Number.parseFloat(num));

            return ({
              ...employee,
              lastPosition: {
                lat,
                lng,
              },
            });
          })
            .sort((a, b) => a.fullName.localeCompare(b.fullName));

          return ({
            ...t,
            employees,
          });
        });


        setTeams(processedTeams);
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

  const bounds = React.useMemo<Array<Point>>(() => {
    if (selectedEmployee) {
      return [selectedEmployee.lastPosition];
    }

    return employeeList.map((employee) => employee.lastPosition);
  }, [employees, selectedEmployee]);

  return {
    bounds,
    employees: employeeList,
    teams,
  };
}

export default useLastLocation;
