function kFormatter(num: number) {
  const abs = Math.abs(num);
  const sign = Math.sign(num);
  const output = abs > 999 ? sign * (abs / 1000) : sign * abs;
  return Math.floor(output) + "K";
}
export default kFormatter;
