<h1> EJS+Partials </h1>
<p> Partials are a way of <b>including</b> templates in other templates </p>
<p> They are useful if we have some code, markup that we are duplicating</p>
<p> They are called "Includes" in ejs </p>
<p> Lets take 2 examples</p>
<p>1. We take the head of ejs files, put all the code of head in a new template ie. views(folder)->partials(folder)->head.ejs(file)</p>
<p> Wherever you want to include this head code in other templates we write <b><%-include('partials/head')%></b></p>
<p> These changes have been made in subreddit.ejs,cats.ejs,notfound.ejs</p>
<p>2. We want the same Navbar for all the templates </p>
<p> views->partials->navbar.ejs</p>
<p> In slides you want the navbar write <b><%- include('partials/navbar')%></b></p>
<p> These changes have been made in home,subreddit,random </p>
