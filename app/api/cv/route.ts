export async function GET() {
  const lines = [
    "Saber Bradai",
    "Full Stack Developer",
    "Email: saberbradaiset23@gmail.com",
    "Phone: +216 51121136",
    "Location: Manouba, Tunisia",
    "LinkedIn: linkedin.com/in/saber-bradai",
    "GitHub: github.com/Sila7rech",
    "",
    "Portfolio focus:",
    "- Premium frontend experiences",
    "- Scalable full-stack systems",
    "- Modern UI, motion, and accessibility",
  ];

  const escapedLines = lines.map((line) => line.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)"));

  const textStream = [
    "BT",
    "/F1 24 Tf",
    "72 760 Td",
    ...(escapedLines.flatMap((line, index) => [
      index === 0 ? `(${line}) Tj` : `0 -30 Td (${line}) Tj`,
    ])),
    "ET",
  ].join("\n");

  const objects = [
    "1 0 obj << /Type /Catalog /Pages 2 0 R >> endobj",
    "2 0 obj << /Type /Pages /Kids [3 0 R] /Count 1 >> endobj",
    "3 0 obj << /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >> endobj",
    "4 0 obj << /Type /Font /Subtype /Type1 /BaseFont /Helvetica >> endobj",
    `5 0 obj << /Length ${textStream.length} >> stream\n${textStream}\nendstream endobj`,
  ];

  let pdf = "%PDF-1.4\n";
  const offsets: number[] = [];
  for (const object of objects) {
    offsets.push(pdf.length);
    pdf += `${object}\n`;
  }
  const xrefStart = pdf.length;
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  for (const offset of offsets) {
    pdf += `${String(offset).padStart(10, "0")} 00000 n \n`;
  }
  pdf += `trailer << /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF`;

  return new Response(pdf, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="Saber-Bradai-CV.pdf"',
      "Cache-Control": "no-store",
    },
  });
}