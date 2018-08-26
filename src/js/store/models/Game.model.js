import shortid from 'shortid';

export const GameModel = (data) => {
  const id = data.id || shortid.generate();
  return {
    id: id,
    name: data.name || 'Game : ' + id
  };
};
