// 專案管理題庫 - 由 專案管理題目整理.txt 產生
const questions_pm = [
    {
        id: "01-001",
        chapter: "第一章 緒論",
        text: "關於專案的特性，下列哪些正確？（複選）",
        type: "checkbox",
        options: {"A":"特定目標","B":"明確起迄日期","C":"預算有限","D":"逐步完善"},
        answer: ["A","B","C","D"]
    },
    {
        id: "01-002",
        chapter: "第一章 緒論",
        text: "下列哪些是一般專案成功的必要條件？（複選）",
        type: "checkbox",
        options: {"A":"如期","B":"滿足顧客需求","C":"改變企業文化","D":"使用最少的資源"},
        answer: ["A","B"]
    },
    {
        id: "01-003",
        chapter: "第一章 緒論",
        text: "關於專案的特性，下列哪些正確？（複選）",
        type: "checkbox",
        options: {"A":"專案有其不確定性","B":"每一專案皆有其獨特性","C":"具備明確的目標","D":"專案人員均「不是」組織編制人員"},
        answer: ["A","B","C"]
    },
    {
        id: "01-004",
        chapter: "第一章 緒論",
        text: "在執行專案時，成本、時間、品質皆會設定其基準，下列哪一項是作為品質的基準？",
        type: "radio",
        options: {"A":"預算","B":"時間","C":"驗收標準","D":"組織"},
        answer: ["C"]
    },
    {
        id: "01-009",
        chapter: "第一章 緒論",
        text: "下列哪一項「不是」專案？",
        type: "radio",
        options: {"A":"交通工程建設","B":"產品創新研發","C":"公家單位的行政工作","D":"企業部門電子化"},
        answer: ["C"]
    },
    {
        id: "01-010",
        chapter: "第一章 緒論",
        text: "關於專案的特性，下列哪些正確？（複選）",
        type: "checkbox",
        options: {"A":"獨特性","B":"一般性","C":"資源與成本限制","D":"不重複性"},
        answer: ["A","C","D"]
    },
    {
        id: "01-011",
        chapter: "第一章 緒論",
        text: "一般的專案生命週期（Project Life Cycle）在下列哪一項階段最冗長？",
        type: "radio",
        options: {"A":"起始（Initiating）","B":"規劃（Planning）","C":"執行（Executing）","D":"結束（Closing）"},
        answer: ["C"]
    },
    {
        id: "01-012",
        chapter: "第一章 緒論",
        text: "專案生命週期（Project Life Cycle）的整個過程中所創造出的交付標的（Deliverable）可以是下列哪些項目？（複選）",
        type: "checkbox",
        options: {"A":"產品","B":"服務","C":"報告","D":"里程碑（Milestone）"},
        answer: ["A","B","C"]
    },
    {
        id: "01-013",
        chapter: "第一章 緒論",
        text: "下列哪一項狀況可視為「專案成功」？",
        type: "radio",
        options: {"A":"提供合約所條列之需求","B":"專案經理（Project Manager）宣布專案完成","C":"提送交付標的（Deliverable）於業主（Owner）","D":"符合專案利害關係人（Project Stakeholder）的需求"},
        answer: ["D"]
    },
    {
        id: "01-014",
        chapter: "第一章 緒論",
        text: "下列哪些是專案的限制條件（Constraints）？（複選）",
        type: "checkbox",
        options: {"A":"範疇（Scope）","B":"訊息（Message）","C":"成本（Cost）","D":"時間（Time）"},
        answer: ["A","C","D"]
    },
    {
        id: "01-017",
        chapter: "第一章 緒論",
        text: "關於專案成功的原因，下列哪一項最正確？",
        type: "radio",
        options: {"A":"有足夠的資金","B":"有好的專案管理","C":"有很多專案利害關係人（Project Stakeholder）","D":"使用專案式組織（Projectized Organization）架構"},
        answer: ["B"]
    },
    {
        id: "01-021",
        chapter: "第一章 緒論",
        text: "關於專案生命週期（Project Life Cycle）的定義，下列哪一項正確？",
        type: "radio",
        options: {"A":"是可以不斷重複的","B":"與產品生命週期（Product Life Cycle）一樣，在不同的環境裡，發生的時間和過程是不一樣的","C":"與產品生命週期（Product Life Cycle）不一樣，有明確的開始與結束日期","D":"是由若干工作成果所組合而成"},
        answer: ["C"]
    },
    {
        id: "01-022",
        chapter: "第一章 緒論",
        text: "專案（Project）與日常工作（Operation）的差異，下列哪一項敘述正確？",
        type: "radio",
        options: {"A":"專案是創新性與系統性，日常工作是程序性與重複性","B":"專案是創新性與系統性，日常工作是持續性與重複性","C":"專案是暫時性與獨特性，日常工作是程序性與重複性","D":"專案是暫時性與獨特性，日常工作是持續性與重複性"},
        answer: ["D"]
    },
    {
        id: "01-023",
        chapter: "第一章 緒論",
        text: "你是艾瑞克通訊科技公司的工程部經理，目前高階主管授權你執行一項新產品研發專案。在管理該專案時，下列哪一項「不是」你管理的重點？",
        type: "radio",
        options: {"A":"辨識需求","B":"確定一個明確、可實現的目標","C":"平衡範疇（Scope）、時程、成本與品質的衝突","D":"積極表現能力並超越專案利害關係人（Project Stakeholder）對專案的需求與期待"},
        answer: ["D"]
    },
    {
        id: "01-024",
        chapter: "第一章 緒論",
        text: "絕大多數的專案成本會在下列哪一項階段中被花費掉？",
        type: "radio",
        options: {"A":"規劃（Planning）","B":"執行（Executing）","C":"監視及控制（Monitoring and Controlling）","D":"結束（Closing）"},
        answer: ["B"]
    },
    {
        id: "01-027",
        chapter: "第一章 緒論",
        text: "下列哪一項「不是」專案？",
        type: "radio",
        options: {"A":"公司公益活動","B":"消防暨工安演習","C":"早晚門禁檢查","D":"豪華郵輪建造"},
        answer: ["C"]
    },
    {
        id: "01-031",
        chapter: "第一章 緒論",
        text: "關於專案的敘述，下列哪些正確？（複選）",
        type: "checkbox",
        options: {"A":"專案有既定的目標與時程","B":"專案具有獨特性","C":"專案是永久性的工作","D":"專案的不確定性大"},
        answer: ["A","B","D"]
    },
    {
        id: "01-032",
        chapter: "第一章 緒論",
        text: "關於專案的敘述，下列哪一項錯誤？",
        type: "radio",
        options: {"A":"專案是可以複製的","B":"專案的產品可包括軟、硬體","C":"每一個專案皆有資源的限制","D":"並非每一個專案啟動前均需達成財務可行"},
        answer: ["A"]
    },
    {
        id: "01-041",
        chapter: "第一章 緒論",
        text: "為創建一獨特的產品、服務或結果所做的一次性努力，稱為下列哪一項？",
        type: "radio",
        options: {"A":"新產品發展","B":"專案","C":"計畫","D":"事業"},
        answer: ["B"]
    },
    {
        id: "01-049",
        chapter: "第一章 緒論",
        text: "在專案整個生命週期裡，專案的預期支出的圖形經常呈現S曲線，這種現象代表下列哪一項？",
        type: "radio",
        options: {"A":"所有專案的週期特性","B":"問題總是出現在執行階段","C":"在結束階段的支出很高","D":"專案預算的大部分將會在執行階段花費掉"},
        answer: ["D"]
    },
    {
        id: "01-008",
        chapter: "第二章 組織策略與專案組合管理",
        text: "下列哪些項目是專案組合管理（Project Portfolio Management）的內容？（複選）",
        type: "checkbox",
        options: {"A":"建立組合（Portfolio）的投資策略","B":"評價專案的優先順序","C":"建立一個可實現投資目標的組合","D":"消費者研究"},
        answer: ["A","B","C"]
    },
    {
        id: "01-051",
        chapter: "第二章 組織策略與專案組合管理",
        text: "A公司下有數十個專案正評估是否啟動，B君為專案管理辦公室（Project Management Office, PMO）的主管，他正評估三個與組織策略目標相關的專案，請問下列哪一專案不是他正在評估的專案？",
        type: "radio",
        options: {"A":"智慧型手機二代研發專案","B":"公司ERP（Enterprise Resource Planning）系統建置專案","C":"生產線改善專案","D":"不良品回收專案"},
        answer: ["D"]
    },
    {
        id: "01-057",
        chapter: "第二章 組織策略與專案組合管理",
        text: "有關專案組合管理（Portfolio Management）及計畫管理（Program Management）的敘述，下列哪一項正確？",
        type: "radio",
        options: {"A":"當專案彼此間共享資源及技術，但彼此專案產出無強烈關聯性，採用專案組合管理","B":"當數個專案的結果有緊密的相依性，須採用專案組合管理","C":"專案組合管理範圍通常涵蓋數個專案，對專案進行重要排序及選擇，以及所涵蓋專案資源的管理，其管理範圍不會包含任何計畫","D":"計畫管理的範疇（Scope）通常較專案組合管理範疇（Scope）大"},
        answer: ["A"]
    },
    {
        id: "02-005",
        chapter: "第二章 組織策略與專案組合管理",
        text: "你是國際土地開發公司的專案經理（Project Manager），經由本益比分析結果得知跨海專案A的執行成本現值為US $ 2,400,000，潛在利益所得現值為US $12,000,000，未來的營運成本現值為US $3,000,000；專案B的執行成本現值為US $2,800,000，潛在利益所得現值為US $14,000,000，未來的營運成本現值為US $2,000,000，下列哪一項專案你最為推薦？",
        type: "radio",
        options: {"A":"專案B，因為營運成本現值較低","B":"專案A，因為淨獲利現值較高","C":"專案B，因為淨現值較高","D":"專案A，因為執行成本現值較低"},
        answer: ["C"]
    },
    {
        id: "03-088",
        chapter: "第二章 組織策略與專案組合管理",
        text: "專案經理（Project Manager）正在管理醫院的軟體發展專案，有新的電腦可以明顯地加速發展的進度，但新電腦成本需要$50,000，以包含運送、安裝與啟用。新電腦的效益，在1年後可以替專案節省$100,000。假設年利率是10%，請問1年後使用新電腦的淨現值（Net Present Value）為下列哪一項？",
        type: "radio",
        options: {"A":"$90,000","B":"$40,909","C":"$45,555","D":"$91,110"},
        answer: ["B"]
    },
    {
        id: "03-094",
        chapter: "第二章 組織策略與專案組合管理",
        text: "關於淨現值（NPV）的敘述，下列哪些正確？（複選）",
        type: "checkbox",
        options: {"A":"假設以資金成本重複投資","B":"為限制下的優化法","C":"應選擇NPV最大的專案","D":"假設以浮動利率重複投資"},
        answer: ["A","C"]
    },
    {
        id: "03-095",
        chapter: "第二章 組織策略與專案組合管理",
        text: "關於內部投資報酬率（IRR）的敘述，下列哪些正確？（複選）",
        type: "checkbox",
        options: {"A":"應選擇IRR最高的專案","B":"當淨現值為正時的折現率","C":"為限制下的優化法","D":"當淨現值為零時的折現率"},
        answer: ["A","D"]
    },
    {
        id: "03-096",
        chapter: "第二章 組織策略與專案組合管理",
        text: "下列哪一項敘述正確？",
        type: "radio",
        options: {"A":"折現的現金流量分析是最不精確的，因其不考慮金錢的時間價值","B":"淨現值的現金流量分析是最不精確的，因其假設以折現率做重複投資","C":"還本期的現金流量分析是最不精確的，因其不考慮金錢的時間價值","D":"內部投資報酬率的現金流量分析是最不精確的，因其假設以資金成本做重複投資"},
        answer: ["C"]
    },
    {
        id: "03-097",
        chapter: "第二章 組織策略與專案組合管理",
        text: "假設你是健身俱樂部的經理，總公司要你決定在新竹或台南新開一家分店；已知評估結果如下：新竹店還本期為18個月、淨現值為-250，台南店還本期為24個月、淨現值為250，你會選擇下列哪一家店開業？",
        type: "radio",
        options: {"A":"新竹，因還本期短","B":"台南，因淨現值（NPV）為正","C":"新竹，因淨現值（NPV）為負","D":"台南，因還本期長"},
        answer: ["B"]
    },
    {
        id: "03-098",
        chapter: "第二章 組織策略與專案組合管理",
        text: "假設你是爵士俱樂部的經理，總公司要你決定在新竹或台南新開一家分店，已知評估結果如下：新竹店還本期為27個月、投資報酬率為35%，台南店還本期為24個月、投資報酬率為32%，你會選擇下列哪一家店開業？",
        type: "radio",
        options: {"A":"新竹，因投資報酬率高","B":"台南，因投資報酬率低","C":"新竹，因還本期長","D":"台南，因還本期短"},
        answer: ["A"]
    },
    {
        id: "03-099",
        chapter: "第二章 組織策略與專案組合管理",
        text: "假設你是專案經理（Project Manager），正考慮要推薦一個$575,000的專案，預估頭兩年每季會有$25,000的現金流入，其後每季則為$75,000，請問還本期多長，下列哪一項正確？",
        type: "radio",
        options: {"A":"40個月","B":"38個月","C":"39個月","D":"41個月"},
        answer: ["C"]
    },
    {
        id: "03-100",
        chapter: "第二章 組織策略與專案組合管理",
        text: "專案的遴選方法包括下列哪些？（複選）",
        type: "checkbox",
        options: {"A":"成本效益分析（Cost-Benefit Analysis）","B":"限制條件（Constraints）下的優化法","C":"淨現值法（NPV）","D":"潛在市場佔有率"},
        answer: ["A","B","C"]
    },
    {
        id: "03-101",
        chapter: "第二章 組織策略與專案組合管理",
        text: "遴選委員會正在辯論兩項專案：專案A還本期18個月，專案B成本是$125,000。第一年的現金流入為$50,000，之後為每季$25,000，你該如何選擇？",
        type: "radio",
        options: {"A":"專案A或專案B均可，因還本期相同","B":"專案A，因專案B還本期為21個月","C":"專案A，因專案B還本期為24個月","D":"專案A，因專案B還本期為20個月"},
        answer: ["B"]
    },
    {
        id: "01-005",
        chapter: "第三章 專案組織",
        text: "關於專案組織的敘述，下列哪一項正確？",
        type: "radio",
        options: {"A":"原來就存在的","B":"隸屬人事部門","C":"臨時性","D":"隸屬總務部門"},
        answer: ["C"]
    },
    {
        id: "01-015",
        chapter: "第三章 專案組織",
        text: "關於專案式組織（Projectized Organization）的特色，下列哪一項錯誤？",
        type: "radio",
        options: {"A":"專案團隊成員常常安排在同一地點","B":"大部分資源用於專案工作","C":"專案經理（Project Manager）有很小的獨立性和許可權","D":"專案經理（Project Manager）有很大的獨立性和許可權"},
        answer: ["C"]
    },
    {
        id: "01-016",
        chapter: "第三章 專案組織",
        text: "你是一個專案經理（Project Manager）剛剛被分配到一個正在進行的專案中，這個專案落後於進度計畫五週。可是你的專案團隊成員將要被功能經理（Functional Manager）派到另一個專案上去。下列哪一項是你的組織型態？",
        type: "radio",
        options: {"A":"矩陣式（Matrix）","B":"功能式（Functional）","C":"專案式（Projectized）","D":"簡單式（Simple）"},
        answer: ["B"]
    },
    {
        id: "01-019",
        chapter: "第三章 專案組織",
        text: "下列哪一項組織架構，適合處理包含多種專業技術的專案？",
        type: "radio",
        options: {"A":"矩陣式（Matrix）","B":"功能式（Functional）","C":"專案式（Projectized）","D":"簡單式（Simple）"},
        answer: ["A"]
    },
    {
        id: "01-025",
        chapter: "第三章 專案組織",
        text: "專案經理（Project Manager）為全職投入工作，但專案行政人員為兼職工作，是下列哪一項組織？",
        type: "radio",
        options: {"A":"功能組織（Functional Organization）","B":"弱矩陣組織（Weak Matrix Organization）","C":"平衡矩陣組織（Balanced Matrix Organization）","D":"強矩陣組織（Strong Matrix Organization）"},
        answer: ["C"]
    },
    {
        id: "01-026",
        chapter: "第三章 專案組織",
        text: "下列哪一項是專案式組織（Projectized Organization）的最大優點？",
        type: "radio",
        options: {"A":"團隊成員有個家，可以根據績效表現而晉升","B":"不需要特別訓練，專案成員即可上手工作","C":"專案經理（Project Manager）擁有絕大多數的權限，行政人員可全職參與專案","D":"容易獲得其他功能（Functional）部門的支持"},
        answer: ["C"]
    },
    {
        id: "01-033",
        chapter: "第三章 專案組織",
        text: "下列哪一項是公司的專案管理程序訂定的負責單位？",
        type: "radio",
        options: {"A":"專案團隊（Project Team）","B":"專案保證組","C":"專案支援組","D":"專案管理辦公室（Project Management Office, PMO）"},
        answer: ["D"]
    },
    {
        id: "01-037",
        chapter: "第三章 專案組織",
        text: "關於功能組織（Functional Organization）的敘述，下列哪些錯誤？（複選）",
        type: "checkbox",
        options: {"A":"功能組織（Functional Organization）以專業為重心，且依功能分組","B":"功能組織（Functional Organization）中的每個部門或事業群都是獨立管理","C":"對專案經理（Project Manager）而言，他們擁有很大的正式職權","D":"所有員工都向一位經理報告，且有清楚的指揮系統"},
        answer: ["B","C"]
    },
    {
        id: "01-038",
        chapter: "第三章 專案組織",
        text: "下列哪一項組織結構中的專案經理（Project Manager）具有最高權限與最大權力？",
        type: "radio",
        options: {"A":"專案式組織（Projectized Organization）","B":"功能組織（Functional Organization）","C":"矩陣式組織（Matrix Organization）","D":"彈性式組織（Flexible Organization）"},
        answer: ["A"]
    },
    {
        id: "01-043",
        chapter: "第三章 專案組織",
        text: "一間台灣大型公司的經理要簽訂一個合約，在海南島建立一個國際機場。該專案需要數年去建立與測試，請問下列哪一項組織架構適合管理這個專案？",
        type: "radio",
        options: {"A":"功能組織（Functional Organization）","B":"承包商組織（Contractor Organization）","C":"矩陣式組織（Matrix Organization）","D":"專案式組織（Projectized Organization）"},
        answer: ["D"]
    },
    {
        id: "01-046",
        chapter: "第三章 專案組織",
        text: "在大型的組織中，專案促進者（Expediter）被要求替重要客戶管理專案，該專案促進者的職位可以在下列哪一組織中被發現到？",
        type: "radio",
        options: {"A":"強矩陣（Strong Matrix）","B":"弱矩陣（Weak Matrix）","C":"功能式（Functional）","D":"專案式（Projectized）"},
        answer: ["C"]
    },
    {
        id: "01-047",
        chapter: "第三章 專案組織",
        text: "專案經理（Project Manager）將會管理一個大而複雜的專案，工作地點是在非洲建立一個國際機場，並且需要至少4年的專案時程。對此，最佳專案管理的組織應屬於下列哪一項？",
        type: "radio",
        options: {"A":"強矩陣（Strong Matrix）","B":"弱矩陣（Weak Matrix）","C":"專案式（Projectized）","D":"功能式（Functional）"},
        answer: ["C"]
    },
    {
        id: "01-048",
        chapter: "第三章 專案組織",
        text: "專案經理（Project Manager）所擁有的權力大小與下列哪一項有關？",
        type: "radio",
        options: {"A":"專案經理（Project Manager）的溝通技巧","B":"組織結構","C":"專案經理（Project Manager）的影響力","D":"員工的配合度"},
        answer: ["B"]
    },
    {
        id: "01-050",
        chapter: "第三章 專案組織",
        text: "在一項南北高速鐵路的專案中，你負責破壞舊建築，直接向專案經理（Project Manager）報告；且為約聘性質，在任務結束後即需離開，此組織為下列哪一項？",
        type: "radio",
        options: {"A":"功能組織（Functional Organization）","B":"弱矩陣組織（Weak Matrix Organization）","C":"專案式組織（Projectized Organization）","D":"平衡矩陣組織（Balanced Matrix Organization）"},
        answer: ["C"]
    },
    {
        id: "01-053",
        chapter: "第三章 專案組織",
        text: "下列哪一項是功能組織（Functional Organization）的優點？",
        type: "radio",
        options: {"A":"所有員工向單一主管負責","B":"所有員工向兩個或兩個以上主管負責，但只能效忠功能經理（Functional Manager）","C":"功能組織（Functional Organization）的重心在專案工作","D":"團隊具有同步協調特性"},
        answer: ["A"]
    },
    {
        id: "04-002",
        chapter: "第三章 專案組織",
        text: "一個企業的矩陣式組織（Matrix Organization）的特徵，下列哪一項錯誤？",
        type: "radio",
        options: {"A":"這些專案成員每天所接受的管理和督導仍然是直屬經理的權力","B":"專案經理（Project Manager）並沒有任何直接的直線職權","C":"專案經理（Project Manager）不是功能性角色","D":"專案經理（Project Manager）可由企業內指派"},
        answer: ["C"]
    },
    {
        id: "04-004",
        chapter: "第三章 專案組織",
        text: "下列哪一項組織是可以快速地適應其所處之爆炸性環境中所面臨的變革與不確定性？",
        type: "radio",
        options: {"A":"策略型組織（Strategic Organization）","B":"功能組織（Functional Organization）","C":"專案式組織（Projectized Organization）","D":"矩陣式組織（Matrix Organization）"},
        answer: ["C"]
    },
    {
        id: "01-006",
        chapter: "第四章 專案管理過程",
        text: "關於專案管理流程群組（Process Groups），下列哪一項與目標、時程、預算關係最密切？",
        type: "radio",
        options: {"A":"規劃（Planning）","B":"執行（Executing）","C":"起始（Initiating）","D":"監視及控制（Monitoring and Controlling）"},
        answer: ["A"]
    },
    {
        id: "01-007",
        chapter: "第四章 專案管理過程",
        text: "關於專案管理流程群組（Process Groups），下列哪一項與變更關係最密切？",
        type: "radio",
        options: {"A":"規劃（Planning）","B":"執行（Executing）","C":"起始（Initiating）","D":"監視及控制（Monitoring and Controlling）"},
        answer: ["D"]
    },
    {
        id: "01-034",
        chapter: "第四章 專案管理過程",
        text: "將專案計畫付諸行動，是屬於專案管理流程群組（Process Groups）中的下列哪一項階段？",
        type: "radio",
        options: {"A":"起始（Initiating）","B":"規劃（Planning）","C":"執行（Executing）","D":"監視及控制（Monitoring and Controlling）"},
        answer: ["C"]
    },
    {
        id: "01-052",
        chapter: "第四章 專案管理過程",
        text: "下列哪一項流程群組（Process Groups）中專案的風險最高，且利害關係人（Stakeholder）對專案成果的影響力最大？",
        type: "radio",
        options: {"A":"規劃（Planning）","B":"執行（Executing）","C":"起始（Initiating）","D":"控制（Control）"},
        answer: ["C"]
    },
    {
        id: "01-054",
        chapter: "第四章 專案管理過程",
        text: "利害關係人（Stakeholder）於下列哪一專案階段（Project Phase）的影響力最大？",
        type: "radio",
        options: {"A":"起始（Initiating）","B":"規劃（Planning）","C":"執行（Executing）","D":"監視及控制（Monitoring and Controlling）"},
        answer: ["A"]
    },
    {
        id: "01-058",
        chapter: "第四章 專案管理過程",
        text: "企業環境因素（Enterprise Environmental Factors）所指的為一個不是專案團隊（Project Team）所能控制的狀況，但是影響、制約及指導專案，因此是多數專案規劃子流程的投入（Input），下列哪一項「不是」屬於企業環境因素（Enterprise Environmental Factors）？",
        type: "radio",
        options: {"A":"公司的文化","B":"公司過去執行類似的專案","C":"公司的人事制度","D":"公司建置的ERP（Enterprise Resource Planning）系統"},
        answer: ["B"]
    },
    {
        id: "01-059",
        chapter: "第四章 專案管理過程",
        text: "專案治理（Project Governance）架構提供專案經理（Project Manager）與團隊成員管理專案的結構、流程及決策工具，已成功完成專案的交付，下列哪一項「不是」專案治理（Project Governance）架構的重要元素？",
        type: "radio",
        options: {"A":"專案成功及交付的允收準則（Acceptance Criteria）","B":"專案的決策流程","C":"專案的可行性分析","D":"專案團隊（Project Team）、組織群組及外部利害關係人（Stakeholder）的關係"},
        answer: ["C"]
    },
    {
        id: "01-035",
        chapter: "第五章 專案整合管理",
        text: "專案整合管理（Project Integration Management）知識領域不包含下列哪一項流程？",
        type: "radio",
        options: {"A":"起始（Initiating）","B":"發展專案管理計畫書（Develop Project Management Plan）","C":"指導及管理專案管理工作（Direct and Manage Project Work）","D":"實施整合變更控制（Perform Integrated Change Control）"},
        answer: ["A"]
    },
    {
        id: "02-003",
        chapter: "第五章 專案整合管理",
        text: "發展專案章程（Develop Project Charter）的目的為下列哪一項？",
        type: "radio",
        options: {"A":"敘述專案的評選方法","B":"確認專案目標及授權取得專案資源","C":"確認專案贊助者（Project Sponsor）","D":"確認專案團隊（Project Team）、專案經理（Project Manager）及專案贊助者（Project Sponsor）"},
        answer: ["B"]
    },
    {
        id: "02-004",
        chapter: "第五章 專案整合管理",
        text: "發展專案章程（Develop Project Charter）的過程中，需下列哪一項投入（Input）？",
        type: "radio",
        options: {"A":"專案工作說明書（Statement of Work, SOW）、專案評選方法、企業組織","B":"合約、專案評選方法、企業環境及資源、組織流程","C":"專案工作說明書（Statement of Work, SOW）、企業環境及資源、專案評選方法、組織流程","D":"合約、專案工作說明書（Statement of Work, SOW）、企業環境及資源、組織流程"},
        answer: ["D"]
    },
    {
        id: "02-006",
        chapter: "第五章 專案整合管理",
        text: "下列哪些是專案章程（Project Charter）的內容？（複選）",
        type: "checkbox",
        options: {"A":"專案總體預算","B":"專案經理（Project Manager）","C":"專案經驗","D":"專案目的"},
        answer: ["A","B","D"]
    },
    {
        id: "02-007",
        chapter: "第五章 專案整合管理",
        text: "發展一份正式被核准的文件，並授權專案經理（Project Manager）在專案活動中動用組織的資源，是指下列哪一項的定義？",
        type: "radio",
        options: {"A":"範疇聲明（Scope Statement）","B":"工作說明書（Statement of Work, SOW）","C":"專案章程（Project Charter）","D":"合約（Contract）"},
        answer: ["C"]
    },
    {
        id: "02-008",
        chapter: "第五章 專案整合管理",
        text: "專案章程（Project Charter）在下列哪一項流程群組（Process Groups）中產生？",
        type: "radio",
        options: {"A":"可行性（Feasibility）","B":"起始（Initiating）","C":"規劃（Planning）","D":"審核（Audit）"},
        answer: ["B"]
    },
    {
        id: "02-012",
        chapter: "第五章 專案整合管理",
        text: "下列哪一項是專案章程（Project Charter）的目的？",
        type: "radio",
        options: {"A":"認可與承認專案的存在，並將組織資源撥付給專案","B":"承認專案團隊與專案經理（Project Manager）的存在","C":"評選出最適當的專案","D":"擬定專案評選準則"},
        answer: ["A"]
    },
    {
        id: "02-013",
        chapter: "第五章 專案整合管理",
        text: "下列哪一項文件是確認專案的存在？",
        type: "radio",
        options: {"A":"工作說明書（Statement of Work, SOW）","B":"專案委派任務","C":"專案章程（Project Charter）","D":"產品敘述"},
        answer: ["C"]
    },
    {
        id: "02-014",
        chapter: "第五章 專案整合管理",
        text: "專案經理（Project Manager）被建築公司雇用，並且負責完工大樓的裝潢。他的專案第一件事是建立下列哪一項？",
        type: "radio",
        options: {"A":"工作分解結構（Work Breakdown Structure, WBS）","B":"預算基準（Baseline）","C":"專案章程（Project Charter）","D":"專案計畫"},
        answer: ["C"]
    },
    {
        id: "03-020",
        chapter: "第五章 專案整合管理",
        text: "發展專案管理計畫書（Develop Project Management Plan）的主要目的，下列哪一項正確？",
        type: "radio",
        options: {"A":"了解誰是利害關係人（Stakeholder）","B":"確認專案的成本","C":"定義專案如何執行、如何監督、控制及結束專案","D":"確保專案的品質"},
        answer: ["C"]
    },
    {
        id: "03-049",
        chapter: "第五章 專案整合管理",
        text: "發展專案管理計畫書（Develop Project Management Plan）是在下列哪一項流程群組（Process Groups）？",
        type: "radio",
        options: {"A":"起始（Initiating）","B":"規劃（Planning）","C":"執行（Executing）","D":"監視及控制（Monitoring and Controlling）"},
        answer: ["B"]
    },
    {
        id: "04-029",
        chapter: "第五章 專案整合管理",
        text: "下列哪些是指導與管理專案執行（Direct and Manage Project Work）常用的工具與技術（Tools and Techniques）？（複選）",
        type: "checkbox",
        options: {"A":"專案管理計畫","B":"專家判斷（Expert Judgment）","C":"專案管理資訊系統（Project Management Information System, PMIS）","D":"範疇聲明（Scope Statement）"},
        answer: ["B","C"]
    },
    {
        id: "04-044",
        chapter: "第五章 專案整合管理",
        text: "當專案經理（Project Manager）與專案團隊在「指導與管理專案執行（Direct and Manage Project Work）」時，最主要與最直接地會受到下列哪一項因素的影響？",
        type: "radio",
        options: {"A":"專案管理知識（Project Management Knowledge）","B":"應用領域（Application Area）","C":"專案管理環境（Project Environment）","D":"人際技術（Soft Skills）"},
        answer: ["B"]
    },
    {
        id: "04-045",
        chapter: "第五章 專案整合管理",
        text: "你是新一代通訊技術研發專案的專案經理（Project Manager），為了讓這項專案能順利成功，公司已投了入5000萬資金，同時亦指派公司優秀的工程技術人員參與專案。目前該項專案管理計畫書（Project Management Plan）也已完成，緊接著是要指導與管理專案執行（Direct and Manage Project Work）的工作，下列哪一項工具與技術（Tools and Techniques）是身為專案經理（Project Manager）的你必須運用的？",
        type: "radio",
        options: {"A":"專案管理方法論（Methodology）及專案管理資訊系統（Project Management Information System, PMIS）","B":"專案管理方法論及工作授權（Authorization）系統","C":"時程（Time）管理與預算管理技術","D":"專案選擇方法與專家判斷（Expert Judgment）"},
        answer: ["A"]
    },
    {
        id: "04-046",
        chapter: "第五章 專案整合管理",
        text: "下列哪一項是「指導與管理專案執行（Direct and Manage Project Work）」的產出（Output）？",
        type: "radio",
        options: {"A":"交付標的（Deliverable）","B":"專案成功準則（Project Success Criteria）","C":"專案預算（Project Budget）","D":"專案時程（Project Schedule）"},
        answer: ["A"]
    },
    {
        id: "04-075",
        chapter: "第五章 專案整合管理",
        text: "關於指導與管理專案執行（Direct and Manage Project Work）的敘述，下列哪一項錯誤？",
        type: "radio",
        options: {"A":"其目的是要去規劃（Planning）專案計畫，以便讓專案可以順利完成","B":"工作經授權（Authorization）後開始，且活動（Activity）也開始進行","C":"資源於這個階段投入（Input），並實行受指派的活動，以產生專案產品或服務","D":"資金花費下去，以完成專案目的"},
        answer: ["A"]
    },
    {
        id: "04-076",
        chapter: "第五章 專案整合管理",
        text: "關於指導與管理專案執行（Direct and Manage Project Work）的投入（Input），下列哪一項錯誤？",
        type: "radio",
        options: {"A":"專案管理計畫","B":"驗證過的缺失修復（Defect Repair）","C":"行政結案（Administrative Closure）程序","D":"工作績效資訊"},
        answer: ["D"]
    },
    {
        id: "04-077",
        chapter: "第五章 專案整合管理",
        text: "關於指導與管理專案執行（Direct and Manage Project Work）的產出（Output），下列哪一項錯誤？",
        type: "radio",
        options: {"A":"專案管理計畫","B":"交付標的（Deliverable）","C":"實施的缺失瑕疵修復","D":"請求變更"},
        answer: ["A"]
    },
    {
        id: "04-078",
        chapter: "第五章 專案整合管理",
        text: "工作績效資訊和蒐集、製成文件與記錄專案活動狀況有關，在此流程期間可能蒐集到的資訊有下列哪些？（複選）",
        type: "checkbox",
        options: {"A":"時程狀況與進展","B":"交付標的（Deliverable）完成狀況","C":"時程活動的進展與狀態","D":"時程活動完成百分比"},
        answer: ["A","B","C","D"]
    },
    {
        id: "05-016",
        chapter: "第五章 專案整合管理",
        text: "關於執行整合變更控制（Perform Integrated Change Control），下列哪些敘述正確？（複選）",
        type: "checkbox",
        options: {"A":"規定專案所有變更所應遵循的手續","B":"屬於整體變更控制過程的一部分","C":"包括書面申請、追蹤系統以及核准變更的審批級別","D":"不屬於整體變更控制過程的一部分"},
        answer: ["A","B","C"]
    },
    {
        id: "05-036",
        chapter: "第五章 專案整合管理",
        text: "關於監視及控制（Monitoring and Controlling）專案工作流程的投入（Input），下列哪一項錯誤？",
        type: "radio",
        options: {"A":"專案管理計畫","B":"工作績效（Performance）資訊","C":"遭拒絕的變更請求（Change Request）","D":"建議的矯正措施（Corrective Action）"},
        answer: ["D"]
    },
    {
        id: "05-055",
        chapter: "第五章 專案整合管理",
        text: "專案實際進行與當初計畫不同時，需要提出變更申請（Change Request），下列哪些可能包含在內？（複選）",
        type: "checkbox",
        options: {"A":"矯正措施（Corrective action）","B":"預防行動（Preventive Action）","C":"缺點改正（Defect repair）","D":"風險分析（Risk Analysis）"},
        answer: ["A","B","C"]
    },
    {
        id: "05-057",
        chapter: "第五章 專案整合管理",
        text: "關於變更控制委員會（Change Control Board, CCB），下列哪些敘述正確？（複選）",
        type: "checkbox",
        options: {"A":"變更控制委員會（Change Control Board, CCB）的組成人員是由專案利害關係人（Project Stakeholder）組成","B":"變更控制委員會（Change Control Board, CCB）進行專案所有的變更管理，決議的內容不需要與客戶達成共識","C":"專案的任何變更，都應該透過變更控制委員會（Change Control Board, CCB）的審核","D":"變更控制委員會（Change Control Board, CCB）應該將所有的專案團隊（Project Team）成員都納入"},
        answer: ["A","C"]
    },
    {
        id: "05-058",
        chapter: "第五章 專案整合管理",
        text: "下列哪一項「不是」實施整合變更控制（Perform Integrated Change Control）的投入（Input）？",
        type: "radio",
        options: {"A":"專案管理計畫書（Project Management Plan）","B":"工作績效報告（Work Performance Reports）","C":"變更申請（Change Request）","D":"專家判斷（Expert Judgment）"},
        answer: ["D"]
    },
    {
        id: "06-001",
        chapter: "第五章 專案整合管理",
        text: "結案專案時會做的事，下列哪一項錯誤？",
        type: "radio",
        options: {"A":"專案責任移轉","B":"可行性分析","C":"工作重分派","D":"解散專案團隊（Project Team）"},
        answer: ["B"]
    },
    {
        id: "06-002",
        chapter: "第五章 專案整合管理",
        text: "下列哪些工作是結束專案或階段（Close Project or Phase）的工作內容？（複選）",
        type: "checkbox",
        options: {"A":"依專案結案作業檢查清單進行查核","B":"立即支付所有採購債務及帳單","C":"設備（施）、剩餘材料規劃建檔、繳庫或移轉","D":"結案報告、相關文件等均完成準備"},
        answer: ["A","C","D"]
    },
    {
        id: "06-005",
        chapter: "第五章 專案整合管理",
        text: "關於專案結案，下列哪一項敘述是最佳且完整？",
        type: "radio",
        options: {"A":"完成工作分解結構（Work Breakdown Structure, WBS）","B":"最終完成所有專案管理過程的所有活動，正式結束專案或專案階段","C":"達到客戶的要求","D":"所有的工作都做完了"},
        answer: ["B"]
    },
    {
        id: "06-006",
        chapter: "第五章 專案整合管理",
        text: "下列哪些屬於結束專案或階段（Close Project or Phase）的產出（Output）？（複選）",
        type: "checkbox",
        options: {"A":"專案管理計畫書（Project Management Plan）","B":"企業環境因素（Enterprise Environmental Factors）","C":"組織流程資產（Organizational Process Assets）更新","D":"最後的產品、服務或成果移轉"},
        answer: ["C","D"]
    },
    {
        id: "06-009",
        chapter: "第五章 專案整合管理",
        text: "下列哪些是屬於管理結束（Administrative Closure）程序？（複選）",
        type: "checkbox",
        options: {"A":"收集專案記錄","B":"建置工作分解結構（Work Breakdown Structure, WBS）","C":"收集吸取的教訓","D":"分析專案成敗"},
        answer: ["A","C","D"]
    },
    {
        id: "06-015",
        chapter: "第五章 專案整合管理",
        text: "關於結束專案或階段（Close Project or Phase）的敘述，下列哪一項錯誤？",
        type: "radio",
        options: {"A":"與贊助者（Sponsor）、顧客、專案團隊（Project Team）等共同檢討專案程序與成果","B":"完成及提報專案結案報告","C":"建立專案獨享式的經驗學習（Lessons Learned）及紀錄文件","D":"以文件方式正式接受專案的結果"},
        answer: ["C"]
    },
    {
        id: "06-016",
        chapter: "第五章 專案整合管理",
        text: "關於結束專案或階段（Close Project or Phase）流程的投入（Input），下列哪一項正確？",
        type: "radio",
        options: {"A":"專案章程（Project Charter）","B":"專家判斷（Expert Judgment）","C":"工作分解結構（Work Breakdown Structure, WBS）","D":"已接受的交付標的（Deliverable）"},
        answer: ["D"]
    },
    {
        id: "SUP-SC-001",
        chapter: "第三章 專案組織",
        text: "專案組織是屬於什麼性質的任務編組？",
        type: "radio",
        options: {"A":"半永久性","B":"循環性","C":"永久性","D":"臨時性"},
        answer: ["D"]
    },
    {
        id: "SUP-SC-002",
        chapter: "第三章 專案組織",
        text: "下列哪一項不是本章節提到的專案組織型態？",
        type: "radio",
        options: {"A":"虛擬式組織","B":"專案式組織","C":"矩陣式組織","D":"功能式組織"},
        answer: ["A"]
    },
    {
        id: "SUP-SC-003",
        chapter: "第三章 專案組織",
        text: "功能式組織的優點不包括下列哪一項？",
        type: "radio",
        options: {"A":"專案執行速度快","B":"專業技術不會因人員離開而遺失","C":"人員運用保有彈性","D":"現有組織結構維持不變"},
        answer: ["A"]
    },
    {
        id: "SUP-SC-004",
        chapter: "第三章 專案組織",
        text: "功能式組織的優點中，「專業技術不會因人員離開而遺失」是指什麼？",
        type: "radio",
        options: {"A":"專案文件保存完整","B":"專案成員不會離職","C":"專案經理具有高度技術","D":"技術知識保留在功能部門內"},
        answer: ["D"]
    },
    {
        id: "SUP-SC-005",
        chapter: "第四章 專案管理過程",
        text: "專案管理是運用知識、技能、______ 於專案活動以滿足顧客需求。",
        type: "radio",
        options: {"A":"流程和系統","B":"手段和策略","C":"工具和技術","D":"處理手法"},
        answer: ["C"]
    },
    {
        id: "SUP-SC-006",
        chapter: "第四章 專案管理過程",
        text: "______ 是五大流程中，流程數最多的一個流程組。",
        type: "radio",
        options: {"A":"起始流程組","B":"規劃流程組","C":"執行流程組","D":"結案流程組"},
        answer: ["B"]
    },
    {
        id: "SUP-SC-007",
        chapter: "第五章 專案整合管理",
        text: "專案管理所產生的經驗教訓，通常都是放在組織的知識庫，被PMI歸類在：",
        type: "radio",
        options: {"A":"專案管理資訊系統","B":"企業環境因素","C":"組織的知識庫","D":"組織流程資產"},
        answer: ["D"]
    },
    {
        id: "SUP-SC-008",
        chapter: "第五章 專案整合管理",
        text: "在執行專案活動中所產生的原始觀察和衡量資料，如實際完成工作的百分比、技術績效衡量資料、專案活動預定和實際的開始和結束日期、變更需求數、和不良品數，PMI稱之為：",
        type: "radio",
        options: {"A":"WWW","B":"WPD","C":"WPI","D":"WPR"},
        answer: ["B"]
    },
    {
        id: "SUP-SC-009",
        chapter: "第五章 專案整合管理",
        text: "在專案整合管理的六個過程中，屬於「監督與控制」流程組的是哪兩個？",
        type: "radio",
        options: {"A":"發展專案章程和結束專案或階段","B":"監視和管制專案工作和執行整合變更控制","C":"指導和管理專案執行和結束專案或階段","D":"發展專案章程和發展專案管理計畫書"},
        answer: ["B"]
    },
    {
        id: "SUP-SC-010",
        chapter: "第五章 專案整合管理",
        text: "擬定授權專案正式成立的文件和記載滿足利害關係人的需要和期望的原始需求的過程，稱為______。",
        type: "radio",
        options: {"A":"結束專案","B":"指導和管理專案執行","C":"發展專案管理計畫書","D":"發展專案章程"},
        answer: ["D"]
    },
    {
        id: "SUP-SC-011",
        chapter: "第五章 專案整合管理",
        text: "專案章程是由授權者所核發的的文件。",
        type: "radio",
        options: {"A":"起碼二次","B":"可以多次","C":"僅此一次","D":"無限制次數"},
        answer: ["C"]
    },
    {
        id: "SUP-SC-012",
        chapter: "第五章 專案整合管理",
        text: "專案章程正式核定專案成立和指派______，以及賦予其與專案相關的決策權和領導權，並賦予其運用組織資源以執行專案的權力。",
        type: "radio",
        options: {"A":"發起人","B":"贊助人","C":"專案經理","D":"專案成員"},
        answer: ["C"]
    },
    {
        id: "SUP-SC-013",
        chapter: "第五章 專案整合管理",
        text: "PMBOK(2008)認為專案章程應該包括一些內容，但以下何者錯誤？",
        type: "radio",
        options: {"A":"描述欲完成產品或服務的SOW","B":"專案高層次需求和詳細準確的細部規格","C":"主要利害關係人的期望和影響","D":"專案啟動者或贊助者和指定的專案經理"},
        answer: ["B"]
    },
    {
        id: "SUP-SC-014",
        chapter: "第五章 專案整合管理",
        text: "______是告知專案團隊，提供專案團隊如何達成目標的指引。",
        type: "radio",
        options: {"A":"專案管理計畫書","B":"專案章程","C":"顧客合約","D":"工作說明書"},
        answer: ["A"]
    },
    {
        id: "SUP-SC-015",
        chapter: "第五章 專案整合管理",
        text: "______是專案執行過程中幾個必須滿足的重要日期，如工程設計圖、地基、主結構等何時完成。",
        type: "radio",
        options: {"A":"專案網圖","B":"里程碑","C":"資源日曆","D":"基線"},
        answer: ["B"]
    },
    {
        id: "SUP-SC-016",
        chapter: "第五章 專案整合管理",
        text: "流程改善計畫書是屬於十大知識中的哪一種知識領域？",
        type: "radio",
        options: {"A":"品質","B":"整合","C":"時程","D":"成本"},
        answer: ["A"]
    },
    {
        id: "SUP-SC-017",
        chapter: "第五章 專案整合管理",
        text: "「指導和管理專案執行」過程中的活動包括，但何者不是？",
        type: "radio",
        options: {"A":"蒐集和報告工作績效資料","B":"執行生產交付標的物的活動","C":"發展專案章程，指定專案經理","D":"執行完成專案需求的所有活動"},
        answer: ["C"]
    },
    {
        id: "SUP-SC-018",
        chapter: "第五章 專案整合管理",
        text: "「指導和管理專案執行」的輸入包含以下何者？",
        type: "radio",
        options: {"A":"工作績效資料","B":"變更申請","C":"交付標的物","D":"專案管理計畫書"},
        answer: ["D"]
    },
    {
        id: "SUP-SC-019",
        chapter: "第五章 專案整合管理",
        text: "何者不是「指導和管理專案執行」的輸出？",
        type: "radio",
        options: {"A":"工作績效資料","B":"變更申請","C":"交付標的物","D":"核准的變更申請"},
        answer: ["B"]
    },
    {
        id: "SUP-SC-020",
        chapter: "第五章 專案整合管理",
        text: "作為______的一部分，專案管理資訊系統提供下列工具：排程工具、工作授權系統、構型管理系統、資訊收集與發佈系統，或做為其他線上自動化系統的進入介面。",
        type: "radio",
        options: {"A":"企業資源規劃系統","B":"組織流程資產","C":"銷售點系統","D":"企業環境因素"},
        answer: ["D"]
    },
    {
        id: "SUP-SC-021",
        chapter: "第五章 專案整合管理",
        text: "指導和管理專案執行過程中，蒐集和報告的是什麼？",
        type: "radio",
        options: {"A":"工作績效評估(WPE)","B":"工作績效資料(WPD)","C":"工作績效資訊(WPI)","D":"工作績效報告(WPR)"},
        answer: ["B"]
    },
    {
        id: "SUP-SC-022",
        chapter: "第五章 專案整合管理",
        text: "監視和控制流程組主要落在PDCA循環的哪些階段？",
        type: "radio",
        options: {"A":"Plan和Do","B":"Do和Plan","C":"Plan和Act","D":"Check和Act"},
        answer: ["D"]
    },
    {
        id: "SUP-SC-023",
        chapter: "第五章 專案整合管理",
        text: "組織流程資產在運用時應如何處理？",
        type: "radio",
        options: {"A":"只適用於大型專案","B":"只能由高階主管決定如何使用","C":"完全照搬不做任何修改","D":"依專案的特性作適當的修改和裁剪"},
        answer: ["D"]
    },
    {
        id: "SUP-SC-024",
        chapter: "第五章 專案整合管理",
        text: "企業環境因素是指什麼？",
        type: "radio",
        options: {"A":"組織到目前所累積建立的規定和程序所形成組織的專業和技能","B":"專案團隊成員提出的改變要求","C":"規劃和執行專案過程審視組織內外部環境因素對於專案的影響和限制","D":"專案非常重要的文件，包括許多附屬計畫"},
        answer: ["C"]
    },
    {
        id: "SUP-SC-025",
        chapter: "第五章 專案整合管理",
        text: "______是指來自於利害關係人非預料到額外的變更請求，這些請求是在專案範疇之外，因而導致專案範疇擴大。",
        type: "radio",
        options: {"A":"範疇失控","B":"變更需求","C":"範疇蔓延","D":"變更失序"},
        answer: ["C"]
    },
    {
        id: "SUP-SC-026",
        chapter: "第五章 專案整合管理",
        text: "何者是「監視和管制專案工作」的輸入？",
        type: "radio",
        options: {"A":"工作績效資料","B":"工作績效資訊","C":"工作績效智慧","D":"工作績效報告"},
        answer: ["B"]
    },
    {
        id: "SUP-SC-027",
        chapter: "第五章 專案整合管理",
        text: "啟動流程組的兩個主要輸出是什麼？",
        type: "radio",
        options: {"A":"風險登記冊和品質計畫","B":"預算表和時程表","C":"溝通計畫和採購計畫","D":"專案章程和利害關係人登錄表"},
        answer: ["D"]
    },
    {
        id: "SUP-SC-028",
        chapter: "第五章 專案整合管理",
        text: "「專案團隊整理過去專案和本專案的經驗學習檔案並予以建檔儲存，以提供後續專案之參考。」請問這是以下哪一種工作？",
        type: "radio",
        options: {"A":"專案管理計畫書更新","B":"企業環境因素更新","C":"組織流程資產更新","D":"專案文件更新"},
        answer: ["C"]
    },
    {
        id: "SUP-SC-029",
        chapter: "第四章 專案管理過程",
        text: "規劃流程組如同PDCA循環中的哪一個階段？",
        type: "radio",
        options: {"A":"Check階段","B":"Do階段","C":"Plan階段","D":"Act階段"},
        answer: ["C"]
    },
    {
        id: "SUP-SC-030",
        chapter: "第五章 專案整合管理",
        text: "工作績效報告WPR是下列哪一個流程的輸出？",
        type: "radio",
        options: {"A":"指導和管理專案執行","B":"發展專案章程","C":"發展專案管理計畫書","D":"監視和管制專案工作"},
        answer: ["D"]
    },
    {
        id: "SUP-SC-031",
        chapter: "第五章 專案整合管理",
        text: "關於變更申請，下列何者是「執行整合變更控制」的輸出？",
        type: "radio",
        options: {"A":"首次提出的變更申請","B":"確認的變更申請","C":"專案章程變更","D":"核准的變更申請"},
        answer: ["D"]
    },
    {
        id: "SUP-SC-032",
        chapter: "第五章 專案整合管理",
        text: "發展專案章程的主要目的是什麼？",
        type: "radio",
        options: {"A":"正式授權專案的啟動","B":"減少專案團隊規模","C":"增加專案預算","D":"延長專案時程"},
        answer: ["A"]
    },
    {
        id: "SUP-SC-033",
        chapter: "第五章 專案整合管理",
        text: "組織流程資產更新的內容可能包括什麼？",
        type: "radio",
        options: {"A":"經驗學習檔案、專案結束資訊和正式接收文件等","B":"只包括專案時程資訊","C":"只包括專案預算資訊","D":"只包括專案失敗的案例"},
        answer: ["A"]
    },
    {
        id: "SUP-SC-034",
        chapter: "第五章 專案整合管理",
        text: "______是為制定決策、採取行動或引起關注而彙編工作績效資訊(WPI)所形成的實體或電子專案文件。",
        type: "radio",
        options: {"A":"工作績效資料","B":"工作績效報告","C":"專案文件","D":"專案管理計畫書"},
        answer: ["B"]
    },
    {
        id: "SUP-SC-035",
        chapter: "第五章 專案整合管理",
        text: "哪一種交付標的才可以當作「結束專案或階段」的輸入？",
        type: "radio",
        options: {"A":"確認的交付標的","B":"專案執行後的交付標的","C":"被接受(驗收)的交付標的","D":"外包商認可的交付標的"},
        answer: ["C"]
    },
    {
        id: "SUP-SC-036",
        chapter: "第五章 專案整合管理",
        text: "結束專案或階段的輸出不包括哪一項？",
        type: "radio",
        options: {"A":"組織流程資產更新","B":"專案檔案","C":"移交最終產品、服務、或成果","D":"變更申請"},
        answer: ["D"]
    },
    {
        id: "SUP-SC-037",
        chapter: "第五章 專案整合管理",
        text: "專案管理五大流程組不包括哪一項？",
        type: "radio",
        options: {"A":"規劃流程群組","B":"執行流程群組","C":"設計流程群組","D":"啟動流程群組"},
        answer: ["C"]
    },
    {
        id: "SUP-SC-038",
        chapter: "第五章 專案整合管理",
        text: "啟動流程組在專案中發生幾次？",
        type: "radio",
        options: {"A":"每週一次","B":"每月一次","C":"多次","D":"只發生一次"},
        answer: ["C"]
    },
    {
        id: "SUP-SC-039",
        chapter: "第五章 專案整合管理",
        text: "工作分解結構(WBS)的主要功能是什麼？",
        type: "radio",
        options: {"A":"減少專案團隊人數","B":"將專案分解成可管理的工作包","C":"增加專案的複雜度","D":"延長專案時程"},
        answer: ["B"]
    },
    {
        id: "SUP-SC-040",
        chapter: "第三章 專案組織",
        text: "專案工作一般屬於什麼性質？",
        type: "radio",
        options: {"A":"只有IT部門的工作","B":"只有行政部門的工作","C":"不屬於任一功能部門的例行性工作","D":"功能部門的例行性工作"},
        answer: ["C"]
    },
    {
        id: "SUP-SC-041",
        chapter: "第三章 專案組織",
        text: "專案式團隊的缺點包括下列哪一項？",
        type: "radio",
        options: {"A":"榮譽感高","B":"工作容易聚焦","C":"管理成本偏高","D":"成員只有一個老闆"},
        answer: ["C"]
    },
    {
        id: "SUP-SC-042",
        chapter: "第三章 專案組織",
        text: "在三種矩陣式組織中，哪一種專案經理擁有最大權力？",
        type: "radio",
        options: {"A":"弱矩陣","B":"功能矩陣","C":"強矩陣","D":"平衡矩陣"},
        answer: ["C"]
    },
    {
        id: "SUP-SC-043",
        chapter: "第二章 組織策略與專案組合管理",
        text: "1)是指在一組可行投資組合中，挑選出某風險水準下，預期報酬最大之投資組合；2)或某預期報酬下，總風險最低的投資組合，並將挑選出之投資組合連線。",
        type: "radio",
        options: {"A":"前緣模式","B":"多重權重評分模式","C":"輪廓模式","D":"還本期法"},
        answer: ["A"]
    },
    {
        id: "SUP-SC-044",
        chapter: "第二章 組織策略與專案組合管理",
        text: "某企業有四個專案進行比較，採用專案交叉比較法得出結果如下圖。請問哪的專案比較好？",
        type: "radio",
        options: {"A":"專案A","B":"專案D","C":"專案C","D":"專案B"},
        answer: ["A"]
    },
    {
        id: "SUP-SC-045",
        chapter: "第一章 緒論",
        text: "專案管理的定義：統合運用管理知識、技術、工具、方法於任何專案活動上，使專案的交付標的物能符合或超越專案的需求與期望的一種專門技術 (PMBOK, 2012)。請問此段敘述的對象為何？",
        type: "radio",
        options: {"A":"利害關係人","B":"高階主管","C":"顧客","D":"社會大眾"},
        answer: ["A"]
    },
    {
        id: "SUP-SC-046",
        chapter: "第一章 緒論",
        text: "下列何者不可視為專案？",
        type: "radio",
        options: {"A":"工程建設","B":"產品研發","C":"企業導入ERP","D":"小會計阿花做結帳"},
        answer: ["D"]
    },
    {
        id: "SUP-SC-047",
        chapter: "第一章 緒論",
        text: "對專案而言，所謂「暫時性」的意思是？",
        type: "radio",
        options: {"A":"專案的工期短","B":"專案可以隨時叫停","C":"每個專案都有其開始點與結束點","D":"專案資源很多"},
        answer: ["C"]
    },
    {
        id: "SUP-SC-048",
        chapter: "第一章 緒論",
        text: "一組互相依賴的組成部份，透過共同運作以達成該系統的目標，稱為：",
        type: "radio",
        options: {"A":"專案","B":"系統","C":"計畫","D":"任務"},
        answer: ["B"]
    },
    {
        id: "SUP-SC-049",
        chapter: "第一章 緒論",
        text: "要徑法(Critical Path Method, CPM)是哪一家公司所首先開發？",
        type: "radio",
        options: {"A":"杜邦","B":"小蘋果","C":"百度","D":"股溝"},
        answer: ["A"]
    },
    {
        id: "SUP-MC-001",
        chapter: "第五章 專案整合管理",
        text: "發展專案管理計畫書的工具和技術包括：",
        type: "checkbox",
        options: {"A":"專家判斷","B":"專案管理資訊系統","C":"促進技術","D":"分析技術"},
        answer: ["A","C"]
    },
    {
        id: "SUP-MC-002",
        chapter: "第五章 專案整合管理",
        text: "交付標的變成被接受(accepted)的交付標的物必須哪二個關卡？",
        type: "checkbox",
        options: {"A":"變更控制","B":"確認範疇","C":"控制範疇","D":"控制品質"},
        answer: ["B","D"]
    },
    {
        id: "SUP-MC-003",
        chapter: "第五章 專案整合管理",
        text: "哪些情況下會產生「變更請求/申請」？",
        type: "checkbox",
        options: {"A":"監視和管制專案工作","B":"發展專案管理計畫書","C":"執行整合變更管制","D":"指導和管理專案執行"},
        answer: ["A","D"]
    },
    {
        id: "SUP-MC-004",
        chapter: "第五章 專案整合管理",
        text: "在專案的起始階段的工作包括：",
        type: "checkbox",
        options: {"A":"發展專案章程","B":"辨識利害關係人","C":"專案管理計畫書","D":"活動期程估算"},
        answer: ["A","B"]
    },
    {
        id: "SUP-MC-005",
        chapter: "第一章 緒論",
        text: "專案金三角：、 和 ______ 是加諸於專案的三重限制要素。",
        type: "checkbox",
        options: {"A":"範疇","B":"時間","C":"成本","D":"利害關係人"},
        answer: ["A","B","C"]
    },
    {
        id: "SUP-MC-006",
        chapter: "第一章 緒論",
        text: "PMBOK指出專案有幾個重要特徵，包括：",
        type: "checkbox",
        options: {"A":"暫時性的","B":"獨一無二的產品","C":"逐步完善","D":"追求完美的"},
        answer: ["A","B","C"]
    },
    {
        id: "SUP-MC-007",
        chapter: "第四章 專案管理過程",
        text: "專案管理團隊必須能瞭解和使用哪些專業技術領域知識和技能？",
        type: "checkbox",
        options: {"A":"專案管理知識體系","B":"應用領域之知識、標準、和法規","C":"一般管理知識和技能","D":"人際關係技能"},
        answer: ["A","B","C","D"]
    },
];
