import { Injectable, signal, effect } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly _theme = signal<'light' | 'dark'>(
    this.getInitialTheme()
  );

  theme = this._theme.asReadonly();

  constructor() { 
    effect(() => {
      const theme = this._theme();
      this.applyTheme(theme);
      localStorage.setItem('theme', theme);
    });
  }

  private getInitialTheme(): 'light' | 'dark' {
    const savedTheme = localStorage.getItem('theme');
    return (savedTheme || 'light') as 'light' | 'dark';
  }

  private applyTheme(theme: 'light' | 'dark') {
    const html = document.documentElement;
    html.classList.remove('light', 'dark');
    html.classList.add(theme);
  }

  toggleTheme() {
    this._theme.update(current => current === 'light' ? 'dark' : 'light');
  }

}
