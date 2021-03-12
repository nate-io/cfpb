<article><h1 id="noclist" style="position:relative;"><a href="#noclist" aria-label="noclist permalink" class="anchor before"><svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Noclist</h1>
<h2 id="retrieve-the-noc-list" style="position:relative;"><a href="#retrieve-the-noc-list" aria-label="retrieve the noc list permalink" class="anchor before"><svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Retrieve the NOC list</h2>
<p>The Bureau of Adversarial Dossiers and Securely Encrypted Code (<code>BADSEC</code>)
has asked you to retrieve a list of VIP users. Fortunately, BADSEC provides an API to the agency you've been working with. Unfortunately, it's not the best API in the world.</p>
<p>Your job is to write a program that securely and politely asks the BADSEC
server for this list of users and prints it to stdout in JSON format.</p>
<p>As the server that your application will be hitting is not well written, you
should seek to minimize the amount of communication it does. Furthermore, you
should write a client that is resilient to errors in the server.</p>
<p>We will want to build and run your code from source, so please include the
complete instructions for doing so in a COMMENTS file.</p>
<h2 id="output-format" style="position:relative;"><a href="#output-format" aria-label="output format permalink" class="anchor before"><svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Output format</h2>
<p>Your application should output a JSON-formatted list of user ids to stdout:</p>
<div class="gatsby-highlight" data-language="json"><pre class="language-json"><code class="language-json"><span class="token punctuation">[</span><span class="token string">"9757263792576857988"</span><span class="token punctuation">,</span> <span class="token string">"7789651288773276582"</span><span class="token punctuation">,</span> <span class="token string">"16283886502782682407"</span><span class="token punctuation">,</span> <span class="token string">"...etc"</span><span class="token punctuation">]</span></code></pre></div>
<p>Your application should exit with a status code of zero on success, and nonzero
on failure.</p>
<p>Log as much as you want to stderr, but make sure that stdout includes only the
JSON output of your program if there is any; otherwise the results won't parse
properly.</p>
<h2 id="running-the-server" style="position:relative;"><a href="#running-the-server" aria-label="running the server permalink" class="anchor before"><svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Running the server</h2>
<p>Ensure that you have <a href="https://docker.com">docker</a> installed on your system.</p>
<p>The BADSEC server will run on port 8888. You can start it with:</p>
<p><code>docker run --rm -p 8888:8888 adhocteam/noclist</code></p>
<p>You should see <code>Listening on http://0.0.0.0:8888</code>.</p>
<p>If you have any trouble getting the server running, or any other questions
about this homework, use the chat button in the lower right to contact us.</p>
<h2 id="handling-errors" style="position:relative;"><a href="#handling-errors" aria-label="handling errors permalink" class="anchor before"><svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Handling errors</h2>
<p>You may treat a dropped connection or any response code other than 200 as a
failure.</p>
<p>Keep in mind that both the <code>/auth</code> and <code>/users</code> endpoints may fail.</p>
<p>If a call to an endpoint fails, you should retry up to 2 times. If the call
fails 3 times in a row, your application should exit with a non-zero status
code to indicate failure.</p>
<p>Avoid off by one errors! The correct sequence is:
<code>try -&gt; fail -&gt; retry -&gt; fail -&gt; retry -&gt; exit if fail</code></p>
<p>Please write the retry logic yourself rather than use a request library with built-in retry functionality.</p>
<p>The server we've given you is just a demonstration server; it should not
throw any errors.</p>
<p>The production server your code will run against after you submit it will
return non-200 responses and randomly drop connections; your code should be
able to handle those errors.</p>
<h2 id="server-api" style="position:relative;"><a href="#server-api" aria-label="server api permalink" class="anchor before"><svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Server API</h2>
<h3 id="authentication" style="position:relative;"><a href="#authentication" aria-label="authentication permalink" class="anchor before"><svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Authentication</h3>
<p>The <code>BADSEC</code> server requires you to authenticate yourself by signing all requests
with a provided auth token. To get the token, the first thing your application should do is call <code>/auth</code>.
This endpoint will return a token you can use to generate the checksum for the
subsequent user list call.</p>
<p>If you have any questions about authenticating, use the chat button in the lower right to contact us.</p>
<h3 id="checksum" style="position:relative;"><a href="#checksum" aria-label="checksum permalink" class="anchor before"><svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Checksum</h3>
<p>To request the user list, you will need to provide a checksum in the
<code>X-Request-Checksum</code> header. To calculate this checksum, you should compute:</p>
<div class="gatsby-highlight" data-language="text"><pre class="language-text"><code class="language-text">sha256(&lt;auth_token&gt; + &lt;request path&gt;)</code></pre></div>
<p>For example, if you had auth token <code>12345</code> and were requesting <code>/users</code>, the checksum would be:</p>
<div class="gatsby-highlight" data-language="text"><pre class="language-text"><code class="language-text">sha256("12345/users") = c20acb14a3d3339b9e92daebb173e41379f9f2fad4aa6a6326a696bd90c67419</code></pre></div>
<p>and you would include that value as the <code>X-Request-Checksum</code> header in your request.</p>
<h3 id="the-endpoints" style="position:relative;"><a href="#the-endpoints" aria-label="the endpoints permalink" class="anchor before"><svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>The endpoints</h3>
<h4 id="get-head-auth" style="position:relative;"><a href="#get-head-auth" aria-label="get head auth permalink" class="anchor before"><svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>GET, HEAD /auth</h4>
<p>Before making further calls to the server, you must first call /auth to get
an authentication token. The token will be valid until the server stops
or issues another token.</p>
<p>The server will return the authentication token in the
<code>Badsec-Authentication-Token</code> HTTP header.</p>
<p>Calling <code>/auth</code> will invalidate all previous auth tokens you have acquired, so
make sure you use the most recent one.</p>
<p>Note that, for unclear reasons, this API call returns a large amount of useless
data in the response body. You should ignore this useless data; you only need
the data in the header.</p>
<h4 id="get-users" style="position:relative;"><a href="#get-users" aria-label="get users permalink" class="anchor before"><svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>GET /users</h4>
<p>This endpoint will return a list of 64-bit newline-separated user IDs like
this one:</p>
<div class="gatsby-highlight" data-language="text"><pre class="language-text"><code class="language-text">9757263792576857988
7789651288773276582
1628388650278268240</code></pre></div>
<p>Make sure you send the <code>X-Request-Checksum</code> header to the <code>/users</code> endpoint.</p></article>