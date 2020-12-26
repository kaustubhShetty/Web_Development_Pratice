<h2> Extracting request body (information sent by client to be updated/deleted/added) from a post request </h2>
<p>3 steps </p>
<p>1. add this app.use(express.urlencoded({ extended: true })); </p>
<p>2. add this app.use(express.json()); </p>
<p>3. req.body to access the info in the post request.</p>
