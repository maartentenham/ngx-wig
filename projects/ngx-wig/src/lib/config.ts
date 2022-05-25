import { InjectionToken } from '@angular/core';
import { NgxWigComponent } from './ngx-wig.component';

export type commandFunction = (ctx: NgxWigComponent, valueToSet?: string) => void;

export interface TButton {
  label?: string;
  icon?: string;
  title?: string;
  options?: {label: string; value: string}[];
  command?: string | commandFunction;
  styleClass?: string;
  isDropdown?: boolean; //isDropdown and visibleDropdown for dropdown menu
  visibleDropdown?: boolean;
}

export interface TButtonLibrary {
  [name: string]: TButton;
}

export const DEFAULT_LIBRARY_BUTTONS: TButtonLibrary = {
  list1: {
    label: 'UL',
    title: 'Unordered List',
    command: 'insertunorderedlist',
    styleClass: 'list-ul',
    icon: 'icon-list-ul'
  },
  list2: {
    label: 'OL',
    title: 'Ordered List',
    command: 'insertorderedlist',
    styleClass: 'list-ol',
    icon: 'icon-list-ol'
  },
  bold: {
    label: 'B',
    title: 'Bold',
    command: 'bold',
    styleClass: 'bold',
    icon: 'icon-bold'
  },
  italic: {
    label: 'I',
    title: 'Italic',
    command: 'italic',
    styleClass: 'italic',
    icon: 'icon-italic'
  },
  link: {
    label: 'Link',
    title: 'Link',
    command: 'createlink',
    styleClass: 'link',
    icon: 'icon-link'
  },
  underline: {
    label: 'U',
    title: 'Underline',
    command: 'underline',
    styleClass: 'format-underlined',
    icon: 'icon-underline'
  }
};

export const CUSTOM_LIBRARY_BUTTONS: TButtonLibrary = {
  edithtml: {
    label: 'Edit HTML',
    title: 'Edit HTML',
    command: (ctx: NgxWigComponent) => {
      ctx.editMode = !ctx.editMode;
    },
    styleClass: 'nw-button--source',
    icon: '',
  }
};


export const BUTTONS = new InjectionToken<TButton[][]>('BUTTONS');
