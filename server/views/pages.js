const page = (title, body) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${title}</title>   
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"> 
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    </head>
    <body>
      <div _ngcontent-serverapp-c85="" class="card-body">
        <h1 class="text-center" _ngcontent-serverapp-c85="">Tiny URL</h1>
          <p class="text-center" _ngcontent-serverapp-c85="" class="lead">Shorten that long URL</p>
          ${body}
          <!----><!----><!---->
      </div>
    </body>
    </html>
    `;
  };
  
  const index = () => {
    const title = "Tiny-URL";
    const body = `
    <form _ngcontent-serverapp-c85="" novalidate="" class="ng-untouched ng-pristine ng-invalid" method="post">
        <div _ngcontent-serverapp-c85="" class="input-group">
            <input _ngcontent-serverapp-c85="" data-cy="newsletterSignupEmailButton" name="url" id="url" placeholder="Enter long url..." aria-label="Your long url..." formcontrolname="url" class="form-control ng-untouched ng-pristine ng-invalid">
            <button _ngcontent-serverapp-c85="" data-cy="newsletterSignupSubmit" type="submit" class="btn-signup btn btn-primary fw-500">Shorten URL!</button>
            <div _ngcontent-serverapp-c85="" class="invalid-feedback mt-2">Email required.</div>
            <!----><!---->
        </div>
    </form>`;
    return page(title, body);
  };

  const result = (short_url) => {
    const title = "Tiny-URL result";
    const body = `
    <div class="input-group mb-3">
      <input type="text" class="form-control" value=${short_url} aria-label="Username" aria-describedby="basic-addon1" id = "short_url" readonly>
      <div class="input-group-append">
        <button class="btn btn-outline-secondary" type="button"><i class="fa fa-copy"></i></button>
        <button class="btn btn-outline-secondary" type="button">Shorten another</button>
      </div>
    </div>`

    return page(title, body);
  };

  module.exports = { index, result };