# TQC 題庫測驗系統 - AI 開發指南

本文件為 AI 助手（如 Claude Code）建立新題庫時的操作指南。

---

## 專案結構

```
tqc-exam/
├── CLAUDE.md               # 本指南（AI 讀取用）
├── README.md               # 專案說明
├── {科目資料夾}/
│   ├── index.html          # 測驗頁面（從模板複製）
│   ├── questions.js        # 題庫檔案
│   └── study.html          # （選用）備考模式頁面
```

每個科目獨立一個資料夾，資料夾內的檔案名稱可以重複（如每個科目都有 `questions.js` 和 `index.html`），因為資料夾路徑不同所以不衝突。

---

## 現有科目一覽

| 資料夾 | 科目 | 測驗模板類型 | localStorage Key | JS 變數名 |
|--------|------|-------------|-----------------|-----------|
| `erp/` | 企業資源規劃 | 智慧測驗（index）+ 備考（study） | `erp_exam_weights` / `erp_smart_data` | `questions` |
| `tqc-database/` | TQC 資料庫設計與應用 | 智慧測驗 | `tqc_db_exam_weights` | `questions`（由 4 個 part 合併） |
| `supply-chain/` | SUP-SC 供應鏈管理 | 備考系統 | `exem_data_sup_sc` | `questions_sup_sc` → `questions` |
| `logistics/` | 國際貨櫃+物流 | 極速測驗 | 無 | `sourceQuestions`（內嵌） |
| `research-method/` | 高階調查與研究方法分析師 | 智慧測驗 | `rm_exam_weights` | `questions` |
| `ec/` | 跨境電商 | **尚無測驗頁面** | — | `questions_ec` |
| `pm/` | 專案管理 | **尚無測驗頁面** | — | `questions_pm` |

---

## 新增科目的步驟

### 第 1 步：建立資料夾

```
mkdir {科目英文名}/
```

命名慣例：全小寫、用連字號分隔（如 `data-structure`、`operating-system`）。

### 第 2 步：建立題庫 `questions.js`

檔案開頭加上中文註釋，變數名統一用 `const questions = [...]`：

```javascript
/**
 * {科目中文名} - 題庫
 * 科目：{完整科目名稱}
 * 題數：{N} 題（含單選與複選）
 * 題號格式：{說明}
 * 欄位說明：id=題號, text=題目, options=選項, answer=正確答案, type=radio(單選)/checkbox(複選)
 */
const questions = [
    {
        "id": "1-01",
        "text": "題目文字",
        "options": {
            "A": "選項 A",
            "B": "選項 B",
            "C": "選項 C",
            "D": "選項 D"
        },
        "answer": ["B"],
        "type": "radio"
    },
    {
        "id": "1-02",
        "text": "複選題範例",
        "options": {
            "A": "選項 A",
            "B": "選項 B",
            "C": "選項 C",
            "D": "選項 D"
        },
        "answer": ["A", "B", "D"],
        "type": "checkbox"
    }
];
```

#### 題庫欄位規格

| 欄位 | 類型 | 必填 | 說明 |
|------|------|------|------|
| `id` | string | 是 | 題號，格式為 `章節-題序`（如 `"1-01"`、`"3-15"`） |
| `text` | string | 是 | 題目文字 |
| `options` | object | 是 | 選項，key 為大寫字母（`"A"`~`"D"` 或更多） |
| `answer` | string[] | 是 | 正確答案陣列，單選放一個（`["B"]`），複選放多個（`["A","C"]`） |
| `type` | string | 是 | `"radio"`（單選）或 `"checkbox"`（複選） |
| `chapter` | string | 否 | 章節名稱（如 `"第一章 緒論"`），備考模式分章節時使用 |

#### 題號格式慣例

- 基本格式：`{章節號}-{題序}`，如 `"1-01"`、`"5-23"`
- 帶前綴格式：`{科目代碼}-{章節}-{題序}`，如 `"EC-01-001"`
- 選哪種都行，但同一科目內要統一

### 第 3 步：建立測驗頁面 `index.html`

從 `erp/index.html` 複製，然後修改以下位置：

#### 必改項目（共 4 處）

**1. 頁面標題與註釋**（檔案最上方）

```html
<!--
  {科目中文名} - 智慧測驗系統
  功能：隨機測驗、加權隨機、錯題特訓
  題庫來源：questions.js（{N} 題）
  儲存機制：使用 localStorage 記錄錯題權重
-->
...
<title>{科目中文名} - 智慧測驗系統</title>
```

**2. 頁面 `<h1>` 標題**

```html
<h1>{科目中文名} - 智慧測驗系統</h1>
```

**3. localStorage Key**（避免與其他科目衝突）

搜尋 `erp_exam_weights` 全部替換為新的 key，命名規則：`{科目縮寫}_exam_weights`

```javascript
// 範例：資料結構科目
localStorage.getItem('ds_exam_weights')
localStorage.setItem('ds_exam_weights', ...)
localStorage.removeItem('ds_exam_weights')
```

**4. `<script src>` 路徑確認**

確保載入的是同資料夾下的 questions.js：

```html
<script src="questions.js"></script>
```

#### 選改項目

| 項目 | 位置 | 預設值 | 說明 |
|------|------|--------|------|
| 每次測驗題數 | `QUESTIONS_PER_EXAM` | `40` | 若題庫不足 40 題則調小 |
| 每題配分 | `showFinalResult()` 中 | `1.25` 分 | 改為 `100 / 題數` |
| 自動跳轉延遲 | `setTimeout(..., 50)` | 50ms | 可改為 1000（1 秒）讓使用者看清結果 |

### 第 4 步：更新 README.md

在根目錄 `README.md` 的「科目總覽」表格中新增一行：

```markdown
| `{資料夾名}/` | {科目中文名} | 智慧測驗系統 | {N} 題 |
```

同時更新「資料夾結構」區塊。

---

## localStorage Key 對照表

每個科目的 localStorage key 必須唯一，否則會互相覆蓋。新增科目時必查此表避免重複。

| Key | 用途 | 所屬科目 |
|-----|------|----------|
| `erp_exam_weights` | 錯題權重 | erp/ 智慧測驗 |
| `erp_smart_data` | 學習進度 | erp/ 備考系統 |
| `tqc_db_exam_weights` | 錯題權重 | tqc-database/ |
| `exem_data_sup_sc` | 學習進度 | supply-chain/ |
| `rm_exam_weights` | 錯題權重 | research-method/ |

命名規則：`{科目縮寫}_exam_weights`（測驗模式）或 `{科目縮寫}_smart_data`（備考模式）。

---

## 測驗頁面模板差異

本專案有三種測驗模板，依需求選用：

| 模板 | 參考檔案 | 功能 | 適用場景 |
|------|----------|------|----------|
| 智慧測驗 | `erp/index.html` | 隨機 40 題、加權隨機、錯題特訓 Top 20 | 大型題庫（>50 題），需要反覆練習 |
| 智慧備考 | `erp/study.html` | 分章節階段式練習，進度追蹤 | 有明確章節劃分的題庫 |
| 極速測驗 | `logistics/index.html` | 快速隨機出題，即時回饋 | 小型題庫或快速複習 |

**建議**：大多數情況複製 `erp/index.html`（智慧測驗）即可。

---

## 題庫分檔規則

- 題目數 ≤ 500 題：放在單一 `questions.js`
- 題目數 > 500 題：拆分為 `questions_part1.js`、`questions_part2.js`...，並在 HTML 中依序載入：

```html
<script src="questions_part1.js"></script>
<script src="questions_part2.js"></script>
<!-- 各 part 用不同變數名，在 HTML 的 <script> 中合併 -->
<script>
  const questions = [...questions_part1, ...questions_part2];
</script>
```

---

## 注意事項

1. **變數名**：若題庫拆分成多檔，各檔需用不同變數名（`questions_part1`、`questions_part2`），最後在 HTML 內合併為 `questions`。若為單一檔案，直接用 `const questions = [...]` 即可。
2. **answer 欄位**：一律用陣列格式，即使是單選也寫 `["B"]` 而非 `"B"`。
3. **type 欄位**：只能是 `"radio"` 或 `"checkbox"`，對應 HTML input 的 type 屬性。
4. **選項排序**：options 物件的 key 請按字母順序（A、B、C、D）。
5. **檔案編碼**：所有檔案一律使用 UTF-8。
6. **中文註釋**：每個新檔案都要加上中文註釋說明。
