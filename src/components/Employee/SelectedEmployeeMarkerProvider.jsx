// @flow
import * as React from 'react';

export const SelectedEmployeeMarkerContext = React.createContext<{
  selectedMarker: Object,
  setSelectedMarker: Function
}>();

type Props = {
  children: React.Node
}

function SelectedEmployeeMarkerProvider(props: Props) {
  const { children } = props;
  const [selectedEmployee, setSelectedEmployee] = React.useState(null);
  const [marker, setMarker] = React.useState(null);

  const setSelectedMarker = React.useCallback((employee, markerObj) => {
    setSelectedEmployee(employee);
    setMarker(markerObj);
  }, []);

  const value = React.useMemo(() => ({
    setSelectedMarker,
    selectedEmployee,
    marker,
  }), [selectedEmployee, setSelectedMarker, marker]);

  return (
    <SelectedEmployeeMarkerContext.Provider value={value}>
      {children}
    </SelectedEmployeeMarkerContext.Provider>
  );
}


export default SelectedEmployeeMarkerProvider;
