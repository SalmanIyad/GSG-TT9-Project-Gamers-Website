import React from 'react';
import styles from './style.module.css';
import { Typography } from '../Typography';
import Container from '../Container';
import Card from '../Card';
import { newGames } from '../../mock/data';

const NewGames = () => {
  return (
    <Container>
      <div className={styles.new_games}>
        <Typography variant={'h3'}>new games</Typography>
        <div className={styles.cards_games}>
          {newGames.map((game) => (
            <Card
              name={game.name}
              key={game.bg}
              bg={game.bg}
              hero={game.hero}
              title={game.title}
              text={game.text}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default NewGames;
