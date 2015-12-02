import React, { Component } from 'react';
module.exports = React.createClass({
  componentDidMount: ()=>{
    Reveal.initialize({
      controls: true,
      progress: true,
      history: true,
      center: true,

      transition: 'slide', // none/fade/slide/convex/concave/zoom

      // Optional reveal.js plugins
      dependencies: [
        { src: 'lib/js/classList.js', condition: function() { return !document.body.classList; } },
        { src: 'plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
        { src: 'plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
        { src: 'plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
        { src: 'plugin/zoom-js/zoom.js', async: true },
        { src: 'plugin/notes/notes.js', async: true }
      ]
    });
  },
  componentDidUpdate: ()=>{
    console.log("1231324");
    debugger;
    Reveal.initialize({
      controls: true,
      progress: true,
      history: true,
      center: true,

      transition: 'slide', // none/fade/slide/convex/concave/zoom

      // Optional reveal.js plugins
      dependencies: [
        { src: 'lib/js/classList.js', condition: function() { return !document.body.classList; } },
        { src: 'plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
        { src: 'plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
        { src: 'plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
        { src: 'plugin/zoom-js/zoom.js', async: true },
        { src: 'plugin/notes/notes.js', async: true }
      ]
    });
  },
  render: ()=>{
    return(
        <div className="slides">
          <section>
            <h1>Reveal.js</h1>
            <h3>The HTML Presentation Framework</h3>
            <p>
              <small>Created by <a href="http://hakim.se">Hakim El Hattab</a> / <a href="http://twitter.com/hakimel">@hakimel</a></small>
            </p>
          </section>

          <section>
            <h2>Hello There.</h2>
            <p>
              reveal.js enables you to create beautiful interactive slide decks using HTML. This presentation will show you examples of what it can do.
            </p>
          </section>

          <section>
            <section>
              <h2>Vertical Slides</h2>
              <p>Slides can be nested inside of each other.</p>
              <p>Use the <em>Space</em> key to navigate through all slides.</p>
              <br/>
              <a href="#" className="navigate-down">
                <img width="178" height="238" data-src="https://s3.amazonaws.com/hakim-static/reveal-js/arrow.png" alt="Down arrow"/>
              </a>
            </section>
            <section>
              <h2>Basement Level 1</h2>
              <p>Nested slides are useful for adding additional detail underneath a high level horizontal slide.</p>
            </section>
            <section>
              <h2>Basement Level 2</h2>
              <p>That's it, time to go back up.</p>
              <br/>
              <a href="#/2">
                <img width="178" height="238" data-src="https://s3.amazonaws.com/hakim-static/reveal-js/arrow.png" alt="Up arrow" style={{"transform": "rotate(180deg)", "WebkitTransform": "rotate(180deg)"}}/>
              </a>
            </section>
          </section>

          <section>
            <h2>Slides</h2>
            <p>
              Not a coder? Not a problem. There's a fully-featured visual editor for authoring these, try it out at <a href="http://slides.com" target="_blank">http://slides.com</a>.
            </p>
          </section>

          <section>
            <h2>Point of View</h2>
            <p>
              Press <strong>ESC</strong> to enter the slide overview.
            </p>
            <p>
              Hold down alt and click on any element to zoom in on it using <a href="http://lab.hakim.se/zoom-js">zoom.js</a>. Alt + click anywhere to zoom back out.
            </p>
          </section>

          <section>
            <h2>Touch Optimized</h2>
            <p>
              Presentations look great on touch devices, like mobile phones and tablets. Simply swipe through your slides.
            </p>
          </section>

          <section data-markdown>
            <script type="text/template">
              ## Markdown support

              Write content using inline or external Markdown.
              Instructions and more info available in the [readme](https://github.com/hakimel/reveal.js#markdown).

              ```
              <section data-markdown>
                ## Markdown support

                Write content using inline or external Markdown.
                Instructions and more info available in the [readme](https://github.com/hakimel/reveal.js#markdown).
              </section>
              ```
            </script>
          </section>

          <section>
            <section id="fragments">
              <h2>Fragments</h2>
              <p>Hit the next arrow...</p>
              <p className="fragment">... to step through ...</p>
              <p><span className="fragment">... a</span> <span className="fragment">fragmented</span> <span className="fragment">slide.</span></p>

              <aside className="notes">
                This slide has fragments which are also stepped through in the notes window.
              </aside>
            </section>
            <section>
              <h2>Fragment Styles</h2>
              <p>There's different types of fragments, like:</p>
              <p className="fragment grow">grow</p>
              <p className="fragment shrink">shrink</p>
              <p className="fragment fade-out">fade-out</p>
              <p className="fragment current-visible">current-visible</p>
              <p className="fragment highlight-red">highlight-red</p>
              <p className="fragment highlight-blue">highlight-blue</p>
            </section>
          </section>

          <section id="transitions">
            <h2>Transition Styles</h2>
            <p>
              You can select from different transitions, like: <br/>
              <a href="?transition=none#/transitions">None</a> -
              <a href="?transition=fade#/transitions">Fade</a> -
              <a href="?transition=slide#/transitions">Slide</a> -
              <a href="?transition=convex#/transitions">Convex</a> -
              <a href="?transition=concave#/transitions">Concave</a> -
              <a href="?transition=zoom#/transitions">Zoom</a>
            </p>
          </section>

          <section id="themes">
            <h2>Themes</h2>
            <p>
              reveal.js comes with a few themes built in: <br/>
              <a href="#" onclick="document.getElementById('theme').setAttribute('href','css/theme/black.css'); return false;">Black (default)</a> -
              <a href="#" onclick="document.getElementById('theme').setAttribute('href','css/theme/white.css'); return false;">White</a> -
              <a href="#" onclick="document.getElementById('theme').setAttribute('href','css/theme/league.css'); return false;">League</a> -
              <a href="#" onclick="document.getElementById('theme').setAttribute('href','css/theme/sky.css'); return false;">Sky</a> -
              <a href="#" onclick="document.getElementById('theme').setAttribute('href','css/theme/beige.css'); return false;">Beige</a> -
              <a href="#" onclick="document.getElementById('theme').setAttribute('href','css/theme/simple.css'); return false;">Simple</a> <br/>
              <a href="#" onclick="document.getElementById('theme').setAttribute('href','css/theme/serif.css'); return false;">Serif</a> -
              <a href="#" onclick="document.getElementById('theme').setAttribute('href','css/theme/blood.css'); return false;">Blood</a> -
              <a href="#" onclick="document.getElementById('theme').setAttribute('href','css/theme/night.css'); return false;">Night</a> -
              <a href="#" onclick="document.getElementById('theme').setAttribute('href','css/theme/moon.css'); return false;">Moon</a> -
              <a href="#" onclick="document.getElementById('theme').setAttribute('href','css/theme/solarized.css'); return false;">Solarized</a>
            </p>
          </section>

          <section>
            <section data-background="#dddddd">
              <h2>Slide Backgrounds</h2>
              <p>
                Set <code>data-background="#dddddd"</code> on a slide to change the background color. All CSS color formats are supported.
              </p>
              <a href="#" className="navigate-down">
                <img width="178" height="238" data-src="https://s3.amazonaws.com/hakim-static/reveal-js/arrow.png" alt="Down arrow"/>
              </a>
            </section>
            <section data-background="https://s3.amazonaws.com/hakim-static/reveal-js/image-placeholder.png">
              <h2>Image Backgrounds</h2>
              <pre><code className="hljs">&lt;section data-background="image.png"&gt;</code></pre>
            </section>
            <section data-background="https://s3.amazonaws.com/hakim-static/reveal-js/image-placeholder.png" data-background-repeat="repeat" data-background-size="100px">
              <h2>Tiled Backgrounds</h2>
              <pre><code className="hljs" style={{"wordWrap": "break-word"}}>&lt;section data-background="image.png" data-background-repeat="repeat" data-background-size="100px"&gt;</code></pre>
            </section>
            <section data-background-video="https://s3.amazonaws.com/static.slid.es/site/homepage/v1/homepage-video-editor.mp4,https://s3.amazonaws.com/static.slid.es/site/homepage/v1/homepage-video-editor.webm" data-background-color="#000000">
              <div style={{"backgroundColor": "rgba(0, 0, 0, 0.9)", "color": "#fff", "padding": "20px"}}>
                <h2>Video Backgrounds</h2>
                <pre><code className="hljs" style={{"wordWrap": "break-word"}}>&lt;section data-background-video="video.mp4,video.webm"&gt;</code></pre>
              </div>
            </section>
            <section data-background="http://i.giphy.com/90F8aUepslB84.gif">
              <h2>... and GIFs!</h2>
            </section>
          </section>

          <section data-transition="slide" data-background="#4d7e65" data-background-transition="zoom">
            <h2>Background Transitions</h2>
            <p>
              Different background transitions are available via the backgroundTransition option. This one's called "zoom".
            </p>
          </section>

          <section data-transition="slide" data-background="#b5533c" data-background-transition="zoom">
            <h2>Background Transitions</h2>
            <p>
              You can override background transitions per-slide.
            </p>
            <pre><code className="hljs" style={{"wordWrap":"break-word"}}>&lt;section data-background-transition="zoom"&gt;</code></pre>
          </section>

          <section>
            <h2>Pretty Code</h2>
            <pre></pre>
            <p>Code syntax highlighting courtesy of <a href="http://softwaremaniacs.org/soft/highlight/en/description/">highlight.js</a>.</p>
          </section>

          <section>
            <h2>Marvelous List</h2>
            <ul>
              <li>No order here</li>
              <li>Or here</li>
              <li>Or here</li>
              <li>Or here</li>
            </ul>
          </section>

          <section>
            <h2>Fantastic Ordered List</h2>
            <ol>
              <li>One is smaller than...</li>
              <li>Two is smaller than...</li>
              <li>Three!</li>
            </ol>
          </section>

          <section>
            <h2>Tabular Tables</h2>
            <table>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Value</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Apples</td>
                  <td>$1</td>
                  <td>7</td>
                </tr>
                <tr>
                  <td>Lemonade</td>
                  <td>$2</td>
                  <td>18</td>
                </tr>
                <tr>
                  <td>Bread</td>
                  <td>$3</td>
                  <td>2</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section>
            <h2>Clever Quotes</h2>
            <p>
              These guys come in two forms, inline: <q cite="http://searchservervirtualization.techtarget.com/definition/Our-Favorite-Technology-Quotations">
              &ldquo;The nice thing about standards is that there are so many to choose from&rdquo;</q> and block:
            </p>
            <blockquote cite="http://searchservervirtualization.techtarget.com/definition/Our-Favorite-Technology-Quotations">
              &ldquo;For years there has been a theory that millions of monkeys typing at random on millions of typewriters would
              reproduce the entire works of Shakespeare. The Internet has proven this theory to be untrue.&rdquo;
            </blockquote>
          </section>

          <section>
            <h2>Intergalactic Interconnections</h2>
            <p>
              You can link between slides internally,
              <a href="#/2/3">like this</a>.
            </p>
          </section>

          <section>
            <h2>Speaker View</h2>
            <p>There's a <a href="https://github.com/hakimel/reveal.js#speaker-notes">speaker view</a>. It includes a timer, preview of the upcoming slide as well as your speaker notes.</p>
            <p>Press the <em>S</em> key to try it out.</p>

            <aside className="notes">
              Oh hey, these are some notes. They'll be hidden in your presentation, but you can see them if you open the speaker notes window (hit 's' on your keyboard).
            </aside>
          </section>

          <section>
            <h2>Export to PDF</h2>
            <p>Presentations can be <a href="https://github.com/hakimel/reveal.js#pdf-export">exported to PDF</a>, here's an example:</p>
          </section>

          <section>
            <h2>Global State</h2>
            <p>
              Set <code>data-state="something"</code> on a slide and <code>"something"</code>
              will be added as a class to the document element when the slide is open. This lets you
              apply broader style changes, like switching the page background.
            </p>
          </section>

          <section data-state="customevent">
            <h2>State Events</h2>
          </section>

          <section>
            <h2>Take a Moment</h2>
            <p>
              Press B or . on your keyboard to pause the presentation. This is helpful when you're on stage and want to take distracting slides off the screen.
            </p>
          </section>

          <section>
            <h2>Much more</h2>
            <ul>
              <li>Right-to-left support</li>
              <li><a href="https://github.com/hakimel/reveal.js#api">Extensive JavaScript API</a></li>
              <li><a href="https://github.com/hakimel/reveal.js#auto-sliding">Auto-progression</a></li>
              <li><a href="https://github.com/hakimel/reveal.js#parallax-background">Parallax backgrounds</a></li>
              <li><a href="https://github.com/hakimel/reveal.js#keyboard-bindings">Custom keyboard bindings</a></li>
            </ul>
          </section>

          <section style={{"textAlign": "left"}}>
            <h1>THE END</h1>
            <p>
              - <a href="http://slides.com">Try the online editor</a> <br/>
              - <a href="https://github.com/hakimel/reveal.js">Source code &amp; documentation</a>
            </p>
          </section>

        </div>
    )
  }
})