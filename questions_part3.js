// TQC 資料庫設計與應用 - 題庫 Part 3
// 來源檔案: 3.pdf (5-01 ~ 5-47) & 4.pdf (5-48 ~ 6-25)

const questions_part3 = [
    // --- 第五類: 函數 (5-01 ~ 5-70) ---
    {
        id: "5-01",
        text: "在運算式中，COALESCE函式可傳回資料中第一個非NULL的值，試問執行 SELECT COALESCE (NULL,1,2,3);結果為何？",
        options: { A: "NULL", B: "1", C: "2", D: "3" },
        [cite_start]answer: ["B"], // [cite: 3002-3008]
        type: "radio"
    },
    {
        id: "5-02",
        text: "在運算式中，GREATEST 函式可傳回資料中最大的值，試問執行 SELECT GREATEST (34.0,3.0,5.0,767.0);結果為何？",
        options: { A: "34.0", B: "3.0", C: "5.0", D: "767.0" },
        [cite_start]answer: ["D"], // [cite: 3009-3015]
        type: "radio"
    },
    {
        id: "5-03",
        text: "在運算式中，ISNULL 函式可用來檢驗括號內的值是否為NULL，試問執行 SELECT ISNULL(1/0);結果為何？",
        options: { A: "0", B: "1", C: "2", D: "3" },
        [cite_start]answer: ["B"], // [cite: 3016-3022]
        type: "radio"
    },
    {
        id: "5-04",
        text: "在運算式中，ADDDATE 函式可用來計算增加一段時間後的日期，試問執行 SELECT ADDDATE ('2006-11-01', INTERVAL 30 DAY); 後結果為何？",
        options: { A: "'2006-12-01'", B: "'2006-11-31'", C: "'2006-12-01 00:00:00'", D: "'2006-11-31 00:00:00'" },
        [cite_start]answer: ["A"], // [cite: 3023-3029]
        type: "radio"
    },
    {
        id: "5-05",
        text: "在運算式中，INTERVAL 函式可用來檢驗括號內第一個值，位在括號內其他數值的區間，試問執行 SELECT INTERVAL (5, 1, 10, 100); 後結果為何？",
        options: { A: "0", B: "1", C: "2", D: "3" },
        [cite_start]answer: ["B"], // [cite: 3030-3037]
        type: "radio"
    },
    {
        id: "5-06",
        text: "在運算式中，IF函式可用來檢測條件並回傳適當值，試問執行 SELECT IF (1>2,2,3);結果為何？",
        options: { A: "1", B: "2", C: "3", D: "4" },
        [cite_start]answer: ["C"], // [cite: 3038-3044]
        type: "radio"
    },
    {
        id: "5-07",
        text: "哪一個函式可將一個時間作時區的轉換？",
        options: { A: "CONVERT_TIME", B: "CONVERT()", C: "CONVERT_TZ()", D: "CONVERT_TIMEZONE" },
        [cite_start]answer: ["C"], // [cite: 3045-3050]
        type: "radio"
    },
    {
        id: "5-08",
        text: "已知A的ASCII編碼為65，試問執行SELECT ASCII ('C');結果為何？",
        options: { A: "66", B: "67", C: "68", D: "69" },
        [cite_start]answer: ["B"], // [cite: 3051-3056]
        type: "radio"
    },
    {
        id: "5-09",
        text: "BIN 函數，可回傳傳入參數的二進位字串，試問執行SELECT BIN (12);結果為何？",
        options: { A: "12", B: "'12'", C: "1100", D: "'1100'" },
        [cite_start]answer: ["D"], // [cite: 3057-3062]
        type: "radio"
    },
    {
        id: "5-10",
        text: "BIT_LENGTH函數，可回傳傳入字串所佔的位元數，試問執行SELECT BIT_LENGTH ('text');結果如何？",
        options: { A: "64", B: "32", C: "16", D: "4" },
        [cite_start]answer: ["B"], // [cite: 3063-3069]
        type: "radio"
    },
    {
        id: "5-11",
        text: "CHAR 函數，可將字元編碼轉為字元，假如 A 的字元編碼為65，試問執行 SELECT CHAR (72,69,76,76,79);結果如何？",
        options: { A: "TROOP", B: "CELLA", C: "HELLO", D: "GIDDY" },
        [cite_start]answer: ["C"], // [cite: 3070-3076]
        type: "radio"
    },
    {
        id: "5-12",
        text: "CHAR_LENGTH函數，可回傳傳入字串參數的字數(Character)，試問執行 SELECT CHAR_LENGTH('大家好');結果為何？",
        options: { A: "3", B: "6", C: "9", D: "12" },
        [cite_start]answer: ["A"], // [cite: 3077-3083]
        type: "radio"
    },
    {
        id: "5-13",
        text: "GET_FORMAT 函式可以取得各個標準的時間日期格式，試問執行 SELECT GET_FORMAT(DATE, 'ISO');會得到何種結果？",
        options: { A: "'%m.%d.%Y'", B: "'%Y-%m-%d'", C: "'%d.%m.%Y'", D: "'%Y%m%d'" },
        [cite_start]answer: ["B"], // [cite: 3084-3090]
        type: "radio"
    },
    {
        id: "5-14",
        text: "CONCAT 函數，可將傳入的字串參數串接後回傳，試問執行 SELECT CONCAT ('My', 'S', 'QL');結果為何？",
        options: { A: "My", B: "MyS", C: "MySQL", D: "LQSYM" },
        [cite_start]answer: ["C"], // [cite: 3091-3096]
        type: "radio"
    },
    {
        id: "5-15",
        text: "MAKEDATE 函數可用來計算一年中第幾天的日期，試問執行 SELECT MAKEDATE ('2006',100);結果為何？",
        options: { A: "'2006-03-10'", B: "'2006-04-10'", C: "'2006-05-10'", D: "'2006-06-10'" },
        [cite_start]answer: ["B"], // [cite: 3097-3103]
        type: "radio"
    },
    {
        id: "5-16",
        text: "CONCAT_WS函數，是CONCAT函數的特殊型，第一個輸入參數為分隔符號，可將傳入的字串參數以分隔符號串接後回傳，試問執行 SELECT CONCAT_WS (',', 'FIRST name', 'Second name', 'Last name'); 後結果為何？",
        options: { A: "'FIRST nameSecond nameLast name'", B: "'FIRST name'Second name'Last name'", C: "'FIRST name, Second name, Last name'", D: "'FIRSTnameSecondnameLastname'" },
        [cite_start]answer: ["C"], // [cite: 3104-3110]
        type: "radio"
    },
    {
        id: "5-17",
        text: "QUARTER 函數可計算輸入日期屬於該年的第幾季，試問執行 SELECT QUARTER('2006-11-15');會得到何種結果？",
        options: { A: "1", B: "2", C: "3", D: "4" },
        [cite_start]answer: ["D"], // [cite: 3111-3117]
        type: "radio"
    },
    {
        id: "5-18",
        text: "ELT 函數可依據輸入參數值取得對應的字串，試問執行SELECT ELT (1, 'ej', 'Heja', 'hej', 'foo');結果為何？",
        options: { A: "'ej'", B: "'Heja'", C: "'2'", D: "'10'" },
        [cite_start]answer: ["A"], // [cite: 3118-3124]
        type: "radio"
    },
    {
        id: "5-19",
        text: "EXPORT_SET函數可依據輸入參數的位元值，顯示對應的On值、Off值及分隔符號，試問執行 SELECT EXPORT_SET (5, 'Y', 'N',',',4); 後結果為何？(5的二進位是0101，倒過來是1010 => Y,N,Y,N)",
        options: { A: "'N,Y,N,Y'", B: "'Y,N,Y,N'", C: "'NYNY'", D: "'YNYN'" },
        [cite_start]answer: ["B"], // [cite: 3125-3133]
        type: "radio"
    },
    {
        id: "5-20",
        text: "FIELD 函數可傳回字串比對後的位置，試問執行 SELECT FIELD ('ej', 'Hej', 'ej', 'Heja', 'hej', 'foo'); 後結果為何？",
        options: { A: "0", B: "1", C: "2", D: "3" },
        [cite_start]answer: ["C"], // [cite: 3134-3140]
        type: "radio"
    },
    {
        id: "5-21",
        text: "YEARWEEK函數會對一個傳入的日期，計算該日在當年的第幾個星期，連同年份一起傳回，試問執行 SELECT YEARWEEK ('2006-11-01'); 後結果為何？",
        options: { A: "200644", B: "442006", C: "2006-44", D: "44-2006" },
        [cite_start]answer: ["A"], // [cite: 3141-3147]
        type: "radio"
    },
    {
        id: "5-22",
        text: "FIND_IN_SET函數可傳回字串位於以「,」分隔的字串組中的位置，試問執行 SELECT FIND_IN_SET ('b', 'a,b,c,d');結果為何？",
        options: { A: "0", B: "1", C: "2", D: "3" },
        [cite_start]answer: ["C"], // [cite: 3148-3154]
        type: "radio"
    },
    {
        id: "5-23",
        text: "HEX 函數可將十進制數字轉為十六進制或將字串轉為編碼值，試問執行 SELECT HEX (255);結果為何？",
        options: { A: "255", B: "FF", C: "552", D: "FFFF" },
        [cite_start]answer: ["B"], // [cite: 3155-3161]
        type: "radio"
    },
    {
        id: "5-24",
        text: "INSERT 函數可做字串取代的功能，試問執行 SELECT INSERT('Quadratic', 3, 4, 'What');結果為何？",
        options: { A: "Quadratic", B: "QuaWhattic", C: "QuWhatadratic", D: "QuWhattic" },
        [cite_start]answer: ["D"], // [cite: 3162-3168]
        type: "radio"
    },
    {
        id: "5-25",
        text: "INSTR函數可回傳搜尋字串第一次出現的位置，試問執行 SELECT INSTR ('foobarbar', 'bar');結果為何？",
        options: { A: "4", B: "5", C: "6", D: "7" },
        [cite_start]answer: ["A"], // [cite: 3169-3175]
        type: "radio"
    },
    {
        id: "5-26",
        text: "LEFT 函數可回傳最左側的部分字串，試問執行SELECT LEFT ('foobarbar',5); 結果為何？",
        options: { A: "arbar", B: "fooba", C: "oobar", D: "obarb" },
        [cite_start]answer: ["B"], // [cite: 3176-3181]
        type: "radio"
    },
    {
        id: "5-27",
        text: "LENGTH 函數可回傳字串長度，試問值 SELECT LENGTH ('text');結果為何？",
        options: { A: "0", B: "2", C: "4", D: "6" },
        [cite_start]answer: ["C"], // [cite: 3182-3187]
        type: "radio"
    },
    {
        id: "5-28",
        text: "LOCATE 函數可回傳子字串在母字串出現的位置，並可指定搜尋起始位置，試問執行 SELECT LOCATE ('bar', 'foobarbar',5); 後結果為何？",
        options: { A: "4", B: "7", C: "3", D: "6" },
        [cite_start]answer: ["B"], // [cite: 3188-3195]
        type: "radio"
    },
    {
        id: "5-29",
        text: "LOWER 函數可將大寫英文字母轉為小寫英文字母，試問執行 SELECT LOWER ('QUADRATICALLY');結果為何？",
        options: { A: "'QUADRATICALLY'", B: "'Quadratically'", C: "'quadratically'", D: "'quadratically'" }, // C與D選項相同，原題庫答案為D
        [cite_start]answer: ["D"], // [cite: 3196-3202]
        type: "radio"
    },
    {
        id: "5-30",
        text: "LPAD 函數可由字串左側補入填充字元，試問執行SELECT LPAD ('hi',4, '??'); 結果為何？",
        options: { A: "'??hi'", B: "'hi??'", C: "'hi'", D: "'hihi'" },
        [cite_start]answer: ["A"], // [cite: 3203-3208]
        type: "radio"
    },
    {
        id: "5-31",
        text: "LTRIM 函數可去除輸入字串左側多餘空白字元，試問執行SELECT LTRIM(' barbar');結果為何？",
        options: { A: "'bar bar'", B: "'barbar'", C: "' barbar'", D: "'barbar '" },
        [cite_start]answer: ["B"], // [cite: 3209-3216]
        type: "radio"
    },
    {
        id: "5-32",
        text: "MAKE_SET函數可依據位元的設定取得對應字串的串接，試問執行SELECT MAKE_SET (1 | 4, 'hello', 'nice', 'world');結果為何？(1|4=5=101, 取第1和第3個)",
        options: { A: "'hello'", B: "'nice'", C: "'nice, world'", D: "'hello, world'" },
        [cite_start]answer: ["D"], // [cite: 3217-3223]
        type: "radio"
    },
    {
        id: "5-33",
        text: "MID 函數功能與 SUBSTRING相同，可擷取部分字串，試問執行SELECT MID ('HOW ARE YOU?',5,3);結果為何？",
        options: { A: "'HOW'", B: "'ARE'", C: "'YOU'", D: "'HOW ARE YOU?'" },
        [cite_start]answer: ["B"], // [cite: 3224-3230]
        type: "radio"
    },
    {
        id: "5-34",
        text: "OCT 函數可將傳入的十進位數值轉為八進位數數值字串，試問執行SELECT OCT(12);結果為何？",
        options: { A: "'10'", B: "'12'", C: "'14'", D: "'16'" },
        [cite_start]answer: ["C"], // [cite: 3231-3237]
        type: "radio"
    },
    {
        id: "5-35",
        text: "REPEAT 函數可將傳入的字串重複串接，試問執行SELECT REPEAT ('MySQL',3);結果為何？",
        options: { A: "'MySQLMySQLMySQL'", B: "'MySQLMySQL'", C: "'MySQL'", D: "NULL" },
        [cite_start]answer: ["A"], // [cite: 3238-3244]
        type: "radio"
    },
    {
        id: "5-36",
        text: "REPLACE 函數可用以取代字串，將取代後的字串傳回，試問執行SELECT REPLACE('美麗與善良','善良','哀愁');結果為何？",
        options: { A: "'美麗與善良'", B: "'哀愁與善良'", C: "'美麗與哀愁'", D: "'哀愁與善良'" },
        [cite_start]answer: ["C"], // [cite: 3245-3251]
        type: "radio"
    },
    {
        id: "5-37",
        text: "REVERSE 函數可將輸入字串反轉並傳回，試問執行SELECT REVERSE ('大家好');結果為何？",
        options: { A: "'好家大'", B: "'家好大'", C: "'大家好'", D: "'好大家'" },
        [cite_start]answer: ["A"], // [cite: 3252-3259]
        type: "radio"
    },
    {
        id: "5-38",
        text: "RIGHT 函數可擷取右邊的字串並回傳，試問執行 SELECT RIGHT('美麗與善良',2);結果為何？",
        options: { A: "'美麗'", B: "'善良'", C: "'麗與'", D: "'與善'" },
        [cite_start]answer: ["B"], // [cite: 3260-3265]
        type: "radio"
    },
    {
        id: "5-39",
        text: "RPAD 函數可將不足位的部分以填補位元補在右邊並回傳，試問執行 SELECT RPAD ('大家好',8,'!');結果為何？(假設一個中文字2bytes或utf8下3bytes，依據題庫答案推測)",
        options: { A: "'大家好!'", B: "'大家好!!!'", C: "'大家好!!!!!'", D: "'大家好!!!!!!!!'" },
        answer: ["C"], // 題庫答案為 C，視編碼與定義而定
        type: "radio"
    },
    {
        id: "5-40",
        text: "SPACE 函數可回傳指定個數的空白字元，若想要回傳六個空白字元，該如何呼叫 SPACE 函數？",
        options: { A: "SPACE(6)", B: "SPACE('',6)", C: "SPACE(6,' ')", D: "SPACE('6')" },
        [cite_start]answer: ["A"], // [cite: 3274-3279]
        type: "radio"
    },
    {
        id: "5-41",
        text: "試問執行 SELECT UCASE ('Open the door. ');會得到何種結果？",
        options: { A: "'Open The Door'", B: "'open the door'", C: "'OPEN THE DOOR'", D: "'OPEN the DOOR'" },
        [cite_start]answer: ["C"], // [cite: 3280-3285]
        type: "radio"
    },
    {
        id: "5-42",
        text: "ABS 函數提供絕對值的功能，試問執行SELECT ABS (-100);會得到何種結果？",
        options: { A: "100", B: "-100", C: "4", D: "-4" },
        [cite_start]answer: ["A"], // [cite: 3286-3291]
        type: "radio"
    },
    {
        id: "5-43",
        text: "CEIL 函數提供無條件進位的功能，試問執行SELECT CEIL (-1.23);會得到何種結果？",
        options: { A: "-1", B: "-2", C: "1", D: "2" },
        [cite_start]answer: ["A"], // [cite: 3292-3297]
        type: "radio"
    },
    {
        id: "5-44",
        text: "ACOS 函數可由傳入的COS值，反求其角度，試問執行SELECT ACOS (1);會得到什麼結果？",
        options: { A: "1", B: "1.5", C: "2", D: "0" },
        [cite_start]answer: ["D"], // [cite: 3298-3303]
        type: "radio"
    },
    {
        id: "5-45",
        text: "FLOOR 函數提供無條件捨去的功能，試問執行 SELECT FLOOR (1.23);會得到何種結果？",
        options: { A: "-1", B: "-2", C: "1", D: "2" },
        [cite_start]answer: ["C"], // [cite: 3304-3309]
        type: "radio"
    },
    {
        id: "5-46",
        text: "DEGREE 函數可將角度的 radians 轉為 degrees，試問執行 SELECT DEGREES(PI());會得到怎樣的結果？",
        options: { A: "90", B: "180", C: "270", D: "360" },
        [cite_start]answer: ["B"], // [cite: 3310-3316]
        type: "radio"
    },
    {
        id: "5-47",
        text: "MOD 函數提供取餘數的功能，試問執行SELECT MOD (234,10);會得到何種結果？",
        options: { A: "10", B: "234", C: "4", D: "34" },
        [cite_start]answer: ["C"], // [cite: 3317-3322]
        type: "radio"
    },
    {
        id: "5-48",
        text: "PI函數提供圓周率的值，試問執行SELECT PI();會得到何種結果？",
        options: { A: "3.14", B: "3.141593", C: "3", D: "3.1" },
        [cite_start]answer: ["B"], // [cite: 4608-4613]
        type: "radio"
    },
    {
        id: "5-49",
        text: "POW 函數提供次方的運算，試問執行SELECT POW(2,3);會得到何種結果？",
        options: { A: "2", B: "3", C: "9", D: "8" },
        [cite_start]answer: ["D"], // [cite: 4614-4619]
        type: "radio"
    },
    {
        id: "5-50",
        text: "SIGN 函數可取得傳入參數的正負值，試問分別執行：SELECT SIGN(-32); SELECT SIGN(0); SELECT SIGN(234); 會得到何種結果？",
        options: { A: "-, 0, +", B: "-1, 0, 1", C: "0, 1, -1", D: "1, -1, 0" },
        [cite_start]answer: ["B"], // [cite: 4620-4626]
        type: "radio"
    },
    {
        id: "5-51",
        text: "SQRT 函數可計算傳入參數的平方根，試問執行SELECT SQRT(4);會得到何種結果？",
        options: { A: "2", B: "4", C: "8", D: "16" },
        [cite_start]answer: ["A"], // [cite: 4627-4633]
        type: "radio"
    },
    {
        id: "5-52",
        text: "TRUNCATE函數可將指定位數後的小數點捨去，試問SELECT TRUNCATE(1.223,1);會得到何種結果？",
        options: { A: "1", B: "1.2", C: "1.22", D: "1.223" },
        [cite_start]answer: ["B"], // [cite: 4634-4640]
        type: "radio"
    },
    {
        id: "5-53",
        text: "BIT_COUNT函數可計算傳入參數中有幾個bit 被設成1，試問執行SELECT BIT_COUNT(29), BIT_COUNT(b'101010');會得到什么結果？",
        options: { A: "3, 3", B: "3, 4", C: "4, 3", D: "4, 4" },
        [cite_start]answer: ["C"], // [cite: 4641-4647]
        type: "radio"
    },
    {
        id: "5-54",
        text: "呼叫哪些函數或指令可得到目前日期？(複選)",
        options: { A: "CURDATE()", B: "CURRENT_DATE", C: "CURRENT_DATE()", D: "CURTIME()" },
        [cite_start]answer: ["A", "B", "C"], // [cite: 4648-4654]
        type: "checkbox"
    },
    {
        id: "5-55",
        text: "呼叫哪些函數或指令可得到目前時間？(複選)",
        options: { A: "CURTIME()", B: "CURRENT_TIME", C: "CURRENT_TIME()", D: "DATE()" },
        [cite_start]answer: ["A", "B", "C"], // [cite: 4655-4661]
        type: "checkbox"
    },
    {
        id: "5-56",
        text: "呼叫哪些函數或指令可得到目前的日期和時間？(複選)",
        options: { A: "DATE()", B: "NOW()", C: "CURRENT_TIMESTAMP()", D: "CURRENT_TIMESTAMP" },
        [cite_start]answer: ["B", "C", "D"], // [cite: 4662-4668]
        type: "checkbox"
    },
    {
        id: "5-57",
        text: "DATE 函數可從一個傳數的日期時間參數中，擷取日期部分回傳，試問執行 SELECT DATE ('2006-12-31 01:02:03');會得到何種結果？",
        options: { A: "'2006-12-31'", B: "'01:02:03'", C: "'2006-12-31 01:02:03'", D: "'12-31-2006'" },
        [cite_start]answer: ["A"], // [cite: 4669-4676]
        type: "radio"
    },
    {
        id: "5-58",
        text: "DATEDIFF()可計算傳入兩個日期時間的相差天數，試問執行 SELECT DATEDIFF('2006-11-15 23:59:59','2006-10-31');會得到何種結果？",
        options: { A: "'15'", B: "'-15'", C: "15", D: "-15" },
        [cite_start]answer: ["C"], // [cite: 4677-4683]
        type: "radio"
    },
    {
        id: "5-59",
        text: "DATE_ADD 函數可在給定的日期時間參數，加上一段日期時間，試問執行 SELECT DATE_ADD('2006-12-31 23:59:59', INTERVAL 1 DAY);後結果為何？",
        options: { A: "'2006-12-32 23:59:59'", B: "'2006-12-32'", C: "'2007-01-01 23:59:59'", D: "'2007-01-01'" },
        [cite_start]answer: ["C"], // [cite: 4684-4691]
        type: "radio"
    },
    {
        id: "5-60",
        text: "DATE_SUB函數可在給定的日期時間參數，減去一段日期時間，試問執行 SELECT DATE_SUB('2007-01-02', INTERVAL 31 DAY);後結果為何？",
        options: { A: "'2006-12-02 00:00:00'", B: "'2006-12-02'", C: "'2007-02-02 00:00:00'", D: "'2007-02-02'" },
        [cite_start]answer: ["B"], // [cite: 4692-4699]
        type: "radio"
    },
    {
        id: "5-61",
        text: "DATE_FORMAT函數可格式化日期時間，試問執行 SELECT DATE_FORMAT('2007-02-15 22:23:00', '%D %M %Y');後結果為何？",
        options: { A: "'15th February 2007'", B: "'15th-February-2007'", C: "'15 02 2007'", D: "'15-02-2007'" },
        [cite_start]answer: ["A"], // [cite: 4700-4706]
        type: "radio"
    },
    {
        id: "5-62",
        text: "哪一個函數可以取得一個日期是星期幾，例如:2006-10-29是星期日(回傳結果 1=星期日、2=星期一、3=星期二..)？",
        options: { A: "WEEK('2006-10-29')", B: "DAYOFWEEK('2006-10-29')", C: "DAY('2006-10-29')", D: "DAYOFYEAR('2006-10-29')" },
        [cite_start]answer: ["B"], // [cite: 4707-4714]
        type: "radio"
    },
    {
        id: "5-63",
        text: "哪一個函數可以取得一個日期是該年的第幾天，例如:2007-02-03是2007年的第34天？",
        options: { A: "WEEK('2007-02-03')", B: "DAYOFWEEK('2007-02-03')", C: "DAY('2007-02-03')", D: "DAYOFYEAR('2007-02-03')" },
        [cite_start]answer: ["D"], // [cite: 4715-4721]
        type: "radio"
    },
    {
        id: "5-64",
        text: "哪一個函數可以計算從0點0分0秒到某個時間的總秒數，例如:輸入'00:39:38' 可得到2378？",
        options: { A: "WEEK(' 00:39:38')", B: "DAYOFWEEK('00:39:38')", C: "TIME_TO_SEC('00:39:38')", D: "DAYOFYEAR('00:39:38')" },
        [cite_start]answer: ["C"], // [cite: 4722-4728]
        type: "radio"
    },
    {
        id: "5-65",
        text: "使用 CASE...WHEN...THEN的控制函數，可以條件判斷回傳不同的值，試問執行 SELECT CASE 1 WHEN 1 THEN 'one' WHEN 2 THEN 'two' ELSE 'more' END;後結果為何？",
        options: { A: "'one'", B: "'two'", C: "'more'", D: "NULL" },
        [cite_start]answer: ["A"], // [cite: 4729-4736]
        type: "radio"
    },
    {
        id: "5-66",
        text: "使用 IF 控制函數，可以條件判斷回傳不同的值，試問執行 SELECT IF(1>2, 'yes', 'no');的結果為何？",
        options: { A: "'yes'", B: "'no'", C: "'1'", D: "NULL" },
        [cite_start]answer: ["B"], // [cite: 4737-4743]
        type: "radio"
    },
    {
        id: "5-67",
        text: "試問執行SELECT IFNULL(1,0);與SELECT IFNULL(NULL,10);的結果各為何？",
        options: { A: "'1', NULL", B: "'1', '10'", C: "'0', NULL", D: "'0', '10'" },
        [cite_start]answer: ["B"], // [cite: 4744-4749]
        type: "radio"
    },
    {
        id: "5-68",
        text: "試問執行SELECT NULLIF(1,1); 與 SELECT NULLIF (1,10);的結果各為何？",
        options: { A: "'1', NULL", B: "'1', NULL", C: "NULL, 1", D: "NULL, '10'" },
        [cite_start]answer: ["C"], // [cite: 4750-4755]
        type: "radio"
    },
    {
        id: "5-69",
        text: "若要計算分組(Group by)後該組的平均值，可用哪一個函數操作？",
        options: { A: "MIN()", B: "MAX()", C: "COUNT()", D: "AVG()" },
        [cite_start]answer: ["D"], // [cite: 4756-4761]
        type: "radio"
    },
    {
        id: "5-70",
        text: "若要計算分組(Group by)後該組的最大值，可用哪一個函數操作？",
        options: { A: "MIN()", B: "MAX()", C: "COUNT()", D: "AVG()" },
        [cite_start]answer: ["B"], // [cite: 4765-4770]
        type: "radio"
    },

    // --- 第六類: 資料庫備份與回復 (6-01 ~ 6-25) ---
    {
        id: "6-01",
        text: "下列闘於資料庫備份的部分，何者敘述正確？(複選)",
        options: { A: "在作資料備份時，有相關的表格應該要先被LOCK住，在做備份動作", B: "作資料庫備份時，應該先作 FLUSH TABLE，以確保備份時，所有資料都已寫回資料庫", C: "MySQL 作資料備份時很麻煩", D: "因 MySQL 的表格都是存到檔案上面，所以作資料備份很容易" },
        [cite_start]answer: ["A", "B", "D"], // [cite: 4775-4781]
        type: "checkbox"
    },
    {
        id: "6-02",
        text: "以下哪些程式是專門開發用來備份 MYSQL 資料庫用的？(複選)",
        options: { A: "mysqld", B: "mysqldump", C: "mysqlhotcopy", D: "mysqladmin" },
        [cite_start]answer: ["B", "C"], // [cite: 4782-4788]
        type: "checkbox"
    },
    {
        id: "6-03",
        text: "MySQL 支援遞增備份(incremental backup)，但是若要啟動遞增備份，需要在執行主程式時加上--log-bin 選項，需啟動何種功能，方可執行遞增備份功能？",
        options: { A: "Program logging", B: "Database logging", C: "Text logging", D: "Binary logging" },
        [cite_start]answer: ["D"], // [cite: 4789-4795]
        type: "radio"
    },
    {
        id: "6-04",
        text: "執行「SELECT * INTO 指令 備份檔名稱 FROM 表格名;」可將特定表格内容備份到外部檔案，試問敘述中的「指令」應該填入？",
        options: { A: "INFILE", B: "OUTFILE", C: "REPLACE", D: "IGNORE" },
        [cite_start]answer: ["B"], // [cite: 4796-4802]
        type: "radio"
    },
    {
        id: "6-05",
        text: "執行「LOAD DATA 指令1 '備份檔名稱' 指令2 INTO TABLE 表格名稱;」可將從外部檔案回復特定表格內容且復蓋重複的部分，試問敘述中的「指令1」及「指令2」應該填入？(複選)",
        options: { A: "指令1填入INFILE", B: "指令1填入 OUTFILE", C: "指令2填入 REPLACE", D: "指令2填入 IGNORE" },
        [cite_start]answer: ["A", "C"], // [cite: 4803-4810]
        type: "checkbox"
    },
    {
        id: "6-06",
        text: "利用 LOAD DATA 指令作資料庫表格回復時，回復表格中要有什麼Key值，否則會造成資料重復的現象？(複選)",
        options: { A: "主鍵(Primary Key)", B: "唯一鍵(Unique Key)", C: "索引鍵(Index Key)", D: "全文檢索(Full Text)" },
        [cite_start]answer: ["A", "B"], // [cite: 4811-4818]
        type: "checkbox"
    },
    {
        id: "6-07",
        text: "MySQL 的預設編碼(character set)為下列何項？",
        options: { A: "latin1", B: "big5", C: "utf8", D: "視作業系統而定" },
        [cite_start]answer: ["A"], // [cite: 4819-4824]
        type: "radio"
    },
    {
        id: "6-08",
        text: "MySQL 的校對(collation)設定，主要是用來對於字串作那些處理時使用？(複選)",
        options: { A: "INSERT", B: "SELECT 中的 Order by", C: "SELECT 中的 Group by", D: "UPDATE" },
        [cite_start]answer: ["B", "C"], // [cite: 4825-4831]
        type: "checkbox"
    },
    {
        id: "6-09",
        text: "執行「SET GLOBAL 指令= 'SYSTEM';」當敘述中的「指令」為下列何項時，可設定 MySQL的時區為作業系統時區？",
        options: { A: "--update-state", B: "--language", C: "character-set", D: "time_zone" },
        [cite_start]answer: ["D"], // [cite: 4832-4838]
        type: "radio"
    },
    {
        id: "6-10",
        text: "以下哪些是MySQL有提供的記録型態(log type)？(複選)",
        options: { A: "error log", B: "general query log", C: "binary log", D: "slow log" },
        [cite_start]answer: ["A", "B", "C", "D"], // [cite: 4839-4845]
        type: "checkbox"
    },
    {
        id: "6-11",
        text: "MySQL 伺服器的開啟、執行與關閉的記錄是儲存於哪一種紀錄檔中？",
        options: { A: "error log", B: "general query log", C: "binary log", D: "slow log" },
        [cite_start]answer: ["A"], // [cite: 4846-4851]
        type: "radio"
    },
    {
        id: "6-12",
        text: "所有更改資料的敘述會被哪種記錄檔記錄下來？",
        options: { A: "error log", B: "general query log", C: "binary log", D: "slow log" },
        [cite_start]answer: ["C"], // [cite: 4852-4857]
        type: "radio"
    },
    {
        id: "6-13",
        text: "超過 long_query_time 指定秒数的query指令，或者沒建立索引(index)的query 指令，會被記錄到哪一種記錄檔中？",
        options: { A: "error log", B: "general query log", C: "binary log", D: "slow log" },
        [cite_start]answer: ["D"], // [cite: 4858-4864]
        type: "radio"
    },
    {
        id: "6-14",
        text: "當需要在單一機器上執行多個MySQL 伺服器時，以下那些服器設定值需調成不一樣？(複選)",
        options: { A: "--port (for Windows and Unix like)", B: "--socket (for Windows and Unix like)", C: "--shared-memory-base-name (for Windows)", D: "--pid-file (for Unix like)" },
        [cite_start]answer: ["A", "B", "C", "D"], // [cite: 4865-4872]
        type: "checkbox"
    },
    {
        id: "6-15",
        text: "在 mysql 資料庫中的哪一個表格，裡面會儲存所有使用者的帳號、密碼及權限，這個表格非常重要，除了 root 使用者之外，不應給其他使用者存取？",
        options: { A: "db", B: "host", C: "proc", D: "user" },
        [cite_start]answer: ["D"], // [cite: 4873-4879]
        type: "radio"
    },
    {
        id: "6-16",
        text: "每個使用者都應該有適當的資料庫存取耀限，下列哪些指令可用來授耀或撤銷存取權限？(複選)",
        options: { A: "GRANT", B: "ALLOW", C: "REVOKE", D: "DENY" },
        [cite_start]answer: ["A", "C"], // [cite: 4880-4887]
        type: "checkbox"
    },
    {
        id: "6-17",
        text: "登入 MySQL的指令為「mysql 參數一 帳號 參數二 密碼;」，下列敘述哪些正確？(複選)",
        options: { A: "參數一為-a", B: "參數一為-u", C: "參數二為-p", D: "參數二為-t" },
        [cite_start]answer: ["B", "C"], // [cite: 4888-4895]
        type: "checkbox"
    },
    {
        id: "6-18",
        text: "一些重要的驗證資料(例如:密碼)存入資料庫時，應該作單向性加密的動作再存入，哪些函數可用來作單向性加密？(複選)",
        options: { A: "MD5()", B: "MAX()", C: "MIN()", D: "SHA1()" },
        [cite_start]answer: ["A", "D"], // [cite: 4896-4904]
        type: "checkbox"
    },
    {
        id: "6-19",
        text: "MySQL 伺服器預設提供的服務 port number 是下列何項？",
        options: { A: "1106", B: "2206", C: "3306", D: "4406" },
        [cite_start]answer: ["C"], // [cite: 4905-4911]
        type: "radio"
    },
    {
        id: "6-20",
        text: "以下哪些權限不應授權給非管理者權限的使用者？(複選)",
        options: { A: "PROCESS", B: "SUPER", C: "FILE", D: "SELECT" },
        [cite_start]answer: ["A", "B", "C"], // [cite: 4912-4920]
        type: "checkbox"
    },
    {
        id: "6-21",
        text: "在 MySQL 哪一個版本以前，使用者密碼的編碼是16bytes，該版本之後是採用較安全的41 bytes編码，加強了使用者密码保護？",
        options: { A: "3.0", B: "3.1", C: "4.0", D: "4.1" },
        [cite_start]answer: ["D"], // [cite: 4921-4927]
        type: "radio"
    },
    {
        id: "6-22",
        text: "MySQL5 預設的密碼編碼是採用新的編碼方式(41 bytes)，如果希望改成舊的編碼方式可執行以下敘述「SET PASSWORD FOR '使用者名稱'@'主機名稱' = 函數('密碼');」，試問，敘述中的「函數」試下列何項？",
        options: { A: "OLD_PASSWORD", B: "PASSWORD_OLD", C: "PRIOR_PASSWORD", D: "PASSWORD_PRIOR" },
        [cite_start]answer: ["A"], // [cite: 4928-4937]
        type: "radio"
    },
    {
        id: "6-23",
        text: "下列哪些指令可用來新增使用者？(複選)",
        options: { A: "LOAD", B: "CREATE USER", C: "SHOW", D: "GRANT" },
        [cite_start]answer: ["B", "D"], // [cite: 4938-4944]
        type: "checkbox"
    },
    {
        id: "6-24",
        text: "此敘述可用來新增使用者：「指令 INTO user VALUES('localhost','monty' PASSWORD('some_pass'),'Y','Y',....; 」，試問敘选中的「指令」為下列何项？",
        options: { A: "INSERT", B: "DELETE", C: "UPDATE", D: "SELECT" },
        [cite_start]answer: ["A"], // [cite: 4945-4953]
        type: "radio"
    },
    {
        id: "6-25",
        text: "當做完權限設定時，最後需要執行哪一個敘述，才會將設變後的權限設定完成？",
        options: { A: "FLUSH RIGHT", B: "FLUSH PRIVILEGES", C: "FLUSH USER", D: "FLUSH LOG" },
        [cite_start]answer: ["B"], // [cite: 4954-4960]
        type: "radio"
    }
];