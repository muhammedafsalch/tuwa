const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../app/[locale]');

function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  
  for (const file of files) {
    const fullPath = path.join(directory, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (file === 'page.js') {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Check if it has export const metadata
      const metaRegex = /export const metadata = {([\s\S]*?)};/m;
      const match = content.match(metaRegex);
      
      if (match) {
        // Extract title and description
        const titleMatch = match[1].match(/title:\s*["']([^"']+)["']/);
        const descMatch = match[1].match(/description:\s*["']([^"']+)["']/);
        
        if (titleMatch && descMatch) {
          const title = titleMatch[1];
          const desc = descMatch[1];
          
          // Determine dictionary key based on folder name
          const folderName = path.basename(directory);
          let dictKey = folderName;
          if (folderName === '[locale]') dictKey = 'home';
          if (folderName === 'about-us') dictKey = 'about';
          if (folderName === 'request-quote') dictKey = 'quote';
          
          // Make sure getDictionary is imported
          if (!content.includes('import { getDictionary }')) {
            content = `import { getDictionary } from "@/i18n/getDictionary";\n` + content;
          }
          
          const newMetadata = `export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { locale } = resolvedParams;
  const dictObj = await getDictionary(locale);
  const dict = dictObj['${dictKey}']?.metadata;
  
  const title = dict?.title || "${title}";
  const description = dict?.description || "${desc}";
  
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: \`https://tuwabusiness.com/\${locale}/${folderName === '[locale]' ? '' : folderName}\`
    }
  };
}`;
          
          content = content.replace(metaRegex, newMetadata);
          fs.writeFileSync(fullPath, content);
          console.log(`Updated ${fullPath}`);
        }
      }
    }
  }
}

processDirectory(dir);
console.log('Metadata update complete.');
