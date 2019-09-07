// @flow

import * as React from 'react';
import MapContainer from './components/MapContainer';
import teamsService from './services/teamsService';
import TeamList from './components/Team/List';
import EmployeeMarker from './components/Employee/Marker';
import type { Team } from './types/Team';
import type { Employee } from './types/Employee';
import './styles/main.scss';


function App() {
  const [teams, setTeams] = React.useState<Array<Team>>([]);

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


  return (
    <>
      <header>
        <h1>Last Location</h1>
      </header>
      <main style={{ display: 'flex' }}>
        <div>
          <TeamList teams={teams} />
        </div>
        <div style={{
          flex: 1,
          position: 'relative',
          height: 'calc(100vh - 80px)',
        }}
        >
          <MapContainer>
            {employees.map((employee) => <EmployeeMarker key={employee.id} employee={employee} />)}
          </MapContainer>
        </div>
      </main>

    </>
  );
}

export default App;
