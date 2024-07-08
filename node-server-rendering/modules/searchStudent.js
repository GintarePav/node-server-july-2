module.exports = (data, property, query) => {
  const result = data.filter((student) => {
    return student[property].toLowerCase().includes(query.toLowerCase());
  });
  if (result.length >= 1) {
    return result;
  } else if (!query) {
    return {
      error: `${property} not provided`,
    };
  } else {
    return {
      result: `no ${property} provided`,
    };
  }
};
