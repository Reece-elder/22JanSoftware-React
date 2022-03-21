import ArticleImage from "./ArticleImage";
import ArticleText from "./ArticleText";
import ArticleTitle from "./ArticleTitle";

const ArticleBody = () => {
  return (
    <div>
      <ArticleTitle />
      <ArticleImage />
      <ArticleText />
    </div>
  );
};

export default ArticleBody;
