import { getSession } from 'next-iron-session';

export default async (req, res) => {
  const session = await getSession(req);

  if (!session) {
    res.status(401).end();
    return;
  }

  // Provide the path or URL to your PDF file
  const pdfPath = '/resume.pdf';

  // Serve the PDF
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'inline; filename="resume.pdf"');

  const fileStream = fs.createReadStream(pdfPath);
  fileStream.pipe(res);
};
