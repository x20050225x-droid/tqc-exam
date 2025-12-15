// TQC 資料庫設計與應用 - 題庫 Part 4 (完結篇)
// 來源檔案: 3.pdf (7-01 ~ 7-45) & 5.pdf (7-46 ~ 9-25)

const questions_part4 = [
    // --- 第七類: 最佳化設定及工具程式 (7-01 ~ 7-50) ---
    {
        id: "7-01",
        text: "在 Windows 作業系統中，預設MySQL 的設定組態檔為下列何項？",
        options: { A: "my.cnf", B: "my.ini", C: "config.inc", D: "web.config" },
        [cite_start]answer: ["B"], // [cite: 355-360]
        type: "radio"
    },
    {
        id: "7-02",
        text: "在 Unix 系統中，預設 MySQL 的組態設定檔為下列何項？",
        options: { A: "my.cnf", B: "my.ini", C: "config.inc", D: "web.config" },
        [cite_start]answer: ["A"], // [cite: 361-366]
        type: "radio"
    },
    {
        id: "7-03",
        text: "若要指定 MySQL的組態設定檔位置及檔名，可於執行MySQL時，加入下列何項參數來指定？",
        options: { A: "-config-file", B: "-setting-file", C: "-defaults-file", D: "-install-file" },
        [cite_start]answer: ["C"], // [cite: 367-373]
        type: "radio"
    },
    {
        id: "7-04",
        text: "若要設定 MySQL 的執行埠號(port)，可在組態設定檔中的何種參數上設定？",
        options: { A: "basedir", B: "datadir", C: "default-character-set", D: "port" },
        [cite_start]answer: ["D"], // [cite: 374-379]
        type: "radio"
    },
    {
        id: "7-05",
        text: "若要設定 MySQL的主目錄，可在組態設定檔中的何種參數上設定？",
        options: { A: "basedir", B: "datadir", C: "default-character-set", D: "port" },
        [cite_start]answer: ["A"], // [cite: 380-385]
        type: "radio"
    },
    {
        id: "7-06",
        text: "若要設定 MySQL 資料庫的資料目錄，可在組態設定檔中的何種參數上設定？",
        options: { A: "basedir", B: "datadir", C: "default-character-set", D: "port" },
        [cite_start]answer: ["B"], // [cite: 386-391]
        type: "radio"
    },
    {
        id: "7-07",
        text: "若要設定 MySQL 內的主設字元編碼，可在組態設定檔中的何種參數上設定？",
        options: { A: "basedir", B: "datadir", C: "default-character-set", D: "port" },
        [cite_start]answer: ["C"], // [cite: 392-398]
        type: "radio"
    },
    {
        id: "7-08",
        text: "若要設定 MySQL 可同時運作的最大連線数，可在組態設定檔中的何種參數上設定？",
        options: { A: "max_connections", B: "query_cache_size", C: "table_cache", D: "tmp_table_size" },
        [cite_start]answer: ["A"], // [cite: 399-405]
        type: "radio"
    },
    {
        id: "7-09",
        text: "Query cache 可用來暫存執行Select 指令傳回的結果，若要設定 query cache 的使用大小，可在組態設定檔中的何種參數上設定？",
        options: { A: "max_connections", B: "query_cache_size", C: "table_cache", D: "imp_table_size" },
        [cite_start]answer: ["B"], // [cite: 406-412]
        type: "radio"
    },
    {
        id: "7-10",
        text: "若要指定在記憶體中暫存資料表的最大容量，可在組態設定檔中的何種參數上設定？",
        options: { A: "max_connections", B: "query_cache_size", C: "table_cache", D: "tmp_table_size" },
        [cite_start]answer: ["D"], // [cite: 413-419]
        type: "radio"
    },
    {
        id: "7-11",
        text: "若要指定存放於快取(cache)中供重複使用的最大線程(thread)個數，可在組態設定檔中的何種參數上設定？",
        options: { A: "thread_cache_size", B: "query_cache_size", C: "table_cache", D: "tmp_table_size" },
        [cite_start]answer: ["A"], // [cite: 420-426]
        type: "radio"
    },
    {
        id: "7-12",
        text: "可用來顯示 MyISAM 資料表全文檢索資訊的工具程試為下列何項？",
        options: { A: "myisamchk", B: "myisam_ftdump", C: "myisamlog", D: "myisampack" },
        [cite_start]answer: ["B"], // [cite: 427-432]
        type: "radio"
    },
    {
        id: "7-13",
        text: "可用來描述、檢查、最佳化和修復 MyISAM 資科表的工具程式為下列項？",
        options: { A: "myisamchk", B: "myisam_ftdump", C: "myisamlog", D: "myisampack" },
        [cite_start]answer: ["A"], // [cite: 433-438]
        type: "radio"
    },
    {
        id: "7-14",
        text: "可用來處理 MyISAM 記錄檔的工具程式為下列何項",
        options: { A: "myisamchk", B: "myisam_ftdump", C: "myisamlog", D: "myisampack" },
        [cite_start]answer: ["C"], // [cite: 439-444]
        type: "radio"
    },
    {
        id: "7-15",
        text: "可壓縮 MyISAM 資料表以產生較小的唯讀資料表之工具程式為下列何項？",
        options: { A: "myisamchk", B: "myisam_ftdump", C: "myisamlog", D: "myisampack" },
        [cite_start]answer: ["D"], // [cite: 445-450]
        type: "radio"
    },
    {
        id: "7-16",
        text: "下列何項工具程式可交談式輸入SQL敘述，或者在批次模式(batch mode)下執行檔案的指令(command-line)？",
        options: { A: "mysql", B: "mysqlaccess", C: "mysqlbinlog", D: "mysqladmin" },
        [cite_start]answer: ["A"], // [cite: 451-457]
        type: "radio"
    },
    {
        id: "7-17",
        text: "為一腳本程式，用來檢查一組主機、使用者名稱和資料庫組合的存取權限之工具程式為下列何項？",
        options: { A: "mysql", B: "mysqlaccess", C: "mysqlbinlog", D: "mysqladmin" },
        [cite_start]answer: ["B"], // [cite: 458-464]
        type: "radio"
    },
    {
        id: "7-18",
        text: "可用來執行例如:新增或資料表、重新載入權限資科表、將資料表內容送回磁碟、重開記錄檔、讀取伺服器版本、程序、狀態等資訊的資料庫管理工具程式為下列何項？",
        options: { A: "mysqld", B: "mysqlaccess", C: "mysqlbinlog", D: "mysqladmin" },
        [cite_start]answer: ["D"], // [cite: 465-471]
        type: "radio"
    },
    {
        id: "7-19",
        text: "當資料庫系統故障(crash)時，從二位元記録檔(binary log)中讀取已執行的敘述有助於恢復資料庫系統，可從二位元記録檔中讀取已執行敘述的工具程式為下列何項？",
        options: { A: "mysql", B: "mysqlaccess", C: "mysqlbinlog", D: "mysqladmin" },
        [cite_start]answer: ["C"], // [cite: 472-478]
        type: "radio"
    },
    {
        id: "7-20",
        text: "下列何項工具程式可用來檢查、修復、分析和最佳化資料表？",
        options: { A: "mysqldump", B: "mysqlhotcopy", C: "mysqlcheck", D: "mysqlimport" },
        [cite_start]answer: ["C"], // [cite: 479-484]
        type: "radio"
    },
    {
        id: "7-21",
        text: "下列何項工具程式可將資料庫匯出成SQL 敘述的檔案或以tab鍵分隔的文字檔？",
        options: { A: "mysqldump", B: "mysqlhotcopy", C: "mysqlcheck", D: "mysqlimport" },
        [cite_start]answer: ["A"], // [cite: 485-491]
        type: "radio"
    },
    {
        id: "7-22",
        text: "下列何項工具程式，可在伺服器執行中快速備份 MyISAM 資料表？",
        options: { A: "mysqldump", B: "mysqlhotcopy", C: "mysqlcheck", D: "mysqlimport" },
        [cite_start]answer: ["B"], // [cite: 492-497]
        type: "radio"
    },
    {
        id: "7-23",
        text: "下列何項工具程式，可將文字檔匯入到相關資料表中？",
        options: { A: "mysqldump", B: "mysqlhotcopy", C: "mysqlcheck", D: "mysqlimport" },
        [cite_start]answer: ["D"], // [cite: 498-503]
        type: "radio"
    },
    {
        id: "7-24",
        text: "下列何項工具程式，專門用來顯示資料庫(database)、資料表(tables)、欄位(column)和索引(index)的資訊？",
        options: { A: "mysqlslap", B: "perror", C: "mysqlcheck", D: "mysqlshow" },
        [cite_start]answer: ["D"], // [cite: 504-510]
        type: "radio"
    },
    {
        id: "7-25",
        text: "下列何項工具程式，可在單一用戶端模擬多用戶端存取 MyQL 伺服器狀況，並記錄每個階段的時間，以測試，MySQL 伺服器的效能？",
        options: { A: "mysqlslap", B: "perror", C: "mysqlcheck", D: "mysqlshow" },
        [cite_start]answer: ["A"], // [cite: 511-517]
        type: "radio"
    },
    {
        id: "7-26",
        text: "下列何項工具程式，可用來結束(kill)符合樣本(pattern)的程序？",
        options: { A: "mysqlslap", B: "mysql_zap", C: "mysqlcheck", D: "mysqlshow" },
        [cite_start]answer: ["B"], // [cite: 518-523]
        type: "radio"
    },
    {
        id: "7-27",
        text: "下列何項工具程式，可顯示系統或MySQL 錯誤碼的含意？",
        options: { A: "mysqlslap", B: "mysql_zap", C: "perror", D: "mysqlshow" },
        [cite_start]answer: ["C"], // [cite: 524-529]
        type: "radio"
    },
    {
        id: "7-28",
        text: "下例何項工具程式，可對輸入文字作字串取代的功能？",
        options: { A: "mysqlslap", B: "mysql_zap", C: "perror", D: "replace" },
        [cite_start]answer: ["D"], // [cite: 530-535]
        type: "radio"
    },
    {
        id: "7-29",
        text: "一般工具程式，若想要查詢使用方法，可在指令後面加上種參數，即可取得說明資訊？",
        options: { A: "help", B: "--help", C: "/help", D: "?help" },
        [cite_start]answer: ["B"], // [cite: 536-542]
        type: "radio"
    },
    {
        id: "7-30",
        text: "MySQL 提供下列各API(程式語言的介面程式)中，何種API是其它 API的基礎？",
        options: { A: "PHP", B: "JDBC", C: "C", D: "ODBC" },
        [cite_start]answer: ["C"], // [cite: 543-549]
        type: "radio"
    },
    {
        id: "7-31",
        text: "MySQL 提供C語言的介面程式(API)中，下列何項函數可以回傳由最後一個 UPDATE、DELETE 或INSERT指令的變更、移除或新增之資料筆數(rows)？",
        options: { A: "mysql_affected_rows()", B: "mysql_change_user()", C: "mysql_close()", D: "mysql_autocommit()" },
        [cite_start]answer: ["A"], // [cite: 550-556]
        type: "radio"
    },
    {
        id: "7-32",
        text: "MySQL 提供C語言的介面程式(API)中，下列何項函數可以設定自動提交(autocommit)的功能開關？",
        options: { A: "mysql_affected_rows()", B: "mysql_change_user()", C: "mysql_close()", D: "mysql_autocommit()" },
        [cite_start]answer: ["D"], // [cite: 557-563]
        type: "radio"
    },
    {
        id: "7-33",
        text: "MySQL 提供C語言的介面程式(API)中，下列何項函数可在一個已開啟的連線下，變更使用者和資料庫？",
        options: { A: "mysql_affected_rows()", B: "mysql_change_user()", C: "mysql_close()", D: "mysql_autocommit()" },
        [cite_start]answer: ["B"], // [cite: 564-570]
        type: "radio"
    },
    {
        id: "7-34",
        text: "MySQL 提供C語言的介面程式(API)中，下列何項函數可關閉資料庫與資料庫伺服器的連線？",
        options: { A: "mysql_affected_rows()", B: "mysql_change_user()", C: "mysql_close()", D: "mysql_autocommit()" },
        [cite_start]answer: ["C"], // [cite: 571-577]
        type: "radio"
    },
    {
        id: "7-35",
        text: "MySQL 提供C語言的介面程式(API)，下列何項函數中來提交(commit)已變更的資料？",
        options: { A: "mysql_commit()", B: "mysql_data_seek()", C: "mysql_connect()", D: "mysql_create_db()" },
        [cite_start]answer: ["A"], // [cite: 578-584]
        type: "radio"
    },
    {
        id: "7-36",
        text: "MySQL 提供C語言的介面程式(API)中，下列何項函数可用來新增料庫，其功能與SQL語法中的CREATE DATABASE 相同？",
        options: { A: "mysql_commit()", B: "mysql_data_seek()", C: "mysql_connect()", D: "mysql_create_db()" },
        [cite_start]answer: ["D"], // [cite: 585-591]
        type: "radio"
    },
    {
        id: "7-37",
        text: "MySQL 提供C語言的介面程式(API)中，下列何項函數可再查詢結果(query result)的集合中，搜尋任意編號的資料？",
        options: { A: "mysql_commit()", B: "mysql_data_seek()", C: "mysql_connect()", D: "mysql_create_db()" },
        [cite_start]answer: ["B"], // [cite: 592-598]
        type: "radio"
    },
    {
        id: "7-38",
        text: "MySQL 提供C語言的介面程式(API)中，下列何項函數可另 MySQL 伺服器寫入偵錯訊息(debug information)到記錄檔(log file)中？",
        options: { A: "mysql_errno()", B: "mysql_dump_debug_info()", C: "mysql_error()", D: "mysql_escape_string()" },
        [cite_start]answer: ["B"], // [cite: 599-605]
        type: "radio"
    },
    {
        id: "7-39",
        text: "MySQL 提供C語言的介面程式(API)中，下列何項函數可傳回最近MySQL 函數產生的錯誤編號(error number)？",
        options: { A: "mysql_errno()", B: "mysql_dump_debug_info()", C: "mysql_error()", D: "mysql_escape_string()" },
        [cite_start]answer: ["A"], // [cite: 606-612]
        type: "radio"
    },
    {
        id: "7-40",
        text: "MySQL 提供C語言的介面程式(API)中，下列何項函數可傳回最近 MySQL 函數產生的錯誤訊息(error message)？",
        options: { A: "mysql_errno()", B: "mysql_dump_debug_info()", C: "mysql_error()", D: "mysql_escape_string()" },
        [cite_start]answer: ["C"], // [cite: 613-619]
        type: "radio"
    },
    {
        id: "7-41",
        text: "MySQL 提供C語言的介面程式(API)中，下列何項函數可傳一個內含所有欄位結構(field structure)的陣列？",
        options: { A: "mysql_fetch_fields()", B: "mysql_fetch_field()", C: "mysql_fetch_row()", D: "mysql_fetch_lengths()" },
        [cite_start]answer: ["A"], // [cite: 620-626]
        type: "radio"
    },
    {
        id: "7-42",
        text: "MySQL 提供C語言的介面程式(API)中，下列何項函數可傳回一個欄位的資料？",
        options: { A: "mysql_fetch_fields()", B: "mysql_fetch_row()", C: "mysql_fetch_field()", D: "mysql_fetch_lengths()" },
        [cite_start]answer: ["C"], // [cite: 627-633]
        type: "radio"
    },
    {
        id: "7-43",
        text: "MySQL 提供C語言的介面程式(API)中，下列何項函數傳回目前記錄內各欄位長度的陣列？",
        options: { A: "mysql_fetch_fields()", B: "mysql_fetch_field()", C: "mysql_fetch_row()", D: "mysql_fetch_lengths()" },
        [cite_start]answer: ["D"], // [cite: 634-640]
        type: "radio"
    },
    {
        id: "7-44",
        text: "MySQL 提供C語言的介面程式(API)中，下列何項函數可取出查詢結果集合(query result set)中的下一筆資料？",
        options: { A: "mysql_fetch_fields()", B: "mysql_fetch_field()", C: "mysql_fetch_row()", D: "mysql_fetch_lengths()" },
        [cite_start]answer: ["C"], // [cite: 641-647]
        type: "radio"
    },
    {
        id: "7-45",
        text: "MySQL 提供C語言的介面程式(API)中，下列何項函數可取得最近一次，執行查詢指令的資訊？",
        options: { A: "mysql_info()", B: "mysql_init()", C: "mysql_insert_id()", D: "mysql_kill()" },
        [cite_start]answer: ["A"], // [cite: 648-654]
        type: "radio"
    },
    {
        id: "7-46",
        text: "MySQL 提供C語言的介面程式(API)中，下列何項函數可用來計算在查詢結果集合中的資料筆數？",
        options: { A: "mysql_more_results()", B: "mysql_num_rows()", C: "mysql_num_fields()", D: "mysql_ping()" },
        [cite_start]answer: ["B"], // [cite: 655-660]
        type: "radio"
    },
    {
        id: "7-47",
        text: "MySQL 提供C語言的介面程式(API)中，下列何項函數可用來計算在查詢結果集合中的欄位個數？",
        options: { A: "mysql_more_results()", B: "mysql_num_rows()", C: "mysql_num_fields()", D: "mysql_ping()" },
        [cite_start]answer: ["C"], // [cite: 661-667]
        type: "radio"
    },
    {
        id: "7-48",
        text: "MySQL提供C語言的介面程式(API)中，下列何項函數可用以檢查與MySQL 伺服器的連線是否正常運作，在必要時可重新連線？",
        options: { A: "mysql_more_results()", B: "mysql_num_rows()", C: "mysql_num_fields()", D: "mysql_ping()" },
        [cite_start]answer: ["D"], // [cite: 668-674]
        type: "radio"
    },
    {
        id: "7-49",
        text: "MySQL 提供C語言的介面程式(API)中，下列哪些函數可用來執行SQL 查詢指令？(複選)",
        options: { A: "mysql_query()", B: "mysql_real_query()", C: "mysql_reload()", D: "mysql_rollback()" },
        [cite_start]answer: ["A", "B"], // [cite: 675-681]
        type: "checkbox"
    },
    {
        id: "7-50",
        text: "MySQL 提供C語言的介面程式(API)中，下列何項函數可用來回復(rollback)交易(transaction)？",
        options: { A: "mysql_query()", B: "mysql_real_query()", C: "mysql_reload()", D: "mysql_rollback()" },
        [cite_start]answer: ["D"], // [cite: 682-688]
        type: "radio"
    },

    // --- 第八類: 進階查詢與管理 (8-01 ~ 8-60) ---
    {
        id: "8-01",
        text: "如要刪除檢視表，請問下列指令何者正確？",
        options: { A: "ERASE VIEW", B: "DELETE VIEW", C: "CANCEL VIEW", D: "DROP VIEW" },
        [cite_start]answer: ["D"], // [cite: 689-694]
        type: "radio"
    },
    {
        id: "8-02",
        text: "下列對於新增檢視表(View)的敘述，何者正確？(emp_v:檢視表名稱；emp:資料表名稱)",
        options: { A: "CREATE VIEW emp_v AS SELECT emp_no,emp WHERE sex ='F'", B: "CREATE VIEW emp_v AS SELECT emp_no FROM emp WHERE sex ='F'", C: "CREATE VIEW emp_v AS UPDATE emp WHERE sex ='F'", D: "CREATE VIEW emp_v AS UPDATE emp SET sex ='F'" },
        [cite_start]answer: ["B"], // [cite: 695-701]
        type: "radio"
    },
    {
        id: "8-03",
        text: "下列對於檢視表(View)的敘述，何者錯誤？",
        options: { A: "可以合併多個資料表以產生檢視表", B: "可以從資料表挑選特定資料欄位以產生檢視表", C: "檢視表可以隱藏資料細節，而僅提供彙總資訊", D: "檢視表只能從實體資料表取得資料" },
        [cite_start]answer: ["D"], // [cite: 702-707]
        type: "radio"
    },
    {
        id: "8-04",
        text: "下列對於檢視表(View)的敘述，何者錯誤？",
        options: { A: "檢視表可以簡化查詢的複雜度", B: "檢視表可以過濾資料", C: "檢視表不可以被更新", D: "檢視表可以隱藏資料" },
        [cite_start]answer: ["C"], // [cite: 708-713]
        type: "radio"
    },
    {
        id: "8-05",
        text: "下列對於檢視表(View)的敘述，何者錯誤？",
        options: { A: "檢視表中含有DISTINCT敘述，則不可以被更新", B: "檢視表中含有總和計算(SUM)，則不可以被更新", C: "檢視表中含有Group by，則不可以被更新", D: "檢視表可以對合併(JOIN)的資料表做更新" },
        [cite_start]answer: ["D"], // [cite: 714-719]
        type: "radio"
    },
    {
        id: "8-06",
        text: "下列對於檢視表(View)的敘述，何者正確？(複選)",
        options: { A: "SELECT 語句中的FROM子句，不能包含子查詢", B: "SELECT 語句不能引用系統變數", C: "可以將觸發程序與檢視表關聯在一起", D: "在檢視表中名稱可以重複" },
        [cite_start]answer: ["A", "B"], // [cite: 720-725]
        type: "checkbox"
    },
    {
        id: "8-07",
        text: "資料表 emp 有 A01/Tom/15, A01/Mary/30, C02/Jim/35。執行 Create View v AS SELECT Dep FROM emp Where Dep ='A01' AND Age>20。請問 SELECT * FROM v 得到的結果為何？",
        options: { A: "20", B: "Tom", C: "Jim", D: "A01" },
        [cite_start]answer: ["D"], // [cite: 726-736]
        type: "radio"
    },
    {
        id: "8-08",
        text: "資料表 emp 同上題。執行 Create View v AS SELECT Dep, Age FROM emp Where Dep ='A01'。請問 SELECT sum(Age) From v 得到的結果為何？(15+30=45)",
        options: { A: "A01", B: "30", C: "45", D: "15" },
        [cite_start]answer: ["C"], // [cite: 737-758]
        type: "radio"
    },
    {
        id: "8-09",
        text: "資料表 emp 同上題。執行 Create View v AS SELECT Dep, Age, Name FROM emp。請問 SELECT max(Age) From v 得到的結果為何？(35)",
        options: { A: "C02", B: "Jim", C: "15", D: "35" },
        [cite_start]answer: ["D"], // [cite: 759-780]
        type: "radio"
    },
    {
        id: "8-10",
        text: "資料表 emp 同上題。執行 Create View v AS SELECT Dep, Age, Name FROM emp。請問 SELECT Dep From v Where Age >32 得到的結果為何？(Jim age 35, dep C02)",
        options: { A: "A01", B: "C02", C: "Tom", D: "Jim" },
        [cite_start]answer: ["B"], // [cite: 781-802]
        type: "radio"
    },
    {
        id: "8-11",
        text: "對於附圖中的檢視表而言，以下SQL指令何者可正確執行？<br>CREATE VIEW v AS SELECT Dept, COUNT(*) FROM emp GROUP BY Dept",
        options: { A: "INSERT", B: "UPDATE", C: "DELETE", D: "SELECT" },
        [cite_start]answer: ["D"], // [cite: 803-809]
        type: "radio"
    },
    {
        id: "8-12",
        text: "關於 MySQL 預儲程序(Stored Procedure)的敘述，下列何者錯誤？",
        options: { A: "資料庫移除的時候，與它關聯的所有預儲程序也都被移除", B: "執行預儲程序時不可以傳遞參數", C: "CALL 指令用來執行預儲程序", D: "預儲程序中使用DECLARE 設定區域變數" },
        [cite_start]answer: ["B"], // [cite: 810-815]
        type: "radio"
    },
    {
        id: "8-13",
        text: "關於 MySQL預儲程序(Stored Procedure)的敘述，下列何者錯誤？",
        options: { A: "可以從預儲程序呼叫預儲程序", B: "增加資料庫的安全性", C: "預儲程序需要在mysql 資料庫中有 proc表", D: "建立預儲程序需要在資料庫中有INSERT的權限" },
        [cite_start]answer: ["D"], // [cite: 816-821]
        type: "radio" // 需 CREATE ROUTINE 權限
    },
    {
        id: "8-14",
        text: "建立預儲程序需要 MySQL 資料庫有下列何項資料表？",
        options: { A: "db table", B: "func table", C: "user table", D: "proc table" },
        [cite_start]answer: ["D"], // [cite: 822-827]
        type: "radio"
    },
    {
        id: "8-15",
        text: "建立預儲程序使用者需要有下列何項權限？",
        options: { A: "Insert", B: "Create", C: "Create Routine", D: "Grant" },
        [cite_start]answer: ["C"], // [cite: 828-833]
        type: "radio"
    },
    {
        id: "8-16",
        text: "修改預儲程序使用者需要有下列何項權限？",
        options: { A: "Update", B: "Alter", C: "Grant", D: "Alter Rountine" },
        [cite_start]answer: ["D"], // [cite: 834-839]
        type: "radio"
    },
    {
        id: "8-17",
        text: "刪除預儲程序使用者需要有下列何項權限？",
        options: { A: "Drop", B: "Delete", C: "Alter Routine", D: "Grant" },
        [cite_start]answer: ["C"], // [cite: 840-845]
        type: "radio"
    },
    {
        id: "8-18",
        text: "執行預儲程序使用者需要有下列何項權限？",
        options: { A: "Execute", B: "Run", C: "Process", D: "Reload" },
        [cite_start]answer: ["A"], // [cite: 846-851]
        type: "radio"
    },
    {
        id: "8-19",
        text: "在MySQL中要執行預儲程序需要下列何項指令？",
        options: { A: "Run", B: "Execute", C: "Call", D: "Enter" },
        [cite_start]answer: ["C"], // [cite: 852-857]
        type: "radio"
    },
    {
        id: "8-20",
        text: "預儲程序中的SQL指令必須要以下列何項符號做結尾？",
        options: { A: ",", B: ")", C: "#", D: ";" },
        [cite_start]answer: ["D"], // [cite: 858-863]
        type: "radio"
    },
    {
        id: "8-21",
        text: "要刪除預儲程序下列指令何者正確？",
        options: { A: "DELETE PROCEDURE", B: "ERASE PROCEDURE", C: "DROP PROCEDURE", D: "ALTER PROCEDURE" },
        [cite_start]answer: ["C"], // [cite: 864-869]
        type: "radio"
    },
    {
        id: "8-22",
        text: "要修改預儲程序下列指令何者正確？",
        options: { A: "MODIFY PROCEDURE", B: "UPDATE PROCEDURE", C: "DROP PROCEDURE", D: "ALTER PROCEDURE" },
        [cite_start]answer: ["D"], // [cite: 870-875]
        type: "radio"
    },
    {
        id: "8-23",
        text: "下列何者為預儲程序中流程控制可用的判斷式？(複選)",
        options: { A: "IF... THEN...END IF", B: "CASE... END CASE", C: "WHILE ... END WHILE", D: "LOOP ... END LOOP" },
        [cite_start]answer: ["A", "B"], // [cite: 876-881]
        type: "checkbox"
    },
    {
        id: "8-24",
        text: "下列何者為預儲程序中流程控制的迴圈式？(複選)",
        options: { A: "IF ... THEN ... END IF", B: "CASE ... END CASE", C: "WHILE ... END WHILE", D: "LOOP ... END LOOP" },
        [cite_start]answer: ["C", "D"], // [cite: 882-887]
        type: "checkbox"
    },
    {
        id: "8-25",
        text: "在預儲程序中下列哪些指令可用來指定參數傳遞的方式？(複選)",
        options: { A: "IN", B: "OUT", C: "INOUT", D: "OUTIN" },
        [cite_start]answer: ["A", "B", "C"], // [cite: 888-893]
        type: "checkbox"
    },
    {
        id: "8-26",
        text: "預儲程序 doloop(p1): Loop1中 p1=p1+1, 若 p1<10 則 ITERATE, 否則 LEAVE。傳入 p1=5。迴圈執行至 p1=10 時 LEAVE。最後 @x=10。選擇題：(A)5 (B)10 (C)15 (D)20",
        options: { A: "5", B: "10", C: "15", D: "20" },
        [cite_start]answer: ["B"], // [cite: 894-914]
        type: "radio"
    },
    {
        id: "8-27",
        text: "預儲程序 runrepeat(p1): @x=0; REPEAT @x=@x+1 UNTIL @x>p1 END REPEAT。傳入 15。@x 會加到 16 才會 >15 而停止。選擇題：(A)35 (B)36 (C)15 (D)16",
        options: { A: "35", B: "36", C: "15", D: "16" },
        [cite_start]answer: ["D"], // [cite: 915-931]
        type: "radio"
    },
    {
        id: "8-28",
        text: "預儲程序 runwhile(): v1=5; WHILE v1>0 DO @x=@x-1; v1=v1-1; END WHILE。若 @x 初始為 45，減 5 次後為 40。選擇題：(A)35 (B)40 (C)45 (D)50",
        options: { A: "35", B: "40", C: "45", D: "50" },
        [cite_start]answer: ["B"], // [cite: 932-951]
        type: "radio"
    },
    {
        id: "8-29",
        text: "自訂函式 func1(): v1=5; WHILE v1>0 DO v1=v1-1 END; RETURN v1。最後 v1 變為 0。選擇題：(A)5 (B)10 (C)0 (D)1",
        options: { A: "5", B: "10", C: "0", D: "1" },
        [cite_start]answer: ["C"], // [cite: 952-966]
        type: "radio"
    },
    {
        id: "8-30",
        text: "自訂函式 func2(p1): IF p1 < 10 RETURN 0 ELSE RETURN 20。傳入 25 (>10)。回傳 20。選擇題：(A)5 (B)10 (C)20 (D)25",
        options: { A: "5", B: "10", C: "20", D: "25" },
        [cite_start]answer: ["C"], // [cite: 967-972]
        type: "radio"
    },
    {
        id: "8-31",
        text: "自訂函式 func3(p1): CASE p1 WHEN 1:10, 2:20, 3:30, ELSE:40。傳入 20 (不符合1,2,3)。回傳 40。選擇題：(A)10 (B)20 (C)30 (D)40",
        options: { A: "10", B: "20", C: "30", D: "40" },
        [cite_start]answer: ["D"], // [cite: 973-998]
        type: "radio"
    },
    {
        id: "8-32",
        text: "在自訂函式中要回傳結果，需使用下列何項指令？",
        options: { A: "Revert", B: "Go back", C: "Back", D: "Returns" }, // 實際上語法是 RETURN，宣告是 RETURNS。題目答案D
        [cite_start]answer: ["D"], // [cite: 999-1004]
        type: "radio"
    },
    {
        id: "8-33",
        text: "建立自訂函式使用者需要下列何項權限？",
        options: { A: "Insert", B: "Create", C: "Create Routine", D: "Grant" },
        [cite_start]answer: ["C"], // [cite: 1005-1010]
        type: "radio"
    },
    {
        id: "8-34",
        text: "修改自訂函式使用者需要有下列何項權限？",
        options: { A: "Update", B: "Alter", C: "Grant", D: "Alter Routine" },
        [cite_start]answer: ["D"], // [cite: 1011-1016]
        type: "radio"
    },
    {
        id: "8-35",
        text: "刪除自訂函式使用者需要有下列何項權限？",
        options: { A: "Drop", B: "Delete", C: "Alter Routine", D: "Grant" },
        [cite_start]answer: ["C"], // [cite: 1017-1022]
        type: "radio"
    },
    {
        id: "8-36",
        text: "執行自訂函式使用者需要下列何項權限？",
        options: { A: "Execute", B: "Run", C: "Process", D: "Reload" },
        [cite_start]answer: ["A"], // [cite: 1023-1028]
        type: "radio"
    },
    {
        id: "8-37",
        text: "在自訂函式中下列何項可用來指定參數傳遞的方式？",
        options: { A: "IN", B: "OUT", C: "INOUT", D: "OUTIN" },
        [cite_start]answer: ["A"], // [cite: 1029-1034]
        type: "radio"
    },
    {
        id: "8-38",
        text: "下列哪些事件能夠引起觸發程序？(複選)",
        options: { A: "INSERT", B: "SELECT", C: "ALTER", D: "UPDATE" },
        [cite_start]answer: ["A", "D"], // [cite: 1035-1040]
        type: "checkbox"
    },
    {
        id: "8-39",
        text: "要讓觸發程序在事件發生後被觸發，需使用下列何項指令？",
        options: { A: "BEHIND", B: "NEXT", C: "AFTER", D: "BEFORE" },
        [cite_start]answer: ["C"], // [cite: 1041-1046]
        type: "radio"
    },
    {
        id: "8-40",
        text: "要讓觸發程序在事件發生前被觸發，需使用下列何項指令？",
        options: { A: "AHEAD", B: "PRIOR", C: "AFTER", D: "BEFORE" },
        [cite_start]answer: ["D"], // [cite: 1047-1052]
        type: "radio"
    },
    {
        id: "8-41",
        text: "下列何項指令可新增觸發程序？",
        options: { A: "ADD TRIGGER", B: "CREATE TRIGGER", C: "MAKE TRIGGER", D: "SET TRIGGER" },
        [cite_start]answer: ["B"], // [cite: 1053-1058]
        type: "radio"
    },
    {
        id: "8-42",
        text: "下列何項指令可刪除觸發程序？",
        options: { A: "DELETE TRIGGER", B: "EREASE TRIGGER", C: "DROP TRIGGER", D: "ALTER TRIGGER" },
        [cite_start]answer: ["C"], // [cite: 1059-1064]
        type: "radio"
    },
    {
        id: "8-43",
        text: "下列對於觸發程序的敘述何者正確？",
        options: { A: "觸發程序不能接受參數", B: "觸發程序只能傳遞參數", C: "觸發程序可以被多個事件觸發", D: "觸發程序不能刪除資料" },
        [cite_start]answer: ["A"], // [cite: 1065-1070]
        type: "radio"
    },
    {
        id: "8-44",
        text: "下列對於觸發程序的敘述何者正確？",
        options: { A: "觸發程序中可以引用實體資料表", B: "觸發程序中可以引用檢視表", C: "觸發程序中可以引用暫存表", D: "觸發程序中可以引用實體資料表及暫存表" },
        [cite_start]answer: ["A"], // [cite: 1071-1076]
        type: "radio"
    },
    {
        id: "8-45",
        text: "下列對於引用相同資料表，相同事件的觸發程序的敘述何者正確？",
        options: { A: "只可以有一個BEFORE 觸發程序", B: "只可以有一個AFTER 觸發程序", C: "可同時有一個BEFORE觸發程序，一個AFTER 觸發程序", D: "可同時有一個BEFORE觸發程序，一個NEXT 觸發程序" },
        [cite_start]answer: ["C"], // [cite: 1077-1082]
        type: "radio"
    },
    {
        id: "8-46",
        text: "建立觸發程序使用者需要有下列何項權限？",
        options: { A: "Insert", B: "Create", C: "Create Routine", D: "Super" },
        [cite_start]answer: ["D"], // [cite: 1083-1088]
        type: "radio"
    },
    {
        id: "8-47",
        text: "刪除觸發程序使用者需要有下列何項權限？",
        options: { A: "Drop", B: "Delete", C: "Super", D: "Grant" },
        [cite_start]answer: ["C"], // [cite: 1089-1094]
        type: "radio"
    },
    {
        id: "8-48",
        text: "當資料異動無法成功執行時，需透過下列何項指令將系統回復？",
        options: { A: "undo", B: "rollback", C: "cancel", D: "back" },
        [cite_start]answer: ["B"], // [cite: 1095-1100]
        type: "radio"
    },
    {
        id: "8-49",
        text: "當資料異動執行成功時，需透過下列何項指令讓系統確認？",
        options: { A: "finish", B: "commit", C: "done", D: "submit" },
        [cite_start]answer: ["B"], // [cite: 1101-1106]
        type: "radio"
    },
    {
        id: "8-50",
        text: "下列些 MySQL 資料表型態有支援 transaction 功能？(複選)",
        options: { A: "MyISAM", B: "ISAM", C: "BDB", D: "Innodb" },
        [cite_start]answer: ["C", "D"], // [cite: 1107-1112]
        type: "checkbox"
    },
    {
        id: "8-51",
        text: "在MySQL 要開始一個 transaction 需使用下列何項指令？",
        options: { A: "Start", B: "Start Transaction", C: "Begin Transaction", D: "Open Transaction" },
        [cite_start]answer: ["B"], // [cite: 1113-1118]
        type: "radio"
    },
    {
        id: "8-52",
        text: "下列何項指令可鎖定資料表 emp？",
        options: { A: "LOCK emp", B: "LOCK emp READ", C: "LOCK TABLES emp", D: "LOCK TABLES emp READ" },
        [cite_start]answer: ["D"], // [cite: 1119-1124]
        type: "radio"
    },
    {
        id: "8-53",
        text: "下列何項指令可解除鎖定資料表 emp？",
        options: { A: "UNLOCK", B: "UNLOCK emp", C: "UNLOCK TABLES", D: "LOCK TABLES emp" },
        [cite_start]answer: ["C"], // [cite: 1125-1130]
        type: "radio"
    },
    {
        id: "8-54",
        text: "在MySQL中要啟動交易(transaction)功能，下列指令何者正確？",
        options: { A: "SET COMMIT = 0", B: "SET COMMIT = 1", C: "SET AUTOCOMMIT = 1", D: "SET AUTOCOMMIT = 0" },
        [cite_start]answer: ["D"], // [cite: 1131-1136]
        type: "radio"
    },
    {
        id: "8-55",
        text: "A01原為100。A執行 BEGIN WORK; UPDATE...SET quantity=200 WHERE PID='A01'。B執行 SELECT...WHERE PID='A01'。在A未 COMMIT 前，B 讀到的值為何？(預設Isolation Level)",
        options: { A: "150", B: "100", C: "200", D: "300" },
        [cite_start]answer: ["B"], // [cite: 1137-1142]
        type: "radio"
    },
    {
        id: "8-56",
        text: "A02原為450。A執行 UPDATE...SET quantity=100... COMMIT。B執行 SELECT。B讀到的值為何？",
        options: { A: "450", B: "100", C: "200", D: "300" },
        [cite_start]answer: ["B"], // [cite: 1149-1154]
        type: "radio"
    },
    {
        id: "8-57",
        text: "A執行 BEGIN; INSERT...; COMMIT。B執行 SELECT。B讀到的值為何？(Insert了600,400, 但B查A01, A01原為300)",
        options: { A: "600", B: "400", C: "200", D: "300" },
        [cite_start]answer: ["D"], // [cite: 1163-1168]
        type: "radio"
    },
    {
        id: "8-58",
        text: "A執行 BEGIN; INSERT...; COMMIT。B執行 SELECT SUM。原有300+200+200=700，A插入600,400。Total=700+400=1100。B讀到多少？",
        options: { A: "600", B: "700", C: "1100", D: "1300" },
        [cite_start]answer: ["C"], // [cite: 1176-1181]
        type: "radio"
    },
    {
        id: "8-59",
        text: "A執行 BEGIN; INSERT...; ROLLBACK。B執行 SELECT SUM。原有700。A插入後 rollback。B讀到多少？",
        options: { A: "600", B: "700", C: "1100", D: "1300" },
        [cite_start]answer: ["B"], // [cite: 1190-1196]
        type: "radio"
    },
    {
        id: "8-60",
        text: "A執行 BEGIN; INSERT(600,400); ROLLBACK; UPDATE A02=100; COMMIT。原總和700 (A01:300, A02:200, B03:200)。插入取消。A02變100 (少100)。總和=300+100+200=600。",
        options: { A: "600", B: "700", C: "1100", D: "1300" },
        [cite_start]answer: ["A"], // [cite: 1204-1209]
        type: "radio"
    },

    // --- 第九類: 儲存引擎與紀錄檔 (9-01 ~ 9-25) ---
    {
        id: "9-01",
        text: "MySQL 5.1支援以下那些儲存引擎(storage engine)？(複選)",
        options: { A: "MyISAM", B: "InnoDB", C: "Memory", D: "Merge" },
        [cite_start]answer: ["A", "B", "C", "D"], // [cite: 1220-1225]
        type: "checkbox"
    },
    {
        id: "9-02",
        text: "下列哪一種儲存引擎是MySQL預設的儲存引擎？",
        options: { A: "MyISAM", B: "InnoDB", C: "Memory", D: "Merge" },
        [cite_start]answer: ["A"], // [cite: 1226-1231]
        type: "radio"
    },
    {
        id: "9-03",
        text: "每個 MyISAM 資料表會在磁碟上儲存三個檔案，分別儲存該資料表的結構、資料和索引，下列哪些是這三個檔案的副檔名？(複選)",
        options: { A: ".frm", B: ".MYD", C: ".MYI", D: ".exe" },
        [cite_start]answer: ["A", "B", "C"], // [cite: 1232-1238]
        type: "checkbox"
    },
    {
        id: "9-04",
        text: "建立資料表時，若要指定儲存引擎，可類似以下指令建立：CREATE TABLE t(i INT)參數名稱=MYISAM; 試問，參數名稱的地方要填入下列何項？",
        options: { A: "STORAGE", B: "ENGINE", C: "ORDER", D: "WHERE" },
        [cite_start]answer: ["B"], // [cite: 1239-1245]
        type: "radio"
    },
    {
        id: "9-05",
        text: "下列哪一種儲存引擎常被用於交易處理(transaction processing)應用程式，並支援ACID 交易特性和外部索引鍵？",
        options: { A: "MyISAM", B: "InnoDB", C: "Memory", D: "Merge" },
        [cite_start]answer: ["B"], // [cite: 1246-1252]
        type: "radio"
    },
    {
        id: "9-06",
        text: "下列哪一種儲存引擎將所有資料儲存於隨機存取記憶體(RAM)中以達到迅速搜尋資料的目的，也就是一般所稱的堆積(HEAP)引擎？",
        options: { A: "MyISAM", B: "InnoDB", C: "Memory", D: "Merge" },
        [cite_start]answer: ["C"], // [cite: 1253-1258]
        type: "radio"
    },
    {
        id: "9-07",
        text: "下列哪一種儲存引擎允許MySQL 資料庫管理者或開發者將依些相同的MyISAM 資料表在邏輯上群組起來，並且將其參考為物件，適合於像資料倉儲(data warehousing)等超大型資料庫(VLDB)環境？",
        options: { A: "MyISAM", B: "InnoDB", C: "Memory", D: "Merge" },
        [cite_start]answer: ["D"], // [cite: 1259-1267]
        type: "radio"
    },
    {
        id: "9-08",
        text: "下列哪一種儲存引擎對於存取大量少用性的歷史、存檔用或者安全性審核資訊，提供完美的解決方案？",
        options: { A: "Archive", B: "Blackhole", C: "CSV", D: "NDB" },
        [cite_start]answer: ["A"], // [cite: 1268-1273]
        type: "radio"
    },
    {
        id: "9-09",
        text: "下列哪一種儲存引擎可以串連分散的MySQL 伺服器，由許多實體的伺服器建立一個邏輯資料庫，非常適合在分散式的環境中使用？",
        options: { A: "Archive", B: "Blackhole", C: "Federated", D: "NDB" },
        [cite_start]answer: ["C"], // [cite: 1274-1280]
        type: "radio"
    },
    {
        id: "9-10",
        text: "下列哪一種儲存引擎屬於叢集式資料庫引擎(clustered database enginee)，適合用於高效能搜尋及需要最高階的反應時間和可用性要求的應用程式？",
        options: { A: "Archive", B: "Blackhole", C: "Federated", D: "NDB" },
        [cite_start]answer: ["D"], // [cite: 1281-1287]
        type: "radio"
    },
    {
        id: "9-11",
        text: "下列哪一種儲存引擎是以逗號分隔的文字檔儲存，便於在支援該種格式的其他軟體和應用程式間作匯出與匯入的動作？",
        options: { A: "Archive", B: "CSV", C: "Federated", D: "NDB" },
        [cite_start]answer: ["B"], // [cite: 1288-1294]
        type: "radio"
    },
    {
        id: "9-12",
        text: "下列哪一種儲存引擎會接受指令但不存資料，搜尋資料時均回傳空集合，其功能被使用在資料會自動複製但不在本地端儲存的分散式資料庫設計？",
        options: { A: "Blackhole", B: "CSV", C: "Federated", D: "NDB" },
        [cite_start]answer: ["A"], // [cite: 1295-1301]
        type: "radio"
    },
    {
        id: "9-13",
        text: "下列哪一種引擎是不作處理的空殼引擎，可以建立資料表，但無法儲存和擷取資料，目的在於提供 MySQL 原始程式一個如何寫入新儲存引擎的範例？",
        options: { A: "Blackhole", B: "Example", C: "Federated", D: "NDB" },
        [cite_start]answer: ["B"], // [cite: 1302-1308]
        type: "radio"
    },
    {
        id: "9-14",
        text: "下列敘述哪些是正確的？(複選)",
        options: { A: "MySQL 伺服器的開啟、執行與關閉的記錄是儲存於 error log", B: "所有更改資料的敘述會被記錄在 binary log", C: "超過 long_query_time 指定秒數的query指令，或者沒有建立索引(index)的query 指令，會被記錄到 slow log", D: "與用戶端的連線建立，及從用戶端收到的敘述會被記錄到 general query log" },
        [cite_start]answer: ["A", "B", "C", "D"], // [cite: 1309-1314]
        type: "checkbox"
    },
    {
        id: "9-15",
        text: "所有的記錄檔預設會存放到下列何項MySQL的目錄下？",
        options: { A: "bin", B: "scripts", C: "share", D: "data" },
        [cite_start]answer: ["D"], // [cite: 1315-1320]
        type: "radio"
    },
    {
        id: "9-16",
        text: "將記錄檔關閉後再重開的動作稱為flushing，試問下列哪些指令可以 flushing 記錄檔？(複選)",
        options: { A: "mysqladmin shutdown", B: "mysqladmin status", C: "mysqladmin flush-logs", D: "mysqladmin refresh" },
        [cite_start]answer: ["C", "D"], // [cite: 1321-1326]
        type: "checkbox"
    },
    {
        id: "9-17",
        text: "下列哪一種記錄檔當資料庫回復時，該記錄檔可用來更新資料庫，幫助資料庫做回復動作？",
        options: { A: "error log", B: "general query log", C: "binary log", D: "slow log" },
        [cite_start]answer: ["C"], // [cite: 1327-1333]
        type: "radio"
    },
    {
        id: "9-18",
        text: "啟動下列何種記錄檔，會造成效能下降約1%，但有助於資料的回復？",
        options: { A: "error log", B: "general query log", C: "binary log", D: "slow log" },
        [cite_start]answer: ["C"], // [cite: 1334-1339]
        type: "radio"
    },
    {
        id: "9-19",
        text: "關於記錄檔的敘述下列何者正確？(複選)",
        options: { A: "在MySQL5.1.6版以前，伺服器僅能將 general query log 和 slow query log 的資料寫到記錄檔", B: "在MySQL5.1.6版以後，伺服器不能將記錄寫到記錄檔", C: "在MySQL5.1.6版以後，伺服器只能將 general query log 寫到mysql 資料庫中 general_log 資料表中", D: "在MySQL5.1.6版以後，general_log 和 slow_log 可以不記錄到 table 只寫到記錄檔中" },
        [cite_start]answer: ["A", "C", "D"], // [cite: 1340-1348]
        type: "checkbox"
    },
    {
        id: "9-20",
        text: "Binary log 的每次寫入預設並無與磁碟同步，所以當作業系統或者機器突然當機，此時可透過下列哪一個系統變數，以指定每經過若干個寫入動作即與磁碟同步？",
        options: { A: "binlog_cache_use", B: "binlog_cache_size", C: "sync_binlog", D: "max_binlog_cache_size" },
        [cite_start]answer: ["C"], // [cite: 1349-1355]
        type: "radio"
    },
    {
        id: "9-21",
        text: "當使用 InnoDB 資料表且MySQL 伺服器處理一個COMMIT敘述時...若正好在此兩個動作中間發生當機...造成了binary log 與實際資料不同步的現象，若要解決此現象，可在執行參數中加入下列哪一個參數？",
        options: { A: "--innodb-safe-binlog", B: "--binlog-do-db", C: "--binlog-ignore-db", D: "--log-bin-index" },
        [cite_start]answer: ["A"], // [cite: 1356-1362]
        type: "radio"
    },
    {
        id: "9-22",
        text: "下列有關伺服器記錄檔的維護，哪些是正確的？(複選)",
        options: { A: "記錄檔應該定期清除，以確保記錄檔不會佔據過多空間", B: "記錄檔若有必要，應該定時作備份動作", C: "Mysqladmin flush-logs 指令可用來強迫 MySQL 開始使用新的記錄檔", D: "大部分記錄檔沒有保留價值，可以不用備份" },
        [cite_start]answer: ["A", "B", "C"], // [cite: 1363-1368]
        type: "checkbox"
    },
    {
        id: "9-23",
        text: "下列哪些事件的發生，會導致MyISAM 資料表內容會紊亂不正常？(複選)",
        options: { A: "在資料的寫入過程中，mysql 程序被強迫中止", B: "無預警電腦突然關機", C: "硬體故障", D: "當使用外部程式修改資料表(例如:myisamchk)，而此時，MySQL 伺服器也正在修改資料表" },
        [cite_start]answer: ["A", "B", "C", "D"], // [cite: 1369-1375]
        type: "checkbox"
    },
    {
        id: "9-24",
        text: "下列關於MyISAM資料表的敘述哪些正確？(複選)",
        options: { A: "若要檢查 MyISAM 資料表的狀況，可使用CHECK TABLE敘述", B: "若要修復紊亂不正常的MyISAM 資料表，可使用 REPAIR TABLE 敘述", C: "當 mysql 沒有在執行時，仍可使用myisamchk指令作檢查與修復資料表的動作", D: "當 mysql 沒有在執行時，無法作資料表的檢查與修復動作" },
        [cite_start]answer: ["A", "B", "C"], // [cite: 1376-1381]
        type: "checkbox"
    },
    {
        id: "9-25",
        text: "當資料表發生紊亂不正常的現象時，若要判斷是否為伺服器所造成，可觀察哪一個記錄檔中的 restarted mysqld訊息，若發現有此訊息，代表伺服器曾經終止掉後又重開？",
        options: { A: "error log", B: "general query log", C: "binary log", D: "slow log" },
        [cite_start]answer: ["A"], // [cite: 1382-1390]
        type: "radio"
    }
];