import React, { useState, useEffect } from 'react';
import DirectoryTable from './components/Table.jsx';
import DirectoryGrid from './components/Grid.jsx';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentView, setCurrentView] = useState('table');
  const [data, setData] = useState(null);

  const fetchData = () => {
    setIsLoading(true);
  
    fetch('http://localhost:8081/api/directory')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setData(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth < '650') setCurrentView('grid');
    });

    fetchData();
  }, []);

  return (
    <div style={{minHeight: '65dvh'}}>
      <div className="view-buttons btn-group mb-3" role="group" aira-label="Change View Buttons">
        <button type="button" className="btn btn-primary ms-2" aria-pressed="true" onClick={() => setCurrentView('table')} disabled={currentView === 'table' ? true : false}>Table</button>
        <button type="button" className="btn btn-primary ms-2" aria-pressed="false" onClick={() => setCurrentView('grid')} disabled={currentView === 'grid' ? true : false}>Grid</button>
        {
          isLoading &&
            <div className="loading-spinner spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
        }
      </div>
      {
        isLoading ? null : currentView === 'table' ? <DirectoryTable data={data} /> : <DirectoryGrid data={data} />
      }
    </div>
  );

};

export default App;