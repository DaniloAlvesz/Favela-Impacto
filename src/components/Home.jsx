import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Typography,
  AppBar,
  Toolbar,
  Select,
  MenuItem,
  Box,
  Container,
} from '@mui/material';

const Home = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const navigate = useNavigate();

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: '#000' }}>
        <Toolbar sx={{ justifyContent: 'center' }}>
          <Typography variant="h6" component="div">
            Impacto Favela
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          textAlign: 'left',
          background: 'yellow',
          padding: '4rem',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
        }}
      >
        <Typography
          variant="h1"
          gutterBottom
          sx={{ color: '#000', fontWeight: 'bold', margin: '10% 0 1% 0' }}
        >
          Impacto da favela para o mundo
        </Typography>

        <Typography variant="h6" gutterBottom sx={{ color: '#000' }}>
          Conheça as favelas do Recife e os seus impactos para o mundo.
        </Typography>

        <Select
          variant="outlined"
          sx={{ marginTop: '2rem', color: '#000' }}
          value={selectedOption}
          onChange={handleOptionChange}
          displayEmpty
        >
          <MenuItem value="" disabled>
            Explore as favelas
          </MenuItem>
          <MenuItem value="BrasiliaTeimosa">Brasília Teimosa</MenuItem>
          <MenuItem value="Coque">Coque</MenuItem>
          <MenuItem value="AltoDoCristo">Alto do Cristo</MenuItem>
          <MenuItem value="Curado">Curado</MenuItem>
          {/* Adicione os demais itens da lista com as 15 favelas */}
        </Select>
      </Box>

      {selectedOption === 'BrasiliaTeimosa' &&
        navigate('/brasilia', { replace: true })}
      {selectedOption === 'Curado' && navigate('/curado', { replace: true })}
      {selectedOption === 'Coque' && navigate('/coque', { replace: true })}
      {selectedOption === 'AltoDoCristo' &&
        navigate('/AltoDoCristo', { replace: true })}
    </>
  );
};

export default Home;
