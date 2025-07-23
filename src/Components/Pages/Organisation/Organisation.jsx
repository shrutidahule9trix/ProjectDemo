/** @format */

import React, { useState } from 'react';
import { Box, Paper, TextField, Autocomplete, Typography } from '@mui/material';
import Symbol from '../../../Assets/SVG/symbol';

function PaperBox({ elevations = [20, 0, 8] }) {
  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          Color: "pink",
          '& > :not(style)': { m: 1, width: 128, height: 128 },
        }}
      >
        {elevations.map((e, i) => (
          <Paper key={i} elevation={e} />
        ))}
      </Box>
    </div>
  );
}

function TextFieldGroup() {
  return (
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
    </Box>
  );
}

function AutoCompleteBox({ options = ['Option 1', 'Option 2'] }) {
  const [value, setValue] = useState(options[0]);
  const [inputValue, setInputValue] = useState('');

  return (
    <Box>
      <div>{`value: ${value !== null ? `'${value}'` : 'null'}`}</div>
      <div>{`inputValue: '${inputValue}'`}</div>
      <Autocomplete
        value={value}
        onChange={(event, newValue) => setValue(newValue)}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => setInputValue(newInputValue)}
        id="controllable-states-demo"
        options={options}
        sx={{ width: 300, mt: 2 }}
        renderInput={(params) => <TextField {...params} label="Controllable" />}
      />
    </Box>
  );
}

function SymbolText({ text = 'JKDBFJRBFJBFJBFJ', heading = 'h1. Heading' }) {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Symbol width="22" height="22" />
      <Typography sx={{ fontFamily: 'monospace', fontSize: '0.9rem' }}>
        {text}
      </Typography>
      <Typography variant="h1" component="h2" sx={{ fontSize: '30px' }}>
        {heading}
      </Typography>
    </Box>
  );
}

function Files() {
  return (
    <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', gap: 4 }}>
      <PaperBox />
      <TextFieldGroup />
      <AutoCompleteBox />
      <SymbolText text="Custom Text" heading="Custom Heading" />
    </Box>
  );
}

export default Files;
