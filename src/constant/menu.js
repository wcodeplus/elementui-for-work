export const menu = [{
        url: "/console",
        icon: "el-icon-s-home",
        name: "系统首页",
    },
    {
        url: "/public",
        icon: "el-icon-menu",
        name: "基础组件",
        child: [{
                url: "/switch",
                icon: "",
                name: "Switch 开关",
            },
            {
                url: "/button",
                icon: "",
                name: "Button 按钮",
            },
        ],
    },
    {
        url: "/table",
        icon: "el-icon-s-operation",
        name: "Table系列",
        child: [{
            url: "/table",
            icon: "",
            name: "Table 系列",
        }],
    },
    {
        url: "/user",
        icon: "el-icon-setting",
        name: "用户管理"
    },
    {
        url: "/chart",
        icon: "el-icon-pie-chart",
        name: "销售统计"
    }
];
