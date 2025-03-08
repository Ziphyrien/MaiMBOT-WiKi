import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

const root = defineNoteConfig({
  dir: '',
  link: '/docs',
  sidebar: 'auto',
})

const deploy = defineNoteConfig({
  dir: '',
  link: '/docs/deploy',
  sidebar: 'auto',
})

export const notes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [ 
    root,
    deploy,
  ],
})
