import React from 'react';
import styled from 'styled-components';

const MovieCard = ({ movie }) => {
  return (
    <Card>
      <Image src={movie.poster.url} alt={movie.name} />
      <Title>{movie.name}</Title>
      <Description>{movie.description}</Description>
    </Card>
  );
};

export default MovieCard;

const Card = styled.div`
  background: white;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  width: 100%;
  border-radius: 10px 10px 0 0;
`;

const Title = styled.h3`
  font-size: 1.2em;
  margin: 10px 0;
`;

const Description = styled.p`
  font-size: 0.9em;
  color: #555;
`;
