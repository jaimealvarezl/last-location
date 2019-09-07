import React from 'react';
import MapContainer from './components/MapContainer';
import teamsService from './services/teamsService';
import TeamList from './components/Team/List';
import './styles/main.scss';
import EmployeeMarker from './components/Employee/Marker';


function App() {
  const [teams, setTeams] = React.useState([]);

  React.useEffect(() => {
    teamsService.getTeams()
      .then((result) => {
        setTeams(result.data);
      });
  }, []);

  const employees = React.useMemo(() => teams.reduce((acc, team) => {
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
