const questions = [
    // --- 第一部分：符號辨識與基礎規則 (Draw-01 ~ Draw-10) ---
    {
        id: "Draw-01",
        text: "在繪製活動圖 (Activity Diagram) 時，若要表達「依據不同條件，選擇執行不同路徑」（例如：金額>1000走A路徑，否則走B路徑），應使用下列哪個符號？",
        type: "radio",
        options: {
            A: "實心圓點",
            B: "空心菱形 (Decision Node)",
            C: "粗黑線條 (Fork Node)",
            D: "矩形"
        },
        answer: ["B"]
    },
    {
        id: "Draw-02",
        text: "在活動圖中，若要表示兩個或多個活動可以「同時平行處理」(Parallel Processing)，應使用什麼符號將流程分開？",
        type: "radio",
        options: {
            A: "決策節點 (菱形)",
            B: "分岔節點 (Fork Node, 粗黑線條)",
            C: "結合節點 (Join Node)",
            D: "信號發送"
        },
        answer: ["B"]
    },
    {
        id: "Draw-03",
        text: "在使用個案圖 (Use Case Diagram) 中，若使用個案 A 的功能「一定」會用到使用個案 B 的功能（如：訂購一定會用到檢查庫存），兩者之間應畫上什麼關係線？",
        type: "radio",
        options: {
            A: "虛線箭頭 + <<extend>>",
            B: "虛線箭頭 + <<include>>",
            C: "實線 + 空心三角形",
            D: "實線"
        },
        answer: ["B"]
    },
    {
        id: "Draw-04",
        text: "關於強韌圖 (Robustness Diagram) 的繪圖規則，下列哪一種連接是「錯誤」且不被允許的？",
        type: "radio",
        options: {
            A: "參與者 (Actor) 連接 邊界物件 (Boundary)",
            B: "邊界物件 (Boundary) 連接 控制物件 (Control)",
            C: "邊界物件 (Boundary) 直接連接 實體物件 (Entity)",
            D: "控制物件 (Control) 連接 實體物件 (Entity)"
        },
        answer: ["C"]
    },
    {
        id: "Draw-05",
        text: "在循序圖 (Sequence Diagram) 中，若要表達物件 A 傳送訊息給物件 B 後，「必須等待」物件 B 回傳結果才能繼續執行，應使用哪種箭頭符號？",
        type: "radio",
        options: {
            A: "實線 + 實心箭頭 (Synchronous)",
            B: "實線 + 開放箭頭 (Asynchronous)",
            C: "虛線 + 開放箭頭",
            D: "虛線 + 實心箭頭"
        },
        answer: ["A"]
    },
    {
        id: "Draw-06",
        text: "在循序圖中，位於生命線 (Lifeline) 上的「細長矩形」代表什麼意義？",
        type: "radio",
        options: {
            A: "物件已銷毀",
            B: "物件正在休眠",
            C: "控制焦點 (Focus of Control) / 活化期，表示物件正在執行動作",
            D: "物件的屬性定義"
        },
        answer: ["C"]
    },
    {
        id: "Draw-07",
        text: "若要在循序圖中表達「迴圈 (Loop)」或「重複執行」的邏輯，應使用哪種互動片段 (Combined Fragment)？",
        type: "radio",
        options: {
            A: "alt",
            B: "opt",
            C: "loop",
            D: "break"
        },
        answer: ["C"]
    },
    {
        id: "Draw-08",
        text: "在溝通圖 (Communication Diagram) 中，為了表達訊息發生的先後順序，必須在訊息名稱前加上什麼？",
        type: "radio",
        options: {
            A: "時間戳記 (Timestamp)",
            B: "順序編號 (如 1, 1.1, 2...)",
            C: "優先權重 (High/Low)",
            D: "不需要標示，看線條長度決定"
        },
        answer: ["B"]
    },
    {
        id: "Draw-09",
        text: "在行為狀態機圖 (State Machine Diagram) 中，用來觸發狀態轉換 (Transition) 的要素通常包含哪三部分？",
        type: "radio",
        options: {
            A: "名稱、屬性、操作",
            B: "事件 (Event)、條件 [Guard]、動作 (Action)",
            C: "進入、離開、做",
            D: "起點、終點、中點"
        },
        answer: ["B"]
    },
    {
        id: "Draw-10",
        text: "在狀態機圖中，若某個動作是在物件「進入」該狀態時要立即執行一次，應標示為？",
        type: "radio",
        options: {
            A: "do / 動作",
            B: "exit / 動作",
            C: "entry / 動作",
            D: "event / 動作"
        },
        answer: ["C"]
    },

    // --- 第二部分：物件互動與結構 (Draw-11 ~ Draw-20) ---
    {
        id: "Draw-11",
        text: "在繪製「應用程式核心 (AC) 循序圖」時，主要互動的物件通常不包含下列何者？",
        type: "radio",
        options: {
            A: "控制物件 (Control Object)",
            B: "實體物件 (Entity Object)",
            C: "詳細的 GUI 元件 (如 Button, TextBox)",
            D: "參與者 (Actor，偶爾出現)"
        },
        answer: ["C"]
    },
    {
        id: "Draw-12",
        text: "在 AC 循序圖中，當控制物件需要存取資料庫資料時，它通常會發送訊息給哪種物件？",
        type: "radio",
        options: {
            A: "邊界物件 (Boundary)",
            B: "實體物件 (Entity)",
            C: "另一個控制物件",
            D: "外部系統"
        },
        answer: ["B"]
    },
    {
        id: "Draw-13",
        text: "在使用者介面塑模中，用來具體呈現介面「視覺配置」與「元件佈局」(如按鈕放哪裡、清單長怎樣) 的圖形稱為？",
        type: "radio",
        options: {
            A: "介面架構圖",
            B: "介面藍圖 (UI Blueprint)",
            C: "類別圖",
            D: "狀態圖"
        },
        answer: ["B"]
    },
    {
        id: "Draw-14",
        text: "在 PAC 模式的介面架構圖中，負責處理「輸入/輸出」及「視覺呈現」的是哪一個部分？",
        type: "radio",
        options: {
            A: "Presentation (表達)",
            B: "Abstraction (摘述)",
            C: "Control (控制)",
            D: "Data (資料)"
        },
        answer: ["A"]
    },
    {
        id: "Draw-15",
        text: "關於「介面詞彙 (UI Vocabulary)」的用途，下列敘述何者正確？",
        type: "radio",
        options: {
            A: "用來畫出介面的流程圖",
            B: "用來詳細定義介面元件的屬性(如資料型態、長度、預設值)",
            C: "用來取代資料庫設計",
            D: "用來描述使用者的操作習慣"
        },
        answer: ["B"]
    },
    {
        id: "Draw-16",
        text: "在類別圖中，若類別 A 是類別 B 的一種 (例如：卡車 Is-a 車子)，應使用什麼符號表示「一般化/繼承」關係？",
        type: "radio",
        options: {
            A: "虛線箭頭",
            B: "實線 + 空心菱形",
            C: "實線 + 實心菱形",
            D: "實線 + 空心三角形箭頭 (指向父類別)"
        },
        answer: ["D"]
    },
    {
        id: "Draw-17",
        text: "在類別圖中，若要表示「整體與部分」的強烈擁有關係(Composition)，即整體消失、部分也會消失，應使用什麼符號？",
        type: "radio",
        options: {
            A: "實線 + 空心菱形",
            B: "實線 + 實心菱形 (畫在整體端)",
            C: "虛線 + 箭頭",
            D: "實線 + 箭頭"
        },
        answer: ["B"]
    },
    {
        id: "Draw-18",
        text: "在類別圖中，若兩個類別之間只是暫時的「使用」關係 (Dependency)，例如由參數傳遞，應使用什麼符號？",
        type: "radio",
        options: {
            A: "實線",
            B: "虛線 + 箭頭",
            C: "雙線",
            D: "粗體線"
        },
        answer: ["B"]
    },
    {
        id: "Draw-19",
        text: "在類別圖的屬性區塊中，若屬性前方標示「-」符號，代表其可見度 (Visibility) 為何？",
        type: "radio",
        options: {
            A: "Public (公開)",
            B: "Private (私有)",
            C: "Protected (保護)",
            D: "Package (套件)"
        },
        answer: ["B"]
    },
    {
        id: "Draw-20",
        text: "在類別圖中，若某個屬性是「衍生屬性」(Derived Attribute)，即其值是由其他屬性計算而得(如年齡由生日推算)，應在屬性名稱前加上什麼符號？",
        type: "radio",
        options: {
            A: "*",
            B: "/",
            C: "#",
            D: "&"
        },
        answer: ["B"]
    },

    // --- 第三部分：進階判斷與應用 (Draw-21 ~ Draw-30) ---
    {
        id: "Draw-21",
        text: "若一個類別名稱以「斜體字」表示，這通常代表它是什麼類別？",
        type: "radio",
        options: {
            A: "抽象類別 (Abstract Class)",
            B: "靜態類別 (Static Class)",
            C: "介面 (Interface)",
            D: "列舉 (Enum)"
        },
        answer: ["A"]
    },
    {
        id: "Draw-22",
        text: "在類別圖的關聯線上，若標示「1..*」，這代表什麼意思？",
        type: "radio",
        options: {
            A: "多重性 (Multiplicity)：至少 1 個，多則不限",
            B: "多重性：0 個或 1 個",
            C: "這是一個備註",
            D: "這是一個運算式"
        },
        answer: ["A"]
    },
    {
        id: "Draw-23",
        text: "當兩個類別之間存在「多對多」關係時，通常需要建立什麼來存放該關係的屬性？",
        type: "radio",
        options: {
            A: "介面 (Interface)",
            B: "關聯類別 (Association Class)",
            C: "繼承關係",
            D: "列舉"
        },
        answer: ["B"]
    },
    {
        id: "Draw-24",
        text: "若要描述系統中「訂單」物件從「建立」、「付款」到「出貨」的生命週期狀態變化，最適合畫哪一種圖？",
        type: "radio",
        options: {
            A: "類別圖",
            B: "使用個案圖",
            C: "狀態機圖 (State Machine Diagram)",
            D: "部署圖"
        },
        answer: ["C"]
    },
    {
        id: "Draw-25",
        text: "若要描述「使用者」點擊按鈕後，介面如何呼叫控制器，控制器如何存取資料庫的「詳細互動流程」，最適合畫哪一種圖？",
        type: "radio",
        options: {
            A: "循序圖 (Sequence Diagram)",
            B: "類別圖 (Class Diagram)",
            C: "部署圖 (Deployment Diagram)",
            D: "介面架構圖"
        },
        answer: ["A"]
    },
    {
        id: "Draw-26",
        text: "關於「實體物件 (Entity Object)」在循序圖中的生命線位置，通常會排在畫面的？",
        type: "radio",
        options: {
            A: "最左側 (最先處理)",
            B: "最右側 (通常被控制物件呼叫)",
            C: "中間",
            D: "不一定"
        },
        answer: ["B"]
    },
    {
        id: "Draw-27",
        text: "在 Net-PAC 模式中，用來連接與協調 Presentation (表達) 與 Abstraction (摘述) 的元件是？",
        type: "radio",
        options: {
            A: "Control (控制)",
            B: "Model (模型)",
            C: "View (視圖)",
            D: "Database (資料庫)"
        },
        answer: ["A"]
    },
    {
        id: "Draw-28",
        text: "在類別圖中，若屬性有「底線 (Underline)」(如 <u>taxRate</u>)，代表它是？",
        type: "radio",
        options: {
            A: "靜態屬性 (Static/Class Attribute)，所有物件共用",
            B: "私有屬性",
            C: "唯讀屬性",
            D: "主鍵"
        },
        answer: ["A"]
    },
    {
        id: "Draw-29",
        text: "若要將循序圖轉換為溝通圖 (Communication Diagram)，循序圖中的「生命線」會變成溝通圖中的什麼？",
        type: "radio",
        options: {
            A: "連結 (Link)",
            B: "物件節點 (Object Node)",
            C: "訊息箭頭",
            D: "邊界"
        },
        answer: ["B"]
    },
    {
        id: "Draw-30",
        text: "在進行「物件結構塑模」時，最後產出的最重要圖表是？",
        type: "radio",
        options: {
            A: "活動圖",
            B: "使用個案圖",
            C: "類別圖 (Class Diagram)",
            D: "循序圖"
        },
        answer: ["C"]
    },

    // --- 第四部分：填空觀念延伸 - 靜態與動態 (Draw-31 ~ Draw-32) ---
    {
        id: "Draw-31",
        text: "填空題提到的「使用者介面靜態結構塑模」，主要應使用下列哪一種工具來呈現介面的視覺配置與元件佈局？",
        type: "radio",
        options: {
            A: "介面藍圖 (UI Blueprint)",
            B: "循序圖 (Sequence Diagram)",
            C: "狀態機圖 (State Machine Diagram)",
            D: "活動圖 (Activity Diagram)"
        },
        answer: ["A"]
    },
    {
        id: "Draw-32",
        text: "若要進行「動線規劃」與介面間的切換邏輯（動態行為塑模），應優先繪製哪一種圖？",
        type: "radio",
        options: {
            A: "類別圖 (Class Diagram)",
            B: "部署圖 (Deployment Diagram)",
            C: "UI 循序圖 或 行為狀態機圖",
            D: "介面詞彙表"
        },
        answer: ["C"]
    },

    // --- 第五部分：填空觀念延伸 - 循序圖物件類型 (Draw-33 ~ Draw-36) ---
    {
        id: "Draw-33",
        text: "在繪製循序圖時，代表「與使用者直接互動的畫面或週邊設備」的「介面物件 (Boundary Object)」，通常使用什麼圖示？",
        type: "radio",
        options: {
            A: "圓形加上箭頭",
            B: "圓形左側有一條短直線 (類似 '├-O' 形狀)",
            C: "圓形上方有箭頭 (類似轉向符號)",
            D: "一般的矩形"
        },
        answer: ["B"]
    },
    {
        id: "Draw-34",
        text: "在循序圖中，用來表示「負責協調運作、處理邏輯」的「控制物件 (Control Object)」，其標準圖示為何？",
        type: "radio",
        options: {
            A: "圓形加上箭頭 (類似轉向符號)",
            B: "圓形下方有一條橫線 (類似 'T' 形狀)",
            C: "圓形左側有一條短直線",
            D: "空心菱形"
        },
        answer: ["A"]
    },
    {
        id: "Draw-35",
        text: "在循序圖中，代表「系統資料或資料庫資料表」的「實體物件 (Entity Object)」，其標準圖示為何？",
        type: "radio",
        options: {
            A: "圓形下方有一條橫線 (類似 'Ω' 或 'T' 加上底線)",
            B: "圓形加上箭頭",
            C: "一般的矩形",
            D: "圓柱體"
        },
        answer: ["A"]
    },
    {
        id: "Draw-36",
        text: "關於循序圖的繪圖規則，下列哪一種訊息傳遞路徑是「不建議」甚至錯誤的？",
        type: "radio",
        options: {
            A: "參與者 -> 介面物件",
            B: "介面物件 -> 控制物件",
            C: "參與者 -> 實體物件 (直接跳過介面與控制)",
            D: "控制物件 -> 實體物件"
        },
        answer: ["C"]
    },

    // --- 第六部分：填空觀念延伸 - 類別與關聯 (Draw-37 ~ Draw-38) ---
    {
        id: "Draw-37",
        text: "當我們在類別圖中發現兩個類別之間是「多對多 (M:N)」關係時，為了保存該關係的屬性（如：訂購數量），必須畫出什麼？",
        type: "radio",
        options: {
            A: "一個新的介面",
            B: "一個關聯類別 (Association Class)，並用虛線連至關聯線上",
            C: "一條雙向箭頭",
            D: "直接在其中一個類別增加屬性"
        },
        answer: ["B"]
    },
    {
        id: "Draw-38",
        text: "在類別圖中，若要將「關聯類別」連接到兩個類別之間的關聯線上，應使用什麼線條？",
        type: "radio",
        options: {
            A: "實線",
            B: "虛線",
            C: "雙線",
            D: "粗體線"
        },
        answer: ["B"]
    },

    // --- 第七部分：繪圖時機與情境判斷 (Draw-39 ~ Draw-42) ---
    {
        id: "Draw-39",
        text: "若老師要求你：「請畫出一張圖，描述系統中『訂單』物件從『建立』、『審核』、『出貨』到『結案』的狀態變化過程」，你該畫哪張圖？",
        type: "radio",
        options: {
            A: "活動圖 (Activity Diagram)",
            B: "使用個案圖 (Use Case Diagram)",
            C: "狀態機圖 (State Machine Diagram)",
            D: "溝通圖 (Communication Diagram)"
        },
        answer: ["C"]
    },
    {
        id: "Draw-40",
        text: "若題目要求：「請畫圖表達使用者登入系統時，介面物件、控制物件與資料庫物件之間傳遞訊息的詳細時間順序」，最適合的是？",
        type: "radio",
        options: {
            A: "循序圖 (Sequence Diagram)",
            B: "類別圖 (Class Diagram)",
            C: "活動圖 (Activity Diagram)",
            D: "部署圖 (Deployment Diagram)"
        },
        answer: ["A"]
    },
    {
        id: "Draw-41",
        text: "若要描述系統的「功能需求」以及「誰(使用者)可以使用這些功能」，最優先繪製的是？",
        type: "radio",
        options: {
            A: "使用個案圖 (Use Case Diagram)",
            B: "類別圖 (Class Diagram)",
            C: "循序圖 (Sequence Diagram)",
            D: "強韌圖 (Robustness Diagram)"
        },
        answer: ["A"]
    },
    {
        id: "Draw-42",
        text: "若要描述一個複雜的商業流程（例如：請購流程，包含判斷金額大小走不同路徑、多部門平行簽核），應使用哪種圖？",
        type: "radio",
        options: {
            A: "狀態機圖",
            B: "活動圖 (Activity Diagram)",
            C: "物件圖",
            D: "類別圖"
        },
        answer: ["B"]
    },

    // --- 第八部分：繪圖細節與符號意義 (Draw-43 ~ Draw-54) ---
    {
        id: "Draw-43",
        text: "在類別圖中，若看到一條連線，端點是「空心三角形」且指向類別 A，另一端連著類別 B，這代表？",
        type: "radio",
        options: {
            A: "B 是 A 的一部分 (聚合)",
            B: "B 繼承了 A (一般化/泛化)",
            C: "B 關聯到 A",
            D: "B 依賴 A"
        },
        answer: ["B"]
    },
    {
        id: "Draw-44",
        text: "在活動圖 (Activity Diagram) 中，一個實心的黑色圓點通常代表什麼？",
        type: "radio",
        options: {
            A: "決策點",
            B: "流程結束",
            C: "初始節點 (Initial Node) / 流程開始",
            D: "活動合併"
        },
        answer: ["C"]
    },
    {
        id: "Draw-45",
        text: "在活動圖中，一個「牛眼」符號（實心圓外加一圈空心圓）代表什麼？",
        type: "radio",
        options: {
            A: "活動開始",
            B: "活動結束 (Final Node)",
            C: "信號接收",
            D: "時間事件"
        },
        answer: ["B"]
    },
    {
        id: "Draw-46",
        text: "在使用個案圖中，若要表示「查詢成績」功能『可以』(Optional) 額外執行「列印成績單」功能，應使用哪種關係？",
        type: "radio",
        options: {
            A: "<<include>> (包含)",
            B: "<<extend>> (擴充)",
            C: "<<use>>",
            D: "<<copy>>"
        },
        answer: ["B"]
    },
    {
        id: "Draw-47",
        text: "在使用個案圖中，若「租車」與「還車」兩個功能都『必須』執行「檢查身分」這個共同步驟，應使用哪種關係？",
        type: "radio",
        options: {
            A: "<<include>> (包含)",
            B: "<<extend>> (擴充)",
            C: "<<link>>",
            D: "<<inherit>>"
        },
        answer: ["A"]
    },
    {
        id: "Draw-48",
        text: "在繪製類別圖時，若某個類別是「執行完畢後不需要儲存」的（如：控制類別），它屬於哪種性質？",
        type: "radio",
        options: {
            A: "永存類別 (Persistent Class)",
            B: "暫存類別 (Transient Class)",
            C: "抽象類別 (Abstract Class)",
            D: "介面 (Interface)"
        },
        answer: ["B"]
    },
    {
        id: "Draw-49",
        text: "在系統實作中，「實體類別 (Entity Class)」通常會被映射/實作為什麼？",
        type: "radio",
        options: {
            A: "使用者介面的表單",
            B: "資料庫中的資料表 (Table)",
            C: "系統的主程式",
            D: "網路通訊協定"
        },
        answer: ["B"]
    },
    {
        id: "Draw-50",
        text: "下列哪一種圖形「不屬於」UML 的互動圖 (Interaction Diagram)？",
        type: "radio",
        options: {
            A: "循序圖 (Sequence Diagram)",
            B: "溝通圖 (Communication Diagram)",
            C: "類別圖 (Class Diagram)",
            D: "互動概觀圖 (Interaction Overview Diagram)"
        },
        answer: ["C"]
    },
    {
        id: "Draw-51",
        text: "在類別圖中，若屬性寫著 `+ name : String`，前面的 `+` 號代表什麼權限？",
        type: "radio",
        options: {
            A: "Private (私有)",
            B: "Public (公開)",
            C: "Protected (保護)",
            D: "Package (套件)"
        },
        answer: ["B"]
    },
    {
        id: "Draw-52",
        text: "在類別圖中，若操作寫著 `update(amount : Integer) : Boolean`，其中 `Boolean` 代表什麼？",
        type: "radio",
        options: {
            A: "輸入參數的型別",
            B: "操作的名稱",
            C: "回傳值的型別 (Return Type)",
            D: "可見度"
        },
        answer: ["C"]
    },
    {
        id: "Draw-53",
        text: "在循序圖中，若要表示「刪除物件」或「物件生命週期結束」，應在生命線尾端畫上什麼符號？",
        type: "radio",
        options: {
            A: "黑色實心圓",
            B: "大大的 X",
            C: "正方形",
            D: "三角形"
        },
        answer: ["B"]
    },
    {
        id: "Draw-54",
        text: "在活動圖的「泳道 (Swimlane)」設計中，每個泳道上方通常標示的是什麼？",
        type: "radio",
        options: {
            A: "執行的時間點",
            B: "負責執行該活動的組織單位或角色 (如：營業部、會計)",
            C: "資料的型態",
            D: "活動的優先順序"
        },
        answer: ["B"]
    },

    // --- 第九部分：整合應用與總結 (Draw-55 ~ Draw-60) ---
    {
        id: "Draw-55",
        text: "若要在類別圖中表示「部門」與「員工」的關係，且部門消失時，員工資料依然保留（非強烈相依），應使用哪種關係？",
        type: "radio",
        options: {
            A: "組合 (Composition) - 實心菱形",
            B: "聚合 (Aggregation) - 空心菱形",
            C: "繼承 (Generalization)",
            D: "實現 (Realization)"
        },
        answer: ["B"]
    },
    {
        id: "Draw-56",
        text: "當繪製狀態圖時，若同一個事件在不同狀態下會觸發不同的動作，這主要是在描述物件的什麼特性？",
        type: "radio",
        options: {
            A: "多型 (Polymorphism) 或 動態行為",
            B: "繼承 (Inheritance)",
            C: "封裝 (Encapsulation)",
            D: "靜態結構"
        },
        answer: ["A"]
    },
    {
        id: "Draw-57",
        text: "在 Net-PAC 介面架構圖中，各個 PAC 代理人 (Agent) 之間主要透過哪一部分進行溝通？",
        type: "radio",
        options: {
            A: "Presentation (表達)",
            B: "Abstraction (摘述)",
            C: "Control (控制)",
            D: "直接互相呼叫"
        },
        answer: ["C"]
    },
    {
        id: "Draw-58",
        text: "在循序圖中，若要強調訊息是「非同步」的（發送後不等待回應，直接往下執行），應畫成？",
        type: "radio",
        options: {
            A: "實線 + 實心箭頭",
            B: "實線 + 開放式箭頭 (Open Arrowhead)",
            C: "虛線 + 實心箭頭",
            D: "雙線箭頭"
        },
        answer: ["B"]
    },
    {
        id: "Draw-59",
        text: "在繪製「使用個案圖」時，參與者 (Actor) 一定要畫成火柴人嗎？",
        type: "radio",
        options: {
            A: "一定要，這是唯一標準",
            B: "不一定，若代表外部系統，也可以畫成標示 <<actor>> 的矩形類別圖示",
            C: "不行，只能用文字描述",
            D: "隨便畫都可以"
        },
        answer: ["B"]
    },
    {
        id: "Draw-60",
        text: "總結來說，若要進行「物件導向分析與設計 (OOAD)」，圖形的繪製順序通常建議為何？（參考 Ch5~Ch9 流程）",
        type: "radio",
        options: {
            A: "類別圖 -> 循序圖 -> 使用個案圖",
            B: "使用個案圖/活動圖 (需求) -> 循序圖 (互動) -> 類別圖 (結構)",
            C: "部署圖 -> 類別圖 -> 活動圖",
            D: "資料庫 schema -> 程式碼 -> 補畫圖"
        },
        answer: ["B"]
    }
];