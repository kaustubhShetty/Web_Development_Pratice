<h2> Steps </h2>
<p>1.First remove the previous public folder.</p>
<p>2.Add a new folder called public. Make 2 more folders in it called css and js.</p>
<p>3.Go to Bootstrap website->Download->Compiled CSS and JS->download it.</p>
<p>4.Now copy and paste bootstrap.min.css in css folder of public</p>
<p>5.Now copy and paste bootstrap.min.js in js folder of public</p>
<p>6.change in subreddit.ejs file the link tag example:     link rel="stylesheet" href="/css/bootstrap.min.css" .</p>
<p>7.Go to jquery official site->download->click on download the compressed production jquery->command+S->save as jquery.js </p>
<p>8.Add this new jquery.js file to js folder in public.</p>
<p>9.In subreddit.ejs file write     <script src="/js/jquery.js"></script> </p>
<p>and below that write     <script src="/js/bootstrap.min.js"></script></p>
<p>And now you can use bootstrap.</p>

<p> A bootstrap navbar has been added to subreddit.ejs </p>
