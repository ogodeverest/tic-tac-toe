export default function toCSSVariables(variables: Object) {
  let result: string = "";
  for (const name in variables) {
    result += `--${name}:${variables[name]};`;
  }

  return result;
}
