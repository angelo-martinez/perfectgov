import React from "react";
import { FeedSidebar } from './FeedSidebar'
import { FeedHeader } from './FeedHeader'


export const Feed = () => {
  return (
    <section className="feed">
      <article className="feed-article">
        <FeedSidebar postUpvotes='3456' />
        <FeedHeader author="privpol23" time='15 minutes ago' />
        <h1 className="feed-article-title">Hello this is first proposal</h1>
        <div className="feed-article-img"></div>
        <p className="feed-article-dsc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi similique quisquam veritatis illum, distinctio vero voluptate excepturi consequuntur esse ratione sapiente dolore consectetur minima magni totam! Amet possimus vero earum!</p>
      </article>
      <article className="feed-article">
        <FeedSidebar postUpvotes='3458' />
        <h1 className="feed-article-title">Hello this is first proposal</h1>
        <div className="feed-article-img"></div>
        <p className="feed-article-dsc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi similique quisquam veritatis illum, distinctio vero voluptate excepturi consequuntur esse ratione sapiente dolore consectetur minima magni totam! Amet possimus vero earum!</p>
      </article>
    </section>
  );
};
