import React from "react";
import ReactDOM from "react-dom";
import Disqus from "disqus-react";
/* eslint-disable max-len */
class Test extends React.Component {
  render() {
    const disqusShortname = "coffeology"; //found in your Disqus.com dashboard
    const disqusConfig = {
      url: "http://localhost:3000", //this.props.pageUrl
      identifier: "article-id", //this.props.uniqueId
      title: "Title of Your Article" //this.props.title
    };

    return (
      <div className="article-container">
        <h1>Article Title</h1>

        <p>Article content.</p>

        <Disqus.DiscussionEmbed
          shortname={disqusShortname}
          config={disqusConfig}
        />
      </div>
    );
  }
}

export default Test;
