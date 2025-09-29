import { parseNotion } from '@kodaps/notion-parse';
import { config } from 'dotenv';

config();

const go = async () => {

  if (process.env.NOTION_SECRET) {
    await parseNotion(process.env.NOTION_SECRET, './app/content', [
      {
        databaseId: process.env.NOTION_PORTFOLIO_DATABASE_ID || '',
        contentType: 'Portfolio',
        languageField: 'lang',
        filterFields: [ 'translation', 'createdAt', 'status', 'Type']
      },
      {
        databaseId: process.env.NOTION_POST_DATABASE_ID || '',
        contentType: 'Post',
        languageField: 'lang',
        filterFields: [ 'translation', 'createdAt', 'status', 'Type']
      },
    ])
  }

};

go().then(() => {
  console.log('Done');
}).catch((error) => {
  console.error('Error parsing Notion data:', error);
  process.exit(1);
});
