import React from 'react';
import './App.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



function App() {
  return (
    <div className="App">
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <Button variant="contained" color="primary"
        style={{height:55,marginLeft:8}}
        disabled={!text} onClick={search}>
        Primary
      </Button>
    </div>
  );
}

export default App;
