import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import AnalyticsIcon from "@mui/icons-material/Analytics";

export const StartPageSidebarData = [
  {
    title: "記録作成・確認",
    icon: <HomeIcon />,
    link: "/startpage/select",
  },
  {
    title: "記録の統計(未実装)",
    icon: <AnalyticsIcon />,
    link: "/startpage/statistics",
  },
  {
    title: "ログアウト",
    icon: <LogoutIcon />,
    link: "/startpage/logout",
  },
];
