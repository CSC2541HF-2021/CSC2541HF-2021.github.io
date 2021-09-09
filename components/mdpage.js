import marked from 'marked'
import React from 'react'
import { InlineMath, BlockMath } from 'react-katex';
import { renderToString } from "react-dom/server" 

export default class MDPage extends React.Component {
      
  constructor(props) {
    super(props);
    this.state = {
      md: "",
      slug: props.slug
    }
    this.getMarkdownText()

    marked.use({
      walkTokens(token) {
        const { type, raw } = token;
    
        // Modify paragraph blocks beginning and ending with $$.
        if (type === "paragraph" && raw.startsWith('$$\n') && raw.endsWith('\n$$')) {
          token.type = 'code';
          token.lang = 'blockMathematics';
          token.text = token.raw.slice(3, -3); // Remove the $$ boundaries.
          token.tokens.length = 0; // Remove child tokens.
        }
        // Modify paragraph blocks including $$ inline.
        else if (type === "paragraph" && raw.includes('$$')) {
          token.type = 'code';
          token.lang = 'inlineMathematics';
          token.text = token.raw.replace(/\$\$(.*?)\$\$/g, function (capture) {
            // Render inline removing the leading and trailing $$
            return renderToString(<InlineMath math={capture.slice(2, -2)}/>)
          });
        }
      },
      renderer: {
        code(code, language) {
          // Use custom mathematics renderer.
          if (language === 'blockMathematics') {
            return renderToString(
            <BlockMath math={code}/>
            )
          }
          else if (language === 'inlineMathematics') {
            return code
          }
          // Use default code renderer.
          return false;
        }
      }
    });
  }

    safeFetch(url, options) {
      if (options == null) {
        options = {}
      }

      if (options.credentials == null) options.credentials = 'same-origin'
      
      return fetch(url, options).then(function(response) {
          if (response.status >= 200 && response.status < 300) {
              return response.text();

          } else {
              var error = new Error(
                  response.statusText || response.status.toString()
              );

              return Promise.reject(error);
          }
      }).catch(err => {
          return Promise.reject(err);
      });
    }

    fetchMarkdown(slug) {
      this.safeFetch(`/assignments/${slug}.md`)
      .then((response) => {
          this.setState({
              md: response
          });
      })
      .catch((e) => {
          this.setState({
              md: "404"
          })
      });
    }

    getMarkdownText() {
      let projectsData = this.fetchMarkdown(this.props.slug)
      
      var rawMarkup = marked(this.state.md, {sanitize: false});
      return { __html: rawMarkup };
    }
    render() {
        return (
            <div dangerouslySetInnerHTML={this.getMarkdownText()} />
          )
    }
}