import React, { useState, useEffect, useCallback } from 'react';
import Navbar from './screen/Navbar';
import SideBar from './screen/SideBar';
import Desktop from './screen/Desktop';
import LockScreen from './screen/LockScreen';
import BootingScreen from './screen/BootingScreen';
import AllApplications from './screen/AllApplications';
import getAppsConfig from './apps.config';
import { WindowState } from './types';
import { useNavigate } from 'react-router-dom';

export default function Ubuntu() {
  const [screenLocked, setScreenLocked] = useState(false);
  const [bgImageName, setBgImageName] = useState('wall-2');
  const [bootingScreen, setBootingScreen] = useState(true);
  const [shutDownScreen, setShutDownScreen] = useState(false);
  const [allAppsOpen, setAllAppsOpen] = useState(false);
  const [focusedWindowId, setFocusedWindowId] = useState<string | null>('about-sahil');

  // Closed windows state: default all closed except 'about-sahil' which opens on launch
  const [closedWindows, setClosedWindows] = useState<WindowState>({
    'about-sahil': false,
    'terminal': true,
    'chrome': true,
    'vscode': true,
    'spotify': true,
    'calc': true,
    'settings': true,
    'gedit': true,
    'trash': true,
  });

  const [minimizedWindows, setMinimizedWindows] = useState<WindowState>({});
  const navigate = useNavigate();

  // Load saved preferences
  useEffect(() => {
    const savedBg = localStorage.getItem('sahil_bg_image');
    if (savedBg) setBgImageName(savedBg);

    const bootTimer = setTimeout(() => {
      setBootingScreen(false);
    }, 1800);

    return () => clearTimeout(bootTimer);
  }, []);

  const changeWallpaper = useCallback((wallName: string) => {
    setBgImageName(wallName);
    localStorage.setItem('sahil_bg_image', wallName);
  }, []);

  const openApp = useCallback((id: string) => {
    const app = apps.find(a => a.id === id);
    if (!app) return;

    if (app.isExternalApp) {
      if (app.url?.startsWith('/')) {
        navigate(app.url);
      } else if (app.url) {
        window.open(app.url, '_blank');
      }
      return;
    }

    setClosedWindows(prev => ({ ...prev, [id]: false }));
    setMinimizedWindows(prev => ({ ...prev, [id]: false }));
    setFocusedWindowId(id);
    setAllAppsOpen(false);
  }, [navigate]);

  const closeWindow = useCallback((id: string) => {
    setClosedWindows(prev => ({ ...prev, [id]: true }));
    if (focusedWindowId === id) {
      setFocusedWindowId(null);
    }
  }, [focusedWindowId]);

  const minimizeWindow = useCallback((id: string) => {
    setMinimizedWindows(prev => ({ ...prev, [id]: true }));
    if (focusedWindowId === id) {
      setFocusedWindowId(null);
    }
  }, [focusedWindowId]);

  const focusWindow = useCallback((id: string) => {
    setFocusedWindowId(id);
    setMinimizedWindows(prev => ({ ...prev, [id]: false }));
  }, []);

  const lockScreen = () => {
    setScreenLocked(true);
  };

  const unLockScreen = () => {
    setScreenLocked(false);
  };

  const shutDown = () => {
    setShutDownScreen(true);
  };

  const turnOn = () => {
    setShutDownScreen(false);
    setBootingScreen(true);
    setTimeout(() => {
      setBootingScreen(false);
    }, 1800);
  };

  const toggleAllApps = () => {
    setAllAppsOpen(prev => !prev);
  };

  const apps = getAppsConfig(openApp, bgImageName, changeWallpaper);

  const currentActiveApp = apps.find(a => a.id === focusedWindowId && !closedWindows[a.id] && !minimizedWindows[a.id]);

  return (
    <div className="w-screen h-screen overflow-hidden relative bg-black ubuntu-desktop-root select-none">
      {/* Booting Screen overlay */}
      <BootingScreen
        visible={bootingScreen}
        isShutDown={shutDownScreen}
        turnOn={turnOn}
      />

      {/* Lock Screen overlay */}
      <LockScreen
        isLocked={screenLocked}
        bgImgName={bgImageName}
        unLockScreen={unLockScreen}
      />

      {/* Top Status Navigation Bar */}
      <Navbar
        lockScreen={lockScreen}
        shutDown={shutDown}
        activeAppTitle={currentActiveApp?.title}
        toggleAllApps={toggleAllApps}
      />

      {/* Left Dock / SideBar */}
      <SideBar
        apps={apps}
        closedWindows={closedWindows}
        focusedWindowId={focusedWindowId}
        openApp={openApp}
        toggleAllApps={toggleAllApps}
        allAppsOpen={allAppsOpen}
      />

      {/* Main Desktop Workspace */}
      <Desktop
        apps={apps}
        bgImageName={bgImageName}
        closedWindows={closedWindows}
        minimizedWindows={minimizedWindows}
        focusedWindowId={focusedWindowId}
        openApp={openApp}
        closeWindow={closeWindow}
        minimizeWindow={minimizeWindow}
        focusWindow={focusWindow}
        changeWallpaper={changeWallpaper}
      />

      {/* All Applications Grid Modal */}
      {allAppsOpen && (
        <AllApplications
          apps={apps}
          openApp={openApp}
          close={() => setAllAppsOpen(false)}
        />
      )}
    </div>
  );
}
