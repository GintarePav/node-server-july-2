module.exports = (data) => {
  return data.toSorted((a, b) => a.lastName.localeCompare(b.lastName));
};
