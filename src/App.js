import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {

  let [people, setpeople] = useState(data)


  return <main>
    <section className="container">
<h3> {people.length} Birthdays Remaining</h3>
    <List people={people}/>
    <button onClick={() => setpeople([])}>Clear All</button>
    </section>    
  </main>;
}

export default App;
