// TQC 資料庫設計與應用 - 題庫 Part 1
// 來源檔案: 1.pdf (涵蓋 1-01 至 3-29)

const questions_part1 = [
    // --- 第一類: 資料庫概論 ---
    {
        id: "1-01",
        text: "資料庫管理系統的簡稱是下列何項？",
        options: { A: "DSS", B: "DBMS", C: "MBA", D: "MDBS" },
        answer: ["B"],
        type: "radio"
    },
    {
        id: "1-02",
        text: "下列何項不是資料庫管理系統的主要功能？",
        options: { A: "動態復原故障的資料庫", B: "降低資料的重複性", C: "無法供人同時使用", D: "提供並行控制確保資料正確性" },
        answer: ["C"],
        type: "radio"
    },
    {
        id: "1-03",
        text: "主從式架構系統的構成要件中，包括下列哪三大要件？(複選)",
        options: { A: "伺服器(Server)", B: "網路(Network)", C: "用戶(Client)", D: "電子信箱(E-mail)" },
        answer: ["A", "B", "C"],
        type: "checkbox"
    },
    {
        id: "1-04",
        text: "下列有關主從式架構與中央集中式架構差異的敘述，何者正確？(複選)",
        options: { A: "主從式架構可以針對不同的需要，在網路上安裝各類的伺服器", B: "用戶端不再是終端機，而是具有處理能力的個人電腦", C: "用戶與伺服器之間，是以共用式的網路連接", D: "用戶與用戶之間可以透過網路互動或是作資源共享" },
        answer: ["A", "B", "C", "D"],
        type: "checkbox"
    },
    {
        id: "1-05",
        text: "在兩層式應用系架構下，用戶端包含下列哪些應用功能？(複選)",
        options: { A: "使用者介面(User Interface)", B: "應用邏輯(Application Logic)", C: "營運規則(Bussiness Rules)", D: "資料存取(Data Access)" },
        answer: ["A", "B", "C"],
        type: "checkbox"
    },
    {
        id: "1-06",
        text: "三層式(Three-tier)應用系統架構主要是改善兩層式應用系統架構系統的缺點，兩者的差別在於將何項功能獨立置於應用伺服器？",
        options: { A: "使用者介面(User Interface)", B: "應用邏輯(Application Logic)", C: "營運規則(Bussiness Rules)", D: "資料存取(Data Access)" },
        answer: ["C"],
        type: "radio"
    },
    {
        id: "1-07",
        text: "採用兩層式應用架構有下列哪些缺點需要克服？(複選)",
        options: { A: "無論伺服器或客戶端，對於硬體設備的要求需要較高等级的配備", B: "每一用戶端應用都必須與伺服器連線，當同時上線的使用者很多，會佔用伺服器較多的資源", C: "營運規則會隨企業的運作而改變，修改營運規則後，會造成新版本軟體派發的困難", D: "營運規則與應用邏輯位於伺服端，加快運算的速度" },
        answer: ["B", "C"],
        type: "checkbox"
    },
    {
        id: "1-08",
        text: "關聯式資料庫管理系統簡稱為下列何項？",
        options: { A: "RDSS", B: "RDBMS", C: "RMBAS", D: "RDSM" },
        answer: ["B"],
        type: "radio"
    },
    {
        id: "1-09",
        text: "目前被普遍使用於關聯式資料庫的標準查詢語言為何？",
        options: { A: "VB.NET", B: "C++", C: "JAVA", D: "SQL" },
        answer: ["D"],
        type: "radio"
    },
    {
        id: "1-10",
        text: "有關關聯式資料庫是以哪種結構方式將資料組織起來的？",
        options: { A: "階層結構", B: "網狀結構", C: "表格結構", D: "星狀結構" },
        answer: ["C"],
        type: "radio"
    },
    {
        id: "1-11",
        text: "下列哪一種資料庫的資料是分類儲存在許多二維的資料表中，並將資料表與資料表之間以共同欄位建立關聯？",
        options: { A: "關聯式(Relational)", B: "網路式(Network)", C: "階層式(Hierarchical)", D: "星狀式(Star)" },
        answer: ["A"],
        type: "radio"
    },
    {
        id: "1-12",
        text: "下列關於關聯式資料庫中資料表架構的敘述，何者有誤？",
        options: { A: "在資料表中不會有空白的記錄，以及數量不一的欄位", B: "在資料表中，每一列的資料不會有重複的情況出現", C: "在資料表中，每一列的排序順序並沒有固定，而且可以改變排列順序", D: "每一資料庫僅由一個資料表組成" },
        answer: ["D"],
        type: "radio"
    },
    {
        id: "1-13",
        text: "下列何者不是主鍵的特性？",
        options: { A: "欄位中的每一個值都具有唯一性", B: "在意義上要有代表性，不可為虛值(null value)", C: "一個主鍵最多包含20個欄位", D: "具有一般索引的功能" },
        answer: ["C"],
        type: "radio"
    },
    {
        id: "1-14",
        text: "下列資料庫應用軟體，哪些是屬於關聯式資料管理系統？(複選)",
        options: { A: "MySQL", B: "Access", C: "Oracle", D: "SQL Server" },
        answer: ["A", "B", "C", "D"],
        type: "checkbox"
    },
    {
        id: "1-15",
        text: "在關聯式資料庫中，資料表與資料表之間的連接需透過鍵(Key)來完成，下列有關鍵(Key)的敘述中，何者錯誤？",
        options: { A: "資料庫中任一欄位均可視為主鍵(Primary Key)", B: "在資料庫中，所有可以作為主鍵的欄位均可稱為候選鍵(Candidate Key)", C: "候選鍵沒被選為主鍵者，稱為候補鍵(Alternate Key)", D: "外部鍵(Foreign Key)指的是可以用來指向其他資料表內主鍵的欄位" },
        answer: ["A"],
        type: "radio"
    },
    {
        id: "1-16",
        text: "關於鍵值的說明，下列敘述何者有誤？",
        options: { A: "鍵的作用是用來連結資料表與資料表", B: "資料表中可以作為辨別每筆記錄的依據欄位為主鍵", C: "資料庫中可作為主鍵的欄位稱為候補鍵", D: "候補鍵可以用來指向其他資料表內的主鍵" },
        answer: ["D"],
        type: "radio"
    },
    {
        id: "1-17",
        text: "下關於關聯式資料庫的敘述，何者不正確？",
        options: { A: "資料的儲存以表格為基礎", B: "表格內的資料必須依欄位順序排列", C: "表格內的資料不可以重複", D: "表格內的欄位代表資料的屬性" },
        answer: ["C"],
        type: "radio"
    },
    {
        id: "1-18",
        text: "下列敘述何者不正確？",
        options: { A: "關聯式資料庫資料表格的主鍵值不可以是空值", B: "資料庫是一套管理大量資料的系統軟體", C: "未經正規化的資料庫也可以避免資料的重覆", D: "Update 是結構化查詢語言(SQL)的指令之一" },
        answer: ["C"],
        type: "radio"
    },
    {
        id: "1-19",
        text: "在關聯式資料庫中，下列敘述何者正確？(複選)",
        options: { A: "記錄就是資料儲存的單位，即是一般所看到的一列", B: "在資料表中可分成數個欄位，每個欄位相關的值組成一筆記錄", C: "同性質的記錄集合成為一個資料表", D: "一個或數個相關的資料表就組成一個資料庫" },
        answer: ["A", "B", "C", "D"],
        type: "checkbox"
    },
    {
        id: "1-20",
        text: "關聯式資料庫中，資料表與資料表之間是透過下列何者來完成連結？",
        options: { A: "超連結(Hyperlink)", B: "鍵(Key)", C: "光纖", D: "網路" },
        answer: ["B"],
        type: "radio"
    },
    {
        id: "1-21",
        text: "在邏輯的觀念上，關聯式資料庫的組成由小而大順序，下列哪一項是正確的？",
        options: { A: "值->欄->資料表->資料庫", B: "記錄->欄->資料表->資料庫", C: "值->記錄->欄->資料庫", D: "值->記錄->資料表->資料庫" },
        answer: ["D"], // 原始答案給 D，但一般邏輯是 值(Field Data) -> 欄(Column)/列(Row) -> 表(Table) -> 庫(DB)，此處依題庫答案為準
        type: "radio"
    },
    {
        id: "1-22",
        text: "關聯式資料庫中所謂的「記錄」，其意涵和下列何者相同？",
        options: { A: "欄位", B: "列", C: "值", D: "欄位名稱" },
        answer: ["B"],
        type: "radio"
    },
    {
        id: "1-23",
        text: "某公司人事資料表中，哪一個欄位最適合做為主键(Primary Key)？<br>職號 | 姓名 | 單位 | 職稱 | 分機號碼<br>X001 | 張曉惠 | 總務處 | 主任 | 521<br>...",
        options: { A: "職號", B: "單位", C: "職稱", D: "分機號碼" },
        answer: ["A"],
        type: "radio"
    },
    {
        id: "1-24",
        text: "下列有關關聯式資料庫的資料表中，主鍵(Primary Key)的敘述何者錯誤？",
        options: { A: "不可為空值(Null)", B: "該值不可有重復", C: "一個置料表中只能有一組主鍵", D: "該值的資料類型不可為日期" },
        answer: ["D"],
        type: "radio"
    },
    {
        id: "1-25",
        text: "所有符合主鍵條件的鍵，稱為下列何項？",
        options: { A: "Composite Key", B: "Foreign Key", C: "Alternate Key", D: "Candidate Key" },
        answer: ["D"],
        type: "radio"
    },
    {
        id: "1-26",
        text: "下列關聯式資料庫的敘述，何項是正確的？",
        options: { A: "一個資料表(table)是由許多欄位組成的", B: "需依照主鍵欄位內容排序來儲存資料", C: "不需依照欄位內容排序來儲存資料", D: "主鍵欄位內容值可重復" },
        answer: ["C"],
        type: "radio"
    },
    {
        id: "1-27",
        text: "關聯式資料庫如何產生關聯？",
        options: { A: "使用兩個資料表的共通欄位相互關聯", B: "使用資料庫的樹狀結構建立關聯", C: "使用特殊的檔名來建立關聯", D: "使用物件導向的觀念來建立關聯" },
        answer: ["A"],
        type: "radio"
    },
    {
        id: "1-28",
        text: "在資料表中設定何種屬性，可以做為唯一識別該筆記錄的依據？",
        options: { A: "主鍵", B: "連外鍵", C: "關聯鍵", D: "連結鍵" },
        answer: ["A"],
        type: "radio"
    },
    {
        id: "1-29",
        text: "在資料庫的規劃中，能將資料的重覆性减至最小的過程稱為？",
        options: { A: "正規化", B: "結構化", C: "階層化", D: "模組化" },
        answer: ["A"],
        type: "radio"
    },
    {
        id: "1-30",
        text: "資料庫設計中，正規化的目的為何？",
        options: { A: "降低資料重複", B: "减少資料的錯誤", C: "提高存取速度", D: "節省資料處理時間" },
        answer: ["A"],
        type: "radio"
    },
    {
        id: "1-31",
        text: "關於關聯式資料庫資料表格的正規化(Normalization)，下列敘述何者不正確？",
        options: { A: "正規化會減少資料表格的個數", B: "正規化可以减少資料的重覆性", C: "正規化可以降低資料不一致或錯誤的情況發生", D: "第三正規型式刪除遞移依賴性(transitive dependency)" },
        answer: ["A"], // 正規化通常會增加表格個數
        type: "radio"
    },
    {
        id: "1-32",
        text: "可以消除表格部份依賴關係的是下列哪個正規化？",
        options: { A: "第一正規化", B: "第二正規化", C: "第三正規化", D: "第四正規化" },
        answer: ["B"],
        type: "radio"
    },
    {
        id: "1-33",
        text: "消除重複性資料是在哪個正規化階段完成？",
        options: { A: "1NF", B: "2NF", C: "3NF", D: "BCNF" },
        answer: ["A"],
        type: "radio"
    },
    {
        id: "1-34",
        text: "完成第一正規化的表格最重要的是能滿足哪項條件？",
        options: { A: "每個欄位只能含有一個值", B: "非主鍵的欄位對主鍵有完全地功能性相依(Fully Functional Dependency)關係", C: "非主鍵的欄位之間沒有「完全地功能性相依」關係", D: "除去任何因功能相依所造成的異常結果" },
        answer: ["A"],
        type: "radio"
    },
    {
        id: "1-35",
        text: "下列何者是第一正規化過程中對資料庫處理的步驟？",
        options: { A: "去除重復資料", B: "消除部份功能相依", C: "消除遞移相依", D: "消除功能相關產生的問題" },
        answer: ["A"],
        type: "radio"
    },
    {
        id: "1-36",
        text: "「在資料表中欄與列的交會只會存放單一筆資料」可以滿足哪一階段的正規化型式？",
        options: { A: "1NF", B: "2NF", C: "3NF", D: "BCNF" },
        answer: ["A"],
        type: "radio"
    },
    {
        id: "1-37",
        text: "滿足所有非主鍵的欄位，必須只能由主鍵來做唯一識別的資料表是哪一階段的正規化型式？",
        options: { A: "1NF", B: "2NF", C: "3NF", D: "BCNF" },
        answer: ["B"],
        type: "radio"
    },
    {
        id: "1-38",
        text: "關聯式資料庫設計正規化包括下列哪些？(複選)",
        options: { A: "1NF", B: "2NF", C: "3NF", D: "BCNF" },
        answer: ["A", "B", "C", "D"],
        type: "checkbox"
    },
    {
        id: "1-39",
        text: "對於關聯式資料庫中，下列有關正規化的敘述，何者是正確的？",
        options: { A: "第一正規化允許有多重值屬性", B: "一個關聯表符合2NF必須其每個非主鍵欄位均關聯於所有主鍵欄位", C: "BCNF 對每一功能相依，其左邊必定為主鍵", D: "資料表內所有非候選鍵屬性均完全功能性相依於主鍵的限制，稱於BCNF" },
        answer: ["B"],
        type: "radio"
    },
    {
        id: "1-40",
        text: "在正規化的過程中，資料表加入主鍵欄位是屬於哪一個階段？",
        options: { A: "1NF", B: "2NF", C: "3NF", D: "BCNF" },
        answer: ["A"],
        type: "radio"
    },

    // --- 第二類: 資料庫安裝與啟動 ---
    {
        id: "2-01",
        text: "下列哪一個資料庫管理系統是可以免費使用的？",
        options: { A: "Microsoft Access 2003", B: "SQL Server 2000", C: "MySQL 5", D: "Oracle" },
        answer: ["C"],
        type: "radio"
    },
    {
        id: "2-02",
        text: "有關 MySQL的敘述，下列何者錯誤？",
        options: { A: "可以在許多平台上執行，包括Linux、Windows", B: "簡單易學、彈性大、執行速度快是MySQL的優點", C: "使用者可以隨時檢查 MySQL 原始檔或修正些錯誤", D: "MySQL 只能在預設的DOS模式下使用" },
        answer: ["D"],
        type: "radio"
    },
    {
        id: "2-03",
        text: "可以執行 MySQL 的作業平台，包括哪些作業平台？(複選)",
        options: { A: "Windows", B: "Unix", C: "Linux", D: "Google" },
        answer: ["A", "B", "C"],
        type: "checkbox"
    },
    {
        id: "2-04",
        text: "安裝 MySQL5，預設使用者帳號為何？",
        options: { A: "localhost", B: "Administrator", C: "root", D: "空白" },
        answer: ["C"],
        type: "radio"
    },
    {
        id: "2-05",
        text: "MySQL 5 預設的通訊埠為何？",
        options: { A: "8080", B: "3306", C: "1433", D: "5050" },
        answer: ["B"],
        type: "radio"
    },
    {
        id: "2-06",
        text: "下列何者敘述錯誤？",
        options: { A: "MySQL 是一個資料庫軟體", B: "My SQL Query Browser 是 MySQL 5視覺化資料庫維護及管理程式", C: "MySQL 是開放式的原始碼，只能安裝在Linux平台，不能應用於Windows", D: "MySQL Administrator 只要是個人使用，不使用在商業用途上，都可以從 MySQL 網站上免費下載使用" },
        answer: ["C"],
        type: "radio"
    },
    {
        id: "2-07",
        text: "下列哪些是安装 MySQL5預設的資料庫？(複選)",
        options: { A: "test", B: "mysql", C: "db 1", D: "schema" },
        answer: ["A", "B"],
        type: "checkbox"
    },
    {
        id: "2-08",
        text: "使用 MySQL Query Browser的敘述，下列哪一項有誤？",
        options: { A: "下戴使用 MySQL Query Browser，可以在視窗介面中輕易的管理資料庫", B: "同時安裝 MySQL Administrator 及MySQL Query Browser 時，MySQL 5會結合兩者來管理資料庫，使用者可直接由 Mysql Administrator 進入MySQL Query Browser 進行資料庫管理操作", C: "除 MySQL 5預設的資料庫外，滑鼠在 Schemata 視窗空白處按右鍵，選擇執行 Create New Schema 選項可以新增一資料庫", D: "建立資料表時對資料表的資料型態選擇必須謹慎，一旦設錯欄位屬性，便不能再修改" },
        answer: ["D"],
        type: "radio"
    },
    {
        id: "2-09",
        text: "安裝 MySQL5時，如果系統上有另一版本的MySQL，則需先以下列哪一個命令來讓伺服器停止？",
        options: { A: "stop();", B: "mysqladmin -u root -p shutdown", C: "mysqld-remove root", D: "musql-stop server" },
        answer: ["B"],
        type: "radio"
    },
    {
        id: "2-10",
        text: "在文字模式下，如果離開 MySQL伺服器，可執行下列哪些命令？(複選)",
        options: { A: "exit", B: "quit", C: "\\q", D: "stop" },
        answer: ["A", "B", "C"],
        type: "checkbox"
    },
    {
        id: "2-11",
        text: "安裝 MySQL 資料庫後，有關權限資料表是位於內建的哪一個資料庫中？",
        options: { A: "test", B: "mysql", C: "db 1", D: "qwhy" },
        answer: ["B"],
        type: "radio"
    },
    {
        id: "2-12",
        text: "Windows 環境中成功安装好 MySQL後，在文字模式下使用root 帳號要登入本機上的 mysql 資料庫，需執行下列哪一個指合？",
        options: { A: "mysql -u root -p", B: "login username= 'root'", C: "mysql -u root -p '1234'", D: "run mysql -u root" },
        answer: ["A"],
        type: "radio"
    },
    {
        id: "2-13",
        text: "在 Windows 系統下，安装 MySQL 系統檔案後，由文字模式下成功登入本機 mysq資料庫後，提示字元會是下列哪一個？",
        options: { A: "C:\\>", B: "C:\\mysql>", C: "mysql>", D: ">>" },
        answer: ["C"],
        type: "radio"
    },
    {
        id: "2-14",
        text: "成功安裝MySQL後，系統的預設值，下列哪一項是錯誤的？(複選)",
        options: { A: "預設的 username 是 root", B: "預設的hostname 是 localhost", C: "預設的 password 是 mysql", D: "mysql 是預設的資料庫" },
        answer: ["C"],
        type: "checkbox"
    },
    {
        id: "2-15",
        text: "下列何項不是 MySQL Administrator 資料庫管理工具提供的功能？",
        options: { A: "定期對 MySQL 5資料庫進行掃描病毒", B: "建立及管理 MySQL 5資料庫用戶資訊", C: "MySQL 5資料表維護及管理", D: "管理及設定 MySQL 5資料庫伺服器" },
        answer: ["A"],
        type: "radio"
    },
    {
        id: "2-16",
        text: "在 MySQL Administrator 主作業介面，哪一項可以管理所有使用者的帳號資訊？",
        options: { A: "Server Information", B: "Service Control", C: "User Administration", D: "Replication Status" },
        answer: ["C"],
        type: "radio"
    },
    {
        id: "2-17",
        text: "MySQL Administrator 的 Server Logs 記載哪幾種系統 Log？(複選)",
        options: { A: "System Log", B: "Error Log", C: "Slow Log", D: "General Log" },
        answer: ["B", "C", "D"],
        type: "checkbox"
    },
    {
        id: "2-18",
        text: "使用 My SQL Administrator 資料庫備份(Backup Database)管理功能，進行資料庫備份的副檔名為何？",
        options: { A: ".DBF", B: ".MDB", C: ".SQL", D: ".BAK" },
        answer: ["C"],
        type: "radio"
    },
    {
        id: "2-19",
        text: "在 MySQL Query Browser 視覺化資料庫管理工具中，執行「Drop Schema」功能代表何種動作？",
        options: { A: "建立資料庫", B: "删除指定的資料庫", C: "建立資料表格", D: "删除指定的資料表格" },
        answer: ["B"],
        type: "radio"
    },
    {
        id: "2-20",
        text: "MySQL Server 的啟動執行檔，預設放置在哪個路徑下？",
        options: { A: "C:\\mysql", B: "C:\\mysql\\bin", C: "C:\\windows\\mysql", D: "C:\\mysql\\data" },
        answer: ["B"],
        type: "radio"
    },
    {
        id: "2-21",
        text: "Windows環境下，MySQL 資料庫檔案，預設放置在哪個資料夾下？",
        options: { A: "C:\\mysql", B: "C:\\Mysql\\bin", C: "C:Windows\\mysql", D: "C:\\mysql\\data" },
        answer: ["D"],
        type: "radio"
    },
    {
        id: "2-22",
        text: "若 My SQL 不能正常啟動，可以檢查下列哪個錯誤檔？",
        options: { A: "php.err", B: "ini.err", C: "mysql.err", D: "my.cnf" },
        answer: ["C"],
        type: "radio"
    },
    {
        id: "2-23",
        text: "下列敘述何者有誤？(複選)",
        options: { A: "MySQL 資料庫伺服器可以不跟 WEB Server在一起，另外安装在一台獨立的電腦上", B: "安装 MySQL時，預設使用者 root 是 MySQL的超級使用者，為避免忘記密碼，造成無法登入，所以不可以随意變更密碼", C: "在MySQL中，指令的名稱大小寫是有區別的", D: "MySQL 是一種跨平台的關聯式資料庫系統" },
        answer: ["B", "C"],
        type: "checkbox"
    },
    {
        id: "2-24",
        text: "下列有關 MySQL 資料庫敘述何者有誤？",
        options: { A: "MySQL-server-x.x.x.x-i386.rpm是My SQL 伺服端的主程式", B: "mysql_safe 指令可用在 Linux 系統中啟動 MySQL 服務", C: "在Windows 系統下安装 MySQL後，必須執行 mysql_install_db 指令安裝預設的資料庫", D: "winmysqladmin 是 MySQL 內建使用於 Windows 系統下的視覺化管理介面" },
        answer: ["C"],
        type: "radio"
    },
    {
        id: "2-25",
        text: "下列敘述何者有錯？",
        options: { A: "在PHP 程式中能成功呼叫存取 MySQL 資料庫，最少必須安裝伺服器主程式與用戶端主程式兩個模組", B: "在Linux 系就中，如果不是以RPM模式安裝 MySQL 資料庫，則必須於安裝完成後執行 mysql-install-db 指令，安裝預設資料庫與權限資料表", C: "MySQL 資料庫的權限資料表是位於內建的test 資料庫中", D: "在Windows 系統下安装 MySQL 套件後，由於MySQL預設的root 帳號並未使用保護密碼，因此必須以mysqladmin 指合進行 root 帳號的密碼設定" },
        answer: ["C"],
        type: "radio"
    },

    // --- 第三類: 結構化查詢語言 (部分) ---
    {
        id: "3-01",
        text: "關聯式資料庫最常支援的查詢語言是？",
        options: { A: "SQL", B: "SSL", C: "QBASIC", D: "JAVA" },
        answer: ["A"],
        type: "radio"
    },
    {
        id: "3-02",
        text: "下列哪些是關聯式資料庫管理系統所提供的功能？(複選)",
        options: { A: "DCL", B: "DDL", C: "DHL", D: "DML" },
        answer: ["A", "B", "D"],
        type: "checkbox"
    },
    {
        id: "3-03",
        text: "結構化查詢語言(SQL)共區分為三大類，不包括下列哪一項？",
        options: { A: "DML", B: "DCL", C: "DSL", D: "DDL" },
        answer: ["C"],
        type: "radio"
    },
    {
        id: "3-04",
        text: "對於資料進行新增、刪除、修改及查詢功能的語言是屬於下列哪一個項目？",
        options: { A: "DML", B: "DCL", C: "DSL", D: "DDL" },
        answer: ["A"],
        type: "radio"
    },
    {
        id: "3-05",
        text: "在關聯式資料庫中，下列何項SQL指令是屬於DDL？",
        options: { A: "SELECT", B: "UPDATE", C: "DELETE", D: "ALTER" },
        answer: ["D"],
        type: "radio"
    },
    {
        id: "3-06",
        text: "用來對於資料庫的資源授權、解除授權的是哪列何種語言？",
        options: { A: "資料定義語言(DDL)", B: "資料處理語言(DML)", C: "資料控制語言(DCL)", D: "工作控制語言(JCL)" },
        answer: ["C"],
        type: "radio"
    },
    {
        id: "3-07",
        text: "在關聯式資料庫的運算中，兩個以上表格連結(join)的操作，可由哪個 SQL 指令實現？",
        options: { A: "SELECT", B: "UPDATE", C: "DELETE", D: "ALTER" },
        answer: ["A"],
        type: "radio"
    },
    {
        id: "3-08",
        text: "下列哪一項是專門用來管理關聯式資料庫的資料庫語言為何？",
        options: { A: "JAVA", B: "SQL", C: "ACTIONSCRIPT", D: "ASP.NET" },
        answer: ["B"],
        type: "radio"
    },
    {
        id: "3-09",
        text: "用來描述資料庫的邏輯結構，定義資料型態、長度、關係等的是？",
        options: { A: "資料定義語言(DDL)", B: "資料處理語言(DML)", C: "資料控制語言(DCL)", D: "工作控制語言(JCL)" },
        answer: ["A"],
        type: "radio"
    },
    {
        id: "3-10",
        text: "下列哪一個指令可以顯示作用中 MySQL Server 中所有的資料庫？",
        options: { A: "SHOW DATABASES;", B: "SHOW COLUMNS;", C: "SHOW TABLES;", D: "SHOW INDEX;" },
        answer: ["A"],
        type: "radio"
    },
    {
        id: "3-11",
        text: "MySQL 指令中，若要限制某個記錄傳回筆數，需利用下列哪個關鍵字？",
        options: { A: "LIMIT", B: "BETWEEN", C: "LIKE", D: "ORDER BY" },
        answer: ["A"],
        type: "radio"
    },
    {
        id: "3-12",
        text: "在 MySQL中，若要刪除資料表，可利用下列哪個指令？",
        options: { A: "Erase Table", B: "Delete Table", C: "Drop Table", D: "Close Table" },
        answer: ["C"],
        type: "radio"
    },
    {
        id: "3-13",
        text: "在 MySQL中定義資料表，若要設定欄位為自動加1，可以選定下列哪一個屬性？",
        options: { A: "Auto_Increment", B: "PRIMARY KEY", C: "null", D: "UNSIGNED" },
        answer: ["A"],
        type: "radio"
    },
    {
        id: "3-14",
        text: "在 MySQL中，利用Select 查詢時，若希望利用樣版比對，則該用下列哪個關鍵字？",
        options: { A: "LIMIT", B: "LIKE", C: "BETWEEN", D: "ORDER BY" },
        answer: ["B"],
        type: "radio"
    },
    {
        id: "3-15",
        text: "在 MySQL中，若要刪除資料表(table1)的所有記錄，則該用下列哪個指令？",
        options: { A: "Select tables 1 *.*", B: "Delete table 1", C: "Delete from table 1", D: "Update table 1" },
        answer: ["C"],
        type: "radio"
    },
    {
        id: "3-16",
        text: "假如一學生基本資料庫中已有一通訊錄的表格(AddressBook)，現要新增一個「手機(mob)」的字串型態欄位到該資料表，必須使用下列哪些SQL語法來完成？(複選)",
        options: { A: "ALTER TABLE AddressBook", B: "MODIFY TABLE AddressBook", C: "ADD mob Char(10)", D: "CHANGE mob Char(10)" },
        answer: ["A", "C"],
        type: "checkbox"
    },
    {
        id: "3-17",
        text: "在SQL 結構化查詢語言中，下列哪一個指令不屬於資料操作語言(DML)？",
        options: { A: "SELECT", B: "UPDATE", C: "CREATE", D: "DELETE" },
        answer: ["C"],
        type: "radio"
    },
    {
        id: "3-18",
        text: "下列SQL 指令何者為資料定義語言 DDL？",
        options: { A: "CREATE", B: "INSERT", C: "UPDATE", D: "DELETE" },
        answer: ["A"],
        type: "radio"
    },
    {
        id: "3-19",
        text: "SQL 語法中，下列哪些是屬於資料控制語言(Data Control Language)的指令？(複選)",
        options: { A: "GRANT", B: "GROUP", C: "SET", D: "REVOKE" },
        answer: ["A", "D"],
        type: "checkbox"
    },
    {
        id: "3-20",
        text: "對於SQL語法的使用，下列何者有誤？",
        options: { A: "透過Like 比較運算子，可以查詢某一字串或字元的一部份", B: "使用 Desc關鍵字可以達到查詢結果的遞增排序效果", C: "四則運算在SQL查詢語法中是可行的", D: "使用 Delete 可以從資料表中刪除記錄" },
        answer: ["B"], // Desc 是遞減
        type: "radio"
    },
    {
        id: "3-21",
        text: "在 MySQL語法中，欲建立一名為 employee 的資料庫，應該執行下列哪一個指令？",
        options: { A: "Create table employee;", B: "Create employee;", C: "Create database employee;", D: "show database employee;" },
        answer: ["C"],
        type: "radio"
    },
    {
        id: "3-22",
        text: "在SQL 語法中，若所建立資料庫的表格有兩個欄位以上，在宣告表格欄位時需以何種符號間隔？",
        options: { A: "逗號(,)", B: "分號(;)", C: "冒號(:)", D: "句點(.)" },
        answer: ["A"],
        type: "radio"
    },
    {
        id: "3-23",
        text: "執行附圖 SQL命令後，下列何者錯誤？<br>CREATE TABLE DEPARTMENT( employeeID int Not Null auto_increment primary key, name varchar(20), job varchar(15) );",
        options: { A: "建立一個名為 DEPARTMENT 的表格", B: "主鍵欄位為 employeeID", C: "定義 employeeID 欄位每列資料必須要有值，且自動增號", D: "定義 name 欄位的值必需超過20個字元" },
        answer: ["D"], // varchar(20) 是最大20，不是必須超過
        type: "radio"
    },
    {
        id: "3-24",
        text: "在SQL 語法中，使用Create Table 敘述進行欄位宣告，下列加入選項用途中何者錯誤？",
        options: { A: "宣告每個欄位 null 或是 not null，代表這個欄位是否可以包含空值(null)；預設可以包含空值", B: "關鍵字 auto_increment 可以使欄位值產序列號碼", C: "一個資料表中所有數值型態的欄位均可設成 auto_increment", D: "一個資料表中僅能有一個欄位被宣告為 Primary Key" },
        answer: ["C"],
        type: "radio"
    },
    {
        id: "3-25",
        text: "執行附圖中SQL指令，則下列何者敘述正確？<br>DROP database employee;",
        options: { A: "刪除 employee 資料庫及所有包含的資料表", B: "刪除 employee 資料表", C: "刪除 employee 資料表中所有記錄", D: "僅刪除 employee 資料庫中所有資料表，但保留資料庫" },
        answer: ["A"],
        type: "radio"
    },
    {
        id: "3-26",
        text: "下面哪一不是資料操作語言(DML)主要的範圍？",
        options: { A: "刪除", B: "查詢", C: "授權", D: "新增" },
        answer: ["C"],
        type: "radio"
    },
    {
        id: "3-27",
        text: "在SQL 語法中，如果要查詢某個資料表所有的欄位，可以在SELECT命令配合哪一個符號進行查詢？",
        options: { A: "%", B: "*", C: "&", D: "@" },
        answer: ["B"],
        type: "radio"
    },
    {
        id: "3-28",
        text: "要顯示 MySQL 資料庫伺服器目前已建立的資料庫，可以執行下列哪個指令？",
        options: { A: "Create database;", B: "Show databases;", C: "Drop database;", D: "Show database;" },
        answer: ["B"],
        type: "radio"
    },
    {
        id: "3-29",
        text: "有關 SQL 語法中， ALTER 指令是屬於哪一類語言？",
        options: { A: "DCL", B: "DDL", C: "DML", D: "DHL" },
        answer: ["B"],
        type: "radio"
    }
];