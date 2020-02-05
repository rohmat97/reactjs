import React from "react";
import Button from '../../containers/Button';
import NewsItem from '../../containers/NewsItem';
import Loading from '../../containers/Loading';
function Main() {

  return (
    <div>
      <Button />
      <Loading />
      <NewsItem />
    </div>
  );
}

export default Main;