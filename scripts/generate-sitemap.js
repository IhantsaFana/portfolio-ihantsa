import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Configuration
const SITE_URL = 'https://oeka.mg';
const LANGUAGES = ['fr', 'en'];
const PAGES = [
  { path: '', priority: '1.0', changefreq: 'daily' },
  { path: 'about', priority: '0.8', changefreq: 'weekly' },
  { path: 'projects', priority: '0.9', changefreq: 'weekly' },
  { path: 'contact', priority: '0.7', changefreq: 'monthly' },
  { path: 'blog', priority: '0.8', changefreq: 'weekly' }
];

// Générer le contenu XML du sitemap
function generateSitemapContent() {
  const now = new Date().toISOString();
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
`;

  PAGES.forEach(({ path: pagePath, priority, changefreq }) => {
    LANGUAGES.forEach(lang => {
      const url = pagePath ? `/${lang}/${pagePath}` : `/${lang}`;
      
      xml += '  <url>\n';
      xml += `    <loc>${SITE_URL}${url}</loc>\n`;
      xml += `    <lastmod>${now}</lastmod>\n`;
      xml += `    <changefreq>${changefreq}</changefreq>\n`;
      xml += `    <priority>${priority}</priority>\n`;
      
      // Ajouter les balises hreflang
      LANGUAGES.forEach(langItem => {
        const altUrl = pagePath ? `/${langItem}/${pagePath}` : `/${langItem}`;
        xml += `    <xhtml:link 
                 rel="alternate"
                 hreflang="${langItem}"
                 href="${SITE_URL}${altUrl}" />\n`;
      });
      
      xml += '  </url>\n';
    });
  });
  
  xml += '</urlset>';
  return xml;
}

// Générer le fichier sitemap.xml
async function generateSitemap() {
  try {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const publicDir = path.join(process.cwd(), 'public');
    const sitemapPath = path.join(publicDir, 'sitemap.xml');
    
    // Créer le dossier public si nécessaire
    await fs.mkdir(publicDir, { recursive: true });
    
    // Générer et écrire le contenu XML
    const xmlContent = generateSitemapContent();
    await fs.writeFile(sitemapPath, xmlContent, 'utf8');
    
    console.log('✅ Sitemap generated successfully!');
  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
    process.exit(1);
  }
}

// Lancer la génération
generateSitemap();
