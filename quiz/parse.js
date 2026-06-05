const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', '1235_extracted');
const categories = [
  { id: 1, name: '第一類：TCP/IP 網路通訊協定', file: '第一類 (1)_para.txt' },
  { id: 2, name: '第二類：網路管理',             file: '第二類_para.txt' },
  { id: 3, name: '第三類：區域網路運用',          file: '第三類_para.txt' },
  { id: 4, name: '第四類：名稱伺服器（BIND）',    file: '第四類_para.txt' },
  { id: 5, name: '第五類：郵件伺服器',            file: '第五類_para.txt' },
  { id: 6, name: '第六類：Apache & FTP Server',   file: '第六類_para.txt' },
  { id: 7, name: '第七類：其他伺服器及網路安全',  file: '第七類_para.txt' },
];

function parseCategory(filePath, catId, catName) {
  const raw = fs.readFileSync(filePath, 'utf8');
  const lines = raw.split(/\r?\n/).map(l => l.trim()).filter(l => l !== '');

  // Collect answer-line indices
  const ansIdxs = [];
  for (let i = 0; i < lines.length; i++) {
    if (/^答案：/.test(lines[i])) ansIdxs.push(i);
  }

  const questions = [];
  let prev = 1; // skip first line (category header)

  for (const ai of ansIdxs) {
    const answer = lines[ai].replace('答案：', '').trim();
    const block = lines.slice(prev, ai); // lines for this question
    if (block.length < 5) { prev = ai + 1; continue; } // malformed, skip

    // Last 4 lines = options; rest = question content
    const opts = block.slice(-4).map(o => o.replace(/^\([A-Da-d]\)\s*/, '').trim());
    const qLines = block.slice(0, -4);

    // First line = question stem (strip number prefix)
    let stem = qLines[0].replace(/^\d+-\d+[.、]\s*/, '').trim();
    // Remaining lines = supplementary content (tables/figures)
    const extra = qLines.slice(1).join('\n').trim();
    const question = extra ? stem + '\n' + extra : stem;

    questions.push({
      id: `${catId}_${questions.length + 1}`,
      category: catId,
      categoryName: catName,
      question,
      options: opts,
      answer,
      isMultiple: answer.length > 1,
    });

    prev = ai + 1;
  }
  return questions;
}

const allQuestions = [];
for (const cat of categories) {
  const fp = path.join(srcDir, cat.file);
  const qs = parseCategory(fp, cat.id, cat.name);
  console.log(`${cat.name}: ${qs.length} 題`);
  allQuestions.push(...qs);
}

console.log(`\n總計 ${allQuestions.length} 題`);

const outData = {
  categories: categories.map(c => ({ id: c.id, name: c.name })),
  questions: allQuestions,
};
fs.writeFileSync(path.join(__dirname, 'questions.json'), JSON.stringify(outData, null, 2), 'utf8');
console.log('已輸出 questions.json');
