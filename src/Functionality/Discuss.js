import Header from "../Homepage/Header";
import { DiscussionEmbed } from "disqus-react";
const Discuss = () => {
  return (
    <>
      <Header />
      <h1 className=" mx-auto text-center my-12 text-6xl font-serif">
        DISCUSS
      </h1>
      {/* <DiscussionEmbed
        shortname="example"
        config={{
          url: this.props.article.url,
          identifier: this.props.article.id,
          title: this.props.article.title,
          language: "zh_TW", //e.g. for Traditional Chinese (Taiwan)
        }} */}
      />
    </>
  );
};
export default Discuss;
