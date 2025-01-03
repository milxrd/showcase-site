// @ts-check

import NotionParse from '@kodaps/notion-parse';
import dotenv from 'dotenv';

dotenv.config();

const go = async () => {

  if (process.env.NOTION_SECRET) {
    await NotionParse.parseNotion(process.env.NOTION_SECRET, './app/content', [
      {
        databaseId: process.env.NOTION_PORTFOLIO_DATABASE_ID || '',
        contentType: 'Portfolio'
      },
      /*{
        databaseId: process.env.NOTION_POST_DATABASE_ID || '',
        contentType: 'Post',
        languageField: 'lang',
        filterFields: [ 'translation', 'createdAt', 'status', 'Type']
      },*/
    ])
  }

};

go().then(() => {
  console.log('Done');
});