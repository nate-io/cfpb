<article><h1 id="slcsp" style="position:relative;"><a href="#slcsp" aria-label="slcsp permalink" class="anchor before"><svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>SLCSP</h1>
<h2 id="calculate-the-second-lowest-cost-silver-plan" style="position:relative;"><a href="#calculate-the-second-lowest-cost-silver-plan" aria-label="calculate the second lowest cost silver plan permalink" class="anchor before"><svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Calculate the second lowest cost silver plan</h2>
<h2 id="problem" style="position:relative;"><a href="#problem" aria-label="problem permalink" class="anchor before"><svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Problem</h2>
<p>You've been asked to determine the second lowest cost silver plan (SLCSP) for
a group of ZIP codes.</p>
<h2 id="task" style="position:relative;"><a href="#task" aria-label="task permalink" class="anchor before"><svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Task</h2>
<p>You've been given a CSV file, <code>slcsp.csv</code>, which contains the ZIP codes in the
first column. Fill in the second column with the rate (see below) of the
corresponding SLCSP and emit the answer as a CSV on stdout. Write your code in your best programming language.</p>
<h3 id="expected-output" style="position:relative;"><a href="#expected-output" aria-label="expected output permalink" class="anchor before"><svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Expected output</h3>
<p>The order of the rows in your answer as emitted on stdout must stay the same as how they
appeared in the original <code>slcsp.csv</code>. The first row should be the column headers: <code>zipcode,rate</code>
The remaining lines should output unquoted values with two digits after the decimal
place of the rates, for example: <code>64148,245.20</code>.</p>
<p>It may not be possible to determine a SLCSP for every ZIP code given; for example, if there is only one silver plan available, there is no <em>second</em> lowest cost plan. Check for cases where a definitive answer cannot be found and leave those cells blank in the output CSV (no quotes or zeroes or other text). For example, <code>40813,</code>.</p>
<h2 id="additional-information" style="position:relative;"><a href="#additional-information" aria-label="additional information permalink" class="anchor before"><svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Additional information</h2>
<p>The SLCSP is the so-called "benchmark" health plan in a particular area. It's
used to compute the tax credit that qualifying individuals and families receive
on the marketplace. It's the second lowest rate for a silver plan in the rate area.</p>
<p>For example, if a rate area had silver plans with rates of <code>[197.3, 197.3, 201.1, 305.4, 306.7, 411.24]</code>, the SLCSP for that rate area would be <code>201.1</code>,
since it's the second lowest rate in that rate area.</p>
<p>A plan has a "metal level", which can be either Bronze, Silver, Gold, Platinum,
or Catastrophic. The metal level is indicative of the level of coverage the plan
provides.</p>
<p>A plan has a "rate", which is the amount that a consumer pays as a monthly
premium, in dollars.</p>
<p>A plan has a "rate area", which is a geographic region in a state that
determines the plan's rate. A rate area is a tuple of a state and a number, for
example, NY 1, IL 14.</p>
<p>There are two additional CSV files in this directory besides <code>slcsp.csv</code>:</p>
<ul>
<li><code>plans.csv</code> — all the health plans in the U.S. on the marketplace</li>
<li><code>zips.csv</code> — a mapping of ZIP code to county/counties &amp; rate area(s)</li>
</ul>
<p>A ZIP code can potentially be in more than one county. If the county can not be
determined definitively by the ZIP code, it may still be possible to determine
the rate area for that ZIP code. A ZIP code can also be in more than one rate area. In that case, the answer is ambiguous
and should be left blank.</p>
<p>We will want to compile your code from source and run it, so please include the
complete instructions for doing so in a COMMENTS file.</p></article>