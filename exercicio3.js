console.log("-----Números Pares até 20-----");

for (let i = 1; i <= 20; i++) {
  let resto = i % 2;
  if (resto == 0) {
    console.log(i);
  }
}
