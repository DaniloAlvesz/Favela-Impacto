import React from 'react';
import FavelaPage from '../components/FavelaPage';

const Brasilia = () => {
  const restaurants = [
    {
      name: 'VIEIRA',
      description:
        'Cozinha à la carte de pescados em receitas regionais e porções mistas, em espaço casual e familiar.',
      image: '../images/vieira-thumb.jpg',
    },
    {
      name: 'Restaurante 2',
      description: 'Descrição do Restaurante 2',
      image: 'imagem-restaurante-2.jpg',
    },
    // Adicione mais restaurantes se necessário
  ];

  const projects = [
    {
      title: 'Projeto 1',
      description: 'Descrição do Projeto 1',
      image: 'imagem-projeto-1.jpg',
    },
    {
      title: 'Projeto 2',
      description: 'Descrição do Projeto 2',
      image: 'imagem-projeto-2.jpg',
    },
    // Adicione mais projetos se necessário
  ];

  return (
    <FavelaPage
      title="Brasília Teimosa"
      description="Descrição da Favela Brasília Teimosa"
      restaurants={restaurants}
      projects={projects}
    />
  );
};

export default Brasilia;
