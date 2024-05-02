import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";

export const StartPageSidebarData = [
  {
    title: "記録作成・確認",
    icon: <HomeIcon />,
    link: "/select",
  },
  {
    title: "記録の統計(未実装)",
    icon: <AnalyticsIcon />,
    link: "/statistics",
  },
  {
    title: "ログアウト",
    icon: <LogoutIcon />,
    link: "/logout",
  },
  {
    title: "使い方(未実装)",
    icon: <LocalLibraryIcon />,
    link: "/select",
  },
];
