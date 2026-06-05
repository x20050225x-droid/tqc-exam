// 將 questions.json 嵌入 index.html 產生最終單一 HTML 檔
const fs = require('fs');
const path = require('path');

const qData = fs.readFileSync(path.join(__dirname, 'questions.json'), 'utf8');
const template = fs.readFileSync(path.join(__dirname, 'template.html'), 'utf8');
const final = template.replace('/*__QUESTIONS_DATA__*/', `const QUIZ_DATA = ${qData};`);
fs.writeFileSync(path.join(__dirname, 'index.html'), final, 'utf8');
console.log('index.html 建立完成');
