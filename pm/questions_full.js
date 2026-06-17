/**
 * 專案管理 - 題庫（合併版）
 * 科目：專案管理
 * 題數：476 題（噓版 420 題 + 舊版獨有 56 題）
 * 題號格式：章節-題序（如 "01-001"）
 * 欄位說明：id=題號, text=題目, options=選項, answer=正確答案, type=radio(單選)/checkbox(複選)
 */
const questions = [
    {
        "id": "01-001",
        "text": "關於專案的特性，下列哪些正確？（複選）",
        "options": {
            "A": "特定目標",
            "B": "明確起迄日期",
            "C": "預算有限",
            "D": "逐步完善"
        },
        "answer": [
            "A",
            "B",
            "C",
            "D"
        ],
        "type": "checkbox"
    },
    {
        "id": "01-002",
        "text": "下列哪些是一般專案成功的必要條件？（複選）",
        "options": {
            "A": "如期",
            "B": "滿足顧客需求",
            "C": "改變企業文化",
            "D": "使用最少的資源"
        },
        "answer": [
            "A",
            "B"
        ],
        "type": "checkbox"
    },
    {
        "id": "01-003",
        "text": "關於專案的特性，下列哪些正確？（複選）",
        "options": {
            "A": "專案有其不確定性",
            "B": "每一專案皆有其獨特性",
            "C": "具備明確的目標",
            "D": "專案人員均「不是」組織編制人員"
        },
        "answer": [
            "A",
            "B",
            "C"
        ],
        "type": "checkbox"
    },
    {
        "id": "01-004",
        "text": "在執行專案時，成本、時間、品質皆會設定其基準，下列哪一項是作為品質的基準？",
        "options": {
            "A": "預算",
            "B": "時間",
            "C": "驗收標準",
            "D": "組織"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "01-005",
        "text": "關於專案組織的敘述，下列哪一項正確？",
        "options": {
            "A": "原來就存在的",
            "B": "隸屬人事部門",
            "C": "臨時性",
            "D": "隸屬總務部門"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "01-006",
        "text": "關於專案管理流程群組（Process Groups），下列哪一項與目標、時程、預算關係最密切？",
        "options": {
            "A": "規劃（Planning）",
            "B": "執行（Executing）",
            "C": "起始（Initiating）",
            "D": "監視及控制（Monitoring and Controlling）"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "01-007",
        "text": "關於專案管理流程群組（Process Groups），下列哪一項與變更關係最密切？",
        "options": {
            "A": "規劃（Planning）",
            "B": "執行（Executing）",
            "C": "起始（Initiating）",
            "D": "監視及控制（Monitoring and Controlling）"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "01-008",
        "text": "下列哪些項目是專案組合管理（Project Portfolio Management）的內容？（複選）",
        "options": {
            "A": "建立組合（Portfolio）的投資策略",
            "B": "評價專案的優先順序",
            "C": "建立一個可實現投資目標的組合",
            "D": "消費者研究"
        },
        "answer": [
            "A",
            "B",
            "C"
        ],
        "type": "checkbox"
    },
    {
        "id": "01-009",
        "text": "下列哪一項「不是」專案？",
        "options": {
            "A": "交通工程建設",
            "B": "產品創新研發",
            "C": "公家單位的行政工作",
            "D": "企業部門電子化"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "01-010",
        "text": "關於專案的特性，下列哪些正確？（複選）",
        "options": {
            "A": "獨特性",
            "B": "一般性",
            "C": "資源與成本限制",
            "D": "不重複性"
        },
        "answer": [
            "A",
            "C",
            "D"
        ],
        "type": "checkbox"
    },
    {
        "id": "01-011",
        "text": "一般的專案生命週期（Project Life Cycle）在下列哪一項階段最冗長？",
        "options": {
            "A": "起始（Initiating）",
            "B": "規劃（Planning）",
            "C": "執行（Executing）",
            "D": "結束（Closing）"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "01-012",
        "text": "專案生命週期（Project Life Cycle）的整個過程中所創造出的交付標的（Deliverable）可以是下列哪些項目？（複選）",
        "options": {
            "A": "產品",
            "B": "服務",
            "C": "報告",
            "D": "里程碑（Milestone）"
        },
        "answer": [
            "A",
            "B",
            "C"
        ],
        "type": "checkbox"
    },
    {
        "id": "01-013",
        "text": "下列哪一項狀況可視為「專案成功」？",
        "options": {
            "A": "提供合約所條列之需求",
            "B": "專案經理（Project Manager）宣布專案完成",
            "C": "提送交付標的（Deliverable）於業主（Owner）",
            "D": "符合專案利害關係人（Project Stakeholder）的需求"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "01-014",
        "text": "下列哪些是專案的限制條件（Constraints）？（複選）",
        "options": {
            "A": "範疇（Scope）",
            "B": "訊息（Message）",
            "C": "成本（Cost）",
            "D": "時間（Time）"
        },
        "answer": [
            "A",
            "C",
            "D"
        ],
        "type": "checkbox"
    },
    {
        "id": "01-015",
        "text": "關於專案式組織（Projectized Organization）的特色，下列哪一項錯誤？",
        "options": {
            "A": "專案團隊成員常常安排在同一地點",
            "B": "大部分資源用於專案工作",
            "C": "專案經理（Project Manager）有很小的獨立性和許可權",
            "D": "專案經理（Project Manager）有很大的獨立性和許可權"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "01-016",
        "text": "你是一個專案經理（Project Manager）剛剛被分配到一個正在進行的專案中，這個專案落後於進度計畫五週。可是你的專案團隊成員將要被功能經理（Functional Manager）派到另一個專案上去。下列哪一項是你的組織型態？",
        "options": {
            "A": "矩陣式（Matrix）",
            "B": "功能式（Functional）",
            "C": "專案式（Projectized）",
            "D": "簡單式（Simple）"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "01-017",
        "text": "關於專案成功的原因，下列哪一項最正確？",
        "options": {
            "A": "有足夠的資金",
            "B": "有好的專案管理",
            "C": "有很多專案利害關係人（Project Stakeholder）",
            "D": "使用專案式組織（Projectized Organization）架構"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "01-018",
        "text": "你是專案經理（Project Manager），客戶告訴你，他已經沒有錢支付該專案了。下列哪一項是你首先應做的事？",
        "options": {
            "A": "罷工",
            "B": "延長專案時間，讓客戶籌錢",
            "C": "削減專案人力",
            "D": "清查已執行範圍，並開始做結案工作"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "01-019",
        "text": "下列哪一項組織架構，適合處理包含多種專業技術的專案？",
        "options": {
            "A": "矩陣式（Matrix）",
            "B": "功能式（Functional）",
            "C": "專案式（Projectized）",
            "D": "簡單式（Simple）"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "01-020",
        "text": "下列哪一項是專案經理（Project Manager）在專案管理上最重要的工作能力？",
        "options": {
            "A": "問題解決（Problem Solving）",
            "B": "協調（Coordination）",
            "C": "規劃（Planning）",
            "D": "監控（Monitoring）"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "01-021",
        "text": "關於專案生命週期（Project Life Cycle）的定義，下列哪一項正確？",
        "options": {
            "A": "是可以不斷重複的",
            "B": "與產品生命週期（Product Life Cycle）一樣，在不同的環境裡，發生的時間和過程是不一樣的",
            "C": "與產品生命週期（Product Life Cycle）不一樣，有明確的開始與結束日期",
            "D": "是由若干工作成果所組合而成"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "01-022",
        "text": "專案（Project）與日常工作（Operation）的差異，下列哪一項敘述正確？",
        "options": {
            "A": "專案是創新性與系統性，日常工作是程序性與重複性",
            "B": "專案是創新性與系統性，日常工作是持續性與重複性",
            "C": "專案是暫時性與獨特性，日常工作是程序性與重複性",
            "D": "專案是暫時性與獨特性，日常工作是持續性與重複性"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "01-023",
        "text": "你是艾瑞克通訊科技公司的工程部經理，目前高階主管授權你執行一項新產品研發專案。在管理該專案時，下列哪一項「不是」你管理的重點？",
        "options": {
            "A": "辨識需求",
            "B": "確定一個明確、可實現的目標",
            "C": "平衡範疇（Scope）、時程、成本與品質的衝突",
            "D": "積極表現能力並超越專案利害關係人（Project Stakeholder）對專案的需求與期待"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "01-024",
        "text": "絕大多數的專案成本會在下列哪一項階段中被花費掉？",
        "options": {
            "A": "規劃（Planning）",
            "B": "執行（Executing）",
            "C": "監視及控制（Monitoring and Controlling）",
            "D": "結束（Closing）"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "01-025",
        "text": "專案經理（Project Manager）為全職投入工作，但專案行政人員為兼職工作，是下列哪一項組織？",
        "options": {
            "A": "功能組織（Functional Organization）",
            "B": "弱矩陣組織（Weak Matrix Organization）",
            "C": "平衡矩陣組織（Balanced Matrix Organization）",
            "D": "強矩陣組織（Strong Matrix Organization）"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "01-026",
        "text": "下列哪一項是專案式組織（Projectized Organization）的最大優點？",
        "options": {
            "A": "團隊成員有個家，可以根據績效表現而晉升",
            "B": "不需要特別訓練，專案成員即可上手工作",
            "C": "專案經理（Project Manager）擁有絕大多數的權限，行政人員可全職參與專案",
            "D": "容易獲得其他功能（Functional）部門的支持"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "01-027",
        "text": "下列哪一項「不是」專案？",
        "options": {
            "A": "公司公益活動",
            "B": "消防暨工安演習",
            "C": "早晚門禁檢查",
            "D": "豪華郵輪建造"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "01-028",
        "text": "在專案生命週期（Project Life Cycle）中，贊助者（Sponsor）影響最大的時期是在下列哪一項階段？",
        "options": {
            "A": "結束（Closing）",
            "B": "執行（Executing）",
            "C": "規劃（Planning）",
            "D": "起始（Initiating）"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "01-029",
        "text": "身為專案經理（Project Manager），對於其所涉及之管理知識及理論，應有下列哪一項認知？",
        "options": {
            "A": "主要是一種專案管理軟體使用",
            "B": "一般管理知識、應用領域知識及非實務經驗",
            "C": "一般管理知識、應用領域知識及工具、技術、方法",
            "D": "實務及經驗學習（Lessons Learned）非為應用依據"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "01-030",
        "text": "一般通例而言，專案利害關係人（Project Stakeholder）之間有異議時，應當以有利於下列哪一方的方式解決？",
        "options": {
            "A": "專案贊助者（Project Sponsor）",
            "B": "顧客",
            "C": "專案團隊（Project Team）",
            "D": "專案執行組織的決策階層"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "01-031",
        "text": "關於專案的敘述，下列哪些正確？（複選）",
        "options": {
            "A": "專案有既定的目標與時程",
            "B": "專案具有獨特性",
            "C": "專案是永久性的工作",
            "D": "專案的不確定性大"
        },
        "answer": [
            "A",
            "B",
            "D"
        ],
        "type": "checkbox"
    },
    {
        "id": "01-032",
        "text": "關於專案的敘述，下列哪一項錯誤？",
        "options": {
            "A": "專案是可以複製的",
            "B": "專案的產品可包括軟、硬體",
            "C": "每一個專案皆有資源的限制",
            "D": "並非每一個專案啟動前均需達成財務可行"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "01-033",
        "text": "下列哪一項是公司的專案管理程序訂定的負責單位？",
        "options": {
            "A": "專案團隊（Project Team）",
            "B": "專案保證組",
            "C": "專案支援組",
            "D": "專案管理辦公室（Project Management Office, PMO）"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "01-034",
        "text": "將專案計畫付諸行動，是屬於專案管理流程群組（Process Groups）中的下列哪一項階段？",
        "options": {
            "A": "起始（Initiating）",
            "B": "規劃（Planning）",
            "C": "執行（Executing）",
            "D": "監視及控制（Monitoring and Controlling）"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "01-035",
        "text": "專案整合管理（Project Integration Management）知識領域不包含下列哪一項流程？",
        "options": {
            "A": "起始（Initiating）",
            "B": "發展專案管理計畫書（Develop Project Management Plan）",
            "C": "指導及管理專案管理工作（Direct and Manage Project Work）",
            "D": "實施整合變更控制（Perform Integrated Change Control）"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "01-036",
        "text": "專案管理可以替企業帶來下列哪些利益？（複選）",
        "options": {
            "A": "降低品質",
            "B": "降低成本",
            "C": "減低風險",
            "D": "增加人員"
        },
        "answer": [
            "B",
            "C"
        ],
        "type": "checkbox"
    },
    {
        "id": "01-037",
        "text": "關於功能組織（Functional Organization）的敘述，下列哪些錯誤？（複選）",
        "options": {
            "A": "功能組織（Functional Organization）以專業為重心，且依功能分組",
            "B": "功能組織（Functional Organization）中的每個部門或事業群都是獨立管理",
            "C": "對專案經理（Project Manager）而言，他們擁有很大的正式職權",
            "D": "所有員工都向一位經理報告，且有清楚的指揮系統"
        },
        "answer": [
            "B",
            "C"
        ],
        "type": "checkbox"
    },
    {
        "id": "01-038",
        "text": "下列哪一項組織結構中的專案經理（Project Manager）具有最高權限與最大權力？",
        "options": {
            "A": "專案式組織（Projectized Organization）",
            "B": "功能組織（Functional Organization）",
            "C": "矩陣式組織（Matrix Organization）",
            "D": "彈性式組織（Flexible Organization）"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "01-039",
        "text": "當專案活動造成某人被牽扯進入或被影響到時，或者專案活動造成某人獲得或損失時，「某人」被稱為下列哪一項？",
        "options": {
            "A": "專案團隊（Project Team）成員",
            "B": "顧客",
            "C": "利害關係人（Stakeholder）",
            "D": "支援者"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "01-040",
        "text": "協調（Coordination）管理一群相關的專案，稱為下列哪一項？",
        "options": {
            "A": "特殊專案管理",
            "B": "敏捷式專案管理（Agile Project Management）",
            "C": "計畫管理（Program Management）",
            "D": "專案群組合（Portfolio）"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "01-041",
        "text": "為創建一獨特的產品、服務或結果所做的一次性努力，稱為下列哪一項？",
        "options": {
            "A": "新產品發展",
            "B": "專案",
            "C": "計畫",
            "D": "事業"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "01-042",
        "text": "專案經理（Project Manager）的領導型態必須配合專案團隊（Project Team）的不同發展階段，所以必須經過下列哪一項的連續步驟？",
        "options": {
            "A": "紀律、獨裁、參與",
            "B": "專案式（Projectized）、矩陣式（Matrix）、功能式（Functional）",
            "C": "團隊建立，團隊發展，責任委派",
            "D": "指導、訓練、支持、委派"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "01-043",
        "text": "一間台灣大型公司的經理要簽訂一個合約，在海南島建立一個國際機場。該專案需要數年去建立與測試，請問下列哪一項組織架構適合管理這個專案？",
        "options": {
            "A": "功能組織（Functional Organization）",
            "B": "承包商組織（Contractor Organization）",
            "C": "矩陣式組織（Matrix Organization）",
            "D": "專案式組織（Projectized Organization）"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "01-044",
        "text": "專案經理（Project Manager）需要負責專案過程中所發生的事件，其中最重要的責任為下列哪一項？",
        "options": {
            "A": "風險管理（Risk Management）",
            "B": "品質管理（Quality Management）",
            "C": "成本管理（Cost Management）",
            "D": "整合（Integration）"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "01-045",
        "text": "假設你是一間大型營造公司的專案經理（Project Manager），需在一年內蓋好供奧運選手居住的合格建築物；你有充裕的經費且相關資源的取得沒有困難，以專案成功關鍵因素概念，未來對該專案影響最大的專案限制因素為下列哪些？（複選）",
        "options": {
            "A": "時間",
            "B": "範疇（Scope）",
            "C": "資源",
            "D": "品質"
        },
        "answer": [
            "A",
            "B"
        ],
        "type": "checkbox"
    },
    {
        "id": "01-046",
        "text": "在大型的組織中，專案促進者（Expediter）被要求替重要客戶管理專案，該專案促進者的職位可以在下列哪一組織中被發現到？",
        "options": {
            "A": "強矩陣（Strong Matrix）",
            "B": "弱矩陣（Weak Matrix）",
            "C": "功能式（Functional）",
            "D": "專案式（Projectized）"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "01-047",
        "text": "專案經理（Project Manager）將會管理一個大而複雜的專案，工作地點是在非洲建立一個國際機場，並且需要至少4年的專案時程。對此，最佳專案管理的組織應屬於下列哪一項？",
        "options": {
            "A": "強矩陣（Strong Matrix）",
            "B": "弱矩陣（Weak Matrix）",
            "C": "專案式（Projectized）",
            "D": "功能式（Functional）"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "01-048",
        "text": "專案經理（Project Manager）所擁有的權力大小與下列哪一項有關？",
        "options": {
            "A": "專案經理（Project Manager）的溝通技巧",
            "B": "組織結構",
            "C": "專案經理（Project Manager）的影響力",
            "D": "員工的配合度"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "01-049",
        "text": "在專案整個生命週期裡，專案的預期支出的圖形經常呈現S曲線，這種現象代表下列哪一項？",
        "options": {
            "A": "所有專案的週期特性",
            "B": "問題總是出現在執行階段",
            "C": "在結束階段的支出很高",
            "D": "專案預算的大部分將會在執行階段花費掉"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "01-050",
        "text": "在一項南北高速鐵路的專案中，你負責破壞舊建築，直接向專案經理（Project Manager）報告；且為約聘性質，在任務結束後即需離開，此組織為下列哪一項？",
        "options": {
            "A": "功能組織（Functional Organization）",
            "B": "弱矩陣組織（Weak Matrix Organization）",
            "C": "專案式組織（Projectized Organization）",
            "D": "平衡矩陣組織（Balanced Matrix Organization）"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "01-051",
        "text": "A公司下有數十個專案正評估是否啟動，B君為專案管理辦公室（Project Management Office, PMO）的主管，他正評估三個與組織策略目標相關的專案，請問下列哪一專案不是他正在評估的專案？",
        "options": {
            "A": "智慧型手機二代研發專案",
            "B": "公司ERP（Enterprise Resource Planning）系統建置專案",
            "C": "生產線改善專案",
            "D": "不良品回收專案"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "01-052",
        "text": "下列哪一項流程群組（Process Groups）中專案的風險最高，且利害關係人（Stakeholder）對專案成果的影響力最大？",
        "options": {
            "A": "規劃（Planning）",
            "B": "執行（Executing）",
            "C": "起始（Initiating）",
            "D": "控制（Control）"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "01-053",
        "text": "下列哪一項是功能組織（Functional Organization）的優點？",
        "options": {
            "A": "所有員工向單一主管負責",
            "B": "所有員工向兩個或兩個以上主管負責，但只能效忠功能經理（Functional Manager）",
            "C": "功能組織（Functional Organization）的重心在專案工作",
            "D": "團隊具有同步協調特性"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "01-054",
        "text": "利害關係人（Stakeholder）於下列哪一專案階段（Project Phase）的影響力最大？",
        "options": {
            "A": "起始（Initiating）",
            "B": "規劃（Planning）",
            "C": "執行（Executing）",
            "D": "監視及控制（Monitoring and Controlling）"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "01-055",
        "text": "關於「專案目的」的敘述，下列哪一項錯誤？",
        "options": {
            "A": "目的是用來衡量專案成功的可量化準則，可量化準則至少應包括時程、成本與品質基準",
            "B": "專案的目的通常有其特殊性",
            "C": "目的應該有時間範圍，並有指定的結束時間",
            "D": "敘述專案產品或服務的理想化特性"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "01-056",
        "text": "大型專案的專案經理（Project Manager）多次與客戶會議，判斷客戶只能接受非常低的風險容忍，下列哪一項為客戶可能的反應？",
        "options": {
            "A": "願意接受高風險換取高獲益",
            "B": "不願意接受高風險換取高獲益",
            "C": "會瞭解專案風險發生時間",
            "D": "不會瞭解專案風險發生時間"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "01-057",
        "text": "有關專案組合管理（Portfolio Management）及計畫管理（Program Management）的敘述，下列哪一項正確？",
        "options": {
            "A": "當專案彼此間共享資源及技術，但彼此專案產出無強烈關聯性，採用專案組合管理",
            "B": "當數個專案的結果有緊密的相依性，須採用專案組合管理",
            "C": "專案組合管理範圍通常涵蓋數個專案，對專案進行重要排序及選擇，以及所涵蓋專案資源的管理，其管理範圍不會包含任何計畫",
            "D": "計畫管理的範疇（Scope）通常較專案組合管理範疇（Scope）大"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "01-058",
        "text": "企業環境因素（Enterprise Environmental Factors）所指的為一個不是專案團隊（Project Team）所能控制的狀況，但是影響、制約及指導專案，因此是多數專案規劃子流程的投入（Input），下列哪一項「不是」屬於企業環境因素（Enterprise Environmental Factors）？",
        "options": {
            "A": "公司的文化",
            "B": "公司過去執行類似的專案",
            "C": "公司的人事制度",
            "D": "公司建置的ERP（Enterprise Resource Planning）系統"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "01-059",
        "text": "專案治理（Project Governance）架構提供專案經理（Project Manager）與團隊成員管理專案的結構、流程及決策工具，已成功完成專案的交付，下列哪一項「不是」專案治理（Project Governance）架構的重要元素？",
        "options": {
            "A": "專案成功及交付的允收準則（Acceptance Criteria）",
            "B": "專案的決策流程",
            "C": "專案的可行性分析",
            "D": "專案團隊（Project Team）、組織群組及外部利害關係人（Stakeholder）的關係"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "01-060",
        "text": "下列哪一項說明正確？",
        "options": {
            "A": "專案的初期不確定性最大，專案範疇（Project Scope）變更所需費用最大",
            "B": "專案的初期不確定性最大，專案範疇（Project Scope）變更所需費用最小",
            "C": "專案的初期不確定性最小，專案範疇（Project Scope）變更所需費用最大",
            "D": "專案的初期不確定性最小，專案範疇（Project Scope）變更所需費用最小"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "02-001",
        "text": "關於專案起始的時候，專案經理（Project Manager）經常做的事，下列哪一項錯誤？",
        "options": {
            "A": "細部的規劃（Planning）",
            "B": "工作指示（Instruction）",
            "C": "協助發展專案章程（Develop Project Charter）",
            "D": "工作時程表的發布"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "02-002",
        "text": "專案工作說明書（Statement of Work, SOW）主要是由下列哪一方提供？",
        "options": {
            "A": "需求者、業主或委託人",
            "B": "專案贊助者（Project Sponsor）",
            "C": "主承包商（Contractor）",
            "D": "專案經理（Project Manager）"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "02-003",
        "text": "發展專案章程（Develop Project Charter）的目的為下列哪一項？",
        "options": {
            "A": "敘述專案的評選方法",
            "B": "確認專案目標及授權取得專案資源",
            "C": "確認專案贊助者（Project Sponsor）",
            "D": "確認專案團隊（Project Team）、專案經理（Project Manager）及專案贊助者（Project Sponsor）"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "02-004",
        "text": "發展專案章程（Develop Project Charter）的過程中，需下列哪一項投入（Input）？",
        "options": {
            "A": "專案工作說明書（Statement of Work, SOW）、專案評選方法、企業組織",
            "B": "合約、專案評選方法、企業環境及資源、組織流程",
            "C": "專案工作說明書（Statement of Work, SOW）、企業環境及資源、專案評選方法、組織流程",
            "D": "合約、專案工作說明書（Statement of Work, SOW）、企業環境及資源、組織流程"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "02-005",
        "text": "你是國際土地開發公司的專案經理（Project Manager），經由本益比分析結果得知跨海專案A的執行成本現值為US $ 2,400,000，潛在利益所得現值為US $12,000,000，未來的營運成本現值為US $3,000,000；專案B的執行成本現值為US $2,800,000，潛在利益所得現值為US $14,000,000，未來的營運成本現值為US $2,000,000，下列哪一項專案你最為推薦？",
        "options": {
            "A": "專案B，因為營運成本現值較低",
            "B": "專案A，因為淨獲利現值較高",
            "C": "專案B，因為淨現值較高",
            "D": "專案A，因為執行成本現值較低"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "02-006",
        "text": "下列哪些是專案章程（Project Charter）的內容？（複選）",
        "options": {
            "A": "專案總體預算",
            "B": "專案經理（Project Manager）",
            "C": "專案經驗",
            "D": "專案目的"
        },
        "answer": [
            "A",
            "B",
            "D"
        ],
        "type": "checkbox"
    },
    {
        "id": "02-007",
        "text": "發展一份正式被核准的文件，並授權專案經理（Project Manager）在專案活動中動用組織的資源，是指下列哪一項的定義？",
        "options": {
            "A": "範疇聲明（Scope Statement）",
            "B": "工作說明書（Statement of Work, SOW）",
            "C": "專案章程（Project Charter）",
            "D": "合約（Contract）"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "02-008",
        "text": "專案章程（Project Charter）在下列哪一項流程群組（Process Groups）中產生？",
        "options": {
            "A": "可行性（Feasibility）",
            "B": "起始（Initiating）",
            "C": "規劃（Planning）",
            "D": "審核（Audit）"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "02-009",
        "text": "最理想狀況，專案經理（Project Manager）的人選應該在下列哪一項指定？",
        "options": {
            "A": "專案起始（Initiating）",
            "B": "專案計畫書發展過程",
            "C": "專案執行（Executing）",
            "D": "專案範疇規劃"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "02-010",
        "text": "關於專案起始（Initiating）流程群組（Process Groups）的敘述，下列哪些正確？（複選）",
        "options": {
            "A": "定義及確認專案範疇（Project Scope）",
            "B": "確認專案開始進行，並獲得人力及財務資源承諾",
            "C": "定義及確認專案目標",
            "D": "發展專案計畫書（Project Plan）"
        },
        "answer": [
            "B",
            "C"
        ],
        "type": "checkbox"
    },
    {
        "id": "02-011",
        "text": "專案工作說明書（Statement of Work, SOW）是敘述專案承諾要完成的產品或服務，此份文件通常是由下列哪些對象撰寫的？（複選）",
        "options": {
            "A": "買方",
            "B": "專案贊助者（Project Sponsor）",
            "C": "專案經理（Project Manager）",
            "D": "外包商（Contractor）或供應商（Supplier）"
        },
        "answer": [
            "A",
            "B"
        ],
        "type": "checkbox"
    },
    {
        "id": "02-012",
        "text": "下列哪一項是專案章程（Project Charter）的目的？",
        "options": {
            "A": "認可與承認專案的存在，並將組織資源撥付給專案",
            "B": "承認專案團隊與專案經理（Project Manager）的存在",
            "C": "評選出最適當的專案",
            "D": "擬定專案評選準則"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "02-013",
        "text": "下列哪一項文件是確認專案的存在？",
        "options": {
            "A": "工作說明書（Statement of Work, SOW）",
            "B": "專案委派任務",
            "C": "專案章程（Project Charter）",
            "D": "產品敘述"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "02-014",
        "text": "專案經理（Project Manager）被建築公司雇用，並且負責完工大樓的裝潢。他的專案第一件事是建立下列哪一項？",
        "options": {
            "A": "工作分解結構（Work Breakdown Structure, WBS）",
            "B": "預算基準（Baseline）",
            "C": "專案章程（Project Charter）",
            "D": "專案計畫"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "02-015",
        "text": "關於專案起始（Initiating）流程群組（Process Groups）中的產品敘述，下列哪一項正確？",
        "options": {
            "A": "是一項產出（Output），說明產品或服務的特性",
            "B": "是一項產出（Output），說明產品或服務的特性及專案早期的細節",
            "C": "是一項投入（Input），說明產品或服務的特性及專案早期的細節",
            "D": "是一項投入（Input），說明產品或服務的特性"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "02-016",
        "text": "關於專案起始（Initiating）流程群組（Process Groups）的目的，下列哪一項正確？",
        "options": {
            "A": "正式確認專案目標",
            "B": "正式確認專案背後的需求",
            "C": "正式確認專案利害關係人（Project Stakeholder）",
            "D": "正式確認專案贊助者（Project Sponsor）"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "02-017",
        "text": "下列哪些「有可能是」專案利害關係人（Project Stakeholder）？（複選）",
        "options": {
            "A": "贊助者（Sponsor）",
            "B": "廠商（Factory）",
            "C": "委託人（Client）",
            "D": "顧客（Customer）"
        },
        "answer": [
            "A",
            "B",
            "C",
            "D"
        ],
        "type": "checkbox"
    },
    {
        "id": "02-018",
        "text": "利害關係人（Stakeholder）中，下列哪一方對於「降低成本」管控作業極具關切及注意？",
        "options": {
            "A": "顧客及使用者",
            "B": "專案經理（Project Manager）及專案團隊（Project Team）",
            "C": "贊助者（Sponsor）或業主（Owner）",
            "D": "執行專案組織的高階決策人員"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "02-019",
        "text": "蒐集需求結束後，A專案經理（Project Manager）將檢視專案關鍵利害關係人（Stakeholder）的期望，已將這些利害關係人（Stakeholder）的期望設計成專案須完成的工作，請問下列哪一項利害關係人（Stakeholder）的期望他可先忽略？",
        "options": {
            "A": "專案贊助人（Project Sponsor）",
            "B": "主要顧客",
            "C": "重要材料供應商",
            "D": "專案相關專利廠商"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "02-020",
        "text": "進行利害關係人（Stakeholder）分析時，下列哪一項不是分析的重點？",
        "options": {
            "A": "利害關係人（Stakeholder）的權利",
            "B": "利害關係人（Stakeholder）與專案執行團隊的接近程度（參與專案的程度）",
            "C": "利害關係人（Stakeholder）接受專案資訊時，對專案產生的反應程度",
            "D": "利害關係人（Stakeholder）的社會及經濟狀況"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "03-001",
        "text": "某專案開發磁浮列車，當專案開發產品時須考量產品移交給顧客後之營運及維護的成本，移交後之營運及維護成本應屬於下列哪一項？",
        "options": {
            "A": "比例分配的成本（Prorated Cost）",
            "B": "專案間接成本（Indirect Cost）",
            "C": "產品生命週期（Product Life Cycle）成本",
            "D": "專案直接成本（Direct Cost）"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "03-002",
        "text": "生命週期成本（Life Cycle Cost）是指下列哪一項？",
        "options": {
            "A": "針對專案產品整個生命裡，產品成本的呈現方法",
            "B": "政府的會計方法",
            "C": "專案生命的預測方法",
            "D": "專案完成時的評估方法"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "03-003",
        "text": "你是ABC公司的專案經理（Project Manager），下列哪些是你製作專案範疇聲明書（Project Scope Statement）的投入（Input）？（複選）",
        "options": {
            "A": "專案章程（Project Charter）",
            "B": "需求文件",
            "C": "事業環境因素",
            "D": "組織流程資產"
        },
        "answer": [
            "A",
            "B",
            "D"
        ],
        "type": "checkbox"
    },
    {
        "id": "03-004",
        "text": "下列哪一項不包含在專案範疇聲明書（Project Scope Statement）中？",
        "options": {
            "A": "請求變更",
            "B": "專案交付標的（Deliverable）",
            "C": "產品允收準則（Acceptance Criteria）",
            "D": "成本估計"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "03-005",
        "text": "專案的品質管理，下列哪一項「不是」戴明（Deming）的觀點？",
        "options": {
            "A": "改善製程，提高產品品質的一致性，減少重工（Rework）、浪費",
            "B": "生產力是品質的副產品",
            "C": "品質就是適用",
            "D": "第一次就做對"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "03-006",
        "text": "品質機能展開（Quality Function Deployment, QFD），是將消費者的需求轉換為產品的屬性且為可以測知的一種方法。下列哪一項「不是」執行QFD的效果？",
        "options": {
            "A": "對產品有清楚的目標",
            "B": "增加設計的工程變更",
            "C": "縮短總設計時間",
            "D": "降低試製成本"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "03-007",
        "text": "規劃品質管理（Plan Quality Management）是一個制定品質標準的過程，根據某些流程產出（Output）來確定哪些品質標準與專案有關。關於它的產出（Output），下列哪一項錯誤？",
        "options": {
            "A": "品質指標",
            "B": "專案文件更新",
            "C": "操作定義",
            "D": "品質檢核表"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "03-008",
        "text": "專案的組織，是指若干部門之間的團隊組合，用以達成某種特定性的工作或為解決某項特殊問題，與執行特定任務時所結合的團隊或工作小組。關於它的優點，下列哪一項錯誤？",
        "options": {
            "A": "人員工作性質變動",
            "B": "資源可充分利用",
            "C": "可增加各部門間的溝通機會",
            "D": "專案成員易於發揮所長"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "03-009",
        "text": "專案的組織，是指若干部門之間的團隊組合，用以達成某種特定性的工作或為解決某項特殊問題，與執行特定任務時所結合的團隊或工作小組。關於它的優點，下列哪一項正確？",
        "options": {
            "A": "資源使用上的衝突",
            "B": "任務目標明確",
            "C": "部分人員產生雙重忠貞的問題",
            "D": "原有單位的本位主義影響"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "03-010",
        "text": "專案的組織，是指若干部門之間的團隊組合，用以達成某種特定性的工作或為解決某項特殊問題，與執行特定任務時所結合的團隊或工作小組。關於它的特性，下列哪些正確？（複選）",
        "options": {
            "A": "臨時性的動態組織",
            "B": "開放性的組織團體",
            "C": "專案成員之間的互動頻繁",
            "D": "為特殊目的而成立"
        },
        "answer": [
            "A",
            "B",
            "C",
            "D"
        ],
        "type": "checkbox"
    },
    {
        "id": "03-011",
        "text": "下列哪一項專案組織文化特性，是強調工作導向及目標完成？",
        "options": {
            "A": "發展式（Developing）",
            "B": "市場式（Marketing）",
            "C": "家族式（Family）",
            "D": "官僚式（Bureaucrat）"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "03-012",
        "text": "在專案經理（Project Manager）的領導風格中，決策領導權屬於下列哪一項類型？",
        "options": {
            "A": "放任式（Noninterferent）領導",
            "B": "民主式（Democratic）領導",
            "C": "威權式（Authoritative）領導",
            "D": "專案式（Projectized）領導"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "03-013",
        "text": "下列哪一項是專案組織溝通的第一層級？",
        "options": {
            "A": "技術性溝通",
            "B": "人際間溝通",
            "C": "個人內部溝通",
            "D": "群體或組織間溝通"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "03-014",
        "text": "關於衝突的基本原因，下列哪一項錯誤？",
        "options": {
            "A": "目標衝突",
            "B": "無限資源的爭奪",
            "C": "角色衝突",
            "D": "組織變革"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "03-015",
        "text": "下列哪些會構成專案風險？（複選）",
        "options": {
            "A": "事件之發生",
            "B": "事件發生對結果的影響",
            "C": "科技",
            "D": "人員"
        },
        "answer": [
            "A",
            "B"
        ],
        "type": "checkbox"
    },
    {
        "id": "03-016",
        "text": "關於風險評估的內容，下列哪一項錯誤？",
        "options": {
            "A": "專案審查（Project Review）",
            "B": "需求",
            "C": "類比系統",
            "D": "探索性研究"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "03-017",
        "text": "關於風險的處理方式，下列哪一項錯誤？",
        "options": {
            "A": "風險規避（Risk Avoidance）",
            "B": "風險轉移（Risk Transfer）",
            "C": "風險減輕（Risk Mitigation）與控制",
            "D": "風險發展（Risk Development）"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "03-018",
        "text": "專案的生命週期中，下列哪一階段之成本控制彈性最高？",
        "options": {
            "A": "概念設計",
            "B": "細部設計",
            "C": "系統運作維持",
            "D": "生產佈署"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "03-019",
        "text": "下列哪一項在產品生命週期（Product Life Cycle）成本所佔的比率最低？",
        "options": {
            "A": "生產",
            "B": "系統獲得",
            "C": "系統研發",
            "D": "運作與維修"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "03-020",
        "text": "發展專案管理計畫書（Develop Project Management Plan）的主要目的，下列哪一項正確？",
        "options": {
            "A": "了解誰是利害關係人（Stakeholder）",
            "B": "確認專案的成本",
            "C": "定義專案如何執行、如何監督、控制及結束專案",
            "D": "確保專案的品質"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "03-021",
        "text": "定義範疇（Define Scope）的產出（Output）包含下列哪些？（複選）",
        "options": {
            "A": "專案範疇說明書（Scope Statement）",
            "B": "專案文件更新",
            "C": "成本變更",
            "D": "風險分析（Risk Analysis）"
        },
        "answer": [
            "A",
            "B"
        ],
        "type": "checkbox"
    },
    {
        "id": "03-022",
        "text": "建立工作分解結構（Work Breakdown Structure, WBS）的投入（Input）包含下列哪些？（複選）",
        "options": {
            "A": "組織流程資產（Organizational Process Assets）",
            "B": "專案範疇說明書（Scope Statement）",
            "C": "範疇管理計畫書（Scope Management Plan）",
            "D": "需求文件（Requirements Documentation）"
        },
        "answer": [
            "A",
            "B",
            "C",
            "D"
        ],
        "type": "checkbox"
    },
    {
        "id": "03-023",
        "text": "工作分解結構（Work Breakdown Structure, WBS）的最下層為下列哪一項？",
        "options": {
            "A": "工作階層",
            "B": "工作要件",
            "C": "工作責任",
            "D": "工作包（Work Package）"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "03-024",
        "text": "專案品質管理（Project Quality Management）的知識領域中，主要有下列哪些流程？（複選）",
        "options": {
            "A": "規劃品質管理（Plan Quality Management）",
            "B": "專案管理計畫變更",
            "C": "品質保證（Quality Assurance）",
            "D": "品質控制（Quality Control）"
        },
        "answer": [
            "A",
            "C",
            "D"
        ],
        "type": "checkbox"
    },
    {
        "id": "03-025",
        "text": "關於溝通管理的要件，下列哪一項錯誤？",
        "options": {
            "A": "溝通的項目名稱",
            "B": "溝通目的",
            "C": "溝通頻率",
            "D": "溝通資訊整合"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "03-026",
        "text": "關於符合品質要求的效益，下列哪一項錯誤？",
        "options": {
            "A": "專案利害關係人（Project Stakeholder）的滿意度增加",
            "B": "較少重工（Rework）的過程",
            "C": "較低的轉換率",
            "D": "較高的生產力"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "03-027",
        "text": "下列哪一項採用風險分析（Risk Analysis）的概念進行活動工期估算？",
        "options": {
            "A": "計畫評核術（Program Evaluation and Review Technique, PERT）",
            "B": "要徑法（Critical Path Method, CPM）",
            "C": "魚骨圖（Fishbone Diagram）",
            "D": "決策樹（Decision Tree）"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "03-028",
        "text": "下列哪一項分析圖常用於顯示資料的敏感度（Sensitivity）？",
        "options": {
            "A": "決策樹（Decision Tree）",
            "B": "龍捲風圖（Tornado Diagram）",
            "C": "散佈圖（Scatter Diagram）",
            "D": "直方圖（Histogram）"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "03-029",
        "text": "關於決策樹分析（Decision Tree Analysis），下列哪一項通常為決定因子？",
        "options": {
            "A": "平均數（Average）",
            "B": "極大值（Maximum）",
            "C": "中間數（Mid-Value）",
            "D": "期望貨幣值（Expected Monetary Value）"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "03-030",
        "text": "在風險分析（Risk Analysis）中，運用數學模式將成本或時程變數執行多次，最後以變數的機率分布取代定值估算的方法稱為下列哪一項？",
        "options": {
            "A": "德爾菲法（Delphi Technique）",
            "B": "計畫評核術（Program Evaluation and Review Technique, PERT）",
            "C": "蒙地卡羅模擬（Monte Carlo Simulation）",
            "D": "迴歸分析法"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "03-031",
        "text": "處理負面（Negative）風險的主要策略有下列哪些？（複選）",
        "options": {
            "A": "風險減輕（Risk Mitigation）",
            "B": "風險轉移（Risk Transfer）",
            "C": "風險規避（Risk Avoidance）",
            "D": "風險隱藏（Risk Concealment）"
        },
        "answer": [
            "A",
            "B",
            "C"
        ],
        "type": "checkbox"
    },
    {
        "id": "03-032",
        "text": "你是一家公司的專案經理（Project Manager），發現所採用的管理資訊系統有幾個流程上的瑕疵，你想識別影響這些流程的因果關係，下列哪些工具（Tools）最適合？（複選）",
        "options": {
            "A": "決策樹（Decision Tree）",
            "B": "魚骨圖（Fishbone Diagram）",
            "C": "影響圖（Influence Diagram）",
            "D": "標竿圖（Benchmarking Diagram）"
        },
        "answer": [
            "B",
            "C"
        ],
        "type": "checkbox"
    },
    {
        "id": "03-033",
        "text": "賣方針對提供的產品或服務設定一個特定的價格與買方達成協議的合約，下列哪一項正確？",
        "options": {
            "A": "固定價格",
            "B": "成本補償",
            "C": "成本加獎勵費用",
            "D": "時間與材料成本"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "03-034",
        "text": "關於人力資源規劃（Human Resource Management）的敘述，下列哪一項錯誤？",
        "options": {
            "A": "人力資源規劃涉及角色與責任決定",
            "B": "人力資源規劃的產出（Output）包括專案組織圖（Project Organization Chart）",
            "C": "流程所產生的人員管理計畫敘述資源如何及何時取得與釋出",
            "D": "此流程所產生的責任指派矩陣（Responsibility Assignment Matrix, RAM）允許你看到被指派活動的各負責人"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "03-035",
        "text": "下列哪些是制定專案範疇（Project Scope）管理計畫的敘述？（複選）",
        "options": {
            "A": "根據專案工作說明書（Statement of Work, SOW）編制詳細專案範圍說明書的一個過程",
            "B": "能夠根據詳細的專案範圍說明書製作工作分解結構（Work Breakdown Structure, WBS），並確定如何維持與批准該工作分解結構的一個過程",
            "C": "規定如何正式核實與驗收專案已完成之交付標的（Deliverable）的一個過程",
            "D": "規定專案人數限制的一個過程"
        },
        "answer": [
            "A",
            "B",
            "C"
        ],
        "type": "checkbox"
    },
    {
        "id": "03-036",
        "text": "範疇說明書（Scope Statement）是下列哪一項的產出（Output）？",
        "options": {
            "A": "規劃範疇（Plan Scope）",
            "B": "驗證範疇（Verificate Scope）",
            "C": "定義範疇（Define Scope）",
            "D": "工作分解結構（Work Breakdown Structure, WBS）"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "03-037",
        "text": "製作工作分解結構（Work Breakdown Structure, WBS）常用的工具與技術（Tools and Techniques）為下列哪一項？",
        "options": {
            "A": "比較法",
            "B": "成本效益分析法（Cost-Benefit Analysis）",
            "C": "專案選擇法",
            "D": "分解術（Decomposition）"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "03-038",
        "text": "下列哪些是定義活動（Define Activities）的產出（Output）？（複選）",
        "options": {
            "A": "活動清單（Activity List）",
            "B": "活動屬性（Activity Attributes）",
            "C": "請求的變更（Change Requests）",
            "D": "里程碑清單（Milestone List）"
        },
        "answer": [
            "A",
            "B",
            "D"
        ],
        "type": "checkbox"
    },
    {
        "id": "03-039",
        "text": "下列哪些流程是包含在專案管理規劃（Planning）流程群組（Process Groups）？（複選）",
        "options": {
            "A": "定義活動（Define Activities）",
            "B": "規劃範疇管理（Plan Scope Management）",
            "C": "發展專案管理計畫書（Develop Project Management Plan）",
            "D": "建立工作分解結構（Work Breakdown Structure, WBS）"
        },
        "answer": [
            "A",
            "B",
            "C",
            "D"
        ],
        "type": "checkbox"
    },
    {
        "id": "03-040",
        "text": "下列哪一項是排序活動（Sequence Activities）的產出（Output）？",
        "options": {
            "A": "定義活動（Define Activities）",
            "B": "規劃風險管理（Plan Risk Management）",
            "C": "專案時程網圖（Project Schedule Network Diagram）",
            "D": "建立工作分解結構（Work Breakdown Structure, WBS）"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "03-041",
        "text": "下列哪一項是規劃溝通管理（Plan Communication Management）的產出（Output）？",
        "options": {
            "A": "範疇聲明（Scope Statement）",
            "B": "專案管理計畫書（Project Management Plan）",
            "C": "溝通管理計畫書（Communications Management Plan）",
            "D": "專案時程網圖（Project Schedule Network Diagram）"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "03-042",
        "text": "下列哪一項是規劃人力資源管理（Plan Human Resource Management）的產出（Output）？",
        "options": {
            "A": "人力資源管理計畫書",
            "B": "用人管理計畫書（Staffing Management Plan）",
            "C": "專案時程網圖（Project Schedule Network Diagram）",
            "D": "專案組織圖（Project Organization Chart）"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "03-043",
        "text": "關於計畫評核術（Program Evaluation and Review Technique, PERT）與要徑法（Critical Path Method, CPM）的敘述，下列哪些正確？（複選）",
        "options": {
            "A": "計畫評核術（Program Evaluation and Review Technique, PERT）一般用在複雜以及高不確定性專案",
            "B": "要徑法（Critical Path Method, CPM）以經驗數據為基礎來確定各項工作的時間",
            "C": "要徑法（Critical Path Method, CPM）只需要定義樂觀（Optimistic）時間和悲觀（Pessimistic）時間",
            "D": "要徑法（Critical Path Method, CPM）比計畫評核術（Program Evaluation and Review Technique, PERT）來的準確"
        },
        "answer": [
            "A",
            "B"
        ],
        "type": "checkbox"
    },
    {
        "id": "03-044",
        "text": "下列哪一項是估算活動資源（Estimate Activity Resources）的最佳敘述？",
        "options": {
            "A": "估算完成各計畫活動所需工時單位數",
            "B": "確定各計畫活動之間的依存關係",
            "C": "估算完成各計畫活動所需資源的種類與數量",
            "D": "確定為產生專案各種交付標的（Deliverable）而必須進行的具體計畫活動"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "03-045",
        "text": "下列哪些是規劃品質管理（Plan Quality Management）的產出（Output）？（複選）",
        "options": {
            "A": "品質管理計畫書（Quality Management Plan）",
            "B": "品質檢核表（Quality Checklists）",
            "C": "專案管理計畫書（Project Management plan）",
            "D": "品質指標（Quality Metrics）"
        },
        "answer": [
            "A",
            "B",
            "D"
        ],
        "type": "checkbox"
    },
    {
        "id": "03-046",
        "text": "關於規劃人力資源管理（Plan Human Resource Management）的敘述，下列哪一項正確？",
        "options": {
            "A": "確定、記錄並分派專案角色、職責和請示彙報關係，制定人員組織管理計畫",
            "B": "招募專案工作所需的人力資源",
            "C": "培養團隊成員的能力與提高成員之間的交互作用，以提高專案績效",
            "D": "追蹤團隊成員的績效、提供回饋、解決問題、協調變更事宜以提高專案績效"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "03-047",
        "text": "專案進行的中途，你的團隊由三個人新增加兩個人，成為五個人的團隊，將增加多少溝通渠道？",
        "options": {
            "A": "7",
            "B": "5",
            "C": "10",
            "D": "3"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "03-048",
        "text": "你是達威科技公司的行銷部經理，你的公司已開發出一種全新的防毒軟體。貴公司在防毒軟體市場已有23%的佔有率，在業界的排行為前三大公司。你被授命為一新產品行銷專案的負責人，你的行銷預算有8600萬元，你正為該專案發展一份專案管理計畫書（Project Management Plan），你應採取下列哪一項行動才能順利完成計畫書的工作？",
        "options": {
            "A": "分析行銷預算，如何將其合理地分配在行銷專案的各個階段",
            "B": "加強產品的競爭策略，以超越23%的市場佔有率的計畫",
            "C": "召募專案團隊並指派規劃工作給專案團隊（Project Team）",
            "D": "提出創新的行銷構想，取得專案發起人的認同"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "03-049",
        "text": "發展專案管理計畫書（Develop Project Management Plan）是在下列哪一項流程群組（Process Groups）？",
        "options": {
            "A": "起始（Initiating）",
            "B": "規劃（Planning）",
            "C": "執行（Executing）",
            "D": "監視及控制（Monitoring and Controlling）"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "03-050",
        "text": "下列哪些是規劃範疇管理（Plan Scope Management）的產出（Output）？（複選）",
        "options": {
            "A": "專案章程（Project Charter）",
            "B": "專案範疇聲明書（Project Scope Statement）",
            "C": "範疇管理計畫書（Scope Management Plan）",
            "D": "需求管理計畫書（Require Management Plan）"
        },
        "answer": [
            "C",
            "D"
        ],
        "type": "checkbox"
    },
    {
        "id": "03-051",
        "text": "關於定義活動（Define Activities）的產出（Output），下列哪一項錯誤？",
        "options": {
            "A": "活動清單（Activity List）",
            "B": "活動屬性（Activity Attributes）",
            "C": "里程碑清單（Milestone List）",
            "D": "工作說明書（Statement of Work, SOW）"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "03-052",
        "text": "下列哪一項是實施估算活動資源（Estimate Activity Resources）的主要目的？",
        "options": {
            "A": "為確定專案預算，以便納入專案管理計畫書（Project Management Plan）",
            "B": "為確定執行專案活動時，要使用何種資源、每一資源使用數量",
            "C": "為確定專案進度，不受公司人力資源的影響",
            "D": "為確定專案進度，不受公司財務資源的影響"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "03-053",
        "text": "你剛從學校畢業踏入職場，因缺乏專案工作經驗，所以無法擔任專案經理（Project Manager）的工作。但因為在學校時你有舉辦活動的經驗，加上你的努力學習，你被公司主管指派到某項專案上協助時間管理的工作。因此你目前正對專案的某個活動進行估算活動期程（Estimate Activity Durations），下列哪一項是你可能會採用的工具與技術（Tools and Techniques）？",
        "options": {
            "A": "腦力激盪法（Brainstorming）",
            "B": "縮程法（Crashing）",
            "C": "德爾菲法（Delphi Technique）",
            "D": "類比估算法（Analogous Estimating）"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "03-054",
        "text": "在進行專案發展時程（Develop Schedule）中常會用到要徑法（Critical Path Method, CPM）作為時程發展的工具與技術（Tools and Techniques），關於要徑法下列哪一項正確？",
        "options": {
            "A": "所謂要徑法（Critical Path Method, CPM）就是找到專案所有的活動路徑，並加以管理",
            "B": "要徑法（Critical Path Method, CPM）可以算出專案活動的最早開始時間，但不能算出最晚開始時間",
            "C": "在正常進度下，要徑（Critical Path）上的活動均為零浮時（Float）",
            "D": "要徑法（Critical Path Method, CPM）又稱三點估算法（Three-Point Estimate）"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "03-055",
        "text": "你正擔任某項重大建築工程專案的經理，該項建築工程因施工地點位居特殊的地理環境中，而且將面臨不確定的天候因素，因此針對該專案的工期排程，你正思考要使用「要徑法（Critical Path Method, CPM）」還是「計畫評核術（Program Evaluation and Review Technique, PERT）」，針對此兩種方法的差異，下列哪一項最為正確？",
        "options": {
            "A": "要徑法（Critical Path Method, CPM）使用「單時估算法」，較計畫評核術（Program Evaluation and Review Technique, PERT）使用「三時估算法（Three-Point Estimate）」為普遍",
            "B": "要徑法（Critical Path Method, CPM）使用「三時估算法（Three-Point Estimate）」，較計畫評核術（Program Evaluation and Review Technique, PERT）使用「單時估算法」準確性高",
            "C": "要徑法（Critical Path Method, CPM）適合用於風險性高及不確定性高的專案",
            "D": "計畫評核術（Program Evaluation and Review Technique, PERT）適合用於風險性低及不確定性低的專案"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "03-056",
        "text": "關於成本基準（Cost Baseline）的敘述，下列哪一項正確？",
        "options": {
            "A": "成本基準是按時間分段的預算，用作衡量及監控專案整體預算的基準",
            "B": "成本基準就是專案的實際支出成本（Actual Cost）",
            "C": "成本基準就是專案每一項活動成本的預估值",
            "D": "成本基準僅做成本估算參考，不能用來衡量專案績效"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "03-057",
        "text": "下列哪一項不能做為決定預算（Determine Budget）的投入（Input）？",
        "options": {
            "A": "範疇基準（Scope Baseline）",
            "B": "專案時程（Project Schedule）",
            "C": "成本管理計畫書",
            "D": "產品說明書"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "03-058",
        "text": "下列哪一項是規劃品質管理（Plan Quality Management）常用的工具與技術（Tools and Techniques）？",
        "options": {
            "A": "魚骨圖（Fishbone Diagram）",
            "B": "成本效益分析（Cost-Benefit Analysis）",
            "C": "要因分析（Cause-Effect）",
            "D": "流程圖（Flowchart）"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "03-059",
        "text": "為專案進行人力資源規劃時，下列哪一項是應先考慮的行動？",
        "options": {
            "A": "確定專案角色、職責、報告系統並制定人力管理計畫",
            "B": "先行招募重要團隊成員，避免人力資源短缺",
            "C": "與專案發起人協商，以免造成資源衝突",
            "D": "專案的訓練與獎勵系統，以吸引人員加入"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "03-060",
        "text": "在進行決定預算（Determine Budget）時，當考慮到專案時程（Project Schedule），下列哪一項敘述正確？",
        "options": {
            "A": "確定專案生命週期（Project Life Cycle），以進行預算編列",
            "B": "將成本按專案各階段進行分配",
            "C": "做進度績效衡量的方法",
            "D": "做成本績效衡量的方法"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "03-061",
        "text": "下列哪一項不屬於定量風險分析（Quantitative Risk Analysis）常用的工具與技術（Tools and Techniques）？",
        "options": {
            "A": "資料蒐集與呈現技術",
            "B": "定量風險分析（Quantitative Risk Analysis）與建模技術",
            "C": "專家判斷（Expert Judgment）",
            "D": "市場調查分析（Marketing Investigation Analysis）"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "03-062",
        "text": "由於團隊成員之間的衝突，使得你的專案已經落後於進度表。你已經解決了衝突，為了重新趕上進度，你應該優先考慮下列哪一項？",
        "options": {
            "A": "向著進度趕工",
            "B": "執行資源撫平（Resource Leveling）",
            "C": "執行倒置的資源配置時序安排",
            "D": "利用關鍵職位資源"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "03-063",
        "text": "關於規劃（Planning）流程群組（Process Groups）的敘述，下列哪一項正確？",
        "options": {
            "A": "初步定義或修正專案章程（Project Charter）",
            "B": "監視及估計各專案基準（Baseline）不符、差異事件",
            "C": "建立專案工作說明書（Statement of Work, SOW）",
            "D": "發展專案團隊（Develop Project Team）、建立專案成員責任指派矩陣（Responsibility Assignment Matrix, RAM）"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "03-064",
        "text": "專案執行時，發現某項工作分解結構（Work Breakdown Structure, WBS）工作項目成本超過基準時，意謂著在工作分解結構（Work Breakdown Structure, WBS）發展時發生下列哪一項情況？",
        "options": {
            "A": "工作分解結構（Work Breakdown Structure, WBS）沒有更簡化層級",
            "B": "專案成員對於顧客（買方）的需求仍未清楚及定義",
            "C": "未採用生命週期法發展工作分解結構（Work Breakdown Structure, WBS）",
            "D": "工作分解結構（Work Breakdown Structure, WBS）是由顧客（買方）提供"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "03-065",
        "text": "專案中一工作項目相關規劃資料如下：最早開始日期（Early Start Date, ES）為6、最早完工日期（Early Finish Time, EF）為11、最晚完工日期（Late Finish Date, LF）為15，下列哪一項計算結果正確？",
        "options": {
            "A": "工期=3",
            "B": "浮時（Float）=4",
            "C": "工期=6",
            "D": "浮時（Float）<0"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "03-066",
        "text": "在專案發展時程（Develop Schedule）中，為了解專案時程的關鍵性及適時調整性，可使用下列哪一項圖示技術（Techniques）？",
        "options": {
            "A": "計畫評核術（Program Evaluation and Review Technique, PERT）",
            "B": "專案時程網圖（Project Schedule Network Diagram）",
            "C": "圖示評核術（Graphical Evaluation and Review Technique, GERT）",
            "D": "要徑法（Critical Path Method, CPM）"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "03-067",
        "text": "專案成本類別有許多不同模式，以「電腦主機及週邊設施租賃」為例，這是屬於下列哪一項成本？",
        "options": {
            "A": "固定成本",
            "B": "研發成本",
            "C": "維護成本",
            "D": "變動成本"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "03-068",
        "text": "你的專案團隊（Project Team）成員未曾共事過，他們開始出現衝突，似乎每個人都很難溝通。你必須迅速地使這種狀況得到控制，首先應該採取的行動為下列哪一項？",
        "options": {
            "A": "定期召開小組會議",
            "B": "下次開會時，採用會議引導人協助會議順利進行",
            "C": "小心地進行專案成員衝突管理計畫",
            "D": "採用強制性的會議行為規則"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "03-069",
        "text": "專案規劃時，對於辨識風險（Identify Risks）的資訊蒐集經常使用到不同技術（Techniques），下列哪一項不屬於這項技術（Techniques）範圍？",
        "options": {
            "A": "文件審查",
            "B": "風險評等矩陣（Risk Rating Matrix）",
            "C": "假設事項分析（Assumption Analysis）",
            "D": "優勢、劣勢、機會與威脅（Strengths, Weaknesses, Opportunities, and Threats, SWOT）分析"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "03-070",
        "text": "軟體開發專案規劃時，對於辨識風險（Identify Risks）也深入探討，然而發現此專案原申請的預算被挪用後竟只能支持30個工作日，而且有資源中斷的可能性，這種風險類型就是下列哪一項？",
        "options": {
            "A": "不確定（Uncertainty）",
            "B": "專案管理",
            "C": "預算",
            "D": "組織"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "03-071",
        "text": "專案涉及採購時，其採購合約均需詳細規劃以符合專案（買方）需求，下列哪一項錯誤？",
        "options": {
            "A": "合約內容必須說明賣方交付標的（Deliverable）狀況、品質程度、成本或價格",
            "B": "合約內容明訂書面文件如發票單據、變更請求、報告、清單、說明書、保固文件",
            "C": "合約內容包括條款修訂、交付標的（Deliverable）修改、爭議或申訴、賠償或補償",
            "D": "合約是強制賣方提供規定交付標的（Deliverable）給買方的一種協議"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "03-072",
        "text": "下列哪些應該包含在專案管理計畫書（Project Management Plan）中？（複選）",
        "options": {
            "A": "專案基準",
            "B": "變更管理計畫書",
            "C": "利害關係人（Stakeholder）之間溝通的需求與技術",
            "D": "描述工作如何執行以達成專案目標"
        },
        "answer": [
            "A",
            "B",
            "C",
            "D"
        ],
        "type": "checkbox"
    },
    {
        "id": "03-073",
        "text": "溝通管理計畫書（Communications Management Plan）包含下列哪些？（複選）",
        "options": {
            "A": "利害關係人（Stakeholder）的溝通需求",
            "B": "溝通的目的與頻率",
            "C": "溝通格式與傳送的方法",
            "D": "分發的時間範圍與負責分發資訊者"
        },
        "answer": [
            "A",
            "B",
            "C",
            "D"
        ],
        "type": "checkbox"
    },
    {
        "id": "03-074",
        "text": "下列哪一項常用的工具與技術（Tools and Techniques）可以協助專案規劃時，用來顯示專案可能面對的問題與問題的原因和後果？",
        "options": {
            "A": "決策樹圖（Decision Tree Diagram）",
            "B": "魚骨圖（Fishbone Diagram）",
            "C": "甘特圖（Gantt Chart）",
            "D": "模擬圖（Simulation Diagram）"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "03-075",
        "text": "關於定性風險分析（Qualitative Risk Analysis）的目的，下列哪些正確？（複選）",
        "options": {
            "A": "判定已識別出的風險對專案有何影響",
            "B": "風險發生的機率",
            "C": "依據風險對專案的影響程度，來排定風險的優先順序",
            "D": "指定給專案一個風險分數"
        },
        "answer": [
            "A",
            "B",
            "C",
            "D"
        ],
        "type": "checkbox"
    },
    {
        "id": "03-076",
        "text": "關於風險管理計畫書（Risk Management Plan）之敘述，下列哪些正確？（複選）",
        "options": {
            "A": "是規劃風險管理（Plan Risk Management）的產出（Output）",
            "B": "包括對於觸發因子之風險回應的敘述",
            "C": "包括門檻值、評分與解釋方法、負責人、預算",
            "D": "是所有其餘規劃風險（Plan Risk）的投入（Input）"
        },
        "answer": [
            "A",
            "C",
            "D"
        ],
        "type": "checkbox"
    },
    {
        "id": "03-077",
        "text": "下列哪一項流程會採用「統計機率值」來評估風險發生的可能性及它們的後果？",
        "options": {
            "A": "定性風險分析（Qualitative Risk Analysis）",
            "B": "定量風險分析（Quantitative Risk Analysis）",
            "C": "核對清單分析（Item-Checking Analysis）",
            "D": "風險分類分析（Risk Classification Analysis）"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "03-078",
        "text": "關於人力資源規劃（Human Resources Planning）的敘述，下列哪一項錯誤？",
        "options": {
            "A": "人力資源規劃流程記載個人或小組在各項專案要件中的角色與權力",
            "B": "人力資源規劃有三項投入（Input）：企業環境因素（Enterprise Environmental Factors）、組織流程資產、專案管理計畫",
            "C": "人力資源規劃的產出（Output）之一包括顯示專案報告關係的專案組織圖（Project Organization Chart）",
            "D": "人力資源規劃有三項產出（Output）：角色與責任、專案組織圖（Project Organization Chart）、人員管理計畫"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "03-079",
        "text": "關於人力資源規劃（Human Resources Planning）期間所會面臨的限制，下列哪一項錯誤？",
        "options": {
            "A": "組織結構",
            "B": "勞資談判協議",
            "C": "經濟狀況",
            "D": "技術介面"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "03-080",
        "text": "關於定義活動（Define Activities）的產出（Output），下列哪一項錯誤？",
        "options": {
            "A": "活動清單（Activity List）",
            "B": "活動屬性（Activity Attributes）",
            "C": "里程碑清單（Milestone List）",
            "D": "專案管理計畫書（Project Management Plan）"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "03-081",
        "text": "對買方而言，下列哪一項合約的風險是最小的？",
        "options": {
            "A": "時間與材料",
            "B": "成本加固定費用",
            "C": "固定價格",
            "D": "成本加獎勵"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "03-082",
        "text": "關於估算活動期程（Estimate Activity Durations）常用的工具與技術（Tools and Techniques），下列哪一項錯誤？",
        "options": {
            "A": "專家判斷（Expert Judgment）",
            "B": "風險準備分析（Reserve Analysis）",
            "C": "類比估算法（Analogous Estimating）",
            "D": "活動清單（Activity List）"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "03-083",
        "text": "關於估算成本（Estimate Costs）的敘述，下列哪些正確？（複選）",
        "options": {
            "A": "每一項專案都有預算，且專案成功完成的認定，有一部分是要評估是否在核准的預算內完成專案",
            "B": "成本管理計畫是在執行「專案管理計畫」流程時產生",
            "C": "工作分解結構（Work Breakdown Structure, WBS）是決定正確成本估計的關鍵",
            "D": "決定成本估計時，確定要包括整個專案生命週期（Project Life Cycle）的所有成本"
        },
        "answer": [
            "A",
            "B",
            "C",
            "D"
        ],
        "type": "checkbox"
    },
    {
        "id": "03-084",
        "text": "為了提供更好的控制，將交付標的（Deliverable）分解成若干較小的、更可以管理的小部分。這種分解稱為下列哪一項？",
        "options": {
            "A": "規劃範疇管理（Plan Scope Management）",
            "B": "產生工作分解結構（Work Breakdown Structure, WBS）",
            "C": "範疇基準（Scope Baseline）",
            "D": "驗證範疇（Verificate Scope）"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "03-085",
        "text": "在工作分解結構（Work Breakdown Structure, WBS）中，最底層的工作稱為下列哪一項？",
        "options": {
            "A": "活動（Activity）",
            "B": "任務（Task）",
            "C": "工作包（Work Package）",
            "D": "成本帳戶（Cost Account）"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "03-086",
        "text": "專案經理（Project Manager）正在評審（Reviewing）專案WBS，專案的WBS代表下列哪一項？",
        "options": {
            "A": "所有必須交付給顧客的實體項目",
            "B": "所有必須完成的專案工作",
            "C": "必須由專案團隊（Project Team）完成的工作",
            "D": "所有專案的活動"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "03-087",
        "text": "客戶要求專案經理（Project Manager）承諾專案完成日期，專案經理（Project Manager）必須先完成專案時程分析。專案經理（Project Manager）使用計畫評核術（Program Evaluation and Review Technique, PERT）分析專案時程，結果顯示可以承諾交付日期為6月30日，期望的交付日期為5月31日。若專案經理（Project Manager）可以接受的遲交風險為5%，代表6月30日以後才完成專案的風險。請問專案要徑（Critical Path）工期的時程標準差為下列哪一項？",
        "options": {
            "A": "10天",
            "B": "20天",
            "C": "5天",
            "D": "半個月"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "03-088",
        "text": "專案經理（Project Manager）正在管理醫院的軟體發展專案，有新的電腦可以明顯地加速發展的進度，但新電腦成本需要$50,000，以包含運送、安裝與啟用。新電腦的效益，在1年後可以替專案節省$100,000。假設年利率是10%，請問1年後使用新電腦的淨現值（Net Present Value）為下列哪一項？",
        "options": {
            "A": "$90,000",
            "B": "$40,909",
            "C": "$45,555",
            "D": "$91,110"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "03-089",
        "text": "專案正在規劃階段，專案經理（Project Manager）選擇使用前導網絡圖（Precedence Network Diagram）協助規劃專案時程。前導網絡圖除提供網絡圖形之外，最大的優點是提供下列哪一項？",
        "options": {
            "A": "任務（Tasks）準時完成的機率",
            "B": "時程中活動的邏輯關係",
            "C": "活動的起始與結束日期",
            "D": "活動的浮時（Float）"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "03-090",
        "text": "專案經理（Project Manager）決定改進原先預定的專案完成時間，採用同時進行不同的活動（Activity），這些活動原本是前後相連結的順序排列，專案經理（Project Manager）使用改進的方法稱為下列哪一項？",
        "options": {
            "A": "縮程法（Crashing）",
            "B": "提高優先順序（Priority Precedence）",
            "C": "緊急防禦（Emergent Defense）",
            "D": "快速跟進（Fast Tracking）"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "03-091",
        "text": "五項任務時程是以連續順序排列，每項任務都是以「結束-開始」方式連結後續的任務，每項任務都有一天的總浮時（Total Float）。迄今，前兩項任務都依照時程完成，則對後續剩下的任務而言，有多少天的浮時（Float），下列哪一項正確？",
        "options": {
            "A": "一天",
            "B": "二天",
            "C": "三天",
            "D": "四天"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "03-092",
        "text": "學習曲線（Learning Curve）理論強調在生產大量產品時，下列哪一項正確？",
        "options": {
            "A": "當生產率上升時，成本減少",
            "B": "當生產數量增加時，平均單位成本降低",
            "C": "當大量採購時，物料會便宜",
            "D": "使用先進科技，員工生產力增加"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "03-093",
        "text": "專案經理（Project Manager）決定使用類比估算法（Analogous Estimating）估算有關專案生命週期（Project Life Cycle）事項時，他不會擔心下列哪一項的估算準備？",
        "options": {
            "A": "活動清單（Activity List）",
            "B": "估算的規模",
            "C": "估算的量化",
            "D": "檔案所能提供的支援"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "03-094",
        "text": "關於淨現值（NPV）的敘述，下列哪些正確？（複選）",
        "options": {
            "A": "假設以資金成本重複投資",
            "B": "為限制下的優化法",
            "C": "應選擇NPV最大的專案",
            "D": "假設以浮動利率重複投資"
        },
        "answer": [
            "A",
            "C"
        ],
        "type": "checkbox"
    },
    {
        "id": "03-095",
        "text": "關於內部投資報酬率（IRR）的敘述，下列哪些正確？（複選）",
        "options": {
            "A": "應選擇IRR最高的專案",
            "B": "當淨現值為正時的折現率",
            "C": "為限制下的優化法",
            "D": "當淨現值為零時的折現率"
        },
        "answer": [
            "A",
            "D"
        ],
        "type": "checkbox"
    },
    {
        "id": "03-096",
        "text": "下列哪一項敘述正確？",
        "options": {
            "A": "折現的現金流量分析是最不精確的，因其不考慮金錢的時間價值",
            "B": "淨現值的現金流量分析是最不精確的，因其假設以折現率做重複投資",
            "C": "還本期的現金流量分析是最不精確的，因其不考慮金錢的時間價值",
            "D": "內部投資報酬率的現金流量分析是最不精確的，因其假設以資金成本做重複投資"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "03-097",
        "text": "假設你是健身俱樂部的經理，總公司要你決定在新竹或台南新開一家分店；已知評估結果如下：新竹店還本期為18個月、淨現值為-250，台南店還本期為24個月、淨現值為250，你會選擇下列哪一家店開業？",
        "options": {
            "A": "新竹，因還本期短",
            "B": "台南，因淨現值（NPV）為正",
            "C": "新竹，因淨現值（NPV）為負",
            "D": "台南，因還本期長"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "03-098",
        "text": "假設你是爵士俱樂部的經理，總公司要你決定在新竹或台南新開一家分店，已知評估結果如下：新竹店還本期為27個月、投資報酬率為35%，台南店還本期為24個月、投資報酬率為32%，你會選擇下列哪一家店開業？",
        "options": {
            "A": "新竹，因投資報酬率高",
            "B": "台南，因投資報酬率低",
            "C": "新竹，因還本期長",
            "D": "台南，因還本期短"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "03-099",
        "text": "假設你是專案經理（Project Manager），正考慮要推薦一個$575,000的專案，預估頭兩年每季會有$25,000的現金流入，其後每季則為$75,000，請問還本期多長，下列哪一項正確？",
        "options": {
            "A": "40個月",
            "B": "38個月",
            "C": "39個月",
            "D": "41個月"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "03-100",
        "text": "專案的遴選方法包括下列哪些？（複選）",
        "options": {
            "A": "成本效益分析（Cost-Benefit Analysis）",
            "B": "限制條件（Constraints）下的優化法",
            "C": "淨現值法（NPV）",
            "D": "潛在市場佔有率"
        },
        "answer": [
            "A",
            "B",
            "C"
        ],
        "type": "checkbox"
    },
    {
        "id": "03-101",
        "text": "遴選委員會正在辯論兩項專案：專案A還本期18個月，專案B成本是$125,000。第一年的現金流入為$50,000，之後為每季$25,000，你該如何選擇？",
        "options": {
            "A": "專案A或專案B均可，因還本期相同",
            "B": "專案A，因專案B還本期為21個月",
            "C": "專案A，因專案B還本期為24個月",
            "D": "專案A，因專案B還本期為20個月"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "03-102",
        "text": "下列關於工作授權系統的說明哪一項錯誤？",
        "options": {
            "A": "闡明並啟動每一個工作包（Work Package）的內容",
            "B": "由組織定義後所寫出來的流程",
            "C": "專案計畫執行的工具與技術（Tools and Techniques）",
            "D": "專案計畫執行過程的產出（Output）"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "03-103",
        "text": "下列哪些是專案範圍定義的原因？（複選）",
        "options": {
            "A": "細分專案交付標的（Deliverable）",
            "B": "評估專案範圍的穩定",
            "C": "有助於成本及時間估計",
            "D": "有助於工作分派"
        },
        "answer": [
            "A",
            "C",
            "D"
        ],
        "type": "checkbox"
    },
    {
        "id": "03-104",
        "text": "關於工作分解結構（Work Breakdown Structure, WBS）的敘述，下列哪一項錯誤？",
        "options": {
            "A": "確認交付標的（Deliverable）",
            "B": "最上層的稱為工作包（Work Package）",
            "C": "有助於成本及時間估量",
            "D": "有助於工作分派"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "03-105",
        "text": "關於工作包（Work Package）層級的敘述，下列哪一項錯誤？",
        "options": {
            "A": "有助於資源分配",
            "B": "是工作分解結構（Work Breakdown Structure, WBS）的最低層級",
            "C": "確定同意過的交付標的（Deliverable）",
            "D": "有助於成本及時間估計"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "03-106",
        "text": "節點活動法（Activity-on-Node, AON）最常使用下列哪一項邏輯關係？",
        "options": {
            "A": "開始-完成（Start-to-Finish, SF）",
            "B": "開始-開始（Start-to-Start, SS）",
            "C": "完成-完成（Finish-to-Finish, FF）",
            "D": "完成-開始（Finish-to-Start, FS）"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "03-107",
        "text": "假使專案的首要限制條件（Constraints）因素是成本，專案贊助者（Project Sponsor）希望估計得越精確越好，下列哪一項工具與技術（Tools and Techniques）最適合？",
        "options": {
            "A": "類比估算法（Analogous Estimating）",
            "B": "由下而上估算法（Bottom-Up Estimating）",
            "C": "由上往下估算法（Top-Down Estimating）",
            "D": "專家判斷（Expert Judgment）"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "03-108",
        "text": "關於承包商向顧客協商之付款方式，下列哪一項錯誤？",
        "options": {
            "A": "全部完成再付款",
            "B": "專案一開始就立即付現",
            "C": "根據工期每個月付款",
            "D": "高付款頻率"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "03-109",
        "text": "下列哪一項是專案績效量測及評估的第一步驟？",
        "options": {
            "A": "採取行動",
            "B": "測量進度及績效",
            "C": "基準計畫的設立",
            "D": "依照實際狀況的比較計畫"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "03-110",
        "text": "某營建廠商為其新得標之專案投保工作標的物產物保險，此舉較符合風險管理中的下列哪一項概念？",
        "options": {
            "A": "風險規避（Risk Avoidance）",
            "B": "風險減輕（Risk Mitigation）",
            "C": "風險轉移（Risk Transfer）",
            "D": "風險消除（Risk Elimination）"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "03-111",
        "text": "下列哪一項情況，業主（Owner）所承擔的風險較低？",
        "options": {
            "A": "依經濟市場機制決定承作金額",
            "B": "採分包方式，由業主統籌管理",
            "C": "採專案實作實算的方式",
            "D": "採用專案總價承攬"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "03-112",
        "text": "如附圖所示，A與B工作項目之間的先後關係為下列哪一項？",
        "options": {
            "A": "FS",
            "B": "SS",
            "C": "FF",
            "D": "SF"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "03-113",
        "text": "應用計畫評核術（Program Evaluation and Review Technique, PERT）估算時程（Duration）時，每個工作項目需先求取幾個預估完工時程？",
        "options": {
            "A": "2",
            "B": "3",
            "C": "4",
            "D": "5"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "03-114",
        "text": "關於專案風險的三個特性，下列哪一項是正確？",
        "options": {
            "A": "暫時性、獨特性、逐步完善",
            "B": "暫時性、獨特性、影響性",
            "C": "事件來源、發生機率、影響範圍",
            "D": "發生何事、在誰身上、何時發生"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "03-115",
        "text": "考慮為專案減少可能的風險，進而購買保險（Insurance），為下列哪一項範例？",
        "options": {
            "A": "減輕（Mitigation）",
            "B": "規避（Avoidance）",
            "C": "轉移（Transfer）",
            "D": "接受（Acceptance）"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "03-116",
        "text": "組織流程資產由組織政策、程序和計畫等所組成，這項產出（Output）有三個要件與合約有關，下列哪一項錯誤？",
        "options": {
            "A": "通信聯繫",
            "B": "專案績效評估",
            "C": "付款時程與請求",
            "D": "賣方績效評估"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "03-117",
        "text": "下列哪一項是確認範疇（Validate Scope）的例子？",
        "options": {
            "A": "評審一個已經安裝好的軟體模組的績效",
            "B": "管理專案進度表的改變",
            "C": "將工作分解結構（Work Breakdown Structure,WBS）分解成工作包（Work Package）階段",
            "D": "實行效益-成本（Cost-Effect）分析，以決定是否進行專案"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "03-118",
        "text": "專案經理（Project Manager）評審專案範疇（Project Scope）與專案範疇基準（Scope Baseline）時，此項評審包括下列哪一項？",
        "options": {
            "A": "初始（Initiating）的專案進度表（Schedule）、預算與範疇",
            "B": "初始（Initiating）的專案敘述（Statement）與專案章程（Project Charter）",
            "C": "專案的初始（Initiating）範疇與範疇改變的部分",
            "D": "最新的專案預算"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "03-119",
        "text": "變更管理計畫應該包含在下列哪一項？",
        "options": {
            "A": "範疇管理計畫（Scope Management Plan）",
            "B": "溝通管理計畫（Communication Management Plan）",
            "C": "構型管理計畫（Configuration Management Plan）",
            "D": "品質管理計畫（Quality Management Plan）"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "03-120",
        "text": "關於要徑（Critical Path）的敘述，下列哪一項正確？",
        "options": {
            "A": "是網路圖中期程（Duration）最長的路徑",
            "B": "是最少的自由浮時（Free Float）的路徑",
            "C": "活動的自由浮時（Free Float）不一定是零",
            "D": "活動具有關鍵風險"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "03-121",
        "text": "顧客要求專案進行部分改變，專案團隊（Project Team）已經估計此一改變需有$10,000的成本，顧客同意負擔費用。顧客瞭解將有50%機會，此改變會失敗並且稍晚被移除。在預算中，此改變會登列如下列哪一項？",
        "options": {
            "A": "專案預算不應增加",
            "B": "專案預算應增加$15,000",
            "C": "專案預算應增加$10,000",
            "D": "專案預算應增加$5,000"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "03-122",
        "text": "若價值千萬美元專案的預算基線需要重估，下列哪一項是可以接受重估的理由？",
        "options": {
            "A": "專案中某些商品的每月消費者物價指數上漲了1.6%，造成專案預算增加了46%",
            "B": "顧客授權專案範疇（Project Scope）增加US $10,000",
            "C": "合約公司設立一個品質計畫，並保證下半年度花費一百萬美元",
            "D": "製圖部門生產力被高估了，需要額外的1,000小時，增加78%的預算"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "03-123",
        "text": "下列哪一項過程可以評估風險的機率和後果，並指定整體的風險排名和產生風險的優先順序？",
        "options": {
            "A": "定量風險分析（Quantitative Risk Analysis）",
            "B": "風險辨識（Risk Identification）",
            "C": "定性風險分析（Qualitative Risk Analysis）",
            "D": "風險管理計畫（Risk Management Plan）"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "03-124",
        "text": "假設根據氣象預報，因暴風雪可能造成已購設備無法準時抵達，你決定先向當地公司租賃，直到設備抵達為止。這是下列哪一項風險應對（Risk Response）的案例？",
        "options": {
            "A": "轉移（Transfer）",
            "B": "接受（Acceptance）",
            "C": "減輕（Mitigation）",
            "D": "規避（Avoidance）"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "03-125",
        "text": "下列哪一項工具（Tools）可以顯示某一決策所造成的衝擊（Impact）與風險的機率和成本？",
        "options": {
            "A": "模擬（Simulation）",
            "B": "決策樹（Decision Tree）",
            "C": "機率與衝擊矩陣（Probability and Impact Matrix）",
            "D": "敏感度（Sensitivity）分析"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "03-126",
        "text": "假設你為專案經理（Project Manager），決定與一家專精於客製軟體的公司簽約，你會選擇下列哪一項合約使公司的風險降到最低？",
        "options": {
            "A": "固定價格加上佣金",
            "B": "成本加上固定費用",
            "C": "固定價格",
            "D": "成本加上佣金"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "03-127",
        "text": "專案計畫用於決定下列哪些項目？（複選）",
        "options": {
            "A": "成本評估（Cost Evaluation）",
            "B": "活動起始日（Activity Starting Date）",
            "C": "浮時（Float）",
            "D": "活動完成日（Activity Finishing Date）"
        },
        "answer": [
            "B",
            "C",
            "D"
        ],
        "type": "checkbox"
    },
    {
        "id": "03-128",
        "text": "假若你是搬家公司的專案經理（Project Manager），你的部屬估計出該次活動的樂觀時間48日、悲觀時間72日、最可能時間60日，請問期望值（加權平均）為下列哪一項？",
        "options": {
            "A": "54",
            "B": "66",
            "C": "60",
            "D": "30"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "03-129",
        "text": "假若你是搬家公司的專案經理（Project Manager），你的部屬估計出該次活動的樂觀時間48日、悲觀時間72日、最可能時間60日，請問標準差為下列哪一項？",
        "options": {
            "A": "22",
            "B": "20",
            "C": "2",
            "D": "4"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "03-130",
        "text": "合約的條款和條件成為賣方許多關鍵依據。下列哪些是可能的投入（Input）？（複選）",
        "options": {
            "A": "主要交付標的（Deliverable）",
            "B": "效益分析法",
            "C": "關鍵里程碑（Milestone）",
            "D": "成本目標"
        },
        "answer": [
            "A",
            "C",
            "D"
        ],
        "type": "checkbox"
    },
    {
        "id": "04-001",
        "text": "關於解決團隊衝突的方法，下列哪一項錯誤？",
        "options": {
            "A": "團隊成員應履行承諾、完成任務",
            "B": "團隊成員應坦承表示哪些目標可以達成、哪些不能達成",
            "C": "當問題發生時，團隊成員應先私底下解決，不宜公開討論問題",
            "D": "公平獎勵、不偏袒任何一方"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "04-002",
        "text": "一個企業的矩陣式組織（Matrix Organization）的特徵，下列哪一項錯誤？",
        "options": {
            "A": "這些專案成員每天所接受的管理和督導仍然是直屬經理的權力",
            "B": "專案經理（Project Manager）並沒有任何直接的直線職權",
            "C": "專案經理（Project Manager）不是功能性角色",
            "D": "專案經理（Project Manager）可由企業內指派"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "04-003",
        "text": "在專案管理中，下列哪一項不合理？",
        "options": {
            "A": "專案經理（Project Manager）外聘",
            "B": "專案經理（Project Manager）是企業部門經理",
            "C": "一個專案有多個專案經理（Project Manager）",
            "D": "小公司不需專案管理"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "04-004",
        "text": "下列哪一項組織是可以快速地適應其所處之爆炸性環境中所面臨的變革與不確定性？",
        "options": {
            "A": "策略型組織（Strategic Organization）",
            "B": "功能組織（Functional Organization）",
            "C": "專案式組織（Projectized Organization）",
            "D": "矩陣式組織（Matrix Organization）"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "04-005",
        "text": "專案團隊（Project Team）發展有五個階段之模式，下列哪一項階段是團隊發展親密關係以及表現團隊精神的時期？",
        "options": {
            "A": "組建（Forming）",
            "B": "解散（Adjourning）",
            "C": "風暴（Storming）",
            "D": "正軌（Norming）"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "04-006",
        "text": "專案經理（Project Manager）在專案執行時與承包商（Contractor）維持合作關係主要用意有下列哪些項目？（複選）",
        "options": {
            "A": "問題的解決",
            "B": "持續性改善",
            "C": "聯合評估",
            "D": "永續性的領導才能"
        },
        "answer": [
            "A",
            "B",
            "C"
        ],
        "type": "checkbox"
    },
    {
        "id": "04-007",
        "text": "品質有不同的定義，下列哪一項定義包含了滿足需要的能力？",
        "options": {
            "A": "製造者導向的定義",
            "B": "產品導向的定義",
            "C": "消費者導向的定義",
            "D": "價值導向的定義"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "04-008",
        "text": "品質有不同的定義，下列哪一項品質定義就是代表符合需求？",
        "options": {
            "A": "行而上的定義",
            "B": "製造者導向的定義",
            "C": "消費者導向的定義",
            "D": "價值導向的定義"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "04-009",
        "text": "品質有不同的定義，下列哪一項定義品質就是使顧客覺得在使用與售價上是最佳的條件？",
        "options": {
            "A": "製造者導向的定義",
            "B": "產品導向的定義",
            "C": "消費者導向的定義",
            "D": "價值導向的定義"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "04-010",
        "text": "下列哪些是執行專案應有的品質保證項目？（複選）",
        "options": {
            "A": "品質審查",
            "B": "基準測試",
            "C": "流程圖（Flowchart）",
            "D": "實驗設計"
        },
        "answer": [
            "A",
            "B",
            "C",
            "D"
        ],
        "type": "checkbox"
    },
    {
        "id": "04-011",
        "text": "下列哪些是專案的授權（書面授權書）？（複選）",
        "options": {
            "A": "特殊的合約文件",
            "B": "客戶的訂購單",
            "C": "高階管理階層發出的內部交易備忘錄",
            "D": "RFP（Request for Proposal）"
        },
        "answer": [
            "A",
            "B",
            "C"
        ],
        "type": "checkbox"
    },
    {
        "id": "04-012",
        "text": "關於採購的原則，下列哪一項錯誤？",
        "options": {
            "A": "購買對象",
            "B": "購買數量與時期",
            "C": "主管同意",
            "D": "決定供應商"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "04-013",
        "text": "關於採購的方式，下列哪一項錯誤？",
        "options": {
            "A": "公開投標方式",
            "B": "集中採購方式",
            "C": "分散採購方式",
            "D": "購入品管理"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "04-014",
        "text": "採購的第一步驟是下列哪一項？",
        "options": {
            "A": "邀商（Request Seller Response）",
            "B": "需求規格（Specification）化",
            "C": "規劃採購管理（Plan Procurement Management）",
            "D": "進度查催"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "04-015",
        "text": "下列哪一項為執行品質保證（Perform Quality Assurance）的工具與技術（Tools and Techniques）？",
        "options": {
            "A": "統計抽樣",
            "B": "流程分析",
            "C": "柏拉圖（Pareto Diagram）",
            "D": "成本效益分析"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "04-016",
        "text": "參與競爭的廠商提出技術與商業的工程計畫書中，下列哪些是專案委託者應注意之事項？（複選）",
        "options": {
            "A": "合約書對專案的瞭解程度",
            "B": "合約商參與專案人員的水準如何",
            "C": "成本對照表是否清晰",
            "D": "合約商所建議的方案，其可行性如何"
        },
        "answer": [
            "A",
            "B",
            "D"
        ],
        "type": "checkbox"
    },
    {
        "id": "04-017",
        "text": "關於供應商管理的要點，下列哪一項錯誤？",
        "options": {
            "A": "各採購品須有兩家以上的供應商",
            "B": "交易對象以持久、穩定、忠實為主",
            "C": "交易對象，應事先進行市場調查",
            "D": "尋求潛在供應商"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "04-018",
        "text": "下列哪一項流程彼此互為投入（Input）？",
        "options": {
            "A": "起始（Initiating）與規劃（Planning）",
            "B": "規劃（Planning）與執行（Executing）",
            "C": "執行（Executing）與監視及控制（Monitoring and Controlling）",
            "D": "監視及控制（Monitoring and Controlling）與結束（Closing）"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "04-019",
        "text": "在執行採購（Conduct Procurements）中，有下列哪些投入（Input）？（複選）",
        "options": {
            "A": "組織流程資產（Organization Process Asset）",
            "B": "採購（Procurement）管理計畫",
            "C": "採購（Procurement）文件",
            "D": "專案品質（Quality）報告"
        },
        "answer": [
            "A",
            "B",
            "C"
        ],
        "type": "checkbox"
    },
    {
        "id": "04-020",
        "text": "評估標準（Evaluation Criteria）為評比與評分（Scoring）建議書的一種方法，是挑選賣方流程中的下列哪一項？",
        "options": {
            "A": "工具（Tools）",
            "B": "技巧（Skill）",
            "C": "策略（Strategy）",
            "D": "投入（Input）"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "04-021",
        "text": "關於管理專案團隊（Manage Project Team）常用的工具與技術（Tools and Techniques），下列哪一項錯誤？",
        "options": {
            "A": "角色（Role）扮演",
            "B": "觀察（Observation）與談話（Conversation）",
            "C": "專案績效評估（Project Performance Estimating）",
            "D": "衝突（Conflict）管理"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "04-022",
        "text": "當專案團隊（Project Team）成員有衝突時，除由專案經理（Project Manager）涉入協助解決問題外，下列哪一項是最適合的管理方法？",
        "options": {
            "A": "訴諸仲裁",
            "B": "協議庭裁決",
            "C": "私下處理",
            "D": "由當事人彼此溝通協調"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "04-023",
        "text": "在公告競標的佈告下，你被邀請投標並參加投標人會議，下列哪一項正確？",
        "options": {
            "A": "投標人會議是挑選賣方流程的工具與技術（Tools and Techniques）",
            "B": "投標人會議是挑選賣方流程的產出（Output）",
            "C": "投標人會議是請求賣方回應流程的工具與技術（Tools and Techniques）",
            "D": "投標人會議是請求賣方回應流程的產出（Output）"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "04-024",
        "text": "下列哪些是執行採購（Conduct Procurements）常用的工具與技術（Tools and Techniques）？（複選）",
        "options": {
            "A": "投標人（Bidder）會議",
            "B": "資訊系統",
            "C": "廣告（Advertisement）",
            "D": "分析技術"
        },
        "answer": [
            "A",
            "C",
            "D"
        ],
        "type": "checkbox"
    },
    {
        "id": "04-025",
        "text": "下列哪些是品質稽核（Quality Audits）的目的？（複選）",
        "options": {
            "A": "為了決定哪個專案流程無效率或無效果",
            "B": "為了檢視專案工作，及正式接受專案結果",
            "C": "為改進流程與降低品質成本（Cost of Quality, COQ）",
            "D": "為改進流程與增加產品或服務接受度的百分比"
        },
        "answer": [
            "A",
            "C",
            "D"
        ],
        "type": "checkbox"
    },
    {
        "id": "04-026",
        "text": "下列哪一項是專案的主要溝通橋樑？",
        "options": {
            "A": "專案經理（Project Manager）",
            "B": "執行長",
            "C": "業主（Owner）",
            "D": "承包商（Contractor）"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "04-027",
        "text": "一般專案執行過程中，執行品質保證（Perform Quality Assurance）的工具與技術（Tools and Techniques）有下列哪些？（複選）",
        "options": {
            "A": "成本確認",
            "B": "實獲值管理（Earned Value Management, EVM）",
            "C": "品質稽核（Quality Audits）",
            "D": "流程分析"
        },
        "answer": [
            "C",
            "D"
        ],
        "type": "checkbox"
    },
    {
        "id": "04-028",
        "text": "下列哪一項是品質稽核（Quality Audits）的目的？",
        "options": {
            "A": "是一種結構化且獨立的審查，以決定專案活動是否符合需求",
            "B": "是根據改善計畫所摘要的步驟，從專案團隊（Project Team）及組織的立場辨識需求的改善",
            "C": "涵蓋規劃、衡量與偵測過程的所有活動",
            "D": "通常不採用抽樣評估的方式"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "04-029",
        "text": "下列哪些是指導與管理專案執行（Direct and Manage Project Work）常用的工具與技術（Tools and Techniques）？（複選）",
        "options": {
            "A": "專案管理計畫",
            "B": "專家判斷（Expert Judgment）",
            "C": "專案管理資訊系統（Project Management Information System, PMIS）",
            "D": "範疇聲明（Scope Statement）"
        },
        "answer": [
            "B",
            "C"
        ],
        "type": "checkbox"
    },
    {
        "id": "04-030",
        "text": "關於品質保證（Quality Assurance）的產出（Output），下列哪一項錯誤？",
        "options": {
            "A": "工作分解結構（Work Breakdown Structure, WBS）",
            "B": "變更申請",
            "C": "組織流程資產（Organization Process Asset）更新",
            "D": "專案管理計畫書（Project Management Plan）更新"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "04-031",
        "text": "關於虛擬團隊（Virtual Team）的敘述，下列哪些正確？（複選）",
        "options": {
            "A": "不可以把行動不便的人納入虛擬團隊",
            "B": "不可以把在家辦公的員工納入虛擬團隊",
            "C": "可以實施本來由於差旅成本過高而被忽略的專案",
            "D": "可以組建一個在同一組織工作但工作地點十分分散的團隊"
        },
        "answer": [
            "C",
            "D"
        ],
        "type": "checkbox"
    },
    {
        "id": "04-032",
        "text": "你是一個跨國企業的專案經理（Project Manager），老闆剛分派一個新的專案給你，你發現完成此專案需有來自不同分公司的專業人員的支援，並且專案的預算不高，不足以支付這些人員的差旅費用，下列哪一項是你可以做的？",
        "options": {
            "A": "拒絕老闆",
            "B": "縮小專案範圍",
            "C": "組建虛擬團隊",
            "D": "邊做邊看"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "04-033",
        "text": "下列哪些是專案團隊（Project Team）發展的目的？（複選）",
        "options": {
            "A": "提高專案團隊（Project Team）成員的技能，以便提高其完成專案活動的能力",
            "B": "提高團隊成員之間的信任感和凝聚力，透過更多的團隊合作提高生產力",
            "C": "可讓老闆更信任專案經理（Project Manager）",
            "D": "可以縮小專案的範圍"
        },
        "answer": [
            "A",
            "B"
        ],
        "type": "checkbox"
    },
    {
        "id": "04-034",
        "text": "你是公司的專案經理（Project Manager），目前專案處在採購（Procurement）管理的詢價階段，下列哪一項是你應完成的工作？",
        "options": {
            "A": "制定工作分解結構（Work Breakdown Structure, WBS）",
            "B": "回答潛在賣方（Seller）的問題",
            "C": "合約結尾（Closing）",
            "D": "合約變更（Change）管理"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "04-035",
        "text": "下列哪些可以幫助發展專案團隊（Develop Project Team）？（複選）",
        "options": {
            "A": "訓練",
            "B": "集中作業",
            "C": "獎勵與表彰",
            "D": "使用專案式組織（Projectized Organization）架構"
        },
        "answer": [
            "A",
            "B",
            "C"
        ],
        "type": "checkbox"
    },
    {
        "id": "04-036",
        "text": "下列哪些屬於資訊發布的工具與技術（Tools and Techniques）？（複選）",
        "options": {
            "A": "溝通技能",
            "B": "資訊收集和檢索系統",
            "C": "資訊發布系統",
            "D": "經驗學習（Lessons Learned）總結過程"
        },
        "answer": [
            "A",
            "B",
            "C",
            "D"
        ],
        "type": "checkbox"
    },
    {
        "id": "04-037",
        "text": "專案管理的執行（Executing）階段，專案採購管理（Project Procurement Management）過程包含下列哪些？（複選）",
        "options": {
            "A": "規劃採購管理（Plan Procurement Management）",
            "B": "執行採購（Conduct Procurements）",
            "C": "結束採購（Close Procurements）",
            "D": "合約管理（Contract Management）"
        },
        "answer": [
            "A",
            "B",
            "C"
        ],
        "type": "checkbox"
    },
    {
        "id": "04-038",
        "text": "團隊的績效改進可以來自多個管道，而且可多方面地影響專案績效，下列哪些正確？（複選）",
        "options": {
            "A": "能力和情感方面的改進，從而促使團隊整體工作做得更好",
            "B": "技能的改進從而使某人更有效地完成所分派的任務",
            "C": "縮減專案的範圍",
            "D": "團隊成員流動性降低"
        },
        "answer": [
            "A",
            "B",
            "D"
        ],
        "type": "checkbox"
    },
    {
        "id": "04-039",
        "text": "下列哪些是執行採購（Conduct Procurements）的投入（Input）？（複選）",
        "options": {
            "A": "組織流程資產（Organization Process Asset）",
            "B": "採購管理計畫書",
            "C": "採購文件",
            "D": "專案範疇聲明書（Project Scope Statement）"
        },
        "answer": [
            "A",
            "B",
            "C"
        ],
        "type": "checkbox"
    },
    {
        "id": "04-040",
        "text": "投標人會議（又稱承包商會議、供應商會議和投標前會議），下列哪一項是該會議的目的？",
        "options": {
            "A": "確定專案範圍",
            "B": "認識潛在的賣方",
            "C": "尋找最便宜的賣方",
            "D": "保證所有潛在賣方對本項採購目的（技術要求、合約要求等）都有清楚的共同理解"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "04-041",
        "text": "你是公司的專案經理（Project Manager），因為公司內部一個新專案的專案經理（Project Manager）突然辭職，你被指派接手該專案，可是專案成員已經選擇完成。下列哪一項是你首先要了解的事項？",
        "options": {
            "A": "每個團隊成員的家庭背景",
            "B": "每個團隊成員的專案任務",
            "C": "每個團隊成員的經驗",
            "D": "每個團隊成員的專長"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "04-042",
        "text": "下列哪些是執行採購（Conduct Procurements）的工具與技術（Tools and Techniques）？（複選）",
        "options": {
            "A": "採購談判（Procurement Negotiations）",
            "B": "專家判斷（Expert Judgment）",
            "C": "建議書評估技術（Proposal Evaluation Techniques）",
            "D": "獨立評估（Independent Estimates）"
        },
        "answer": [
            "A",
            "B",
            "C",
            "D"
        ],
        "type": "checkbox"
    },
    {
        "id": "04-043",
        "text": "關於執行採購（Conduct Procurements）的成果，下列哪一項錯誤？",
        "options": {
            "A": "合約",
            "B": "專案管理計畫書（Project Management Plan）更新",
            "C": "選定賣方",
            "D": "最便宜的賣方"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "04-044",
        "text": "當專案經理（Project Manager）與專案團隊在「指導與管理專案執行（Direct and Manage Project Work）」時，最主要與最直接地會受到下列哪一項因素的影響？",
        "options": {
            "A": "專案管理知識（Project Management Knowledge）",
            "B": "應用領域（Application Area）",
            "C": "專案管理環境（Project Environment）",
            "D": "人際技術（Soft Skills）"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "04-045",
        "text": "你是新一代通訊技術研發專案的專案經理（Project Manager），為了讓這項專案能順利成功，公司已投了入5000萬資金，同時亦指派公司優秀的工程技術人員參與專案。目前該項專案管理計畫書（Project Management Plan）也已完成，緊接著是要指導與管理專案執行（Direct and Manage Project Work）的工作，下列哪一項工具與技術（Tools and Techniques）是身為專案經理（Project Manager）的你必須運用的？",
        "options": {
            "A": "專案管理方法論（Methodology）及專案管理資訊系統（Project Management Information System, PMIS）",
            "B": "專案管理方法論及工作授權（Authorization）系統",
            "C": "時程（Time）管理與預算管理技術",
            "D": "專案選擇方法與專家判斷（Expert Judgment）"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "04-046",
        "text": "下列哪一項是「指導與管理專案執行（Direct and Manage Project Work）」的產出（Output）？",
        "options": {
            "A": "交付標的（Deliverable）",
            "B": "專案成功準則（Project Success Criteria）",
            "C": "專案預算（Project Budget）",
            "D": "專案時程（Project Schedule）"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "04-047",
        "text": "下列哪一項紀錄了專案的品質目標，並用於衡量和報告品質績效？",
        "options": {
            "A": "實獲值管理（Earned Value Management, EVM）",
            "B": "品質基準（Quality Baseline）",
            "C": "里程碑（Milestone）",
            "D": "工作分解結構（Work Breakdown Structure, WBS）"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "04-048",
        "text": "你的專案已獲得公司的核准通過，同時完成專案管理計畫書（Project Management Plan），但公司並沒有足夠的人力可以支援你在專案的執行工作，你應該採取下列哪一項行動才能夠滿足你在人力管理上的需要？",
        "options": {
            "A": "人力資源規劃（Human Resources Planning）",
            "B": "獲得專案團隊（Acquire Project Team）",
            "C": "發展專案團隊（Develop Project Team）",
            "D": "管理專案團隊（Manage Project Team）"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "04-049",
        "text": "關於專案來說，暫時性意味著下列哪一項？",
        "options": {
            "A": "專案期程（Duration）短",
            "B": "每一個專案都有確定的開始和結束時間",
            "C": "任務將在未來某個不確定的時間結束",
            "D": "專案可在任何時候被取消"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "04-050",
        "text": "企業環境因素（Enterprise Environment Factors）不包括下列哪一項？",
        "options": {
            "A": "組織公司文化",
            "B": "基礎設施與生產設備",
            "C": "現有人力資源與人事管理",
            "D": "專案管理計畫書（Project Management Plan）範本（Template）"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "04-051",
        "text": "為確定及協助專案管理團隊能按照專案管理計畫進行監督與控制，可以使用的方法，下列哪一項不適用？",
        "options": {
            "A": "專案管理方法論（Methodology）",
            "B": "專案管理資訊系統（Project Management Information System, PMIS）",
            "C": "實獲值管理（Earned Value Management, EVM）",
            "D": "專案定期會議"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "04-052",
        "text": "獲得專案團隊（Acquire Project Team）最主要的目的，為下列哪一項？",
        "options": {
            "A": "完成專案管理計畫書（Project Management Plan）並執行實施",
            "B": "獲取完成專案工作所需的人力資源",
            "C": "集中團隊成員予以教育及訓練",
            "D": "分配專案工作，以便按計畫實現專案績效"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "04-053",
        "text": "你是力創軟體科技公司的專案經理（Project Manager），目前正負責一項軟體開發專案的執行。你的專案目前進行得並不順利，不僅成本超支、進度落後，專案品質也未盡理想。此時專案團隊（Project Team）的士氣有些低落，團隊成員互相推諉責任進而產生衝突，身為專案經理（Project Manager），你要採取下列哪一項方式來解決衝突較佳？",
        "options": {
            "A": "面對問題，解決造成衝突的因素",
            "B": "為了團隊合作，協調團隊成員各退一步",
            "C": "為了趕上專案進度，嚴格要求團隊成員遵守新規定",
            "D": "面對這種衝突，可採取解散舊團隊，重新再組一個新團隊"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "04-054",
        "text": "專案溝通的方法有很多，下列哪一項方式「不是」屬於正式的口頭溝通？",
        "options": {
            "A": "會議",
            "B": "演講",
            "C": "講座",
            "D": "會談"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "04-055",
        "text": "將團隊成員安排在同一地點工作，以提高專案團隊（Project Team）的整體工作能力，此種方法是發展專案團隊（Develop Project Team）的有效工具與技術（Tools and Techniques），它指的是下列哪一項活動？",
        "options": {
            "A": "培訓（Training）",
            "B": "教育（Education）",
            "C": "集中作業（Colocation）",
            "D": "團隊競賽（Competition）"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "04-056",
        "text": "在發展專案團隊（Develop Project Team）時會有一產出物為資源日曆，試問該資源日曆若建立的不完善將會對下列哪一項造成影響？",
        "options": {
            "A": "專案任務時程的估算",
            "B": "專案成本的預算",
            "C": "對任務資源分派的估算",
            "D": "對事業環境因素造成損失"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "04-057",
        "text": "下列哪一項是專案合約中提供產品或服務的敘述說明文件？",
        "options": {
            "A": "專案管理計畫書（Project Management Plan）",
            "B": "權利與義務",
            "C": "工作說明書（Statement of Work, SOW）",
            "D": "專案章程（Project Charter）"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "04-058",
        "text": "在進行專案採購管理（Project Procurement Management）時，下列哪一項是屬於執行（Executing）流程群組（Process Groups）的管理程序？",
        "options": {
            "A": "規劃採購管理（Plan Procurement Management）",
            "B": "發包（Contract-Out）規劃",
            "C": "執行採購（Conduct Procurements）",
            "D": "履約管理"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "04-059",
        "text": "關於三種主要的溝通方式，下列哪一項正確？",
        "options": {
            "A": "書面（Written Form）、口頭（Verbal）、視訊（Video）",
            "B": "書面（Written Form）、口頭（Verbal）、非口頭（Non-verbal）",
            "C": "口頭（Verbal）、非口頭（Non-verbal）、電子化（Digitized）",
            "D": "口頭（Verbal）、非口頭（Non-verbal）、圖像式（Graphical）"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "04-060",
        "text": "下列哪一項「不是」工作說明書（Statement of Work, SOW）中會提及之事項？",
        "options": {
            "A": "專案範疇（Project Scope）",
            "B": "任務概要",
            "C": "專案團隊（Project Team）要執行的項目",
            "D": "團隊競賽規則"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "04-061",
        "text": "關於工作說明書（Statement of Work, SOW）的敘述，下列哪一項正確？",
        "options": {
            "A": "是對應專案所提供產品、服務或結果的文字說明",
            "B": "是專案團隊（Project Team）的職務說明書",
            "C": "是專案經理（Project Manager）的職務說明書",
            "D": "是專案發起人對專案經理（Project Manager）的任務授權書"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "04-062",
        "text": "下列哪一項工作不在專案執行流程（Executing Processes）中？",
        "options": {
            "A": "依據專案基準（Project Baseline）評估績效差異",
            "B": "依據專案計畫書採購相關物資",
            "C": "依據專案計畫書進行溝通及協調",
            "D": "依據專案計畫書整合相關資源"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "04-063",
        "text": "專案中某項工作浮時（Float）=–5時，下列哪一項處置是最適宜的方式？",
        "options": {
            "A": "使用資源撫平（Resource Leveling）技術",
            "B": "立即採用新的技術",
            "C": "當風險增高時再處置",
            "D": "對此工作項目投入（Input）更多資源"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "04-064",
        "text": "某項工作完成時間估計：最悲觀時間9日、最樂觀時間5日、最可能時間7日，依據計畫評核術（Program Evaluation and Review Technique, PERT）計算期望平均時間為下列哪一項？",
        "options": {
            "A": "5.5日",
            "B": "6.0日",
            "C": "7.0日",
            "D": "7.5日"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "04-065",
        "text": "某項工作完成時間估計：最悲觀時間12日、最樂觀時間6日、最可能時間9日，依據計畫評核術（Program Evaluation and Review Technique, PERT）計算，本項工作預估完成機率95.5%時，其時間範圍是下列哪一項？",
        "options": {
            "A": "7.0±1.33日",
            "B": "7.5±0.67日",
            "C": "8.0±1.0日",
            "D": "9.0±2.0日"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "04-066",
        "text": "專案被迫實施資源分派（Resource Allocation）作業時，此意謂遭遇下列哪一項狀況？",
        "options": {
            "A": "時程可能縮短",
            "B": "人力、資源需求過度集中在某階段",
            "C": "人力、資源需求分布保持平穩狀況",
            "D": "調整活動時程，將部分活動集中在某階段"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "04-067",
        "text": "某專案實施資源撫平（Resource Leveling）作業時，下列哪一項選項「不是」正確的作為？",
        "options": {
            "A": "專案時程（Project Schedule）可能延長",
            "B": "將人力、資源需求分布保持平穩狀況",
            "C": "調整活動時程，將相關者集中在某個區段中",
            "D": "調整活動時程，將部分活動提前或延後"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "04-068",
        "text": "關於專案執行品質保證（Perform Quality Assurance）的工作中，下列哪一項的投入（Input）錯誤？",
        "options": {
            "A": "流程改善計畫書（Process Improvement Plan）",
            "B": "組織流程資產（Organizational Process Assets）",
            "C": "專案文件（Project Documents）",
            "D": "品質管理計畫書（Quality Management Plan）"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "04-069",
        "text": "專案團隊（Project Team）溝通時，對於「績效報告（Performance Report）」之類的資訊需求，是下列哪一方的利害關係人（Stakeholder）所關切？",
        "options": {
            "A": "專案贊助者（Project Sponsor）、專案經理（Project Manager）",
            "B": "專案經理（Project Manager）、專案團隊",
            "C": "專案贊助者（Project Sponsor）、顧客",
            "D": "專案經理（Project Manager）、決策階層"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "04-070",
        "text": "規劃中的軟體開發專案團隊（Project Team）中，臺灣7位成員，印度5位成員，美國矽谷2位成員，但後續會陸續加入成員達21位，請問後續將增加多少溝通管道，下列哪一項正確？",
        "options": {
            "A": "91",
            "B": "210",
            "C": "21",
            "D": "119"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "04-071",
        "text": "專案執行時除總公司原有15位成員外，三個分公司共增加10位成員、二處海外分公司增加12位成員，身為專案經理（Project Manager）首先應該重視下列哪一項狀況的發生？",
        "options": {
            "A": "不同地區分公司間文化的差異",
            "B": "文化的差異及衝突，可能增加溝通協調的困難度",
            "C": "專案資訊的蒐集、彙整、發布及傳達時效不佳",
            "D": "如何因應溝通管道急遽增加所產生之問題現象"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "04-072",
        "text": "專案經理（Project Manager）注意到秘書人員提報執行現況資料成本績效指標（Cost Performance Index, CPI）CPI=1.18時，下列哪一項正確？",
        "options": {
            "A": "代表進度落後18%",
            "B": "代表成本落後118%",
            "C": "代表成本執行績效良好",
            "D": "代表進度執行績效良好"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "04-073",
        "text": "一般而言，專案經理（Project Manager）耗費相當多的時間在溝通工作上，關於專案溝通工作的敘述，下列哪一項組合正確？（1）專案經理（Project Manager）要有溝通技能（2）專案經理（Project Manager）10%時間花在溝通（3）溝通管理計畫是必要的（4）最佳的溝通工具（Tools）是專案範疇聲明書（Project Scope Statement）（5）溝通方式包括書面及口頭（6）E-mail、備忘錄屬於正式溝通文件（7）電話是最佳的溝通工具（Tools）",
        "options": {
            "A": "（1）（2）（3）（7）",
            "B": "（3）（4）（5）（7）",
            "C": "（1）（3）（5）",
            "D": "（3）（5）（6）"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "04-074",
        "text": "你是專案經理（Project Manager），專案執行中對於商源進行分析時，突然發現某項零件僅有單一商源供應，此零件又是專案產品的關鍵零件，身為專案經理（Project Manager）此時應優先關注的是下列哪一項事情？",
        "options": {
            "A": "供應商承諾回應",
            "B": "供應商合約內容",
            "C": "供應商財務狀況",
            "D": "供應商品質保證"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "04-075",
        "text": "關於指導與管理專案執行（Direct and Manage Project Work）的敘述，下列哪一項錯誤？",
        "options": {
            "A": "其目的是要去規劃（Planning）專案計畫，以便讓專案可以順利完成",
            "B": "工作經授權（Authorization）後開始，且活動（Activity）也開始進行",
            "C": "資源於這個階段投入（Input），並實行受指派的活動，以產生專案產品或服務",
            "D": "資金花費下去，以完成專案目的"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "04-076",
        "text": "關於指導與管理專案執行（Direct and Manage Project Work）的投入（Input），下列哪一項錯誤？",
        "options": {
            "A": "專案管理計畫",
            "B": "驗證過的缺失修復（Defect Repair）",
            "C": "行政結案（Administrative Closure）程序",
            "D": "工作績效資訊"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "04-077",
        "text": "關於指導與管理專案執行（Direct and Manage Project Work）的產出（Output），下列哪一項錯誤？",
        "options": {
            "A": "專案管理計畫",
            "B": "交付標的（Deliverable）",
            "C": "實施的缺失瑕疵修復",
            "D": "請求變更"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "04-078",
        "text": "工作績效資訊和蒐集、製成文件與記錄專案活動狀況有關，在此流程期間可能蒐集到的資訊有下列哪些？（複選）",
        "options": {
            "A": "時程狀況與進展",
            "B": "交付標的（Deliverable）完成狀況",
            "C": "時程活動的進展與狀態",
            "D": "時程活動完成百分比"
        },
        "answer": [
            "A",
            "B",
            "C",
            "D"
        ],
        "type": "checkbox"
    },
    {
        "id": "04-079",
        "text": "關於執行品質保證（Perform Quality Assurance）的產出（Output），下列哪一項錯誤？",
        "options": {
            "A": "請求變更（Change Requests）",
            "B": "建議的矯正行動",
            "C": "組織流程資產（Organizational Process Assets）更新",
            "D": "品質管理計畫"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "04-080",
        "text": "關於品質稽核（Quality Audits）的效益，下列哪一項錯誤？",
        "options": {
            "A": "專案產品適用，且符合安全標準",
            "B": "必要時會建議與實施矯正行動",
            "C": "檢視專案工作及正式接受專案結果",
            "D": "遵守專案品質計畫"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "04-081",
        "text": "下列哪一項階段的工作是在考慮潛在團隊成員的個人興趣、特質，以及可利用時間等要件？",
        "options": {
            "A": "「發展專案團隊（Develop Project Team）」流程的組織流程資產（Organization Process Asset）階段",
            "B": "「發展專案團隊（Develop Project Team）」流程的人員管理計畫階段",
            "C": "「獲得專案團隊（Acquire Project Team）」流程的企業環境因素（Enterprise Environmental Factors）階段",
            "D": "「獲得專案團隊（Acquire Project Team）」流程的角色（Role）與責任階段"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "04-082",
        "text": "下列哪一項階段是團隊展現出彼此的感情與熟悉，並共同做決策？",
        "options": {
            "A": "發展專案團隊（Develop Project Team）的安撫（Smoothing）階段",
            "B": "發展專案團隊（Develop Project Team）的正軌（Norming）階段",
            "C": "發展專案團隊（Develop Project Team）的組建（Forming）階段",
            "D": "發展專案團隊（Develop Project Team）的強迫（Forcing）階段"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "04-083",
        "text": "當專案還在持續的進行中，此時若有新成員的加入，下列哪一項敘述正確？",
        "options": {
            "A": "團隊將回到動盪（Unstable）階段",
            "B": "團隊將可以更鞏固（Consolidate）執行力階段",
            "C": "團隊將再度從組建（Forming）階段重新開始",
            "D": "團隊將從正軌（Norming）階段開始"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "04-084",
        "text": "下列哪一項權力（Power）是指對領導者的高度尊敬，致使屬下願意執行專案經理（Project Manager）所做的決策？",
        "options": {
            "A": "領袖權力（Referent Power）",
            "B": "專家權力（Expert Power）",
            "C": "合法權力（Legitimate Power）",
            "D": "獎勵權力（Reward Power）"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "04-085",
        "text": "下列哪些是有效團隊的特性？（複選）",
        "options": {
            "A": "更好的衝突解決",
            "B": "高職務滿意度",
            "C": "溝通不良",
            "D": "對專案經理（Project Manager）缺乏尊敬與信任"
        },
        "answer": [
            "A",
            "B"
        ],
        "type": "checkbox"
    },
    {
        "id": "04-086",
        "text": "在溝通模式中，接收者會透過下列哪些因素過濾他們的資訊？（複選）",
        "options": {
            "A": "文化考量",
            "B": "情感",
            "C": "態度",
            "D": "衝突"
        },
        "answer": [
            "A",
            "B",
            "C"
        ],
        "type": "checkbox"
    },
    {
        "id": "04-087",
        "text": "溝通是交換資訊的過程，所有溝通都包含下列哪些要件？（複選）",
        "options": {
            "A": "發送者",
            "B": "訊息",
            "C": "接收者",
            "D": "地點"
        },
        "answer": [
            "A",
            "B",
            "C"
        ],
        "type": "checkbox"
    },
    {
        "id": "04-088",
        "text": "當專案成員彼此意見不合而起了衝突，這時專案經理（Project Manager）應該進行下列哪一項處理？",
        "options": {
            "A": "安撫（Smoothing）",
            "B": "正軌（Norming）",
            "C": "面對（Confronting）",
            "D": "強迫（Forcing）"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "04-089",
        "text": "執行採購流程與獲得潛在供應商（Supplier）的出價回應和建議書有關，此流程的投入（Input）下列哪一項錯誤？",
        "options": {
            "A": "組織流程資產（Organization Process Asset）",
            "B": "採購管理計畫書",
            "C": "採購文件",
            "D": "合格賣方清單（Qualified Sellers List）"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "04-090",
        "text": "下列哪一項執行採購（Conduct Procurements）的技巧是被用來檢查建議定價的一種方法？",
        "options": {
            "A": "加權評估系統（Weighting System）",
            "B": "獨立估價（Independent Evaluation）",
            "C": "篩選系統",
            "D": "賣方評比系統"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "04-091",
        "text": "管理利害關係人參與（Manage Stakeholder Engagement）的工具（Tools）中，下列哪一項錯誤？",
        "options": {
            "A": "溝通方法",
            "B": "專家判斷（Expert Judgment）",
            "C": "人際關係技巧",
            "D": "管理技巧"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "04-092",
        "text": "在專案的生命中，專案會經歷幾個階段，起始（Initiating）、規劃（Planning）、執行（Executing）、監視及控制（Monitoring and Controlling）、結束（Closing）。下列哪一項階段將會產生最大的預算花費？",
        "options": {
            "A": "執行（Executing）",
            "B": "起始（Initiating）",
            "C": "結束（Closing）",
            "D": "規劃（Planning）"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "04-093",
        "text": "專案經理（Project Manager）在選擇團隊成員時，他收集可能成員的履歷與過去績效評核，也與相關的功能經理（Functional Manager）討論。專案經理（Project Manager）選擇成員時使用的特性，下列哪一項錯誤？",
        "options": {
            "A": "以前經驗",
            "B": "個人特質",
            "C": "個人興趣",
            "D": "薪資"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "04-094",
        "text": "當專案在執行（Executing）中，有團隊成員發生醫療保險賠償問題時，該成員向專案經理（Project Manager）報告並且說明。這件賠償問題應由下列哪一項負責？",
        "options": {
            "A": "專案團隊（Project Team）",
            "B": "專案經理（Project Manager）",
            "C": "執行經理（Executing Manager）",
            "D": "人力資源辦公室（Human Resources Office）"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "04-095",
        "text": "團隊為了一個困難的設計問題，而發生了爭執。專案經理（Project Manager）尋找一個可以解決該爭執的方法，為確保專案能長期有效地執行，下列哪一項最適合？",
        "options": {
            "A": "問題解決（Confronting）",
            "B": "妥協（Compromising）",
            "C": "退卻（Withdrawal）",
            "D": "安撫（Smoothing）"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "04-096",
        "text": "聆聽（Listening）技巧是除了聽聲音之外，好的聆聽者的特質為下列哪一項？",
        "options": {
            "A": "全盤否認",
            "B": "做好的紀錄",
            "C": "重複一些對方已講的事情",
            "D": "同意對方的敘述"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "04-097",
        "text": "一間汽車機油更換工作站接到有關服務時間太長的抱怨，當在等候室裝設了咖啡機與電視後，抱怨減少了。這樣的處理方式是屬於下列哪一項？",
        "options": {
            "A": "Smith-Carlisle方法",
            "B": "創造性（Creative）的問題解決",
            "C": "分析性（Analyzing）的問題解決",
            "D": "決策樹（Decision Tree）"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "04-098",
        "text": "專案經理（Project Manager）正在關心如何建立他的團隊，有一件必需做（Mandatory）的事情是建立好團隊的重點之一，應為下列哪一項？",
        "options": {
            "A": "高階（High-Level）管理層的承諾（Commitment）",
            "B": "團隊集中辦公（Co-Location）",
            "C": "建立明確的談判（Negotiated）目標",
            "D": "公開討論差勁的個人績效（Performance）"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "04-099",
        "text": "專案經理（Project Manager）希望加強團隊工作的凝聚力，下列哪一項是最有效果的方法？",
        "options": {
            "A": "同住在一起（Cohabitation）",
            "B": "集中作業",
            "C": "招募職員（Recruiting Staff）計畫",
            "D": "工作分解結構（Work Breakdown Structure, WBS）"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "04-100",
        "text": "專案經理（Project Manager）希望安排會議來討論問題的解決方法，但不依據他個人或單獨一位成員的意見。通常這樣的安排會產生下列哪一項結果？",
        "options": {
            "A": "與單一個人的意見相比，會議需要較多的時間解決問題",
            "B": "會議的解決方法比較不精確",
            "C": "與單一個人的意見相比，會議需要較少的時間解決問題",
            "D": "很難說，需要依據問題的特性"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "04-101",
        "text": "專案經理（Project Manager）希望盡力發展他的團隊，下列哪一項是關鍵障礙？",
        "options": {
            "A": "強矩陣（Strong Matrix）管理組織",
            "B": "主要的問題是專案完成時間的延遲或預算目標",
            "C": "團隊成員需同時向功能經理（Functional Manager）與專案經理（Project Manager）負責",
            "D": "正式訓練計畫無法實施"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "04-102",
        "text": "專案經理（Project Manager）希望一些團隊成員能夠在職訓練，專案團隊在一個平衡矩陣（Balanced Matrix）組織，通常這個訓練需要下列哪一項的認可？",
        "options": {
            "A": "專案經理（Project Manager）",
            "B": "執行經理（Executing Manager）",
            "C": "人力資源經理（Human Resources Manager）",
            "D": "功能經理（Functional Manager）"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "04-103",
        "text": "功能經理（Functional Manager）希望能加強控制專案的批准（Sanctification）程序，他啟動了一個系統，需要透過文件的授權開始進行特定活動（Activity）或工作包（Work Package）的工作，這個系統稱為下列哪一項？",
        "options": {
            "A": "專案章程（Project Charter）",
            "B": "團隊核准證明（Project Team Charter）",
            "C": "工作授權（Authorization）系統",
            "D": "變更管理"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "04-104",
        "text": "在矩陣式組織（Matrix Organization）中，溝通是非常困難的。下列哪一項能協助專案經理（Project Manager）較容易與其他團員溝通？",
        "options": {
            "A": "甘特圖（Gantt Chart）",
            "B": "專案章程（Project Charter）",
            "C": "專案團隊名錄（Project Team Directory）",
            "D": "職員配備（Staffing）計畫"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "04-105",
        "text": "專案經理（Project Manager）發現部分的專案具有風險，於是將這些風險部分以固定價格合約外包給供應商。下列哪一項是專案經理（Project Manager）必須做的事情？",
        "options": {
            "A": "確認專案團隊（Project Team）沒有將風險的事情透露給供應商，除非合約已經簽署了",
            "B": "當簽約完成後，專案經理（Project Manager）需要想盡辦法讓供應商瞭解這些風險",
            "C": "在簽約完成之前，專案經理（Project Manager）需要確認供應商瞭解這些風險",
            "D": "專案經理（Project Manager）需要派遣一位專案成員去監督供應商的活動，以確認能適當地處理風險"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "04-106",
        "text": "專案經理（Project Manager）用損益平衡點（Break Even Point）來辯護其專案，包括要購買的新機器之辯護。當專案經理（Project Manager）採用這種方法時，購買新機器會有下列哪一項風險？",
        "options": {
            "A": "損益平衡點會指向買便宜與低品質的機器",
            "B": "損益平衡點會指向買昂貴的機器",
            "C": "公司不會有錢購買新機器",
            "D": "因為這種辯護方法耗費太多時間，所以無法及時購買"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "04-107",
        "text": "關於專案品質保證（Project Quality Assurance）的敘述，下列哪一項正確？",
        "options": {
            "A": "確保專案實施滿足需求的所有必須過程",
            "B": "經由專案績效評量，提供標準予專案團隊（Project Team）與利害關係人（Stakeholder）",
            "C": "是一種管理過程，定義組織、設計、資源與品質管理目標",
            "D": "提供專案信心去滿足相關的品質標準"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "04-108",
        "text": "專案經理（Project Manager）發現部分的專案具有風險，於是將這些風險部分以固定價格合約外包（Outsource）給供應商（Supplier）。下列哪一項正確？",
        "options": {
            "A": "在合約價格中，供應商將需要風險補貼",
            "B": "依據合約，供應商將賠本",
            "C": "若風險發生，專案經理（Project Manager）將會補貼供應商",
            "D": "若風險發生，專案經理（Project Manager）的團隊將會協助供應商"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "04-109",
        "text": "假設你已獲得專案範疇聲明書（Project Scope Statement）的簽署認可，利害關係人（Stakeholder）卻通知你範圍聲明中漏了一項交付標的（Deliverable），因其為關鍵成功要素，你該採取下列哪一項行動？",
        "options": {
            "A": "通知利害關係人（Stakeholder）不在範圍聲明中的工作不屬於專案範圍",
            "B": "更正範圍聲明以反應此交付標的（Deliverable）",
            "C": "通知利害關係人（Stakeholder）此交付標的（Deliverable）移至下一次專案",
            "D": "在收到利害關係人（Stakeholder）核准後的變更要求後即更正範圍聲明"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "04-110",
        "text": "關於專案計畫執行（Executing）流程群組（Process Groups）常用的工具與技術（Tools and Techniques），下列哪一項錯誤？",
        "options": {
            "A": "專案管理資訊系統（Project Management Information System, PMIS）",
            "B": "工作授權（Authorization）系統",
            "C": "組織政策（Organization Policy）",
            "D": "溝通管理技巧"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "04-111",
        "text": "你是有線電視公司的專案經理（Project Manager），你的團隊成員彼此相處融洽，並共同研擬專案政策，試問他們目前所處的階段為下列哪一項？",
        "options": {
            "A": "安撫（Smoothing）階段",
            "B": "風采（Performing）階段",
            "C": "組建（Forming）階段",
            "D": "強制（Forcing）階段"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "04-112",
        "text": "你是有線電視公司的專案經理（Project Manager），你的團隊目前處在表現階段，但目前有位新成員被引介到團隊裡，下列對於團隊發展（Development）的敘述哪一項正確？",
        "options": {
            "A": "會從風暴（Storming）階段重新來過",
            "B": "會持續處在風采（Performing）階段",
            "C": "會從組建（Forming）階段重新來過",
            "D": "會從風暴（Storming）階段重新來過，但很快會進入風采（Performing）階段"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "04-113",
        "text": "發展專案團隊（Develop Project Team）的產出（Output）為下列哪一項？",
        "options": {
            "A": "團隊績效評估（Team Performance Assessment）",
            "B": "績效評鑑的投入（Input）與表揚獎勵系統",
            "C": "績效改善、績效評鑑的投入（Input）與績效報告（Performance Report）",
            "D": "工作成果、績效評鑑的投入（Input）與績效報告（Performance Report）"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "04-114",
        "text": "假設專案團隊（Project Team）成員共計七人，他們彼此有幾個溝通管道，下列哪一項正確？",
        "options": {
            "A": "24",
            "B": "21",
            "C": "28",
            "D": "20"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "04-115",
        "text": "關於Y理論，下列哪些正確？（複選）",
        "options": {
            "A": "人只能用金錢、權力、地位來鼓勵",
            "B": "人需給予適度的激勵和期望",
            "C": "人被預期是勤奮且自動自發的",
            "D": "經理常需嚴格地監控部屬去履行職責"
        },
        "answer": [
            "B",
            "C"
        ],
        "type": "checkbox"
    },
    {
        "id": "04-116",
        "text": "關於X理論，下列哪些正確？（複選）",
        "options": {
            "A": "人不需要被持續監督",
            "B": "人沒有能力自主管理",
            "C": "人被預期是勤奮且自動自發的",
            "D": "經理常需嚴格地監控部屬去履行職責"
        },
        "answer": [
            "B",
            "D"
        ],
        "type": "checkbox"
    },
    {
        "id": "04-117",
        "text": "專案經理（Project Manager）為了確保客戶及利害關係人（Stakeholder）的滿意度，最重要的活動為下列哪一項？",
        "options": {
            "A": "記錄需求",
            "B": "記錄績效評量",
            "C": "報告變更及更新專案計畫",
            "D": "按時規律的報告專案情況"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "04-118",
        "text": "合約管理（Contract Administration）的工具與技術（Tools and Techniques）為下列哪一項？",
        "options": {
            "A": "合約改變控制（Change Control）系統、付款（Payment）系統與付款請求（Request）",
            "B": "合約改變控制系統、合約協商（Negotiation）與付款系統",
            "C": "合約改變控制系統、合約協商與合約變更（Change）",
            "D": "合約改變控制系統、績效報告（Performance Report）與付款系統"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "04-119",
        "text": "關於績效報告（Performance Report）常用的工具與技術（Tools and Techniques），下列哪一項錯誤？",
        "options": {
            "A": "變異分析（Variance Analysis）",
            "B": "績效報告（Performance Report）",
            "C": "資訊散布（Information Distribution）",
            "D": "績效評估（Performance Evaluation）"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "04-120",
        "text": "下列哪一位學者認為85%的品質成本（Cost of Quality, COQ），皆由管理問題所造成的？",
        "options": {
            "A": "Deming",
            "B": "Kaizen",
            "C": "Juran",
            "D": "Crosby"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "04-121",
        "text": "Crosby及Juran分別提出下列哪一項品質理論？",
        "options": {
            "A": "品質等級、適合使用（Fitness for Use）",
            "B": "適合使用（Fitness for Use）、零缺陷（Zero Defect）",
            "C": "零缺陷（Zero Defect）、適合使用（Fitness for Use）",
            "D": "品質成本（Cost of Quality, COQ）、零缺陷（Zero Defect）"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "04-122",
        "text": "品質稽核（Quality Audits）的目的，不包括下列哪一項？",
        "options": {
            "A": "檢查專案工作並正式接受工作成果",
            "B": "決定專案如何進行與更正錯誤",
            "C": "確認學習經驗",
            "D": "審查品質活動"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "04-123",
        "text": "在資訊系統發展專案期間，下列哪一項是不會改變的原因？",
        "options": {
            "A": "變更界面",
            "B": "變更報告內容",
            "C": "變更資料庫結構",
            "D": "變更成本"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "04-124",
        "text": "在一次專案會議中，該團隊成員對於A與B兩種解決方案爭論不休，身為資深專案經理（Project Manager）的你，了解如此爭吵下去不會有任何的結論，所以你決定使用A的解決方案，下列哪一項是你解決這次衝突的方法？",
        "options": {
            "A": "安撫（Smoothing）",
            "B": "妥協（Compromise）",
            "C": "強制（Forcing）",
            "D": "擱置（Withdrawal）"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "04-125",
        "text": "下列哪些是管理利害關係人參與（Manage Stakeholder Engagement）常用的工具與技術（Tools and Techniques）？（複選）",
        "options": {
            "A": "溝通方法",
            "B": "人際關係技能",
            "C": "人力資源規劃（Human Resources Planning）",
            "D": "專案管理資訊系統（Project Management Information System, PMIS）"
        },
        "answer": [
            "A",
            "B"
        ],
        "type": "checkbox"
    },
    {
        "id": "04-126",
        "text": "管理專案團隊（Manage Project Team）和追蹤與報告個別團隊成員績效有關，下列哪一項「不是」這個流程的投入（Input）？",
        "options": {
            "A": "專案管理計畫變更",
            "B": "組織流程資產（Organization Process Asset）",
            "C": "團隊績效評估",
            "D": "專案人力派遣"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "04-127",
        "text": "關於管理專案團隊（Manage Project Team）常用的工具與技術（Tools and Techniques），下列哪一項錯誤？",
        "options": {
            "A": "觀察與談話",
            "B": "衝突管理",
            "C": "人際關係技能",
            "D": "專案人員指派"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "04-128",
        "text": "在專案進行的過程中，必須將專案的進度分送相關的利害關係人（Stakeholder），下列哪一項屬於利害關係人（Stakeholders）需要的報告？",
        "options": {
            "A": "利害關係人（Stakeholder）可以藉此去評審專案的績效",
            "B": "小型專案不適用此類報告",
            "C": "需要實獲值（Earned Value）的內容",
            "D": "必須由專案經理（Project Manager）產生的報告"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "04-129",
        "text": "若您的專案團隊（Project Team）成員有部分來自國外，為確保文化差異不會成為影響專案成功與否的因素，下列哪一項正確？",
        "options": {
            "A": "提供多元化的訓練",
            "B": "讓團隊成員共處一地",
            "C": "實施團隊練習",
            "D": "將組織規定及標準告知團隊成員"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "04-130",
        "text": "在專案進行中有時為了專案的獨特性聘請臨時性的專案成員，專案經理（Project Manager）可透過下列哪些方式縮短彼此間的磨合，以讓專案順利進行？（複選）",
        "options": {
            "A": "電子郵件",
            "B": "定期會議",
            "C": "即時通訊軟體",
            "D": "紙條敘述"
        },
        "answer": [
            "A",
            "B",
            "C"
        ],
        "type": "checkbox"
    },
    {
        "id": "05-001",
        "text": "下列哪一項指的是工作結果的滿意度確認？",
        "options": {
            "A": "控制品質（Control Quality）",
            "B": "確認範疇（Validate Scope）",
            "C": "控制成本（Control Costs）",
            "D": "控制風險（Control Risks）"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "05-002",
        "text": "關於專案監視及控制（Monitoring and Controlling）中，確認範疇（Validate Scope）的投入（Input），下列哪一項錯誤？",
        "options": {
            "A": "工作分解結構（Work Breakdown Structure, WBS）辭典",
            "B": "交付標的（Deliverable）",
            "C": "工作包（Work Package）",
            "D": "範疇聲明（Scope Statement）"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "05-003",
        "text": "關於控制時程（Control Schedule），需包含下列哪些步驟？（複選）",
        "options": {
            "A": "分析時程以決定是否採行校正行動",
            "B": "決定所要採行的特定校正行動",
            "C": "修正計畫並併入校正行動中",
            "D": "重新計算成本以評估校正行動的效能"
        },
        "answer": [
            "A",
            "B",
            "C",
            "D"
        ],
        "type": "checkbox"
    },
    {
        "id": "05-004",
        "text": "關於專案監視及控制（Monitoring and Controlling）流程群組（Process Groups）包括之程序，下列哪一項錯誤？",
        "options": {
            "A": "定期收集資料",
            "B": "實際執行與計畫互做比較",
            "C": "落後進度時採取校正行動",
            "D": "比較工具軟體"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "05-005",
        "text": "下列哪一項是較佳之專案報告週期？",
        "options": {
            "A": "較短的報告週期",
            "B": "較長的報告週期",
            "C": "中程的報告週期",
            "D": "有需要才報告"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "05-006",
        "text": "下列哪一項不會影響專案時程（Project Schedule）？",
        "options": {
            "A": "顧客在專案早期提出的改變",
            "B": "專案團隊（Project Team）在專案早期提出的改變",
            "C": "無法預料的情況",
            "D": "軟體變更"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "05-007",
        "text": "關於控制時程（Control Schedule）的步驟，下列哪一項錯誤？",
        "options": {
            "A": "分析時程以決定是否採行校正行動",
            "B": "修正計畫並併入校正行動中",
            "C": "更換專案團隊（Project Team）",
            "D": "重新計算時程以評估校正行動的效能"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "05-008",
        "text": "關於控制成本（Control Costs）的項目，下列哪一項錯誤？",
        "options": {
            "A": "分析成本績效，以決定工作包（Work Package）是否要採取校正行動",
            "B": "更換軟體",
            "C": "決定所要採取的特定校正行動",
            "D": "變更專案計畫"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "05-009",
        "text": "在專案的執行過程中常遭遇到範疇潛變（Scope Creep），所以下列哪一項最為重要？",
        "options": {
            "A": "確認（Validate）與控制（Control）範疇",
            "B": "規劃範疇管理（Plan Scope Management）",
            "C": "控制時程（Control Schedule）",
            "D": "控制成本（Control Costs）"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "05-010",
        "text": "實獲值管理（Earned Value Management, EVM）發展起源於下列哪一項？",
        "options": {
            "A": "美國空軍",
            "B": "美國海軍",
            "C": "美國國防部",
            "D": "美國太空總署"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "05-011",
        "text": "實獲值管理（Earned Value Management, EVM）分析中，時間變異的單位為下列哪一項？",
        "options": {
            "A": "月",
            "B": "星期",
            "C": "天",
            "D": "貨幣值"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "05-012",
        "text": "關於實獲值管理（Earned Value Management, EVM）的敘述，下列哪一項錯誤？",
        "options": {
            "A": "計畫值（Planned Value, PV）是指目前為止有多少工作應完成",
            "B": "實獲值（Earned Value, EV）是指目前多少工作已完成",
            "C": "實際成本（Actual Cost, AC）是指原計畫的總成本應為多少",
            "D": "完工成本預估值（Estimate at Completion, EAC）是指預估工作總成本為多少"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "05-013",
        "text": "80%問題的產生可歸責於20%的缺失原因，此原理稱為下列哪一項？",
        "options": {
            "A": "大數法則（Law of Large Numbers）",
            "B": "柏拉圖（Pareto）法則",
            "C": "常態（Normal）法則",
            "D": "雨果（Hugo）法則"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "05-014",
        "text": "關於績效報告（Performance Report）常用的工具與技術（Tools and Techniques），下列哪一項錯誤？",
        "options": {
            "A": "績效評估（Performance Evaluation）",
            "B": "成本報告系統",
            "C": "資訊呈現",
            "D": "時間報告系統"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "05-015",
        "text": "關於確認範疇（Validate Scope）的投入（Input），下列哪些正確？（複選）",
        "options": {
            "A": "專案管理計畫書（Project Management Plan）",
            "B": "交付標的（Deliverable）",
            "C": "需求追溯矩陣",
            "D": "工作績效資料"
        },
        "answer": [
            "A",
            "B",
            "C",
            "D"
        ],
        "type": "checkbox"
    },
    {
        "id": "05-016",
        "text": "關於執行整合變更控制（Perform Integrated Change Control），下列哪些敘述正確？（複選）",
        "options": {
            "A": "規定專案所有變更所應遵循的手續",
            "B": "屬於整體變更控制過程的一部分",
            "C": "包括書面申請、追蹤系統以及核准變更的審批級別",
            "D": "不屬於整體變更控制過程的一部分"
        },
        "answer": [
            "A",
            "B",
            "C"
        ],
        "type": "checkbox"
    },
    {
        "id": "05-017",
        "text": "下列哪些是控制品質（Control Quality）的工具與技術（Tools and Techniques）？（複選）",
        "options": {
            "A": "流程圖（Flowchart）",
            "B": "網路圖（Network Diagram）",
            "C": "獲准之變更申請審查",
            "D": "查檢表"
        },
        "answer": [
            "A",
            "C",
            "D"
        ],
        "type": "checkbox"
    },
    {
        "id": "05-018",
        "text": "關於縮程法（Crashing）與快速跟進（Fast Tracking），下列哪些敘述正確？（複選）",
        "options": {
            "A": "快速跟進（Fast Tracking）通常需要增加成本",
            "B": "縮程法（Crashing）通常需要增加成本",
            "C": "快速跟進（Fast Tracking）常會有重工（Rework）的情況發生",
            "D": "縮程法（Crashing）常會有重工（Rework）的情況發生"
        },
        "answer": [
            "B",
            "C"
        ],
        "type": "checkbox"
    },
    {
        "id": "05-019",
        "text": "關於控制風險（Control Risks）的敘述，下列哪一項正確？",
        "options": {
            "A": "判斷哪些風險會影響專案，並以書面形式記錄其特點",
            "B": "在整個專案生命週期（Project Life Cycle）中，追蹤已識別的風險、監測殘餘風險、識別新風險，實施風險應對計畫，並對其有效性進行評估",
            "C": "決定如何進行、規劃和實施專案風險管理活動",
            "D": "針對專案目標制定提高機會、降低威脅的方案和行動"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "05-020",
        "text": "你在軟體開發專案執行期間，發生了一項技術性的風險，其對該專案的影響超出了預期的程度。身為專案經理（Project Manager），下列哪一項是你首先應做的事？",
        "options": {
            "A": "罷工",
            "B": "進行風險的轉移",
            "C": "增加專案預算",
            "D": "進行額外的風險應對計畫"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "05-021",
        "text": "構型管理（Configuration Management）是用於下列哪一項管理的技術（Techniques）？",
        "options": {
            "A": "整合變更控制（Integrated Change Control）",
            "B": "範疇定義（Scope Definition）",
            "C": "控制品質（Control Quality）",
            "D": "控制風險（Control Risk）"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "05-022",
        "text": "關於確認範疇（Validate Scope）的目的，下列哪一項正確？",
        "options": {
            "A": "進行績效報告（Performance Report），幫助了解專案績效",
            "B": "驗證專案交付標的（Deliverable），讓利害關係人（Stakeholder）正式接受工作成果",
            "C": "進行範疇變更請求的確認",
            "D": "對專案產品進行階段式的品質保証與改善"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "05-023",
        "text": "你是力創軟體科技公司的專案經理（Project Manager），目前正負責一項軟體開發專案的執行。你的專案目前進行得並不順利，不僅成本超支、進度落後，專案品質也未盡理想。從績效報告（Performance Report）顯示進度落後較為嚴重，因此你希望能加強時程控制，所以你必需進行下列哪一項關鍵性工作？",
        "options": {
            "A": "進行專案風險規劃",
            "B": "進行人力資源規劃",
            "C": "進行偏差分析（Deviation Analysis）",
            "D": "調整時程基準（Schedule Baseline）"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "05-024",
        "text": "你是BTL公司負責新建廠計畫的專案經理（Project Manager），你的專案已進行了8個月。透過績效報告（Performance Report）顯示，目前你的計畫值（Planned Value, PV）為5,700萬元，實獲值（Earned Value, EV）為5,200萬元，實際成本（Actual Cost, AC）為5,500萬元。請問現階段你的成本變異（Cost Variance, CV）為下列哪一項？",
        "options": {
            "A": "正200萬元",
            "B": "負200萬元",
            "C": "正300萬元",
            "D": "負300萬元"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "05-025",
        "text": "關於衡量專案績效的有效方法，下列哪一項最適合？",
        "options": {
            "A": "實獲值管理（Earned Value Management, EVM）",
            "B": "統計抽樣（Statistic Sampling）",
            "C": "要徑法（Critical Path Method, CPM）",
            "D": "計畫評核術（Program Evaluation and Review Technique, PERT）"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "05-026",
        "text": "在專案績效報告（Performance Report）的工具與技術（Tools and Techniques）中，下列哪一項是結合時間及成本資訊來呈現專案績效的方法？",
        "options": {
            "A": "偏差分析（Deviation Analysis）",
            "B": "趨勢分析（Trend Analysis）",
            "C": "實獲值（Earned Value, EV）分析",
            "D": "要徑分析（Critical Path Analysis）"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "05-027",
        "text": "專案成本控制中，使用實獲值管理（Earned Value Management, EVM）是一項有用的方法，如果要了解專案的成本績效指標（Cost Performance Index, CPI），應採用下列哪一項計算方式？",
        "options": {
            "A": "EV/AC",
            "B": "EV/PV",
            "C": "AC/EV",
            "D": "AC/PV"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "05-028",
        "text": "在專案執行時，常常有變更需求的提出，而其來源、目的各不相同，且隨專案進行亦趨複雜，但是身為專案經理（Project Manager）處理這些事務有其必要性，下列哪一項「不是」關切事項？",
        "options": {
            "A": "影響產生變更因素",
            "B": "設法消除變更因素",
            "C": "確認變更已經發生",
            "D": "管理已經發生的變更"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "05-029",
        "text": "你的專案即將結案，在一次與客戶的會議中發現，完成產品的規格（Specification）與客戶當初所提的需求有落差，下列哪些是你在執行專案時最可能沒有做好的流程？（複選）",
        "options": {
            "A": "控制品質（Control Quality）",
            "B": "規劃品質管理（Plan Quality Management）",
            "C": "實施品質保證（Perform Quality Assurance）",
            "D": "控制成本（Control Costs）"
        },
        "answer": [
            "A",
            "B",
            "C"
        ],
        "type": "checkbox"
    },
    {
        "id": "05-030",
        "text": "專案績效報告（Performance Report）中包括許多內容，但與專案基準（Project Baseline）比較時，其差異分析著重於下列哪一項？",
        "options": {
            "A": "問題分析與實際解決",
            "B": "現況分析與未來預測",
            "C": "成本差異及時程差異",
            "D": "無法預測未來趨勢"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "05-031",
        "text": "專案經理（Project Manager）及團隊若要分析開發產品測試失敗原因，可採用下列哪些流程圖（Flowchart）進行分析？（複選）",
        "options": {
            "A": "柏拉圖（Pareto Diagram）",
            "B": "魚骨圖（Fishbone Diagram）",
            "C": "管制圖（Control Chart）",
            "D": "因果圖（Cause and Effect Diagram）"
        },
        "answer": [
            "B",
            "D"
        ],
        "type": "checkbox"
    },
    {
        "id": "05-032",
        "text": "專案風險是不可避免，而且也不可輕忽，專案經理（Project Manager）時時審視風險狀況，然而天不盡人意，有時也會出現未預期風險，這時專案經理（Project Manager）應進行下列哪些因應措施？（複選）",
        "options": {
            "A": "檢查風險清單",
            "B": "未辨識風險衝擊影響大於原風險預估時，主動採取額外的風險因應規劃",
            "C": "採行繞道規劃（Walk Around Plans），被動式接受風險時的臨時措施",
            "D": "檢討專案會議為何沒有發現此未辨識風險"
        },
        "answer": [
            "B",
            "C"
        ],
        "type": "checkbox"
    },
    {
        "id": "05-033",
        "text": "在下列哪一項狀況下，專案基準（Project Baseline）可以修訂與變更？",
        "options": {
            "A": "在專案稽核會議（Project Review Meeting）結議之前",
            "B": "在專案稽核會議（Project Review Meeting）結議後",
            "C": "在專案協調會議（Project Coordination Meeting）結議後",
            "D": "在專案變更控制委員會（Change Control Board, CCB）通過後"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "05-034",
        "text": "專案進度審查會議即將召開，部分團隊成員因疏失而確實遭受利害關係人（Stakeholder）抱怨及不滿，若你是專案經理（Project Manager），已經了解實際狀況，下列哪一項檢討內容最不適宜出現於此專案進度審查會中？",
        "options": {
            "A": "檢討專案團隊（Project Team）專業能力、溝通系統良窳",
            "B": "檢討其他管理階層是否改變了需求進而影響到專案目標",
            "C": "檢討專案執行不力、業務過失或抗拒者之懲處事項",
            "D": "檢討是否有風險先兆狀況，將會影響專案進行及應變計畫之準備"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "05-035",
        "text": "專案執行至期中階段，顧客突然提出「因遭遇財務問題」而要求修正合約執行方式，內部決策階層認為專案單位未做好顧客管理，要求專案團隊（Project Team）針對此事況提出分析報告，這份報告將涉及單位與顧客關係的發展，此份報告應該定位於下列哪一項類型？",
        "options": {
            "A": "專案績效報告（Project Performance Report）",
            "B": "因果關係報告（Cause and Effect Diagram Report）",
            "C": "報告風險回應（Risk Response Report）",
            "D": "特殊分析報告（Special Report）"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "05-036",
        "text": "關於監視及控制（Monitoring and Controlling）專案工作流程的投入（Input），下列哪一項錯誤？",
        "options": {
            "A": "專案管理計畫",
            "B": "工作績效（Performance）資訊",
            "C": "遭拒絕的變更請求（Change Request）",
            "D": "建議的矯正措施（Corrective Action）"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "05-037",
        "text": "關於績效報告（Performance Report）的投入（Input），下列哪一項錯誤？",
        "options": {
            "A": "工作績效資訊",
            "B": "績效衡量",
            "C": "預測完成",
            "D": "績效報告（Performance Report）"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "05-038",
        "text": "關於時程變異（Schedule Variance, SV）的敘述，下列哪一項正確？",
        "options": {
            "A": "並非所有時程差異都會影響時程",
            "B": "時程差異影響範疇，而範疇影響時程",
            "C": "時程差異一定會影響時程",
            "D": "時程差異對於時程不會有任何影響"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "05-039",
        "text": "關於控制時程（Control Schedule）的投入（Input），下列哪一項錯誤？",
        "options": {
            "A": "時程管理計畫",
            "B": "時程基準（Baseline）",
            "C": "建議的矯正措施（Corrective Action）",
            "D": "績效報告（Performance Report）"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "05-040",
        "text": "關於成本控制（Cost Control）的投入（Input），下列哪一項錯誤？",
        "options": {
            "A": "成本基準（Baseline）",
            "B": "專案資金要求（Request）",
            "C": "績效報告（Performance Report）",
            "D": "成本估計更新"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "05-041",
        "text": "關於成本控制（Cost Control）的產出（Output），下列哪一項錯誤？",
        "options": {
            "A": "成本估計更新",
            "B": "績效衡量",
            "C": "專案資金要求（Capital Request）",
            "D": "預測完成"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "05-042",
        "text": "關於構型管理（Configuration Management）的敘述，下列哪一項正確？",
        "options": {
            "A": "一種說明可以確認專案產品是正確與完整",
            "B": "工作分解結構（Work Breakdown Structure,WBS）的建立",
            "C": "一組程序（Procedures）以確定專案設計標準與契合",
            "D": "一個機制（Mechanism）以追蹤預算與進度的變異"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "05-043",
        "text": "專案團隊（Project Team）已經完成了專案工作分解結構（Work Breakdown Structure, WBS），公司的資深管理階層與所有利害關係人（Stakeholder）也批准了該WBS。但之後，客戶要求修改該專案，並且會增加可觀的成本，且客戶表示公司的業務人員在簽約之前，已經承諾這項可能變更，下列哪一方應該負責這項變更的成本？",
        "options": {
            "A": "客戶",
            "B": "專案所屬的公司",
            "C": "客戶與專案所屬的公司共同負責",
            "D": "忽略這項變更要求"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "05-044",
        "text": "一項任務需要2個人的2週全時間去完成，但專案經理（Project Manager）只能派1個人去做這項任務。2週後，該項任務完成了75%，請問成本績效指標（Cost Performance Index, CPI）為下列哪一項？",
        "options": {
            "A": "0.75",
            "B": "1.5",
            "C": "1.33",
            "D": "0.5"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "05-045",
        "text": "下列哪一項可以改善專案的未來績效，並且依照專案計畫整合需求？",
        "options": {
            "A": "預算更新",
            "B": "修改的成本估計",
            "C": "修正活動",
            "D": "應急（Contingency）規劃"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "05-046",
        "text": "下列哪些是降低或控制風險的工具與技術（Tools and Techniques）？（複選）",
        "options": {
            "A": "減輕（Mitigation）",
            "B": "模擬（Simulation）",
            "C": "規避（Avoidance）",
            "D": "接受（Acceptance）"
        },
        "answer": [
            "A",
            "C",
            "D"
        ],
        "type": "checkbox"
    },
    {
        "id": "05-047",
        "text": "下列哪些是專案過程發展（Project Process Development）的工具與技術（Tools and Techniques）？（複選）",
        "options": {
            "A": "要徑法（Critical Path Method, CPM）",
            "B": "實獲值管理（Earned Value Management, EVM）",
            "C": "圖示評核術（Graphical Evaluation and Review Technique, GERT）",
            "D": "計畫評核術（Program Evaluation and Review Technique, PERT）"
        },
        "answer": [
            "A",
            "C",
            "D"
        ],
        "type": "checkbox"
    },
    {
        "id": "05-048",
        "text": "下列哪一項「不是」控制成本（Control Costs）流程的目的？",
        "options": {
            "A": "採取校正措施，將成本風險降低",
            "B": "將專案成本的估算進行確認",
            "C": "監控專案狀態來更新專案成本",
            "D": "提供方法識別與計畫的差異"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "05-049",
        "text": "你是一位專案經理（Project Manager），可以透過下列哪一項工具（Tools），協助進行專案控制時程？",
        "options": {
            "A": "甘特圖（Gantt Chart）",
            "B": "樹狀圖（Tree Diagram）",
            "C": "矩陣圖（Matrix diagram）",
            "D": "心智圖（Mind Mapping）"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "05-050",
        "text": "有效的溝通是專案成功最重要的因素之一，下列哪些是在控制溝通（Control Comminication）重要的投入（Input）項目之一？（複選）",
        "options": {
            "A": "議題記錄（Issue log）",
            "B": "專案至今所有的會議記錄",
            "C": "專案管理計畫書（Project Management Plan）",
            "D": "工作績效資訊（Work Performance Data）"
        },
        "answer": [
            "A",
            "C",
            "D"
        ],
        "type": "checkbox"
    },
    {
        "id": "05-051",
        "text": "你的專案執行到一半，有三個未在風險登錄表（Risk Register）的新風險發生，為了避免後續專案有更多新風險發生，導致應變不及而失敗，下列哪一項是你應該要做的？",
        "options": {
            "A": "辨識風險（Identify Risk）",
            "B": "風險稽核（Risk Audits）",
            "C": "風險準備分析（Reserve Analysis）",
            "D": "在風險登錄表（Risk Register）登入新風險"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "05-052",
        "text": "一個國家型的大型專案，同時具有許多的供應商來源，為了保障買賣雙方的權益，下列哪一項是專案執行過程中，為控制採購（Control Procurements）中重要的依據？",
        "options": {
            "A": "合約（Contract）",
            "B": "議題記錄（Issue log）",
            "C": "甘特圖（Gantt Chart）",
            "D": "風險登錄表（Risk Register）"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "05-053",
        "text": "下列哪些是控制利害關係人參與（Control Stakeholder Engagement）的重要工具與技術（Tools and Techniques）？（複選）",
        "options": {
            "A": "資訊管理系統（Information Management System）",
            "B": "合約（Contract）",
            "C": "專家判斷（Expert Judgment）",
            "D": "會議（Meeting）"
        },
        "answer": [
            "A",
            "C",
            "D"
        ],
        "type": "checkbox"
    },
    {
        "id": "05-054",
        "text": "當專案經理（Project Manager）發現，專案利害關係人參與活動的效能與效率逐漸降低，專案的進度逐漸被影響而導致落後，專案經理（Project Manager）應該特別著重哪一個子流程的管理？",
        "options": {
            "A": "控制時程（Control Schedule）",
            "B": "控制成本（Control Costs）流程",
            "C": "管理利害關係人參與（Manage Stakeholder Engagement）",
            "D": "控制利害關係人參與（Control Stakeholder Engagement）"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "05-055",
        "text": "專案實際進行與當初計畫不同時，需要提出變更申請（Change Request），下列哪些可能包含在內？（複選）",
        "options": {
            "A": "矯正措施（Corrective action）",
            "B": "預防行動（Preventive Action）",
            "C": "缺點改正（Defect repair）",
            "D": "風險分析（Risk Analysis）"
        },
        "answer": [
            "A",
            "B",
            "C"
        ],
        "type": "checkbox"
    },
    {
        "id": "05-056",
        "text": "你是一個繪圖軟體開發的專案經理（Project Manager），你上網發現有一個新的技術，可以更快的完成軟體的需求規格（Specification），下列哪一項是你目前應該做的？",
        "options": {
            "A": "直接採用新的技術",
            "B": "根據專案所訂的變更程序，進行變更申請確認",
            "C": "與專案團隊（Project Team）討論新技術",
            "D": "尋求專案團隊（Project Team）與客戶的支持"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "05-057",
        "text": "關於變更控制委員會（Change Control Board, CCB），下列哪些敘述正確？（複選）",
        "options": {
            "A": "變更控制委員會（Change Control Board, CCB）的組成人員是由專案利害關係人（Project Stakeholder）組成",
            "B": "變更控制委員會（Change Control Board, CCB）進行專案所有的變更管理，決議的內容不需要與客戶達成共識",
            "C": "專案的任何變更，都應該透過變更控制委員會（Change Control Board, CCB）的審核",
            "D": "變更控制委員會（Change Control Board, CCB）應該將所有的專案團隊（Project Team）成員都納入"
        },
        "answer": [
            "A",
            "C"
        ],
        "type": "checkbox"
    },
    {
        "id": "05-058",
        "text": "下列哪一項「不是」實施整合變更控制（Perform Integrated Change Control）的投入（Input）？",
        "options": {
            "A": "專案管理計畫書（Project Management Plan）",
            "B": "工作績效報告（Work Performance Reports）",
            "C": "變更申請（Change Request）",
            "D": "專家判斷（Expert Judgment）"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "05-059",
        "text": "關於確認範疇（Validate Scope）與控制品質（Control Quality）兩者的差別，下列哪些敘述正確？（複選）",
        "options": {
            "A": "一般來說，控制品質（Control Quality）發生在確認範疇（Validate Scope）之前",
            "B": "兩者可以同時並行",
            "C": "確認範疇（Validate Scope）主要著重於交付物之可接受性",
            "D": "控制品質（Control Quality）主要著重於交付物之正確性"
        },
        "answer": [
            "A",
            "B",
            "C",
            "D"
        ],
        "type": "checkbox"
    },
    {
        "id": "05-060",
        "text": "下列哪一項是控制範疇（Control Scope）主要的工具與技術（Tools and Techniques）？",
        "options": {
            "A": "專家判斷（Expert Judgment）",
            "B": "變更申請（Change Request）",
            "C": "工作績效報告（Work Performance Reports）",
            "D": "變異分析（Variance Analysis）"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "06-001",
        "text": "結案專案時會做的事，下列哪一項錯誤？",
        "options": {
            "A": "專案責任移轉",
            "B": "可行性分析",
            "C": "工作重分派",
            "D": "解散專案團隊（Project Team）"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "06-002",
        "text": "下列哪些工作是結束專案或階段（Close Project or Phase）的工作內容？（複選）",
        "options": {
            "A": "依專案結案作業檢查清單進行查核",
            "B": "立即支付所有採購債務及帳單",
            "C": "設備（施）、剩餘材料規劃建檔、繳庫或移轉",
            "D": "結案報告、相關文件等均完成準備"
        },
        "answer": [
            "A",
            "C",
            "D"
        ],
        "type": "checkbox"
    },
    {
        "id": "06-003",
        "text": "專案結案後，通常會進行文件歸檔，因此初期於文件管理時便需建立檔案編號，下列哪一項編碼為「依作業性質編碼方式」？",
        "options": {
            "A": "專案編號-WBS碼-文件名稱-版本",
            "B": "專案編號-大綱編號-細目序號-版本",
            "C": "專案編號-產品編號-產品序號-大綱-細目",
            "D": "專案編號-流水序號-細目"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "06-004",
        "text": "文件資料經檔案管理後儲存為資訊供日後參考，經由科學方法系統性分析後，便可轉化為下列哪些項目？（複選）",
        "options": {
            "A": "公司無形資產",
            "B": "知識",
            "C": "一堆數據",
            "D": "無用的文件"
        },
        "answer": [
            "A",
            "B"
        ],
        "type": "checkbox"
    },
    {
        "id": "06-005",
        "text": "關於專案結案，下列哪一項敘述是最佳且完整？",
        "options": {
            "A": "完成工作分解結構（Work Breakdown Structure, WBS）",
            "B": "最終完成所有專案管理過程的所有活動，正式結束專案或專案階段",
            "C": "達到客戶的要求",
            "D": "所有的工作都做完了"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "06-006",
        "text": "下列哪些屬於結束專案或階段（Close Project or Phase）的產出（Output）？（複選）",
        "options": {
            "A": "專案管理計畫書（Project Management Plan）",
            "B": "企業環境因素（Enterprise Environmental Factors）",
            "C": "組織流程資產（Organizational Process Assets）更新",
            "D": "最後的產品、服務或成果移轉"
        },
        "answer": [
            "C",
            "D"
        ],
        "type": "checkbox"
    },
    {
        "id": "06-007",
        "text": "某位利害關係人（Stakeholder）擬在結案會議中準備「大放厥詞」，身為專案經理（Project Manager）認為下列哪一項可能是其所不滿？",
        "options": {
            "A": "專案整理目標達成狀況",
            "B": "對專案進行最終審查及結案作業之決議",
            "C": "專案計畫與實際執行的差異及改進",
            "D": "專案採購時未指定特殊關係廠商及相關規格（Specification）或價格"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "06-008",
        "text": "軟體專案的工作範疇已經完成，但是由於公司需要，客戶希望請專案團隊（Project Team）完成額外功能模組。鑒於上述情況，身為專案經理（Project Manager），下列哪一項是你要做的？",
        "options": {
            "A": "拒絕客戶，因為專案不鍍金",
            "B": "重新定義專案範圍",
            "C": "開始合約收尾，並就額外功能模組簽訂新合約",
            "D": "向客戶追加預算"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "06-009",
        "text": "下列哪些是屬於管理結束（Administrative Closure）程序？（複選）",
        "options": {
            "A": "收集專案記錄",
            "B": "建置工作分解結構（Work Breakdown Structure, WBS）",
            "C": "收集吸取的教訓",
            "D": "分析專案成敗"
        },
        "answer": [
            "A",
            "C",
            "D"
        ],
        "type": "checkbox"
    },
    {
        "id": "06-010",
        "text": "下列哪一項情況下，賣方會認為合約結束程序（Contract Closure）？",
        "options": {
            "A": "收到尾款",
            "B": "工作完成",
            "C": "專案團隊（Project Team）解散",
            "D": "組織流程資產（Organizational Process Assets）更新"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "06-011",
        "text": "安能軟體公司是一家開發設計遊戲軟體的公司，由於你所負責新一代遊戲軟體開發專案已告一段落，產品也已經被客戶正式驗證接收，因為你在本專案管理上的成功，客戶對這一次的軟體開發專案結果相當滿意。為了順利結案，你除了運用專案管理的手法以及請到相關專家來協助制定與實施結束流程，你還可能運用到下列哪一項工具與技術（Tools and Techniques），來進行結案作業？",
        "options": {
            "A": "要徑法（Critical Path Method, CPM）",
            "B": "計畫評核術（Program Evaluation And Review Technique, PERT）",
            "C": "專案管理資訊系統（Project Management Information System, PMIS）",
            "D": "實獲值管理（Earned Value Management, EVM）"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "06-012",
        "text": "衡量一個專案是否真正成功的條件，下列哪一項要素最為關鍵？",
        "options": {
            "A": "如時、如質、如預算地完成專案",
            "B": "比預期中的時間還短、成本還少，以及品質更好",
            "C": "避開風險，沒有產生意外",
            "D": "顧客的滿意"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "06-013",
        "text": "關於當買賣雙方某一方無法履行部分或全部合約的義務時，下列哪一項正確？",
        "options": {
            "A": "放棄（Abandon）義務",
            "B": "終止（Closure）合約",
            "C": "部分履行（Partial Fulfillment）",
            "D": "違反（Violation）合約"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "06-014",
        "text": "某一公共工程承包廠商自認執行完畢，要求進行驗收工作以利結案，但是驗收人員及接收人員此時反對如此結案，這意謂發生了下列哪一項狀況？",
        "options": {
            "A": "專案人員盡心負責確保公共工程品質",
            "B": "承包廠商過於自信，片面決定合約結束程序",
            "C": "驗收人員及接收人員欠缺溝通",
            "D": "未建立專案結案共識"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "06-015",
        "text": "關於結束專案或階段（Close Project or Phase）的敘述，下列哪一項錯誤？",
        "options": {
            "A": "與贊助者（Sponsor）、顧客、專案團隊（Project Team）等共同檢討專案程序與成果",
            "B": "完成及提報專案結案報告",
            "C": "建立專案獨享式的經驗學習（Lessons Learned）及紀錄文件",
            "D": "以文件方式正式接受專案的結果"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "06-016",
        "text": "關於結束專案或階段（Close Project or Phase）流程的投入（Input），下列哪一項正確？",
        "options": {
            "A": "專案章程（Project Charter）",
            "B": "專家判斷（Expert Judgment）",
            "C": "工作分解結構（Work Breakdown Structure, WBS）",
            "D": "已接受的交付標的（Deliverable）"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "06-017",
        "text": "關於結束採購（Close Procurement）流程的產出（Output），下列哪一項正確？",
        "options": {
            "A": "組織流程資產（Organizational Process Assets）更新",
            "B": "專案管理計畫書（Project Management Plan）",
            "C": "採購文件",
            "D": "正式接受"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "06-018",
        "text": "提早終止買賣合約是結束採購（Close Procurement）的特殊狀況，下列哪些是可能導致發生的原因？（複選）",
        "options": {
            "A": "雙方達成協議",
            "B": "在專案的過程中買方或賣方違反合約內容",
            "C": "因為未預期的天災讓專案無法繼續",
            "D": "專案經理（Project Manager）不喜歡合約的買賣項目"
        },
        "answer": [
            "A",
            "B",
            "C"
        ],
        "type": "checkbox"
    },
    {
        "id": "06-019",
        "text": "你剛完成了一個重大的採購專案，本次採購專案涉及與三間不同的供應商，然而在專案過程中與最後決標的供應商合作並不順利，為了不要重蹈覆轍，下列哪一項是未來專案需要列入的作業？",
        "options": {
            "A": "透過合約的管理來進行調整",
            "B": "進行採購稽核",
            "C": "專家判斷（Expert Judgment）",
            "D": "將該供應商列入黑名單"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "06-020",
        "text": "專案結案後和顧客舉行內部會議，下列哪一種人員最不可能參加？",
        "options": {
            "A": "專案經理（Project Manager）",
            "B": "技術廠商代表",
            "C": "顧客組織中參與專案的代表人",
            "D": "專案團隊（Project Team）的重要成員"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "SUP-SC-001",
        "chapter": "第三章 專案組織",
        "text": "專案組織是屬於什麼性質的任務編組？",
        "type": "radio",
        "options": {
            "A": "半永久性",
            "B": "循環性",
            "C": "永久性",
            "D": "臨時性"
        },
        "answer": [
            "D"
        ]
    },
    {
        "id": "SUP-SC-002",
        "chapter": "第三章 專案組織",
        "text": "下列哪一項不是本章節提到的專案組織型態？",
        "type": "radio",
        "options": {
            "A": "虛擬式組織",
            "B": "專案式組織",
            "C": "矩陣式組織",
            "D": "功能式組織"
        },
        "answer": [
            "A"
        ]
    },
    {
        "id": "SUP-SC-003",
        "chapter": "第三章 專案組織",
        "text": "功能式組織的優點不包括下列哪一項？",
        "type": "radio",
        "options": {
            "A": "專案執行速度快",
            "B": "專業技術不會因人員離開而遺失",
            "C": "人員運用保有彈性",
            "D": "現有組織結構維持不變"
        },
        "answer": [
            "A"
        ]
    },
    {
        "id": "SUP-SC-004",
        "chapter": "第三章 專案組織",
        "text": "功能式組織的優點中，「專業技術不會因人員離開而遺失」是指什麼？",
        "type": "radio",
        "options": {
            "A": "專案文件保存完整",
            "B": "專案成員不會離職",
            "C": "專案經理具有高度技術",
            "D": "技術知識保留在功能部門內"
        },
        "answer": [
            "D"
        ]
    },
    {
        "id": "SUP-SC-005",
        "chapter": "第四章 專案管理過程",
        "text": "專案管理是運用知識、技能、______ 於專案活動以滿足顧客需求。",
        "type": "radio",
        "options": {
            "A": "流程和系統",
            "B": "手段和策略",
            "C": "工具和技術",
            "D": "處理手法"
        },
        "answer": [
            "C"
        ]
    },
    {
        "id": "SUP-SC-006",
        "chapter": "第四章 專案管理過程",
        "text": "______ 是五大流程中，流程數最多的一個流程組。",
        "type": "radio",
        "options": {
            "A": "起始流程組",
            "B": "規劃流程組",
            "C": "執行流程組",
            "D": "結案流程組"
        },
        "answer": [
            "B"
        ]
    },
    {
        "id": "SUP-SC-007",
        "chapter": "第五章 專案整合管理",
        "text": "專案管理所產生的經驗教訓，通常都是放在組織的知識庫，被PMI歸類在：",
        "type": "radio",
        "options": {
            "A": "專案管理資訊系統",
            "B": "企業環境因素",
            "C": "組織的知識庫",
            "D": "組織流程資產"
        },
        "answer": [
            "D"
        ]
    },
    {
        "id": "SUP-SC-008",
        "chapter": "第五章 專案整合管理",
        "text": "在執行專案活動中所產生的原始觀察和衡量資料，如實際完成工作的百分比、技術績效衡量資料、專案活動預定和實際的開始和結束日期、變更需求數、和不良品數，PMI稱之為：",
        "type": "radio",
        "options": {
            "A": "WWW",
            "B": "WPD",
            "C": "WPI",
            "D": "WPR"
        },
        "answer": [
            "B"
        ]
    },
    {
        "id": "SUP-SC-009",
        "chapter": "第五章 專案整合管理",
        "text": "在專案整合管理的六個過程中，屬於「監督與控制」流程組的是哪兩個？",
        "type": "radio",
        "options": {
            "A": "發展專案章程和結束專案或階段",
            "B": "監視和管制專案工作和執行整合變更控制",
            "C": "指導和管理專案執行和結束專案或階段",
            "D": "發展專案章程和發展專案管理計畫書"
        },
        "answer": [
            "B"
        ]
    },
    {
        "id": "SUP-SC-010",
        "chapter": "第五章 專案整合管理",
        "text": "擬定授權專案正式成立的文件和記載滿足利害關係人的需要和期望的原始需求的過程，稱為______。",
        "type": "radio",
        "options": {
            "A": "結束專案",
            "B": "指導和管理專案執行",
            "C": "發展專案管理計畫書",
            "D": "發展專案章程"
        },
        "answer": [
            "D"
        ]
    },
    {
        "id": "SUP-SC-011",
        "chapter": "第五章 專案整合管理",
        "text": "專案章程是由授權者所核發的的文件。",
        "type": "radio",
        "options": {
            "A": "起碼二次",
            "B": "可以多次",
            "C": "僅此一次",
            "D": "無限制次數"
        },
        "answer": [
            "C"
        ]
    },
    {
        "id": "SUP-SC-012",
        "chapter": "第五章 專案整合管理",
        "text": "專案章程正式核定專案成立和指派______，以及賦予其與專案相關的決策權和領導權，並賦予其運用組織資源以執行專案的權力。",
        "type": "radio",
        "options": {
            "A": "發起人",
            "B": "贊助人",
            "C": "專案經理",
            "D": "專案成員"
        },
        "answer": [
            "C"
        ]
    },
    {
        "id": "SUP-SC-013",
        "chapter": "第五章 專案整合管理",
        "text": "PMBOK(2008)認為專案章程應該包括一些內容，但以下何者錯誤？",
        "type": "radio",
        "options": {
            "A": "描述欲完成產品或服務的SOW",
            "B": "專案高層次需求和詳細準確的細部規格",
            "C": "主要利害關係人的期望和影響",
            "D": "專案啟動者或贊助者和指定的專案經理"
        },
        "answer": [
            "B"
        ]
    },
    {
        "id": "SUP-SC-014",
        "chapter": "第五章 專案整合管理",
        "text": "______是告知專案團隊，提供專案團隊如何達成目標的指引。",
        "type": "radio",
        "options": {
            "A": "專案管理計畫書",
            "B": "專案章程",
            "C": "顧客合約",
            "D": "工作說明書"
        },
        "answer": [
            "A"
        ]
    },
    {
        "id": "SUP-SC-015",
        "chapter": "第五章 專案整合管理",
        "text": "______是專案執行過程中幾個必須滿足的重要日期，如工程設計圖、地基、主結構等何時完成。",
        "type": "radio",
        "options": {
            "A": "專案網圖",
            "B": "里程碑",
            "C": "資源日曆",
            "D": "基線"
        },
        "answer": [
            "B"
        ]
    },
    {
        "id": "SUP-SC-016",
        "chapter": "第五章 專案整合管理",
        "text": "流程改善計畫書是屬於十大知識中的哪一種知識領域？",
        "type": "radio",
        "options": {
            "A": "品質",
            "B": "整合",
            "C": "時程",
            "D": "成本"
        },
        "answer": [
            "A"
        ]
    },
    {
        "id": "SUP-SC-017",
        "chapter": "第五章 專案整合管理",
        "text": "「指導和管理專案執行」過程中的活動包括，但何者不是？",
        "type": "radio",
        "options": {
            "A": "蒐集和報告工作績效資料",
            "B": "執行生產交付標的物的活動",
            "C": "發展專案章程，指定專案經理",
            "D": "執行完成專案需求的所有活動"
        },
        "answer": [
            "C"
        ]
    },
    {
        "id": "SUP-SC-018",
        "chapter": "第五章 專案整合管理",
        "text": "「指導和管理專案執行」的輸入包含以下何者？",
        "type": "radio",
        "options": {
            "A": "工作績效資料",
            "B": "變更申請",
            "C": "交付標的物",
            "D": "專案管理計畫書"
        },
        "answer": [
            "D"
        ]
    },
    {
        "id": "SUP-SC-019",
        "chapter": "第五章 專案整合管理",
        "text": "何者不是「指導和管理專案執行」的輸出？",
        "type": "radio",
        "options": {
            "A": "工作績效資料",
            "B": "變更申請",
            "C": "交付標的物",
            "D": "核准的變更申請"
        },
        "answer": [
            "B"
        ]
    },
    {
        "id": "SUP-SC-020",
        "chapter": "第五章 專案整合管理",
        "text": "作為______的一部分，專案管理資訊系統提供下列工具：排程工具、工作授權系統、構型管理系統、資訊收集與發佈系統，或做為其他線上自動化系統的進入介面。",
        "type": "radio",
        "options": {
            "A": "企業資源規劃系統",
            "B": "組織流程資產",
            "C": "銷售點系統",
            "D": "企業環境因素"
        },
        "answer": [
            "D"
        ]
    },
    {
        "id": "SUP-SC-021",
        "chapter": "第五章 專案整合管理",
        "text": "指導和管理專案執行過程中，蒐集和報告的是什麼？",
        "type": "radio",
        "options": {
            "A": "工作績效評估(WPE)",
            "B": "工作績效資料(WPD)",
            "C": "工作績效資訊(WPI)",
            "D": "工作績效報告(WPR)"
        },
        "answer": [
            "B"
        ]
    },
    {
        "id": "SUP-SC-022",
        "chapter": "第五章 專案整合管理",
        "text": "監視和控制流程組主要落在PDCA循環的哪些階段？",
        "type": "radio",
        "options": {
            "A": "Plan和Do",
            "B": "Do和Plan",
            "C": "Plan和Act",
            "D": "Check和Act"
        },
        "answer": [
            "D"
        ]
    },
    {
        "id": "SUP-SC-023",
        "chapter": "第五章 專案整合管理",
        "text": "組織流程資產在運用時應如何處理？",
        "type": "radio",
        "options": {
            "A": "只適用於大型專案",
            "B": "只能由高階主管決定如何使用",
            "C": "完全照搬不做任何修改",
            "D": "依專案的特性作適當的修改和裁剪"
        },
        "answer": [
            "D"
        ]
    },
    {
        "id": "SUP-SC-024",
        "chapter": "第五章 專案整合管理",
        "text": "企業環境因素是指什麼？",
        "type": "radio",
        "options": {
            "A": "組織到目前所累積建立的規定和程序所形成組織的專業和技能",
            "B": "專案團隊成員提出的改變要求",
            "C": "規劃和執行專案過程審視組織內外部環境因素對於專案的影響和限制",
            "D": "專案非常重要的文件，包括許多附屬計畫"
        },
        "answer": [
            "C"
        ]
    },
    {
        "id": "SUP-SC-025",
        "chapter": "第五章 專案整合管理",
        "text": "______是指來自於利害關係人非預料到額外的變更請求，這些請求是在專案範疇之外，因而導致專案範疇擴大。",
        "type": "radio",
        "options": {
            "A": "範疇失控",
            "B": "變更需求",
            "C": "範疇蔓延",
            "D": "變更失序"
        },
        "answer": [
            "C"
        ]
    },
    {
        "id": "SUP-SC-026",
        "chapter": "第五章 專案整合管理",
        "text": "何者是「監視和管制專案工作」的輸入？",
        "type": "radio",
        "options": {
            "A": "工作績效資料",
            "B": "工作績效資訊",
            "C": "工作績效智慧",
            "D": "工作績效報告"
        },
        "answer": [
            "B"
        ]
    },
    {
        "id": "SUP-SC-027",
        "chapter": "第五章 專案整合管理",
        "text": "啟動流程組的兩個主要輸出是什麼？",
        "type": "radio",
        "options": {
            "A": "風險登記冊和品質計畫",
            "B": "預算表和時程表",
            "C": "溝通計畫和採購計畫",
            "D": "專案章程和利害關係人登錄表"
        },
        "answer": [
            "D"
        ]
    },
    {
        "id": "SUP-SC-028",
        "chapter": "第五章 專案整合管理",
        "text": "「專案團隊整理過去專案和本專案的經驗學習檔案並予以建檔儲存，以提供後續專案之參考。」請問這是以下哪一種工作？",
        "type": "radio",
        "options": {
            "A": "專案管理計畫書更新",
            "B": "企業環境因素更新",
            "C": "組織流程資產更新",
            "D": "專案文件更新"
        },
        "answer": [
            "C"
        ]
    },
    {
        "id": "SUP-SC-029",
        "chapter": "第四章 專案管理過程",
        "text": "規劃流程組如同PDCA循環中的哪一個階段？",
        "type": "radio",
        "options": {
            "A": "Check階段",
            "B": "Do階段",
            "C": "Plan階段",
            "D": "Act階段"
        },
        "answer": [
            "C"
        ]
    },
    {
        "id": "SUP-SC-030",
        "chapter": "第五章 專案整合管理",
        "text": "工作績效報告WPR是下列哪一個流程的輸出？",
        "type": "radio",
        "options": {
            "A": "指導和管理專案執行",
            "B": "發展專案章程",
            "C": "發展專案管理計畫書",
            "D": "監視和管制專案工作"
        },
        "answer": [
            "D"
        ]
    },
    {
        "id": "SUP-SC-031",
        "chapter": "第五章 專案整合管理",
        "text": "關於變更申請，下列何者是「執行整合變更控制」的輸出？",
        "type": "radio",
        "options": {
            "A": "首次提出的變更申請",
            "B": "確認的變更申請",
            "C": "專案章程變更",
            "D": "核准的變更申請"
        },
        "answer": [
            "D"
        ]
    },
    {
        "id": "SUP-SC-032",
        "chapter": "第五章 專案整合管理",
        "text": "發展專案章程的主要目的是什麼？",
        "type": "radio",
        "options": {
            "A": "正式授權專案的啟動",
            "B": "減少專案團隊規模",
            "C": "增加專案預算",
            "D": "延長專案時程"
        },
        "answer": [
            "A"
        ]
    },
    {
        "id": "SUP-SC-033",
        "chapter": "第五章 專案整合管理",
        "text": "組織流程資產更新的內容可能包括什麼？",
        "type": "radio",
        "options": {
            "A": "經驗學習檔案、專案結束資訊和正式接收文件等",
            "B": "只包括專案時程資訊",
            "C": "只包括專案預算資訊",
            "D": "只包括專案失敗的案例"
        },
        "answer": [
            "A"
        ]
    },
    {
        "id": "SUP-SC-034",
        "chapter": "第五章 專案整合管理",
        "text": "______是為制定決策、採取行動或引起關注而彙編工作績效資訊(WPI)所形成的實體或電子專案文件。",
        "type": "radio",
        "options": {
            "A": "工作績效資料",
            "B": "工作績效報告",
            "C": "專案文件",
            "D": "專案管理計畫書"
        },
        "answer": [
            "B"
        ]
    },
    {
        "id": "SUP-SC-035",
        "chapter": "第五章 專案整合管理",
        "text": "哪一種交付標的才可以當作「結束專案或階段」的輸入？",
        "type": "radio",
        "options": {
            "A": "確認的交付標的",
            "B": "專案執行後的交付標的",
            "C": "被接受(驗收)的交付標的",
            "D": "外包商認可的交付標的"
        },
        "answer": [
            "C"
        ]
    },
    {
        "id": "SUP-SC-036",
        "chapter": "第五章 專案整合管理",
        "text": "結束專案或階段的輸出不包括哪一項？",
        "type": "radio",
        "options": {
            "A": "組織流程資產更新",
            "B": "專案檔案",
            "C": "移交最終產品、服務、或成果",
            "D": "變更申請"
        },
        "answer": [
            "D"
        ]
    },
    {
        "id": "SUP-SC-037",
        "chapter": "第五章 專案整合管理",
        "text": "專案管理五大流程組不包括哪一項？",
        "type": "radio",
        "options": {
            "A": "規劃流程群組",
            "B": "執行流程群組",
            "C": "設計流程群組",
            "D": "啟動流程群組"
        },
        "answer": [
            "C"
        ]
    },
    {
        "id": "SUP-SC-038",
        "chapter": "第五章 專案整合管理",
        "text": "啟動流程組在專案中發生幾次？",
        "type": "radio",
        "options": {
            "A": "每週一次",
            "B": "每月一次",
            "C": "多次",
            "D": "只發生一次"
        },
        "answer": [
            "C"
        ]
    },
    {
        "id": "SUP-SC-039",
        "chapter": "第五章 專案整合管理",
        "text": "工作分解結構(WBS)的主要功能是什麼？",
        "type": "radio",
        "options": {
            "A": "減少專案團隊人數",
            "B": "將專案分解成可管理的工作包",
            "C": "增加專案的複雜度",
            "D": "延長專案時程"
        },
        "answer": [
            "B"
        ]
    },
    {
        "id": "SUP-SC-040",
        "chapter": "第三章 專案組織",
        "text": "專案工作一般屬於什麼性質？",
        "type": "radio",
        "options": {
            "A": "只有IT部門的工作",
            "B": "只有行政部門的工作",
            "C": "不屬於任一功能部門的例行性工作",
            "D": "功能部門的例行性工作"
        },
        "answer": [
            "C"
        ]
    },
    {
        "id": "SUP-SC-041",
        "chapter": "第三章 專案組織",
        "text": "專案式團隊的缺點包括下列哪一項？",
        "type": "radio",
        "options": {
            "A": "榮譽感高",
            "B": "工作容易聚焦",
            "C": "管理成本偏高",
            "D": "成員只有一個老闆"
        },
        "answer": [
            "C"
        ]
    },
    {
        "id": "SUP-SC-042",
        "chapter": "第三章 專案組織",
        "text": "在三種矩陣式組織中，哪一種專案經理擁有最大權力？",
        "type": "radio",
        "options": {
            "A": "弱矩陣",
            "B": "功能矩陣",
            "C": "強矩陣",
            "D": "平衡矩陣"
        },
        "answer": [
            "C"
        ]
    },
    {
        "id": "SUP-SC-043",
        "chapter": "第二章 組織策略與專案組合管理",
        "text": "1)是指在一組可行投資組合中，挑選出某風險水準下，預期報酬最大之投資組合；2)或某預期報酬下，總風險最低的投資組合，並將挑選出之投資組合連線。",
        "type": "radio",
        "options": {
            "A": "前緣模式",
            "B": "多重權重評分模式",
            "C": "輪廓模式",
            "D": "還本期法"
        },
        "answer": [
            "A"
        ]
    },
    {
        "id": "SUP-SC-044",
        "chapter": "第二章 組織策略與專案組合管理",
        "text": "某企業有四個專案進行比較，採用專案交叉比較法得出結果如下圖。請問哪的專案比較好？",
        "type": "radio",
        "options": {
            "A": "專案A",
            "B": "專案D",
            "C": "專案C",
            "D": "專案B"
        },
        "answer": [
            "A"
        ]
    },
    {
        "id": "SUP-SC-045",
        "chapter": "第一章 緒論",
        "text": "專案管理的定義：統合運用管理知識、技術、工具、方法於任何專案活動上，使專案的交付標的物能符合或超越專案的需求與期望的一種專門技術 (PMBOK, 2012)。請問此段敘述的對象為何？",
        "type": "radio",
        "options": {
            "A": "利害關係人",
            "B": "高階主管",
            "C": "顧客",
            "D": "社會大眾"
        },
        "answer": [
            "A"
        ]
    },
    {
        "id": "SUP-SC-046",
        "chapter": "第一章 緒論",
        "text": "下列何者不可視為專案？",
        "type": "radio",
        "options": {
            "A": "工程建設",
            "B": "產品研發",
            "C": "企業導入ERP",
            "D": "小會計阿花做結帳"
        },
        "answer": [
            "D"
        ]
    },
    {
        "id": "SUP-SC-047",
        "chapter": "第一章 緒論",
        "text": "對專案而言，所謂「暫時性」的意思是？",
        "type": "radio",
        "options": {
            "A": "專案的工期短",
            "B": "專案可以隨時叫停",
            "C": "每個專案都有其開始點與結束點",
            "D": "專案資源很多"
        },
        "answer": [
            "C"
        ]
    },
    {
        "id": "SUP-SC-048",
        "chapter": "第一章 緒論",
        "text": "一組互相依賴的組成部份，透過共同運作以達成該系統的目標，稱為：",
        "type": "radio",
        "options": {
            "A": "專案",
            "B": "系統",
            "C": "計畫",
            "D": "任務"
        },
        "answer": [
            "B"
        ]
    },
    {
        "id": "SUP-SC-049",
        "chapter": "第一章 緒論",
        "text": "要徑法(Critical Path Method, CPM)是哪一家公司所首先開發？",
        "type": "radio",
        "options": {
            "A": "杜邦",
            "B": "小蘋果",
            "C": "百度",
            "D": "股溝"
        },
        "answer": [
            "A"
        ]
    },
    {
        "id": "SUP-MC-001",
        "chapter": "第五章 專案整合管理",
        "text": "發展專案管理計畫書的工具和技術包括：",
        "type": "checkbox",
        "options": {
            "A": "專家判斷",
            "B": "專案管理資訊系統",
            "C": "促進技術",
            "D": "分析技術"
        },
        "answer": [
            "A",
            "C"
        ]
    },
    {
        "id": "SUP-MC-002",
        "chapter": "第五章 專案整合管理",
        "text": "交付標的變成被接受(accepted)的交付標的物必須哪二個關卡？",
        "type": "checkbox",
        "options": {
            "A": "變更控制",
            "B": "確認範疇",
            "C": "控制範疇",
            "D": "控制品質"
        },
        "answer": [
            "B",
            "D"
        ]
    },
    {
        "id": "SUP-MC-003",
        "chapter": "第五章 專案整合管理",
        "text": "哪些情況下會產生「變更請求/申請」？",
        "type": "checkbox",
        "options": {
            "A": "監視和管制專案工作",
            "B": "發展專案管理計畫書",
            "C": "執行整合變更管制",
            "D": "指導和管理專案執行"
        },
        "answer": [
            "A",
            "D"
        ]
    },
    {
        "id": "SUP-MC-004",
        "chapter": "第五章 專案整合管理",
        "text": "在專案的起始階段的工作包括：",
        "type": "checkbox",
        "options": {
            "A": "發展專案章程",
            "B": "辨識利害關係人",
            "C": "專案管理計畫書",
            "D": "活動期程估算"
        },
        "answer": [
            "A",
            "B"
        ]
    },
    {
        "id": "SUP-MC-005",
        "chapter": "第一章 緒論",
        "text": "專案金三角：、 和 ______ 是加諸於專案的三重限制要素。",
        "type": "checkbox",
        "options": {
            "A": "範疇",
            "B": "時間",
            "C": "成本",
            "D": "利害關係人"
        },
        "answer": [
            "A",
            "B",
            "C"
        ]
    },
    {
        "id": "SUP-MC-006",
        "chapter": "第一章 緒論",
        "text": "PMBOK指出專案有幾個重要特徵，包括：",
        "type": "checkbox",
        "options": {
            "A": "暫時性的",
            "B": "獨一無二的產品",
            "C": "逐步完善",
            "D": "追求完美的"
        },
        "answer": [
            "A",
            "B",
            "C"
        ]
    },
    {
        "id": "SUP-MC-007",
        "chapter": "第四章 專案管理過程",
        "text": "專案管理團隊必須能瞭解和使用哪些專業技術領域知識和技能？",
        "type": "checkbox",
        "options": {
            "A": "專案管理知識體系",
            "B": "應用領域之知識、標準、和法規",
            "C": "一般管理知識和技能",
            "D": "人際關係技能"
        },
        "answer": [
            "A",
            "B",
            "C",
            "D"
        ]
    }
];
