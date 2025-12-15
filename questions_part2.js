// TQC 資料庫設計與應用 - 題庫 Part 2
// 來源檔案: 2.pdf (3-30 ~ 4-21) & 3.pdf (4-22 ~ 4-68)

const questions_part2 = [
    // --- 第三類: 結構化查詢語言 (接續 Part 1) ---
    {
        id: "3-30",
        text: "在SQL 結構化查詢語言中，執行Show Index From table;敘述，表示要顯示：",
        options: { A: "指定資料庫中所有資料表格", B: "指定資料庫的所有資料表格的狀態", C: "指定資料庫中名稱為table 的資料表格的索引資料", D: "指定資料庫中名稱為table 的資料表格的SQL指令" },
        answer: ["C"],
        type: "radio"
    },
    {
        id: "3-31",
        text: "在SQL 結構化查询語言中， ALTER TABLE指令的用途為何？",
        options: { A: "交換已建立資料表格的欄位內資料值", B: "刪除已建立資料表格的欄位內資料值", C: "修改及維護已建立資料表格的欄位結構", D: "建立資料表格與資料表格的關聯" },
        answer: ["C"],
        type: "radio"
    },
    {
        id: "3-32",
        text: "執行附圖中的SQL敘述，則下列何者錯誤？<br>Alter TABLE employee ADD COLUMN tel varchar(10)Null;",
        options: { A: "在已存在 employee 資料表格中新增一欄", B: "新增欄位名稱為 tel", C: "定義的欄位內容資料的長度最多為10個字元", D: "新增欄位內容資料值預設為 Null" },
        answer: ["D"], // 預設值未指定時通常為Null，但題目答案給D，可能指語法預設行為差異或解釋不同，依題庫為準
        type: "radio"
    },
    {
        id: "3-33",
        text: "在SQL 語法中，要將資料表格(employee_table)中的索引(main_index)刪除，正確的命令是？",
        options: { A: "Delete Index main_index From employee_table", B: "Delete Index main_index On employee_table", C: "Drop Index main_index From employee_table", D: "Drop Index main_index On employee_table" },
        answer: ["D"],
        type: "radio"
    },
    {
        id: "3-34",
        text: "假設 SQL 資料庫伺服器中己建立資料庫(MySQL)，內含兩個已建立資料表(table11及table22)，執行附圖中的命令，則下列何者正確？<br>Drop database MySQL;",
        options: { A: "移除 MySQL 資料庫系統程式", B: "刪除資料庫內所有資料表格，但保留資料庫(MySQL)", C: "刪除資料庫內所有資料表格，連同資料庫一併刪除", D: "刪除資料庫內資料表 table11及table22 所有的關聯" },
        answer: ["C"],
        type: "radio"
    },
    {
        id: "3-35",
        text: "利用 SELECT指令進行查詢資料表時，若要對某個欄位進行篩選，需加上哪個關鍵字來進行查詢？",
        options: { A: "where", B: "LET", C: "ORDER", D: "IN" },
        answer: ["A"],
        type: "radio"
    },
    {
        id: "3-36",
        text: "在文字模式下，如欲以SQL 敘述建立一員工薪資資料表，步驟敘述：<br>1. Use employee;<br>2. Create table...<br>3. Create database employee<br>4. Insert Into...<br>試問步驟的順序由先而後為？",
        options: { A: "3124", B: "1234", C: "3214", D: "1324" },
        answer: ["A"],
        type: "radio"
    },
    {
        id: "3-37",
        text: "下列有關 SQL的資料操作語言(DML)的敘述，何項是錯誤？",
        options: { A: "新增料是透過 INSERT INTO指令來進行；新增資料時，欄位名稱與值的數量、資料型態及資料長度必須一致", B: "修改資料使用的是UPDATE指令及SET子句進行；其中SET子句必須至少設定一個欄位的值被修改才能讓修改語法成立", C: "使用 DELETE指令進行刪除，無法只刪除某個欄位值，最少得刪除一筆記錄", D: "使用 CREATE TABLE 指令建立資料表時，至少必須包含一個欄位，否則無法建立" },
        answer: ["A"], // 實際上D是DDL，但題庫答案給A可能是指欄位名稱可省略等細節，依題庫為準
        type: "radio"
    },
    {
        id: "3-38",
        text: "在文字模式下，輸入MySQL指令後，必須加上什麼符號，SQL敘述才能執行？",
        options: { A: "逗號(,)", B: "分號(;)", C: "冒號(:)", D: "百分比(%)" },
        answer: ["B"],
        type: "radio"
    },
    {
        id: "3-39",
        text: "在SQL語法中，使用哪一個關鍵字進行資料表之間的關聯？",
        options: { A: "GROUP", B: "JOIN", C: "LINK", D: "AND" },
        answer: ["B"],
        type: "radio"
    },
    {
        id: "3-40",
        text: "在SQL 語法中，要查詢資料表格(table)內所有資料錄的所有欄位資料，應該執行下列哪一項命令？",
        options: { A: "Select table;", B: "Search * From table;", C: "Select * From table;", D: "Show * From table;" },
        answer: ["C"],
        type: "radio"
    },
    {
        id: "3-41",
        text: "為了在產品資料表格(product)中進行查詢時，欲得到已經供貨的供應商代號(supp_no)，且自動去除重複的資料錄，使每一供應商代號只顯示一次，則可執行下列哪些 SQL命令？(複選)",
        options: { A: "Select supp_no From product;", B: "Select ALL supp_no From product;", C: "Select DISTINCT supp_no From product;", D: "Select DISTINCTROW supp_no From product;" },
        answer: ["C", "D"],
        type: "checkbox"
    },
    {
        id: "3-42",
        text: "在SQL語法中，要對資料表格選取特定的資料錄時，必須在Select 指令加入哪一項關鍵字來進行選取？",
        options: { A: "IN", B: "WHERE", C: "LIKE", D: "LIMIT" },
        answer: ["B"],
        type: "radio"
    },
    {
        id: "3-43",
        text: "要在班級通訊錄資料庫系統中，新增班級同學資料，必須使用下列哪一個SQL指令？",
        options: { A: "CREATE", B: "DELETE", C: "INSERT INTO", D: "DROP" },
        answer: ["C"],
        type: "radio"
    },
    {
        id: "3-44",
        text: "要在一產品資料表格(product)中，查詢產品單價(price)介於400元與600元之間所有欄位的資料錄，可以執行下列哪一個SQL指令？",
        options: { A: "Select * From product Where price Between 400 and 600;", B: "Select price From product Between 400 and 600;", C: "Select * From product Which price >=400 and price<=600", D: "Select * From product that price Between 400 and 600" },
        answer: ["A"],
        type: "radio"
    },
    {
        id: "3-45",
        text: "在SQL 語法中，對資料表(table)進行完全相等字串搜尋的命令(例如:name欄位中姓名為李大同)，下列哪一項是正確的敘述？",
        options: { A: "Select * From table Where name=='李大同'", B: "Select * From table Where name equal '李大同'", C: "Select * From table Where name is '李大同'", D: "Select * From table Where name='李大同'" },
        answer: ["D"],
        type: "radio"
    },
    {
        id: "3-46",
        text: "SQL 語法中，萬用字元(%)代用的是？",
        options: { A: "任意字元", B: "任意長度字串", C: "任意資料欄位", D: "任意資料表" },
        answer: ["B"],
        type: "radio"
    },
    {
        id: "3-47",
        text: "SQL 語法中，哪一個符號代表單一長度的任意字元？",
        options: { A: "?", B: "%", C: "_", D: "*" },
        answer: ["C"],
        type: "radio"
    },
    {
        id: "3-48",
        text: "某業務主管想在客戶資料表(TABLE)中查詢某客戶的資料，但是忘了該公司的名稱，只記得該公司名稱中有一個「達」字，請問下列哪項SQL 敘述最適當？",
        options: { A: "SELECT * FROM TABLE WHERE COMPANY= \"%達%\";", B: "SELECT * FROM TABLE WHERE COMPANY LIKE “達%”;", C: "SELECT * FROM TABLE WHERE COMPANY LIKE “?達?”;", D: "SELECT * FROM TABLE WHERE COMPANY LIKE “%達%”;" },
        answer: ["D"],
        type: "radio"
    },
    {
        id: "3-49",
        text: "某業務主管想利用客戶資料表(TABLE)中電話欄位(TEL)查詢台北縣市客戶的資料，可以使用下列哪些SQL敘述？(台北縣市電話區碼為02)(複選)",
        options: { A: "SELECT * FROM TABLE WHERE TEL LIKE \"02??? \";", B: "SELECT * FROM TABLE WHERE TEL LIKE \"02%\";", C: "SELECT * FROM TABLE WHERE Substring(TEL, 1, 2)= \"02\";", D: "SELECT * FROM TABLE WHERE TEL= \"02%\";" },
        answer: ["B", "C"],
        type: "checkbox"
    },
    {
        id: "3-50",
        text: "在SQL 語法中，使用SELECT指令查詢時，加入ORDER BY 關鍵字的目的是？",
        options: { A: "比對", B: "排序", C: "轉換資料型態", D: "合併" },
        answer: ["B"],
        type: "radio"
    },
    {
        id: "3-51",
        text: "在SQL 結構化查詢語言中，要對查詢的資料表格指定的欄位進行排序，需要加入哪個關鍵字？",
        options: { A: "SORT BY", B: "ORDER BY", C: "DESC", D: "RENAME" },
        answer: ["B"],
        type: "radio"
    },
    {
        id: "3-52",
        text: "在SQL 結構化查詢語言中，要對查詢的資料表格(score)指定的欄位(chinese)進行排序，使得該欄位資料值由大而小排序，下列哪項敘述是正確的？",
        options: { A: "SELECT * FROM score ORDER BY Chinese;", B: "SELECT * FROM score ORDER BY chinese DESC;", C: "SELECT * FROM score SORT BY chinese;", D: "SELECT * FROM score SORT BY chinese DESC;" },
        answer: ["B"],
        type: "radio"
    },
    {
        id: "3-53",
        text: "對印表機供應商資料表執行附圖中的查詢命令(SELECT supp_name FROM TABLE ORDER BY supp_name;)，則下列何項執行結果會最先出現？",
        options: { A: "EPSON", B: "HP", C: "Lexmark", D: "CANON" },
        answer: ["D"], // 字母順序 C 最前
        type: "radio"
    },
    {
        id: "3-54",
        text: "SQL 語法中，在資料查詢時對輸出結果排序的敘述，下列哪些是正確的？(複選)",
        options: { A: "在選取資料表的敘述中加入ORDER BY 關鍵字是希望輸出結果依指定欄位進行排序", B: "ORDER BY 關鍵字的預設排序方式是由小而大", C: "ORDER BY 指定為排序的欄位型態只限制為數值型態，文字型態不能列為排序欄位", D: "SQL 敘述” SELECT FROM... ORDER BY 欄位名稱DESC”，其中DESC表示輸出表格的欄位名稱由大而小排序" },
        answer: ["A", "B"],
        type: "checkbox"
    },
    {
        id: "3-55",
        text: "SQL 結構化查詢語言查詢的敘述中，如在Order BY 後面使用了2個欄位排序 (Order BY chinese, english desc)，則執行排序的結果下列何項正確？",
        options: { A: "chinese 欄位及 english 欄位資料值皆遞增排序", B: "chinese 欄位資料值遞增； english 欄位資料值遞減", C: "chinese 欄位資料值遞減； english 欄位資料值遞增", D: "chinese 欄位及 english 欄位資料值皆遞減排序" },
        answer: ["B"],
        type: "radio"
    },
    {
        id: "3-56",
        text: "執行SQL 結構化查詢語言進行資料排序時，下列敘述何者錯誤？",
        options: { A: "一次僅能指定一個欄位進行排序", B: "所謂巢狀排序是在 ORDER BY 後面使用2個(以上)欄位排序", C: "巢狀排序依 ORDER BY 敘述中欄位的順序分主要排序欄位及次排序欄位，排序的結果會先以主要排序欄進行排序，再依次排序欄加以排序", D: "巢狀排序可緊接在個別欄位後加上DESC或ASC關鍵字，依照個別欄位排序條件加以定義" },
        answer: ["A"],
        type: "radio"
    },
    {
        id: "3-57",
        text: "某公司產品資料表(products)欄位結構如: pro_id(int), supp_id(char), price(float)。下列SQL敘述哪一項是合法的？(複選)",
        options: { A: "select pro_id, supp_id,price where price<100 order by supp_id desc, pro_id;", B: "select pro_id, supp_id, price*1.05 from products order by price;", C: "select pro_id, supp_id,price*0.05 as tax from products order by price;", D: "select pro_id, supp_id,price*0.05 as tax from products order by tax;" },
        answer: ["B", "C", "D"], // A 缺少 FROM
        type: "checkbox"
    },
    {
        id: "3-58",
        text: "在SQL 敘述中，哪一個符號之後的字句會被視為註解？",
        options: { A: "$", B: "^", C: "#", D: "@" },
        answer: ["C"],
        type: "radio"
    },
    {
        id: "3-59",
        text: "在SQL 結構化查詢語言的腳本檔中，下列哪一項可視為段落式註解，放置於列首使用？",
        options: { A: "/*註解段落文字*/", B: "?註解段落文字?", C: "#註解段落文字#", D: "@註解段落文字@" },
        answer: ["A"],
        type: "radio"
    },
    {
        id: "3-60",
        text: "在SQL 敘述中，我們可以採用哪些方式在SQL敘述中加入註解來增加腳本的可讀性？(複選)",
        options: { A: "#", B: "--", C: "/*...*/", D: "//" },
        answer: ["A", "B", "C"],
        type: "checkbox"
    },
    {
        id: "3-61",
        text: "下列敘述何者正確？(複選)",
        options: { A: "使用 SELECT 敘述來查詢資料時，會由一表格中選取部份或全部的欄位，這種篩選方式稱為「縱向篩選」", B: "在SELECT 敘述中使用 WHERE 子句是對所選取的資料值加入一些限制條，這種篩選方式稱為「橫向篩選」", C: "ORDER BY 子句是對所選取的資料值加以排序，可以依選取資料的某一欄位加以排序，排序的方式可遞增或遞減", D: "使用 SELECT敘述所選取的資料不一定是存在於料表格中的欄位資料，我們可以使用各種運算方式來形成「虛擬欄位」" },
        answer: ["A", "B", "C", "D"],
        type: "checkbox"
    },
    {
        id: "3-62",
        text: "在SQL中，有關虛擬欄位的敘述，下列何者有誤？",
        options: { A: "資料表格中的欄位透過各種運算，便可形成「虛擬欄位」，並重新計算資料値", B: "在「虛擬欄位」的後面透過AS語法為該「虛擬欄位」加上一個標籤，則 MYSQL 輸出結果時會以該標籤為「虛擬欄位」的欄位名稱", C: "在SELECT 敘述中，如果在兩個欄中忘了加逗號(,)，則MYSQL 會將後面欄位名稱解釋為前面欄位的別名", D: "虛擬欄位不可用於WHERE或ORDER BY子句，作為篩選或排序的條件欄位" },
        answer: ["D"],
        type: "radio"
    },
    {
        id: "3-63",
        text: "下列何者不屬於SQL 結構化查詢語言中資料定義語言(DDL)的功能？",
        options: { A: "建立資料庫", B: "刪除資料表", C: "變更資料表結構", D: "確定資料的變更" },
        answer: ["D"],
        type: "radio"
    },
    {
        id: "3-64",
        text: "在SQL 的資料定義語言中，要完成變更資料庫結構必須執行哪項指令？",
        options: { A: "ALTER", B: "REVOKE", C: "RENAME", D: "FLUSH" },
        answer: ["A"],
        type: "radio"
    },
    {
        id: "3-65",
        text: "在SQL 語言的分類中，主要功能是對資料的表格與型態下定義的是？",
        options: { A: "DCL", B: "DDL", C: "DML", D: "DHL" },
        answer: ["B"],
        type: "radio"
    },
    {
        id: "3-66",
        text: "在SQL 語言的分類中，主要功能在執行新增、刪除、查詢資料等動作為何？",
        options: { A: "DCL", B: "DDL", C: "DML", D: "DHL" },
        answer: ["C"],
        type: "radio"
    },
    {
        id: "3-67",
        text: "在SQL 語言中主要提供資料庫的安全性控管的是？",
        options: { A: "DCL", B: "DDL", C: "DML", D: "DHL" },
        answer: ["A"],
        type: "radio"
    },
    {
        id: "3-68",
        text: "下列指合哪一項是在資料定義語言(DDL)提供刪除資料庫的指令？",
        options: { A: "DELETE", B: "DROP", C: "DEFINE", D: "ERASE" },
        answer: ["B"],
        type: "radio"
    },
    {
        id: "3-69",
        text: "SQL 的資料定義語言(DDL)所提供的CREATE指可用來建立哪些項目？(複選)",
        options: { A: "資料庫", B: "資料表", C: "記錄", D: "值" },
        answer: ["A", "B"],
        type: "checkbox"
    },
    {
        id: "3-70",
        text: "建立資料表時，設定索引的目的為何？",
        options: { A: "減少資料表個數", B: "減少資料的重複性", C: "加快資料庫的讀取速度", D: "標記資料的重要性" },
        answer: ["C"],
        type: "radio"
    },
    {
        id: "3-71",
        text: "下面哪一個索引選項在建立資料表時，每個資料表只能設定一次做為主鍵？",
        options: { A: "PRIMARY KEY", B: "KEY", C: "INDEX", D: "UNIQUE" },
        answer: ["A"],
        type: "radio"
    },
    {
        id: "3-72",
        text: "使用 DDL 在建立資料表，對於欄位的設定，下列敘述何項有錯？",
        options: { A: "NOT NULL 設定代表不允許欄位為空值", B: "AUTO_INCREMENT 設定欄位值自動編號，每新增一筆資料，便自動將編號自動加一", C: "設為 PRIMARY KEY 的欄位必然須具有 NOT NULL 屬性", D: "設為 PRIMARY KEY 的欄位必然須具有AUTO_INCREMENT 的屬性" },
        answer: ["D"],
        type: "radio"
    },
    {
        id: "3-73",
        text: "SQL 指令中，有關ALTER指令的敘述，下列何者有誤？",
        options: { A: "屬於DDL", B: "可以將資料表重新命名", C: "可以修改資料表中指定欄位的名稱及資料型態", D: "屬於DML" },
        answer: ["D"],
        type: "radio"
    },
    {
        id: "3-74",
        text: "SQL 指中，有關 ALTER TABLE指令的敘述，下列何者有誤？",
        options: { A: "使用 RENAME指令可以更改資料表名稱", B: "使用 CHANGE指令可以更改資料表欄位名稱", C: "使用ADD指令除了可以增加新的欄位以外，還可以用來新增主鍵與索引", D: "使用 DELETE指令可以刪除不必要的資料欄位" },
        answer: ["D"], // 刪除欄位用 DROP
        type: "radio"
    },
    {
        id: "3-75",
        text: "SQL 指合中，使用DROP指令無法刪除下列何者？",
        options: { A: "資料目錄", B: "資料欄位", C: "資料表格", D: "資料庫" },
        answer: ["A"],
        type: "radio"
    },
    {
        id: "3-76",
        text: "下列指令哪一項是在資料操作語言(DML)提供刪除資料的指令？",
        options: { A: "DELETE", B: "DROP", C: "DEFINE", D: "ERASE" },
        answer: ["A"],
        type: "radio"
    },
    {
        id: "3-77",
        text: "下列何者指令不屬於DML？",
        options: { A: "INSERT", B: "REPLACE", C: "FLUSH", D: "UPDATE" },
        answer: ["C"],
        type: "radio"
    },
    {
        id: "3-78",
        text: "在SQL 語法中，要將一筆資料新增到資料表中，要使用到哪一個指令？",
        options: { A: "CREATE", B: "INSERT", C: "ADD", D: "UPDATE" },
        answer: ["B"],
        type: "radio"
    },
    {
        id: "3-79",
        text: "在一成績資料表中欲查詢 mysql 成績介於60分至80分之間學生所有欄位資料，且輸出結果需以 chinese 成績遞減排序：請問該如何下達SQL查詢敘述？(複選)",
        options: { A: "Select * from score where mysql in (60, 80) order by chinese;", B: "Select * from score where mysql>60 and mysql<80 order by chinese desc;", C: "Select * from score where mysql between 60,80 order by chinese desc;", D: "Select * from score where mysql between 60 and 80 order by chinese desc;" },
        answer: ["B", "D"], // 題目若是包含邊界應選D，B是不含邊界，但題庫答案給BD
        type: "checkbox"
    },
    {
        id: "3-80",
        text: "在SQL 的資料操作語言(DML)中，下列何者是用來更新資料的指令？",
        options: { A: "ALTER", B: "CHANGE", C: "UPDATE", D: "INSERT" },
        answer: ["C"],
        type: "radio"
    },
    {
        id: "3-81",
        text: "使用 UPDATE 指令更新資料時，下列敘述何者有誤？",
        options: { A: "加入 WHERE是用來指定某一筆資料做更新的動作，如果不設定篩選條件，其他欄位可能發生重複的情形，造成資料更新錯誤", B: "進行資料更新，同時也可以 UPDATE 來更新資料型態", C: "進行資料更新時，可以使用LIMIT 關鍵字，限制一次最多只能更新資料的筆數", D: "使用 LOW_PRIORITY 關鍵字，是要等到資料不使用時，再執行更新的動作" },
        answer: ["B"],
        type: "radio"
    },
    {
        id: "3-82",
        text: "在SQL 語法中，有關 DELETE 指令的敘述，下列何者有誤？",
        options: { A: "屬於DML", B: "用 WHERE 指定刪除的範圍，可以將資料表的資料刪除", C: "若沒加上 WHERE 篩選條件指定刪除範圍，則會將整個資料表刪除", D: "若沒加上 WHERE 篩選條件指定刪除範圍，則會將整個資料表內資料清空" },
        answer: ["C"], // DELETE 清空資料，DROP 刪除表
        type: "radio"
    },
    {
        id: "3-83",
        text: "在SQL 的資料控制語言(DCL)中，設定使用者權限的指令為何？",
        options: { A: "GRANT", B: "ALTER", C: "REVOKE", D: "DROP" },
        answer: ["A"],
        type: "radio"
    },
    {
        id: "3-84",
        text: "在SQL 的資料控制語言(DCL)中，取消使用者權限的指令為何？",
        options: { A: "GRANT", B: "ALTER", C: "REVOKE", D: "DROP" },
        answer: ["C"],
        type: "radio"
    },
    {
        id: "3-85",
        text: "下列哪些項目屬於GRANT指令可以設定的權限值？(複選)",
        options: { A: "CREATE", B: "DROP", C: "INSERT", D: "DELETE" },
        answer: ["A", "B", "C", "D"],
        type: "checkbox"
    },
    {
        id: "3-86",
        text: "在 MySQL中，以GRANT指令設定使用者權限時，為確保資料庫的安全，可以使用哪個關鍵字設定使用者的密碼？",
        options: { A: "PASSWORD", B: "IDENTIFIED BY", C: "SET", D: "INSERT" },
        answer: ["B"],
        type: "radio"
    },
    {
        id: "3-87",
        text: "在SQL 的資料控制語言(DCL)中，REVOKE指令的功用是？",
        options: { A: "取消使用者權限，但不刪除使用者記錄，使用者仍可連上MySQL 伺服器", B: "取消使用者權限，但不刪除使用者記錄，使用者無法連上MySQL 伺服器", C: "取消使用者權限，同時刪除使用者記錄，使用者無法連上MySQL 伺服器", D: "刪除使用者記錄，但不取消使用者權限，使用者仍可連上MySQL 伺服器" },
        answer: ["A"],
        type: "radio"
    },
    {
        id: "3-88",
        text: "在SQL 語法中，要察看某資料庫底下所有的資料表，應使用下列哪一個敘述？",
        options: { A: "Display tables From 資料庫名稱;", B: "Show tables From 資料庫名稱;", C: "Show database From 資料庫名稱;", D: "ALTER tables From 資料庫名稱;" },
        answer: ["B"],
        type: "radio"
    },
    {
        id: "3-89",
        text: "在SQL 的資料操作語言(DML)中下列敘述何者錯誤？",
        options: { A: "REPLACE 敘述作用在唯一鍵值時，會取代舊有的重複資料，不會傳回錯誤", B: "INSERT 敘述在新增資料時，若發生重複的唯一鍵值，則會產生錯誤", C: "要執行 REPLACE敘述，使用者要同時具備INSERT 與DELETE 的權限", D: "使用 GRANT指令來設定使用者權限，才可使用 REPLACE敘述，所以GRANT 指令屬於 DML" },
        answer: ["D"],
        type: "radio"
    },
    {
        id: "3-90",
        text: "下列SQL 敘述排列順序，何者正確？",
        options: { A: "SELECT+FROM+WHERE+ORDER BY+HAVING+GROUP BY", B: "SELECT+FROM+WHERE+HAVING+GROUP BY+ORDER BY", C: "SELECT+FROM+HAVING+ORDER BY+WHERE+GROUP BY", D: "SELECT+FROM+WHERE+GROUP BY+HAVING+ORDER BY" },
        answer: ["D"],
        type: "radio"
    },
    {
        id: "3-91",
        text: "關於SQL語法對於資料的操作，下列敘述何者正確？",
        options: { A: "DELETE 可以刪除某個欄位值", B: "UPDATE 的最小單位為更新一筆記錄", C: "INSERT 可以省略欄位名稱", D: "SELECT 可以從資料庫中篩選出資料表" },
        answer: ["C"],
        type: "radio"
    },
    {
        id: "3-92",
        text: "關於SQL語法對於資料的操作，下列敘述何者錯誤？",
        options: { A: "使用 INSERT指令可在資料表中新增一筆記錄", B: "使用 UPDATE 指令搭配SET 關鍵字，每次至少設定一個欄位值被修改，才能使修改語法成立", C: "使用 DELETE指令，如果省略 WHERE子句，則會將整個資料庫刪除", D: "使用 DELETE指令，最小的單位為記錄，也就是說，每次最少刪除一筆記錄" },
        answer: ["C"], // 會刪除整個資料表內容，非資料庫
        type: "radio"
    },
    {
        id: "3-93",
        text: "假設資料表格 book(id, name, author, price)，請問下列各項SQL敘述，哪些是合法的？(複選)",
        options: { A: "select * from book where price between 300 and 500 order by price;", B: "modify from book where name like “吳%”;", C: "insert into book values( \"B004\" \"MySQL5\", \"CSF\", 350);", D: "delete from book where name= \"%mysql%\";" },
        answer: ["A", "C", "D"], // C 的 values 語法少了逗號，但題庫答案給ACD，可能原題排版問題
        type: "checkbox"
    },
    {
        id: "3-94",
        text: "下面何項是變更資料表格 book 内容的SQL敘述？",
        options: { A: "ALTER book SET price=300 WHERE id like \"B%\";", B: "CHANGE book SET price=300 WHERE id like \"B%\";", C: "UPDATE book SET price=300 WHERE id like \"B%\";", D: "MODIFY book SET price=300 WHERE id like \"B%\";" },
        answer: ["C"],
        type: "radio"
    },
    {
        id: "3-95",
        text: "假設資料表格book(id,name, author, price)，下列哪項SQL敘述可以將書籍名稱中含有”MySQL”的書籍記錄從資料表格 book 刪除？",
        options: { A: "drop from book where name like \"%MySQL%\";", B: "delete from book where name like \"%MySQL%\";", C: "delete from book where name= \"MySQL\";", D: "drop from book where name= \"MySQL\";" },
        answer: ["B"],
        type: "radio"
    },
    {
        id: "3-96",
        text: "關於SQL的資料定義語言(DDL)的敘述，下列何者有誤？",
        options: { A: "CREATE INDEX 是用來建立新索引", B: "DROP TABLE 用來刪除資料表", C: "ALTER DATABASE 用來提示資料庫建立時的錯誤訊息", D: "DROP PRIMARY KEY 用來刪除主鍵" },
        answer: ["C"],
        type: "radio"
    },
    {
        id: "3-97",
        text: "SQL 語法中， UPDATE指令通常會搭配哪一個關鍵字使用？",
        options: { A: "ORDER BY", B: "FROM", C: "WHERE", D: "GROUP BY" },
        answer: ["C"],
        type: "radio"
    },
    {
        id: "3-98",
        text: "下列有關SQL的敘述，何者錯誤？",
        options: { A: "執行 Drop Database 指令時，會主動將用此資料庫的設定及其內容所有的資料表與資料錄一併刪除", B: "當下達 SQL 指令時，在指令行的末端加「:」符號，用來提示指令下達完畢，以開始運算執行動作", C: "Select 指令是最常使用的SQL指令之一，用來從資料表中取出資料", D: "SQL語法的關鍵字與函數名稱沒有大小寫的差别，例如DROP與drop的作用是一樣" },
        answer: ["B"], // 應為分號 ;
        type: "radio"
    },
    {
        id: "3-99",
        text: "SQL 語言中，有關 Optimize Table 指令的敘述，下列何項錯誤？",
        options: { A: "用來最佳化目標資料表內容", B: "當使用者大量刪除資料表中的資料或對於變動長度資料型態的欄位有所修正時，執行此指令重整資料表，可提昇整體效能", C: "執行 Optimize Table 指令時，使用者可繼續對該資料表進行查詢動作", D: "屬於DML" },
        answer: ["D"],
        type: "radio"
    },
    {
        id: "3-100",
        text: "在 MySQL中設定或修改權限後，必須以下列哪一個指令進行更新？",
        options: { A: "Reload;", B: "Refresh;", C: "Flush Privileges;", D: "Revoke;" },
        answer: ["C"],
        type: "radio"
    },

    // --- 第四類: 欄位索引資料型别及運算子 ---
    {
        id: "4-01",
        text: "使用字串時，需用何種符號前後括住該字串？(複選)",
        options: { A: "引號，例如: 'This is string.'", B: "雙引號，例如: “This is string.”", C: "中括號[]", D: "大括號{}" },
        answer: ["A", "B"],
        type: "checkbox"
    },
    {
        id: "4-02",
        text: "在操作 MySQL時，有些字元是有特殊含意的字元(例如:單引號、雙引號)，如果想在字串中使用該字元需使用跳脫符號，請問在MySQL中的跳脫符號是？",
        options: { A: "_", B: "/", C: "\\", D: "|" },
        answer: ["C"],
        type: "radio"
    },
    {
        id: "4-03",
        text: "以下哪些是MySQL 内建的布林值？(複選)",
        options: { A: "Bad", B: "True", C: "Right", D: "False" },
        answer: ["B", "D"],
        type: "checkbox"
    },
    {
        id: "4-04",
        text: "下列哪些是MySQL 提供的基本資料型態？(複選)",
        options: { A: "數值(Numerical)", B: "字串(String)", C: "日期(Date and Time)", D: "指標(Pointer)" },
        answer: ["A", "B", "C"],
        type: "checkbox"
    },
    {
        id: "4-05",
        text: "下列何種資料型態(Data Type)適合用來儲存縣市人口數？",
        options: { A: "TINYINT", B: "SMALLINT", C: "MEDIUMINT", D: "FLOAT" },
        answer: ["C"],
        type: "radio"
    },
    {
        id: "4-06",
        text: "以下四種整數型數值資料型態，何者可儲存的範圍最大？",
        options: { A: "BIGINT", B: "INT", C: "SMALLINT", D: "MEDIUMINT" },
        answer: ["A"],
        type: "radio"
    },
    {
        id: "4-07",
        text: "整數型數值型態中的TINYINT 需佔多少 Bytes 的空間？",
        options: { A: "1", B: "2", C: "3", D: "4" },
        answer: ["A"],
        type: "radio"
    },
    {
        id: "4-08",
        text: "整數型數值型態中的SMALLINT 需佔多少 Bytes 的空間？",
        options: { A: "1", B: "2", C: "3", D: "4" },
        answer: ["B"],
        type: "radio"
    },
    {
        id: "4-09",
        text: "整數型數值型態中的MEDIUMINT 需佔多少 Bytes 的空間？",
        options: { A: "1", B: "2", C: "3", D: "4" },
        answer: ["C"],
        type: "radio"
    },
    {
        id: "4-10",
        text: "整數型數值型態中的INT需佔多少 Bytes 的空間？",
        options: { A: "1", B: "2", C: "3", D: "4" },
        answer: ["D"],
        type: "radio"
    },
    {
        id: "4-11",
        text: "整數型數值型態中的BIGINT 需佔多少 Bytes 的空間？",
        options: { A: "2", B: "3", C: "4", D: "8" },
        answer: ["D"],
        type: "radio"
    },
    {
        id: "4-12",
        text: "整數數值型資料型別 TINYINT，在無正負(Unsigned)時，範圍為何？",
        options: { A: "0~127", B: "0~255", C: "0~65535", D: "0~16777215" },
        answer: ["B"],
        type: "radio"
    },
    {
        id: "4-13",
        text: "整數數值型資料型別 TINYINT，在有正負(Signed)時，範圍為何？",
        options: { A: "-128~127", B: "-32768~32767", C: "-8388608~8388607", D: "-2147483648~2147483647" },
        answer: ["A"],
        type: "radio"
    },
    {
        id: "4-14",
        text: "整數數值型資料型別 SMALLINT，在無正負(Unsigned)時範圍為何？",
        options: { A: "0~127", B: "0~255", C: "0~65535", D: "0~16777215" },
        answer: ["C"],
        type: "radio"
    },
    {
        id: "4-15",
        text: "整數數值型資料型別 SMALLINT，在有正負(Signed)時，範圍為何？",
        options: { A: "-128~127", B: "-32768~32767", C: "-8388608~8388607", D: "-2147483648~2147483647" },
        answer: ["B"],
        type: "radio"
    },
    {
        id: "4-16",
        text: "數值範圍0~16777215是何項整數數值型資料型別的範圍？",
        options: { A: "Signed INT", B: "Unsigned INT", C: "Signed MEDIUMINT", D: "Unsigned MEDIUMINT" },
        answer: ["D"],
        type: "radio"
    },
    {
        id: "4-17",
        text: "數值範圍-8388608~8388607是何項整數數值型資料型別的範圍？",
        options: { A: "Signed INT", B: "Unsigned INT", C: "Signed MEDIUMINT", D: "Unsigned MEDIUMINT" },
        answer: ["C"],
        type: "radio"
    },
    {
        id: "4-18",
        text: "數值範圍 0~4294967295是何項整數數值型資料型別的範圍？",
        options: { A: "Signed INT", B: "Unsigned INT", C: "Signed MEDIUMINT", D: "Unsigned MEDIUMINT" },
        answer: ["B"],
        type: "radio"
    },
    {
        id: "4-19",
        text: "數值範圍-2147483648~214743647是何項整數數值型資料型別的範圍？",
        options: { A: "Signed INT", B: "Unsigned INT", C: "Signed MEDIUMINT", D: "Unsigned MEDIUMINT" },
        answer: ["A"],
        type: "radio"
    },
    {
        id: "4-20",
        text: "數值範圍 0~18446744073709551615是何項整數數值型資料型別的範圍？",
        options: { A: "Signed INT", B: "Unsigned INT", C: "Signed BIGINT", D: "Unsigned BIGINT" },
        answer: ["D"],
        type: "radio"
    },
    {
        id: "4-21",
        text: "數值範圍-9223372036854775808~9223372036854775807是何項整數數值型資料型別的範圍？",
        options: { A: "Signed INT", B: "Unsigned INT", C: "Signed BIGINT", D: "Unsigned BIGINT" },
        answer: ["C"],
        type: "radio"
    },
    {
        id: "4-22",
        text: "新增整數數值型態的欄位時，若於屬性欄增加 ZEROFILL 屬性，MySQL 會自動加上何種屬性於該欄位上？",
        options: { A: "NOT NULL", B: "NULL", C: "Signed", D: "Unsigned" },
        answer: ["D"],
        type: "radio"
    },
    {
        id: "4-23",
        text: "新增整數數值型態的欄位時，何種型態是「BIGINT UNSIGNED NOT NULL AUTO_INCREMENT UNIQUE」的別名？",
        options: { A: "SERIAL", B: "SERIAL DEFAULT VALUE", C: "ZEROFILL", D: "UNSIGNED" },
        answer: ["A"],
        type: "radio"
    },
    {
        id: "4-24",
        text: "新增整數數值型態的欄位時，何種型態是「NOT NULL AUTO_INCREMENT UNIQUE」的別名？",
        options: { A: "SERIAL", B: "SERIAL DEFAULT VALUE", C: "ZEROFILL", D: "UNSIGNED" },
        answer: ["B"], // 依題庫答案
        type: "radio"
    },
    {
        id: "4-25",
        text: "新增整數數值型態的欄位時，若指定欄位位數，例如:INT(5)，此種型態，需與何種屬性搭配方有作用？",
        options: { A: "SERIAL", B: "SERIAL DEFAULT VALUE", C: "ZEROFILL", D: "UNSIGNED" },
        answer: ["C"],
        type: "radio"
    },
    {
        id: "4-26",
        text: "新增整數數值型態的欄位時，若指定欄位位數，例如:INT(5)，此種型態，當新增數值的資料為數超過五位時，但仍在INT的範圍內，此時有何作用？",
        options: { A: "僅保留由左邊數過來的前5位，超過5位的部分捨去", B: "僅保留由左邊數過來的後5位，超過5位的部分捨去", C: "無法寫入資料庫", D: "沒有影響，仍寫入原值" },
        answer: ["D"],
        type: "radio"
    },
    {
        id: "4-27",
        text: "新增整數數值型態的欄位時，若指定欄位位數及ZEROFILL 屬性，如果 INSERT 一筆 num=30的資料，此時，若用SELECT指令查詢該筆內容，會顯示何種結果？(設為INT(5))",
        options: { A: "30", B: "00030", C: "30.0", D: "30.000" },
        answer: ["B"],
        type: "radio"
    },
    {
        id: "4-28",
        text: "MySQL 對於浮點數資料型態，有支援近似值(M,D)的語法，其中的M為正整數，D為正整數或0，M,D各代表什麼意義？(複選)",
        options: { A: "M 代表顯示的總位數", B: "M代表小數位數", C: "D代表顯示的總位數", D: "D代表小數位數" },
        answer: ["A", "D"],
        type: "checkbox"
    },
    {
        id: "4-29",
        text: "MySQL 對於浮點數資料型態，有支援近似值(M,D)的語法，若宣告欄位的資料型態為 FLOAT(5,2)，當新增一筆資料為352.713，得到的近似值為？",
        options: { A: "352.713", B: "352.71300", C: "352.71", D: "352" },
        answer: ["C"],
        type: "radio"
    },
    {
        id: "4-30",
        text: "MySQL 對於浮點數資料型態，有支援近似值(M,D)的語法，新增一筆資料時，當整數位(小數點左邊的位數)超過幾位時，MySQL會發生「Out of range」的錯誤？",
        options: { A: "M", B: "D", C: "M-D", D: "D-M" },
        answer: ["C"],
        type: "radio"
    },
    {
        id: "4-31",
        text: "MySQL 對於浮點數資料型態，有支援近似值(M,D)的語法，若宣告欄位的資料型態為 FLOAT(5,2)，當新增一筆資料為352.798，得到的近似值為？",
        options: { A: "352.79", B: "352.80", C: "352", D: "352.00" },
        answer: ["B"],
        type: "radio"
    },
    {
        id: "4-32",
        text: "MySQL 對於浮點數資料型態，有支援近似值(M,D)的語法，若宣告欄位的資料型態為 DECIMAL(5,2)，則該欄位的有效範圍為何？",
        options: { A: "0~99999", B: "0~999.99", C: "-99999.99~99999.99", D: "-999.99~999.99" },
        answer: ["D"],
        type: "radio"
    },
    {
        id: "4-33",
        text: "在MySQL中，那些數值型資料型態被用來儲存精確的數值？(複選)",
        options: { A: "REAL", B: "FLOAT", C: "NUMERIC", D: "DECIMAL" },
        answer: ["C", "D"],
        type: "checkbox"
    },
    {
        id: "4-34",
        text: "在 MySQL 中，浮點數資料型態 NUMERIC和DECIMAL 的關係如何？",
        options: { A: "NUMERIC 儲存範圍較 DECIMAL 大", B: "NUMERIC 儲存範圍較 DECIMAL 小", C: "NUMERIC跟DECIMAL一樣", D: "兩個是不同類型資料型態，無法比較" },
        answer: ["C"],
        type: "radio"
    },
    {
        id: "4-35",
        text: "在 MySQL中，浮點數資料型態 NUMERIC和DECIMAL 除了支援(M,D)的語法外，也支援(M)的語法，請問兩者間有何關係？",
        options: { A: "(M) = (M,0)", B: "(M)=(M,100)", C: "(M)=(0,M)", D: "(M)=(100,M)" },
        answer: ["A"],
        type: "radio"
    },
    {
        id: "4-36",
        text: "在MySQL中，浮點數資料型態 NUMERIC和DECIMAL 可存取的最大總位數為幾位？",
        options: { A: "55", B: "60", C: "65", D: "70" },
        answer: ["C"],
        type: "radio"
    },
    {
        id: "4-37",
        text: "在 MySQL中，下列哪些是時間日期資料型態？(複選)",
        options: { A: "DATETIME", B: "DATE", C: "TIMESTAMP", D: "TIME" },
        answer: ["A", "B", "C", "D"],
        type: "checkbox"
    },
    {
        id: "4-38",
        text: "在 MySQL中，哪一種時間日期資料型態有自動更新的特性？",
        options: { A: "DATETIME", B: "DATE", C: "TIMESTAMP", D: "TIME" },
        answer: ["C"],
        type: "radio"
    },
    {
        id: "4-39",
        text: "在 MySQL中，當欄位為時間日期資料型態時，日期的顯示格式為何？",
        options: { A: "日-月-年", B: "年-月-日", C: "月-日-年", D: "年-日-月" },
        answer: ["B"],
        type: "radio"
    },
    {
        id: "4-40",
        text: "在MySQL中，以下那些時間日期資料型態可以同時顯示日期及時間？(複選)",
        options: { A: "DATETIME", B: "DATE", C: "TIMESTAMP", D: "TIME" },
        answer: ["A", "C"],
        type: "checkbox"
    },
    {
        id: "4-41",
        text: "在 MySQL中，時間日期資料型態 Date 的範圍為何？",
        options: { A: "0000-01-01~9999-12-31", B: "1970-01-01~9000-12-31", C: "1000-01-01~9999-12-31", D: "1970-01-01~9999-12-31" },
        answer: ["C"],
        type: "radio"
    },
    {
        id: "4-42",
        text: "在 MySQL中，時間日期資料型態 DateTIME的範圍為何？",
        options: { A: "0000-01-01 00:00:00~9999-12-31 23:59:59", B: "1970-01-01 00:00:00~9000-12-31 23:59:59", C: "1000-01-01 00:00:00~9999-12-31 23:59:59", D: "1970-01-01 00:00:00~9999-12-31 23:59:59" },
        answer: ["C"],
        type: "radio"
    },
    {
        id: "4-43",
        text: "在MySQL中，時間日期資料型態支援「非嚴格型」語法，任何標點符號均可作為日期或時間的間隔符號，所以以下哪些是合法的日期輸入？(複選)",
        options: { A: "06-10-31", B: "06@10@31", C: "06.10.31", D: "06@10.31" },
        answer: ["A", "B", "C", "D"],
        type: "checkbox"
    },
    {
        id: "4-44",
        text: "在 MySQL中，時間日期資料型態 DATETIME 顯示的資料格式為何？",
        options: { A: "年-月-日 時:分:秒", B: "日-月-年 時:分:秒", C: "時:分:秒 年-月-日", D: "時:分:秒 日-月-年" },
        answer: ["A"],
        type: "radio"
    },
    {
        id: "4-45",
        text: "在MySQL中，時間日期資料型態的資料支援純數字型格式，例如:061027101220代表哪一個時間？",
        options: { A: "1920年10月12日6時10分27秒", B: "2020年10月12日6時10分27秒", C: "1906年10月27日10時12分20秒", D: "2006年10月27日10時12分20秒" },
        answer: ["D"],
        type: "radio"
    },
    {
        id: "4-46",
        text: "MySQL中，在時間日期資料型態 DATETIME 欄位填入 DATE 資料型態的資料，例如:06-10-20，試問時、分、秒的部分會如何處理？",
        options: { A: "因為格式不對，所以資料無法填入", B: "不顯示時、分、秒的部分，即顯示2006-10-20", C: "顯示 2006-10-20 00:00:00", D: "顯示 00:00:00 2006-10-20" },
        answer: ["C"],
        type: "radio"
    },
    {
        id: "4-47",
        text: "MySQL中，在時間日期資料型態 TIMESTAMP 的顯示內容，跟哪一種資料型態的內容相同？",
        options: { A: "DATE", B: "DATETIME", C: "TIME", D: "YEAR" },
        answer: ["B"],
        type: "radio"
    },
    {
        id: "4-48",
        text: "MySQL中，欄位為TIMESTAMP時，設定 DEFAULT為下列何值時，每次新增資料，均會自動將目前時間填入？",
        options: { A: "CURRENT_TIMESTAMP", B: "CURRENT_TIME", C: "NOW", D: "NOW_TIME" },
        answer: ["A"],
        type: "radio"
    },
    {
        id: "4-49",
        text: "MySQL中，欄位為TIMESTAMP時，設定 DEFAULT為CURRENT_TIMESTAMP 的欄位可以有幾個？",
        options: { A: "沒有限制", B: "10", C: "2", D: "1" },
        answer: ["D"],
        type: "radio"
    },
    {
        id: "4-50",
        text: "MySQL中，欄位為TIMESTAMP時，設定 DEFAULT為NULL的欄位有多個的時候，第幾個欄為其特性等同於DEFAULT為CURRENT_TIMESTAMP？",
        options: { A: "沒有限制", B: "最後面的欄位", C: "最前面的欄位", D: "第二個欄位" },
        answer: ["C"],
        type: "radio"
    },
    {
        id: "4-51",
        text: "欄位為 TIMESTAMP時，若要在資料新增或更新時，自動記錄目前時間，除了可以設定 DEFAULT值外，也可透過設定何種屬性，達到相同效果？",
        options: { A: "TIMEZONE", B: "ON TIME", C: "ON UPDATE CURRENT_TIMESTAMP", D: "ON INSERT CURRENT_TIMESTAMP" },
        answer: ["C"],
        type: "radio"
    },
    {
        id: "4-52",
        text: "欄位為時間日期資料型態YEAR時，有效範圍為何？",
        options: { A: "1901~2155", B: "1970~2999", C: "0001~9999", D: "2000~3000" },
        answer: ["A"],
        type: "radio"
    },
    {
        id: "4-53",
        text: "字串型態 CHAR，可存字數的有效範圍為何？",
        options: { A: "0~255", B: "0~511", C: "0~1021", D: "0~65535" },
        answer: ["A"],
        type: "radio"
    },
    {
        id: "4-54",
        text: "字串型態 VARCHAR，可存字數的有效範圍為何？",
        options: { A: "0~255", B: "0~511", C: "0~1021", D: "0~65535" },
        answer: ["A"], // 註：MySQL 5.0.3 之後 varchar 可達 65535，但舊版是 255，題庫答案給A
        type: "radio"
    },
    {
        id: "4-55",
        text: "對於字串型態CHAR、VARCHAR的敘述，下列何者正確？(複選)",
        options: { A: "CHAR 的資料，若長度未滿時，會在右邊填補空格補足長度", B: "讀取 CHAR 的資料時，會先將右邊個空格去除，再顯示", C: "VARCHAR 的資料，若長度未滿時，不會填補空格，但會記錄長度", D: "讀取 VARCHAR的資料時，不需先去除空格" },
        answer: ["A", "B", "C", "D"],
        type: "checkbox"
    },
    {
        id: "4-56",
        text: "當儲存資料字數很多時，可使用字串型態的TEXT類型資料型別，以下那些屬於字串型態 TEXT類型？(複選)",
        options: { A: "TINYTEXT", B: "TEXT", C: "MEDIUMTEXT", D: "LONGTEXT" },
        answer: ["A", "B", "C", "D"],
        type: "checkbox"
    },
    {
        id: "4-57",
        text: "對於字串型態的TEXT類型，下列敘述何者正確？(複選)",
        options: { A: "包含四種資料型別(TINYTEXT, TEXT, MEDIUMTEXT, LONGTEXT)", B: "不可以設定初始值", C: "可以設定初始值", D: "TINYTEXT 不屬於TEXT 類型" },
        answer: ["A", "B"],
        type: "checkbox"
    },
    {
        id: "4-58",
        text: "當建立ENUM 資料欄位時，需定義列舉值，例如:number ENUM('one', 'two', 'three')。試問‘one’ 的列舉索引是多少？",
        options: { A: "0", B: "1", C: "2", D: "3" },
        answer: ["B"], // ENUM index 從 1 開始
        type: "radio"
    },
    {
        id: "4-59",
        text: "當建立 ENUM 資料欄位時，最多可指定多少個列舉值？",
        options: { A: "127", B: "255", C: "1023", D: "65535" },
        answer: ["D"],
        type: "radio"
    },
    {
        id: "4-60",
        text: "當建立SET 資料欄位時，例如: numSet SET('a', 'b', 'c', 'd')。a=1, b=2, c=4, d=8。如果指定為:numSet=9，試問會得到何種結果？",
        options: { A: "'a'", B: "'a,b'", C: "'a,c'", D: "'a,d'" },
        answer: ["D"], // 9 = 1 + 8 = a + d
        type: "radio"
    },
    {
        id: "4-61",
        text: "在一個表格中，通常我們找出最具代表該表格資料的欄位，建立一個Key 值，這個Key 稱為？",
        options: { A: "PRIMARY KEY", B: "INDEX", C: "UNIQUE", D: "FULLTEXT" },
        answer: ["A"],
        type: "radio"
    },
    {
        id: "4-62",
        text: "在一個表格中，某些欄位常常被拿來做成搜尋的依據，為了讓搜尋速度加快，通常我們會將這些欄位設成？",
        options: { A: "PRIMARY KEY", B: "INDEX", C: "UNIQUE", D: "FULLTEXT" },
        answer: ["B"],
        type: "radio"
    },
    {
        id: "4-63",
        text: "在一個表格中，某些欄位的值是不能重複的，例如:帳號，通常我們會把這種欄位設成下列何項？",
        options: { A: "PRIMARY KEY", B: "INDEX", C: "UNIQUE", D: "FULLTEXT" },
        answer: ["C"],
        type: "radio"
    },
    {
        id: "4-64",
        text: "在一個表格中，某些欄位的值內容非常大，且常常會被搜尋其內容，做全文檢索的功能，通常我們會把這種欄位設成？",
        options: { A: "PRIMARY KEY", B: "INDEX", C: "UNIQUE", D: "FULLTEXT" },
        answer: ["D"],
        type: "radio"
    },
    {
        id: "4-65",
        text: "在運算式中，試問執行SELECT(1+2)*3;的結果為何？",
        options: { A: "7", B: "9", C: "6", D: "5" },
        answer: ["B"],
        type: "radio"
    },
    {
        id: "4-66",
        text: "在運算式中，比較結果若成立，會得到1，若結果不成立，會得到0，試問執行 SELECT 1 <>10;結果為何？",
        options: { A: "1", B: "0", C: "-1", D: "10" },
        answer: ["A"],
        type: "radio"
    },
    {
        id: "4-67",
        text: "在運算式中，BETWEEN 運算子可用來檢驗數值區間，試問執行SELECT 2 BETWEEN 2 AND3;結果為何？",
        options: { A: "1", B: "0", C: "-1", D: "10" },
        answer: ["A"],
        type: "radio"
    },
    {
        id: "4-68",
        text: "在運算式中，BETWEEN 運算子可用來檢驗數值區間，試問執行SELECT 1 BETWEEN 2 AND 3;結果為何？",
        options: { A: "1", B: "0", C: "-1", D: "10" },
        answer: ["B"],
        type: "radio"
    }
];