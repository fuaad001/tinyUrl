const page = (title, body) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${title}</title>    
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css">
    </head>
    <body>
      ${body}
    </body>
    </html>
    `;
  };
  
  const index = () => {
    const title = "Tiny-URL";
    const body = `
    <h1>Tiny URL"
    <h3>Shorten that long URL</h3>
    <form method="post">
      <label for="url">URL</label>
      <input type="text" name="url" id="url"/>
      <input type="submit"/>
    </form>`;
  
    return page(title, body);
  };

  const result = (short_url) => {
    return `
    <h4>This is your shortened URL:</h4>
    <pre><code>${short_url}</code></pre>`;
  };

  module.exports = { index, result };