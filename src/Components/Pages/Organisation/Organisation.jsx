/** @format */

import React, { useState } from 'react';
import { Box, Paper, TextField, Autocomplete, Typography } from '@mui/material';
import Symbol from '../../../Assets/SVG/symbol';

function PaperBox({ elevations = [20, 0, 8] }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        color: 'pink',
        '& > :not(style)': { m: 1, width: 128, height: 128 },
      }}
    >
      {elevations.map((e, i) => (
        <Paper key={i} elevation={e} />
      ))}
    </Box>
  );
}

function TextFieldGroup({ values, onChange }) {
  return (
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        value={values.outlined}
        onChange={(e) => onChange('outlined', e.target.value)}
      />
      <TextField
        id="filled-basic"
        label="Filled"
        variant="filled"
        value={values.filled}
        onChange={(e) => onChange('filled', e.target.value)}
      />
      <TextField
        id="standard-basic"
        label="Standard"
        variant="standard"
        value={values.standard}
        onChange={(e) => onChange('standard', e.target.value)}
      />
    </Box>
  );
}

function AutoCompleteBox({ options, value, onChange }) {
  const [inputValue, setInputValue] = useState('');

  return (
    <Box>
      <div>{`value: ${value !== null ? `'${value}'` : 'null'}`}</div>
      <div>{`inputValue: '${inputValue}'`}</div>
      <Autocomplete
        value={value}
        onChange={(event, newValue) => onChange(newValue)}
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

function SymbolText({ text, heading, onTextChange, onHeadingChange }) {
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
      <TextField
        label="Text"
        variant="standard"
        value={text}
        onChange={(e) => onTextChange(e.target.value)}
        sx={{ width: '150px' }}
      />
      <TextField
        label="Heading"
        variant="standard"
        value={heading}
        onChange={(e) => onHeadingChange(e.target.value)}
        sx={{ width: '150px' }}
      />
    </Box>
  );
}

function Files() {
  const [textFieldValues, setTextFieldValues] = useState({
    outlined: '',
    filled: '',
    standard: '',
  });

  const handleTextFieldChange = (field, value) => {
    setTextFieldValues((prev) => ({ ...prev, [field]: value }));
  };

  const [autoValue, setAutoValue] = useState('Option 1');
  const [symbolText, setSymbolText] = useState('Custom Text');
  const [symbolHeading, setSymbolHeading] = useState('Custom Heading');
  

  return (
    <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', gap: 4 }}>
      <PaperBox />
      <TextFieldGroup
        values={textFieldValues}
        onChange={handleTextFieldChange}
      />
      <AutoCompleteBox
        options={['Option 1', 'Option 2']}
        value={autoValue}
        onChange={setAutoValue}
      />
      <SymbolText
        text={symbolText}
        heading={symbolHeading}
        onTextChange={setSymbolText}
        onHeadingChange={setSymbolHeading}
      />
    </Box>
  );
}

export default Files;

