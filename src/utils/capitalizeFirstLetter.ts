const toCapitalizeFirstLetter = (value: string) => {
  const result = value[0].toUpperCase() + value.slice(1).toLowerCase();
  return result;
};

export default toCapitalizeFirstLetter;
