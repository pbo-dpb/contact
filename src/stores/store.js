import { defineStore } from 'pinia'
import en from '../assets/strings/en.json'
import fr from '../assets/strings/fr.json'

import treemap from '../assets/treemap.json'
import Panel from '../Panel'


const enMd = import.meta.glob('../assets/strings/en/*.md', { eager: true, query: '?raw', })
// Loop through the keys and assign the `default` value to the `en` object. We need to keep only the filename without the extension and the path.
Object.keys(enMd).forEach(key => {
    en[key.split('/').pop().split('.').shift()] = enMd[key].default
})

const frMd = import.meta.glob('../assets/strings/fr/*.md', { eager: true, query: '?raw', })
// Loop through the keys and assign the `default` value to the `en` object. We need to keep only the filename without the extension and the path.
Object.keys(frMd).forEach(key => {
    fr[key.split('/').pop().split('.').shift()] = frMd[key].default
})




export default defineStore('store', {
    state: () => ({
        language: document.documentElement.lang,
        iStrings: { en, fr },
        treemap: new Panel(treemap),
        stack: [new Panel(treemap)]
    }),

    getters: {
        strings(state) {
            return state.iStrings[state.language];
        },
        currentPanel: (state) => state.stack.length ? state.stack[state.stack.length - 1] : state.treemap,
        previousPanel: (state) => {
            return state.stack.length > 1 ? state.stack[state.stack.length - 2] : null
        }
    },

    actions: {
        pushToStack(panel) {
            this.stack = [...
                this.stack,
                panel
            ]
        },
        popLastFromStack() {
            this.stack.pop()
        }
    },

})