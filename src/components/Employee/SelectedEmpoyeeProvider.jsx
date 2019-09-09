// @flow
import * as React from 'react';
import type { Employee } from '../../types/Employee';

export const SelectedEmployeeContext = React.createContext();


type Props = {
  children: React.node
}

function SelectedEmployeeProvider(props: Props) {
  const { children } = props;

  const [selectedEmployee, _setSelectedEmployee] = React.useState<Employee>(null);
  const setSelectedEmployee = React.useCallback((employee: Employee) => {
    _setSelectedEmployee((prev) => {
      if (prev && prev.id === employee.id) {
        return null;
      }

      return employee;
    });
  }, [_setSelectedEmployee]);

  const value = React.useMemo(() => ({
    selectedEmployee,
    setSelectedEmployee,
  }), [selectedEmployee, setSelectedEmployee]);


  return (
    <SelectedEmployeeContext.Provider value={value}>
      {children}
    </SelectedEmployeeContext.Provider>
  );
}

export default SelectedEmployeeProvider;
