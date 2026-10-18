
// ==========================================
// 1. Dst Data Configuration
// ==========================================
let roomsData = [
    {
        id: 1,
        name: "Dst-1,2 Quarter",
        floor: "2st Floor",
        addressType: "POP",
        address: "Ga-60/1,Middle Badda, Dhaka",
        mainLine: "UP",
        Generator: "Standby",
        ips: "STANDBY",
        batteryLevel: "100%",
        temp: "22°C",
        ac: "Running",
        pdu: "Normal",
        fan: "OFF",
        light: "OFF",
        door: "Closed",
        window: "Closed",
        ipsList: [
            { id: "IPS-1", ratingWatts: 2400, batteryVoltage: 96, totalAh: 100, chargePercent: 100, brand: "Hamko100", installDate: "2026-08-31" },
            { id: "IPS-2", ratingWatts: 2400, batteryVoltage: 96, totalAh: 45, chargePercent: 100, brand: "Solid45", installDate: "2021-11-11" },
            { id: "IPS-3", ratingWatts: 2400, batteryVoltage: 96, totalAh: 100, chargePercent: 100, brand: "Hamko100", installDate: "2020-01-15" },
            { id: "IPS-4", ratingWatts: 6400, batteryVoltage: 96, totalAh: 100, chargePercent: 100, brand: "Hamko100", installDate: "2026-06-30" }
        ],
        powerSpecs: { systemVoltage: 220, ipsRating: "136000W", batteryCount: "1x 100Ah", oltCount: 4, mikrotikModel: "CCR1036-12G-4S", switchCount: 3 },
        meterInfo: { accountNo: "998231412", balanceBDT: 3420.00, lastRechargeDate: "2026-07-15", type: "Prepaid" },
        devices: { olt: "Online", mikrotik: "Online", switch: "Online", camera: "Online" },
        inventory: [
            { device: "IPS-1 (2400W3K DGLOG)", serial: "IPS-96V-88219", installDate: "15-Jan-2022", warranty: "Active", watt: 0, sources: ["Grid"] },
            { device: "IPS-2 (2400W3K DGLOG)", serial: "IPS-96V-88219", installDate: "15-Jan-2023", warranty: "Active", watt: 0, sources: ["Grid"] },
            { device: "IPS-3 (2400W3K Kstar)", serial: "IPS-96V-88219", installDate: "15-Jan-2020", warranty: "Active", watt: 0, sources: ["Grid"] },
            { device: "IPS-4 (6400W8K Non-Brand)", serial: "IPS-96V-88219", installDate: "15-Jan-2026", warranty: "Active", watt: 0, sources: ["Grid"] },
            { device: "ATS (Double Source)", serial: "IPS-96V-88219", installDate: "15-Jan-2026", warranty: "Active", sources: ["IPS-3", "IPS-4"] },
            { device: "OLT Huawei-1&3-A", serial: "OLT-Huawei-5521", installDate: "20-Aug-2020", warranty: "Active", watt: 500, maxwatt: 1500, avgWatt: 500, sources: ["ATS"] },
            { device: "OLT Huawei-2A", serial: "OLT-HUAWEI-5521", installDate: "20-Aug-2021", warranty: "Active", watt: 200, maxwatt: 1000, avgWatt: 200, sources: ["ATS"] },
            { device: "OLT Huawei-2B", serial: "OLT-HUAWEI-5521", installDate: "20-Aug-2023", warranty: "Active", watt: 200, maxwatt: 1000, avgWatt: 200, sources: ["ATS"] },
            { device: "OLT BDCOM-5", serial: "OLT-BDCOM-5521", installDate: "20-Aug-2021", warranty: "Active", watt: 70, maxwatt: 220, avgWatt: 70, sources: ["IPS-1", "IPS-2"] },
            { device: "MikroTik CCR1036", serial: "MT-1036-3392", installDate: "01-Mar-2023", warranty: "Expired", watt: 70, maxwatt: 220, avgWatt: 70, sources: ["IPS-1", "IPS-2"] },
            { device: "MikroTik CCR1036", serial: "MT-1036-3392", installDate: "01-Mar-2023", warranty: "Expired", watt: 70, maxwatt: 220, avgWatt: 70, sources: ["IPS-2", "IPS-3"] },
            { device: "MikroTik CCR1036", serial: "MT-1036-3392", installDate: "01-Mar-2023", warranty: "Expired", watt: 70, maxwatt: 220, avgWatt: 70, sources: ["IPS-3", "IPS-4"] },
            { device: "MikroTik CCR1036", serial: "MT-1036-3392", installDate: "01-Mar-2023", warranty: "Expired", watt: 70, maxwatt: 220, avgWatt: 70, sources: ["IPS-3", "IPS-1"] },
            { device: "MikroTik Server", serial: "MT-1036-3392", installDate: "01-Mar-2023", warranty: "Expired", watt: 160, maxWatt: 750, avgWatt: 160, sources: ["IPS-1", "IPS-2"] },
            { device: "MikroTik Server", serial: "MT-1036-3392", installDate: "01-Mar-2023", warranty: "Expired", watt: 160, maxWatt: 750, avgWatt: 160, sources: ["IPS-4", "IPS-3"] },
            { device: "MikroTik Server", serial: "MT-1036-3392", installDate: "01-Mar-2023", warranty: "Expired", watt: 160, maxWatt: 750, avgWatt: 160, sources: ["IPS-4", "IPS-2"] },
            { device: "MikroTik Server", serial: "MT-1036-3392", installDate: "01-Mar-2023", warranty: "Expired", watt: 160, maxWatt: 750, avgWatt: 160, sources: ["IPS-3", "IPS-4"] },
            { device: "MikroTik Server", serial: "MT-1036-3392", installDate: "01-Mar-2023", warranty: "Expired", watt: 160, maxWatt: 750, avgWatt: 160, sources: ["IPS-4", "ATS"] },
            { device: "MikroTik Server", serial: "MT-1036-3392", installDate: "01-Mar-2023", warranty: "Expired", watt: 160, maxWatt: 750, avgWatt: 160, sources: ["IPS-1", "IPS-4"] },
            { device: "MikroTik Server", serial: "MT-1036-3392", installDate: "01-Mar-2023", warranty: "Expired", watt: 160, maxWatt: 750, avgWatt: 160, sources: ["IPS-2", "IPS-4"] },
            { device: "Switch Cisco", serial: "MT-xxxxxxxxx", installDate: "00.00.0000", warranty: "Expired", watt: 120, maxWatt: 650, avgWatt: 120, sources: ["ATS", "IPS-2"] },
            { device: "Switch Cisco", serial: "MT-xxxxxxxxx", installDate: "00.00.0000", warranty: "Expired", watt: 120, maxWatt: 650, avgWatt: 120, sources: ["IPS-3", "IPS-4"] },
            { device: "Switch Cisco", serial: "MT-xxxxxxxxx", installDate: "00.00.0000", warranty: "Expired", watt: 120, maxWatt: 650, avgWatt: 120, sources: ["IPS-1", "IPS-4"] },
            { device: "Switch Cisco", serial: "MT-xxxxxxxxx", installDate: "00.00.0000", warranty: "Expired", watt: 120, maxWatt: 650, avgWatt: 120, sources: ["IPS-1", "IPS-2"] },


        ]
    },

     {
        id: 2,
        name: "Dst-2Main Office",
        floor: "2st Floor",
        addressType: "Office",
        address: "2nd floor, House-01, Road-04, Ghudarghat,Gulshan-Badda-Link-Road, Dhaka",
        mainLine: "UP",
        Generator: "Standby",
        ips: "STANDBY",
        batteryLevel: "100%",
        temp: "22°C",
        ac: "Running",
        pdu: "Normal",
        fan: "OFF",
        light: "OFF",
        door: "Closed",
        window: "Closed",
        ipsList: [
            { id: "IPS-1", ratingWatts: 12000, batteryVoltage: 192, totalAh: 80, chargePercent: 100, brand: "Hamko80", installDate: "2023-01-01" },
            { id: "IPS-2", ratingWatts: 3200, batteryVoltage: 48, totalAh: 200, chargePercent: 100, brand: "Hamko200", installDate: "2026-10-20" },
            { id: "IPS-3", ratingWatts: 1600, batteryVoltage: 24, totalAh: 200, chargePercent: 100, brand: "Hamko200", installDate: "2020-01-15" },
        ],
        powerSpecs: { systemVoltage: 220, ipsRating: "15200W", batteryCount: "8x 100Ah", oltCount: 4, mikrotikModel: "CCR1036-12G-4S", switchCount: 3 },
        meterInfo: { accountNo: "998231412", balanceBDT: 3420.00, lastRechargeDate: "2026-07-15", type: "Prepaid" },
        devices: { olt: "Online", mikrotik: "Online", switch: "Online", camera: "Online" },
        inventory: [
            { device: "IPS-1(12000W12K Kstar)", serial: "IPS-192V-88219", installDate: "15-Jan-2022", warranty: "Active", watt: 0, sources: ["Grid"] },
            { device: "IPS-2(3200W4K Non-Brand)", serial: "IPS-48V-88219", installDate: "20-Oct-2026", warranty: "Active", watt: 0, sources: ["Grid"] },
            { device: "IPS-3(1600W2K DGLog)", serial: "IPS-924V-88219", installDate: "15-Jan-2020", warranty: "Active", watt: 0, sources: ["Grid"] },
            { device: "MikroTik CCR1036", serial: "MT-1036-3392", installDate: "01-Mar-2023", warranty: "Expired", watt: 250, maxWatt: 750, avgWatt: 250, sources:["IPS-1","IPS-2"]},
            { device: "Switch Cisco", serial: "MT-xxxxxxxxx", installDate: "00.00.0000", warranty: "Expired", watt: 120, maxWatt: 650, avgWatt: 120, sources: ["IPS-1", "IPS-2"] }, 
            { device: "Switch Cisco", serial: "MT-xxxxxxxxx", installDate: "00.00.0000", warranty: "Expired", watt: 120, maxWatt: 650, avgWatt: 120, sources: ["IPS-1", "IPS-2"] },
            { device: "Switch Cisco", serial: "MT-xxxxxxxxx", installDate: "00.00.0000", warranty: "Expired", watt: 120, maxWatt: 650, avgWatt: 120, sources: ["IPS-1", "IPS-2"] },
            { device: "Switch Cisco", serial: "MT-xxxxxxxxx", installDate: "00.00.0000", warranty: "Expired", watt: 120, maxWatt: 650, avgWatt: 120, sources: ["IPS-1", "IPS-2"] },
            { device: "Switch Cisco", serial: "MT-xxxxxxxxx", installDate: "00.00.0000", warranty: "Expired", watt: 120, maxWatt: 650, avgWatt: 120, sources: ["IPS-1", "IPS-2"] },
            { device: "Switch Cisco", serial: "MT-xxxxxxxxx", installDate: "00.00.0000", warranty: "Expired", watt: 120, maxWatt: 650, avgWatt: 120, sources: ["IPS-1", "IPS-2"] },
            { device: "Switch Cisco", serial: "MT-xxxxxxxxx", installDate: "00.00.0000", warranty: "Expired", watt: 90, maxWatt: 440, avgWatt: 90, sources: ["IPS-1", "IPS-2"] },
            { device: "Switch Cisco", serial: "MT-xxxxxxxxx", installDate: "00.00.0000", warranty: "Expired", watt: 90, maxWatt: 440, avgWatt: 90, sources: ["IPS-1", "IPS-2"] },
            { device: "Switch Cisco", serial: "MT-xxxxxxxxx", installDate: "00.00.0000", warranty: "Expired", watt: 90, maxWatt: 440, avgWatt: 90, sources: ["IPS-1", "IPS-2"] },
            { device: "MikroTik Server", serial: "MT-1036-3392", installDate: "01-Mar-2023", warranty: "Expired", watt: 160, maxWatt: 750, avgWatt: 160, sources: ["IPS-1", "IPS-2"] },
            { device: "MikroTik Server", serial: "MT-1036-3392", installDate: "01-Mar-2023", warranty: "Expired", watt: 160, maxWatt: 750, avgWatt: 160, sources: ["IPS-1", "IPS-2"] },
            { device: "MikroTik Server", serial: "MT-1036-3392", installDate: "01-Mar-2023", warranty: "Expired", watt: 160, maxWatt: 750, avgWatt: 160, sources: ["IPS-1", "IPS-2"] },
            { device: "MikroTik Server", serial: "MT-1036-3392", installDate: "01-Mar-2023", warranty: "Expired", watt: 160, maxWatt: 750, avgWatt: 160, sources: ["IPS-1", "IPS-2"] },
            { device: "MikroTik Server", serial: "MT-1036-3392", installDate: "01-Mar-2023", warranty: "Expired", watt: 160, maxWatt: 750, avgWatt: 160, sources: ["IPS-1", "IPS-2"] },
            { device: "MikroTik Server", serial: "MT-1036-3392", installDate: "01-Mar-2023", warranty: "Expired", watt: 160, maxWatt: 750, avgWatt: 160, sources: ["IPS-1", "IPS-2"] },
            { device: "MikroTik CCR000000", serial: "MT-xxxxxxxyz", installDate: "00.00.0000", warranty: "Expired", watt: 70, maxWatt: 220, avgWatt: 70, sources: ["IPS-1", "IPS-2"] },
            { device: "MikroTik CCR000000", serial: "MT-xxxxxxxyz", installDate: "00.00.0000", warranty: "Expired", watt: 70, maxWatt: 220, avgWatt: 70, sources: ["IPS-1", "IPS-2"] },
            { device: "MikroTik CCR000000", serial: "MT-xxxxxxxyz", installDate: "00.00.0000", warranty: "Expired", watt: 70, maxWatt: 220, avgWatt: 70, sources: ["IPS-1", "IPS-2"] },
            { device: "MVR", serial: "MV-xxxxxxxyz", installDate: "00.00.0000", warranty: "Expired", watt: 100, maxWatt: 440, avgWatt: 10, sources: ["", "IPS-2"] },
            { device: "MVR", serial: "MV-xxxxxxxyz", installDate: "00.00.0000", warranty: "Expired", watt: 100, maxWatt: 440, avgWatt: 10, sources: ["", "IPS-2"] },
            { device: "nocRoom-PC", serial: "0000000000000", installDate: "00000000000000", warranty: "Expired", watt: 300, maxWatt: 750, avgWatt: 300, sources:["IPS-1",""]},
            { device: "suRoom-PC", serial: "0000000000000", installDate: "00000000000000", warranty: "Expired", watt: 700, maxWatt: 1000, avgWatt: 700, sources:["IPS-1",""]},
            { device: "Billing-PC", serial: "0000000000000", installDate: "00000000000000", warranty: "Expired",  watt: 800, maxWatt: 1500, avgWatt: 800, sources:["IPS-3",""]}
        ]
    },

    {
        id: 3,
        name: "Dst-1 Uttar Badda",
        floor: "2nd Floor",
        addressType: "POP",
        address: "Girza Road, Cha-16, Dhaka",
        mainLine: "UP",
        ips: "STANDBY",
        batteryLevel: "100%",
        temp: "21°C",
        ac: "No",
        pdu: "Normal",
        fan: "On",
        light: "OFF",
        door: "OPEN ⚠️",
        window: "Closed",
        ipsList: [
            { id: "IPS-1", ratingWatts: 2400, batteryVoltage: 24, totalAh: 200, chargePercent: 100, brand: "Hamko200", installDate: "2025-01-09" },
           
        ],
        powerSpecs: { systemVoltage: 220, ipsRating: "2400W", batteryCount: "2x 200Ah", oltCount: 1, mikrotikModel: "CCR1036-12G-4S", switchCount: 1 },
        meterInfo: { accountNo: "998231412", balanceBDT: 340.00, lastRechargeDate: "2026-08-15", type: "Prepaid" },
        devices: { olt: "Online", mikrotik: "Online", switch: "Online", camera: "Online" },
        inventory: [
            { device: "IPS-1 (2400W3K Non-Brand)", serial: "IPS-24V-2001", installDate: "15-Jan-2022", warranty: "Active", watt: 0, sources: ["Grid"] },
            { device: "OLT Huawei-1B", serial: "OLT-Huawei-5521", installDate: "20-Aug-2020", warranty: "Active", watt: 220, maxWatt: 1000, avgWatt: 220, sources: ["IPS-1", ""] },
            { device: "MikroTik Server", serial: "MT-1036-3392", installDate: "01-Mar-2023", warranty: "Expired", watt: 180, maxWatt: 750, avgWatt: 180, sources: ["IPS-1", "Grid"] },
            { device: "Switch SWT000000", serial: "MT-xxxxxxxxx", installDate: "00.00.0000", warranty: "Expired", watt: 120, maxWatt: 550, avgWatt: 120, sources: ["IPS-1", "Grid"] }, 
            { device: "Switch SWT000000", serial: "MT-xxxxxxxxx", installDate: "00.00.0000", warranty: "Expired", watt: 120, maxWatt: 550, avgWatt: 120, sources: ["IPS-1", "Grid"] }, 
        ]
    },

{
        id: 4,
        name: "Dst-3B Adarshanagar",
        floor: "8th Floor",
        addressType: "POP",
        address: "Friends Garden, Dhaka",
        mainLine: "UP",
        ips: "STANDBY",
        batteryLevel: "100%",
        temp: "21°C",
        ac: "Running",
        pdu: "Normal",
        fan: "On",
        light: "OFF",
        door: "Closed ⚠️",
        window: "Closed",
        ipsList: [
            { id: "IPS-1", ratingWatts: 2400, batteryVoltage: 24, totalAh: 200, chargePercent: 100, brand: "Hamko200", installDate: "2025-07-01" },
           
        ],
        powerSpecs: { systemVoltage: 220, ipsRating: "2400W", batteryCount: "1x 200Ah", oltCount: 1, mikrotikModel: "CCR1036-12G-4S", switchCount: 1 },
        meterInfo: { accountNo: "998231412", balanceBDT: 340.00, lastRechargeDate: "2026-08-15", type: "Prepaid" },
        devices: { olt: "Online", mikrotik: "Online", switch: "Online", camera: "Online" },
        inventory: [
            { device: "IPS-1 (2400W3K Non-Brand)", serial: "IPS-24V-2001", installDate: "15-Jan-2022", warranty: "Active", watt: 0, sources: ["Grid"] },
            { device: "OLT Huawei-1B", serial: "OLT-Huawei-5521", installDate: "20-Aug-2020", warranty: "Active", watt: 220, maxWatt: 1000, avgWatt: 220, sources: ["IPS-1", ""] },
            { device: "MikroTik Series", serial: "MT-1036-3392", installDate: "01-Mar-2023", warranty: "Expired", watt: 180, maxWatt: 750, avgWatt: 180, sources: ["IPS-1", "Grid"] },
            { device: "Switch SWT000000", serial: "MT-xxxxxxxxx", installDate: "00.00.0000", warranty: "Expired", watt: 120, maxWatt: 550, avgWatt: 120, sources: ["IPS-1", "Grid"] }, 
            { device: "Switch SWT000000", serial: "MT-xxxxxxxxx", installDate: "00.00.0000", warranty: "Expired", watt: 120, maxWatt: 550, avgWatt: 120, sources: ["IPS-1", "Grid"] }, 
        ]
    },


    {
        id: 5,
        name: "Dst-4 Shahajadpur",
        floor: "5th Floor",
        addressType: "POP",
        address: "Shantinibas, Dhaka",
        mainLine: "UP",
        ips: "STANDBY",
        batteryLevel: "100%",
        temp: "21°C",
        ac: "No",
        pdu: "Normal",
        fan: "On",
        light: "OFF",
        door: "OPEN ⚠️",
        window: "Closed",
        ipsList: [
            { id: "IPS-1", ratingWatts: 1600, batteryVoltage: 24, totalAh: 200, chargePercent: 100, brand: "Hamko200", installDate: "2023-01-15" },
           
        ],
        powerSpecs: { systemVoltage: 220, ipsRating: "1600W", batteryCount: "1x 200Ah", oltCount: 1, mikrotikModel: "CCR1036-12G-4S", switchCount: 1 },
        meterInfo: { accountNo: "998231412", balanceBDT: 1400.00, lastRechargeDate: "2026-08-15", type: "Prepaid" },
        devices: { olt: "Online", mikrotik: "Online", switch: "Online", camera: "Online" },
        inventory: [
            { device: "IPS-1 (1600W2K DGLOG)", serial: "IPS-24V-4001", installDate: "15-Jan-2022", warranty: "Active", watt: 0, sources: ["Grid"] },
            { device: "OLT DBC", serial: "OLT-DBC-xxxxxxxx", installDate: "00.00.0000", warranty: "Active", watt: 100, maxWatt: 440, avgWatt: 100, sources: ["IPS-1", "Grid"] },
            { device: "MikroTik CCR000000", serial: "MT-xxxxxxxxx", installDate: "00.00.0000", warranty: "Expired", watt: 70, maxWatt: 220, avgWatt: 70, sources: ["IPS-1", "Grid"] },
            { device: "MikroTik CCR000000", serial: "MT-xxxxxxxyz", installDate: "00.00.0000", warranty: "Expired", watt: 70, maxWatt: 220, avgWatt: 70, sources: ["IPS-1", "Grid"] },
            { device: "Switch SWT000000", serial: "MT-xxxxxxxxx", installDate: "00.00.0000", warranty: "Expired", watt: 170, maxWatt: 550, avgWatt: 170, sources: ["IPS-1", "Grid"] },
        ]
    },

     {
        id: 7,
        name: "Dst-7D-POP Bashundhara",
        floor: "2nd Floor",
        addressType: "POP",
        address: "House-01, Road-4, BLOCK-D, Bashundhara, Dhaka",
        mainLine: "UP",
        ips: "STANDBY",
        batteryLevel: "100%",
        temp: "21°C",
        ac: "Running",
        pdu: "Normal",
        fan: "On",
        light: "OFF",
        door: "OPEN ⚠️",
        window: "Closed",
        ipsList: [
            { id: "IPS-1", ratingWatts: 2400, batteryVoltage: 24, totalAh: 200, chargePercent: 100, brand: "Hamko200", installDate: "2026-04-22" },
           
        ],
        powerSpecs: { systemVoltage: 220, ipsRating: "2400W", batteryCount: "1x 200Ah", oltCount: 1, mikrotikModel: "CCR1036-12G-4S", switchCount: 1 },
        meterInfo: { accountNo: "998231412", balanceBDT: 1340.00, lastRechargeDate: "2026-08-15", type: "Prepaid" },
        devices: { olt: "Online", mikrotik: "Online", switch: "Online", camera: "Online" },
        inventory: [
            { device: "IPS-1 (2400W3K Non-Brand)", serial: "IPS-24V-4001", installDate: "15-Jan-2022", warranty: "Active", watt: 0, sources: ["Grid"] },
            { device: "OLT VSOL", serial: "OLT-DBC-xxxxxxxx", installDate: "00.00.0000", warranty: "Active", watt: 100, maxWatt: 440, avgWatt: 100, sources: ["IPS-1", "Grid"] },
            { device: "MikroTik CCR000000", serial: "MT-xxxxxxxxx", installDate: "00.00.0000", warranty: "Expired", watt: 70, maxWatt: 220, avgWatt: 70, sources: ["IPS-1", "Grid"] },
            { device: "MikroTik CCR000000", serial: "MT-xxxxxxxyz", installDate: "00.00.0000", warranty: "Expired", watt: 70, maxWatt: 220, avgWatt: 70, sources: ["IPS-1", "Grid"] },
            { device: "Switch SWT000000", serial: "MT-xxxxxxxxx", installDate: "00.00.0000", warranty: "Expired", watt: 160, maxWatt: 550, avgWatt: 160, sources: ["IPS-1", "Grid"] },
        ]
    },

     {
        id: 7,
        name: "Dst-7K-POP Bashundhara",
        floor: "1st Floor",
        addressType: "POP",
        address: "House-01, Road-4, BLOCK-G, Bashundhara, Dhaka",
        mainLine: "UP",
        ips: "STANDBY",
        batteryLevel: "100%",
        temp: "21°C",
        ac: "Not working",
        pdu: "Normal",
        fan: "On",
        light: "OFF",
        door: "OPEN ⚠️",
        window: "Closed",
        ipsList: [
            { id: "IPS-1", ratingWatts: 2400, batteryVoltage: 24, totalAh: 200, chargePercent: 100, brand: "Hamko200", installDate: "2025-06-18" },
           
        ],
        powerSpecs: { systemVoltage: 220, ipsRating: "2400W", batteryCount: "1x 200Ah", oltCount: 1, mikrotikModel: "CCR1036-12G-4S", switchCount: 1 },
        meterInfo: { accountNo: "998231412", balanceBDT: 340.00, lastRechargeDate: "2026-08-15", type: "Prepaid" },
        devices: { olt: "Online", mikrotik: "Online", switch: "Online", camera: "Online" },
        inventory: [
            { device: "IPS-1 (2400W3K Non-Brand)", serial: "IPS-24V-4001", installDate: "15-Jan-2022", warranty: "Active", watt: 0, sources: ["Grid"] },
            { device: "OLT Huawei", serial: "OLT-Huawei-5521", installDate: "20-Aug-2020", warranty: "Active", watt: 200, maxWatt: 1000, avgWatt: 200, sources: ["IPS-1", ""] },
            { device: "MikroTik CCR000000", serial: "MT-xxxxxxxxx", installDate: "00.00.0000", warranty: "Expired", watt: 70, maxWatt: 220, avgWatt: 70, sources: ["IPS-1", "Grid"] },
            { device: "MikroTik CCR000000", serial: "MT-xxxxxxxyz", installDate: "00.00.0000", warranty: "Expired", watt: 70, maxWatt: 220, avgWatt: 70, sources: ["IPS-1", "Grid"] },
            { device: "Switch SWT000000", serial: "MT-xxxxxxxxx", installDate: "00.00.0000", warranty: "Expired", watt: 160, maxWatt: 550, avgWatt: 160, sources: ["IPS-1", ""] },
        ]
    },

     {
        id: 7,
        name: "Dst-7I-POP Bashundhara",
        floor: "2nd Floor",
        addressType: "POP",
        address: "House-01, Road-4, BLOCK-I, Bashundhara, Dhaka",
        mainLine: "UP",
        ips: "STANDBY",
        batteryLevel: "100%",
        temp: "21°C",
        ac: "N/A",
        pdu: "Normal",
        fan: "On",
        light: "OFF",
        door: "OPEN ⚠️",
        window: "Closed",
        ipsList: [
            { id: "IPS-1", ratingWatts: 2400, batteryVoltage: 24, totalAh: 100, chargePercent: 100, brand: "Hamko100", installDate: "2023-09-15" },
           
        ],
        powerSpecs: { systemVoltage: 220, ipsRating: "2400W", batteryCount: "1x 100Ah", oltCount: 1, mikrotikModel: "CCR1036-12G-4S", switchCount: 1 },
        meterInfo: { accountNo: "998231412", balanceBDT: 340.00, lastRechargeDate: "2026-08-15", type: "Prepaid" },
        devices: { olt: "Online", mikrotik: "Online", switch: "Online", camera: "Online" },
        inventory: [
            { device: "IPS-1 (1600W2K DGLOG)", serial: "IPS-24V-4001", installDate: "15-Jan-2022", warranty: "Active", watt: 0, sources: ["Grid"] },
            { device: "OLT DBC", serial: "OLT-DBC-xxxxxxxx", installDate: "00.00.0000", warranty: "Active", watt: 100, maxWatt: 440, avgWatt: 100, sources: ["IPS-1", "Grid"] },
            { device: "MikroTik CCR000000", serial: "MT-xxxxxxxxx", installDate: "00.00.0000", warranty: "Expired", watt: 70, maxWatt: 220, avgWatt: 70, sources: ["IPS-1", "Grid"] },
            { device: "Switch SWT000000", serial: "MT-xxxxxxxxx", installDate: "00.00.0000", warranty: "Expired", watt: 160, maxWatt: 550, avgWatt: 160, sources: ["IPS-1", "Grid"] },
        ]
    },

     {
        id: 8,
        name: "Dst-8 Satarkul",
        floor: "5th Floor",
        addressType: "POP",
        address: "DIU Road, Satarkul, Dhaka",
        mainLine: "UP",
        ips: "STANDBY",
        batteryLevel: "100%",
        temp: "21°C",
        ac: "No",
        pdu: "Normal",
        fan: "On",
        light: "OFF",
        door: "OPEN ⚠️",
        window: "Closed",
        ipsList: [
            { id: "IPS-1", ratingWatts: 2400, batteryVoltage: 24, totalAh: 200, chargePercent: 100, brand: "Hamko200", installDate: "2026-01-01" },
           
        ],
        powerSpecs: { systemVoltage: 220, ipsRating: "2400W", batteryCount: "1x 200Ah", oltCount: 1, mikrotikModel: "CCR1036-12G-4S", switchCount: 1 },
        meterInfo: { accountNo: "998231412", balanceBDT: 340.00, lastRechargeDate: "2026-08-15", type: "Prepaid" },
        devices: { olt: "Online", mikrotik: "Online", switch: "Online", camera: "Online" },
        inventory: [
            { device: "IPS-1 (2400W3k Non-Brand)", serial: "IPS-24V-4001", installDate: "15-Jan-2022", warranty: "Active", watt: 0, sources: ["Grid"] },
            { device: "OLT DBC", serial: "OLT-DBC-xxxxxxxx", installDate: "00.00.0000", warranty: "Active", watt: 150, maxWatt: 500, avgWatt: 150, sources: ["IPS-1", "Grid"] },
            { device: "MikroTik CCR000000", serial: "MT-xxxxxxxyz", installDate: "00.00.0000", warranty: "Expired", watt: 70, maxWatt: 220, avgWatt: 70, sources: ["IPS-1", "Grid"] },
            { device: "Switch SWT000000", serial: "MT-xxxxxxxxx", installDate: "00.00.0000", warranty: "Expired", watt: 160, maxWatt: 550, avgWatt: 160, sources: ["IPS-1", "Grid"] },
        ]
    },


    {
        id: 9,
        name: "Dst-9 Tejgaon",
        floor: "3rd Floor",
        addressType: "POP",
        address: "Middle Kunipara, Tejgaon, Dhaka",
        mainLine: "UP",
        ips: "STANDBY",
        batteryLevel: "100%",
        temp: "21°C",
        ac: "Running",
        pdu: "Normal",
        fan: "On",
        light: "OFF",
        door: "Closed",
        window: "Closed",
        ipsList: [
            { id: "IPS-1", ratingWatts: 2400, batteryVoltage: 24, totalAh: 200, chargePercent: 100, brand: "Hamko200", installDate: "2025-01-15" },
           
        ],
        powerSpecs: { systemVoltage: 220, ipsRating: "2400W", batteryCount: "1x 200Ah", oltCount: 1, mikrotikModel: "CCR1036-12G-4S", switchCount: 1 },
        meterInfo: { accountNo: "998231412", balanceBDT: 340.00, lastRechargeDate: "2026-08-15", type: "Prepaid" },
        devices: { olt: "Online", mikrotik: "Online", switch: "Online", camera: "Online" },
        inventory: [
            { device: "IPS-1 (2400W3K-RHM)", serial: "IPS-24V-4001", installDate: "15-Jan-2025", warranty: "Active", watt: 0, sources: ["Grid"] },
            { device: "OLT Vsol", serial: "OLT-Vsol-xxxxxxxx", installDate: "00.00.0000", warranty: "Active", watt: 100, maxWatt: 440, avgWatt: 100, sources: ["IPS-1", "Grid"] },
            { device: "OLT DBC", serial: "OLT-DBC-xxxxxxxx", installDate: "00.00.0000", warranty: "Active", watt: 100, maxWatt: 400, avgWatt: 100, sources: ["IPS-1", "Grid"] },
            { device: "MikroTik Server", serial: "MT-xxxxxxxxx", installDate: "00.00.0000", warranty: "Expired", watt: 170, maxWatt: 750, avgWatt: 170, sources: ["IPS-1", "Grid"] },
            { device: "MikroTik CCR000000", serial: "MT-xxxxxxxyz", installDate: "00.00.0000", warranty: "Expired", watt: 60, maxWatt: 220, avgWatt: 60, sources: ["IPS-1", "Grid"] },
            { device: "Switch SWT000000", serial: "MT-xxxxxxxxx", installDate: "00.00.0000", warranty: "Expired", watt: 100, maxWatt: 550, avgWatt: 100, sources: ["IPS-1", "Grid"] },
        ]
    },

     {
        id: 17,
        name: "Dst-17 Vatara",
        floor: "G Floor",
        addressType: "POP",
        address: "Akotanibash, Road, BLOCK-B, ShyedNagor, Dhaka",
        mainLine: "UP",
        ips: "STANDBY",
        batteryLevel: "100%",
        temp: "21°C",
        ac: "N/A",
        pdu: "Normal",
        fan: "On",
        light: "OFF",
        door: "OPEN ⚠️",
        window: "Closed",
        ipsList: [
            { id: "IPS-1", ratingWatts: 2400, batteryVoltage: 24, totalAh: 200, chargePercent: 100, brand: "Hamko200", installDate: "2025-06-25" },
           
        ],
        powerSpecs: { systemVoltage: 220, ipsRating: "2400W", batteryCount: "1x 200Ah", oltCount: 1, mikrotikModel: "CCR1036-12G-4S", switchCount: 1 },
        meterInfo: { accountNo: "998231412", balanceBDT: 340.00, lastRechargeDate: "2026-08-15", type: "Prepaid" },
        devices: { olt: "Online", mikrotik: "Online", switch: "Online", camera: "Online" },
        inventory: [
            { device: "IPS-1 (2400W3K Non-Brand)", serial: "IPS-24V-4001", installDate: "09-Jan-2025", warranty: "Active", watt: 0, sources: ["Grid"] },
            { device: "OLT DBC", serial: "OLT-DBC-xxxxxxxx", installDate: "00.00.0000", warranty: "Active", watt: 80, maxWatt: 400, avgWatt: 80, sources: ["IPS-1", "Grid"] },
            { device: "MikroTik CCR000000", serial: "MT-xxxxxxxxx", installDate: "00.00.0000", warranty: "Expired", watt: 70, maxWatt: 220, avgWatt: 70, sources: ["IPS-1", "Grid"] },
             { device: "Switch SWT000000", serial: "MT-xxxxxxxxx", installDate: "00.00.0000", warranty: "Expired", watt: 150, maxWatt: 550, avgWatt: 150, sources: ["IPS-1", "Grid"] }, 
        ]
    },


    {
        id: 18,
        name: "Dst-18 Alirmor",
        floor: "4th Floor",
        addressType: "POP",
        address: "GM Bari, Satarkul Road, Uttar Badda, Dhaka",
        mainLine: "UP",
        ips: "STANDBY",
        batteryLevel: "100%",
        temp: "21°C",
        ac: "N/A",
        pdu: "Normal",
        fan: "On",
        light: "OFF",
        door: "OPEN ⚠️",
        window: "Closed",
        ipsList: [
            { id: "IPS-1", ratingWatts: 2400, batteryVoltage: 24, totalAh: 200, chargePercent: 100, brand: "Lucas200", installDate: "2023-05-01" },
           
        ],
        powerSpecs: { systemVoltage: 220, ipsRating: "2400W", batteryCount: "1x 200Ah", oltCount: 1, mikrotikModel: "CCR1036-12G-4S", switchCount: 1 },
        meterInfo: { accountNo: "998231412", balanceBDT: 340.00, lastRechargeDate: "2026-08-15", type: "Prepaid" },
        devices: { olt: "Online", mikrotik: "Online", switch: "Online", camera: "Online" },
        inventory: [
            { device: "IPS-1 (2400W3K Non-Brand)", serial: "IPS-24V-4001", installDate: "09-Jan-2025", warranty: "Active", watt: 0, sources: ["Grid"] },
            { device: "OLT BDCOM", serial: "OLT-DBC-xxxxxxxx", installDate: "00.00.0000", warranty: "Active", watt: 80, maxWatt: 440, avgWatt: 80, sources: ["IPS-1", "Grid"] },
            { device: "MikroTik CCR000000", serial: "MT-xxxxxxxxx", installDate: "00.00.0000", warranty: "Expired", watt: 70, maxWatt: 220, avgWatt: 70, sources: ["IPS-1", "Grid"] },
            { device: "Switch SWT000000", serial: "MT-xxxxxxxxx", installDate: "00.00.0000", warranty: "Expired", watt: 150, maxWatt: 550, avgWatt: 150, sources: ["IPS-1", "Grid"] }, 
            { device: "Fan FA000000", serial: "MT-xxxxxxxxx", installDate: "00.00.0000", warranty: "Expired", watt: 60, maxWatt: 80, avgWatt: 60, sources: ["IPS-1", ""] },
        ]
    },


    {
        id: 21,
        name: "Dst-21 Reing ICT",
        floor: "G Floor",
        addressType: "POP",
        address: "Chaudharypara, Malibag, Dhaka",
        mainLine: "UP",
        ips: "STANDBY",
        batteryLevel: "100%",
        temp: "21°C",
        ac: "N/A",
        pdu: "Normal",
        fan: "On",
        light: "OFF",
        door: "OPEN ⚠️",
        window: "Closed",
        ipsList: [
            { id: "IPS-1", ratingWatts: 3200, batteryVoltage: 48, totalAh: 200, chargePercent: 100, brand: "Hamko200", installDate: "2023-05-01" },
           
        ],
        powerSpecs: { systemVoltage: 220, ipsRating: "3200W", batteryCount: "1x 200Ah", oltCount: 1, mikrotikModel: "CCR1036-12G-4S", switchCount: 1 },
        meterInfo: { accountNo: "998231412", balanceBDT: 340.00, lastRechargeDate: "2026-08-15", type: "Prepaid" },
        devices: { olt: "Online", mikrotik: "Online", switch: "Online", camera: "Online" },
        inventory: [
            { device: "IPS-1 (3200W4K DGLOG)", serial: "IPS-48V-4001", installDate: "09-Jan-2025", warranty: "Active", watt: 0, sources: ["Grid"] },
            { device: "OLT Huawei", serial: "OLT-HWI-xxxxxxxx", installDate: "00.00.0000", warranty: "Active", watt: 200, maxWatt: 1000, avgWatt: 200, sources: ["IPS-1", ""] },
            { device: "MikroTik", serial: "DL-xxxxxxxxx", installDate: "00.00.0000", warranty: "Expired", watt: 180, maxWatt: 750, avgWatt: 180, sources: ["IPS-1", "Grid"] },
            { device: "Server DELL", serial: "DL-xxxxxxxxx", installDate: "00.00.0000", warranty: "Expired", watt: 160, maxWatt: 550, avgWatt: 160, sources: ["IPS-1", "Grid"] },
            { device: "Switch BDCOM", serial: "MT-xxxxxxxxx", installDate: "00.00.0000", warranty: "Expired", watt: 150, maxWatt: 440, avgWatt: 150, sources: ["IPS-1", "Grid"] }, 
            { device: "Switch Cisco", serial: "CS-xxxxxxxxx", installDate: "00.00.0000", warranty: "Expired", watt: 150, maxWatt: 500, avgWatt: 150, sources: ["IPS-1", "Grid"] },
        ]
    },


    {
        id: 22,
        name: "Dst-22 Banasree",
        floor: "3rd Floor",
        addressType: "POP",
        address: "Block-B, Road-01, Banasree, Dhaka",
        mainLine: "UP",
        ips: "STANDBY",
        batteryLevel: "100%",
        temp: "21°C",
        ac: "N/A",
        pdu: "Normal",
        fan: "On",
        light: "OFF",
        door: "OPEN ⚠️",
        window: "Closed",
        ipsList: [
            { id: "IPS-1", ratingWatts: 2400, batteryVoltage: 24, totalAh: 200, chargePercent: 100, brand: "Hamko200", installDate: "2026-04-15" },
           
        ],
        powerSpecs: { systemVoltage: 220, ipsRating: "2400W", batteryCount: "1x 200Ah", oltCount: 1, mikrotikModel: "CCR1036-12G-4S", switchCount: 1 },
        meterInfo: { accountNo: "998231412", balanceBDT: 340.00, lastRechargeDate: "2026-08-15", type: "Prepaid" },
        devices: { olt: "Online", mikrotik: "Online", switch: "Online", camera: "Online" },
        inventory: [
            { device: "IPS-1 (2400W3K Non-Brand)", serial: "IPS-24V-2001", installDate: "15-Apr-2026", warranty: "Active", watt: 0, sources: ["Grid"] },
            { device: "OLT DBC", serial: "OLT-DBC-xxxxxxxx", installDate: "00.00.0000", warranty: "Active", watt: 140, maxWatt: 400, avgWatt: 140, sources: ["IPS-1", "Grid"] },
            { device: "OLT VSOL", serial: "OLT-VSL-xxxxxxxx", installDate: "00.00.0000", warranty: "Active", watt: 140, maxWatt: 400, avgWatt: 140, sources: ["IPS-1", "Grid"] },
            { device: "OLT KingsType", serial: "OLT-HWI-xxxxxxxx", installDate: "00.00.0000", warranty: "Active", watt: 120, maxWatt: 400, avgWatt: 120, sources: ["IPS-1", "Grid"] },
            { device: "MikroTik", serial: "DL-xxxxxxxxx", installDate: "00.00.0000", warranty: "Expired", watt: 180, maxWatt: 750, avgWatt: 180, sources: ["IPS-1", "Grid"] },
            { device: "Server DELL", serial: "DL-xxxxxxxxx", installDate: "00.00.0000", warranty: "Expired", watt: 150, maxWatt: 550, avgWatt: 150, sources: ["IPS-1", "Grid"] },
            { device: "Switch Cisco", serial: "CS-xxxxxxxxx", installDate: "00.00.0000", warranty: "Expired", watt: 180, maxWatt: 440, avgWatt: 180, sources: ["IPS-1", "Grid"] },
        ]
    },


    {
        id: 23,
        name: "Dst-23 Aftabnagar",
        floor: "1st Floor",
        addressType: "POP",
        address: "Block-C, Road-02, Aftabnagar, Dhaka",
        mainLine: "UP",
        ips: "STANDBY",
        batteryLevel: "100%",
        temp: "21°C",
        ac: "N/A",
        pdu: "Normal",
        fan: "On",
        light: "OFF",
        door: "OPEN ⚠️",
        window: "Closed",
        ipsList: [
            { id: "IPS-1", ratingWatts: 2400, batteryVoltage: 96, totalAh: 100, chargePercent: 100, brand: "Hamko100", installDate: "2022-06-01" },
        
           
        ],
        powerSpecs: { systemVoltage: 220, ipsRating: "2400W", batteryCount: "1x 100Ah", oltCount: 1, mikrotikModel: "CCR1036-12G-4S", switchCount: 1 },
        meterInfo: { accountNo: "998231412", balanceBDT: 340.00, lastRechargeDate: "2026-08-15", type: "Prepaid" },
        devices: { olt: "Online", mikrotik: "Online", switch: "Online", camera: "Online" },
        inventory: [
            { device: "IPS-1 (2400W3K Kstar)", serial: "IPS-96V-2001", installDate: "09-Jan-2025", warranty: "Active", watt: 0, sources: ["Grid"] },
            { device: "OLT VSOL", serial: "OLT-VSOL-xxxxxxxx", installDate: "00.00.0000", warranty: "Active", watt: 180, maxWatt: 450, avgWatt: 100, sources: ["IPS-1", "Grid"] },
            { device: "MikroTik CCR", serial: "MT-xxxxxxxxx", installDate: "00.00.0000", warranty: "Expired", watt: 70, maxWatt: 220, avgWatt: 70, sources: ["IPS-1", "Grid"] }, 
            { device: "MikroTik CCR", serial: "MT-xxxxxxxxx", installDate: "00.00.0000", warranty: "Expired", watt: 70, maxWatt: 220, avgWatt: 70, sources: ["IPS-1", "Grid"] },
            { device: "Switch Cisco", serial: "CS-xxxxxxxxx", installDate: "00.00.0000", warranty: "Expired", watt: 200, maxWatt: 500, avgWatt: 200, sources: ["IPS-1", "Grid"] },
            { device: "Switch Cisco", serial: "CS-xxxxxxxxx", installDate: "00.00.0000", warranty: "Expired", watt: 200, maxWatt: 500, avgWatt: 200, sources: ["IPS-1", "Grid"] },
        ]
    },

    {
        id: 25,
        name: "Dst-25 DIT Project",
        floor: "1st Floor",
        addressType: "POP",
        address: "Block-C, Road-02, Merul-Badda, Dhaka",
        mainLine: "UP",
        ips: "STANDBY",
        batteryLevel: "100%",
        temp: "21°C",
        ac: "N/A",
        pdu: "Normal",
        fan: "On",
        light: "OFF",
        door: "OPEN ⚠️",
        window: "Closed",
        ipsList: [
            { id: "IPS-1", ratingWatts: 800, batteryVoltage: 12, totalAh: 200, chargePercent: 100, brand: "Hamko200", installDate: "2021-01-01" },
        
           
        ],
        powerSpecs: { systemVoltage: 220, ipsRating: "800W", batteryCount: "1x 200Ah", oltCount: 1, mikrotikModel: "CCR1036-12G-4S", switchCount: 1 },
        meterInfo: { accountNo: "998231412", balanceBDT: 340.00, lastRechargeDate: "2026-08-15", type: "Prepaid" },
        devices: { olt: "Online", mikrotik: "Online", switch: "Online", camera: "Online" },
        inventory: [
            { device: "IPS-1 (800W1K No-Brand)", serial: "IPS-12V-2001", installDate: "09-Jan-2025", warranty: "Active", watt: 0, sources: ["Grid"] },
            { device: "OLT VSOL", serial: "OLT-VSOL-xxxxxxxx", installDate: "00.00.0000", warranty: "Active", watt: 60, maxWatt: 220, avgWatt: 60, sources: ["IPS-1", "Grid"] },
            { device: "OLT VSOL", serial: "OLT-VSOL-xxxxxxxx", installDate: "00.00.0000", warranty: "Active", watt: 60, maxWatt: 220, avgWatt: 60, sources: ["IPS-1", "Grid"] },
            { device: "MikroTik ECOM", serial: "MT-xxxxxxxxx", installDate: "00.00.0000", warranty: "Expired", watt: 60, maxWatt: 250, avgWatt: 60, sources: ["IPS-1", "Grid"] }, 
            { device: "Switch Cisco", serial: "CS-xxxxxxxxx", installDate: "00.00.0000", warranty: "Expired", watt: 150, maxWatt: 500, avgWatt: 150, sources: ["IPS-1", "Grid"] },
        ]
    },


    {
        id: 28,
        name: "Dst-28 Nakalpara",
        floor: "1st Floor",
        addressType: "POP",
        address: "Block-C, Road-02, Nakalpara, Dhaka",
        mainLine: "UP",
        ips: "STANDBY",
        batteryLevel: "100%",
        temp: "21°C",
        ac: "N/A",
        pdu: "Normal",
        fan: "On",
        light: "OFF",
        door: "OPEN ⚠️",
        window: "Closed",
        ipsList: [
            { id: "IPS-1", ratingWatts: 1600, batteryVoltage: 24, totalAh: 200, chargePercent: 100, brand: "Hamko200", installDate: "2022-01-01" },
        
           
        ],
        powerSpecs: { systemVoltage: 220, ipsRating: "1600W", batteryCount: "1x 200Ah", oltCount: 1, mikrotikModel: "CCR1036-12G-4S", switchCount: 1 },
        meterInfo: { accountNo: "998231412", balanceBDT: 340.00, lastRechargeDate: "2026-08-15", type: "Prepaid" },
        devices: { olt: "Online", mikrotik: "Online", switch: "Online", camera: "Online" },
        inventory: [
            { device: "IPS-1 (1600W2K Non-Brand)", serial: "IPS-24V-2001", installDate: "09-Jan-2025", warranty: "Active", watt: 0, sources: ["Grid"] },
            { device: "OLT VSOL", serial: "OLT-VSOL-xxxxxxxx", installDate: "00.00.0000", warranty: "Active", watt: 70, maxWatt: 220, avgWatt: 70, sources: ["IPS-1", "Grid"] },
            { device: "OLT VSOL", serial: "OLT-VSOL-xxxxxxxx", installDate: "00.00.0000", warranty: "Active", watt: 70, maxWatt: 220, avgWatt: 70, sources: ["IPS-1", "Grid"] },
            { device: "MikroTik CCR", serial: "MT-xxxxxxxxx", installDate: "00.00.0000", warranty: "Expired", watt: 80, maxWatt: 220, avgWatt: 80, sources: ["IPS-1", "Grid"] }, 
            { device: "Switch Cisco", serial: "CS-xxxxxxxxx", installDate: "00.00.0000", warranty: "Expired", watt: 180, maxWatt: 500, avgWatt: 180, sources: ["IPS-1", "Grid"] },
        ]
    },

     
    {
        id: 29,
        name: "Dst-29 Sabuzbagh",
        floor: "4th Floor",
        addressType: "POP",
        address: "Khalpar,Kadamtuli Bridge, Sabuzbagh, Basabo, Dhaka",
        mainLine: "UP",
        ips: "STANDBY",
        batteryLevel: "100%",
        temp: "21°C",
        ac: "N/A",
        pdu: "Normal",
        fan: "On",
        light: "OFF",
        door: "OPEN ⚠️",
        window: "Closed",
        ipsList: [
            { id: "IPS-1", ratingWatts: 2400, batteryVoltage: 24, totalAh: 200, chargePercent: 100, brand: "Hamko200", installDate: "2024-01-01" },
        
           
        ],
        powerSpecs: { systemVoltage: 220, ipsRating: "2400W", batteryCount: "1x 200Ah", oltCount: 1, mikrotikModel: "CCR1036-12G-4S", switchCount: 1 },
        meterInfo: { accountNo: "998231412", balanceBDT: 340.00, lastRechargeDate: "2026-08-15", type: "Prepaid" },
        devices: { olt: "Online", mikrotik: "Online", switch: "Online", camera: "Online" },
        inventory: [
            { device: "IPS-1 (2400W3K Non-Brand)", serial: "IPS-24V-2001", installDate: "01-Jan-2024", warranty: "Active", watt: 0, sources: ["Grid"] },
            { device: "OLT DBC", serial: "OLT-DBC-xxxxxxxx", installDate: "00.00.0000", warranty: "Active", watt: 75, maxWatt: 250, avgWatt: 75, sources: ["IPS-1", "Grid"] },
            { device: "OLT DBC", serial: "OLT-DBC-xxxxxxxx", installDate: "00.00.0000", warranty: "Active", watt: 75, maxWatt: 250, avgWatt: 75, sources: ["IPS-1", "Grid"] },
            { device: "MikroTik CCR", serial: "MT-xxxxxxxxx", installDate: "00.00.0000", warranty: "Expired", watt: 70, maxWatt: 220, avgWatt: 70, sources: ["IPS-1", "Grid"] }, 
            { device: "MikroTik Server", serial: "DL-xxxxxxxxx", installDate: "00.00.0000", warranty: "Expired", watt: 200, maxWatt: 750, avgWatt: 200, sources: ["IPS-1", "Grid"] },
            { device: "OLT Huawei", serial: "CS-xxxxxxxxx", installDate: "00.00.0000", warranty: "Expired", watt: 200, maxWatt: 1000, avgWatt: 200, sources: ["IPS-1", ""] },
            { device: "Switch BDCON", serial: "CS-xxxxxxxxx", installDate: "00.00.0000", warranty: "Expired", watt: 80, maxWatt: 250, avgWatt: 80, sources: ["IPS-1", "Grid"] },
            { device: "Switch Cisco", serial: "CS-xxxxxxxxx", installDate: "00.00.0000", warranty: "Expired", watt: 150, maxWatt: 500, avgWatt: 150, sources: ["IPS-1", "Grid"] },
        ]
    },

    {
        id: 30,
        name: "Dst-30 Alifnagar",
        floor: "1st Floor",
        addressType: "POP",
        address: "Baitakhali, Anandanagar Road, Badda, Dhaka",
        mainLine: "UP",
        ips: "STANDBY",
        batteryLevel: "100%",
        temp: "21°C",
        ac: "N/A",
        pdu: "Normal",
        fan: "On",
        light: "OFF",
        door: "OPEN ⚠️",
        window: "Closed",
        ipsList: [
            { id: "IPS-1", ratingWatts: 800, batteryVoltage: 12, totalAh: 200, chargePercent: 100, brand: "Hamko200", installDate: "2025-06-01" },
        
           
        ],
        powerSpecs: { systemVoltage: 220, ipsRating: "800W", batteryCount: "2x 200Ah", oltCount: 1, mikrotikModel: "CCR1036-12G-4S", switchCount: 1 },
        meterInfo: { accountNo: "998231412", balanceBDT: 340.00, lastRechargeDate: "2026-08-15", type: "Prepaid" },
        devices: { olt: "Online", mikrotik: "Online", switch: "Online", camera: "Online" },
        inventory: [
            { device: "IPS-1 (800W1K Luminous)", serial: "IPS-12V-2001", installDate: "09-Jan-2025", warranty: "Active", watt: 0, sources: ["Grid"] },
            { device: "OLT VSOL", serial: "OLT-VSOL-xxxxxxxx", installDate: "00.00.0000", warranty: "Active", watt: 70, maxWatt: 220, avgWatt: 70, sources: ["IPS-1", "Grid"] },
            { device: "MikroTik CCR", serial: "MT-xxxxxxxxx", installDate: "00.00.0000", warranty: "Expired", watt: 80, maxWatt: 220, avgWatt: 80, sources: ["IPS-1", "Grid"] }, 
            { device: "Switch Cisco", serial: "CS-xxxxxxxxx", installDate: "00.00.0000", warranty: "Expired", watt: 160, maxWatt: 500, avgWatt: 160, sources: ["IPS-1", "Grid"] },
        ]
    },

    {
        id: 31,
        name: "Dst-31 Deshonline",
        floor: "1st Floor",
        addressType: "POP",
        address: "Hosen Market, Badda, Dhaka",
        mainLine: "UP",
        ips: "STANDBY",
        batteryLevel: "100%",
        temp: "21°C",
        ac: "N/A",
        pdu: "Normal",
        fan: "On",
        light: "OFF",
        door: "OPEN ⚠️",
        window: "Closed",
        ipsList: [
            { id: "IPS-1", ratingWatts: 2400, batteryVoltage: 24, totalAh: 200, chargePercent: 100, brand: "Hamko200", installDate: "2024-06-01" },
            { id: "IPS-2", ratingWatts: 1600, batteryVoltage: 24, totalAh: 200, chargePercent: 100, brand: "Hamko200", installDate: "2024-09-01" }
        
           
        ],
        powerSpecs: { systemVoltage: 220, ipsRating: "2400W", batteryCount: "2x 200Ah", oltCount: 1, mikrotikModel: "CCR1036-12G-4S", switchCount: 1 },
        meterInfo: { accountNo: "998231412", balanceBDT: 340.00, lastRechargeDate: "2026-08-15", type: "Prepaid" },
        devices: { olt: "Online", mikrotik: "Online", switch: "Online", camera: "Online" },
        inventory: [
            { device: "IPS-1 (2400W3K Non-Brand)", serial: "IPS-24V-3101", installDate: "01-Jun-2024", warranty: "Active", watt: 0, sources: ["Grid"] },
            { device: "IPS-2 (1600W2K Non-Brand)", serial: "IPS-24V-3102", installDate: "01-Sep-2024", warranty: "Active", watt: 0, sources: ["Grid"] },
            { device: "OLT DBC", serial: "OLT-VSOL-xxxxxxxx", installDate: "00.00.0000", warranty: "Active", watt: 70, maxWatt: 220, avgWatt: 70, sources: ["IPS-1", "IPS-2"] },
            { device: "OLT BDCOM", serial: "OLT-VSOL-xxxxxxxx", installDate: "00.00.0000", warranty: "Active", watt: 70, maxWatt: 220, avgWatt: 70, sources: ["IPS-1", "IPS-2"] },
            { device: "MikroTik ECOM", serial: "MT-xxxxxxxxx", installDate: "00.00.0000", warranty: "Expired", watt: 300, maxWatt: 750, avgWatt: 300, sources: ["IPS-1", "IPS-2"] }, 
            { device: "Switch Cisco", serial: "CS-xxxxxxxxx", installDate: "00.00.0000", warranty: "Expired", watt: 180, maxWatt: 440, avgWatt: 180, sources: ["IPS-1", "IPS-2"] },
            { device: "MikroTik CCR", serial: "MT-xxxxxxxxx", installDate: "00.00.0000", warranty: "Expired", watt: 60, maxWatt: 220, avgWatt: 60, sources: ["IPS-1", "IPS-2"] }, 
            { device: "MikroTik CCR", serial: "MT-xxxxxxxxx", installDate: "00.00.0000", warranty: "Expired", watt: 60, maxWatt: 220, avgWatt: 60, sources: ["IPS-1", "IPS-2"] }, 
            { device: "Switch BDCOM", serial: "SC-BDL-xxxxxxxx", installDate: "00.00.0000", warranty: "Active", watt: 70, maxWatt: 220, avgWatt: 70, sources: ["IPS-1", "IPS-2"] },
        ]
    },

     {
        id: 33,
        name: "Dst-33 Shyamoli",
        floor: "1st Floor",
        addressType: "POP",
        address: "Shyamoli, Dhaka",
        mainLine: "UP",
        ips: "STANDBY",
        batteryLevel: "100%",
        temp: "21°C",
        ac: "N/A",
        pdu: "Normal",
        fan: "On",
        light: "OFF",
        door: "OPEN ⚠️",
        window: "Closed",
        ipsList: [
            { id: "IPS-1", ratingWatts: 2400, batteryVoltage: 24, totalAh: 200, chargePercent: 100, brand: "Hamko200", installDate: "2025-01-01" },
        
           
        ],
        powerSpecs: { systemVoltage: 220, ipsRating: "2400W", batteryCount: "2x 200Ah", oltCount: 1, mikrotikModel: "CCR1036-12G-4S", switchCount: 1 },
        meterInfo: { accountNo: "998231412", balanceBDT: 340.00, lastRechargeDate: "2026-08-15", type: "Prepaid" },
        devices: { olt: "Online", mikrotik: "Online", switch: "Online", camera: "Online" },
        inventory: [
            { device: "IPS-1 (2400W3K Non-Brand)", serial: "IPS-24V-2001", installDate: "09-Jan-2025", warranty: "Active", watt: 0, sources: ["Grid"] },
            { device: "OLT BDCOM", serial: "OLT-VSOL-xxxxxxxx", installDate: "00.00.0000", warranty: "Active", watt: 70, maxWatt: 220, avgWatt: 70, sources: ["IPS-1", "Grid"] },
            { device: "MikroTik CCR", serial: "MT-xxxxxxxxx", installDate: "00.00.0000", warranty: "Expired", watt: 70, maxWatt: 200, avgWatt: 70, sources: ["IPS-1", "Grid"] }, 
            { device: "Switch Cisco", serial: "CS-xxxxxxxxx", installDate: "00.00.0000", warranty: "Expired", watt: 200, maxWatt: 500, avgWatt: 200, sources: ["IPS-1", "Grid"] },
        ]
    },


      {
        id: 34,
        name: "Dst-34 Authentic",
        floor: "7th Floor",
        addressType: "POP",
        address: "Pachtala Bazar, Badda, Dhaka",
        mainLine: "UP",
        Generator: "Standby",
        ips: "STANDBY",
        batteryLevel: "100%",
        temp: "21°C",
        ac: "N/A",
        pdu: "Normal",
        fan: "On",
        light: "OFF",
        door: "OPEN ⚠️",
        window: "Closed",
        ipsList: [
            { id: "IPS-1", ratingWatts: 2400, batteryVoltage: 24, totalAh: 200, chargePercent: 100, brand: "Hamko200", installDate: "2026-06-01" },
            { id: "IPS-2", ratingWatts: 2400, batteryVoltage: 24, totalAh: 200, chargePercent: 100, brand: "Hamko200", installDate: "2026-04-01" }
        
           
        ],
        powerSpecs: { systemVoltage: 220, ipsRating: "2400W", batteryCount: "2x 200Ah", oltCount: 1, mikrotikModel: "CCR1036-12G-4S", switchCount: 1 },
        meterInfo: { accountNo: "998231412", balanceBDT: 340.00, lastRechargeDate: "2026-08-15", type: "Prepaid" },
        devices: { olt: "Online", mikrotik: "Online", switch: "Online", camera: "Online" },
        inventory: [
            { device: "IPS-1 (2400W3K Non-Brand)", serial: "IPS-24V-3101", installDate: "01-Jun-2024", warranty: "Active", watt: 0, sources: ["Grid"] },
            { device: "IPS-2 (2400W3K Non-Brand)", serial: "IPS-24V-3102", installDate: "01-Sep-2024", warranty: "Active", watt: 0, sources: ["Grid"] },
            { device: "OLT DBC", serial: "OLT-VSOL-xxxxxxxx", installDate: "00.00.0000", warranty: "Active", watt: 70, maxWatt: 220, avgWatt: 70, sources: ["IPS-1", "IPS-2"] },
            { device: "OLT BDCOM", serial: "OLT-VSOL-xxxxxxxx", installDate: "00.00.0000", warranty: "Active", watt: 70, maxWatt: 220, avgWatt: 70, sources: ["IPS-1", "IPS-2"] },
            { device: "OLT Huawei", serial: "OLT-HWI-xxxxxxxx", installDate: "00.00.0000", warranty: "Active", watt: 300, maxWatt: 1000, avgWatt: 300, sources: ["IPS-1", ""] },
            { device: "MikroTik Server", serial: "MT-xxxxxxxxx", installDate: "00.00.0000", warranty: "Expired", watt: 300, maxWatt: 750, avgWatt: 300, sources: ["IPS-1", "IPS-2"] }, 
            { device: "MikroTik CCR", serial: "MT-xxxxxxxxx", installDate: "00.00.0000", warranty: "Expired", watt: 60, maxWatt: 220, avgWatt: 60, sources: ["IPS-1", "IPS-2"] }, 
            { device: "MikroTik CCR", serial: "MT-xxxxxxxxx", installDate: "00.00.0000", warranty: "Expired", watt: 60, maxWatt: 220, avgWatt: 60, sources: ["IPS-1", "IPS-2"] }, 
            { device: "MikroTik CCR", serial: "MT-xxxxxxxxx", installDate: "00.00.0000", warranty: "Expired", watt: 60, maxWatt: 220, avgWatt: 60, sources: ["IPS-1", "IPS-2"] }, 
            { device: "Switch BDCOM", serial: "SC-BDL-xxxxxxxx", installDate: "00.00.0000", warranty: "Active", watt: 70, maxWatt: 220, avgWatt: 70, sources: ["IPS-1", "IPS-2"] },
            { device: "Switch Cisco", serial: "CS-xxxxxxxxx", installDate: "00.00.0000", warranty: "Expired", watt: 180, maxWatt: 440, avgWatt: 180, sources: ["IPS-1", "IPS-2"] },
        ]
    },

     {
        id: 35,
        name: "Dst-35 Jaydeppur",
        floor: "3rd Floor",
        addressType: "POP",
        address: "Chhayyabithi, Jaydeppur, Gazipur",
        mainLine: "UP",
        ips: "STANDBY",
        batteryLevel: "100%",
        temp: "21°C",
        ac: "N/A",
        pdu: "Normal",
        fan: "On",
        light: "OFF",
        door: "OPEN ⚠️",
        window: "Closed",
        ipsList: [
            { id: "IPS-1", ratingWatts: 800, batteryVoltage: 12, totalAh: 200, chargePercent: 100, brand: "Hamko200", installDate: "2024-01-01" },
        
           
        ],
        powerSpecs: { systemVoltage: 220, ipsRating: "800W", batteryCount: "1x 200Ah", oltCount: 1, mikrotikModel: "CCR1036-12G-4S", switchCount: 1 },
        meterInfo: { accountNo: "998231412", balanceBDT: 340.00, lastRechargeDate: "2026-08-15", type: "Prepaid" },
        devices: { olt: "Online", mikrotik: "Online", switch: "Online", camera: "Online" },
        inventory: [
            { device: "IPS-1 (800W1K Luminous)", serial: "IPS-12V-2001", installDate: "09-Jan-2025", warranty: "Active", watt: 0, sources: ["Grid"] },
            { device: "MikroTik CCR", serial: "MT-xxxxxxxxx", installDate: "00.00.0000", warranty: "Expired", watt: 70, maxWatt: 220, avgWatt: 70, sources: ["IPS-1", "Grid"] }, 
            { device: "MikroTik CCR", serial: "MT-xxxxxxxxx", installDate: "00.00.0000", warranty: "Expired", watt: 70, maxWatt: 220, avgWatt: 70, sources: ["IPS-1", "Grid"] }, 
            { device: "MikroTik CCR", serial: "MT-xxxxxxxxx", installDate: "00.00.0000", warranty: "Expired", watt: 70, maxWatt: 220, avgWatt: 70, sources: ["IPS-1", "Grid"] },
            { device: "OLT BDCOM", serial: "OLT-BDCOM-xxxxxxxx", installDate: "00.00.0000", warranty: "Active", watt: 80, maxWatt: 250, avgWatt: 80, sources: ["IPS-1", "Grid"] },
            { device: "OLT BDCOM", serial: "OLT-BDCOM-xxxxxxxx", installDate: "00.00.0000", warranty: "Active", watt: 80, maxWatt: 250, avgWatt: 80, sources: ["IPS-1", "Grid"] },
            { device: "OLT VSON", serial: "OLT-VSOL-xxxxxxxx", installDate: "00.00.0000", warranty: "Active", watt: 80, maxWatt: 250, avgWatt: 80, sources: ["IPS-1", "Grid"] },
            { device: "OLT CDATA", serial: "OLT-VSOL-xxxxxxxx", installDate: "00.00.0000", warranty: "Active", watt: 100, maxWatt: 300, avgWatt: 100, sources: ["IPS-1", "Grid"] },
            { device: "Switch VSOL", serial: "OLT-VSOL-xxxxxxxx", installDate: "00.00.0000", warranty: "Active", watt: 70, maxWatt: 220, avgWatt: 70, sources: ["IPS-1", "Grid"] },
            { device: "Switch BDCOM", serial: "OLT-VSOL-xxxxxxxx", installDate: "00.00.0000", warranty: "Active", watt: 70, maxWatt: 220, avgWatt: 70, sources: ["IPS-1", "Grid"] },
        ]
    },

     {
        id: 36,
        name: "Dst-36 Lalbagh",
        floor: "1st Floor",
        addressType: "POP",
        address: "Shakh Shahebbazar,lalbagh, Dhaka",
        mainLine: "UP",
        ips: "STANDBY",
        batteryLevel: "60%",
        temp: "21°C",
        ac: "N/A",
        pdu: "Normal",
        fan: "On",
        light: "OFF",
        door: "OPEN ⚠️",
        window: "Closed",
        ipsList: [
            { id: "IPS-1", ratingWatts: 800, batteryVoltage: 12, totalAh: 200, chargePercent: 100, brand: "Hamko200", installDate: "2022-01-01" },
        
           
        ],
        powerSpecs: { systemVoltage: 220, ipsRating: "800W", batteryCount: "1x 200Ah", oltCount: 1, mikrotikModel: "CCR1036-12G-4S", switchCount: 1 },
        meterInfo: { accountNo: "998231412", balanceBDT: 340.00, lastRechargeDate: "2026-08-15", type: "Prepaid" },
        devices: { olt: "Online", mikrotik: "Online", switch: "Online", camera: "Online" },
        inventory: [
            { device: "IPS-1 (800W1K Luminous)", serial: "IPS-12V-2001", installDate: "09-Jan-2025", warranty: "Active", watt: 0, sources: ["Grid"] },
            { device: "OLT VSOL", serial: "OLT-VSOL-xxxxxxxx", installDate: "00.00.0000", warranty: "Active", watt: 100, maxWatt: 440, avgWatt: 100, sources: ["IPS-1", "Grid"] },
            { device: "MikroTik CCR", serial: "MT-xxxxxxxxx", installDate: "00.00.0000", warranty: "Expired", watt: 60, maxWatt: 250, avgWatt: 60, sources: ["IPS-1", "Grid"] }, 
            { device: "Switch BDCOM", serial: "CS-xxxxxxxxx", installDate: "00.00.0000", warranty: "Expired", watt: 80, maxWatt: 350, avgWatt: 80, sources: ["IPS-1", "Grid"] },
        ]
    },



    {
        id: 41,
        name: "Dst-41 Uttara, Dakkhinkhan",
        floor: "2nd Floor",
        addressType: "POP",
        address: "Manshi Market Road, Dakkhinkhan, Uttara, Dhaka",
        mainLine: "UP",
        ips: "STANDBY",
        batteryLevel: "100%",
        temp: "21°C",
        ac: "N/A",
        pdu: "Normal",
        fan: "On",
        light: "OFF",
        door: "OPEN ⚠️",
        window: "Closed",
        ipsList: [
            { id: "IPS-1", ratingWatts: 2400, batteryVoltage: 96, totalAh: 200, chargePercent: 100, brand: "Hamko200", installDate: "2020-01-01" },
            { id: "IPS-2", ratingWatts: 2400, batteryVoltage: 24, totalAh: 200, chargePercent: 100, brand: "Hamko200", installDate: "2026-05-01" },
           
        ],
        powerSpecs: { systemVoltage: 220, ipsRating: "2400W", batteryCount: "2x 200Ah", oltCount: 1, mikrotikModel: "CCR1036-12G-4S", switchCount: 1 },
        meterInfo: { accountNo: "998231412", balanceBDT: 340.00, lastRechargeDate: "2026-08-15", type: "Prepaid" },
        devices: { olt: "Online", mikrotik: "Online", switch: "Online", camera: "Online" },
        inventory: [
            { device: "IPS-1 (2400W3K Kstar)", serial: "IPS-96V-2001", installDate: "09-Jan-2025", warranty: "Active", watt: 0, sources: ["Grid"] },
            { device: "IPS-2 (2400W3K Non-Brand)", serial: "IPS-24V-2001", installDate: "09-Jan-2025", warranty: "Active", watt: 0, sources: ["Grid"] },
            { device: "OLT Huawei", serial: "OLT-HWI-xxxxxxxx", installDate: "00.00.0000", warranty: "Active", watt: 300, maxWatt: 1000, avgWatt: 300, sources: ["IPS-1", ""] },
            { device: "OLT VSOL", serial: "OLT-VSOL-xxxxxxxx", installDate: "00.00.0000", warranty: "Active", watt: 70, maxWatt: 220, avgWatt: 70, sources: ["IPS-1", "IPS-2"] },
            { device: "OLT VSOL", serial: "OLT-VSOL-xxxxxxxx", installDate: "00.00.0000", warranty: "Active", watt: 70, maxWatt: 220, avgWatt: 70, sources: ["IPS-1", ""] },
            { device: "OLT TBS", serial: "OLT-TBS-xxxxxxxx", installDate: "00.00.0000", warranty: "Active", watt: 70, maxWatt: 220, avgWatt: 70, sources: ["IPS-1", "IPS-2"] },
            { device: "MikroTik ECOM", serial: "MT-xxxxxxxxx", installDate: "00.00.0000", warranty: "Expired", watt: 180, maxWatt: 450, avgWatt: 180, sources: ["IPS-1", "IPS-2"] },
            { device: "MikroTik DELL", serial: "DL-xxxxxxxxx", installDate: "00.00.0000", warranty: "Expired", watt: 250, maxWatt: 750, avgWatt: 250, sources: ["IPS-1", "IPS-2"] },
            { device: "Server DELL", serial: "DL-xxxxxxxxx", installDate: "00.00.0000", warranty: "Expired", watt: 210, maxWatt: 495, avgWatt: 210, sources: ["IPS-1", "IPS-2"] },
            { device: "Switch BDCOM", serial: "MT-xxxxxxxxx", installDate: "00.00.0000", warranty: "Expired", watt: 180, maxWatt: 440, avgWatt: 180, sources: ["IPS-1", "IPS-2"] }, 
            { device: "Switch Cisco", serial: "CS-xxxxxxxxx", installDate: "00.00.0000", warranty: "Expired", watt: 180, maxWatt: 440, avgWatt: 180, sources: ["IPS-1", "IPS-2"] },
        ]
    },


    {
        id: 44,
        name: "Dst44 Mirpur",
        floor: "4th Floor",
        addressType: "POP",
        address: "Habuler Pukurpar, Mirpur-1, Dhaka",
        mainLine: "UP",
        ips: "ACTIVE",
        batteryLevel: "100%",
        temp: "28°C",
        ac: "Running",
        pdu: "Normal",
        fan: "ON",
        light: "OFF",
        door: "Closed",
        window: "Closed",
        ipsList: [
            { id: "IPS-1", ratingWatts: 800, batteryVoltage: 12, totalAh: 200, chargePercent: 100, brand: "Hamko200", installDate: "2026-07-14" },
            
        ],
        powerSpecs: { systemVoltage: 220, oltCount: 1, mikrotikModel: "RB4011iGS+", switchCount: 1 },
        meterInfo: { accountNo: "123456789", balanceBDT: 1450.50, lastRechargeDate: "2026-07-20", type: "Prepaid" },
        devices: { olt: "Online", mikrotik: "Online", switch: "Online", camera: "Online" },
        inventory: [
            { device: "IPS-1 (800W1K-Non-Brand)", serial: "IPS-24V-4001", installDate: "15-Jan-2025", warranty: "Active", watt: 0, sources: ["Grid"] },
             { device: "OLT VSOL", serial: "OLT-VSOL-xxxxxxxx", installDate: "00.00.0000", warranty: "Active", watt: 70, maxWatt: 220, avgWatt: 70, sources: ["IPS-1", "Grid"] },
            { device: "MikroTik CCR", serial: "MT-xxxxxxxxx", installDate: "00.00.0000", warranty: "Expired", watt: 70, maxWatt: 220, avgWatt: 70, sources: ["IPS-1", "Grid"] }, 
            { device: "Switch Cisco", serial: "CS-xxxxxxxxx", installDate: "00.00.0000", warranty: "Expired", watt: 180, maxWatt: 500, avgWatt: 180, sources: ["IPS-1", "Grid"] },
        ]
    },


    {
        id: 46,
        name: "Dst-46 Kalachandpur",
        floor: "1st Floor",
        addressType: "POP",
        address: "High School Road, Kalachandpur, Narda, Dhaka",
        mainLine: "DOWN",
        ips: "ACTIVE",
        batteryLevel: "50%",
        temp: "28°C",
        ac: "Running",
        pdu: "Normal",
        fan: "ON",
        light: "OFF",
        door: "Closed",
        window: "Closed",
        ipsList: [
            { id: "IPS-1", ratingWatts: 1600, batteryVoltage: 24, totalAh: 200, chargePercent: 50, brand: "Hamko200", installDate: "2026-01-15" },
            
        ],
        powerSpecs: { systemVoltage: 220, oltCount: 1, mikrotikModel: "RB4011iGS+", switchCount: 1 },
        meterInfo: { accountNo: "123456789", balanceBDT: 1450.50, lastRechargeDate: "2026-07-20", type: "Prepaid" },
        devices: { olt: "Online", mikrotik: "Online", switch: "Online", camera: "Online" },
        inventory: [
            { device: "IPS-1 (1600W2K-Luminous)", serial: "IPS-24V-4001", installDate: "15-Jan-2025", warranty: "Active", watt: 0, sources: ["Grid"] },
             { device: "OLT BDcom", serial: "OLT-VSOL-xxxxxxxx", installDate: "00.00.0000", warranty: "Active", watt: 70, maxWatt: 220, avgWatt: 70, sources: ["IPS-1", "Grid"] },
            { device: "MikroTik CCR", serial: "MT-xxxxxxxxx", installDate: "00.00.0000", warranty: "Expired", watt: 70, maxWatt: 220, avgWatt: 70, sources: ["IPS-1", "Grid"] }, 
            { device: "Switch Cisco", serial: "CS-xxxxxxxxx", installDate: "00.00.0000", warranty: "Expired", watt: 180, maxWatt: 500, avgWatt: 180, sources: ["IPS-1", "Grid"] },
        ]
    },


    {
        id: 50,
        name: "Dst-50 Manda",
        floor: "1st Floor",
        addressType: "POP",
        address: "Kadamali Galy, Manda, Bashabo, Dhaka",
        mainLine: "UP",
        ips: "ACTIVE",
        batteryLevel: "100%",
        pdu: "Normal",
        fan: "ON",
        light: "OFF",
        door: "Closed",
        window: "Closed",
        ipsList: [
            { id: "IPS-1", ratingWatts: 2400, batteryVoltage: 12, totalAh: 200, chargePercent: 100, brand: "HMk-Green200", installDate: "2026-09-13" },
            
        ],
        powerSpecs: { systemVoltage: 220, oltCount: 1, mikrotikModel: "RB4011iGS+", switchCount: 1 },
        meterInfo: { accountNo: "123456789", balanceBDT: 1450.50, lastRechargeDate: "2026-07-20", type: "Prepaid" },
        devices: { olt: "Online", mikrotik: "Online", switch: "Online", camera: "Online" },
        inventory: [
            { device: "IPS-1 (2400W3K-Non-brand)", serial: "IPS-24V-4001", installDate: "15-Jan-2025", warranty: "Active", watt: 0, sources: ["Grid"] },
            { device: "OLT DBC", serial: "OLT-VSOL-xxxxxxxx", installDate: "00.00.0000", warranty: "Active", watt: 60, maxWatt: 200, avgWatt: 60, sources: ["IPS-1", "Grid"] },
            { device: "MikroTik CCR", serial: "MT-xxxxxxxxx", installDate: "00.00.0000", warranty: "Expired", watt: 70, maxWatt: 220, avgWatt: 70, sources: ["IPS-1", "Grid"] }, 
            { device: "Switch Cisco", serial: "CS-xxxxxxxxx", installDate: "00.00.0000", warranty: "Expired", watt: 200, maxWatt: 500, avgWatt: 200, sources: ["IPS-1", "Grid"] },
        ]
    },


    {
        id: 51,
        name: "Dst-51 Nandipara",
        floor: "1st Floor",
        addressType: "POP",
        address: "Gazi party center, Bashabo, Dhaka",
        mainLine: "UP",
        ips: "ACTIVE",
        batteryLevel: "100%",
        pdu: "Normal",
        fan: "ON",
        light: "OFF",
        door: "Closed",
        window: "Closed",
        ipsList: [
            { id: "IPS-1", ratingWatts: 800, batteryVoltage: 12, totalAh: 100, chargePercent: 100, brand: "Hamko100", installDate: "2024-06-13" },
            
        ],
        powerSpecs: { systemVoltage: 220, oltCount: 1, mikrotikModel: "RB4011iGS+", switchCount: 1 },
        meterInfo: { accountNo: "123456789", balanceBDT: 1450.50, lastRechargeDate: "2026-07-20", type: "Prepaid" },
        devices: { olt: "Online", mikrotik: "Online", switch: "Online", camera: "Online" },
        inventory: [
            { device: "IPS-1 (800W1K-Non-brand)", serial: "IPS-12V-4001", installDate: "15-Jan-2025", warranty: "Active", watt: 0, sources: ["Grid"] },
            { device: "OLT DBC", serial: "OLT-VSOL-xxxxxxxx", installDate: "00.00.0000", warranty: "Active", watt: 60, maxWatt: 200, avgWatt: 60, sources: ["IPS-1", "Grid"] },
            { device: "MikroTik CCR", serial: "MT-xxxxxxxxx", installDate: "00.00.0000", warranty: "Expired", watt: 70, maxWatt: 220, avgWatt: 70, sources: ["IPS-1", "Grid"] }, 
            { device: "Switch Cisco", serial: "CS-xxxxxxxxx", installDate: "00.00.0000", warranty: "Expired", watt: 200, maxWatt: 500, avgWatt: 200, sources: ["IPS-1", "Grid"] },
        ]
    },


    {
        id: 52,
        name: "Dst-52 Tangi",
        floor: "1st Floor",
        addressType: "POP",
        address: "Barnamala road, Rail-Gate, Tangi, Gazipur",
        mainLine: "UP",
        ips: "ACTIVE",
        batteryLevel: "100%",
        temp: "28°C",
        ac: "Running",
        pdu: "Normal",
        fan: "ON",
        light: "OFF",
        door: "Closed",
        window: "Closed",
        ipsList: [
            { id: "IPS-1", ratingWatts: 800, batteryVoltage: 12, totalAh: 200, chargePercent: 100, brand: "RHF-Tublur200", installDate: "2025-01-15" },
            
        ],
        powerSpecs: { systemVoltage: 220, oltCount: 1, mikrotikModel: "RB4011iGS+", switchCount: 1 },
        meterInfo: { accountNo: "123456789", balanceBDT: 1450.50, lastRechargeDate: "2026-07-20", type: "Prepaid" },
        devices: { olt: "Online", mikrotik: "Online", switch: "Online", camera: "Online" },
        inventory: [
            { device: "IPS-1 (800W1K-Non-brand)", serial: "IPS-12V-4001", installDate: "15-Jan-2025", warranty: "Active", watt: 0, sources: ["Grid"] },
            { device: "OLT BDcom", serial: "OLT-VSOL-xxxxxxxx", installDate: "00.00.0000", warranty: "Active", watt: 80, maxWatt: 220, avgWatt: 80, sources: ["IPS-1", "Grid"] },
            { device: "OLT DBC", serial: "OLT-VSOL-xxxxxxxx", installDate: "00.00.0000", warranty: "Active", watt: 160, maxWatt: 400, avgWatt: 160, sources: ["IPS-1", "Grid"] },
            { device: "MikroTik Dell Sarver", serial: "MT-xxxxxxxxx", installDate: "00.00.0000", warranty: "Expired", watt: 250, maxWatt: 750, avgWatt: 250, sources: ["IPS-1", "Grid"] }, 
            { device: "Switch Cisco", serial: "CS-xxxxxxxxx", installDate: "00.00.0000", warranty: "Expired", watt: 200, maxWatt: 500, avgWatt: 200, sources: ["IPS-1", "Grid"] },
        ]
    },

];




// 🟢 ১. roomsData থেকে ব্যাটারির বয়স অনুযায়ী Warranty/Health হিসেব
function calculateBatteryHealth(installDateStr) {
    if (!installDateStr) return { text: "N/A", color: "#cbd5e1", bg: "rgba(203, 213, 225, 0.1)", factor: 1.0 };

    const installDate = new Date(installDateStr);
    const today = new Date(); 
    
    const diffTime = Math.abs(today - installDate);
    const diffYears = diffTime / (1000 * 60 * 60 * 24 * 365.25);

    if (diffYears <= 2) {
        return { text: "Warranty Active", color: "#4ade80", bg: "rgba(74, 222, 128, 0.12)", factor: 1.0 };
    } else if (diffYears > 2 && diffYears <= 3) {
        return { text: "Warranty Expired", color: "#f59e0b", bg: "rgba(245, 158, 11, 0.12)", factor: 0.9 };

    } // 🟠 ৩ থেকে ৪.৫ বছর -> Replace as soon as possible (Orange/Red)
    else if (diffYears > 3 && diffYears <= 4.5) {
        return { 
            text: "Replace as soon as possible", 
            color: "#f87171", 
            bg: "rgba(248, 113, 113, 0.12)",
            factor: 0.50 
        };
    }

    // 🔴 ৪.৫ বছরের বেশি -> Valueless Battery ! (Dark Red)
    else {
        return { 
            text: "Valueless Battery !", 
            color: "#ef4444", 
            bg: "rgba(239, 68, 68, 0.2)",
            factor: 0.20
        };
    }
}


// ⏱️ ২. roomsData-র Voltage, Ah এবং Current Watt অনুযায়ী Backup Time হিসেব
function calculateBackupTime(watt, voltage, totalAh, chargePercent = 100, healthFactor = 1.0) {
    if (!watt || watt <= 0) return "N/A";
    
    // Battery degradation/health factor gun kora hocche
    const effectiveAh = totalAh * (chargePercent / 100) * healthFactor; 
    const totalWattHours = effectiveAh * voltage * 0.85; // 0.85 Inverter Efficiency
    
    const totalHours = totalWattHours / watt;
    const hours = Math.floor(totalHours);
    const minutes = Math.round((totalHours - hours) * 60);

    return `${hours}h ${minutes}m`;
}



// ==========================================
// 2. Helper Functions (Power Calculations)
// ==========================================

function calculateRoomPowerState(room) {
    const inventory = room.inventory || [];
    const ipsList = room.ipsList || [];
    
    let ipsLoads = {};
    ipsList.forEach(ips => { ipsLoads[ips.id] = 0; });

    const atsDevice = inventory.find(item => item.device && item.device.includes("ATS"));
    const atsSources = atsDevice ? (atsDevice.sources || []) : [];

    let totalServerRoomWatt = 0;
    let totalMaxWatt = 0;
    let totalAvgWatt = 0;

    inventory.forEach(item => {
        const itemWatt = item.watt || 0;
        const itemMax = item.maxWatt !== undefined ? item.maxWatt : itemWatt;
        const itemAvg = item.avgWatt !== undefined ? item.avgWatt : itemWatt;

        totalServerRoomWatt += itemWatt;
        totalMaxWatt += itemMax;
        totalAvgWatt += itemAvg;

        if (itemWatt > 0 && item.sources) {
            let targetIPSList = [];

            item.sources.forEach(src => {
                if (src.startsWith("IPS")) {
                    targetIPSList.push(src);
                } else if (src === "ATS") {
                    atsSources.forEach(atsSrc => {
                        if (atsSrc.startsWith("IPS")) {
                            targetIPSList.push(atsSrc);
                        }
                    });
                }
            });

            if (targetIPSList.length > 0) {
                const splitWatt = itemWatt / targetIPSList.length;
                targetIPSList.forEach(ipsId => {
                    if (ipsLoads[ipsId] !== undefined) {
                        ipsLoads[ipsId] += splitWatt;
                    }
                });
            }
        }
    });

    return { 
        totalServerRoomWatt, 
        totalMaxWatt, 
        totalAvgWatt, 
        ipsLoads 
    };
}

function getPowerBadgeSpecs(room) {
    let ipsRating = room.powerSpecs?.ipsRating;
    let batteryCount = room.powerSpecs?.batteryCount;

    if (!ipsRating && room.ipsList && room.ipsList.length > 0) {
        const totalWatts = room.ipsList.reduce((sum, item) => sum + (item.ratingWatts || 0), 0);
        ipsRating = `${totalWatts}W (${room.ipsList.length} IPS)`;
    }

    if (!batteryCount && room.ipsList && room.ipsList.length > 0) {
        const totalAh = room.ipsList.reduce((sum, item) => sum + (item.totalAh || 0), 0);
        batteryCount = `${totalAh}Ah Total`;
    }

    return { ipsRating: ipsRating || "N/A", batteryCount: batteryCount || "N/A" };
}

// ==========================================
// 3. Canvas Graph Function
// ==========================================

function renderPowerGraph(ipsLoads, totalWatt) {
    const canvas = document.getElementById('powerGraphCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    // ১. ক্যানভাসের হাই-ডিপিআই রেসপন্সিভনেস বজায় রাখা
    const width = canvas.width;
    const height = canvas.height;
    ctx.clearRect(0, 0, width, height);

    const keys = Object.keys(ipsLoads);
    if (keys.length === 0) return;

    // ২. ডাইনামিক লেআউট হিসাব
    const startX = 40;
    const padding = 20;
    const barWidth = 35;
    const maxHeight = height - 50; // টেক্সটের জন্য জায়গা রাখা হলো
    const baselineY = height - 25;  // এক্সিসের বেসলাইন

    keys.forEach((key, index) => {
        const load = ipsLoads[key] || 0;
        
        // সর্বোচ্চ ১ ধরে জিরো দিয়ে ডিভাইড হওয়া ঠেকানো
        const maxCapacity = totalWatt || 1; 
        const barHeight = Math.min((load / maxCapacity) * maxHeight, maxHeight);
        
        const x = startX + index * (barWidth + padding);
        const y = baselineY - barHeight;

        // ব্যাকগ্রাউন্ড ট্র্যাকার বার
        ctx.fillStyle = "rgba(255, 255, 255, 0.05)";
        ctx.fillRect(x, baselineY - maxHeight, barWidth, maxHeight);

        // গ্রেডিয়েন্ট ফিল
        const gradient = ctx.createLinearGradient(0, y, 0, baselineY);
        gradient.addColorStop(0, '#38bdf8');
        gradient.addColorStop(1, '#0284c7');

        ctx.fillStyle = gradient;
        ctx.fillRect(x, y, barWidth, barHeight);

        // টেক্সট স্টাইলিং
        ctx.fillStyle = '#94a3b8';
        ctx.font = '500 11px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(key, x + barWidth / 2, baselineY + 15);

        

        // ওয়াট ভ্যালু (বারের ওপরে)
        ctx.fillStyle = '#ffffff';
        ctx.font = 'blod 12px sans-serif';
        ctx.fillText(`${Math.round(load)}W`, x + barWidth / 2, y - 6);
    });
}

// ==========================================
// 4. Render Main Dashboard Cards
// ==========================================

function renderRooms(data) {
    const container = document.getElementById('roomContainer');
    if (!container) return;
    container.innerHTML = '';

    if (!data || data.length === 0) {
         container.innerHTML = `<div class="no-results">No rooms found matching search</div>`; //`<div style="grid-column: 1/-1; text-align:center; padding: 40px;">No rooms found matching search</div>`;
        return;
    }

    data.forEach((room, index) => {
        const isAlert = room.mainLine === "DOWN" || (room.door && room.door.includes("OPEN"));
        // const addressText = room.address || room.popAddress || room.officeAddress || "N/A";
        //  const { ipsRating, batteryCount } = getPowerBadgeSpecs(room);

        // const card = document.createElement('div');
        // card.className = `room-card ${isAlert ? 'alert-border' : ''}`;
        // card.style.animationDelay = `${index * 0.05}s`;
        // card.onclick = () => openRoomDetails(room);



        // Name ebong DST ID split kora (Jemon: "Dst-1,2 Quarter" -> DST ID: "Dst-1,2", Name: "Quarter")
        const nameParts = room.name ? room.name.split(' ') : ['POP', 'Node'];
        const dstId = nameParts[0]; 
        const popName = nameParts.slice(1).join(' ') || room.name;

        const card = document.createElement('div');
        // Keyboard key class ebong alert class
        card.className = `pop-key-btn ${isAlert ? 'alert-key' : ''}`;
        card.style.animationDelay = `${index * 0.05}s`;
        
        // Modal khular purono onclick logic unchanged
        card.onclick = () => openRoomDetails(room);


        /*
        card.innerHTML = `
            <div class="card-top">
                <h3>${room.name} <span style="font-size: 0.8rem; color: var(--text-secondary);">(${room.floor || 'N/A'})</span></h3>
                <span class="status-tag ${room.mainLine === 'UP' ? 'normal' : 'down'}">
                    Main: ${room.mainLine}
                </span>
            </div>
            
            <div class="pop-address-text">
                📍 <strong>Address:</strong> ${addressText}
            </div>

            <div class="badge-container" style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 12px;">
                <span style="background: rgba(56, 189, 248, 0.15); border: 1px solid rgba(56, 189, 248, 0.3); color: #38bdf8; padding: 2px 8px; border-radius: 6px; font-size: 0.75rem;">⚡ ${room.powerSpecs?.ipsRating || 'N/A'}</span>
                <span style="background: rgba(168, 85, 247, 0.15); border: 1px solid rgba(168, 85, 247, 0.3); color: #c084fc; padding: 2px 8px; border-radius: 6px; font-size: 0.75rem;">🔋 ${room.powerSpecs?.batteryCount || 'N/A'}</span>
                <span style="background: rgba(34, 197, 94, 0.15); border: 1px solid rgba(34, 197, 94, 0.3); color: #4ade80; padding: 2px 8px; border-radius: 6px; font-size: 0.75rem;">🌐 ${room.powerSpecs?.oltCount || 0} OLT</span>
            </div>
            

            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; background: rgba(15, 23, 42, 0.5); padding: 10px; border-radius: 8px; margin-bottom: 12px; font-size: 0.8rem;">
                <div>Temp: <strong style="color: #f1f5f9;">${room.temp || 'N/A'}</strong></div>
                <div>Door: <strong style="${room.door?.includes('OPEN') ? 'color: #ef4444;' : 'color: #4ade80;'}">${room.door || 'Closed'}</strong></div>
                <div>Power: <strong style="color: #f1f5f9;">${room.mainLine === 'UP' ? 'Grid' : 'IPS'}</strong></div>
                <div>Battery: <strong style="color: #38bdf8;">${room.batteryLevel || 'N/A'}</strong></div>
            </div> 

            <div class="device-pills" style="display: flex; gap: 6px; flex-wrap: wrap;">
                <span class="pill ${room.devices?.olt === 'Online' ? 'ok' : 'err'}">OLT</span>
                <span class="pill ${room.devices?.mikrotik === 'Online' ? 'ok' : 'err'}">MikroTik</span>
                <span class="pill ${room.devices?.switch === 'Online' ? 'ok' : 'err'}">Switch</span>
                <span class="pill ${room.devices?.camera === 'Online' ? 'ok' : 'err'}">Camera</span>
            </div>
        `;
        container.appendChild(card);
        */

       // Card-er vitorer pure minimalistic content (Shudhu LED, DST ID, & Name)
        card.innerHTML = `
            <span class="key-led-dot ${room.mainLine === 'UP' ? 'led-green' : 'led-red'}"></span>
            <div class="key-dst-id">${dstId}</div>
            <div class="key-pop-name">${popName}</div>
        `;
        container.appendChild(card);


    });
}



// ==========================================
// 5. Open Detailed Room Modal View
// ==========================================

function openRoomDetails(room) {
    const modal = document.getElementById('roomModal');
    if (!modal) return;
    
    document.getElementById('modalTitle').innerText = `${room.name} - Detailed View`;
    document.getElementById('modalAddressText').innerHTML = `${room.address || room.popAddress || room.officeAddress || 'N/A'} <strong>(${room.floor || 'N/A'})</strong>`;

    const systemVoltage = room.powerSpecs?.systemVoltage || 220;


   // 🟢 ১. ডাইনামিক পাওয়ার ও IPS লোড হিসাব
   const { totalServerRoomWatt, totalMaxWatt, totalAvgWatt, ipsLoads } = calculateRoomPowerState(room);




// 🟢 মাল্টিপল IPS থাকলে সেগুলোর যোগফল বের করার লুপ
   let calculatedTotalMaxWatt = 0;
   let calculatedTotalAvgWatt = 0;

   const ipsList = room.ipsList || [];
   ipsList.forEach((ips) => {
       const ipsId = ips.id || 'IPS-1';
       const connectedDevices = (room.inventory || []).filter(item => {
           return item.sources && item.sources.includes(ipsId);
       });
       
       const specificMax = connectedDevices.reduce((sum, item) => sum + (item.maxwatt || item.maxWatt || item.watt || 0), 0);
       const specificAvg = connectedDevices.reduce((sum, item) => sum + (item.avgwatt || item.avgWatt || item.watt || 0), 0);
       
       const dMax = specificMax > 0 ? specificMax : (ips.ratingWatts || 0);
       const dAvg = specificAvg > 0 ? specificAvg : Math.round(dMax * 0.75);
       
       calculatedTotalMaxWatt += dMax;
       calculatedTotalAvgWatt += dAvg;
   });

   // যদি লিস্টে IPS থাকে, তবে টোটাল ম্যাক্স ও এভারেজ ওয়াট হিসেবে ক্যালকুলেট করা যোগফলটি ব্যবহার হবে
   const finalMaxWatt = ipsList.length > 0 ? calculatedTotalMaxWatt : totalMaxWatt;
   const finalAvgWatt = ipsList.length > 0 ? calculatedTotalAvgWatt : totalAvgWatt;





   const ipsWattHTML = `
         <span class="max-watt">${totalMaxWatt}W (Max)</span>
         <span class="avg-watt">~${totalAvgWatt}W (Avg)</span>
       `;

    let inventoryRows = (room.inventory || []).map(item => {
        const itemWatt = item.watt || 0;
        const sources = item.sources || ["Grid"];

        const sourceBadges = sources.map(src => {
            let srcClass = "src-grid";
            if (src.startsWith("IPS")) srcClass = "src-ips";
            else if (src === "ATS") srcClass = "src-ats";

            return `<span class="src-badge ${srcClass}">${src === 'Grid' ? '⚡ Grid' : '🔋 ' + src}</span>`;
        }).join(' ');

        return `
            <tr>
                <td>${item.device}</td>
                <td>${item.serial || 'N/A'}</td>
                <td>${item.installDate || 'N/A'}</td>
                <td>${item.warranty || 'Active'}</td>
                <td>${itemWatt} W</td>
                <td>${sourceBadges}</td>
            </tr>
        `;
    }).join('');

//document.getElementById('modalTotalWatt').innerText = `${totalServerRoomWatt} W`;
// Modal-er jonno over-load check

// এখানে ipsRatingValue ভেরিয়েবলটি ডিক্লেয়ার করে নিন
    const ipsRatingValue = (room.ipsList && room.ipsList[0] && room.ipsList[0].ratingWatts) ? room.ipsList[0].ratingWatts : 2400;

// ওভারলোড চেক ও মোডালের কালার লজিক
    const isModalOverload = totalMaxWatt > ipsRatingValue; // (ba apnar room-er ips rating)
    const modalMaxColor = isModalOverload ? "#ef4444" : "#94a3b8"; // red if exceed, default gray/green otherwise


    document.getElementById('modalTotalWatt').innerHTML = `
    ${finalAvgWatt} W 
    <span style="font-size: 11px; color: #94a3b8; display: block; margin-top: 2px;">
        (<span style="color: ${modalMaxColor}; font-weight: 600;">${finalMaxWatt}W Max</span> / ~${finalAvgWatt}W Avg)
    </span>
`;



    document.getElementById('modalTotalAmp').innerText = `${(totalServerRoomWatt / systemVoltage).toFixed(2)} A`;
    document.getElementById('modalInventoryBody').innerHTML = inventoryRows;


// // 🟢 ২. ক্যানভাস লাইভ গ্রাফ রেন্ডার
//     if (typeof renderPowerGraph ==='function'){
//        renderPowerGraph(ipsLoads, totalServerRoomWatt);
//     }
    


   // Meter Information Update
    const meterBalance = room.meterInfo ? room.meterInfo.balanceBDT : 0;
    if(document.getElementById('modalMeterAcc')) {
        document.getElementById('modalMeterAcc').innerText = `A/C: ${room.meterInfo ? room.meterInfo.accountNo : 'N/A'}`;
    }

    updateMeterStatus(meterBalance);

   // Grid State নির্ণয়
    const isGridDown = room.mainLine === "DOWN" || meterBalance <= 0;



    // Safe Battery & Door Check
    const isBatteryLow = room.batteryLevel && parseInt(room.batteryLevel) < 30;
    const isDoorOpen = room.door && String(room.door).toUpperCase().includes('OPEN');


  // Main Line Text & Alert Signal আপডেট
    if (document.getElementById('modalMainLine')) {
        const mainLineEle = document.getElementById('modalMainLine');
        mainLineEle.innerText = isGridDown ? 'DOWN' : (room.mainLine || 'UP');

        if (isGridDown) {
            mainLineEle.className = 'status-tag down pulse-red';
        } else {
            mainLineEle.className = 'status-tag normal pulse-green';
        }
    }
    



    // IPS Mode (STANDBY -> INVERTER ON) আপডেট
    if (document.getElementById('modalIpsStatus')) {
        document.getElementById('modalIpsStatus').innerText = isGridDown ? 'INVERTER ON' : (room.ips || 'STANDBY');
    }

    if (document.getElementById('modalBatteryLevel')) {
        const batElem = document.getElementById('modalBatteryLevel');
        batElem.innerText = room.batteryLevel || 'N/A';

        if (parseInt(room.batteryLevel) < 30) {
            batElem.classList.add('text-danger');
        } else {
            batElem.classList.remove('text-danger');
        }
    }




// 🟢 Generator Logics (Modern & Unique UI Design)
const existingGenRow = document.getElementById('dynamicGenRow');
if (existingGenRow) existingGenRow.remove();

if (room.Generator || room.generator) {
    const genValue = room.Generator || room.generator;
    const batteryElem = document.getElementById('modalBatteryLevel');
    const batteryRow = batteryElem?.closest('.metric-item') || batteryElem?.closest('li') || batteryElem?.parentElement;
    const parentContainer = batteryRow?.parentElement;

    if (batteryRow && parentContainer) {
        parentContainer.style.cssText = 'display: flex !important; flex-direction: column !important; width: 100% !important; gap: 10px !important;';

        const genRow = document.createElement('div');
        genRow.id = 'dynamicGenRow';
        genRow.style.cssText = 'display: flex !important; flex-direction: column !important; width: 100% !important; border-top: 1px solid rgba(255,255,255,0.08) !important; padding-top: 10px !important; margin-top: 2px !important;';

        const fuel = room.fuelLevel || room.fuel || '85%';
        const fuelNum = parseInt(fuel) || 85;
        const genBattery = room.genBattery || '12.8V';
        const lastService = room.lastService || '05.06.26 ago';
        const runTime = room.totalRunTime || '142 hrs';

        genRow.innerHTML = `
            <div style="display: flex !important; justify-content: space-between !important; align-items: center !important; width: 100% !important;">
                <div style="display: flex; align-items: center; gap: 8px;">
                    <span style="white-space: nowrap; font-weight: 500; color: #94a3b8;">Generator Status</span>
                    <button type="button" id="toggleGenDetails" style="background: rgba(56, 189, 248, 0.1); border: 1px solid rgba(56, 189, 248, 0.25); color: #38bdf8; font-size: 0.7rem; font-weight: 600; padding: 2px 8px; border-radius: 12px; cursor: pointer; display: flex; align-items: center; gap: 4px; outline: none; transition: all 0.2s;">
                        <span>Telemetry</span> <span id="genArrow" style="font-size: 0.6rem; transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);">▼</span>
                    </button>
                </div>
                <strong style="color: #f59e0b; font-size: 0.85rem; padding: 2px 8px; background: rgba(245, 158, 11, 0.1); border: 1px solid rgba(245, 158, 11, 0.2); border-radius: 6px; white-space: nowrap;">${genValue}</strong>
            </div>

            <!-- 🔒 Unique Glassmorphism Details Panel -->
            <div id="genDetailsPanel" style="display: none; background: rgba(15, 23, 42, 0.75); backdrop-filter: blur(8px); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 10px; padding: 12px; margin-top: 10px; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);">
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                    
                    <!-- Fuel Level with Progress Bar -->
                    <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.05); padding: 8px; border-radius: 8px;">
                        <div style="display: flex; justify-content: space-between; font-size: 0.72rem; color: #94a3b8; margin-bottom: 4px;">
                            <span>⛽ Fuel Level</span>
                            <span style="color: #38bdf8; font-weight: 600;">${fuel}</span>
                        </div>
                        <div style="width: 100%; background: rgba(255, 255, 255, 0.1); height: 4px; border-radius: 2px; overflow: hidden;">
                            <div style="width: ${fuelNum}%; background: linear-gradient(90deg, #0284c7, #38bdf8); height: 100%;"></div>
                        </div>
                    </div>

                    <!-- Battery Status -->
                    <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.05); padding: 8px; border-radius: 8px; display: flex; flex-direction: column; justify-content: center;">
                        <span style="font-size: 0.72rem; color: #94a3b8;">⚡ Starter Battery</span>
                        <div style="display: flex; align-items: center; gap: 6px; margin-top: 2px;">
                            <span style="color: #4ade80; font-size: 0.85rem; font-weight: 700;">${genBattery}</span>
                            <span style="font-size: 0.6rem; color: #4ade80; background: rgba(74, 222, 128, 0.15); padding: 1px 4px; border-radius: 4px;">HEALTHY</span>
                        </div>
                    </div>

                    <!-- Service Status -->
                    <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.05); padding: 8px; border-radius: 8px;">
                        <span style="font-size: 0.72rem; color: #94a3b8; display: block;">🛠️ Service History</span>
                        <span style="font-size: 0.8rem; color: #e2e8f0; font-weight: 500; display: block; margin-top: 2px;">${lastService}</span>
                    </div>

                    <!-- Runtime -->
                    <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.05); padding: 8px; border-radius: 8px;">
                        <span style="font-size: 0.72rem; color: #94a3b8; display: block;">⏱️ Total Runtime</span>
                        <span style="font-size: 0.8rem; color: #cbd5e1; font-weight: 600; display: block; margin-top: 2px;">${runTime}</span>
                    </div>

                </div>
            </div>
        `;
        
        batteryRow.insertAdjacentElement('afterend', genRow);

        const toggleBtn = genRow.querySelector('#toggleGenDetails');
        const detailsPanel = genRow.querySelector('#genDetailsPanel');
        const genArrow = genRow.querySelector('#genArrow');

        toggleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const isHidden = detailsPanel.style.display === 'none';
            detailsPanel.style.display = isHidden ? 'block' : 'none';
            genArrow.style.transform = isHidden ? 'rotate(180deg)' : 'rotate(0deg)';
            toggleBtn.style.background = isHidden ? 'rgba(56, 189, 248, 0.25)' : 'rgba(56, 189, 248, 0.1)';
        });
    }
}





// Function to update single Device State visually
function updateControlUI(toggleId, iconId, activeType) {
    const toggle = document.getElementById(toggleId);
    const icon = document.getElementById(iconId);

    if (!toggle || !icon) return;


    // Purono active & off classes remove kora
    icon.classList.remove('icon-off', 'icon-light-on', 'icon-fan-on', 'icon-ac-on', 'active-ac', 'active-fan', 'active-light', 'off');



    if (toggle.checked) {
        if (activeType === 'light' || activeType === 'active-light') icon.classList.add('icon-light-on');
        if (activeType === 'fan' || activeType === 'active-fan') icon.classList.add('icon-fan-on');
        if (activeType === 'ac' || activeType === 'active-ac') icon.classList.add('icon-ac-on');
    } else {
        //icon.classList.remove(activeType);
        icon.classList.add('icon-off');
    }
}

// Attach Event Listeners to Switches
document.getElementById('toggleAc')?.addEventListener('change', () => {
    updateControlUI('toggleAc', 'iconAc', 'active-ac');
});

document.getElementById('toggleFan')?.addEventListener('change', () => {
    updateControlUI('toggleFan', 'iconFan', 'active-fan');
});

document.getElementById('toggleLight')?.addEventListener('change', () => {
    updateControlUI('toggleLight', 'iconLight', 'active-light');
});


// Call this when modal opens / room data loads
function syncSmartControls(room) {
    if (!room) return;

    const acToggle = document.getElementById('toggleAc');
    const fanToggle = document.getElementById('toggleFan');
    const lightToggle = document.getElementById('toggleLight');

    // Set Switch States based on room object (Assuming room.ac = 'ON'/'OFF' or true/false)
    if (acToggle) acToggle.checked = (room.ac === 'ON' || room.ac === true);
    if (fanToggle) fanToggle.checked = (room.fan === 'ON' || room.fan === true);
    if (lightToggle) lightToggle.checked = (room.light === 'ON' || room.light === true);

    // Initial UI Update
    if (typeof updateControlUI === 'function') {
        updateControlUI('toggleAc', 'iconAc', 'active-ac');
        updateControlUI('toggleFan', 'iconFan', 'active-fan');
        updateControlUI('toggleLight', 'iconLight', 'active-light');
    }


    // 3. Main Line Glow Signal Sync
    const mainLineElem = document.getElementById('mainLineBadge') || document.getElementById('modalMainLine');
    if (mainLineElem) {
        const isGridOn = room.mainLine && room.mainLine.toUpperCase() === 'UP';
        mainLineElem.innerText = room.mainLine || (isGridOn ? 'UP' : 'DOWN');
        mainLineElem.className = isGridOn ? 'status-badge-up' : 'status-badge-down';
    }


    // Temperature & Door/Window Status Update
    if (document.getElementById('modalTemp')) document.getElementById('modalTemp').innerText = room.temp || 'N/A';
    if (document.getElementById('modalWindow')) document.getElementById('modalWindow').innerText = room.window || 'N/A';
    
    if (document.getElementById('modalDoor')) {
        const doorElem = document.getElementById('modalDoor');
        const doorVal = room.door || 'Closed';
        doorElem.innerText = doorVal;

        if (String(doorVal).toUpperCase().includes('OPEN')) {
            doorElem.classList.add('text-danger');
        } else {
            doorElem.classList.remove('text-danger');
        }
    }
}



    // 🟢 ৩. ডাইনামিক ব্যাটারি রেন্ডারিং (room, isGridDown এবং ipsLoads পাস করা হয়েছে)
    //renderIpsBatteries(room, isGridDown, ipsLoads);
    // 🟢 renderIpsBatteries কল করার সময় totalMaxWatt ও totalAvgWatt দিন
     renderIpsBatteries(room, isGridDown, ipsLoads, finalMaxWatt, finalAvgWatt);  

    modal.style.display = 'flex';
}



// ==========================================
// Meter Status Indicator Function
// ==========================================
function updateMeterStatus(balance) {
  const balanceText = document.getElementById('modalMeterBalance');
  const dot = document.getElementById('meter-dot');
  const statusText = document.getElementById('meter-status-text');

  const currentBalance = parseFloat(balance) || 0;

  if (balanceText) balanceText.innerText = `৳ ${currentBalance}`;
  if (!dot || !statusText) return;

  // আগের কালার ক্লাস মুছে ফেলার জন্য
  dot.className = "w-2.5 h-2.5 rounded-full";
  statusText.className = "text-xs font-medium";

  if (currentBalance >= 1000) {
    dot.classList.add("dot-available");
    statusText.classList.add("status-available");
    statusText.innerText = "Available";
    if (balanceText) balanceText.className = "text-2xl font-black status-available";

  } else if (currentBalance > 0 && currentBalance < 1000) {
    dot.classList.add("dot-warning", "animate-pulse");
    statusText.classList.add("status-warning");
    statusText.innerText = "Quick Recharge";
    if (balanceText) balanceText.className = "text-2xl font-black status-warning";

  } else {
    dot.classList.add("dot-danger", "animate-pulse");
    statusText.classList.add("status-danger");
    statusText.innerText = "Balance 0";
    if (balanceText) balanceText.className = "text-2xl font-black status-danger";
  }
}


/**
 * Update Battery Status and Liquid Level
 * @param {number} batteryPercent - 0 to 100
 * @param {boolean} isCharging - Grid Power ON / Charging Status
 * @param {number} watt - Current IPS Load Watt
 */
function updateIpsBatteryVisual(batteryPercent, isCharging, watt) {
  const casing = document.querySelector('.battery-casing');
  const liquidFill = document.getElementById('liquidFill');
  const wattLabel = document.getElementById('ipsWattLabel');

  // 🟢 ১. Safety Check: এলিমেন্ট না থাকলে কোড এখানেই থেমে যাবে (Crash করবে না)
  if (!liquidFill || !casing) return;

  // ২. ওয়াট আপডেট
  if (wattLabel) wattLabel.innerText = `${watt}W`;

  // ৩. লিকুইড হাইট (পার্সেন্টেজ অনুযায়ী)
  const currentPercent = Math.min(Math.max(batteryPercent, 0), 100);
  liquidFill.style.height = `${currentPercent}%`;

  // ৪. গ্রিড লাইনের অবস্থা অনুযায়ী চার্জিং অ্যানিমেশন ও কালার চেঞ্জ
  if (isCharging) {
    // চার্জিং স্টেট (Grid UP)
    casing.classList.add('is-charging');
    casing.classList.remove('low-battery');
  } else {
    // ডিসচার্জিং স্টেট (Grid OFF)
    casing.classList.remove('is-charging');

    // ব্যালেন্স বা চার্জ ২০%-এর নিচে নামলে লাল
    if (currentPercent <= 20) {
      casing.classList.add('low-battery');
    } else {
      casing.classList.remove('low-battery');
    }
  }
}

// টেস্ট করার জন্য কল:
// উদাহরণ ১: গ্রিড চালু আছে (Charging State)
// updateIpsBatteryVisual(85, true, 1045);

// উদাহরণ ২: গ্রিড অফ (IPS Running, Battery 45%)
// updateIpsBatteryVisual(45, false, 1045);



// ==========================================
// Render IPS Batteries Dynamically from roomsData
// ==========================================
function renderIpsBatteries(roomData, isGridDownExplicit, ipsLoads = {}, totalMaxWatt = 0, totalAvgWatt = 0, totalServerRoomWatt = 0) {
  const container = document.getElementById('modalIpsContainer'); // আপনার Graph Container ID
  if (!container) return;


  // ১. মিটার ব্যালেন্স ও মেইন লাইন থেকে গ্রিড স্টেট নির্ধারণ
  const meterBalance = roomData.meterInfo ? roomData.meterInfo.balanceBDT : 0;
  const isGridOn = isGridDownExplicit !== undefined
     ? !isGridDownExplicit
     : (roomData.mainLine && roomData.mainLine.toUpperCase() === 'UP' && meterBalance > 0);


// ২. স্টেট ব্যাজ টেক্সট ও কালার সেটআপ  
  const statusBadgeText = isGridOn ? '⚡ Charging...' : '🔋 Inverter Active (Discharging)';
  const statusBadgeColor = isGridOn ? '#34d399' : '#f59e0b';

  // ২. ipsList না থাকলে
  const ipsList = roomData.ipsList || [];


//   const inventory = roomData.inventory || [];
  if (ipsList.length === 0) {
    container.innerHTML = `<p style="color: #94a3b8; text-align: center; width: 100%;">No IPS Connected</p>`;
    return;
  }

  // ৩. ডাইনামিক HTML স্ট্রাকচার জেনারেট
  let htmlContent = `
    <div style="display: flex; flex-direction: column; align-items: center; gap: 10px; width: 100%;">
            <div style="font-size: 12px; font-weight: 600; color: ${statusBadgeColor}; background: rgba(15, 23, 42, 0.6); padding: 4px 12px; border-radius: 20px; border: 1px solid ${statusBadgeColor}40;">
                ${statusBadgeText}
            </div>

            <div style="display: flex; justify-content: center; align-items: flex-end; gap: 20px; flex-wrap: wrap; width: 100%; margin-top: 4px;">
     `;

  // ৪. ipsList-এর প্রতিটি IPS প্রসেস করা

 let calculatedTotalMaxWatt = 0;
 let calculatedTotalAvgWatt = 0;


  ipsList.forEach((ips) => {
    const ipsId = ips.id || 'IPS-1'// e.g., "IPS-1"
    const batteryPercent = ips.chargePercent !== undefined ? ips.chargePercent : 100;


    // 🔹 roomsData থেকে Dynamic Field পড়া
    const installDate = ips.installDate || 'N/A';
    const brand = ips.brand || 'Hamko';
    const voltage = ips.batteryVoltage || 96;
    const totalAh = ips.totalAh || 800;


   // 🟢 FIX: Ei specific IPS-er under-e thaka connected devices filter kora
    const connectedDevices = (roomData.inventory || []).filter(item => {
            return item.sources && item.sources.includes(ipsId);
        });


   // Specific IPS-er nijsw Max & Avg Watt calculation
    const specificMaxWatt = connectedDevices.reduce((sum, item) => sum + (item.maxwatt || item.maxWatt || item.watt || 0), 0);
    const specificAvgWatt = connectedDevices.reduce((sum, item) => sum + (item.avgwatt || item.avgWatt || item.watt || 0), 0);    


   // Jodi specific load 0 hoy, tobe fallback hisebe ips.ratingWatts use kora jabe
    const displayMaxWatt = specificMaxWatt > 0 ? specificMaxWatt : (ips.ratingWatts || 0);
    const displayAvgWatt = specificAvgWatt > 0 ? specificAvgWatt : Math.round(displayMaxWatt * 0.75);
        
        
    calculatedTotalMaxWatt += displayMaxWatt;
    calculatedTotalAvgWatt += displayAvgWatt;

    // 🟢 রুমের মোট MaxWatt ও AvgWatt যদি ব্যাকএন্ড বা ক্যালকুলেশন থেকে আসে তা ব্যাটারির ওপরে শো করবে
    // const displayMaxWatt = totalMaxWatt > 0 ? totalMaxWatt : (ips.ratingWatts || 0);
    // const displayAvgWatt = totalAvgWatt > 0 ? totalAvgWatt : Math.round(displayMaxWatt * 0.75);

    // ⏱️ ব্যাকআপ হিসাব শুধুমাত্র avgWatt দিয়ে করা হচ্ছে
    const health = calculateBatteryHealth(installDate);
    const backupTimeText = calculateBackupTime(displayAvgWatt, voltage, totalAh, batteryPercent, health.factor);


   const isOverload = displayMaxWatt > (ips.ratingWatts || 0);
   const dynamicColor = isOverload ? '#ef4444' : '#ffffff';




        let themeColor = '#34d399'; 
        if (!isGridOn) {
            themeColor = batteryPercent <= 20 ? '#f43f5e' : '#f59e0b';
        }
        
       // 🟢 সমাধান: isGridOn সত্য হলে 'is-charging' আর কম চার্জে 'low-battery' ক্লাস যুক্ত হবে
    const chargingClass = isGridOn ? 'is-charging' : 'is-discharging';
    const lowBatteryClass = (!isGridOn && batteryPercent <= 20) ? 'low-battery' : '';





      htmlContent += `
    <div class="ips-battery-card" style="display: flex; flex-direction: column; align-items: center; text-align: center;">
        <div style="display: flex; flex-direction: column; align-items: center; margin-bottom: 4px;">


            <span style="font-size: 13px; font-weight: 800; color: ${isOverload ? '#ef4444' : '#ffffff'};">
              ${displayMaxWatt}W 
            <span style="font-size: 9px; color: #f59e0b; font-weight: 600;">(Max)</span>
           </span>

            <span style="font-size: 10px; font-weight: 600; color: #38bdf8;">~${displayAvgWatt}W (Avg)</span>
        </div>
        
        <div class="battery-casing ${chargingClass} ${lowBatteryClass}" 
             style="position: relative; width: 44px; height: 85px; border: 2px solid ${themeColor}; border-radius: 6px; background: rgba(15, 23, 42, 0.75); display: flex; flex-direction: column-reverse; overflow: hidden;">
            <div style="position: absolute; top: -5px; left: 50%; transform: translateX(-50%); width: 14px; height: 3px; background: ${themeColor}; border-radius: 2px 2px 0 0;"></div>
            <div id="liquidFill" class="liquid-fill" style="height: ${batteryPercent}%; width: 100%; background: ${themeColor}; transition: height 0.8s ease-in-out;"></div>
            <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 13px; z-index: 3;">
                ${isGridOn ? '⚡' : ''}
            </div>
        </div>

        <span style="font-size: 11px; color: #cbd5e1; font-weight: 600; margin-top: 4px;">${ipsId}</span>
        <span style="font-size: 9px; color: #38bdf8; font-weight: 500;">🏷️ ${brand}</span>
        <span style="font-size: 9px; color: #94a3b8;">📅 ${installDate}</span>

        <div style="font-size: 9px; font-weight: 700; color: #38bdf8; background: rgba(56, 189, 248, 0.12); border: 1px solid rgba(56, 189, 248, 0.3); padding: 1px 5px; border-radius: 4px; margin-top: 2px;">
            ⏱️ Backup: ${backupTimeText}
        </div>

        <div style="font-size: 8px; font-weight: 700; color: ${health.color}; background: ${health.bg}; border: 1px solid ${health.color}; padding: 1px 5px; border-radius: 4px; margin-top: 2px;">
            ${health.text}
        </div>
    </div>
    `;
  });


  htmlContent += `
        </div>
    </div>
  `;

  container.innerHTML = htmlContent;
}




// 🟢 Dynamic Warranty & Health Color Logic
function calculateBatteryHealth(installDateStr) {
    // if (!installDateStr) return { text: "N/A", color: "#cbd5e1", bg: "rgba(203, 213, 225, 0.1)", factor: 1.0 };
    if (!installDateStr || installDateStr === "00.00.0000") {
        return { text: "Expired", color: "#f87171", bg: "rgba(248, 113, 113, 0.12)", factor: 0.5 };
    }

    const installDate = new Date(installDateStr);
    const today = new Date(); // ২০২৬ সাল অনুযায়ী অটোমেটিক ক্যালকুলেট করবে

    if (isNaN(installDate.getTime())) {
        return { text: "Expired", color: "#f87171", bg: "rgba(248, 113, 113, 0.12)", factor: 0.5 };
    }
    
    // সময় ও বছর নির্ণয়
    const diffTime = Math.abs(today - installDate);
    const diffYears = diffTime / (1000 * 60 * 60 * 24 * 365.25);

    // 🟢 ২ বছরের কম হলে -> Warranty Active (Green)
    if (diffYears <= 2) {
        return { 
            text: "Warranty Active", 
            color: "#4ade80", 
            bg: "rgba(74, 222, 128, 0.12)",
            factor: 1.0
        };
    } 
    // 🟡 ২ থেকে ৩ বছরের মধ্যে হলে -> Warranty Expired (Yellow)
    else if (diffYears > 2 && diffYears <= 3) {
        return { 
            text: "Warranty Expired", 
            color: "#f59e0b", 
            bg: "rgba(245, 158, 11, 0.12)",
            factor: 0.75
        };
    } 
    // 🟠 ৩ থেকে ৪.৫ বছরের মধ্যে হলে -> Replace as soon as possible (Orange/Red)
    else if (diffYears > 3 && diffYears <= 4.5) {
        return { 
            text: "Replace as soon as possible", 
            color: "#f87171", 
            bg: "rgba(248, 113, 113, 0.12)",
            factor: 0.50 
        };
    }
    // 🔴 ৪.৫ বছরের বেশি হয়ে গেলে -> Valueless Battery ! (Dark Red)
    else {
        return { 
            text: "Valueless Battery !", 
            color: "#ef4444", 
            bg: "rgba(239, 68, 68, 0.2)",
            factor: 0.20 // অত্যন্ত কম বা না পাওয়ার মতো ব্যাকআপ
        };
    }
}



// ২. ইনভেন্টরি শো/হাইড করার জন্য নতুন ফাংশন
function toggleInventory() {
    const container = document.getElementById('inventoryContainer');
    const toggleBtn = document.getElementById('toggleInventoryBtn');
    const icon = document.getElementById('toggleIcon');

    if (!container) return;

    const isCollapsed = container.classList.contains('collapsed');

    if (isCollapsed) {
        container.classList.remove('collapsed');
        toggleBtn.classList.add('active');
        icon.innerText = '▲';
    } else {
        container.classList.add('collapsed');
        toggleBtn.classList.remove('active');
        icon.innerText = '▼';
    }
}

// ==========================================
// 6. Search & Event Handlers
// ==========================================

function filterAndRenderRooms() {
    if (typeof roomsData === 'undefined' || !roomsData) return;

    const textFilter = document.getElementById('searchInput')?.value.trim().toLowerCase() || '';
    const statusFilter = document.getElementById('statusFilter')?.value || 'all';

    const filtered = roomsData.filter(room => {
        const addressText = (room.address || room.popAddress || room.officeAddress || '').toLowerCase();
        const matchesSearch = room.name.toLowerCase().includes(textFilter) || addressText.includes(textFilter);

        const isAlert = room.mainLine === "DOWN" || (room.door && room.door.includes("OPEN"));
        
        let matchesStatus = true;
        if (statusFilter === 'alert') {
            matchesStatus = isAlert;
        } else if (statusFilter === 'grid-off') {
            matchesStatus = room.mainLine === 'DOWN';
        } else if (statusFilter === 'door-open') {
            matchesStatus = room.door && room.door.toUpperCase().includes('OPEN');
        }else if (statusFilter === 'high-load') {
           
            // Inventory total max watt vs combined IPS capacity (80% load check)
        const ipsTotalRating = room.ipsList?.reduce((s, i) => s + (i.ratingWatts || 0), 0) || 1;
        const totalMax = room.inventory?.reduce((s, i) => s + (i.maxwatt || i.watt || 0), 0) || 0;
        matchesStatus = (totalMax / ipsTotalRating) >= 0.8;
        }
        return matchesSearch && matchesStatus;
    });

    renderRooms(filtered);
}

// Live Temp Fluctuations Simulation Every 10 Seconds
setInterval(() => {
    if (typeof roomsData !== 'undefined') {
        roomsData.forEach(room => {
            if (room.temp) {
                let currentTemp = parseInt(room.temp);
                let flux = Math.random() > 0.5 ? 1 : -1;
                room.temp = `${Math.min(Math.max(currentTemp + flux, 18), 35)}°C`;
            }
        });
        filterAndRenderRooms();
    }
}, 10000);

// Event Listeners
document.getElementById('searchInput')?.addEventListener('input', filterAndRenderRooms);
document.getElementById('statusFilter')?.addEventListener('change', filterAndRenderRooms);

document.getElementById('closeModal')?.addEventListener('click', () => {
    document.getElementById('roomModal').style.display = 'none';
});

window.onclick = (e) => {
    const modal = document.getElementById('roomModal');
    if (e.target === modal) modal.style.display = 'none';
};

// Initial App Load
filterAndRenderRooms(); 




