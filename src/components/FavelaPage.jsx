import React from 'react';
import { Typography, Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const FavelaPage = (props) => {
  const { title, description, restaurants, projects } = props;
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <Box sx={{ padding: '2rem' }}>
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {description}
      </Typography>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          Restaurantes na comunidade
        </Typography>
        <Grid container spacing={2}>
          {restaurants.map((restaurant) => (
            <Grid item key={restaurant.name} xs={12} sm={6} md={4}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image={restaurant.image}
                    alt={restaurant.name}
                  />
                  <CardContent>
                    <Typography variant="h6" component="div">
                      {restaurant.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {restaurant.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Saiba mais
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          Fique por dentro dos projetos que estão rolando na comunidade!
        </Typography>
        <Grid container spacing={2}>
          {projects.map((project) => (
            <Grid item key={project.title} xs={12} sm={6} md={4}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image={project.image}
                    alt={project.title}
                  />
                  <CardContent>
                    <Typography variant="h6" component="div">
                      {project.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {project.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Saiba mais
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ mt: 4 }}>
        <Button variant="contained" onClick={handleGoBack}>
          Voltar à tela inicial
        </Button>
      </Box>
    </Box>
  );
};

export default FavelaPage;
