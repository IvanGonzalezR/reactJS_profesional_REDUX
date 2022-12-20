// Quiero que cada vez que se dispare un action,
// se ejecute un middleware para hacer un console.log

//next se llama cuando se termina de ejecutar el middleware
const logger = (store) => (next) => (action) => {
  console.log('Action actual', action);
  next(action);
}

// curryfied function
const featuring = (store) => (next) => (actionInfo) => {
  const featured = [
    { name: 'Kike' },
    ...actionInfo.action.payload
  ];
  const updatedActionInfo = {
    ...actionInfo,
    action: {
      ...actionInfo.action,
      payload: featured
    }
  };
  next(updatedActionInfo);
}

export { logger, featuring };