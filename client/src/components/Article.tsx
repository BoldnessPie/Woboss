import { FC } from "react";
import "./Article.css";

const Article: FC = () => {
  return (
    <article className="article">
      <h3 className="article-header">Перл Недели</h3>
      <div className="article-title">Прибалтика вводит санкции против Грузии</div>
      <div className="article-content">
        Три страны Балтии совместно договорились о введении национальных санкций против тех, кто
        подавлял законные протесты в Грузии. Противникам демократии и нарушителям прав человека не
        рады в наших странах
      </div>
      <div className="article-comment-header">Комментарий автора:</div>
      <div className="article-comment-content">
        Страны первого мира (Эстония, Литва и Латвия), на правах старших братьев, не могут остаться
        равнодушными, когда в Грузии, стране которую они горячо любят и уважают (ведь их связывают
        многовековые экономические и культурные отношения), происходят такие плачевные события.{" "}
        <em>Russian Involved Detected</em>
      </div>
    </article>
  );
};

export default Article;
