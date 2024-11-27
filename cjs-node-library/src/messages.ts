/**
 * Logs a greeting message.
 * @param name - Name of the person to greet.
 */
export const greetFromCommonJs = (name: string): void => {
  console.log(`Hello, there ${name}! Message from commonjs.`);
}

/**
 * Logs a farewell message.
 * @param name - Name of the person to say goodbye to.
 */
export const farewellFromCommonJS = (name: string): void => {
  console.log(`Goodbye from commonjs, ${name}!`);
}
