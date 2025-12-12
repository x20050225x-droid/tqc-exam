// 這是 questions.js 檔案
// 把所有題目放在這裡，變數名稱固定為 questions

const questions = [
    // --- 第一類: 網路基本概念 ---
    {
        id: "1-01",
        text: "網路基礎建設包含三類網路元件，下列敘述哪些正確？(複選)",
        options: { A: "裝置", B: "檔案", C: "媒體", D: "服務" },
        answer: ["A", "C", "D"],
        type: "checkbox"
    },
    {
        id: "1-02",
        text: "關於網路基礎架構的類型，下列敘述哪些正確？(複選)",
        options: { A: "人際網路", B: "區域網路", C: "無線網路", D: "廣域網路" },
        answer: ["B", "C", "D"],
        type: "checkbox"
    },
    {
        id: "1-03",
        text: "下列敘述哪一項是指統合網路？",
        options: { A: "一項服務-一個網路", B: "一項服務-多個網路", C: "多項服務-一個網路", D: "多項服務-多個網路" },
        answer: ["C"],
        type: "radio"
    },
    {
        id: "1-04",
        text: "將資料從一個給定點傳送到另一給定點所用的時間，下列敘述哪一項正確？",
        options: { A: "Dead Time", B: "Hello Time", C: "延遲時間", D: "收斂時間" },
        answer: ["C"],
        type: "radio"
    },
    {
        id: "1-05",
        text: "頻寬是媒體承載資料的能力，下列哪些是屬於頻寬的單位？(複選)",
        options: { A: "Kbps", B: "Mbps", C: "Lbps", D: "Gbps" },
        answer: ["A", "B", "D"],
        type: "checkbox"
    },
    {
        id: "1-06",
        text: "下列哪些裝置是屬於終端裝置？(複選)",
        options: { A: "網路線", B: "筆記型電腦", C: "網路印表機", D: "行動手持裝置" },
        answer: ["B", "C", "D"],
        type: "checkbox"
    },
    {
        id: "1-07",
        text: "下列敘述哪一項裝置，是用來將不同型式的網路連接起來的連接器，連接有許多區段的複雜網路？",
        options: { A: "主機", B: "Web 伺服器", C: "DSL數據機", D: "路由器" },
        answer: ["D"],
        type: "radio"
    },
    {
        id: "1-08",
        text: "下列哪一項裝置，是指所有連線到網路並直接參與網路通訊的電腦？",
        options: { A: "VoIP 電話", B: "行動手持裝置", C: "網路印表機", D: "主機" },
        answer: ["D"],
        type: "radio"
    },
    {
        id: "1-09",
        text: "下列哪一項不是階層式網路設計的網路層級？",
        options: { A: "存取層", B: "分佈層", C: "網路層", D: "核心層" },
        answer: ["A"],
        type: "radio"
    },
    {
        id: "1-10",
        text: "關於階層式網路設計中分佈層的敘述，下列哪一項正確？",
        options: { A: "提供基於政策管理的連通服務", B: "提供作業群組或使用者的網路存取服務", C: "提供分佈層交換設備間快速傳送服務", D: "使用更快速而不是更多的設備來實現擴展" },
        answer: ["A"],
        type: "radio"
    },
    {
        id: "1-11",
        text: "最簡單的對等式網路，是由兩台使用有線或無線連線方式直接相連的電腦組成，下列敘述哪一項是對等式網路的優點？",
        options: { A: "成本較高", B: "不可延伸", C: "無法集中管理", D: "易於安裝" },
        answer: ["D"],
        type: "radio"
    },
    {
        id: "1-12",
        text: "最簡單的對等式網路，是由兩台使用有線或無線連線方式直接相連的電腦組成，下列敘述哪一項是對等式網路的缺點？",
        options: { A: "易於安裝", B: "複雜性較低", C: "無法集中管理", D: "成本較低" },
        answer: ["C"],
        type: "radio"
    },
    {
        id: "1-13",
        text: "若要在 Windows 電腦中檢視 MAC位址的指令及參數，下列哪一項正確？",
        options: { A: "ipconfig/renew", B: "ipconfig/release", C: "ipconfig/all", D: "ipconfig" },
        answer: ["C"],
        type: "radio"
    },
    {
        id: "1-14",
        text: "會傳送「網際網路控制訊息通訊協定」(ICMP)回應封包給目的地，已確定到目的地所經的路徑，下列指令哪一項正確？",
        options: { A: "Ping", B: "Tracert", C: "telnet", D: "ssh" },
        answer: ["B"],
        type: "radio"
    },
    {
        id: "1-15",
        text: "使用 ping 命令是測試連通性的有效方法，下列哪一項是ping 指令所使用的協定？",
        options: { A: "TCP", B: "UDP", C: "ARP", D: "ICMP" },
        answer: ["D"],
        type: "radio"
    },
    {
        id: "1-16",
        text: "若要進行網路監控和排除網路故障，下列哪一項是最有效的工具？",
        options: { A: "建立網路基線", B: "網路設計", C: "IP 定址方案", D: "標識網路" },
        answer: ["A"],
        type: "radio"
    },
    {
        id: "1-17",
        text: "關於邏輯拓樸圖的內容，下列哪一項錯誤？",
        options: { A: "標識裝置", B: "標識連接埠和IP 定址方案", C: "標識中介裝置", D: "IP 定址方案" },
        answer: ["C"],
        type: "radio"
    },
    {
        id: "1-18",
        text: "關於實體拓樸圖的內容，下列哪一項錯誤？",
        options: { A: "標識中介裝置", B: "連接埠設定", C: "IP 定址方案", D: "纜線安裝的實體位置" },
        answer: ["C"],
        type: "radio"
    },
    {
        id: "1-19",
        text: "關於實體拓樸和邏輯拓樸的敘述，下列哪些正確？(複選)",
        options: { A: "實體拓樸顯示每個網路的IP 定址方案", B: "實體拓樸是電纜、電腦和其他週邊裝置的實體位置", C: "邏輯拓樸始終與實體拓樸相同", D: "邏輯拓樸紀錄資料透過網路的路徑以及網路功能(如路由)發生的位置" },
        answer: ["B", "D"],
        type: "checkbox"
    },
    {
        id: "1-20",
        text: "關於區域網路常用的實體拓樸，下列哪些正確？(複選)",
        options: { A: "網狀", B: "星形", C: "環狀", D: "匯流排" },
        answer: ["B", "C", "D"],
        type: "checkbox"
    },
    {
        id: "1-21",
        text: "下列哪一項是銅纜所傳輸的訊號？",
        options: { A: "光", B: "火", C: "水", D: "電" },
        answer: ["D"],
        type: "radio"
    },
    {
        id: "1-22",
        text: "下列哪一項是光纖所傳輸的訊號？",
        options: { A: "光", B: "火", C: "水", D: "電" },
        answer: ["A"],
        type: "radio"
    },
    {
        id: "1-23",
        text: "光纖相比於銅纜的優勢，下列敘述哪一項正確？",
        options: { A: "熔接和安裝比銅纜更容易", B: "光纖可以在彎管附近安裝", C: "光纖通常比銅纜成本低", D: "光纖比銅纜傳送信號的速度快" },
        answer: ["D"],
        type: "radio"
    },
    {
        id: "1-24",
        text: "若要提供1.3GB/s 的資料速率並且與較舊的裝置向後相容，下列哪一項是可以使用的無線網路標準？",
        options: { A: "IEEE 802a", B: "IEEE 802ac", C: "IEEE 802n", D: "IEEE 802g" },
        answer: ["B"],
        type: "radio"
    },
    {
        id: "1-25",
        text: "關於乙太網路的標準，下列哪一項正確？",
        options: { A: "IEEE 802.3", B: "IEEE 802.11", C: "IEEE 802.15", D: "IEEE 802.16" },
        answer: ["A"],
        type: "radio"
    },
    {
        id: "1-26",
        text: "關於IEEE 10BASE5的定義，下列敘述哪些正確？(複選)",
        options: { A: "10表示傳輸速度為10Mbps", B: "BASE 表示採用基頻信號來進行傳輸", C: "5表示每個網路節點之間最長可達500公尺", D: "5 表示每個網路節點之間最長可達5000公尺" },
        answer: ["A", "B", "C"],
        type: "checkbox"
    },
    {
        id: "1-27",
        text: "關於IEEE 1000BASE-T的定義，下列敘述哪一項錯誤？",
        options: { A: "1000 表示傳輸速度為1000Mbp", B: "BASE 表示採用基頻信號來進行傳輸", C: "T表示每個網路節點之間最長可達500公尺", D: "T 表示每個網路節點之間最長可達100公尺" },
        answer: ["C"],
        type: "radio"
    },
    {
        id: "1-28",
        text: "關於 TIA/EIA-568A的蕊線排列順序，下列哪一項正確？",
        options: { A: "白綠、綠、白橘、藍、白藍、橘、白棕、棕", B: "白橘、橘、白綠、藍、白藍、綠、白棕、棕", C: "白綠、綠、白橘、橘、白藍、藍、白棕、棕", D: "白橘、橘、白綠、綠、白藍、藍、白棕、棕" },
        answer: ["A"],
        type: "radio"
    },
    {
        id: "1-29",
        text: "乙太網路的直通線，通常用於「電腦到交換器」和「交換器到路由器」的互連，下列敘述哪一項是直通線的標準？",
        options: { A: "2端都是568A或568B", B: "1端568A,另一端是1568B", C: "兩端都不是2568A或568B", D: "1端是568A或568B,另1端排列完全對調" },
        answer: ["A"],
        type: "radio"
    },
    {
        id: "1-30",
        text: "下列哪一項仍使用同軸電纜來佈線？",
        options: { A: "無線網路安裝", B: "有線電視服務", C: "交換器到路由器的互連", D: "主機到交換器的互連" },
        answer: ["B"],
        type: "radio"
    },
    {
        id: "1-31",
        text: "下列哪一項不是最常用的網路光纖連接器？",
        options: { A: "ST(Straight-Tip)", B: "SC(Subscriber Connector)", C: "LC(Lucent Connector)", D: "RJ-45" },
        answer: ["D"],
        type: "radio"
    },
    {
        id: "1-32",
        text: "關於單個光纖連接使用兩股光纖敘述，下列哪一項正確？",
        options: { A: "兩股光纖可以使資料傳輸更長距離，並且不會影響性能", B: "它們可以防止串音引起連接干擾", C: "它們允許全雙工連接", D: "它們可以提高資料傳輸速度" },
        answer: ["C"],
        type: "radio"
    },
    {
        id: "1-33",
        text: "網路之間的廣域連接有多種形式，下列哪一項錯誤？",
        options: { A: "RJ-45", B: "EIA/TIA-232", C: "EIA/TIA-449", D: "EIA-530" },
        answer: ["A"],
        type: "radio"
    },
    {
        id: "1-34",
        text: "關於IEEE 802.11g的敘述，下列哪些正確？(複選)",
        options: { A: "工作頻率為2.4GHz", B: "速度理論值為54Mbps", C: "與 IEEE 802.11b 不相容", D: "速度理論值與IEEE 802.11a一樣" },
        answer: ["A", "B", "D"],
        type: "checkbox"
    },
    {
        id: "1-35",
        text: "若要增強 UTP 纜線中的磁場串音抵銷效果，下列敘述哪一項正確？",
        options: { A: "減少用於傳輸資料的電線數", B: "變化和增加每個線對中的絞合數量", C: "增加銅線的厚度", D: "增加包裹所有電線的PVC護套厚度" },
        answer: ["B"],
        type: "radio"
    },
    {
        id: "1-36",
        text: "下列敘述哪一項不應該使用跳接來連接？",
        options: { A: "路由器到路由器乙太網連接埠", B: "電腦到電腦", C: "電腦到交換器", D: "交換器到交換器" },
        answer: ["C"],
        type: "radio"
    },
    {
        id: "1-37",
        text: "下列敘述哪一項是Cat 5e 網路線可以支援的最大網路傳輸速度？",
        options: { A: "10Gbps", B: "1000Mbps", C: "100Gbps", D: "1Tbps" },
        answer: ["B"],
        type: "radio"
    },
    {
        id: "1-38",
        text: "在 UTP 安裝中纜線總長度受線的長度，下列哪一項正確？",
        options: { A: "100公尺", B: "1公里", C: "10公里", D: "100公里" },
        answer: ["A"],
        type: "radio"
    },
    {
        id: "1-39",
        text: "無遮罩式雙絞線，是由幾對帶彩色標記的電線絞合在一起？",
        options: { A: "8對", B: "6對", C: "2對", D: "4對" },
        answer: ["D"],
        type: "radio"
    },
    {
        id: "1-40",
        text: "下列敘述哪一項說明何謂專有協定？",
        options: { A: "可供所有組織或供應商自由使用的協定", B: "由私人組織所開發且能在所有供應商硬體上執行的協定", C: "由控制協定定義和操作的組織所開發的協定", D: "稱為TCP/IP 協定套件的協定集合" },
        answer: ["C"],
        type: "radio"
    },
    {
        id: "1-41",
        text: "關於使用開放標準協定的敘述，下列哪一項正確？",
        options: { A: "執行不同作業系統的用戶端主機和伺服器可以成功交換資料", B: "競爭和創新僅限於具體的產品類型", C: "Internet 存取可以由每個市場中的單個ISP 控制", D: "網路通訊侷限於來自相同供應商的裝置之間的資料傳輸" },
        answer: ["A"],
        type: "radio"
    },
    {
        id: "1-42",
        text: "下列敘述哪一項不是協定必須考慮的要求？",
        options: { A: "標識出發送者和接收者", B: "不通用的語言和語法", C: "傳遞的速度和時間", D: "證實或確認要求" },
        answer: ["B"],
        type: "radio"
    },
    {
        id: "1-43",
        text: "下列哪一項協定，負責控制伺服器和用戶端之間交換 HTTP訊息的大小和速率？",
        options: { A: "TCP", B: "UDP", C: "ICMP", D: "IP" },
        answer: ["A"],
        type: "radio"
    },
    {
        id: "1-44",
        text: "關於 OSI 模型，下列哪一層可以讓封包在不同的網路之間成功地進行傳遞，並規定了網路的定址方式及不同網路間資料的傳遞方式？",
        options: { A: "應用層", B: "傳輸層", C: "資料連結層", D: "網路層" },
        answer: ["D"],
        type: "radio"
    },
    {
        id: "1-45",
        text: "關於 OSI 模型第四層傳輸層的功能說明，下列敘述哪一項正確？",
        options: { A: "規劃或選擇資料封包的最佳傳輸路徑", B: "根據連接的媒體對資料封包套用組成訊框資訊", C: "將訊息切割成區段,並加上編號,以便接收端收到資料後,依編號順序重組", D: "向使用者顯示資料,包括編碼和對話控制" },
        answer: ["C"],
        type: "radio"
    },
    {
        id: "1-46",
        text: "關於 TCP/IP 和OSI 模型的敘述，下列哪一項正確？",
        options: { A: "TCP/IP 模型的網路存取層，與OSI的第三層有類似的服務和功能", B: "TCP/IP 模型的傳輸層，與OSI 模型的第四層有類似的服務和功能", C: "TCP/IP 模型的應用層，只與OSI 模型的第七層有相同的服務和功能", D: "TCP/IP 和OSI模型的層數一模一樣" },
        answer: ["B"],
        type: "radio"
    },
    {
        id: "1-47",
        text: "下列哪一項是OSI 模型的第一層？",
        options: { A: "實體層", B: "資料連結層", C: "網路層", D: "傳輸層" },
        answer: ["A"],
        type: "radio"
    },
    {
        id: "1-48",
        text: "若要描述網路模型的任何層的資料片段，下列哪一項正確？",
        options: { A: "訊框", B: "協定資料單元", C: "封包", D: "位元" },
        answer: ["B"],
        type: "radio"
    },
    {
        id: "1-49",
        text: "當電腦網路卡收到來自網路媒體的位元時，將使用下列哪一種PDU格式？",
        options: { A: "封包", B: "資料段", C: "訊框", D: "位元" },
        answer: ["C"],
        type: "radio"
    },
    {
        id: "1-50",
        text: "邏輯位址會在下列OSI模型中的哪一層進行封裝？",
        options: { A: "實體層", B: "資料連結層", C: "傳輸層", D: "網路層" },
        answer: ["D"],
        type: "radio"
    },
    {
        id: "1-51",
        text: "關於 MAC位址的敘述，下列哪一項正確？",
        options: { A: "MAC位址由作業系統直接指派", B: "MAC位址是OSI 第三層的位址", C: "前三個位元組是用於廠商分配的OUI", D: "MAC位址長度為128個位元" },
        answer: ["C"],
        type: "radio"
    },
    {
        id: "1-52",
        text: "下列哪一項是關於CSMA/CD 存取方法的缺點？",
        options: { A: "具有追蹤媒體存取次序的機制", B: "所有設備都確保可以存取媒體", C: "競爭方法具有確定性", D: "碰撞會降低網路性能" },
        answer: ["D"],
        type: "radio"
    },
    {
        id: "1-53",
        text: "乙太網路使用下列哪一種方法來檢測和處理碰撞，並管理通信的恢復？",
        options: { A: "CSMA/CD", B: "CSMA/CA", C: "CSMA/CAMP", D: "CSMA" },
        answer: ["A"],
        type: "radio"
    },
    {
        id: "1-54",
        text: "負責路由與邏輯定址，是屬於下列OSI 模型中的哪一層？",
        options: { A: "傳輸層", B: "網路層", C: "資料連結層", D: "實體層" },
        answer: ["B"],
        type: "radio"
    },
    {
        id: "1-55",
        text: "IPv4 位址是由多少位元組成？",
        options: { A: "128位元", B: "64位元", C: "32 位元", D: "16位元" },
        answer: ["C"],
        type: "radio"
    },
    {
        id: "1-56",
        text: "子網路遮罩255.255.255.240，下列敘述哪一項正確？",
        options: { A: "/25", B: "/26", C: "/27", D: "/28" },
        answer: ["D"],
        type: "radio"
    },
    {
        id: "1-57",
        text: "分配給網路中終端設備的位址名稱，下列哪一項正確？",
        options: { A: "主機位址", B: "廣播位址", C: "網路位址", D: "連接埠位址" },
        answer: ["A"],
        type: "radio"
    },
    {
        id: "1-58",
        text: "關於實體層標準管理的功能，下列哪一項錯誤？",
        options: { A: "實體元件", B: "路由", C: "編碼", D: "訊號" },
        answer: ["B"],
        type: "radio"
    },
    {
        id: "1-59",
        text: "下列哪一項不是網路中使用銅纜的三種主要類型之一？",
        options: { A: "非遮蔽雙絞線", B: "遮蔽雙絞線", C: "光纖", D: "同軸電纜" },
        answer: ["C"],
        type: "radio"
    },
    {
        id: "1-60",
        text: "下列哪一個是制定反轉線的組織？",
        options: { A: "ISO", B: "IEEE", C: "ITU", D: "Cisco" },
        answer: ["D"],
        type: "radio"
    },
    {
        id: "1-61",
        text: "關於全雙工通訊的工作原理，下列敘述哪一項正確？",
        options: { A: "兩個裝置均可同時透過媒體進行發送和接收", B: "兩個裝置都可以透過媒體進行發送和接收，但不可同時進行", C: "一個裝置只能透過媒體接收，另一個裝置只能透過媒體發送", D: "兩個裝置隨機透過媒體進行發送和接收" },
        answer: ["A"],
        type: "radio"
    },
    {
        id: "1-62",
        text: "可向網路中所有主機發送資料的特殊位址，下列哪一項正確？",
        options: { A: "主機位址", B: "廣播位址", C: "網路位址", D: "連接埠位址" },
        answer: ["B"],
        type: "radio"
    },
    {
        id: "1-63",
        text: "關於廣播位址的定義，下列哪一項正確？",
        options: { A: "網路部分的各位元全部為1的位址", B: "主機部分的各位元全部為0的位址", C: "網路部分的各位元全部為0的位址", D: "主機部分的各位元全部為1的位址" },
        answer: ["D"],
        type: "radio"
    },
    {
        id: "1-64",
        text: "關於 MAC位址中的廣播位址數值，下列哪一項正確？",
        options: { A: "FF:FF:FF:FF:FF:FF", B: "127.0.0.1", C: "Fe80::1", D: "80" },
        answer: ["A"],
        type: "radio"
    },
    {
        id: "1-65",
        text: "主機若要確保資料封包可以轉送到正確的目的網路，下列敘述哪一項正確？",
        options: { A: "主機不須具有自己的本地路由表，只要路由器具有遠端預設路由即可", B: "主機必須具有自己的本地路由表，其中包含迴路介面的路由、本地網路路由和遠端預設路由", C: "主機必須具有自己的迴路介面的路由，但不需具有本地網路路由和遠端預設路由", D: "主機只需設定IP位址即可，不須設定預設閘道" },
        answer: ["B"],
        type: "radio"
    },
    {
        id: "1-66",
        text: "下列敘述哪一項不是在設定靜態IP時，所需要設定的IP參數？",
        options: { A: "IP 位址", B: "子網路遮罩", C: "MAC位址", D: "預設閘道位址" },
        answer: ["C"],
        type: "radio"
    },
    {
        id: "1-67",
        text: "網路層將封包轉送到目的位址的程序名稱，下列哪一項正確？",
        options: { A: "封裝", B: "解封裝", C: "定址", D: "路由" },
        answer: ["D"],
        type: "radio"
    },
    {
        id: "1-68",
        text: "在IP 網路中，可使用下列哪一個位址將封包轉送到目的地？",
        options: { A: "目的IP 位址", B: "目的MAC位", C: "來源 IP 位址", D: "來源 MAC位址" },
        answer: ["A"],
        type: "radio"
    },
    {
        id: "1-69",
        text: "在第二層交換器中，可使用下列哪一個位址將訊框轉送到目的地？",
        options: { A: "目的IP 位址", B: "目的MAC位址", C: "來源 IP 位址", D: "來源 MAC位址" },
        answer: ["B"],
        type: "radio"
    },
    {
        id: "1-70",
        text: "下列敘述哪一項不是LAN的具體功能？",
        options: { A: "LAN 在有線區域內互連終端裝置", B: "LAN 通常由一個組織或個人管理", C: "LAN 通常由多個服務供應商管理", D: "LAN 為內部終端裝置和中介裝置提供高速頻寬" },
        answer: ["C"],
        type: "radio"
    },
    // --- 第二類: 網路定址 ---
    {
        id: "2-01",
        text: "在網際網路裡傳送每個封包中，均會包含下列哪些資訊？(複選)",
        options: { A: "來源 IP 位址", B: "目的主機名稱", C: "目的IP 位址", D: "路由器IP位址" },
        answer: ["A", "C"],
        type: "checkbox"
    },
    {
        id: "2-02",
        text: "一般主機通常需要安裝下列哪一項介面卡，才能連接上網際網路？",
        options: { A: "SCSI 介面卡", B: "RAID 介面卡", C: "VGA 介面卡", D: "NIC 介面卡" },
        answer: ["D"],
        type: "radio"
    },
    {
        id: "2-03",
        text: "IPv4 位址總共有多少個位元組？",
        options: { A: "4", B: "8", C: "12", D: "32" },
        answer: ["A"],
        type: "radio"
    },
    {
        id: "2-04",
        text: "二進制的IPv4位址並不方便人們解讀，因此IPv4 位址採用下列哪一種表示方式？",
        options: { A: "冒號分隔十六進制", B: "冒號分隔十進制", C: "點分隔十六進制", D: "點分隔十進制" },
        answer: ["D"],
        type: "radio"
    },
    {
        id: "2-05",
        text: "IPv4 位址 11000000.10100010.01111110.01000101的點分隔十進制表示法，下列哪一項正確？",
        options: { A: "192.168.126.73", B: "192.164.126.71", C: "192.162.126.69", D: "192.168.126.67" },
        answer: ["C"],
        type: "radio"
    },
    {
        id: "2-06",
        text: "IPv4 位址172.16.223.191，其中223的二進制內容哪一項正確？",
        options: { A: "11110111", B: "11101111", C: "11011111", D: "10111111" },
        answer: ["C"],
        type: "radio"
    },
    {
        id: "2-07",
        text: "IPv4 位址格式為點分隔十進制，下列哪些IP位址是正確有效的位址？(複選)",
        options: { A: "10.123.256.10", B: "192.199.23.5", C: "198.FF.131.224", D: "16.168.16.67" },
        answer: ["B", "D"],
        type: "checkbox"
    },
    {
        id: "2-08",
        text: "IPv4 位址61.111.128.32的32位元二進制內容，下列哪一項正確？",
        options: { A: "00111001.01101101.10000000.00100000", B: "00111001.01101111.10000000.00100000", C: "00111101.01101101.10000000.00100000", D: "00111101.01101111.10000000.00100000" },
        answer: ["D"],
        type: "radio"
    },
    {
        id: "2-09",
        text: "IPv4 位址 10001000.00101010.01111110.01010101 的點分隔十進制表示法，下列哪一項正確？",
        options: { A: "136.42.126.85", B: "138.42.124.85", C: "136.42.124.85", D: "138.42.126.85" },
        answer: ["A"],
        type: "radio"
    },
    {
        id: "2-10",
        text: "32 位元的IPv4位址結構可以分成網路與主機兩個部分，可依下列哪一項資訊判別位元屬於網路部分或主機部分？",
        options: { A: "安裝的作業系統", B: "設定的網路遮罩", C: "網路設備品牌", D: "採用的路由協定" },
        answer: ["B"],
        type: "radio"
    },
    {
        id: "2-11",
        text: "關於IP 位址192.168.10.248與網路遮罩關係，下列敘述哪一項正確？",
        options: { A: "網路遮罩為255.255.255.224時，該IP位址代表網路位址", B: "網路遮罩為255.255.255.240時，該IP位址代表一般主機位址", C: "網路遮罩為255.255.255.248時，該IP位址代表廣播位址", D: "網路遮罩為255.255.255.252時，該IP位址代表一般主機位址" },
        answer: ["B"],
        type: "radio"
    },
    {
        id: "2-12",
        text: "下列哪些可在電腦主機上設定的合法 IPv4位址，並且可以連接上網際網路？(複選)",
        options: { A: "89.134.252.249", B: "223.254.18.19", C: "127.0.1.12", D: "255.155.122.71" },
        answer: ["A", "B"],
        type: "checkbox"
    },
    {
        id: "2-13",
        text: "電腦A的IP位址為192.168.2.101，電腦B的IP位址為192.198.2.224，當電腦A有資料要傳送給電腦B時，下列敘述哪一項正確？",
        options: { A: "電腦A將資料透過網路卡直接傳送給電腦B", B: "電腦 A需先檢查網路線的類型是否為直通電纜(Straigh-Trough)才能傳送", C: "電腦 A需要先透過網路遮罩判別電腦B是否與自己位在相同網段", D: "電腦A需要透過路由器才能將資料傳送給電腦B" },
        answer: ["C"],
        type: "radio"
    },
    {
        id: "2-14",
        text: "電腦A的IP位址為172.16.1.121，電腦B的IP位址為172.16.2.0，兩部電腦採用相同的網路遮罩，則下列敘述哪一項正確？",
        options: { A: "若網路遮罩為255.255.255.0，則兩部電腦位於相同網路網段", B: "若網路遮罩為255.255.254.0，則兩部電腦位於相同網路網段", C: "若網路遮罩為255.255.252.0，則兩部電腦位於相同網路網段", D: "兩部電腦不可能位於相同的網路網段，因為電腦B的位址是錯誤的" },
        answer: ["C"],
        type: "radio"
    },
    {
        id: "2-15",
        text: "下列哪些 IP位址屬於172.16.10.0/23 網段範圍內？(複選)",
        options: { A: "172.16.10.255", B: "172.16.11.128", C: "172.16.12.64", D: "172.16.11.254" },
        answer: ["A", "B", "D"],
        type: "checkbox"
    },
    {
        id: "2-16",
        text: "IP 位址 10.172.193.33 搭配網路遮罩為255.255.254.0，則該IP 位址所屬的網段網路位址，下列哪一項正確？",
        options: { A: "10.172.191.0", B: "10.172.192.0", C: "10.172.193.0", D: "10.172.194.0" },
        answer: ["B"],
        type: "radio"
    },
    {
        id: "2-17",
        text: "IP 位址與網路遮罩間，透過下列哪一項運算可以得到網路位址資訊？",
        options: { A: "NOT", B: "AND", C: "OR", D: "XOR" },
        answer: ["B"],
        type: "radio"
    },
    {
        id: "2-18",
        text: "下列哪一個位址是屬於B級別的有效IP位址？",
        options: { A: "191.128.254.256", B: "127.0.0.1", C: "177.255.21.56", D: "192.1.10.192" },
        answer: ["C"],
        type: "radio"
    },
    {
        id: "2-19",
        text: "IP 位址 191.224.232.15的預設網路遮罩，下列哪一項正確？",
        options: { A: "255.0.0.0", B: "255.255.0.0", C: "255.255.255.0", D: "255.255.255.255" },
        answer: ["B"],
        type: "radio"
    },
    {
        id: "2-20",
        text: "IPv4 及IPv6 位址的最上層分配管理單位為IANA，IANA 底下有五個位址註冊機構 RIR，下列哪一項不屬於RIR 之一？",
        options: { A: "ARIN", B: "LACNIC", C: "RIPE NCC", D: "IETF" },
        answer: ["D"],
        type: "radio"
    },
    {
        id: "2-21",
        text: "IP 位址 224.0.0.10屬於下列有級別位址的哪一類？",
        options: { A: "A", B: "B", C: "C", D: "D" },
        answer: ["D"],
        type: "radio"
    },
    {
        id: "2-22",
        text: "有級別的 IPv4 網路位址中，扣除多點傳送(Multicast)及實驗(Experimental)保留不使用的部分，剩下的總共分為幾個級別？",
        options: { A: "1", B: "2", C: "3", D: "4" },
        answer: ["C"],
        type: "radio"
    },
    {
        id: "2-23",
        text: "B 類的有級別網路位址，其預設網路遮罩下列哪一項正確？",
        options: { A: "255.0.0.0", B: "255.255.0.0", C: "255.255.255.0", D: "255.255.255.255" },
        answer: ["B"],
        type: "radio"
    },
    {
        id: "2-24",
        text: "關於有級別網路位址的敘述，下列哪一項錯誤？",
        options: { A: "A級別的所有IP位址數量最多", B: "B級別的所有IP是C級別的255倍", C: "C 級別的預設網路遮罩為255.255.255.0", D: "D 級別用於多點傳送(Multicast)" },
        answer: ["B"],
        type: "radio"
    },
    {
        id: "2-25",
        text: "下列哪些 IP位址屬於RFC1918所規定的私有IP範圍？(複選)",
        options: { A: "10.192.10.128", B: "172.32.128.192", C: "192.168.100.251", D: "172.19.224.252" },
        answer: ["A", "C", "D"],
        type: "checkbox"
    },
    {
        id: "2-26",
        text: "下列哪一個IPv4位址不屬於RFC1918所規定的私有IP範圍？",
        options: { A: "10.224.232.128", B: "192.168.22.21", C: "172.64.21.10", D: "172.31.192.168" },
        answer: ["C"],
        type: "radio"
    },
    {
        id: "2-27",
        text: "全球共有幾個IPv4及IPv6位址的分配管理單位的位址，註冊機構 RIR(Regional Internet Registry)？",
        options: { A: "4", B: "5", C: "6", D: "8" },
        answer: ["B"],
        type: "radio"
    },
    {
        id: "2-28",
        text: "私有的IPv4位址無法直接在網際網路上繞送，必須先透過下列哪一個技術轉換成公用 IP 位址？",
        options: { A: "RIP", B: "NAT", C: "DHCP", D: "NTP" },
        answer: ["B"],
        type: "radio"
    },
    {
        id: "2-29",
        text: "一般用於主從式(Client-Sever)或同儕式(Peer-to-Peer)主機對主機的傳送型態，下列哪一項正確？",
        options: { A: "Multicast", B: "Broadcast", C: "Anycast", D: "Unicast" },
        answer: ["D"],
        type: "radio"
    },
    {
        id: "2-30",
        text: "下列哪一項IPv4位址，不會出現在封包的來源位址欄位中？",
        options: { A: "10.10.1.1", B: "255.255.255.255", C: "192.168.10.1", D: "0.0.0.0" },
        answer: ["B"],
        type: "radio"
    },
    {
        id: "2-31",
        text: "路由協定 RIP 第二版用於交換路由資料的傳送方式，屬於下列哪一種傳送型態？",
        options: { A: "Unicast", B: "Broadcast", C: "Multicast", D: "Anycast" },
        answer: ["C"],
        type: "radio"
    },
    {
        id: "2-32",
        text: "關於IPv4 位址的敘述，下列哪些正確？(複選)",
        options: { A: "私有IP是免費的，也節省了IP位址資源，適合在區域網路使用", B: "所有IPv4 的位址均可以使用，但是不同主機不能使用相同的IP 位址", C: "標準交換器可以用於隔離廣播，避免廣播流量影響太大範圍", D: "有限廣播(Limited Broadcast)的位址為255.255.255.255" },
        answer: ["A", "D"],
        type: "checkbox"
    },
    {
        id: "2-33",
        text: "關於廣播位址，下列敘述哪一項錯誤？",
        options: { A: "預設遮罩環境下，IPv4位址192.168.100.255為廣播位址", B: "廣播可以區分為直接廣播(Directed)及有限(Limited)廣播兩種", C: "當主機收到廣播封包時，其處理方式與單點傳送(Unicast)封包不同", D: "直接廣播(Directed)是傳給特定網段的所有設備接收" },
        answer: ["C"],
        type: "radio"
    },
	// --- 接續 第二類: 網路定址 (2-34 ~ 2-70) ---
    {
        id: "2-34",
        text: "Windows 主機手動設定IPv4 資料時，至少需要設定下列哪些欄位才能連上網際網路？(複選)",
        options: { A: "預設閘道", B: "IP 位址", C: "網卡MAC位址", D: "子網路遮罩" },
        answer: ["A", "B", "D"], 
        type: "checkbox"
    },
    {
        id: "2-35",
        text: "關於IP 位址設定方式的敘述，下列敘述哪一項錯誤？",
        options: { A: "印表機、伺服器及網路設備適合使用靜態方式指定IP 位址", B: "大型企業適合為所有員工配置靜態方式之IP位址。以避免IP衝突發生", C: "動態配置 IP 位址需要搭配 DHCP 服務", D: "筆記型電腦等行動裝置適合採用動態方式指定IP 位址" },
        answer: ["B"], 
        type: "radio"
    },
    {
        id: "2-36",
        text: "關於預設閘道的敘述，下列哪一項正確？",
        options: { A: "預設閘道是路由器的網路介面，而目的電腦連接在該介面上", B: "由交換器擔任預設閘道服務，不管多少介面只能設定一個IP 位址", C: "當封包需要傳往另一個IP網段時，該封包將交由預設閘道轉送", D: "預設閘道的IP必須與自己位於不同的IP網段，方能傳輸資料" },
        answer: ["C"], 
        type: "radio"
    },
    {
        id: "2-37",
        text: "在一般企業環境中，下列哪一個裝置較不適合採用靜態方式指定IP位址？",
        options: { A: "位於配線間之機架式交換器", B: "僅供內部使用之企業網站", C: "連接 ISP 之對外路由器", D: "網管部門診斷用筆記型電腦" },
        answer: ["D"], 
        type: "radio"
    },
    {
        id: "2-38",
        text: "下列哪一個Windows 命令，可以查看透過DHCP所取得的IP位址及DHCP 伺服器位址等相關資訊？",
        options: { A: "netstat -rn", B: "ipconfig /all", C: "netstat -p ip", D: "msconfig" },
        answer: ["B"], 
        type: "radio"
    },
    {
        id: "2-39",
        text: "當 DHCP 用戶端想透過DHCP伺服器取得IP 位址，用戶端會先發出 DHCPDISCOVER 訊息，該訊息所攜帶的目的地IP位址及目的地 MAC位址 下列何者正確？",
        options: { A: "目的地IP位址為255.255.255.255；目的地 MAC位址為00-00-00-00-00-00", B: "目的地 IP 位址為0.0.0.0；目的地 MAC位址為FF-FF-FF-FF-FF-FF", C: "目的地IP 位址為0.0.0.0；目的地 MAC位址為00-00-00-00-00-00", D: "目的地IP位址為255.255.255.255；目的地 MAC位址為FF-FF-FF-FF-FF-FF" },
        answer: ["D"], 
        type: "radio"
    },
    {
        id: "2-40",
        text: "當某部主機採用自動取得IP位址之設定，這需要透過下列哪一種網路服務達成？",
        options: { A: "DNS", B: "DHCP", C: "HTTP", D: "HTTPS" },
        answer: ["B"], 
        type: "radio"
    },
    {
        id: "2-41",
        text: "一般正常 DHCP 自動取得IP環境中，用戶端需要傳送出幾個DHCP 訊息？",
        options: { A: "1", B: "2", C: "3", D: "4" },
        answer: ["B"], 
        type: "radio" // 註：DHCP交握通常是4個(Discover, Offer, Request, Ack)，但題目答案給B，可能是指Client端發出的(Discover, Request)共2個。
    },
    {
        id: "2-42",
        text: "使用 DHCP服務時，具有下列哪些特性？(複選)",
        options: { A: "IP 位址是租用型態，租用期限到達可以收回，再改配給其他裝置", B: "DHCP 伺服器只能架設在 Windows 或 Linux主機上", C: "IP 位址是動態分配，因此不一定都取到同一個IP 位址", D: "除了可以動態提供IP位址、網路遮罩、預設閘道資訊外，透過設定還可以提供DNS 伺服器或WINS 伺服器位址" },
        answer: ["A", "C", "D"], 
        type: "checkbox"
    },
    {
        id: "2-43",
        text: "路由器介面所設定之 IP 位址為 172.16.1.254.且網路遮罩設定為 255.255.255.224時，則該路由器介面所連接網段的網路位址，下列哪一項正確？",
        options: { A: "172.16.1.0", B: "172.16.1.128", C: "172.16.1.192", D: "172.16.1.224" },
        answer: ["D"], 
        type: "radio"
    },
    {
        id: "2-44",
        text: "下列哪些是有效的IPv6位址？(複選)",
        options: { A: "2001:FF10::FD01", B: "2001:167:A09D:332F:21G4:2290:FD01:C1D1", C: "FE80::1", D: "2001:ACAD:0:5016:1400:F67A:3211" },
        answer: ["A", "C"], 
        type: "checkbox"
    },
    {
        id: "2-45",
        text: "關於內部的私有IP位址與外部的功用IP位址之間的轉換技術，下列哪一項正確？",
        options: { A: "NAN", B: "NTP", C: "NAT", D: "NTT" },
        answer: ["C"], 
        type: "radio"
    },
    {
        id: "2-46",
        text: "IPv6 位址未如預期很快在2003年取代IPv4，除了設備沒辦法全面支援外，還有下列哪一個原因？",
        options: { A: "IPv6 尚無法與IPv4設備互通，使用者普遍不願意更換到IPv6", B: "IP 位址的需求未如預期，十年內尚有足夠的IPv4 位址可供分配", C: "無 DHCP 伺服器協助，得手動設定IPv6位址，使得使用者意願不高", D: "私有IP 位址及NAT技術，減緩IPv4位址的消耗速度" },
        answer: ["D"], 
        type: "radio"
    },
    {
        id: "2-47",
        text: "IP 網段A中的電腦主機，若要能跟另一個IP網段B的電腦主機通訊，需要倚靠下列哪一個網路裝置？",
        options: { A: "路由器(Router)", B: "集線器(HUB)", C: "交換器(Switch)", D: "橋接器(Bridge)" },
        answer: ["A"], 
        type: "radio"
    },
    {
        id: "2-48",
        text: "如圖所示（請參考原題庫圖片），為家用無線路由器或IP分享器的DHCP伺服器設定畫面，設定資料中的「Maximum number of Users:50」，下列敘述哪一項正確？",
        options: { A: "只能累計提供50位用戶端的IP租用服務", B: "該無線路由器或IP分享器最多僅能連接50位使用者", C: "使用者取得IP之後最多可以使用50分鐘", D: "最多提供50個IP 位址的租用服務" },
        answer: ["D"], 
        type: "radio"
    },
    {
        id: "2-49",
        text: "關於家用無線路由器或IP分享器的敘述，下列哪一項正確？",
        options: { A: "無線路由器或IP分享器連接ISP的介面，必須手動靜態設定IP 位址", B: "無線路由器或IP分享器所連接的內部無線網路，與有線網路為不同的IP網段", C: "內部網段可以透過無線路由器或IP分享器的DHCP伺服器功能配置IP 位址", D: "無線網路服務不需要透過 NAT轉換位址，但內部有線網路則需要 NAT 轉換位址" },
        answer: ["C"], 
        type: "radio"
    },
    {
        id: "2-50",
        text: "如附圖所示（請參考原題庫圖片），為家用無線路由器或IP分享器的DHCP伺服器設定畫面，當用戶端透過此DHCP伺服器取得IP位址資訊時，預設閘道的位址設定，下列哪一項正確？",
        options: { A: "192.168.1.1", B: "192.168.1.20", C: "192.168.1.69", D: "192.168.1.100" },
        answer: ["A"], 
        type: "radio"
    },
    {
        id: "2-51",
        text: "設定家用無線路由器或IP分享器的DHCP伺服器服務時，下列敘述哪一項正確？",
        options: { A: "一般的無線路由器或IP分享器只能擔任DHCP伺服器，不能擔任用戶端", B: "DHCP 內部使用的IP範圍均為192.168.1.0/24 網段，無法變更", C: "DHCP 伺服器提供了IP 位址、網路遮罩外，並且提供伺服器自己的IP位址擔任預設閘道工作", D: "DHCP 伺服器之IP租用期限固定為24小時" },
        answer: ["C"], 
        type: "radio"
    },
    {
        id: "2-52",
        text: "當封包由無線路由器或IP分享器傳往網際網路時，NAT會更改該封包的哪一個欄位資料？",
        options: { A: "來源 IP", B: "目的 IP", C: "通訊協定", D: "標頭版本" },
        answer: ["A"], 
        type: "radio"
    },
    {
        id: "2-53",
        text: "如附圖所示（請參考原題庫圖片），在網路連線資料中，若電腦A與電腦B能彼此正常通訊，則設備C為下列哪一種裝置？",
        options: { A: "防火牆(Firewall)", B: "交換器(Switch)", C: "路由器(Router)", D: "集線器(HUB)" },
        answer: ["C"], 
        type: "radio"
    },
    {
        id: "2-54",
        text: "關於預設閘道的敘述，下列哪一項是錯誤？",
        options: { A: "路由器單一介面下所連接的電腦設備，通常使用相同的預設閘道位址", B: "家用無線路由器或IP分享器，亦提供預設閘道服務給所連接的ISP", C: "路由器介面與其所連接的電腦設備介面，通常使用相同的網路遮罩", D: "家用無線路由器或IP分享器可以透過DHCP服務指定用戶端的預設閘道位址" },
        answer: ["B"], 
        type: "radio"
    },
    {
        id: "2-55",
        text: "下列哪一項是IPv6位址表示法？",
        options: { A: "2001.0db8.acad.0001.2302.0000.0000.0001", B: "2001:0db8:acad:0001:2302:0000:0000:0001", C: "2001-0db8-acad-0001-2302-0000-0000-0001", D: "2001,0db8, acad, 0001,2302,0000,0000,0001" },
        answer: ["B"], 
        type: "radio"
    },
    {
        id: "2-56",
        text: "共用單一公用位址的無線路由器或IP分享器，若收到來自網際網路的封包，需要哪一個欄位資訊才能判別該轉換成哪一個內部IP位址？",
        options: { A: "傳輸層 Port 編號", B: "交換器介面 Port 編號", C: "封包傳輸時間", D: "封包 ID 編號" },
        answer: ["A"], 
        type: "radio"
    },
    {
        id: "2-57",
        text: "IPv6 位址表示方式中，用冒號區隔的每一個欄位共有多少位元？",
        options: { A: "8", B: "16", C: "24", D: "32" },
        answer: ["B"], 
        type: "radio"
    },
    {
        id: "2-58",
        text: "關於位址轉換 NAT技術的敘述，下列哪一項正確？",
        options: { A: "NAT 設備內兩部使用私有IP位址的主機，仍須透過NAT轉換才能互通", B: "多少部主機連接在NAT 設備內部，就至少需要準備多少個合法的公用IP 位址，才足夠轉換", C: "NAT 設備內部使用的私有IP位址不能在網際網路上繞送，因此需要透過 NAT 轉換位址", D: "IPv4 位址不需要 NAT技術，只有IPv6才需要" },
        answer: ["C"], 
        type: "radio"
    },
    {
        id: "2-59",
        text: "IPv4及IPv6位址分別有多少個位元組？",
        options: { A: "4及16", B: "4及32", C: "32及64", D: "32及128" },
        answer: ["A"], 
        type: "radio"
    },
    {
        id: "2-60",
        text: "IPv4及IPv6標準，是由下列哪一個單位所制訂的？",
        options: { A: "電機電子工程師學會(IEEE)", B: "網際網路研究專門工作組(IRTF)", C: "網際網路工程任務小組(IETF)", D: "網際網路號碼分配權威機構(IANA)" },
        answer: ["C"], 
        type: "radio"
    },
    {
        id: "2-61",
        text: "有了 IPv6位址，為何人們仍然繼續使用IPv4位址，下列敘述哪一項正確？",
        options: { A: "IPv4 位址多達42億個，離配置用盡還需要非常久的時間", B: "IPv6 位址太長了，轉成點分隔十進制很難記憶與使用", C: "透過 RFC1918私有IP及NAT 技術，IPv4位址消耗獲得減緩", D: "IPv6 目前還只是研發階段，尚未有產品支援 IPv6" },
        answer: ["C"], 
        type: "radio"
    },
    {
        id: "2-62",
        text: "隨著上網設備急速增加，IPv4位址逐漸耗盡，因此IETF 推出了下列哪一個新的IP位址技術？",
        options: { A: "IPv5", B: "IPv6", C: "IPv7", D: "IPv8" },
        answer: ["B"], 
        type: "radio"
    },
    {
        id: "2-63",
        text: "如附圖所示（請參考原題庫圖片），為無線路由器或IP分享器設定，當電腦透過DHCP 取得的IP位址為192.168.0.121 並傳輸封包進入網際網路時，網際網路裡看到的來源 IP 位址，下列哪一個正確？",
        options: { A: "192.168.0.1", B: "192.168.0.121", C: "199.6.13.121", D: "199.6.13.1" },
        answer: ["C"], 
        type: "radio" // 註：圖中 WAN IP 是 199.6.13.121 (依據OCR內容)，選C。
    },
    {
        id: "2-64",
        text: "關於 IPv6 表示法的雙冒號「:」用法，下列敘述哪些正確？(複選)",
        options: { A: "雙冒號只能使用一次", B: "雙冒號用來取代多個連續為0的位址區塊", C: "雙冒號不能出現在位址最前面", D: "雙冒號不能出現在位址最後面" },
        answer: ["A", "B"], 
        type: "checkbox"
    },
    {
        id: "2-65",
        text: "關於IPv4與IPv6位址的敘述，下列哪一項錯誤？",
        options: { A: "IPv4 位址與IPv6位址不能並存，因此目前全球仍繼續使用IPv4 位址", B: "IPv6 位址因為位址足夠，可以免除網路位址轉換 NAT 的需求", C: "利用自動設定IP位址技術，IPv6可以簡化管理工作", D: "IPv6 位址數量達340澗(10的36次方)" },
        answer: ["A"], 
        type: "radio"
    },
    {
        id: "2-66",
        text: "IPv6 具有多種自動取得位址的選項，該採用下列哪一種選項是根據網路設備發出的哪個訊息內容決定？",
        options: { A: "鄰居請求(Neighbor Solicitation)", B: "鄰居通告(Neighbor Advertisement)", C: "路由器請求(Router Solicitation)", D: "路由器通告(Router Advertisement)" },
        answer: ["D"], 
        type: "radio"
    },
    {
        id: "2-67",
        text: "IPv6 位址除了將位元數由IPv4的32位元增加到128位元外，還具有下列哪些特性？(複選)",
        options: { A: "位址表示方法改為冒號區隔十六進位寫法", B: "封包標頭長度增加四倍", C: "更有效率(Efficiency)，並且能夠支援移動性(Mobility)", D: "僅位址位元數增加，標頭內容及欄位不變以便能與IPv4 相容" },
        answer: ["A", "C"], 
        type: "checkbox"
    },
    {
        id: "2-68",
        text: "IPv6 位址表示法中，單一IPv6位址最多會有多少個16進位的字元？",
        options: { A: "16", B: "24", C: "32", D: "64" },
        answer: ["C"], 
        type: "radio"
    },
    {
        id: "2-69",
        text: "IPv6 位址 2001:0DB8:0000:0000:00FF:0000:0000:00D1可以改寫為下列哪一些位址寫法？(複選)",
        options: { A: "2001:DB8::FF:0:0:D1", B: "2001:DB8:FF::D1", C: "2001:DB8::FF::D1", D: "2001:DB8:0:0:FF::D1" },
        answer: ["A", "D"], 
        type: "checkbox"
    },
    {
        id: "2-70",
        text: "IPv6 支援的位址，自動取得機制包含下列哪些？(複選)",
        options: { A: "SLAAC", B: "DHCP6", C: "SLAAC+DHCP6", D: "ICMPv6" },
        answer: ["A", "B", "C"], 
        type: "checkbox"
    },

    // --- 第三類: 網路建置 (3-01 ~ 3-70) ---
    {
        id: "3-01",
        text: "若要向網站請求網頁內容，下列哪一項協定正確？",
        options: { A: "DHCP", B: "HTTP", C: "VoIP", D: "SMIP" },
        answer: ["B"], 
        type: "radio"
    },
    {
        id: "3-02",
        text: "當管理者想登入遠方主機進行命令列操控，如同登入本地主機一般時，會採用下列哪一項服務？",
        options: { A: "SNMP", B: "HTML", C: "SSH", D: "SMTP" },
        answer: ["C"], 
        type: "radio"
    },
    {
        id: "3-03",
        text: "下列哪一項協定的伺服器，可以分發IP位址、遮罩、預設閘道及其他上網參數給客戶端電腦？",
        options: { A: "DHCP", B: "POP", C: "FTP", D: "SMTP" },
        answer: ["A"], 
        type: "radio"
    },
    {
        id: "3-04",
        text: "郵件主機和郵件主機之間傳遞信件時使用的協定，下列哪一項正確？",
        options: { A: "POP", B: "HTTP", C: "SMTP", D: "IMAP" },
        answer: ["C"], 
        type: "radio"
    },
    {
        id: "3-05",
        text: "用於擷取伺服器電子郵件到客戶端主機的協定，下列哪些正確？(複選)",
        options: { A: "SMTP", B: "IMAP", C: "HTML", D: "POP" },
        answer: ["B", "D"], 
        type: "checkbox"
    },
    {
        id: "3-06",
        text: "到線上購物網站，會用到下列哪些網際網路服務？(複選)",
        options: { A: "SSH", B: "HTTP", C: "FTP", D: "DNS" },
        answer: ["B", "D"], 
        type: "checkbox"
    },
    {
        id: "3-07",
        text: "網際網路常見的網路層協定，下列哪一項正確？",
        options: { A: "TCP", B: "UDP", C: "IP", D: "HTTP" },
        answer: ["C"], 
        type: "radio"
    },
    {
        id: "3-08",
        text: "關於 TCP協定的敘述，下列哪些錯誤？(複選)",
        options: { A: "使用回覆封包確認傳達", B: "不再重送丟失的封包", C: "適用於網頁內容之傳輸", D: "適用於語言串流之傳輸" },
        answer: ["B", "D"], 
        type: "checkbox"
    },
    {
        id: "3-09",
        text: "瀏覽器請求網頁的過程，會用到下列哪些協定？(複選)",
        options: { A: "HTTP", B: "TCP", C: "UDP", D: "IP" },
        answer: ["A", "B", "D"], 
        type: "checkbox"
    },
    {
        id: "3-10",
        text: "DNS 查詢主機IP的過程採用UDP 協定的主因，下列哪一項正確？",
        options: { A: "查詢過程封包丟失也沒關係", B: "查詢過程封包可走不同路徑", C: "查詢內容用一個封包就裝得下", D: "查詢內容不需講究可靠傳輸" },
        answer: ["C"], 
        type: "radio"
    },
    {
        id: "3-11",
        text: "關於傳輸層的資料傳輸單位，下列哪一項正確？",
        options: { A: "對話(Session)", B: "分段(Segment)", C: "封包(Packet)", D: "訊框(Frame)" },
        answer: ["B"], 
        type: "radio"
    },
    {
        id: "3-12",
        text: "關於傳輸層公認連接埠(well-known port)的號碼範圍，下列哪一項正確？",
        options: { A: "0~1023", B: "1~1024", C: "1~1023", D: "0~1024" },
        answer: ["A"], 
        type: "radio"
    },
    {
        id: "3-13",
        text: "關於註冊連接埠(Registered Port)的敘述，下列哪些正確？(複選)",
        options: { A: "號碼範圍介於1024~49151", B: "號碼範圍介於1~1023", C: "可當成來源埠使用", D: "使用在一般常見的Service功能，如HTTP、FTP" },
        answer: ["A", "C"], 
        type: "checkbox"
    },
    {
        id: "3-14",
        text: "關於私有連接埠(Private Port)的敘述，下列哪些正確？(複選)",
        options: { A: "號碼範圍介於1024~65535", B: "號碼範圍介於49152~65535", C: "常當成來源埠使用", D: "常當成目的地埠使用" },
        answer: ["B", "C"], 
        type: "checkbox"
    },
    {
        id: "3-15",
        text: "若要查詢網站的IP位址或網域名稱供主機連線之用，下列哪一項服務正確？",
        options: { A: "DHCP", B: "DNS", C: "SSH", D: "SMTP" },
        answer: ["B"], 
        type: "radio"
    },
    {
        id: "3-16",
        text: "下列哪一項是DNS服務的公認連接埠號？",
        options: { A: "21", B: "22", C: "53", D: "110" },
        answer: ["C"], 
        type: "radio"
    },
    {
        id: "3-17",
        text: "關於 DNS服務的敘述，下列哪一項錯誤？",
        options: { A: "DNS 名稱有分階層", B: "常見的高層網域名稱有.com、.edu、.net", C: "DNS 利用網域名稱代替IP住址方便記憶", D: "一個IP只能有一個DNS 名稱" },
        answer: ["D"], 
        type: "radio"
    },
    {
        id: "3-18",
        text: "若要讓用戶不記IP，只需要填寫 www.tqc.org.tw 即可連上電腦技能基金會網站，下列哪一種協定正確？",
        options: { A: "ARP", B: "DNS", C: "HTTP", D: "HTML" },
        answer: ["B"], 
        type: "radio"
    },
    {
        id: "3-19",
        text: "關於 DNS 伺服器如何答覆一般IP詢問的敘述，下列哪一項錯誤？",
        options: { A: "伺服器內部有網域名稱及其IP的對照表供查詢之用", B: "伺服器若內建對照表查詢不到可代向網域其他伺服器查詢", C: "伺服器使用 TCP傳輸層的53號連接埠接受請求", D: "伺服器使用UDP傳輸層的53號連接埠接受請求" },
        answer: ["C"], 
        type: "radio"
    },
    {
        id: "3-20",
        text: "請求網頁會用到的應用層協定，下列哪一項正確？",
        options: { A: "HTTP", B: "HTML", C: "TCP", D: "IP" },
        answer: ["A"], 
        type: "radio"
    },
    {
        id: "3-21",
        text: "安全的HTTP 連線採用的公認連接埠號碼，下列哪一項正確？",
        options: { A: "25", B: "80", C: "110", D: "443" },
        answer: ["D"], 
        type: "radio"
    },
    {
        id: "3-22",
        text: "若瀏覽器同時對一個網站開啟兩個網頁，下列敘述哪一項錯誤？",
        options: { A: "瀏覽器將開啟兩條 HTTP 連線，連向同一個網站", B: "兩條 HTTP 連線的來源IP及目的地IP相同", C: "兩條 HTTP 連線的來源埠相同", D: "兩條 HTTP 連線的目的地埠相同" },
        answer: ["C"], 
        type: "radio"
    },
    {
        id: "3-23",
        text: "關於 HTTP及HTML的敘述，下列哪一項錯誤？",
        options: { A: "瀏覽網頁同時會用到HTTP及HTML", B: "HTTP 為傳輸層協定，負責網頁如何傳送", C: "HTML 為網頁內容標準，負責網頁如何呈現", D: "HTTP 以明文傳送，必須使用HTTPS 才會以密文傳送" },
        answer: ["B"], 
        type: "radio"
    },
    {
        id: "3-24",
        text: "除了 HTTP之外，常用的檔案傳輸協定還有下列哪一項？",
        options: { A: "TCP", B: "FTP", C: "DNS", D: "SSH" },
        answer: ["B"], 
        type: "radio"
    },
    {
        id: "3-25",
        text: "關於FTP的敘述，下列哪一項錯誤？",
        options: { A: "FTP 伺服器利用連接埠21號進行檔案管理及傳輸", B: "FTP 伺服器允許檔案的上傳、下載、刪除、更名操作", C: "FTP 客戶端功能常內建於作業系統及瀏覽器", D: "獨立 FTP 客戶端軟體常用圖形界面方便檔案拖拉操作" },
        answer: ["A"], 
        type: "radio" // 21是控制連線，資料傳輸用20
    },
    {
        id: "3-26",
        text: "下列哪些是FTP伺服器使用公認的連接埠號碼？(複選)",
        options: { A: "20", B: "21", C: "23", D: "25" },
        answer: ["A", "B"], 
        type: "checkbox"
    },
    {
        id: "3-27",
        text: "關於 FTP 連線過程，下列哪一項錯誤？",
        options: { A: "FTP 客戶端和伺服器端之間利用控制連線傳送檔案操錯指令", B: "FTP 客戶端和伺服器端之間利用資料連線傳送檔案內容", C: "控制連線用到伺服主機的21號埠", D: "資料連線用到伺服主機的22號埠" },
        answer: ["D"], 
        type: "radio"
    },
    {
        id: "3-28",
        text: "下列哪一項是TELNET 使用公認的TCP埠號？",
        options: { A: "23", B: "22", C: "21", D: "20" },
        answer: ["A"], 
        type: "radio"
    },
    {
        id: "3-29",
        text: "下列哪一項是SSH連線使用公認的TCP 埠號？",
        options: { A: "22", B: "22", C: "21", D: "20" },
        answer: ["B"], 
        type: "radio"
    },
    {
        id: "3-30",
        text: "支援虛擬終端機連線並允許使用遠方主機命令列介面的協定，下列哪些正確？(複選)",
        options: { A: "HTTP", B: "RDP", C: "SSH", D: "TELNET" },
        answer: ["C", "D"], 
        type: "checkbox"
    },
    {
        id: "3-31",
        text: "下列哪一項不是虛擬終端機(VTY)連線的好處？",
        options: { A: "對遠方主機下命令列指令就像在本地主機一般", B: "若取得授權可以啟動或關閉遠方服務", C: "若取得授權可以修改遠方主機組態，甚至關閉遠方主機", D: "除了使用文字模式也可以使用圖形模式存取遠方主機" },
        answer: ["D"], 
        type: "radio"
    },
    {
        id: "3-32",
        text: "現在 TELNET 逐漸由SSH取代的原因，下列哪些正確？(複選)",
        options: { A: "TELNET 只能傳輸文字，SSH 可以傳輸圖形", B: "TELNET 採用明文傳輸，SSH 採用密文傳輸", C: "SSH的帳密驗證能力強於TELNET", D: "SSH 的傳輸速度優於TELNET" },
        answer: ["B", "C"], 
        type: "checkbox"
    },
    {
        id: "3-33",
        text: "電子郵件寄送採用SMTP 協定，其公認的TCP 連接埠下列哪一項正確？",
        options: { A: "22", B: "25", C: "110", D: "143" },
        answer: ["B"], 
        type: "radio"
    },
    {
        id: "3-34",
        text: "關於POP及IMAP 兩項服務的敘述，下列哪一項錯誤？",
        options: { A: "兩者皆用於擷取伺服器電子郵件到客戶端主機", B: "POP 預設伺服器郵件遭下載後，原郵件就不再保留", C: "IMAP一直保留伺服器郵件，除非用戶想刪除", D: "同一台伺服器不能同時提供POP及IMAP兩種服務" },
        answer: ["D"], 
        type: "radio"
    },
    {
        id: "3-35",
        text: "關於網路電話的敘述，下列哪一項錯誤？",
        options: { A: "使用 VoIP 技術將聲音轉成數位資料放在網路傳輸", B: "網路電話和即時訊息服務一樣接採用同儕對同儕技術", C: "網路電話撥到普通電話須要經由閘道器連到公共交換電話網(PSTH)", D: "所有網路電話軟體接使用同一套協定及目的地埠號互通" },
        answer: ["D"], 
        type: "radio"
    },
    {
        id: "3-36",
        text: "關於 Wi-Fi 無線區網標準 IEEE 802.11用到的電波頻帶，下列哪些正確？(複選)",
        options: { A: "840MHz", B: "930MHz", C: "2.4GHz", D: "5GHz" },
        answer: ["C", "D"], 
        type: "checkbox"
    },
    {
        id: "3-37",
        text: "提供辨識不同無線路由器的參數設定，下列哪一項正確？",
        options: { A: "網路模式", B: "網路名稱(SSID)", C: "標準頻道", D: "SSID 廣播" },
        answer: ["B"], 
        type: "radio"
    },
    {
        id: "3-38",
        text: "為了讓更多的新舊設備可以一起上網，無線路由器的網路模式宜選用下列哪一種模式？",
        options: { A: "802.11b", B: "802.11g", C: "802.11n", D: "混用模式" },
        answer: ["D"], 
        type: "radio"
    },
    {
        id: "3-39",
        text: "關閉 SSID 廣播的效果，下列哪一項錯誤？",
        options: { A: "節省能源", B: "讓裝置較難找到無線網路", C: "能稍微預防未授權裝置連上無線網路", D: "手動輸入 SSID 仍能連上無線網路" },
        answer: ["A"], 
        type: "radio"
    },
    {
        id: "3-40",
        text: "某無線網路路由器的網路模式只選用802.11n 的主因，下列哪一項正確？",
        options: { A: "只使用一種無線標準傳輸速度最快", B: "不讓使用其他無線標準的裝置連上無線網路", C: "可讓最多種裝置連上無線網路", D: "有利於較舊的裝置連上無線網路" },
        answer: ["A"], 
        type: "radio"
    },
    {
        id: "3-41",
        text: "關於網路名稱(SSID)的敘述，下列哪一項錯誤？",
        options: { A: "字串不分大小寫", B: "允許英數字混合", C: "最多32字元", D: "用來區別自己所屬及可互通的無線網路(WLAN)" },
        answer: ["A"], 
        type: "radio"
    },
    {
        id: "3-42",
        text: "無線網路(WLAN)使用的媒介存取技術下列哪一項正確？",
        options: { A: "CSMA/CA", B: "CSMA/CB", C: "CSMA/CD", D: "CSMA/CE" },
        answer: ["A"], 
        type: "radio"
    },
    {
        id: "3-43",
        text: "無線主機(STA)需要使用網路時，會向存取點(AP)發出下列哪一種訊息？",
        options: { A: "RTS", B: "CTS", C: "ACK", D: "REQ" },
        answer: ["A"], 
        type: "radio"
    },
    {
        id: "3-44",
        text: "存取點(AP)同意無線主機(STA)使用網路時，會回覆下列哪一種訊息？",
        options: { A: "RTS", B: "CTS", C: "ACK", D: "READY" },
        answer: ["B"], 
        type: "radio"
    },
    {
        id: "3-45",
        text: "無線主機(STA)結束資料傳送後，會送出下列哪一種訊息表示釋放頻道？",
        options: { A: "RTS", B: "CTS", C: "ACK", D: "FREE" },
        answer: ["C"], 
        type: "radio"
    },
    {
        id: "3-46",
        text: "關於無線網路(WLAN)的CSMA/CA 技術和乙太網路(Ethernet)的 CSMA/CD 技術，下列敘述哪一項錯誤？",
        options: { A: "兩種技術皆適用於媒介共享，傳輸容易產生碰撞的環境", B: "無線網路利用預約頻道機制避免碰撞", C: "乙太網路利用遇到碰撞停止傳輸一段時間的偵測機制減少碰撞", D: "無線網路和乙太網路皆有清楚定義的傳輸邊界範圍" },
        answer: ["D"], 
        type: "radio"
    },
    {
        id: "3-47",
        text: "關於 CSMA/CA 技術的資料傳輸過程，下列哪一項錯誤？",
        options: { A: "無線主機(STA)發出RTS 訊息給存取點(AP)，請其轉發訊息通知所有主機頻道淨空以便傳送資料", B: "存取點確認頻道淨空後發出CTS 訊息給所有主機同意傳送資料", C: "請求主機收到CTS 訊息後開始傳送資料", D: "請求主機傳完資料後發出ACK 訊息給存取點，請其轉發訊息通知所有主機頻道已釋放" },
        answer: ["A"], 
        type: "radio"
    },
    {
        id: "3-48",
        text: "無線路由器連接區域網路主機的接孔，下列哪一項正確？",
        options: { A: "標記 INTERNET的RJ-45 接孔", B: "標記 LAN的RJ-45 接孔", C: "標記 DSL的RJ-11 接孔", D: "標記 CABLE的BNC接孔" },
        answer: ["B"], 
        type: "radio"
    },
    {
        id: "3-49",
        text: "經由數據機(Modem)過來的纜線，要連接到下列無線路由器的哪一個接孔？",
        options: { A: "標記 INTERNET的RJ-45 接孔", B: "標記 LAN 的RJ-45 接孔", C: "標記 DSL的RJ-11 接孔", D: "標記 CABLE 的BNC接孔" },
        answer: ["A"], 
        type: "radio"
    },
    {
        id: "3-50",
        text: "關於無線路由器 MAC過濾功能的敘述，下列哪一項錯誤？",
        options: { A: "提升無線網路安全又具備容易快速設定之彈性，方便所有人上網", B: "只有設定在 MAC 白名單中的無線主機才能順利連線", C: "有新主機想連線，必須由管理者手動加入MAC 白名單中", D: "大部分的無線路由器都有支援 MAC 過濾功能" },
        answer: ["A"], 
        type: "radio"
    },
    {
        id: "3-51",
        text: "關於無線路由器的賓客模式(Guest Mode)，下列敘述哪一項錯誤？",
        options: { A: "不是每一台無線路由器都有支援賓客模式", B: "賓客模式一般採用開放式連線不須密碼驗證", C: "賓客模式允許連線主機和內部區域網路相連", D: "賓客模式允許連線主機和外部網際網路相連" },
        answer: ["C"], 
        type: "radio"
    },
    {
        id: "3-52",
        text: "下列哪一項不是手機常見的無線連線方式？",
        options: { A: "Wi-Fi", B: "WiMax", C: "行動數據", D: "藍牙" },
        answer: ["B"], 
        type: "radio"
    },
    {
        id: "3-53",
        text: "在公共圖書館最省錢又方便的手機上網方式，下列哪一項正確？",
        options: { A: "Wi-Fi", B: "藍牙", C: "行動數據", D: "連接網路插座" },
        answer: ["A"], 
        type: "radio"
    },
    {
        id: "3-54",
        text: "關於行動裝置預先設定好的上網方式，下列敘述哪一項錯誤？",
        options: { A: "如果裝置有開啟Wi-Fi，則自動優先使用Wi-Fi 網路", B: "如果沒有 Wi-Fi 網路，但有設定方案則自動使用行動數據", C: "行動數據從4G自動轉換到3G的過程原有連線會中斷", D: "行動數據有頻寬限制及收費關係只在找不到Wi-Fi 時才使用" },
        answer: ["C"], 
        type: "radio"
    },
    {
        id: "3-55",
        text: "關於無線裝置採用藍牙連線的優點，下列哪一項錯誤？",
        options: { A: "擺脫纜線之糾纏", B: "距離躍近，傳輸速率越快", C: "省電功能可延長電池壽命", D: "可直接對連不需基地台之建置" },
        answer: ["B"], 
        type: "radio"
    },
    {
        id: "3-56",
        text: "藍牙適用下列哪些場合？(複選)",
        options: { A: "車用喇叭麥克風可供撥打或接收電話", B: "上網連線之分享", C: "無線鍵盤、滑鼠", D: "導遊廣播給全團遊客之講解器" },
        answer: ["A", "B", "C"], 
        type: "checkbox"
    },
    {
        id: "3-57",
        text: "關於藍牙配對的敘述，下列哪一項錯誤？",
        options: { A: "任何時間最多八部裝置可以連線在一起", B: "裝置只要一開啟藍牙功能，就可以讓其他裝置找到", C: "掃描周邊藍牙裝置過程，可詢問其名稱及提供之服務等訊息", D: "第一次點選新藍牙裝置時，需要輸入個人識別碼(PIN)才能連線成功" },
        answer: ["B"], 
        type: "radio"
    },
    {
        id: "3-58",
        text: "想租用有專人維護的網站空間放自己公司的網頁，可使用下列ISP的哪一項服務？",
        options: { A: "網頁架站(Web Hosting)", B: "FTP 架站(FTP Hosting)", C: "設備託管(Equipment Colocation)", D: "應用及媒體架站(Applications and Media Hosting)" },
        answer: ["A"], 
        type: "radio"
    },
    {
        id: "3-59",
        text: "想將公司主機放在ISP 機房充分利用其頻寬，可使用下列ISP的哪一項服務？",
        options: { A: "網頁架站(Web Hosting)", B: "FTP 架站(FTP Hosting)", C: "設備託管(Equipment Colocation)", D: "應用及媒體架站(Applications and Media Hosting)" },
        answer: ["C"], 
        type: "radio"
    },
    {
        id: "3-60",
        text: "關於ISP的敘述，下列哪一項錯誤？",
        options: { A: "ISP 讓家用網路連上網際網路", B: "許多 ISP 還提供電子郵件帳號等附加服務給契約用戶", C: "每家 ISP 須連向其他ISP形成一個連結網路供各地用戶互連", D: "ISP 之間採平層(Flat)架構互連，以確保來源到目的地儘量走最短路徑" },
        answer: ["D"], 
        type: "radio"
    },
    {
        id: "3-61",
        text: "關於網際網路骨幹的敘述，下列哪一項錯誤？",
        options: { A: "猶如資訊高速公路提供快速資料傳輸", B: "以平層(Flat)架構連結世界各服務供應商的網路", C: "主要傳輸媒介採用光纖纜線", D: "連結各城市或大陸的光纖纜線常走地底或海底" },
        answer: ["B"], 
        type: "radio"
    },
    {
        id: "3-62",
        text: "下列哪一種ISP沒有獨立自己埋線或架基地台？",
        options: { A: "本地有線電視供應商", B: "有線電話服務供應商", C: "智慧手機的蜂巢網路服務供應商", D: "租用別家公司實體網路頻寬的獨立供應商" },
        answer: ["D"], 
        type: "radio"
    },
    {
        id: "3-63",
        text: "家裡網路欲連上ISP，下列哪一項是安全必須的設備？",
        options: { A: "數據機", B: "路由器", C: "交換器", D: "集線器" },
        answer: ["B"], 
        type: "radio"
    },
    {
        id: "3-64",
        text: "家裡電腦欲想連上ISP，下列哪一項是最基本的設備？",
        options: { A: "數據機", B: "路由器", C: "交換器", D: "集線器" },
        answer: ["A"], 
        type: "radio"
    },
    {
        id: "3-65",
        text: "如家裡同時須要桌機及行動裝置上網，採購下列哪一項單一設備最划算？",
        options: { A: "交換器", B: "無線整合型路由器", C: "無線訊號延伸器", D: "集線器" },
        answer: ["B"], 
        type: "radio"
    },
    {
        id: "3-66",
        text: "如果數據機或路由器提供的有線埠數不夠，則利用下列哪些設備能簡單增加有線埠數？(複選)",
        options: { A: "IP 分享器", B: "路由器", C: "交換器", D: "集線器" },
        answer: ["C", "D"], 
        type: "checkbox"
    },
    {
        id: "3-67",
        text: "關於整合型無線路由器的特徵，下列哪一項錯誤？",
        options: { A: "可同時提供有線及無線裝置連網", B: "有線及無線裝置一般分處兩個不同的網段", C: "可提供 DHCP 功能自動分發IP等上網參數", D: "一般允許內部網路對外連線，但不允許外部網路對內連線" },
        answer: ["B"], 
        type: "radio"
    },
    {
        id: "3-68",
        text: "關於從家裡電腦直接撥接數據機對外上網的敘述，下列哪一項錯誤？",
        options: { A: "直接利用數據機撥接取得的電腦網址為公有IP", B: "直接連數據機容易讓電腦受到外部攻擊", C: "外部網路可直接連線到家裡電腦", D: "遇電腦想當服器供外部網路使用之場合此為最佳作法" },
        answer: ["D"], 
        type: "radio"
    },
    {
        id: "3-69",
        text: "從家裡電腦連上網際網路過程，若寫下訊號沿途經過的設備路徑，則下列哪些不安全？(複選)",
        options: { A: "交換器、路由器、數據機", B: "路由器、數據機", C: "交換器、數據機", D: "數據機" },
        answer: ["C", "D"], 
        type: "checkbox"
    },
    {
        id: "3-70",
        text: "家中主機上網建議透過整合型無線路由器的理由，下列哪一項錯誤？",
        options: { A: "主機取得的是私有IP", B: "主機不會受到外部攻擊", C: "家中伺服器可由內部有線和無線主機一起存取", D: "家中伺服器將因無法提供外部網路使用而獲得保護" },
        answer: ["D"], 
        type: "radio"
    },

    // --- 第四類: 網路安全 (4-01 ~ 4-45) ---
    {
        id: "4-01",
        text: "駭客通常是指擅長某領域程式語言的程式專家，其中一類駭客是以改善為目標，破解某個程式並加以改善、增強該程式的功能或修補該程式的漏洞，這屬於下列哪一類的駭客？",
        options: { A: "灰帽駭客", B: "白帽駭客", C: "藍帽駭客", D: "黑帽駭客" },
        answer: ["B"], 
        type: "radio"
    },
    {
        id: "4-02",
        text: "駭客通常是指擅長某領域程式語言的程式專家，其中一類客是以利慾為目標，透過破解或入侵來獲取不法利益或者發洩負面情緒，這屬於下列哪一類的駭客？",
        options: { A: "灰帽駭客", B: "白帽駭客", C: "藍帽駭客", D: "黑帽駭客" },
        answer: ["D"], 
        type: "radio"
    },
    {
        id: "4-03",
        text: "下列哪一項是電腦蠕蟲傳播的管道或方式？",
        options: { A: "SQL 攻擊(SQL Injection)", B: "跨站腳本(Cross Site Scripting,XSS)", C: "緩衝區溢位(Buffer Overflow)", D: "跨站請求偽造(Cross Site Request Forgery, CSRF)" },
        answer: ["C"], 
        type: "radio"
    },
    {
        id: "4-04",
        text: "惡意程式就感染的途徑與目的可分成不同類別，有一類惡意程式會偽裝成有用的軟體引誘使用者去安装，安裝後通常會在被感染的電腦開一道後門，讓遠端的駭客可以遙控這部電腦，下列哪一項正確？",
        options: { A: "病毒程式(Virus)", B: "木馬程式(Trojan Horse)", C: "蠕蟲軟體(Worms)", D: "恐嚇軟體(Scareware)" },
        answer: ["B"], 
        type: "radio"
    },
    {
        id: "4-05",
        text: "惡意程式就感染的途徑與目的可分成不同類別，有一類惡意程式不需要依附在其他程式就可以自行複製及傳播，主要是鑽作業系統或是特定網路服務程式的漏洞，下列哪一項正確？",
        options: { A: "病毒程式(Virus)", B: "木馬程式(Trojan Horse)", C: "蠕蟲軟體(Worms)", D: "殭屍程式(Bot)" },
        answer: ["C"], 
        type: "radio"
    },
    {
        id: "4-06",
        text: "惡意程式就感染的途徑與目的可分成不同類別，有一類惡意程式是透過執行某個程式或是開啟 word 或Excel等文件來傳播，同時也會感染電腦中的其他執行檔或是前述文件檔，發作後通常會讓電腦運作變慢，下列敘述哪一項正確？",
        options: { A: "病毒程式(Virus)", B: "木馬程式(Trojan Horse)", C: "蠕蟲軟體(Worms)", D: "殭屍程式(Bot)" },
        answer: ["A"], 
        type: "radio"
    },
    {
        id: "4-07",
        text: "惡意程式就感染的途徑與目的可分成不同類別，有一類惡意程式可以中央控管許多電腦，任何時候都能用來散發垃圾郵件、進行網路釣魚攻擊或執行阻斷服務(DoS)攻擊，讓網站無法被連上，下列敘述一項正確？",
        options: { A: "病毒程式(Virus)", B: "木馬程式(Trojan Horse)", C: "蠕蟲軟體(Worms)", D: "殭屍程式(Bot)" },
        answer: ["D"], 
        type: "radio"
    },
    {
        id: "4-08",
        text: "經常自某個寄件人處收到一些電子郵件，內容也實有趣或有用，日漸習慣開啟該類郵件並信賴該郵件的内容，然而有次收到的郵件中有一個連結，點選後被導向惡意網站，致使電腦被植入病毒或是綁架，這種手法下列哪一項正確？",
        options: { A: "跨站請求偽造(Cros Site Request Forgery, CSRF)", B: "社交工程(Social Engineering)", C: "跨站腳本(Cross Site Scripting,XSS)", D: "阻斷服務攻撃(Deny of Service, DoS)" },
        answer: ["B"], 
        type: "radio"
    },
    {
        id: "4-09",
        text: "透過搜尋引擎尋找銀行的網址，並未注意連結的網址，點選進去後進行登入程序，結果第一次登入時系統跳出帳號密碼錯誤訊息，點選「確認」或類似按鈕後，畫面重新導向登入畫面，再次輸入帳號及密碼，這次就能正確登入，但隔幾天銀行帳却被盜用，上述狀況最有可能的原因是下列哪一項？",
        options: { A: "連結到釣魚網站", B: "帳號密碼被側錄", C: "跨網站腳本攻擊", D: "會期(Session)綁架" },
        answer: ["A"], 
        type: "radio"
    },
    {
        id: "4-10",
        text: "當攻擊者透過網路通訊協定的漏洞，鎖定特定目標主機，大量重複傳送封包(Packets)，企圖讓該主機的系統工作超過其負荷，造系統癱瘓，這種攻擊方式是屬於下列哪一種類型？",
        options: { A: "溢位(Overflow)攻擊", B: "中間人(Man In The Middle)攻擊", C: "阻斷服務(Denial Of Services)攻擊", D: "釣魚(Phishing)攻擊" },
        answer: ["C"], 
        type: "radio"
    },
    {
        id: "4-11",
        text: "下列哪一項軟體工具可協助電腦系統管理員，用來隱藏不讓一般使用者看到的檔案，可是也經常被攻擊者利用來取得系統管理員的權限，並對受害的電腦系統植入惡意程式？",
        options: { A: "根目錄工具包(Rootkits)", B: "系統補丁更新(Patch Update)", C: "鍵盤側錄(Keylogger)", D: "封包過濾(Packet Filter)" },
        answer: ["A"], 
        type: "radio"
    },
    {
        id: "4-12",
        text: "在通行密碼(Password)的安全威脅中，若攔截使用者的通行密碼，重新輸入到主機系統，以通過系統驗證，這種攻擊法下列哪一項正確？",
        options: { A: "行騙法(Spoofing)", B: "字典攻擊法(Dictionary Attack)", C: "猜測攻擊法(Guessing Attack)", D: "重送攻擊(Replaying Attack)" },
        answer: ["D"], 
        type: "radio"
    },
    {
        id: "4-13",
        text: "電腦網路探測工具 Traceroute，是利用下列ICMP的哪一類別碼功能來搜尋路徑中的路由器？",
        options: { A: "ICMP Echo Reply", B: "ICMP Echo Request", C: "ICMP Time Exceeded", D: "ICMP Redirection" },
        answer: ["C"], 
        type: "radio"
    },
    {
        id: "4-14",
        text: "下列哪一個軟體不能偵測出病毒之存在？",
        options: { A: "MEM.EXE", B: "CHKDSK.EXE", C: "DEBUG.COM", D: "SCAN.COM" },
        answer: ["B"], 
        type: "radio"
    },
    {
        id: "4-15",
        text: "下列哪一項並不是預防電腦感染病毒的方法？",
        options: { A: "對所有可疑檔案加密", B: "不開啟來路不明的檔案", C: "設定較高的瀏覽器安全等級", D: "安裝防毒軟體，並定時或自動更新病毒碼" },
        answer: ["A"], 
        type: "radio"
    },
    {
        id: "4-16",
        text: "為避免 ARP spoofing 攻擊而造成個人電腦之路由器設定錯誤，最簡易的方法就是利用 netstat 網路工具來查詢電腦所連接的閘道器是否正確，下列哪一個是正確的指令？",
        options: { A: "netstat -st", B: "netstat -r", C: "netstat -u", D: "netstat -p" },
        answer: ["B"], 
        type: "radio"
    },
    {
        id: "4-17",
        text: "下列哪些網路安全工具可以檢測系統的弱點？(複選)",
        options: { A: "nessus", B: "MRTG", C: "SNMP", D: "nmap" },
        answer: ["A", "D"], 
        type: "checkbox"
    },
    {
        id: "4-18",
        text: "下列那一項不屬於防毒軟體之設計方式？",
        options: { A: "抽查式的防毒軟體", B: "掃描式的防毒軟體", C: "檢查碼式的防毒軟體", D: "推測病毒行為模式的防毒軟體" },
        answer: ["A"], 
        type: "radio"
    },
    {
        id: "4-19",
        text: "防毒軟體的功能不包含下列哪一項？",
        options: { A: "即時偵測電腦病毒", B: "掃瞄檔案是否有電腦病毒", C: "掃瞄電腦系統是否有安全漏洞", D: "處理中電腦病毒的檔案" },
        answer: ["C"], 
        type: "radio"
    },
    {
        id: "4-20",
        text: "防毒軟體安裝完成後是否還需要做更新動作，下列敘述哪一項正確？",
        options: { A: "不需要，因為軟體已經可以阻擋所有的病毒", B: "需要，因為防毒軟體等級可能不夠好", C: "需要，因為軟體更新可以新增防毒樣本", D: "需要，因為軟體更新可以讓電腦的執行速度更快" },
        answer: ["C"], 
        type: "radio"
    },
    {
        id: "4-21",
        text: "電腦遭駭客攻擊，最大原因為網路安全防護太脆弱，所以我們應該安裝下列哪一項基本的防護工具？",
        options: { A: "防毒軟體與系統軟體", B: "防火牆與防毒軟體", C: "兩套不同廠牌的防毒軟體", D: "防火牆與系統軟體" },
        answer: ["B"], 
        type: "radio"
    },
    {
        id: "4-22",
        text: "萬一電腦被植入間諜軟體，下列處理方式哪一項正確？",
        options: { A: "只要電腦裡沒有重要資料就沒關係", B: "使用移除工具將間諜軟體移除", C: "修補作業系統", D: "做資料備份" },
        answer: ["B"], 
        type: "radio"
    },
    {
        id: "4-23",
        text: "電腦如果出現下列哪一種現象時，可能是被植入間諜軟體？",
        options: { A: "經常突然跳出來路不明的視窗", B: "鍵盤或滑鼠無法操作", C: "連結不到某些網站", D: "無法連上無線網路" },
        answer: ["A"], 
        type: "radio"
    },
    {
        id: "4-24",
        text: "一旦電腦被植入間諜程式如果想移除它，下列哪一種措施錯誤？",
        options: { A: "上網查詢相關手動移除方式，但移除前先將重要資訊備份", B: "上網下載間諜移除程式，直接安裝後就可以清除", C: "至可靠的網下載經認證過的清除軟體，備份重要資訊後再執行清除動作", D: "洽詢專業廠商處理" },
        answer: ["B"], 
        type: "radio"
    },
    {
        id: "4-25",
        text: "關於防毒軟體的敘述，下列哪一項錯誤？",
        options: { A: "免費的防毒軟體就是沒有付費的軟體好", B: "付費的防毒軟體不一定比免費的軟體差", C: "免費的防毒軟體不一定比付費的軟體差", D: "付費的防毒軟體不一定比免費的軟體好" },
        answer: ["A"], 
        type: "radio"
    },
    {
        id: "4-26",
        text: "若要隱藏內部網路伺服器的IP位址(IP Address)及連接埠(Port)，應採用下列哪一種類型的防火牆技術？",
        options: { A: "屏蔽路由器(Screening Router)", B: "動態封包過濾器(Dynamic Packet Filter)", C: "網路位址轉(Network Address Translation)", D: "應用層閘道(Application Level Gateway)" },
        answer: ["C"], 
        type: "radio"
    },
    {
        id: "4-27",
        text: "傳統的防火牆可達成下列那一項作業？",
        options: { A: "防止病毒/蠕蟲入侵", B: "驗證資料的完整性", C: "封包過濾", D: "阻擋後門程式" },
        answer: ["C"], 
        type: "radio"
    },
    {
        id: "4-28",
        text: "關於防火牆的敘述，下列哪一項錯誤？",
        options: { A: "防火牆可以檢查封包的内容防止病毒通過", B: "防火牆可以檢查封包的埠號(Port)，將不合乎預先設定之條件的封包丟棄", C: "防火牆可以管制封包的來源與流向，將不合乎預先設定之條件的封包丟棄", D: "封包過濾防火牆(Packet-filtering Firewall)的安全性比狀態檢視防火牆 (Stateful Inspection Firewall)低" },
        answer: ["A"], 
        type: "radio"
    },
    {
        id: "4-29",
        text: "關於防火牆的限制，下列哪一項錯誤？",
        options: { A: "無法保護 bypass 的攻擊", B: "可以防止內部攻擊", C: "防火牆管不到不經過他的連線", D: "防火牆無法防範病毒爆發" },
        answer: ["B"], 
        type: "radio"
    },
    {
        id: "4-30",
        text: "關於 DMZ(DeMilitarize Zone)的敘述，下列哪一項錯誤？",
        options: { A: "DMZ 泛指內部網路和外部網路之間的緩衝地帶", B: "只要外部使用者可以直接接觸到的系統，原則上應該架設在DMZ内", C: "對外的服務，如WEB、FTP等皆須建置在DMZ內，避免被入侵時內部網路受到嚴重的威脅", D: "放置在DMZ內的對外服務，若要存取內部網路可以直接進行，沒有安全問題" },
        answer: ["D"], 
        type: "radio"
    },
    {
        id: "4-31",
        text: "架設 DMZ(DeMilitarized Zone)前，必須有下列哪些前置動作？(複選)",
        options: { A: "災難復原與備份", B: "建置在DMZ 内的服務", C: "內部網路與DMZ 的網路架構", D: "設定相關規則政策" },
        answer: ["A", "B", "C", "D"], 
        type: "checkbox"
    },
    {
        id: "4-32",
        text: "如附圖所示（請參考原題庫圖片），為防火牆配置架構，下列哪些是此 DMZ(DeMilitarize Zone)架構的缺點？(複選)",
        options: { A: "如有大量的頻寬需求，外部防火牆必須有處理大量資料的能力", B: "建置成本不高", C: "內部網路與網際網路之間的傳輸會通過 DMZ", D: "內部網路對外需經過二層防火牆" },
        answer: ["A", "C", "D"], 
        type: "checkbox"
    },
    {
        id: "4-33",
        text: "下列哪一項不是網路轉址 NAT服務的優點？",
        options: { A: "由於只使用少數IP對應後端電腦，因此大幅減少實體IP的使用量", B: "外部網路IP可重複在不同環境下使用", C: "只有實體IP才會被外部存取，因此在内部私有IP網段內安全度大為提升", D: "內部網路IP可重複在不同環境下使用" },
        answer: ["B"], 
        type: "radio"
    },
    {
        id: "4-34",
        text: "數位憑證之應用，與下列哪一個資訊安全技術關聯性最直接？",
        options: { A: "AES", B: "Triple DES", C: "Blowfish", D: "RSA" },
        answer: ["D"], 
        type: "radio"
    },
    {
        id: "4-35",
        text: "如附圖所示（請參考原題庫圖片），下列敘述哪些是此 DMZ(DeMilitarized Zone)架構的優點優點？(複選)",
        options: { A: "建置費用極高", B: "DMZ 和內部網路不會佔用彼此頻寬", C: "內部網路、DMZ 及Internet 區隔容易", D: "DMZ 與 LAN 內之電腦可以不受限制互相存取" },
        answer: ["B", "C"], 
        type: "checkbox"
    },
    {
        id: "4-36",
        text: "為了保護資料私密性，目前大部分都不採取單一DES，最主要的原因，下列哪一項正確？",
        options: { A: "密鑰長度太短容易受暴力攻擊", B: "受專利保護應用成本相對偏高", C: "核心技術不夠公開透明有疑慮", D: "核心功能已被破解而不安全" },
        answer: ["A"], 
        type: "radio"
    },
    {
        id: "4-37",
        text: "網站資料庫系統遭受資料隱碼入侵(SQL injection)攻擊，下列哪一項是被攻擊的主要原因？",
        options: { A: "網站管理者採取短於8字元長度的通行密碼", B: "網站管理者並未定期更換通行密碼", C: "網站設計者未對使用者輸入之資料進行完整查驗", D: "網站設計者未對輸出給使用者的資料進行資料安全性查驗" },
        answer: ["C"], 
        type: "radio"
    },
    {
        id: "4-38",
        text: "使用加密演算法對某資料進行加密，是要確保該資料可以滿足下列哪一項安全之需求？",
        options: { A: "鑑別性(Authenticity)", B: "完整性(Integrity)", C: "機密性(Confidentialiy)", D: "不可否認性(Non-Repudiation)" },
        answer: ["C"], 
        type: "radio"
    },
    {
        id: "4-39",
        text: "關於數位簽章(Digital Sinnature)的運作原理與應用特性，下列敘述哪一項錯誤？",
        options: { A: "簽署者使用所持有的私鑰對欲簽署訊息進行簽署", B: "驗證者必須獲得簽署者的公鑰後，才能進行簽章驗證", C: "簽署者可重複使用某一訊息的合法簽章，做為另一不同訊息的合法簽章", D: "簽署者、欲簽署訊息、簽章三者之間存在唯一的繫連關係，可用以達成簽署者對簽署訊息的不可否認性" },
        answer: ["C"], 
        type: "radio"
    },
    {
        id: "4-40",
        text: "為了防止天然災害對儲存資料所造成的毀損或遺失，單位應採取下列哪一項安全措施？",
        options: { A: "人力備援", B: "資料加密", C: "存取控制", D: "資料備份" },
        answer: ["D"], 
        type: "radio"
    },
    {
        id: "4-41",
        text: "企業組織欲導入ISO 27001 資訊安全管理系統，在標準的執行步驟中，下列哪一項是第一個步驟？",
        options: { A: "制訂資訊安全政策", B: "制訂適用性聲明", C: "定義資訊安全管理系統的適用範圍", D: "制訂營運持續計畫" },
        answer: ["C"], 
        type: "radio"
    },
    {
        id: "4-42",
        text: "企業組織欲符合ISO 27001 資訊安全管理系統標準的稽核要求，必須建立完整的四階文件。企業組織內相關資訊安全的管理程序文件是屬於第幾階文件？",
        options: { A: "第一階文件", B: "第二階文件", C: "第三階文件", D: "第四階文件" },
        answer: ["B"], 
        type: "radio"
    },
    {
        id: "4-43",
        text: "在公開金鑰密碼的系統中，如果A希望他所送出之特定文件僅有B可以讀取，其他人都不能讀取，請問A應該對該份文件採用下列哪一項進行加密？",
        options: { A: "A的公開金鑰", B: "A的私密金鑰", C: "B的公開金鑰", D: "B的私密金鑰" },
        answer: ["C"], 
        type: "radio"
    },
    {
        id: "4-44",
        text: "關於資訊中心的安全防護措施，下列哪一項錯誤？",
        options: { A: "重要檔案每天備份三份以上，並分別存放", B: "裝設穩壓電源供應器及不斷電系統", C: "設置煙霧及溫度感測器等設備，以防止災害發生", D: "不同部門，資料也可以相互交流，以便支援合作，順利完成工作" },
        answer: ["D"], 
        type: "radio"
    },
    {
        id: "4-45",
        text: "如果一個僱員必須被停職，他的網路存取權限應該在下列哪一個時間點被終止？",
        options: { A: "停職後一週", B: "停職前一週", C: "通知他停職前", D: "不需關閉" },
        answer: ["C"], 
        type: "radio"
    },

    // --- 第五類: 測試和故障排除 (5-01 ~ 5-55) ---
    {
        id: "5-01",
        text: "下列哪一個IP是被定義為 LoopBack IP Address，可做為 TCP/IP 連線測試使用？",
        options: { A: "0.0.0.0", B: "255.255.255.255", C: "127.0.0.1", D: "192.168.240.200" },
        answer: ["C"], 
        type: "radio"
    },
    {
        id: "5-02",
        text: "關於網路故障排除的方法，下列哪一項錯誤？",
        options: { A: "下而上的檢測", B: "上而下的檢測", C: "任意檢測", D: "分區檢測" },
        answer: ["C"], 
        type: "radio"
    },
    {
        id: "5-03",
        text: "當網路發生故障時，應採取的故障管理(Fault Management)作為，下列哪些正確？(複選)",
        options: { A: "偵測(Detect)", B: "隔離(Isolate)", C: "重設(Reconfigure)", D: "編碼(Coding)" },
        answer: ["A", "B", "C"], 
        type: "checkbox"
    },
    {
        id: "5-04",
        text: "下列哪些是屬於組態管理(Configuration Management)内容，並應該記錄在網管文件資料之中。(複選)",
        options: { A: "元件清單(Inventory)", B: "流量負載(Traffic load)", C: "組態(Configuration)", D: "參數存參(Provision)" },
        answer: ["A", "C", "D"], 
        type: "checkbox"
    },
    {
        id: "5-05",
        text: "面對日趨複雜的網路環境，下列哪一項可協助網管人員有效的管理複雜網路，並有助於尋找問題所在？",
        options: { A: "ARP", B: "ICMP", C: "SNMP", D: "MIB" },
        answer: ["C"], 
        type: "radio"
    },
    {
        id: "5-06",
        text: "簡單網路管理協定(Simple Network Management Protocpl, SNMP)在網路管理中，其功能不包含下列哪一項？",
        options: { A: "故障管理", B: "組態管理", C: "效能管理", D: "帳戶管理" },
        answer: ["D"], 
        type: "radio"
    },
    {
        id: "5-07",
        text: "測試網路封包能否通過IP 協定到達特定主機，可使用列哪一項公用程式？",
        options: { A: "ping", B: "ipconfig", C: "netstat", D: "tracert" },
        answer: ["A"], 
        type: "radio"
    },
    {
        id: "5-08",
        text: "追蹤本機端電腦到目的電腦之間所經過的節點(Node)，可使用下列哪一項公用程式？",
        options: { A: "ping", B: "ipconfig", C: "netstat", D: "tracert" },
        answer: ["D"], 
        type: "radio"
    },
    {
        id: "5-09",
        text: "網路卡燈號(綠燈、橘燈)兩者燈號皆未顯示，下列哪些是可能發生的狀況？(複選)",
        options: { A: "網路卡未正常驅動", B: "網路卡故障", C: "ISP 未能提供服務", D: "DHCP 未能正常發送 IP" },
        answer: ["A", "B"], 
        type: "checkbox"
    },
    {
        id: "5-10",
        text: "若要查看網路介面組態，可使用下列哪一項公用程式？",
        options: { A: "ping", B: "sysconfig", C: "ipconfig", D: "getmac" },
        answer: ["C"], 
        type: "radio"
    },
    {
        id: "5-11",
        text: "下列哪一項是 Widows 系端遠端連線預設連接埠(Port)號？",
        options: { A: "3389", B: "5800", C: "5900", D: "8080" },
        answer: ["A"], 
        type: "radio"
    },
    {
        id: "5-12",
        text: "查詢路由表及新增或移除某個路由路徑，可使用下列哪一項公用程式？",
        options: { A: "arp", B: "nbtstat", C: "pathping", D: "route" },
        answer: ["D"], 
        type: "radio"
    },
    {
        id: "5-13",
        text: "不列哪些為電腦使用上正確的防護作為？(複選)",
        options: { A: "關閉防火牆", B: "即時更新電腦系統", C: "安裝防毒軟體並定期更新", D: "定期進行資料備份" },
        answer: ["B", "C", "D"], 
        type: "checkbox"
    },
    {
        id: "5-14",
        text: "檢測網路服務中DNS可否正進行網域名解析，可使用下列哪一項公用程式？",
        options: { A: "arp", B: "traceroute", C: "nbtstat", D: "nslookup" },
        answer: ["D"], 
        type: "radio"
    },
    {
        id: "5-15",
        text: "下列哪一項狀況會使整個區域網路造成癱瘓？",
        options: { A: "Client 端電腦故障", B: "網路迴圈(Loop)", C: "無線網卡故障", D: "有線網卡故障" },
        answer: ["B"], 
        type: "radio"
    },
    {
        id: "5-16",
        text: "下列哪些是建立VLAN 帶來的好處？(複選)",
        options: { A: "降低網絡設計的自由度", B: "增加安全性", C: "增加管理成本", D: "增加可管理性" },
        answer: ["B", "D"], 
        type: "checkbox"
    },
    {
        id: "5-17",
        text: "下列哪些是引起網路廣播風暴(Broadcast Storm)可能原因？",
        options: { A: "網路設備故障", B: "網路卡故障", C: "ARP 病毒", D: "網路迴圈(Loop)" },
        answer: ["A", "B", "C", "D"], 
        type: "checkbox" // 原題庫答案為 ABCD
    },
    {
        id: "5-18",
        text: "網路守護控管軟體，一般可以控管的範圍包含下列哪些？(複選)",
        options: { A: "阻擋不當網站", B: "阻擋網頁下載", C: "上網時間控管", D: "上網地點控管" },
        answer: ["A", "C"], 
        type: "checkbox"
    },
    {
        id: "5-19",
        text: "主要可負責監聽網路封包，並依據預先設定的安全策略(Security Policy)，當網路發生異常時，可即時通報、有效的紀錄各項異常結果，是指下列哪一項有效作為？",
        options: { A: "入侵防護(Intrusion Prevention System, IPS)", B: "入侵偵測(Intrusion Detection System, IDS)", C: "病毒防護", D: "系統更新" },
        answer: ["B"], 
        type: "radio"
    },
    {
        id: "5-20",
        text: "下列哪些作為是企業網路防護的有效措施？(複選)",
        options: { A: "建置光纖網路(Optical Network)", B: "進行入侵防護(Intrusion Prevention System, IDS)", C: "進行入侵偵測(Intrusion Detection System, IPS)", D: "建立防火牆(Firewall)" },
        answer: ["B", "C", "D"], 
        type: "checkbox"
    },
    {
        id: "5-21",
        text: "下列哪一項設備可用來檢測光纖網路中事件點的位置？",
        options: { A: "光時域反射器(Optical Time-Domain Reflectometer, OTDR)", B: "光源(Light Source)", C: "光功率計(Power Meter)", D: "網路測試器(Cable Tester)" },
        answer: ["A"], 
        type: "radio"
    },
    {
        id: "5-22",
        text: "一般用來偵測光纖纜線常用的波長有下列哪些？(複選)",
        options: { A: "990nm", B: "1,100nm", C: "1,310nm", D: "1,550nm" },
        answer: ["C", "D"], 
        type: "checkbox"
    },
    {
        id: "5-23",
        text: "關於網路頻寬速度問題，應向下列哪一個單位洽詢？",
        options: { A: "PC 製造商", B: "Hub 製造商", C: "Switch 製造商", D: "網際網路服務供應商(ISP)" },
        answer: ["D"], 
        type: "radio"
    },
    {
        id: "5-24",
        text: "使用一般的網路測試器(Cable Tester)進行網路線測試，其功能不包含下列哪一項？",
        options: { A: "導通", B: "斷路", C: "短路", D: "網路速度" },
        answer: ["D"], 
        type: "radio"
    },
    {
        id: "5-25",
        text: "一般的網路測試器(Cable Tester)可測試的接頭形式，不包含下列哪一項？",
        options: { A: "RJ-11 接頭", B: "RJ-12 接頭", C: "RJ-45 接頭", D: "SC 接頭" },
        answer: ["D"], 
        type: "radio"
    },
    {
        id: "5-26",
        text: "若兩台電腦主機須進行網路實體連接，則對接兩台主機網路卡網路線可使用下列哪些 TIA/EIA 標準的接法？(複選)",
        options: { A: "568A/568A", B: "568A/568B", C: "568B/568A", D: "568B/568B" },
        answer: ["B", "C"], 
        type: "checkbox" // 跳線: 一端568A, 一端568B
    },
    {
        id: "5-27",
        text: "下列哪一項屬於實體層的故障問題？",
        options: { A: "纜線短路", B: "廣播風暴", C: "路由器故障", D: "IP 位置錯誤" },
        answer: ["A"], 
        type: "radio"
    },
    {
        id: "5-28",
        text: "SNMP 管理模式主要透過下列哪些基本指令，以達成網路管理目的？(複選)",
        options: { A: "clr", B: "get", C: "set", D: "trap" },
        answer: ["B", "C", "D"], 
        type: "checkbox"
    },
    {
        id: "5-29",
        text: "電腦主機與網路設備進行網路實體連接，則網路線可使用下列哪些 TIA/EIA 標準的接法？(複選)",
        options: { A: "568A/568A", B: "568A/568B", C: "568B/568A", D: "568B/568B" },
        answer: ["A", "D"], 
        type: "checkbox" // 直通線: 兩端相同
    },
    {
        id: "5-30",
        text: "若偵測到網路異常，經判定為Hub故障，係屬於OSI哪一層？",
        options: { A: "應用層", B: "網路層", C: "實體層", D: "資料鏈結層" },
        answer: ["C"], 
        type: "radio"
    },
    {
        id: "5-31",
        text: "關於網路障礙管理(Fault Management)，一般大致區分為列哪些？(複選)",
        options: { A: "故障定位", B: "CPU效能監視", C: "安全問題", D: "警示監視" },
        answer: ["A", "D"], 
        type: "checkbox"
    },
    {
        id: "5-32",
        text: "SNMP 網路管理主要運作方式，下列哪一項錯誤？",
        options: { A: "堆疊(Stack)", B: "輪詢(Polling)", C: "警示(Trap)", D: "設定(Set)" },
        answer: ["A"], 
        type: "radio"
    },
    {
        id: "5-33",
        text: "下列哪一項可在公共網路架構上使用以加密的通道協議(Tunneling Protocol)建立一個私人且安全的網路？",
        options: { A: "NMS(Network Management System)", B: "VPN(Virtual Private Network)", C: "NOS(Network Operating System)", D: "VPC(Virtual Private Cloud)" },
        answer: ["B"], 
        type: "radio"
    },
    {
        id: "5-34",
        text: "關於無線網路的SSID敘述，下列哪一項錯誤？",
        options: { A: "可自由設定名稱", B: "最長可輸入32個字元", C: "無線網路的識別名稱", D: "網路上的SSID 必須為隱藏" },
        answer: ["D"], 
        type: "radio"
    },
    {
        id: "5-35",
        text: "若要建立 WDS (Wireless Distribution System)的條件，下列哪一項錯誤？",
        options: { A: "兩台AP的連線模式需相同", B: "兩台AP 設定相同 SSID", C: "AP-2的DHCP 應設定 Enable", D: "兩台AP須設定為同一網段不同IP" },
        answer: ["C"], 
        type: "radio"
    },
    {
        id: "5-36",
        text: "若 Client 端電腦無法取得動態IP位址，下列哪一項是可能發生題的伺服器？",
        options: { A: "NAT", B: "DHCP", C: "DNS", D: "WEB" },
        answer: ["B"], 
        type: "radio"
    },
    {
        id: "5-37",
        text: "若使用網域名稱無法連上網頁，使用IP位址可以連上網頁，下列哪一項是可能發生問題的伺服器。",
        options: { A: "NAT", B: "DHCP", C: "DNS", D: "WEB" },
        answer: ["C"], 
        type: "radio"
    },
    {
        id: "5-38",
        text: "網路佈線實務中，應採用下列哪一項佈線作為較為適宜？",
        options: { A: "挑選昂貴的網路線材", B: "不必理會標準作業程序", C: "可不依網路拓樸佈線", D: "採用結構化網路佈線" },
        answer: ["D"], 
        type: "radio"
    },
    {
        id: "5-39",
        text: "下列哪些設備故障，可能會造成無線網路斷線無法使用？(複選)",
        options: { A: "無線AP", B: "無線滑鼠", C: "防火牆", D: "無線網卡" },
        answer: ["A", "D"], 
        type: "checkbox"
    },
    {
        id: "5-40",
        text: "光纖網路中，若單芯單模的光纜斷線，可採用的修復作為下列哪些正確？(複選)",
        options: { A: "使用光纖連接器與插座進行連接", B: "更換 RJ-45 接頭", C: "採用熔接方式修復", D: "更換 Cat.6 網路線" },
        answer: ["A", "C"], 
        type: "checkbox"
    },
    {
        id: "5-41",
        text: "兩台電腦都設定相同IP，下列敘述哪一項正確？",
        options: { A: "兩台電腦都可以上網", B: "會造成兩台電腦IP衝突，無法上網", C: "會造成 DHCP 伺服器當機", D: "會形成廣播封包" },
        answer: ["B"], 
        type: "radio"
    },
    {
        id: "5-42",
        text: "區域網路中，動態IP的管理與分配，是下列哪一項服器所能提供的功能？",
        options: { A: "FTP", B: "NAT", C: "DHCP", D: "DNS" },
        answer: ["C"], 
        type: "radio"
    },
    {
        id: "5-43",
        text: "固定 IP 設定時，應設定相關內容包含下列哪些？(複選)",
        options: { A: "動態IP 位址", B: "IP 位址", C: "預設閘道", D: "子網路遮罩" },
        answer: ["B", "C", "D"], 
        type: "checkbox"
    },
    {
        id: "5-44",
        text: "常用的無線網路頻段，包含下列哪些？(複選)",
        options: { A: "2.4GHz", B: "3GHz", C: "4GHz", D: "5GHz" },
        answer: ["A", "D"], 
        type: "checkbox"
    },
    {
        id: "5-45",
        text: "經查 ADSL數據機出現訊號異常，可行的解決方法為下列哪些？(複選)",
        options: { A: "將電腦重新開機", B: "將數據機重置", C: "向 ISP 網路客服中心查詢", D: "將集線器電源關閉重新啟動" },
        answer: ["B", "C"], 
        type: "checkbox"
    },
    {
        id: "5-46",
        text: "當網路發生異常封包或是相關行為時，可即時通報網管人員，並採取相對處置措施，是指下列哪一項作為？",
        options: { A: "入侵防護(Intrusion Prevention System, IPS)", B: "入侵偵測(Intrusion Detection System, IDS)", C: "病毒防護", D: "系統更新" },
        answer: ["A"], 
        type: "radio"
    },
    {
        id: "5-47",
        text: "由主機名稱查詢IP的過程，一般稱之為下列哪一項？",
        options: { A: "正解(Forward)", B: "反解(Reverse)", C: "解析(Resolve)", D: "分析(Analysis)" },
        answer: ["A"], 
        type: "radio"
    },
    {
        id: "5-48",
        text: "常見的無線網路安全機制，包含下列哪些項目？(複選)",
        options: { A: "WEP", B: "WPA", C: "WPA2", D: "SSID" },
        answer: ["A", "B", "C"], 
        type: "checkbox"
    },
    {
        id: "5-49",
        text: "若要防止電腦受到不明網路攻擊或中毒，可行的有效方法不包含下列哪一項？",
        options: { A: "任意下載不明檔案", B: "安裝防火牆並即時更新", C: "作業系統啟動即時更新", D: "保持良好的電腦使用習慣" },
        answer: ["A"], 
        type: "radio"
    },
    {
        id: "5-50",
        text: "對於公司員工離職，網管人員應採取的作為下列哪一項正確？",
        options: { A: "正式離職前即可隨即停用其相關使用權限", B: "運用公司網路私架FTP以供資訊交流使用", C: "離職後依然開放公司網路相關權限供其使用", D: "依公司標準程序停用其網路相關使用權限" },
        answer: ["D"], 
        type: "radio"
    },
    {
        id: "5-51",
        text: "加入專業的網路專業技術社群，有下列哪些好處？(複選)",
        options: { A: "吸取經驗", B: "獲取新知", C: "促進專業成長", D: "結交專業同好" },
        answer: ["A", "B", "C", "D"], 
        type: "checkbox"
    },
    {
        id: "5-52",
        text: "在網路的故障排除中，若有關於設備問題，可洽詢的最直接外部資源協助為下列哪一個單位？",
        options: { A: "網路社群", B: "網路搜尋", C: "產品技術支援中心", D: "軟體廠商" },
        answer: ["C"], 
        type: "radio"
    },
    {
        id: "5-53",
        text: "在網路的故障排除中，下列哪些是可能尋求的外部資源？(複選)",
        options: { A: "先前維護文件", B: "會計部門", C: "系統建置廠商", D: "相關網路專家" },
        answer: ["A", "C", "D"], 
        type: "checkbox"
    },
    {
        id: "5-54",
        text: "關於網路機房管理，下列哪些是應有的積極作為？(複選)",
        options: { A: "管制人員進出", B: "建置不斷電 UPS 系統", C: "建立標準作業程序", D: "機房無須消防設施" },
        answer: ["A", "B", "C"], 
        type: "checkbox"
    },
    {
        id: "5-55",
        text: "關於有線網路與無線網路之敘述，下列哪一項正確？",
        options: { A: "有線網路無須考量佈線問題", B: "有線網路無法使用光纖纜線", C: "無線網路須考量無線射頻技術問題", D: "無線網路比有線網路安全性較高" },
        answer: ["C"], 
        type: "radio"
    }
];