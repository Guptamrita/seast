import React from 'react';

export interface AppConfig {
  id: string;
  title: string;
  icon: string;
  disabled?: boolean;
  favourite: boolean;
  desktop_shortcut: boolean;
  isExternalApp?: boolean;
  url?: string;
  screen?: () => React.ReactNode;
}

export interface WindowState {
  [id: string]: boolean;
}

export interface AppStackItem {
  id: string;
}

export interface ContactFormData {
  name: string;
  subject: string;
  message: string;
}
