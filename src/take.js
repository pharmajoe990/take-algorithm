const take = (data, numberOfElements) => {
  let iterator = 0;
  let arrIterator = 0;
  const takeData = [];
  while (iterator < numberOfElements) {
    takeData.push(data[arrIterator]);
    iterator += 1;
    arrIterator = arrIterator + 1 === data.length
      ? 0
      : arrIterator += 1;
  }
  return takeData;
};

export default take;
