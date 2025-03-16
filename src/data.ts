export const getNewData = () => {
  const data: number[][] = [];
  for (let y = 0; y < 50; y += 1) {
    if (!data[y]?.length) data[y] = [];
    for (let x = 0; x < 100; x += 1) {
      const range = 0.5;
      data[y].push(range * Math.random());
    }
  }
  for (let y = 10; y < 40; y += 1) {
    for (let x = 30; x < 60; x += 1) {
      const range = 0.5;
      data[y][x] = 0.75 - range * Math.random();
    }
  }

  for (let y = 15; y < 35; y += 1) {
    for (let x = 35; x < 55; x += 1) {
      const range = 0.5;
      data[y][x] = 0.95 - range * Math.random();
    }
  }
  

  for (let y = 20; y < 30; y += 1) {
    for (let x = 40; x < 50; x += 1) {
      const range = 0.2;
      data[y][x] = 1.0 - range * Math.random();
    }
  }
  return data;
};
