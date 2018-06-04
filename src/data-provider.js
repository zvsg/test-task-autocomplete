const api = {
  /**
   * Get autocomplete options
   * @param {String} text - Search value
   * @returns {Promise<any>}
   */
  getAutocompleteOptions: text => {
    return fetch(`https://itunes.apple.com/search?term=${text}&limit=3`)
      .then(rs => {
        return rs.json();
      })
      .then(rs => rs.results)
      .catch(rs => {
        if (
          rs.error &&
          rs.error.hasOwnProperty("error") &&
          rs.error.error.message
        ) {
          return rs.error.error.message;
        }

        return "Internal Error";
      });
  }
};

export default api;
