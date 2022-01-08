import React from 'react';
import FilterSearch from "./components/FilterSearch";
import StateWise from "./components/StateWise";
import StudDetail from "./components/StudDetail";
import DisplayFiltered from "./components/DisplayFiltered";

function App() {
  return (
    <div className="App">
      
      <div className="addStud">
        <div className="studDetails">
          <StudDetail />
        </div>
      </div>

      <div className="displayStud">
        <div className="stateWiseStudNo">
          <StateWise />
        </div>
        <div className="filteredSearch">
          <FilterSearch />
        </div>
        <div className="filteredStudentDisplay">
          <DisplayFiltered />
        </div>
      </div>
    
    </div>
  );
}

export default App;
