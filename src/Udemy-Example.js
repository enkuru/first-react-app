/*export const kare = (a) => {
  return a * a;
};*/

// const kare = (a) => a * a;/*tek satırda işlem yaparak return ediyorsak bu şekilde de yapılabilir*/
const kare = a => a * a;/*tek satırda işlem yaparak return ediyorsak bu şekilde de yapılabilir, tek parametre için paranteze gerek yok*/

export const topla = (a, b) => {
  return a + b;
};

export const cikar = (a, b) => {
  return a - b;
};

export default kare;