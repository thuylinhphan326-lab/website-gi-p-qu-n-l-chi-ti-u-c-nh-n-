// ===========================================
// BUDGET PLANNER DATABASE
// Version 2.0
// ===========================================

const budgetData = {

    // =========================================
    // SỞ THÍCH
    // =========================================

    hobbies:{

        male:[

            {
                id:"football",
                name:"⚽ Đá bóng",
                monthlyCost:300000,
                items:[
                    "Tiền sân",
                    "Nước uống",
                    "Giày",
                    "Quỹ đội"
                ]
            },

            {
                id:"gym",
                name:"🏋 Gym",
                monthlyCost:450000,
                items:[
                    "Thẻ tập",
                    "Nước",
                    "Găng tay"
                ]
            },

            {
                id:"badminton",
                name:"🏸 Cầu lông",
                monthlyCost:250000,
                items:[
                    "Thuê sân",
                    "Cầu",
                    "Quấn cán"
                ]
            },

            {
                id:"cycling",
                name:"🚴 Đạp xe",
                monthlyCost:150000,
                items:[
                    "Bảo dưỡng",
                    "Nước uống"
                ]
            },

            {
                id:"running",
                name:"🏃 Chạy bộ",
                monthlyCost:100000,
                items:[
                    "Nước",
                    "Giày"
                ]
            }

        ],

        female:[

            {
                id:"yoga",
                name:"🧘 Yoga",
                monthlyCost:400000,
                items:[
                    "Lớp học",
                    "Thảm",
                    "Nước"
                ]
            },

            {
                id:"dance",
                name:"💃 Dance",
                monthlyCost:350000,
                items:[
                    "Lớp học",
                    "Trang phục"
                ]
            },

            {
                id:"badminton",
                name:"🏸 Cầu lông",
                monthlyCost:250000,
                items:[
                    "Thuê sân",
                    "Cầu"
                ]
            },

            {
                id:"reading",
                name:"📚 Đọc sách",
                monthlyCost:200000,
                items:[
                    "Sách",
                    "Cafe đọc sách"
                ]
            },

            {
                id:"swimming",
                name:"🏊 Bơi",
                monthlyCost:350000,
                items:[
                    "Vé bơi",
                    "Đồ bơi"
                ]
            }

        ]

    },

    // =========================================
    // HỌC SINH (11-17)
    // =========================================

    student:{

        male:{

            title:"Học sinh Nam (11-17 tuổi)",

            note:"Độ tuổi này chủ yếu sử dụng tiền tiêu vặt, chưa phải chi trả các khoản thiết yếu.",

            categories:[

                {
                    name:"🍔 Ăn uống",
                    percent:28,
                    items:[
                        "Ăn sáng",
                        "Ăn vặt",
                        "Nước uống"
                    ]
                },

                {
                    name:"📚 Học tập",
                    percent:25,
                    items:[
                        "Sách",
                        "Bút",
                        "Photo",
                        "Dụng cụ học tập"
                    ]
                },

                {
                    name:"⚽ Thể thao",
                    percent:15,
                    items:[
                        "Đá bóng",
                        "Cầu lông",
                        "Gym"
                    ]
                },

                {
                    name:"🎮 Giải trí",
                    percent:10,
                    items:[
                        "Game",
                        "Xem phim",
                        "Cafe"
                    ]
                },

                {
                    name:"🎁 Quà tặng",
                    percent:7,
                    items:[
                        "Sinh nhật",
                        "Hoạt động lớp"
                    ]
                },

                {
                    name:"💰 Tiết kiệm",
                    percent:15,
                    items:[
                        "Ống heo",
                        "Quỹ dự phòng"
                    ]
                }

            ]

        },

        female:{

            title:"Học sinh Nữ (11-17 tuổi)",

            note:"Phần lớn chi phí sinh hoạt đã được gia đình hỗ trợ.",

            categories:[

                {
                    name:"🍱 Ăn uống",
                    percent:27,
                    items:[
                        "Ăn sáng",
                        "Ăn vặt",
                        "Trà sữa"
                    ]
                },

                {
                    name:"📚 Học tập",
                    percent:25,
                    items:[
                        "Sách",
                        "Vở",
                        "Photo"
                    ]
                },

                {
                    name:"🧘 Thể thao",
                    percent:13,
                    items:[
                        "Yoga",
                        "Dance",
                        "Cầu lông"
                    ]
                },

                {
                    name:"💄 Chăm sóc cá nhân",
                    percent:10,
                    items:[
                        "Mỹ phẩm",
                        "Phụ kiện"
                    ]
                },

                {
                    name:"🎁 Quà tặng",
                    percent:10,
                    items:[
                        "Sinh nhật",
                        "Bạn bè"
                    ]
                },

                {
                    name:"💰 Tiết kiệm",
                    percent:15,
                    items:[
                        "Quỹ dự phòng"
                    ]
                }

            ]

        }

    },

    // =========================================
    // SINH VIÊN
    // (Sẽ thêm ở phần 2)
    // =========================================

    university:{},

    // =========================================
    // NGƯỜI ĐI LÀM
    // (Sẽ thêm ở phần 3)
    // =========================================

    worker:{},

    // =========================================
    // NGHỈ HƯU
    // (Sẽ thêm ở phần 4)
    // =========================================

    retired:{},

    // =========================================
    // MÀU BIỂU ĐỒ
    // =========================================

    chartColors:[

        "#2563eb",
        "#22c55e",
        "#f59e0b",
        "#ef4444",
        "#8b5cf6",
        "#06b6d4",
        "#f97316",
        "#14b8a6"

    ]

};
