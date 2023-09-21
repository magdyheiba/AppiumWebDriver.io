export default class Common {
  /**
   * This method is to delay the execution to wait for element to load.
   * @param ms millie second period of time
   */
  async delay(ms: number) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }
}
