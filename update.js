import fs from 'fs-extra';
import getTweets from 'get-tweets';
import tokens from './tokens';
import authors from './authors';

const author = authors[0];

getTweets(tokens, 'cssunderhood', author.first, (err, tweets, missed, info) => {
  if (err) throw err;
  author.tweets = tweets;
  const done = err => console.log(`${author.username} done`;
  fs.outputJson(`./dump/${author.username}.json`, author, done);
  fs.outputJson(`./dump/${author.username}-info.json`, info, done);
});
