<h2> Steps </h2>
1.First remove the previous public folder.
2.Add a new folder called public. Make 2 more folders in it called css and js.
3.Go to Bootstrap website->Download->Compiled CSS and JS->download it.
4.Now copy and paste bootstrap.min.css in css folder of public
5.Now copy and paste bootstrap.min.js in js folder of public
6.change in subreddit.ejs file the link tag example:     link rel="stylesheet" href="/css/bootstrap.min.css" .
7.Go to jquery official site->download->click on download the compressed production jquery->command+S->save as jquery.js
8.Add this new jquery.js file to js folder in public.
9.In subreddit.ejs file write     <script src="/js/jquery.js"></script>
and below that write     <script src="/js/bootstrap.min.js"></script>
And now you can use bootstrap.
