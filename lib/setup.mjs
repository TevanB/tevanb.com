import { promises as fs } from 'fs';
import path from 'path';
import dotenv from 'dotenv';

const homePage = `export default function Page() {
  return (
    <section>
      <h1 className="font-bold text-2xl mb-8 tracking-tighter">my portfolio</h1>
      <p className="prose prose-neutral dark:prose-invert">
        This is your new portfolio.
      </p>
    </section>
  );
}
`;

const deleteFolderRecursive = async (path) => {
  const stat = await fs.stat(path);
  if (stat.isDirectory()) {
    const files = await fs.readdir(path);
    await Promise.all(
      files.map((file) => deleteFolderRecursive(`${path}/${file}`))
    );
    await fs.rmdir(path);
  } else {
    await fs.unlink(path);
  }
};

(async () => {
  dotenv.config();
  const imagesDir = path.join(process.cwd(), 'public', 'images');
  const appDir = path.join(process.cwd(), 'app');

  await deleteFolderRecursive(imagesDir);
  await fs.writeFile(path.join(appDir, 'page.tsx'), homePage);
})();
