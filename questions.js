const questions = [
    {
        "id": "1-01",
        "text": "在OSI模型中，下列哪一層負責檢查傳送的資料是否正確？",
        "options": {
            "A": "傳輸層（Transport Layer）",
            "B": "網路層（Network Layer）",
            "C": "資料鏈結層（Data Link Layer）",
            "D": "實體層（Physical Layer）"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "1-02",
        "text": "在 OSI模型中，下列哪一層負責建立及拆解封包？",
        "options": {
            "A": "應用層（Application Layer）",
            "B": "展示層（Presentation Layer）",
            "C": "傳輸層（Transport Layer）",
            "D": "網路層（Network Layer）"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "1-03",
        "text": "下列哪一種網路實體拓樸（Physical Topology）會需要用到終端電阻來吸收回音現象？",
        "options": {
            "A": "環狀拓樸（Ring Topology）",
            "B": "星狀拓樸（Star Topology）",
            "C": "匯流排拓樸（Bus Topology）",
            "D": "網狀拓樸（Mesh Topology）"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "1-04",
        "text": "下列哪一種網路會發生資料碰撞？",
        "options": {
            "A": "Token Ring",
            "B": "Ethernet",
            "C": "FDDI",
            "D": "ATM"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "1-05",
        "text": "關於TCP/IP通訊協定的敘述，下列哪些正確？（複選）",
        "options": {
            "A": "是一種跨平台的通訊協定，不論是Windows、Unix、BSD、Linux、   Mac OS、Novell皆有支援",
            "B": "Internet以TCP/IP協定為基礎而可以連接全世界的電腦",
            "C": "同一個IP位址，可分給不同電腦使用",
            "D": "除Internet使用亦可適用於LAN"
        },
        "answer": [
            "A",
            "B",
            "D"
        ],
        "type": "checkbox"
    },
    {
        "id": "1-06",
        "text": "下列哪一個IP是屬於B Class範圍的IP？",
        "options": {
            "A": "202.43.195.52",
            "B": "61.64.127.7",
            "C": "168.95.192.1",
            "D": "244.17.200.12"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "1-07",
        "text": "一部電腦的IP為168.95.0.100、遮罩為255.255.255.0，請問該電腦區段的廣播位址IP為下列哪一項？",
        "options": {
            "A": "168.95.0.100",
            "B": "168.95.0.255",
            "C": "168.95.0.0",
            "D": "該區段沒有廣播位址"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "1-08",
        "text": "下列哪一項屬於TCP/IP中的連線型（Connection）協定？",
        "options": {
            "A": "ARP",
            "B": "UDP",
            "C": "TCP",
            "D": "ICMP"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "1-09",
        "text": "下列哪一項協定是TCP/IP中用來將IP位址解析成MAC位址？",
        "options": {
            "A": "ARP",
            "B": "UDP",
            "C": "TCP",
            "D": "ICMP"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "1-10",
        "text": "一部電腦的IP為61.62.0.71、遮罩為255.255.255.128，請問該電腦區段的Network IP為下列哪一項？",
        "options": {
            "A": "61.62.0.0",
            "B": "61.62.1.0",
            "C": "61.62.0.255",
            "D": "61.62.0.128"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "1-11",
        "text": "下列哪些指令可以正確啟動網卡介面？（複選）",
        "options": {
            "A": "/etc/rc.d/init.d/network start",
            "B": "network start",
            "C": "service network start",
            "D": "ifup p3p1"
        },
        "answer": [
            "A",
            "C",
            "D"
        ],
        "type": "checkbox"
    },
    {
        "id": "1-12",
        "text": "下列哪一項可以設定欲提供解析服務之DNS主機？",
        "options": {
            "A": "cat/etc/hosts",
            "B": "cat/etc/sysconfig/network",
            "C": "cat/etc/resolv.conf",
            "D": "cat/etc/sysconfig/network-scripts/ifcfg- p3p1"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "1-13",
        "text": "下列哪一項是屬於封閉迴路，自我測試使用的IP位址？",
        "options": {
            "A": "10.0.0.1",
            "B": "172.16.0.1",
            "C": "127.0.0.1",
            "D": "192.168.0.1"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "1-14",
        "text": "下列哪一項最適合用來描述星狀拓樸（Star Topology）？",
        "options": {
            "A": "LAN拓樸是資料從網路工作站透過單一的同軸電纜送出，並由所有其他工作站接收",
            "B": "使用一個主幹節點成分枝狀連接到其他節點的LAN拓樸",
            "C": "以線性鏈結的方式將網路中央節點連接到一個共用中央交換器的LAN拓樸",
            "D": "中央節點以纜線呈放射狀連接到其他節點的LAN拓樸"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "1-15",
        "text": "下列哪一項事機構單一識別子（Organizational Unique Identifier, OUI）？",
        "options": {
            "A": "MAC位址中所有的十六進位數字",
            "B": "MAC位址中的前六個十六進位數字",
            "C": "MAC位址中的最後六個十六進位數字",
            "D": "所有網路設備型號的字首"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "1-16",
        "text": "下列哪些是有關於網路的設定檔或目錄？（複選）",
        "options": {
            "A": "/etc/network",
            "B": "/etc/sysconfig/network",
            "C": "/etc/network-scripts/ifcfg-p3p1",
            "D": "/etc/sysconfig/network-scripts"
        },
        "answer": [
            "B",
            "D"
        ],
        "type": "checkbox"
    },
    {
        "id": "1-17",
        "text": "下列哪些指令可以用來測試網路狀況？（複選）",
        "options": {
            "A": "ping",
            "B": "host",
            "C": "traceroute",
            "D": "nslookup"
        },
        "answer": [
            "A",
            "C"
        ],
        "type": "checkbox"
    },
    {
        "id": "1-18",
        "text": "下列哪一項指令可以啟動網路卡功能？",
        "options": {
            "A": "ifconfig p3p1 enable",
            "B": "ifconfig p3p1",
            "C": "ifconfig p3p1 netmask 255.255.255.0",
            "D": "ifconfig p3p1 up"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "1-19",
        "text": "在OSI模型中，下列哪一層的主要任務是由調節由來源到目的地的資訊流，並且可靠、精確地執行？",
        "options": {
            "A": "展示層（Presentation Layer）",
            "B": "會談層（Session Layer）",
            "C": "傳輸層（Transport Layer）",
            "D": "網路層（Network Layer）"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "1-20",
        "text": "下列哪一項是開發TCP/IP通訊協定的主要目的？",
        "options": {
            "A": "確定能校正每一個錯誤的封包",
            "B": "讓合作的電腦能透過網路分享資源",
            "C": "分配區域網路內的資源",
            "D": "決定封包傳送時的最佳路徑"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "1-21",
        "text": "下列哪一項不屬於OSI模型中的層級？",
        "options": {
            "A": "應用層（Application Layer）",
            "B": "傳輸層（Transport Layer）",
            "C": "會談層（Session Layer）",
            "D": "網際網路層（Internet Layer）"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "1-22",
        "text": "請問MAC是屬於下列OSI模型中的哪一層？",
        "options": {
            "A": "實體層（Physical Layer）",
            "B": "資料鏈結層（Data Link Layer）",
            "C": "網路層（Network Layer）",
            "D": "傳輸層（Transport Layer）"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "1-23",
        "text": "關於MAC位址的敘述，下列哪一項正確？",
        "options": {
            "A": "四組八個二進位的數字組成，組與組之間用一個小數點分開",
            "B": "四個十進位的數字組成，數字之間用一個小數點分開",
            "C": "六個十六進位的數字組成",
            "D": "十二個十六進位的數字組成"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "1-24",
        "text": "下列哪一項為一個有效的私人Class C IP 位址範圍？",
        "options": {
            "A": "192.168.0.0 through 192.168.255.2255",
            "B": "10.0.0.0 through 10.255.255.255",
            "C": "192.168.0.0 through 192.168.0.255",
            "D": "10.1.0.0 through 10.1.255.255"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "1-25",
        "text": "下列哪一項指令可用來測試網路內部的節點？",
        "options": {
            "A": "ping 10.10.10.1",
            "B": "ping 192.168.1.1",
            "C": "ping 127.0.0.1",
            "D": "ping 255.255.255.255"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "1-26",
        "text": "下列哪一項為ICMP協定的功能？",
        "options": {
            "A": "它提供控制和傳送訊息的能力",
            "B": "它提供位址解析的服務",
            "C": "它支援e-mail的功能",
            "D": "它提供遠端登入的功能"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "1-27",
        "text": "下列哪一項提供將IP位址轉成MAC位址的能力？",
        "options": {
            "A": "ARP",
            "B": "forward DNS",
            "C": "RARP",
            "D": "reverse DNS"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "1-28",
        "text": "下列哪一項為乙太網路所使用的 MAC Method？",
        "options": {
            "A": "CSMA/CD",
            "B": "SLIP",
            "C": "PPP",
            "D": "10BaseT"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "1-29",
        "text": "關於PPP協定的敘述，下列哪些正確？（複選）",
        "options": {
            "A": "是一種為了讓封包能透過序列埠傳送的一種協定",
            "B": "PPP沒有雙方建立協商機制",
            "C": "PPP在傳送資料前可以驗證身分資料",
            "D": "PPP只支援TCP/IP協定"
        },
        "answer": [
            "A",
            "C"
        ],
        "type": "checkbox"
    },
    {
        "id": "1-30",
        "text": "關於乙太網路卡MAC位址的敘述，下列哪些正確？（複選）",
        "options": {
            "A": "共6個bytes",
            "B": "前3個bytes為流水編號，後3個bytes為廠商編號",
            "C": "每一網卡的MAC位址都是唯一的",
            "D": "網路卡製造廠必須向IEEE註冊取得專屬的MAC編號段"
        },
        "answer": [
            "A",
            "C",
            "D"
        ],
        "type": "checkbox"
    },
    {
        "id": "1-31",
        "text": "系統中只有一張網路卡，如果要變更Default Gateway的設定，應該要變更下列哪一項檔案的內容？",
        "options": {
            "A": "/etc/network/default-route",
            "B": "/etc/default-route",
            "C": "/etc/network-scripts/route",
            "D": "/etc/sysconfig/network-scripts/ifcfg- p3p1"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "1-32",
        "text": "無線網卡已安裝於系統中且可以被掛載使用，如果查詢及設定該無線網卡，最佳的設定指令為下列哪一項？",
        "options": {
            "A": "ifup-wireless",
            "B": "iwconfig",
            "C": "iwlist",
            "D": "iflist"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "1-33",
        "text": "下列哪一項服務不是使用UDP協定在傳輸資料？",
        "options": {
            "A": "RIP",
            "B": "TFTP",
            "C": "SMTP",
            "D": "SNMP"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "1-34",
        "text": "IPV4的使用是將32位元的IP位址以Class A-E五個等級來劃分，請問下列哪一個等級是屬於實驗用途專用？",
        "options": {
            "A": "Class D",
            "B": "Class E",
            "C": "Class C",
            "D": "Class A"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "1-35",
        "text": "TTL是IP封包中的一個值，主要是用於檢查該封包在網路存在的時間是否過久而被丟棄，若要改變其預設值，應將指令net.ipv4.ip_default_ttl = <0-255>寫入下列哪一個檔案？",
        "options": {
            "A": "/etc/sysconfig/network-scripts/ifcfg- p3p1",
            "B": "/etc/sysconfig/network",
            "C": "/etc/sysctl.conf",
            "D": "/etc/sys.conf"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "1-36",
        "text": "在網路範圍192.168.1.128/26之中，共有多少個IP？",
        "options": {
            "A": "256",
            "B": "128",
            "C": "64",
            "D": "32"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "1-37",
        "text": "使用下列哪一項指令，可將網路介面卡（例如網路卡）啟用？",
        "options": {
            "A": "ifconfig <device> connect",
            "B": "ifconfig <device> init",
            "C": "ifstart <device>",
            "D": "ifup <device>"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "1-38",
        "text": "請問網路範圍10.1.5.34/29是落於下列哪一個網路區段？",
        "options": {
            "A": "10.1.5.32",
            "B": "10.1.5.0",
            "C": "10.1.5.16",
            "D": "10.5.1.8"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "1-39",
        "text": "TCP three-way shake中，各封包中所舉的旗標依序各為下列哪一項？",
        "options": {
            "A": "SYN > RCV/ACK > ACK",
            "B": "SYN > SYN/ACK > SYN/ACK",
            "C": "SYN > SYN/ACK > ACK",
            "D": "SYN > RCV/ACK > SYN/ACK"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "1-40",
        "text": "請問下列哪些為 Private IP Address？（複選）",
        "options": {
            "A": "192.168.255.33",
            "B": "172.23.10.240",
            "C": "10.255.1.132",
            "D": "172.32.233.12"
        },
        "answer": [
            "A",
            "B",
            "C"
        ],
        "type": "checkbox"
    },
    {
        "id": "2-01",
        "text": "下列哪一項是SSH替代Telnet的最主要原因？",
        "options": {
            "A": "在Telnet上傳輸資訊時所有資料都是明文，未經編碼",
            "B": "在Telnet上使用者的認證要花上不少時間",
            "C": "SSH使用了比複數的連結，因此通訊速度更快",
            "D": "SSH比較不會對伺服器造成負擔"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "2-02",
        "text": "下列哪些指令可以列出路由表？（複選）",
        "options": {
            "A": "route",
            "B": "netstat -n",
            "C": "netstat",
            "D": "netstat -r"
        },
        "answer": [
            "A",
            "D"
        ],
        "type": "checkbox"
    },
    {
        "id": "2-03",
        "text": "下列哪一項指令可將路由快取清除？",
        "options": {
            "A": "route --clean",
            "B": "route --flush",
            "C": "route -no-cache",
            "D": "ip route flush cache"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "2-04",
        "text": "下列哪一項服務可以提供網路參數給用戶端電腦，使其自動設定網路的功能？",
        "options": {
            "A": "DNS",
            "B": "SSH",
            "C": "DHCP",
            "D": "RCH"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "2-05",
        "text": "假設在某一網路內部有相當多的路由器，應該使用下列哪一種方法來增進路由效率並減少對網路的維護？",
        "options": {
            "A": "於每一個路由器上設置靜態路由並定期檢查路由是否有誤",
            "B": "運用動態路由協定OSPF於路由器",
            "C": "用星狀的拓樸使路由路徑最短",
            "D": "用匯流排方式的拓樸使路由路徑最短"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "2-06",
        "text": "在/etc/sysctl.conf檔案中，新增下列哪一項內容並設定為1，在重新啟動時亦可以啟動系統中的路由功能？",
        "options": {
            "A": "net.ipv4.conf.default.rp_filter = 1",
            "B": "net.ipv4.ip_forward = 1",
            "C": "kernel.sysrq = 1",
            "D": "kernel.core_uses_pid = 1"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "2-07",
        "text": "用Linux登入另一台Linux SSH Server，請問下列哪些項目可以在登入SSH Server時即切換lisa User身分？（複選）",
        "options": {
            "A": "ssh -l lisa 192.168.10.5（註：-l為小寫L）",
            "B": "ssh lisa@192.168.10.5",
            "C": "ssh -u lisa 192.168.10.5",
            "D": "ssh -p lisa 192.168.10.5"
        },
        "answer": [
            "A",
            "B"
        ],
        "type": "checkbox"
    },
    {
        "id": "2-08",
        "text": "請問TCP/IP 22埠為下列哪一項Daemom所使用？",
        "options": {
            "A": "Telnet Server",
            "B": "FTP Server",
            "C": "SSH Server",
            "D": "SMTP Server"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "2-09",
        "text": "請問Telnet啟動後會開啟下列哪一項埠號？",
        "options": {
            "A": "20",
            "B": "21",
            "C": "22",
            "D": "23"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "2-10",
        "text": "下列哪一項檔案室用來設定一台電腦的網路處理程序埠？",
        "options": {
            "A": "/etc/services",
            "B": "/etc/xinetd.conf",
            "C": "/etc/hosts",
            "D": "/etc/hosts.allow"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "2-11",
        "text": "下列哪些是關於網路卡的設定檔或目錄？（複選）",
        "options": {
            "A": "/etc/hosts",
            "B": "/etc/sysconfig/network",
            "C": "/etc/network-scripts/ifcfg- p7p1",
            "D": "/etc/sysconfig/network-scripts"
        },
        "answer": [
            "B",
            "D"
        ],
        "type": "checkbox"
    },
    {
        "id": "2-12",
        "text": "關於Telnet伺服器的敘述，下列哪些錯誤？（複選）",
        "options": {
            "A": "預設限制root不能登入系統",
            "B": "在預設的狀況下，只要開啟Telnet服務，所有使用者都能登入系統",
            "C": "在/etc/nologin檔案中可設定不可登入的使用者清單",
            "D": "若在設定/etc/nologin時已有使用者登入系統會立刻被強迫登出"
        },
        "answer": [
            "B",
            "C",
            "D"
        ],
        "type": "checkbox"
    },
    {
        "id": "2-13",
        "text": "執行route指令查看路由表時，Default Gateway的Flags為UG，請問代表下列哪一項意思？",
        "options": {
            "A": "停止該筆m紀錄預設路由的功能",
            "B": "使用動態路由，恢復路由資訊的旗標",
            "C": "這個路由將不會被接受",
            "D": "標示路由已啟動且需要透過Gateway轉遞封包"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "2-14",
        "text": "加入一路由於系統中，下列哪一個指令正確？",
        "options": {
            "A": "route add -net 192.168.10.1 netmask 255.255.255.0 eth0",
            "B": "route add -host 192.168.1.245 dev eth0",
            "C": "route add default gw eth0 172.23.0.254",
            "D": "routeadd gw 172.23.0.254"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "2-15",
        "text": "欲顯示主機目前的路由表，可執行下列哪一個指令？",
        "options": {
            "A": "tracert",
            "B": "traceroute",
            "C": "route -n",
            "D": "netstat -rn"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "2-16",
        "text": "要檢查自己的機器和遠端機器之間的路徑，可使用下列哪一項指令？",
        "options": {
            "A": "/usr/sbin/tracert",
            "B": "/usr/bin/tracertoute",
            "C": "/bin/ping",
            "D": "/sbin/route"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "2-17",
        "text": "下列哪些指令可在路由表上設定預設路徑？（複選）",
        "options": {
            "A": "route default Gateway_IP",
            "B": "route default gw Gateway_IP",
            "C": "route add default gw Gateway_IP",
            "D": "route add -net default gw Gateway_IP"
        },
        "answer": [
            "C",
            "D"
        ],
        "type": "checkbox"
    },
    {
        "id": "2-18",
        "text": "下列哪些是路由表上提供的資訊？（複選）",
        "options": {
            "A": "Source IP Address",
            "B": "Destination IP Address",
            "C": "Inbound Interface",
            "D": "Outbound Interface"
        },
        "answer": [
            "B",
            "D"
        ],
        "type": "checkbox"
    },
    {
        "id": "2-19",
        "text": "核心的IP路由資訊會反映在下列哪一個檔案？",
        "options": {
            "A": "/proc/net/route_table",
            "B": "/proc/net/ipx_route",
            "C": "/proc/net/route",
            "D": "/proc/net/default_route"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "2-20",
        "text": "下列哪些為scp的參數？（複數）",
        "options": {
            "A": "-r",
            "B": "-q",
            "C": "-p",
            "D": "-o"
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
        "id": "2-21",
        "text": "下列哪一個指令是用來將路徑加入Linux的路由表？",
        "options": {
            "A": "addroute",
            "B": "route",
            "C": "netstat",
            "D": "net"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "2-22",
        "text": "啟動在/etc/xinetd.d目錄中的服務，必須在目錄中的檔案裡，設定下列哪一項變數？",
        "options": {
            "A": "disable=no",
            "B": "wait=no",
            "C": "disable=yes",
            "D": "wait=yes"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "2-23",
        "text": "關於SSH的指令運用，下列哪些正確？（複選）",
        "options": {
            "A": "scp root@192.168.1.2:/root/install.log /tmp/testit 以上指令會將192.168.1.2的主機中/root目錄下的檔案install.log拷貝到本地端的/tmp/testit",
            "B": "SFTP可以做到類似FTP指令的功能，而且傳輸過程具加密機制",
            "C": "OpenSSH的SFTP可以將整個本地端的目錄及其內的檔案一次上傳至遠端主機中",
            "D": "SFTP不能用root權限登入遠端主機"
        },
        "answer": [
            "A",
            "B"
        ],
        "type": "checkbox"
    },
    {
        "id": "2-24",
        "text": "關於SCP、SSH及Telnet的敘述，下列哪些正確？（複選）",
        "options": {
            "A": "SSH會對資料內容加密但Telnet不會",
            "B": "SCP和Telnet均可以傳送資料到不同的電腦上",
            "C": "“ssh foo@server.foo.net last”表示使用者想要於server.foo.net上以使用者foo的權限執行指令last",
            "D": "SSH使用port 22，Telnet則使用23"
        },
        "answer": [
            "A",
            "C",
            "D"
        ],
        "type": "checkbox"
    },
    {
        "id": "2-25",
        "text": "下列哪些指令可啟動系統的路由功能？（複選）",
        "options": {
            "A": "echo “0” > /proc/sys/net/ipv4/ip_forward",
            "B": "echo “1” > /proc/sys/net/ipv4/ip_forward",
            "C": "sysctl -w net.ipv4.conf.all.fowarding=1",
            "D": "sysctl -w net.ipv4.conf.all.forwarding=0"
        },
        "answer": [
            "B",
            "C"
        ],
        "type": "checkbox"
    },
    {
        "id": "2-26",
        "text": "在SSH中，壓縮的選項為下列哪一項？",
        "options": {
            "A": "-c",
            "B": "-z",
            "C": "-C",
            "D": "-Z"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "2-27",
        "text": "關於路由表的敘述，下列哪一項正確？",
        "options": {
            "A": "路由表只看網路層資料來決定封包的路由",
            "B": "在路由表中，每個介面只能有一條路由規則",
            "C": "路由表亦能用來路由封包於同一個網段區域網路",
            "D": "路由表也可以依傳輸層資料來絕決定封包的路由"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "2-28",
        "text": "關於設定檔的敘述，下列哪些正確？（複選）",
        "options": {
            "A": "hosts.allow指令允許那些主機的使用者可以使用本機所提供的網路服務",
            "B": "hosts-deny此檔預設沒有任何設定值，會拒絕所有主機的使用者使用本機所提供的網路服務",
            "C": "hosts包含主機網域名稱與IP位址的對應",
            "D": "hosts.conf設定本機的網路組態"
        },
        "answer": [
            "A",
            "C"
        ],
        "type": "checkbox"
    },
    {
        "id": "2-29",
        "text": "下列哪一項可防止路由迴圈的發生？",
        "options": {
            "A": "使用來源IP位址為路由的基準",
            "B": "使用TTL（Time to Live）",
            "C": "使用Spanning Tree",
            "D": "增加路由器的數量"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "2-30",
        "text": "關於SSH伺服器的敘述，下列哪一項錯誤？（複選）",
        "options": {
            "A": "預設限制root不能登入系統",
            "B": "在用戶端的使用者家目錄下的~/.ssh/known_hosts 會紀錄曾經連線過的主機的public key",
            "C": "在/etc/nologin檔案中可設定SSH不可登入的使用者清單",
            "D": "使用SSH連線遠端主機時如果不寫帳號，系統將以本地端電腦的帳號來嘗試登入"
        },
        "answer": [
            "A",
            "C"
        ],
        "type": "checkbox"
    },
    {
        "id": "2-31",
        "text": "下列哪一個服務通常不透過/etc/xinetd.d來管理？",
        "options": {
            "A": "Finger",
            "B": "Time",
            "C": "SSH",
            "D": "Telnet"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "2-32",
        "text": "下列哪一項為SSH使用的埠號？",
        "options": {
            "A": "21",
            "B": "22",
            "C": "23",
            "D": "25"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "2-33",
        "text": "如附圖所示的路由表，請問下列敘述哪一項正確？",
        "options": {
            "A": "192.168.6.65會路由至介面em2",
            "B": "192.168.8.16會路由至介面em1",
            "C": "192.168.8.16會路由至介面p3p1",
            "D": "172.16.1.13 會路由至介面ppp0"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "2-34",
        "text": "如附圖所示為某台主機的部分路由表片段，請問下列敘述那些錯誤？ （複選）",
        "options": {
            "A": "該主機總共接了四片網路卡",
            "B": "以撥接或ADSL的方式對外通聯",
            "C": "該主機的IP為10.0.1.128",
            "D": "從路由表中看不出預設閘道為何"
        },
        "answer": [
            "A",
            "C",
            "D"
        ],
        "type": "checkbox"
    },
    {
        "id": "2-35",
        "text": "如附圖所示為/etc/xinetd.d/wu-ftpd檔案的內容，請問下列敘述哪些正確？ （複選）",
        "options": {
            "A": "連線後均成為root使用者",
            "B": "只有送給192.168.100.23這個IP的請求才被執行",
            "C": "只限於192.168.100.0/24這個Subnet主機連上來，但192.168.100.10、192.168.100.15和192.168.100.30則被禁止",
            "D": "服務的連線類型為TCP"
        },
        "answer": [
            "B",
            "C",
            "D"
        ],
        "type": "checkbox"
    },
    {
        "id": "2-36",
        "text": "關於封包與路由的敘述，下列哪一項正確？",
        "options": {
            "A": "封包被拆解至網路層，系統檢視其來源位址，並比對路由表後決定其路由",
            "B": "封包被拆解至網路層， 系統檢視其來源及目的地位址，並比對路由表後決定其路由",
            "C": "封包被拆解至網路層，系統檢視其目的地位址，並比對路由表後決定其路由",
            "D": "封包被拆解至網路層，系統檢視其目的地連接埠，並比對路由表後決定其路由"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "2-37",
        "text": "關於 Inetd及Xinetd的敘述，下列哪些正確？（複選）",
        "options": {
            "A": "Inetd及Xinetd都是Interner Service Daemon的一種，二者均會監聽特定的port，一旦建立連線，Inetd及Xinetd均會啟動特定的daemon來處理此一連線",
            "B": "可以利用/etc/hosts.allow及/etc/hosts.deny來設定限制daemon的連線範圍",
            "C": "Inetd比Xinetd的功能還要強大，而且也比較具安全性",
            "D": "Xinetd可在本身的設定檔中，設定連線範圍限制以及daemon服務時段限制"
        },
        "answer": [
            "A",
            "B",
            "D"
        ],
        "type": "checkbox"
    },
    {
        "id": "2-38",
        "text": "下列哪些是SFTP和FTP的差異？（複選）",
        "options": {
            "A": "使用公開金鑰加密",
            "B": "上傳檔案",
            "C": "下載檔案",
            "D": "可以透過Non-interactive認證模式使用"
        },
        "answer": [
            "A",
            "D"
        ],
        "type": "checkbox"
    },
    {
        "id": "2-39",
        "text": "使用下列哪一項指令可得知有哪些有效的網路介面可以使用？",
        "options": {
            "A": "netstat -r",
            "B": "ifconfig",
            "C": "netcfg",
            "D": "cat/net.status"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "2-40",
        "text": "關於Telnet的敘述，下列哪些正確？（複選）",
        "options": {
            "A": "Telnet Server預設的Listen Port為21",
            "B": "Telnet是TCP協定家族的一種",
            "C": "Telnet Client端指令通常也較telnet，telnet指令不能連接SMTP通道",
            "D": "登入Telnet Server時，通常需驗證帳號密碼，其中密碼是以明文在網路上傳遞"
        },
        "answer": [
            "B",
            "D"
        ],
        "type": "checkbox"
    },
    {
        "id": "3-01",
        "text": "用戶端在DHCP伺服器成功取得IP資訊後，預設下次會要求取相同的IP，如果想要放棄先前以獲取的IP重新向DHCP伺服器索取新的IP，應該修訂或者刪除下列哪一個檔案？",
        "options": {
            "A": "/etc/sysconfig/network-scripts/ifcfg-*",
            "B": "/etc/rc.d/init.d/network",
            "C": "/etc/sysctl.conf",
            "D": "/var/lib/dhclient/ dhclient*.lease"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "3-02",
        "text": "下列哪些方式可讓有十個以上區域網的公司，以一個DHCP伺服器供給所有用戶端的所需資料？（複選）",
        "options": {
            "A": "公司內的交換機需支援Dhcp Rrelay的功能來代理用戶端的要求",
            "B": "在無Dhcp Relay的功能狀況下，每一個區網必須要架設一台DHCP伺服器",
            "C": "公司內的路由器需要支援 Dhcp Rrelay的功能來代理用戶端的要求",
            "D": "DHCP伺服器一次最多只能支援六個區網，所以我們至少需要兩個DHCP伺服器"
        },
        "answer": [
            "A",
            "B",
            "C"
        ],
        "type": "checkbox"
    },
    {
        "id": "3-03",
        "text": "用戶端向NFS伺服器掛載目錄存取檔案使NFS服務並不需要任何Daemon程式，但可執行下列哪一程式已提高NFS的效能？",
        "options": {
            "A": "nfsiod",
            "B": "rpcbind",
            "C": "nfsd",
            "D": "portmap"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "3-04",
        "text": "設定下列哪一項NFS設定檔的參數，可以不讓Client端以root的身分使用您所分享出來的目錄與檔案？",
        "options": {
            "A": "all_squash",
            "B": "nfsnobody",
            "C": "root_squash",
            "D": "no_root_squash"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "3-05",
        "text": "關於DHCP敘述，下列哪一項錯誤？",
        "options": {
            "A": "DHCP伺服器所用的Port位址為23",
            "B": "一般被套用到的Port編號與通訊協定的對應關係只是記在/etc/services中",
            "C": "由於DHCP使用廣播方式發起通訊，所以只能侷限在單一子網內",
            "D": "lease-time是指從DHCP伺服器分配到的IP位址可使用的時間"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "3-06",
        "text": "下列哪些rpm指令可用來查詢DHCP套件是否安裝？（複選）",
        "options": {
            "A": "rpm -qa | grep dhcp",
            "B": "rpm -ql dhcp",
            "C": "rpm -q dhcp",
            "D": "rpm -qp dhcp"
        },
        "answer": [
            "A",
            "B",
            "C"
        ],
        "type": "checkbox"
    },
    {
        "id": "3-07",
        "text": "下列哪一項是DHCP Server設定檔位置及檔名？",
        "options": {
            "A": "/etc/dhcp.conf",
            "B": "/etc/dhcpd.conf",
            "C": "/etc/dhcp/dhcp.conf",
            "D": "/etc/dhcp/dhcpd.conf"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "3-08",
        "text": "NFS Server的用途為下列哪一項？",
        "options": {
            "A": "動態分配IP的伺服器",
            "B": "檔案分享給Windows用戶",
            "C": "Linux的時間伺服器",
            "D": "檔案分享給Linux/Unix/BSD用戶"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "3-09",
        "text": "下列哪一項為NFS Server分享目錄的設定檔？",
        "options": {
            "A": "/etc/services",
            "B": "/usr/share/nfs",
            "C": "/etc/exports",
            "D": "/proc/filesystem"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "3-10",
        "text": "NFS Server的IP為192.168.10.5，請問其它電腦可由下列哪一項指令查看該電腦分享的目錄？",
        "options": {
            "A": "showmount 192.168.10.5",
            "B": "showmount -f 192.168.10.5",
            "C": "showmount -h 192.168.10.5",
            "D": "showmount -e 192.168.10.5"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "3-11",
        "text": "下列哪一項是Samba Server的設定檔？",
        "options": {
            "A": "/etc/samba.conf",
            "B": "/etc/samba/samba.conf",
            "C": "/etc/smb/samba.conf",
            "D": "/etc/samba/smb.conf"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "3-12",
        "text": "Samba Server的IP為192.168.10.3，請問可由下列哪一項指令查詢該Samba分享目錄？",
        "options": {
            "A": "smblient -L //192.168.10.3",
            "B": "smbclient -I //192.168.10.3",
            "C": "smbmount -L //192.168.10.3",
            "D": "smbmount -D //192.168.10.3"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "3-13",
        "text": "如果想要在純Linux網路環境下建立提供遠端掛載的Linux分割區，應該安裝下列哪一種服務？",
        "options": {
            "A": "SMB",
            "B": "FIPS",
            "C": "DNS",
            "D": "NFS"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "3-14",
        "text": "下列哪一項是直接掛載Samba分享的最佳指令？",
        "options": {
            "A": "smbclient",
            "B": "mount -t cifs",
            "C": "smbfs",
            "D": "smb"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "3-15",
        "text": "下列哪一種服務可以處理檔案分享及列印分享？",
        "options": {
            "A": "SMB",
            "B": "NFS",
            "C": "FTP",
            "D": "HTTP"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "3-16",
        "text": "在Samba2.0版本以後，下列哪一項設定工具是以瀏覽器當作設定介面？",
        "options": {
            "A": "linuxconf",
            "B": "SMB",
            "C": "SWAT",
            "D": "NMB"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "3-17",
        "text": "在DHCP用戶端的主機上，下列哪一項設定檔包含啟動DHCP的設定？",
        "options": {
            "A": "/etc/sysconfig/network-scripts//ifcfg-p3p1",
            "B": "/etc/services",
            "C": "/etc/dhcpd.conf",
            "D": "/etc/sysconfig/network"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "3-18",
        "text": "下列哪些資料可以透過DHCP伺服器取得？（複選）",
        "options": {
            "A": "IP address",
            "B": "Gateway",
            "C": "Netmask",
            "D": "DNS Server IP"
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
        "id": "3-19",
        "text": "下列哪一項指令可以得知NFS伺服器分享的目錄和權限？",
        "options": {
            "A": "showmount",
            "B": "show",
            "C": "rpcinfo",
            "D": "nfsmount"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "3-20",
        "text": "在NFS Server的/etc/exports檔案中，下列哪些設定正確？（複選）",
        "options": {
            "A": "/master (rw) trusty (rw, no_root_squash)",
            "B": "/projects proj*.local.domain (rw)",
            "C": "/usr *.local.domain (ro) @trusted (rw)",
            "D": "/pub (ro, insecure, all_squash)"
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
        "id": "3-21",
        "text": "下列哪些是Samba Server組態檔/etc/samba/smb.conf的全域指令？（複選）",
        "options": {
            "A": "workgroup",
            "B": "comment",
            "C": "hosts allow",
            "D": "hosts deny"
        },
        "answer": [
            "A",
            "C",
            "D"
        ],
        "type": "checkbox"
    },
    {
        "id": "3-22",
        "text": "關於dhcpd.conf的敘述，下列哪些正確？（複選）",
        "options": {
            "A": "dhcpd.conf中，參數設定結束應以;號結束，而宣告則必須用{}括住宣告主體",
            "B": "dhcpd.conf中的設定會區分大小寫",
            "C": "dhcpd.conf中只能設定動態分配的IP範圍，不能指定特定Client使用某一固定IP",
            "D": "若主機上有二片網卡分別代表二個不同的網段，則dhcpd.conf就要有兩個subnet的宣告才行"
        },
        "answer": [
            "A",
            "D"
        ],
        "type": "checkbox"
    },
    {
        "id": "3-23",
        "text": "NFS透過下列哪一項協定存取遠端主機中的檔案？",
        "options": {
            "A": "SMB",
            "B": "Appletalk",
            "C": "MMS",
            "D": "RPC"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "3-24",
        "text": "NFS利用下列哪一個Daemo來動態指定通訊埠？",
        "options": {
            "A": "status",
            "B": "nfs",
            "C": "rpcbind",
            "D": "nlockmgr"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "3-25",
        "text": "欲得知NSF Server啟動後各個Daemon的執行狀況，可使用下列哪一個指令進行查尋？",
        "options": {
            "A": "status",
            "B": "rpcinfo -p",
            "C": "showport",
            "D": "lsof"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "3-26",
        "text": "下列哪些服務其Client端可以把Server端的目錄資源掛載到自己的檔案系統中？",
        "options": {
            "A": "NFS",
            "B": "FTP",
            "C": "Samba",
            "D": "SFTP"
        },
        "answer": [
            "A",
            "C"
        ],
        "type": "checkbox"
    },
    {
        "id": "3-27",
        "text": "在NFS Server裡的分享控制檔，有一列設定為/share mtc(rw,no_all_squash)，請問下列哪一項敘述正確？",
        "options": {
            "A": "mtc主機可掛載/share目錄，能用nobody或nfsnobody身分進入，可讀寫/share",
            "B": "mtc主機可掛載/share目錄，不能用nobody或nfsnobody身分進入，但可讀寫/share",
            "C": "mtc主機可掛載/share目錄，若登入被視為nobody或nfsnobody，可讀寫/share",
            "D": "mtc主機可掛載/share目錄，會以原本的身分進入，可讀寫/share"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "3-28",
        "text": "在 NFS Server 192.168.1.3裡的分享控制檔，有一列設定為/share *(rw)，請問下列哪一項可讓NFS Client端把分享目錄掛載到自己的檔案系統？",
        "options": {
            "A": "mount share@192.168.1.3",
            "B": "mount 192.168.1.3:/share /mnt/share",
            "C": "mount -t vfat 192.168.1.3:/share",
            "D": "mount /mnt/share  192.168.1.3:/share"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "3-29",
        "text": "在Samba的各種安全等級中，下列哪一種不需要檢驗帳號密碼？",
        "options": {
            "A": "share",
            "B": "user",
            "C": "server",
            "D": "domain"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "3-30",
        "text": "欲新增Samba的帳號為ddd並設定其密碼，下列哪一項正確？",
        "options": {
            "A": "adduser ddd",
            "B": "smbpasswd ddd",
            "C": "passwd ddd",
            "D": "smbpasswd -a ddd"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "3-31",
        "text": "如附圖所示，為Samba設定檔中設定使用者密碼部分參數，請問下列敘述哪一項錯誤？",
        "options": {
            "A": "security設定為user層級",
            "B": "密碼採tdbsam資料庫格式存放",
            "C": "密碼檔會放置於/var/lib/samba/private/內",
            "D": "預設密碼使用非加密方式記錄"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "3-32",
        "text": "如附圖所示，其設定檔案內容告訴Samba Daemon下列哪一項訊息？",
        "options": {
            "A": "Samba軟體是位在/home這個目錄下",
            "B": "一個共享設定叫做home放在/home這個目錄下，只能被授權的使用者寫入",
            "C": "一個共享設定叫做home放在/home這個目錄下，可以被任何使用者寫入",
            "D": "一個共享設定叫做home放在/home這個目錄下，可以到/home這個目錄下miunt它"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "3-33",
        "text": "如附圖所示，為/etc/dhcp/dhcpd.conf的設定，請問下列哪些正確？",
        "options": {
            "A": "配發IP租約時指定的預設路由為192.168.1.1",
            "B": "配發IP租約時指定的DNS Server為demosite.com",
            "C": "Client取得的IP租約最長時間為6小時",
            "D": "最多可容許40個DHCP Client端同時上線"
        },
        "answer": [
            "A",
            "D"
        ],
        "type": "checkbox"
    },
    {
        "id": "3-34",
        "text": "如附圖所示，為/etc/dhcp/dhcpd.conf設定檔的內容，請問DHCP Server分配的Inter連線閘道為下列哪一選項？",
        "options": {
            "A": "option domain-name",
            "B": "option ntp-servers",
            "C": "option routers",
            "D": "option netbios-name-servers"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "3-35",
        "text": "如附圖所示，為/etc/dhcp/dhcpd.conf設定檔的內容，請問下列哪一項錯誤？",
        "options": {
            "A": "分配IP位址為20-100,150-200",
            "B": "不分配的位址為1-19,101-149,201-254",
            "C": "網路的閘道器為192.168.10.0",
            "D": "子網路遮罩為255.255.255.0"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "3-36",
        "text": "下列哪一項可以檢查smb.conf語法的正確性？",
        "options": {
            "A": "testparm",
            "B": "checksmbconf",
            "C": "smb-chech",
            "D": "chechparm"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "3-37",
        "text": "DHCP用戶端使用下列哪一個連接埠向DHCP伺服器要求資訊？",
        "options": {
            "A": "69",
            "B": "68",
            "C": "67",
            "D": "任何一個大於1023的連接埠"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "3-38",
        "text": "DHCP伺服器使用下列哪一個連接埠，回復DHCP用戶端所要求的資訊？",
        "options": {
            "A": "69",
            "B": "68",
            "C": "67",
            "D": "任何一個大於1023的連接埠"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "3-39",
        "text": "如果NFS伺服器分享了某些目錄給任何人使用，請問下列哪一項敘述正確？",
        "options": {
            "A": "只有微軟的作業系統也可以使用其分享",
            "B": "用戶端系統預設而言，只有UNIX的作業系統可以使用其分享",
            "C": "不管微軟或是UNIX的作業系統均可使用其分享",
            "D": "只有VMS可使用其分享"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "3-40",
        "text": "重要等級低且需較快速的傳輸，以及對效能影響較低的前提下，NFS可使用下列OSI第四層通訊協定中的哪一項？",
        "options": {
            "A": "UDP",
            "B": "TCP",
            "C": "ICMP",
            "D": "IP"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "4-01",
        "text": "下列哪些為DNS「正解」的使用？（複選）",
        "options": {
            "A": "使用瀏覽器時輸入www.redhat.com即可連線Redhat瀏覽網站",
            "B": "nslookup 203.66.88.89（查出網域名為www.hinet.net）",
            "C": "host www.apache.org（查出IP為209.237.227.195）",
            "D": "dig -x 209.246.26.22（查出網域名稱www.sendmail.org）"
        },
        "answer": [
            "A",
            "C"
        ],
        "type": "checkbox"
    },
    {
        "id": "4-02",
        "text": "下列哪些為DNS「反解」的使用？（複選）",
        "options": {
            "A": "使用瀏覽器時輸入209.132.177.50即可連線Redhat瀏覽網站",
            "B": "nslookup 203.66.88.89（查出網域名為www.hinet.net）",
            "C": "host www.apache.org（查出IP為209.237.227.195）",
            "D": "dig -x 209.246.26.22（查出網域名稱www.sendmail.org）"
        },
        "answer": [
            "B",
            "D"
        ],
        "type": "checkbox"
    },
    {
        "id": "4-03",
        "text": "下列哪些指令可以用來查詢DNS正/反解？（複選）",
        "options": {
            "A": "nslookup",
            "B": "host",
            "C": "resolv",
            "D": "dig"
        },
        "answer": [
            "A",
            "B",
            "D"
        ],
        "type": "checkbox"
    },
    {
        "id": "4-04",
        "text": "DNS正解檔案中，DNS Server本身要設定下列哪些記錄，DNS Server方可正常運作？（複選）",
        "options": {
            "A": "NS",
            "B": "MX",
            "C": "A",
            "D": "CHAME"
        },
        "answer": [
            "A",
            "C"
        ],
        "type": "checkbox"
    },
    {
        "id": "4-05",
        "text": "DNS正解檔案中，欲提供某部Apache Server的名稱解析要設定下列哪一項紀錄，網域名稱方可正常？",
        "options": {
            "A": "NS",
            "B": "MX",
            "C": "A",
            "D": "SOA"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "4-06",
        "text": "設定DNS Server啟動時發生錯誤，請問下列哪一個log檔會記錄錯誤原因？",
        "options": {
            "A": "/var/log/messages",
            "B": "/var/log/maillog",
            "C": "/var/log/secure",
            "D": "/var/log/rpmpkgs"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "4-07",
        "text": "請問IP反解NAME使用的紀錄為下列哪一項？",
        "options": {
            "A": "NS",
            "B": "NX",
            "C": "PTR",
            "D": "CHAME"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "4-08",
        "text": "下列哪一項是每個DNS正/反解檔中只能有一個的記錄？",
        "options": {
            "A": "PTR",
            "B": "MX",
            "C": "CHAME",
            "D": "SOA"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "4-09",
        "text": "DNS Server中的SOA記錄其作用為下列哪一項？",
        "options": {
            "A": "記錄名稱伺服器的管轄區域",
            "B": "指定為名稱伺服器",
            "C": "指定為郵件伺服器",
            "D": "指定為別名"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "4-10",
        "text": "BIND的Daemon為下列哪一項？",
        "options": {
            "A": "bind",
            "B": "xinetd",
            "C": "named",
            "D": "dnsd"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "4-11",
        "text": "可使用下列哪一個指令來測試DNS伺服器？",
        "options": {
            "A": "dns",
            "B": "bind",
            "C": "ping",
            "D": "nslookup"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "4-12",
        "text": "下列哪一個設定檔事bind的工作環境設定檔？",
        "options": {
            "A": "named.local",
            "B": "named.ca",
            "C": "localhost.zone",
            "D": "named.conf"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "4-13",
        "text": "當使用者提出名稱解析要求（DNS）時，是依照下列哪一個檔案所列的名稱伺服器順序來尋求服務？",
        "options": {
            "A": "/etc/named.conf",
            "B": "/etc/resolv.conf",
            "C": "/etc/host.conf",
            "D": "/etc/nsswitch.conf"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "4-14",
        "text": "一般而言，下列哪一個設定檔是bind的根網域記錄檔？",
        "options": {
            "A": "named.local",
            "B": "named.ca",
            "C": "localhost.zone",
            "D": "named.conf"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "4-15",
        "text": "下列哪一項資源記錄的設定，可讓同一個IP擁有許多不同的主機名稱？",
        "options": {
            "A": "MX",
            "B": "A",
            "C": "CHAME",
            "D": "NS"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "4-16",
        "text": "主機使用DHCP取得IP相關資訊包括DNS伺服器IP，若想變更DNS設定為HINET DNS伺服器除了更改/etc/resolv.conf外，為避免/etc/resolv.conf內容被自動變更，還需要在下列哪一個設定檔中加入PEERDNS=no參數？",
        "options": {
            "A": "/etc/sysctl.conf",
            "B": "/etc/sysconfig/network-scripts/ifcfg-p3p1",
            "C": "/etc/resolv.conf",
            "D": "/etc/sysconfig/network"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "4-17",
        "text": "Whois指令可以協助管理者查詢到當初註冊DNS網域名稱時所填寫的使用者相關資訊，請問使用whois時，whois後面需填入下列哪一種資訊方能查詢相關資訊？",
        "options": {
            "A": "查詢的IP Address",
            "B": "DNS網域名稱伺服器",
            "C": "查詢的主機名稱",
            "D": "查詢的網域名稱"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "4-18",
        "text": "提供DNS服務的伺服器軟體為下列哪一項？",
        "options": {
            "A": "Apache",
            "B": "Samba",
            "C": "BIND",
            "D": "IIS"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "4-19",
        "text": "為了系統安全考量我們可以架設一台DNS系統，本身並不直接做名稱解析服務，而是當client端有DNS解析需求時由它代為查詢及回覆，我們稱這種名稱解析服務為下列哪一項？",
        "options": {
            "A": "Master DNS",
            "B": "Slave DNS",
            "C": "cache-only DNS",
            "D": "forwarding DNS"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "4-20",
        "text": "DNS系統會同時啟用UDP/TCP的port 53及TCP的port 953，請問port 953的功能是下列哪一項？",
        "options": {
            "A": "Master與Slave DNS同步資料使用",
            "B": "作為port 53備援使用",
            "C": "提供client端名稱反譯解析使用",
            "D": "提供遠端BIND服務控制及狀態查詢功能"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "4-21",
        "text": "在SOA紀錄裡，用來讓附屬DNS知道多久的時間必須到主要DNS更新資料為下列哪一項？",
        "options": {
            "A": "serial time",
            "B": "refresh time",
            "C": "retry time",
            "D": "expire time"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "4-22",
        "text": "如附圖所示，下列哪一項是DNS查詢流程的正確順序？",
        "options": {
            "A": "I, II, III, IV",
            "B": "I, III, II, IV",
            "C": "II, III, I ,IV",
            "D": "II, I, III"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "4-23",
        "text": "下列哪一項是資源記錄中用來指定IP的記錄？",
        "options": {
            "A": "NS",
            "B": "MX",
            "C": "CHAME",
            "D": "A"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "4-24",
        "text": "下列哪一項是資源記錄中用來指定網域名稱伺服器的記錄？",
        "options": {
            "A": "NS",
            "B": "MX",
            "C": "CHAME",
            "D": "A"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "4-25",
        "text": "在DNS的主要組態檔/etc/named.conf裡的參數中，下列哪一項用來指定zone file的目錄位置？",
        "options": {
            "A": "directory",
            "B": "location",
            "C": "catalog",
            "D": "zone"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "4-26",
        "text": "下列哪一項正確的描述正解區域檔的功能？",
        "options": {
            "A": "將IP位址對應到主機名稱",
            "B": "將IP位址對應到NetBIOS的主機名稱",
            "C": "將主機名稱對應到IP位址",
            "D": "將NetBIOS的主機名稱對應到IP位址"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "4-27",
        "text": "下列哪一項正確的描述反解區域檔的功能？",
        "options": {
            "A": "將IP位址對應到主機名稱",
            "B": "將IP位址對應到NetBIOS的主機名稱",
            "C": "將主機名稱對應到IP位址",
            "D": "將NetBIOS的主機名稱對應到IP位址"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "4-28",
        "text": "下列哪些為合法的反解區域？（複選）",
        "options": {
            "A": "zone “0.0.127.in-addr.arpa”",
            "B": "zone “1.168.192.in.addr.arpa”",
            "C": "zone “0.0.127”",
            "D": "zone “1.168.192”"
        },
        "answer": [
            "A",
            "B"
        ],
        "type": "checkbox"
    },
    {
        "id": "4-29",
        "text": "我國com.tw網域名稱之類別及申請資格為下列哪一項？",
        "options": {
            "A": "依公司法登記之公司或依商業登記法登記之商號",
            "B": "依法設立之政府機關",
            "C": "依法登記之財團法人或社團法人",
            "D": "個人（具中華民國國籍之國民）"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "4-30",
        "text": "我國idv.tw網域名稱之類別及申請資格為下列哪一項？",
        "options": {
            "A": "依公司法登記之公司或依商業登記法登記之商號",
            "B": "依法設立之政府機關",
            "C": "依法登記之財團法人或社團法人",
            "D": "個人（具中華民國國籍之國民）"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "4-31",
        "text": "如附圖所示，為某台主機的/etc/named.conf檔案片段，請問下列敘述哪些正確？（複選）",
        "options": {
            "A": "該台主機是次要DNS伺服器",
            "B": "要讓此台伺服器正常運作，還要手動設定其他相關設定檔（本機正解記錄檔、本機反解記錄檔及根網域記錄檔）",
            "C": "啟動DNS網路服務後，會依file的設定自動產生本機反解記錄檔",
            "D": "主要DNS伺服器的IP為203.74.205.135"
        },
        "answer": [
            "A",
            "D"
        ],
        "type": "checkbox"
    },
    {
        "id": "4-32",
        "text": "如附圖所示，為DNS的正解檔案內容，請問下列敘述哪一項錯誤？",
        "options": {
            "A": "括號()中內容是Master DNS與Slave DNS溝通的資訊",
            "B": "serial為Slave DNS更新時，會比對serial號碼決定是否更新",
            "C": "Master DNS的serial號碼小於Slave DNS的serial才更新",
            "D": "retry為當Master DNS不正常時，Slave DNS重試時間"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "4-33",
        "text": "如附圖所示，為DNS主設定檔named.conf的內容，請問下列敘述哪一項錯誤？",
        "options": {
            "A": "zone “.” 代表DNS最頂層的主機",
            "B": "file  “named.ca”; 此檔登記DNS頂層主機",
            "C": "named.ca檔需置於/etc/named.ca",
            "D": "DNS Server會透過此檔，向Internet DNS頂層主機做正反解"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "4-34",
        "text": "在DNS中，下列哪一個郵件交換記錄參數的優先順序比較高？",
        "options": {
            "A": "10",
            "B": "20",
            "C": "100",
            "D": "200"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "4-35",
        "text": "下列哪一種記錄是DNS用來對應主機名稱到IP位址？",
        "options": {
            "A": "NS",
            "B": "MX",
            "C": "A",
            "D": "PTR"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "4-36",
        "text": "下列哪一種記錄是DNS裡用來對應IP位址到主機名稱",
        "options": {
            "A": "NS",
            "B": "MX",
            "C": "A",
            "D": "PTR"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "4-37",
        "text": "關於DNS架構的敘述，下列哪些正確？（複選）",
        "options": {
            "A": "DNS是一分散式的資料庫，採階層式樹狀目錄架構，並形成一網域名稱空間",
            "B": "DNS的最上層是Top Level Domain網域",
            "C": "arpa網域是反解空間的上層",
            "D": "網域名稱空間中，FQDN是指完整網域名稱，由名稱主機、網域及用”.”結尾組合而成"
        },
        "answer": [
            "A",
            "C",
            "D"
        ],
        "type": "checkbox"
    },
    {
        "id": "4-38",
        "text": "關於DNS查詢的敘述，下列哪些正確？（複選）",
        "options": {
            "A": "查詢中包含有要查詢的DNS Server對象",
            "B": "查詢中包含有要查詢的類型，如A、MX、NS等",
            "C": "查詢中包含有根網域的IP",
            "D": "查詢中包含有要查詢的完整網域名稱或IP"
        },
        "answer": [
            "A",
            "B",
            "D"
        ],
        "type": "checkbox"
    },
    {
        "id": "4-39",
        "text": "下列哪一項是名稱解析伺服器有mater及slave兩種的原因？",
        "options": {
            "A": "兩者必須並存，如果有一個不存在的話，名稱解析及無法運作",
            "B": "為了備份的原因",
            "C": "為了負載平衡的原因",
            "D": "因為master需要slave來確認其資料是否正確"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "4-40",
        "text": "如附圖所示，為namd.conf的slave設定，請問甲、乙、丙、丁的設定哪一項正確？",
        "options": {
            "A": "甲",
            "B": "乙",
            "C": "丙",
            "D": "丁"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "4-41",
        "text": "如附圖所示，為依名稱解析的檔案內容，關於MX的Resource Record敘述，下列哪一項正確？",
        "options": {
            "A": "當mail.linux.bogus.正常運作時，mail.friend.bogus就不會用到",
            "B": "兩個郵件伺服器會被named負載平衡",
            "C": "兩個郵件伺服器會被named負載平衡，但mail.linux.bogus被用10次之後，再輪到mail.friend.bogus被用20次並依此循環",
            "D": "兩個郵件伺服器會被named負載平衡，但mail.linux.bogus被用1次之後，再輪到mail.friend.bogus被用2次並依此循環"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "4-42",
        "text": "如附圖所示，為依名稱解析的檔案內容，關於@的敘述，下列哪一項正確？",
        "options": {
            "A": "表示linux.bogus這個網域",
            "B": "沒意義",
            "C": "表示此行中有管理員的電子郵件",
            "D": "表示以下為delegation的資料"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "4-43",
        "text": "如附圖所示，為依名稱解析的檔案內容，其中「8H」的領域作用為下列哪一項？",
        "options": {
            "A": "TTL的時間",
            "B": "slave伺服器一旦連接master伺服器失敗，重新連線直到不再連線的時間",
            "C": "slave伺服器一旦連接master伺服器失敗，重新連線的週期",
            "D": "slave伺服器來檢查master伺服器是否有更新的週期"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "4-44",
        "text": "下列哪一個named的選項可以設定named的程序擁有者？",
        "options": {
            "A": "-U",
            "B": "-l",
            "C": "-u",
            "D": "-L"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "4-45",
        "text": "附圖所示，為依名稱解析的檔案內容，其中「1D」的領域作用為下列哪一項？",
        "options": {
            "A": "TTL的時間",
            "B": "slave伺服器一旦連接master伺服器失敗，重新連線直到不再連線的時間",
            "C": "slave伺服器一旦連接master伺服器失敗，重新連線的週期",
            "D": "slave伺服器來檢查master伺服器是否有更新的週期"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "5-01",
        "text": "設定郵件伺服器的別名，如要從檔案/var/mail/pilot.aliases讀入用戶的別名列表的話，應在/etc/aliases檔作下列哪一種記述？",
        "options": {
            "A": "csf: /var/mail/pilot.aliases",
            "B": "csf: /CF/var/mail/pilot.aliases",
            "C": "csf: :include:/var/mail/pilot.aliases",
            "D": "csf: DX/var/mail/pilot.aliases"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "5-02",
        "text": "有關Sendmail的描述，下列哪一項錯誤？",
        "options": {
            "A": "當系統安裝完成，Sendmail套件就安裝完成並已啟動Sendmail服務",
            "B": "預設安裝的Sendmail，只有本機可以寄信",
            "C": "預設安裝的Sendmail，可以提供系統寄信給root管理者",
            "D": "安裝好的Sendmail啟動的port埠號為110"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "5-03",
        "text": "Sendmail Server啟動時，使用到的主設定檔為下列哪一項？",
        "options": {
            "A": "/etc/mail/sendmail.cf",
            "B": "/etc/mail/sendmail.mc",
            "C": "/etc/mail/access",
            "D": "/etc/mail/submit.cf"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "5-04",
        "text": "SMTP服務使用下列哪一個TCP/IP埠號？",
        "options": {
            "A": "23",
            "B": "25",
            "C": "110",
            "D": "53"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "5-05",
        "text": "當Sendmail伺服器架設完成，請問至DNS伺服器登記Mail Server必要的記錄有下列哪些？（複選）",
        "options": {
            "A": "NS",
            "B": "MX",
            "C": "A",
            "D": "CNAME"
        },
        "answer": [
            "B",
            "C"
        ],
        "type": "checkbox"
    },
    {
        "id": "5-06",
        "text": "當Mail Relay檔編輯完成時，執行make指令Mail Relay會寫入下列哪一個db檔？",
        "options": {
            "A": "/etc/mail/domaintable.db",
            "B": "/etc/mail/mailertable.db",
            "C": "/etc/mail/virtusertable.db",
            "D": "/etc/mail/access.db"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "5-07",
        "text": "編輯Mail Relay檔內容，下列哪一項正確？",
        "options": {
            "A": "61.62.63  Relay",
            "B": "Relay  61.62.63",
            "C": "61.62.63  RELAY",
            "D": "RELAY  61.62.63"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "5-08",
        "text": "下列哪些Mail Relay檔案的設定，可阻擋badman@baddomain.com的信件？（複選）",
        "options": {
            "A": "badman@baddomain.com  DROP",
            "B": "badman@baddomain.com  DISCARD",
            "C": "badman@baddomain.com  DENY",
            "D": "badman@baddomain.com  REJECT"
        },
        "answer": [
            "B",
            "D"
        ],
        "type": "checkbox"
    },
    {
        "id": "5-09",
        "text": "下列哪一項是Main Server存放所有User信件的位置？",
        "options": {
            "A": "/bin/mail",
            "B": "/var/spool/mail",
            "C": "/etc/mail",
            "D": "/var/mail"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "5-10",
        "text": "請問IMAP協定，使用下列哪一種埠號？",
        "options": {
            "A": "25",
            "B": "53",
            "C": "110",
            "D": "143"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "5-11",
        "text": "有時會因為網路問題而使得郵件送不出去，而信件會被保存在郵件佇列當中。試問查看信件佇列的指令為下列哪一項？",
        "options": {
            "A": "newmail",
            "B": "mailqueue",
            "C": "mailq",
            "D": "sendmail -q"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "5-12",
        "text": "關於電子郵件系統三個元件（MUA、MTA及MDA）的敘述，下列哪些正確？（複選）",
        "options": {
            "A": "微軟的Outlook屬於MUA",
            "B": "MTA是使用者用來讀取信件的軟體",
            "C": "Sendmail是屬於MDA",
            "D": "MDA可以比喻成將信件從郵局送到目的地的員工"
        },
        "answer": [
            "A",
            "D"
        ],
        "type": "checkbox"
    },
    {
        "id": "5-13",
        "text": "下列哪一種郵件服務，只管收集郵件但本身不負責散步到網路上？",
        "options": {
            "A": "Sendmail",
            "B": "POP3",
            "C": "Inetd",
            "D": "Qmail"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "5-14",
        "text": "在sendmail.mc檔案中，下列哪一行指令必須在最前面？",
        "options": {
            "A": "incude(‘../m4/cf.m4’)",
            "B": "#sendmail",
            "C": "#!/bin/sh",
            "D": "OSTYPE(linux)"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "5-15",
        "text": "對於/etc/mail/access檔案的動作敘述，下列哪些正確？（複選）",
        "options": {
            "A": "OK允許接收及寄送指定網址的信件",
            "B": "RELAY允許接收指定網址的使用者所寄來的信件",
            "C": "REJECT拒絕接收或寄送指定網址的信件",
            "D": "DISCARD丟棄從指定網址的使用者所寄來的信件，或寄送到此網址的信件，若有信件被丟棄，寄件者會收到錯誤訊息"
        },
        "answer": [
            "A",
            "C"
        ],
        "type": "checkbox"
    },
    {
        "id": "5-16",
        "text": "關於帳號別名的敘述，下列哪些正確？（複選）",
        "options": {
            "A": "別名設定檔為/etc/mail/access",
            "B": "一個使用者只能有一個別名",
            "C": "一個別名可以包含多個使用者",
            "D": "讓別名生效的方法是使用newaliases指令"
        },
        "answer": [
            "C",
            "D"
        ],
        "type": "checkbox"
    },
    {
        "id": "5-17",
        "text": "在設定Sendmail伺服器時，用不到下列哪一個檔案？",
        "options": {
            "A": "/etc/mail/access",
            "B": "/etc/mail/local-host-names",
            "C": "/etc/mail/sendmail.cf",
            "D": "/etc/mail/hosts"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "5-18",
        "text": "Mail logs位在下列哪一個目錄底下？",
        "options": {
            "A": "/log",
            "B": "/logs",
            "C": "/var/adm/syslogs",
            "D": "/var/log"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "5-19",
        "text": "郵件系統必須由下列哪些項目組成？（複選）",
        "options": {
            "A": "MTA",
            "B": "MUA",
            "C": "MDA",
            "D": "MBA"
        },
        "answer": [
            "A",
            "B",
            "C"
        ],
        "type": "checkbox"
    },
    {
        "id": "5-20",
        "text": "下列哪一項能正確的描述MTA的功能？",
        "options": {
            "A": "存取儲存的郵件",
            "B": "郵件加密",
            "C": "傳送主機和主機之間的郵件",
            "D": "解決郵件傳輸機制的問題"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "5-21",
        "text": "該網域的郵件會透過下列哪一種伺服器來決定傳送的路徑？",
        "options": {
            "A": "DNS",
            "B": "FTP",
            "C": "HTTP",
            "D": "Sendmail"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "5-22",
        "text": "Sendmail帳戶的別名預設紀錄在下列哪一個檔案？",
        "options": {
            "A": "/etc/aliases",
            "B": "/etc/mail/access",
            "C": "/etc/passwd",
            "D": "/var/spool/mail"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "5-23",
        "text": "在/etc/aliases預設root是下列哪些帳號的別名？（複選）",
        "options": {
            "A": "bin",
            "B": "daemon",
            "C": "mail",
            "D": "ftp-adm"
        },
        "answer": [
            "A",
            "B",
            "C"
        ],
        "type": "checkbox"
    },
    {
        "id": "5-24",
        "text": "Mail群組帳號的建立是在下列哪一個檔案？",
        "options": {
            "A": "/etc/aliases",
            "B": "/etc/passwd",
            "C": "/etc/group",
            "D": "/etc/shadow"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "5-25",
        "text": "下列哪一項為Sendmail的佇列？",
        "options": {
            "A": "/var/spool/mqueue",
            "B": "/var/spool/mail",
            "C": "/var/spool/mailq",
            "D": "/var/spool/sendmail"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "5-26",
        "text": "下列哪些資訊會在Sendmail佇列中呈現？（複選）",
        "options": {
            "A": "收件者（Recipients）",
            "B": "郵件大小（Message Size）",
            "C": "到達時間（Arrival Time）",
            "D": "送件者（Sender）"
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
        "id": "5-27",
        "text": "在mail指令的互動模式下寫信時，可使用下列哪一種方式結束？",
        "options": {
            "A": "[Ctrl] + [C]鍵",
            "B": "[Ctrl] + [D]鍵",
            "C": "[Ctrl] + [Z]鍵",
            "D": "[.]鍵"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "5-28",
        "text": "Sendmail大量運用m4這個程式來編譯Sendmail的組態檔案，m4的主要功能為下列哪一項？",
        "options": {
            "A": "m4是一個shell",
            "B": "m4是一個C Compiler",
            "C": "m4是一個Macro Processor",
            "D": "m4是一個Word Processor"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "5-29",
        "text": "欲把寄給webadm的信件轉給admin這個帳號，可在下列哪一個檔案中設定？",
        "options": {
            "A": "/etc/mail/alias",
            "B": "/var/mail/aliases",
            "C": "/etc/aliases",
            "D": "/var/lib/aliases"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "5-30",
        "text": "每一位郵件伺服器管理員除了要讓郵件伺服器正常運作之外，更要避免Open Relay，請問下列哪一項是Open Relay？",
        "options": {
            "A": "接收任何郵件",
            "B": "未經授權的網域主機其信包均予以轉送",
            "C": "開放查詢郵件",
            "D": "開放查詢郵件帳號"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "5-31",
        "text": "/var/spool/clientmqueue目錄做為Sendmail的Client Mail佇列，其擁有者為下列哪一項？",
        "options": {
            "A": "mail:mail",
            "B": "smmsp:smmsp",
            "C": "smmsp:mail",
            "D": "mail:smmsp"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "5-32",
        "text": "在Sendmail系統中，欲將寄給admin的信件轉給webadm這個帳號，在別名檔應使用下列哪一項設定？",
        "options": {
            "A": "webadm:  admin",
            "B": "root:  webadm",
            "C": "admin:  root",
            "D": "admin: webadm"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "5-33",
        "text": "關於Sendmail系統中信件佇列的敘述，下列哪些正確？（複選）",
        "options": {
            "A": "Sendmail將信件分為header及body二部分，分開存放在不同的檔案",
            "B": "可以立即轉送出的信件會存放在/var/spool/mqueue目錄中",
            "C": "儲存在佇列中的信件會在往後適當時機予以遞送",
            "D": "mqueue中的檔案，一般的使用者應該要有權限讀取，才能順利將信件送出"
        },
        "answer": [
            "A",
            "C"
        ],
        "type": "checkbox"
    },
    {
        "id": "5-34",
        "text": "在安裝完成Sendmail之後，應使用下列哪一項方式啟動Sendmail？",
        "options": {
            "A": "sendmail -bt -qlh",
            "B": "/usr/sbin/sendmain -bd -qlh",
            "C": "sendmail start",
            "D": "sendmal -qlh &"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "5-35",
        "text": "修改Access之後，應使用下列哪一項方式更新Access.db？",
        "options": {
            "A": "make update",
            "B": "makemap text /etc/mail/access < /etc/mail/access",
            "C": "makemap hash /etc/mail/access < /etc/mail/access",
            "D": "makeupdate access"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "5-36",
        "text": "若Sendmail運作出現問題，應該查看下列哪些檔案以做為偵錯的主要線索來源？（複選）",
        "options": {
            "A": "/var/log/message",
            "B": "/var/log/maillog",
            "C": "/var/log/dmesg",
            "D": "/var/log/lastlog"
        },
        "answer": [
            "A",
            "B"
        ],
        "type": "checkbox"
    },
    {
        "id": "5-37",
        "text": "若Sendmail是以單獨啟動（standalone）的方式運作，下列敘述哪些正確？（複選）",
        "options": {
            "A": "/etc/hosts.allow及/etc/hosts.deny可以限制SMTP的連線範圍",
            "B": "使用ipchains或iptables可以限制SMTP的連線範圍",
            "C": "必須在/etc/inetd.conf或/etc/xinetd.conf中設定Sendmail",
            "D": "SMTP通常在port 25傾聽等待連線"
        },
        "answer": [
            "B",
            "D"
        ],
        "type": "checkbox"
    },
    {
        "id": "5-38",
        "text": "關於POP3和IMAP協定的敘述，下列哪些正確？（複選）",
        "options": {
            "A": "提供使用者離線取得信件",
            "B": "使用POP3無法預視郵件主機中的信包有哪些信件主旨",
            "C": "使用IMAP無法預視郵件主機中的信包有哪些信件主旨",
            "D": "IMAP的安全性高於POP3"
        },
        "answer": [
            "A",
            "B"
        ],
        "type": "checkbox"
    },
    {
        "id": "5-39",
        "text": "欲測試Sendmail的rule set替換，可執行下列哪一指令進入rule-testing模式？",
        "options": {
            "A": "sendmail -bd",
            "B": "sendmail -bp",
            "C": "sendmail -bi",
            "D": "sendmail -bt"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "5-40",
        "text": "如附圖所示，為郵件的錯誤訊息內容，請問圖中的訊息是下列哪一項原因所造成？",
        "options": {
            "A": "郵件地址寫錯",
            "B": "Sendmail程式啟動錯誤",
            "C": "DNS Server上沒有MX設定",
            "D": "郵件伺服器主機名稱與MX名稱不符"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "5-41",
        "text": "如果您送了一封電子郵件到foo.org上的二十個帳號，請問Sendmail會以下列哪一項方式傳送到該電子郵件這二十個帳號？",
        "options": {
            "A": "當帳號要收信，Sendmail才會把此電子郵件複製到此帳號的信箱",
            "B": "Sendmail會馬上把此郵件放到各個帳號的信箱",
            "C": "Sendmail會把此郵件先放在一個公共信箱等各個帳號來收信",
            "D": "Sendmail會馬上把此郵件放到各個帳號的家目錄下"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "5-42",
        "text": "目前的垃圾郵件相當氾濫，原因之一是否些電子郵件伺服器過度開放Relay的功能，如果您是公司的MIS人員，請問該採取下列哪些方式解決過度開放Relay的問題？（複選）",
        "options": {
            "A": "只開放給內部網路，所以只有當在此網路中才可使用SMTP寄信",
            "B": "搭配使用SASL讓寄信者必須通過認證後才能寄信",
            "C": "只開放Relay功能給127.0.0.1",
            "D": "委派專人幫公司所有人寄信"
        },
        "answer": [
            "A",
            "B"
        ],
        "type": "checkbox"
    },
    {
        "id": "5-43",
        "text": "關於POP3的敘述，下列哪些正確？（複選）",
        "options": {
            "A": "主要適用於離線模式",
            "B": "不適用時多於一台電腦使用",
            "C": "收信不需把信件全文下載至電腦",
            "D": "可以於郵件伺服器上建立資料目錄並存郵件於伺服器上"
        },
        "answer": [
            "A",
            "B"
        ],
        "type": "checkbox"
    },
    {
        "id": "5-44",
        "text": "關於IMAP的敘述，下列哪些正確？（複選）",
        "options": {
            "A": "主要是用於離線模式",
            "B": "不適用於多於一台電腦使用",
            "C": "收信時不需把信件全文下載至電腦",
            "D": "可以於郵件伺服器上建立資料目錄並存於郵件伺服器上"
        },
        "answer": [
            "C",
            "D"
        ],
        "type": "checkbox"
    },
    {
        "id": "5-45",
        "text": "若想讓Mail Server主動的將以「網路購物」為主旨的廣告郵件「丟掉」，可於Sendmail中加入分析郵件內容，以及使用者設定相對應狀態將郵件進一步過濾，請問下列哪一項程序可以做到？",
        "options": {
            "A": "Cyrus SASL",
            "B": "Mailing list",
            "C": "Mail Relay",
            "D": "Procmail"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "6-01",
        "text": "在Apache中，「Document Root」的意義為下列哪一項？",
        "options": {
            "A": "指定了HTML樹狀結構的頂層目錄位置",
            "B": "指定了設定檔案httpd.conf的放置場所",
            "C": "指定了Apache文件檔案放置場所",
            "D": "指定了Apache的log檔案放置場所"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "6-02",
        "text": "Apache Service服務啟動後，會開啟下列哪一項埠號？",
        "options": {
            "A": "25",
            "B": "53",
            "C": "80",
            "D": "110"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "6-03",
        "text": "RPM套件預設的「Document Root」網頁根目錄位置為下列哪一項？",
        "options": {
            "A": "/etc/httpd/www",
            "B": "/var/www/html",
            "C": "/usr/local/www",
            "D": "/usr/sbin/httpd"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "6-04",
        "text": "RPM套件預設的設定檔「httpd.conf」目錄位置為下列哪一項？",
        "options": {
            "A": "/etc/httpd/conf/httpd.conf",
            "B": "/var/www/conf/httpd.conf",
            "C": "/usr/local/apache/httpd/conf/httpd.conf",
            "D": "/usr/sbin/conf/httpd.conf"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "6-05",
        "text": "Apache 啟動時出現「httpd: Could not reliably determine the server's fully qualified domain name, using localhost.localdomain. Set the 'ServerName' directive globally to suppress this message」訊息，請問下列敘述哪些正確？（複選）",
        "options": {
            "A": "Apache無法啟動",
            "B": "Apache已經啟動",
            "C": "httpd.conf設定檔中刪除ServerName此列，啟動時就不會顯示",
            "D": "httpd.conf設定檔中設定ServerName的名稱，啟動時就不會顯示"
        },
        "answer": [
            "B",
            "D"
        ],
        "type": "checkbox"
    },
    {
        "id": "6-06",
        "text": "在Windows中製作網的網頁，放至Apache下中文出現亂碼，欲讓中文可正確顯示，需將AddDefaultCharset修改成下列哪一項？",
        "options": {
            "A": "AddDefaultCharset UTF8",
            "B": "AddDefaultCharset cp950",
            "C": "AddDefaultCharset 950",
            "D": "AddDefaultCharset Big5"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "6-07",
        "text": "當一般User瀏覽Apache網站，請問是用下列哪一種權限身分瀏覽？",
        "options": {
            "A": "root",
            "B": "guest",
            "C": "apache",
            "D": "supervisor"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "6-08",
        "text": "請問在Apache中，設定每個User家目錄中的個人網頁，其預設名稱為下列哪一項？",
        "options": {
            "A": "public_html",
            "B": "http_html",
            "C": "public_http",
            "D": "www_http"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "6-09",
        "text": "如Apache啟用SSL加密傳輸協定https，請問https所使用的埠號為下列哪一項？",
        "options": {
            "A": "22",
            "B": "443",
            "C": "80",
            "D": "143"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "6-10",
        "text": "欲讓VsFTP停止匿名登入，可在設定檔vsftpd.conf設定下列哪一項？",
        "options": {
            "A": "guest_enable=NO",
            "B": "anonymous_enable=NO",
            "C": "user_enable=NO",
            "D": "local_enable=NO"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "6-11",
        "text": "VsFTP設定檔內容 : Local_mat_rate=5000，請問關於此列設定的敘述下列哪一項正確？",
        "options": {
            "A": "限制匿名者的下載傳輸速率",
            "B": "限制使用者的下載傳輸速率",
            "C": "VsFTP伺服器最大連線數",
            "D": "閒置5000秒時自動斷線"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "6-12",
        "text": "VsFTP設定檔內容 : idle_session_timeout=600，請問關於此列的敘述下列哪一項正確？",
        "options": {
            "A": "為最大的傳輸速率",
            "B": "限制vsftp最大的連線數",
            "C": "閒置600秒時自動斷線",
            "D": "限制IP的連線數量"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "6-13",
        "text": "關於啟動Apache Server的敘述，下列哪一項正確？",
        "options": {
            "A": "/etc/rc.d/init.d/xinetd start",
            "B": "/etc/rc.d/init.d/apached start",
            "C": "systemctl start httpd.service",
            "D": "service apache start"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "6-14",
        "text": "關於Apache Server基本設定的敘述，下列哪些錯誤？（複選）",
        "options": {
            "A": "DocumentRoot是指定存放網頁說明文件的目錄",
            "B": "ServerRoot是指定存放網頁的根目錄",
            "C": "UserDir的預設值為www",
            "D": "Port的預設值為80"
        },
        "answer": [
            "A",
            "B",
            "C"
        ],
        "type": "checkbox"
    },
    {
        "id": "6-15",
        "text": "關於AllowOverride功能設定的敘述，下列哪些正確？（複選）",
        "options": {
            "A": "Options具有允許使用Options、XbitHack設定控制指定之目錄的特性",
            "B": "All具有開放指定目錄的所有存取權限",
            "C": "Limit具有允許使用Allow、Dent、Order設定控制主機存取權限",
            "D": "None的指定目錄以預設存取權限為準"
        },
        "answer": [
            "A",
            "C",
            "D"
        ],
        "type": "checkbox"
    },
    {
        "id": "6-16",
        "text": "關於FTP指令的敘述，下列哪些錯誤？（複選）",
        "options": {
            "A": "dir指令可顯示現行目錄下的所有檔案",
            "B": "get指令可以下載多個檔案",
            "C": "prompt指令可以設定提示符號",
            "D": "lcd指令可以切換本機目前的目錄"
        },
        "answer": [
            "B",
            "C"
        ],
        "type": "checkbox"
    },
    {
        "id": "6-17",
        "text": "下列哪些是FTP伺服器端的程式？（複選）",
        "options": {
            "A": "VsFTPD",
            "B": "NcFTP",
            "C": "ProFTPD",
            "D": "WsFTP"
        },
        "answer": [
            "A",
            "C"
        ],
        "type": "checkbox"
    },
    {
        "id": "6-18",
        "text": "欲離開FTP，可在FTP提示符號下執行下列哪些指令？（複選）",
        "options": {
            "A": "closed",
            "B": "out",
            "C": "bye",
            "D": "quit"
        },
        "answer": [
            "C",
            "D"
        ],
        "type": "checkbox"
    },
    {
        "id": "6-19",
        "text": "VsFTP伺服器將使用者分為下列哪些類別？（複選）",
        "options": {
            "A": "real",
            "B": "anonymous",
            "C": "guest",
            "D": "restricted"
        },
        "answer": [
            "A",
            "B",
            "D"
        ],
        "type": "checkbox"
    },
    {
        "id": "6-20",
        "text": "VsFTPD預設允許擁有帳號的使用者任意切換到家目錄以外的目錄，若想限制某些特定使用者登入後只能在其家目錄下活動，下列哪些是必要的設定？（複選）",
        "options": {
            "A": "在/etc/vsftpd/vsftpd.conf檔案中加入”chroot_local_user=YES”這行",
            "B": "在/etc/vsftpd/vsftpd.conf檔案中加入”chroot_list_enable=YES”這行",
            "C": "在/etc/vsftpd目錄下建立chroot_list檔案，並將那些特定使用者帳號加到檔案中",
            "D": "將其他使用者家目錄的存取權限設為700"
        },
        "answer": [
            "B",
            "C"
        ],
        "type": "checkbox"
    },
    {
        "id": "6-21",
        "text": "下列哪一項是Apache伺服器的程式？",
        "options": {
            "A": "apached",
            "B": "httpd",
            "C": "htmld",
            "D": "ftpd"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "6-22",
        "text": "在Apache的組態檔中，下列哪一項指令是用來設定html文件首頁的位置？",
        "options": {
            "A": "DocumentRoot",
            "B": "ServerRoot",
            "C": "DirectoryIndex",
            "D": "AccessFileName"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "6-23",
        "text": "在Apache的組態檔中，下列哪一項指令使用來設定每一個目錄抓取的預設檔案名稱？",
        "options": {
            "A": "DocumentRoot",
            "B": "ServerRoot",
            "C": "DirectoryIndex",
            "D": "AccessFileName"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "6-24",
        "text": "執行Apache時，要讓指定的目錄有登入認證的功能，必須在該目錄加上下列哪一個檔案？",
        "options": {
            "A": ".htaccess",
            "B": ".htpasswd",
            "C": "htaccess",
            "D": "htpasswd"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "6-25",
        "text": "執行Apache目錄登入認證時，用來產生認證檔案（密碼）的指令為下列哪一項？",
        "options": {
            "A": "htpasswd",
            "B": "passwd",
            "C": "crypt",
            "D": "auth"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "6-26",
        "text": "在Apache的組態檔中，<VirtualHost UP位址>和</VirtualHost>之間可以使用下列哪些指令？（複選）",
        "options": {
            "A": "ServerName",
            "B": "DocumentRoot",
            "C": "ErrorLog",
            "D": "CustomerLog"
        },
        "answer": [
            "A",
            "B",
            "C"
        ],
        "type": "checkbox"
    },
    {
        "id": "6-27",
        "text": "name-based和IP-based的虛擬主機二者的差異有下列哪些？（複選）",
        "options": {
            "A": "named-based的虛擬主機使用同一個IP位址",
            "B": "named-based的虛擬主機使用不同的IP位址",
            "C": "IP-based的虛擬主機使用同一個IP位址",
            "D": "IP-based的虛擬主機使用不同的IP位址"
        },
        "answer": [
            "A",
            "D"
        ],
        "type": "checkbox"
    },
    {
        "id": "6-28",
        "text": "關於FTP功能的敘述，下列哪些正確？（複選）",
        "options": {
            "A": "可以將檔案在Client和Server間傳輸",
            "B": "可以提供上傳檔案的服務",
            "C": "可以提供下載檔案的服務",
            "D": "可以提供匿名者的服務"
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
        "id": "6-29",
        "text": "下載圖形檔案前，必須先在FTP Client下達的指令可以是下列哪些？（複選）",
        "options": {
            "A": "binary",
            "B": "ascii",
            "C": "bin",
            "D": "asc"
        },
        "answer": [
            "A",
            "C"
        ],
        "type": "checkbox"
    },
    {
        "id": "6-30",
        "text": "下列哪一項是VsFTP的組態檔？",
        "options": {
            "A": "/etc/vsftpd.ftpusers",
            "B": "/etc/vsftpd.user_list",
            "C": "/etc/vsftpd/vsftpd.conf",
            "D": "/etc/vsftpd/config"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "6-31",
        "text": "欲檢查Apache設定檔的語法是否正確，可使下列哪些方法？（複選）",
        "options": {
            "A": "apachectl checkconf",
            "B": "apachectl check",
            "C": "apachectl configtest",
            "D": "apachectl -t"
        },
        "answer": [
            "C",
            "D"
        ],
        "type": "checkbox"
    },
    {
        "id": "6-32",
        "text": "關於Web Server Response codes的敘述，下列哪些正確？（複選）",
        "options": {
            "A": "Response codes若為100~199，表示information",
            "B": "Response codes若為200~299，表示Server端的request成功",
            "C": "Response codes若為300~399，表示Client端的要求將被轉向做進一步的處理",
            "D": "Response codes若為500~599，表示Server伺服器發生錯誤"
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
        "id": "6-33",
        "text": "位於NAT內部網路的Client端欲由FTP Server下載檔案時，通常會採用被動式的傳輸模式，下列哪些敘述正確？（複選）",
        "options": {
            "A": "Client會由1024以上的port隨機挑選一個，和FTP Server port 21連線",
            "B": "Client會由以port20和FTP Server 1024以上的port連線",
            "C": "傳輸檔案前，Server端會隨機挑選1024以上的port，然後等待Client端連線",
            "D": "傳輸檔案前，Client端會隨機挑選1024以上的port，並告知FTP Server它已經準備好接收資料"
        },
        "answer": [
            "A",
            "C"
        ],
        "type": "checkbox"
    },
    {
        "id": "6-34",
        "text": "如附圖所示，為Apache虛擬主機的設定，其中www和vm是同一部主機。請問下列敘述哪些正確？（複選）",
        "options": {
            "A": "上述方式是採用Name-based虛擬主機設定",
            "B": "上述方式是採用IP-based虛擬主機設定",
            "C": "使用Name-based虛擬主機設定者，Client端瀏覽器只要有支援HTTP 1.0就能順利連接至不同的虛擬主機",
            "D": "Name-based虛擬主機要搭配DNS設定（如CNAME）才能正常運作"
        },
        "answer": [
            "A",
            "D"
        ],
        "type": "checkbox"
    },
    {
        "id": "6-35",
        "text": "如附圖所示，為瀏覽使用者vincent設定的Apache個人網頁所發生的錯誤訊息，請問是下列哪一項原因造成網頁無法瀏覽？",
        "options": {
            "A": "找不到index.html的網頁",
            "B": "httpd.conf定義的設定檔有問題",
            "C": "瀏覽網頁的目錄權限不足",
            "D": "該Apache Server沒有啟動"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "6-36",
        "text": "如果希望讓Client開啟網頁時，若找不到首頁檔案（預設為index.html）系統就不會顯示出整個目錄下的檔案名稱，可在httpd.conf設定檔的<Directory “var/www/html”>設定取消下列哪一個options功能？",
        "options": {
            "A": "FollowSymLinks",
            "B": "Includes",
            "C": "MultiViews",
            "D": "Indexes"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "6-37",
        "text": "在負責Apache目錄登入認證的.htaccess參數中，下列哪一項是用來指定可以登入目錄的使用者？",
        "options": {
            "A": "AuthName",
            "B": "AuthType",
            "C": "AuthUserFile",
            "D": "reuqire"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "6-38",
        "text": "在Apaches已經設定了http://的加密連線，請問應該在下列哪一項，設定加密連線所使用的DocumentRoot ”/var/www/https”？",
        "options": {
            "A": "/etc/httpd/conf.d/pki.conf",
            "B": "/etc/httpd/conf.d/ssl.conf",
            "C": "/etc/httpd/conf.d/httpd.conf",
            "D": "/etc/httpd/conf.d/httpsd.conf"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "6-39",
        "text": "由於安全考量需要限制系統部分使用者無法登入VsFTP，請問如果採用PAM模組驗證的方式阻擋，下列敘述哪一項正確？",
        "options": {
            "A": "/etc/vsftpd/ftpusers 移除無法登入的使用者帳號",
            "B": "/etc/vsftpd/ftpusers 加入無法登入的使用者帳號",
            "C": "/etc/bsftpd/user_list 移除無法登入的使用者帳號",
            "D": "/etc/bsftpd/user_list 加入無法登入的使用者帳號"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "6-40",
        "text": "在httpd.conf中若有設定為「Include /usr/local/apache2/conf/conf.d」，請問其用意為下列哪一項？",
        "options": {
            "A": "conf.d中的檔案均視為模組",
            "B": "conf.d中的檔案均視為記錄檔",
            "C": "conf.d中的檔案均視為設定檔",
            "D": "conf.d中的檔案均視為執行檔"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "6-41",
        "text": "VsFTP可以設定成以inetd或standalone模式運作，若欲採用standalone模式，則vsftpd.conf需要設定下列哪一項？",
        "options": {
            "A": "standalone=YES",
            "B": "listen =YES",
            "C": "daemon=NO",
            "D": "listen_enable=YES"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "6-42",
        "text": "欲讓主機中的使用者帳號可以登入VsFTP FTP Server，在vsftpd.conf中應使用下列哪一項設定？",
        "options": {
            "A": "anonymous_enable=YES",
            "B": "write_enable=YES",
            "C": "local_enalbe=YES",
            "D": "login_enable=YES"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "6-43",
        "text": "欲讓VsFTP FTP Server可供匿名登入，在vsftpd.conf中應使用下列哪一項設定？",
        "options": {
            "A": "在anonymous_enable=YES選項前面加上#號",
            "B": "local_enable=NO",
            "C": "login_enabloe=NO",
            "D": "anonymous_enable=YES"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "6-44",
        "text": "Client端由FTP Server下載檔案時，通常會採用主動式的傳輸模式，下列哪些敘述正確？（複選）",
        "options": {
            "A": "Client會由1024以上的port隨機挑選一個，和FTP Server port 21連線",
            "B": "Client會由以port20和FTP Server 1024以上的port連線",
            "C": "傳輸檔案前，Client端會開啟port 20，並告知FTP Server它已經準備好接收資料",
            "D": "傳輸檔案前，Client端會隨機挑選1024以上的port，然後由Server port 20主動傳輸資料給Client端"
        },
        "answer": [
            "A",
            "D"
        ],
        "type": "checkbox"
    },
    {
        "id": "6-45",
        "text": "下列哪一項設定可讓Apache的預設字型為中文繁體",
        "options": {
            "A": "Language zh-TW",
            "B": "AddDefaultCharset zh-TW",
            "C": "SetLanguage zh-TW",
            "D": "LanguagePriority zh-TW"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "7-01",
        "text": "下列哪些Service支援TCP wrapper？（複選）",
        "options": {
            "A": "Telnet Server",
            "B": "vsftpd Server",
            "C": "NFS Server",
            "D": "Samba Server"
        },
        "answer": [
            "A",
            "B"
        ],
        "type": "checkbox"
    },
    {
        "id": "7-02",
        "text": "當設定完成hosts.allow及host.deny這兩個檔案時，需使用下列哪一方式啟用TCP wrapper？",
        "options": {
            "A": "/etc/rc.d/init.d/xinetd restart",
            "B": "依hosts.allow及hosts.deny內容去重新啟用相關服務",
            "C": "只有reboot重新開機方可使用",
            "D": "只要hosts.allow及host.deny存檔即可使用"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "7-03",
        "text": "關於Proxy Server的敘述，下列哪一項錯誤？",
        "options": {
            "A": "架設Proxy可以減少網路瀏覽所佔的頻寬",
            "B": "Proxy Server亦稱為「代理伺服器」",
            "C": "Linux上的Proxy名為「ISA Server」",
            "D": "Proxy Server放至閘道器上亦有防火牆功能"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "7-04",
        "text": "關於Proxy Server的敘述，下列哪些正確？（複選）",
        "options": {
            "A": "Linux上Proxy名為squid",
            "B": "Proxy用戶端TCP/IP設定必須指定Proxy Server IP方可使用",
            "C": "Proxy用戶端只需指定瀏覽器上的Proxy Server即可使用",
            "D": "Proxy Server只能架設Internet配發的實體IP上方可使用"
        },
        "answer": [
            "A",
            "C"
        ],
        "type": "checkbox"
    },
    {
        "id": "7-05",
        "text": "Squid預設的埠號為下列哪一項？",
        "options": {
            "A": "80",
            "B": "3128",
            "C": "8080",
            "D": "443"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "7-06",
        "text": "Squid預設的磁碟快取放置目錄為下列哪一項？",
        "options": {
            "A": "/var/spool/squid",
            "B": "/var/spool/proxy",
            "C": "/etc/squid",
            "D": "/var/lib/proxy"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "7-07",
        "text": "Squid的設定檔位在下列哪一項位置？",
        "options": {
            "A": "/var/proxy/squid.conf",
            "B": "/var/spool/squid.conf",
            "C": "/etc/squid/squid.conf",
            "D": "/etc/proxy/squid.conf"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "7-08",
        "text": "Iptables內定下列哪些為Table？（複選）",
        "options": {
            "A": "Filter",
            "B": "INOUT",
            "C": "NAT",
            "D": "MANGLE"
        },
        "answer": [
            "A",
            "C",
            "D"
        ],
        "type": "checkbox"
    },
    {
        "id": "7-09",
        "text": "Iptables中Filter包括下列哪些Chain？（複選）",
        "options": {
            "A": "INPUT",
            "B": "OUTPUT",
            "C": "NAT",
            "D": "FORWARD"
        },
        "answer": [
            "A",
            "B",
            "D"
        ],
        "type": "checkbox"
    },
    {
        "id": "7-10",
        "text": "Iptables中NAT包括下列哪些Chain？（複選）",
        "options": {
            "A": "INPUT",
            "B": "OUTPUT",
            "C": "PREROUTING",
            "D": "POSTROUTING"
        },
        "answer": [
            "B",
            "C",
            "D"
        ],
        "type": "checkbox"
    },
    {
        "id": "7-11",
        "text": "查看Iptables防火牆是否啟用，可使下列哪一項指令查看？",
        "options": {
            "A": "iptables -L",
            "B": "iptables -F",
            "C": "iptables -D",
            "D": "iptables -P"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "7-12",
        "text": "欲清除全部Iptables的Rule，可使用下列哪一項指令？",
        "options": {
            "A": "iptables -L",
            "B": "iptables -F",
            "C": "iptables -D",
            "D": "iptables -P"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "7-13",
        "text": "下列哪一項不屬於Iptables防火牆封包處理方式？",
        "options": {
            "A": "ACCEPT",
            "B": "DROP",
            "C": "REJECT",
            "D": "DENY"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "7-14",
        "text": "Iptables -A NPUT -p ( ? )，括號中的內容為下列哪些封包類型？（複選）",
        "options": {
            "A": "TCP",
            "B": "UDP",
            "C": "ICMP",
            "D": "HTTP"
        },
        "answer": [
            "A",
            "B",
            "C"
        ],
        "type": "checkbox"
    },
    {
        "id": "7-15",
        "text": "當TCP wrapper在使用時，下列哪一個檔案是用來限制登入的主機？",
        "options": {
            "A": "/etc/deny",
            "B": "/etc/hosts.deny",
            "C": "/etc/ tcp.deny",
            "D": "/etc/tcp_wrappers.deny"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "7-16",
        "text": "當TCP Wrapper在使用時，下列哪一個檔案是用來設定允許登入的主機？",
        "options": {
            "A": "/etc/allow",
            "B": "/etc/tcp_allow",
            "C": "/etc/tcp_wrappers.conf",
            "D": "/etc/hosts.allow"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "7-17",
        "text": "下列哪一項指令，可一次清除所有Iptables的規則？",
        "options": {
            "A": "iptables -F",
            "B": "iptables -Z",
            "C": "iptables -C",
            "D": "iptables -E"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "7-18",
        "text": "Iptables的指令參數中，下列哪一項參數可用來刪除一個非系統內建空鏈？",
        "options": {
            "A": "-D",
            "B": "-X",
            "C": "-M",
            "D": "-F"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "7-19",
        "text": "關於Iptables的指令，設定封包條件的參數敘述，下列哪些正確？（複選）",
        "options": {
            "A": "-i 指定進入的封包類別",
            "B": "-s 指定封包的來源IP位址",
            "C": "-dp 指定封包目的端的埠號",
            "D": "-p 指定所屬封包的類型"
        },
        "answer": [
            "B",
            "D"
        ],
        "type": "checkbox"
    },
    {
        "id": "7-20",
        "text": "關於Iptables的指令，設定處理方式的敘述，下列哪些正確？（複選）",
        "options": {
            "A": "ACCEPT允許該封包通過",
            "B": "DROP丟棄該封包並回應錯誤訊息",
            "C": "SNAT修改封包來源端位址",
            "D": "MASQUERADE將封包進行偽裝處理"
        },
        "answer": [
            "A",
            "C",
            "D"
        ],
        "type": "checkbox"
    },
    {
        "id": "7-21",
        "text": "請問下列哪一項不是Iptables對於連線狀態表示法？",
        "options": {
            "A": "NEW",
            "B": "VALID",
            "C": "ESTABLSHED",
            "D": "RELATED"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "7-22",
        "text": "下列哪些網址需要使用NAT（Network Address Translation）才能將封包傳送出去？（複選）",
        "options": {
            "A": "10.1.1.25",
            "B": "168.192.0.1",
            "C": "172.16.25.36",
            "D": "172.30.14.5"
        },
        "answer": [
            "A",
            "C",
            "D"
        ],
        "type": "checkbox"
    },
    {
        "id": "7-23",
        "text": "關於/etc/hosts.allow及/etc/hosts.deny的設定敘述，下列哪些正確？（複選）",
        "options": {
            "A": "在/etc/hosts.deny檔案中設定ALL:ALL是不被允許的",
            "B": "swat: 192.168.與swat: 192.168.0.0/255.255.0.0的設定是一樣的",
            "C": "若連線來源在/etc/hosts.allow檔即符合規則，就不會繼續檢查/etc/hosts.deny",
            "D": "/etc/hosts.allow及/etc/hosts.deny所設定的條件不可以互相抵觸"
        },
        "answer": [
            "B",
            "C"
        ],
        "type": "checkbox"
    },
    {
        "id": "7-24",
        "text": "如一個封包符合防火牆的規則，此規則中會定義該對此封包如何處置，此種機制在規則中稱為目標。請問下列哪一個不是Iptables的目標？",
        "options": {
            "A": "DROP",
            "B": "REDIRECT",
            "C": "RETURN",
            "D": "DENY"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "7-25",
        "text": "在/etc/hosts.allow裡，下列哪一項是同意讓my.domail的使用者使用in.tftpd？",
        "options": {
            "A": "ALL EXCEPT in.tftpd: .my.domain",
            "B": "in.tftpd: ALL EXCEPT .my.domain",
            "C": "ALL: in.tftpd",
            "D": "in.tftpd: .my.domain"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "7-26",
        "text": "在/etc/hosts.deny裡，下列哪些是同意讓my.domain的使用者使用in.tftpd？（複選）",
        "options": {
            "A": "ALL EXCEPT in.tftpd: .my.domain",
            "B": "in.tftpd: ALL EXCEPT .my.domain",
            "C": "ALL: in.tftpd",
            "D": "in.tftpd: .my.domain"
        },
        "answer": [
            "A",
            "B"
        ],
        "type": "checkbox"
    },
    {
        "id": "7-27",
        "text": "下列哪一種伺服器可以加速Web伺服器的服務？",
        "options": {
            "A": "DHCP",
            "B": "NNTP",
            "C": "NTP",
            "D": "Squid"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "7-28",
        "text": "關於Squid功能的敘述，下列哪些正確？（複選）",
        "options": {
            "A": "減少受歡迎網站連外頻寬的需求",
            "B": "可以利用ACL來控制對外部網站",
            "C": "加速Web伺服器的服務",
            "D": "將郵件寄出"
        },
        "answer": [
            "A",
            "B",
            "C"
        ],
        "type": "checkbox"
    },
    {
        "id": "7-29",
        "text": "若封包通過Iptables中的每一串鏈中的規則而不受影響，則該封包最後的命運由什麼來決定？",
        "options": {
            "A": "預設policy",
            "B": "FORWARD",
            "C": "OUTPUT",
            "D": "INPUT"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "7-30",
        "text": "關於NAT功能的基本設定，下列哪一項正確？",
        "options": {
            "A": "檢查/proc/sys/net/piv4/ip_forward的值是否有被修改成1",
            "B": "檢查/proc/sys/net/piv4/ip_postrouting的值是否有被修改成1",
            "C": "檢查/proc/sys/net/piv4/ip_forward的值是否有被修改成0",
            "D": "檢查/proc/sys/net/piv4/ip_postrouting的值是否有被修改成0"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "7-31",
        "text": "下列哪一項可讓防火牆允許內部網路（網路介面 p3p1、IP位址192.268.1.0/24）可以查詢DNS（Internet接於網路介面p5p2）？",
        "options": {
            "A": "iptables -t filter -A FORWARD -p tcp -o p5p2 -d 0/0 --dport 80 -j ACCEPT",
            "B": "iptables -t filter -A FORWARD -p udp -o p5p2 -d 0/0 --dport 53 -j ACCEPT",
            "C": "iptables -t filter -A FORWARD -p tcp -o p5p2 -d 0/0 --dport 21 -j ACCEPT",
            "D": "iptables -t filter -A INPUT -s 192.268.1.0/24 -i p5p2 --dport 22 -j ACCEPT"
        },
        "answer": [
            "B"
        ],
        "type": "radio"
    },
    {
        "id": "7-32",
        "text": "設定/proc/sys/net/ipv4/ip_forward的檔案內容，其目的為下列哪一項？",
        "options": {
            "A": "使封包可以在p3p0進出",
            "B": "使封包可以在p3p1進出",
            "C": "使封包可以轉換位址",
            "D": "使封包可以通過主機不同的網路介面所連接的網路"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "7-33",
        "text": "為了避免舊的設定規則產生干擾，通常在啟用新的規則之前，會使用下列哪些指令清除內建規則設定？（複選）",
        "options": {
            "A": "iptables -F",
            "B": "iptables -F -t nat",
            "C": "iptables -F -t mangle",
            "D": "iptables -F -t default"
        },
        "answer": [
            "A",
            "B",
            "C"
        ],
        "type": "checkbox"
    },
    {
        "id": "7-34",
        "text": "如附圖所示，為TCP Wrapper的設定，請問下列敘述哪些正確？（複選）",
        "options": {
            "A": "192.168.11.5的IP無法ssh連線",
            "B": "192.168.11.5的IP可以ssh連線",
            "C": "192.168.11.100的IP無法ssh連線",
            "D": "192.168.11.100的IP可以ssh連線"
        },
        "answer": [
            "B",
            "C"
        ],
        "type": "checkbox"
    },
    {
        "id": "7-35",
        "text": "如附圖所示，為TCP Wrapper的設定，請問下列敘述哪些正確？（複選）",
        "options": {
            "A": "192.168.10.20可以Telnet連線",
            "B": "192.168.10.20不可Telnet連線",
            "C": "192.168.20.1可以Telnet連線",
            "D": "192.168.20.1不可Telnet連線"
        },
        "answer": [
            "A",
            "D"
        ],
        "type": "checkbox"
    },
    {
        "id": "7-36",
        "text": "如附圖所示，試問圖中的設定具有下列哪一項意義？",
        "options": {
            "A": "凡192.168.1.0這個C Class的封包均轉向至192.168.2.60",
            "B": "凡經過192.168.2.60的封包均轉向至192.168.1.0這個C Class",
            "C": "把192.168.1.0這個C Class出去的封包均偽裝成192.168.2.60",
            "D": "把192.168.1.0這個C Class的預設路由設為192.168.2.60"
        },
        "answer": [
            "C"
        ],
        "type": "radio"
    },
    {
        "id": "7-37",
        "text": "為了避免就的設定規則產生干擾，通常在啟用新的規則之前，會使用下列哪些指令清除使用者自定的規則設定？（複選）",
        "options": {
            "A": "iptables -X",
            "B": "iptables -t nat -X",
            "C": "iptables -t mangle -X",
            "D": "iptables -t userdef -X"
        },
        "answer": [
            "A",
            "B",
            "C"
        ],
        "type": "checkbox"
    },
    {
        "id": "7-38",
        "text": "假設NAT主機對外的網路介面為p3p1，現在欲擋掉內部網路連接外部TCP port 6667，應使用下列哪一項設定Iptables的規則？",
        "options": {
            "A": "iptables -A OUTPUT -o p3p1 -p tcp –dport 6667 -j DENY",
            "B": "iptables -A OUTPUT -o p3p1 -p tcp –dport 6667 -j DROP",
            "C": "iptables -A FORWARD -o p3p1 -p tcp –dport 6667 -j DENY",
            "D": "iptables -A FORWARD -o p3p1 -p tcp –dport 6667 -j DROP"
        },
        "answer": [
            "D"
        ],
        "type": "radio"
    },
    {
        "id": "7-39",
        "text": "若執行指令iptables-save，則有下列哪一項效果？",
        "options": {
            "A": "會將系統當時的規則輸出到標準輸出",
            "B": "會將當時處理的封包內容輸出到標準輸出",
            "C": "會將filter tables的規則輸出到標準輸出",
            "D": "會將系統當時的封包路由狀態輸出到標準輸出"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "7-40",
        "text": "修改squid.conf之後，欲使新設定生效，應執行下列哪一項命令較為合適？",
        "options": {
            "A": "squid -k reconfigure",
            "B": "squid -k kill",
            "C": "squid -k check",
            "D": "/etc/rc.d/init.d/squid restart"
        },
        "answer": [
            "A"
        ],
        "type": "radio"
    },
    {
        "id": "7-41",
        "text": "下列哪些伺服器軟體可以用來架設Proxy Server？（複選）",
        "options": {
            "A": "Squid",
            "B": "Samba",
            "C": "Apache",
            "D": "Qpopper"
        },
        "answer": [
            "A",
            "C"
        ],
        "type": "checkbox"
    },
    {
        "id": "7-42",
        "text": "關於Table、Chain和Rule的關係，下列哪些正確？（複選）",
        "options": {
            "A": "Rule包含Chain",
            "B": "Table包含Chain",
            "C": "Chain包含Table",
            "D": "Chain包含Rule"
        },
        "answer": [
            "B",
            "D"
        ],
        "type": "checkbox"
    },
    {
        "id": "7-43",
        "text": "請問Iptables中，輸入封包不會經過下列哪些Chain？（複選）",
        "options": {
            "A": "PREROUTING",
            "B": "FORWARD",
            "C": "POSTROUTING",
            "D": "INPUT"
        },
        "answer": [
            "B",
            "C"
        ],
        "type": "checkbox"
    },
    {
        "id": "7-44",
        "text": "請問Iptables中，轉送封包不會經過下列哪些Chain？（複選）",
        "options": {
            "A": "OUTPUT",
            "B": "FORWARD",
            "C": "POSTROUTING",
            "D": "INPUT"
        },
        "answer": [
            "A",
            "D"
        ],
        "type": "checkbox"
    },
    {
        "id": "7-45",
        "text": "反向式代理伺服器（Reverse Proxy）的主要功能為下列哪些？（複選）",
        "options": {
            "A": "伺服器為其服務對象",
            "B": "減輕伺服器的負擔",
            "C": "減輕用戶端的負擔",
            "D": "增加網路的使用效率"
        },
        "answer": [
            "A",
            "B"
        ],
        "type": "checkbox"
    }
];