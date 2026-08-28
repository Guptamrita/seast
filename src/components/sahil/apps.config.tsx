import React from 'react';
import AboutSahil from './apps/AboutSahil';
import TerminalApp from './apps/Terminal';
import ChromeApp from './apps/Chrome';
import VsCodeApp from './apps/VsCode';
import SpotifyApp from './apps/Spotify';
import SettingsApp from './apps/Settings';
import GeditApp from './apps/Gedit';
import CalcApp from './apps/Calc';
import TrashApp from './apps/Trash';
import { AppConfig } from './types';

export const getAppsConfig = (
  openApp: (id: string) => void,
  currentWallpaper: string,
  changeWallpaper: (wall: string) => void
): AppConfig[] => [
  {
    id: "about-sahil",
    title: "About Sahil",
    icon: '/themes/Yaru/system/user-home.png',
    favourite: true,
    desktop_shortcut: true,
    screen: () => <AboutSahil />,
  },
  {
    id: "terminal",
    title: "Terminal",
    icon: '/themes/Yaru/apps/bash.png',
    favourite: true,
    desktop_shortcut: true,
    screen: () => <TerminalApp openApp={openApp} />,
  },
  {
    id: "chrome",
    title: "Google Chrome",
    icon: '/themes/Yaru/apps/chrome.png',
    favourite: true,
    desktop_shortcut: true,
    screen: () => <ChromeApp />,
  },
  {
    id: "vscode",
    title: "Visual Studio Code",
    icon: '/themes/Yaru/apps/vscode.png',
    favourite: true,
    desktop_shortcut: true,
    screen: () => <VsCodeApp />,
  },
  {
    id: "spotify",
    title: "Spotify",
    icon: '/themes/Yaru/apps/spotify.png',
    favourite: true,
    desktop_shortcut: false,
    screen: () => <SpotifyApp />,
  },
  {
    id: "calc",
    title: "Calculator",
    icon: '/themes/Yaru/apps/calc.png',
    favourite: true,
    desktop_shortcut: false,
    screen: () => <CalcApp />,
  },
  {
    id: "settings",
    title: "Settings",
    icon: '/themes/Yaru/apps/gnome-control-center.png',
    favourite: true,
    desktop_shortcut: false,
    screen: () => <SettingsApp currentWallpaper={currentWallpaper} changeWallpaper={changeWallpaper} />,
  },
  {
    id: "gedit",
    title: "Contact Sahil",
    icon: '/themes/Yaru/apps/gedit.png',
    favourite: true,
    desktop_shortcut: true,
    screen: () => <GeditApp />,
  },
  {
    id: "trash",
    title: "Trash",
    icon: '/themes/Yaru/system/user-trash-full.png',
    favourite: false,
    desktop_shortcut: true,
    screen: () => <TrashApp />,
  },
  {
    id: "github",
    title: "GitHub Profile",
    icon: '/themes/Yaru/apps/github.png',
    favourite: false,
    desktop_shortcut: true,
    isExternalApp: true,
    url: "https://github.com/vivek9patel",
  },
  {
    id: "exam-portal",
    title: "Exam Portal (Home)",
    icon: '/themes/Yaru/apps/nepal-flag.png',
    favourite: true,
    desktop_shortcut: true,
    isExternalApp: true,
    url: "/",
  }
];

export default getAppsConfig;
