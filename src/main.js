import { createApp } from 'vue'
import './style.css'
import i18n from "./i18n.js";
import { PrimeVue } from "@primevue/core";
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import {
    Button,
    Card,
    Column,
    ConfirmationService,
    ConfirmDialog,
    DataTable,
    ToggleSwitch,
    Slider,
    Dialog,
    DialogService,
    Drawer,
    FloatLabel,
    IconField,
    InputIcon,
    InputNumber,
    InputText,
    Menu,
    ProgressSpinner,
    Rating,
    SelectButton,
    Tag,
    Textarea,
    Toast,
    ToastService,
    Toolbar,
    Message,
    Fieldset,
    AutoComplete, Dropdown,
} from "primevue";

import Chart from 'primevue/chart';

import pinia from "./pinia.js";
import router from "./router/index.js";
import App from "./App.vue";

const app = createApp(App);
app.use(i18n)
    .use(pinia)

    .use(PrimeVue, { ripple: true})
    .use(ConfirmationService)
    .use(DialogService)
    .use(ToastService)
    .component('pv-button',         Button)
    .component('pv-card',           Card)
    .component('pv-chart',          Chart)
    .component('pv-input-switch', ToggleSwitch)
    .component('pv-slider', Slider)
    .component('pv-column',         Column)
    .component('pv-confirm-dialog', ConfirmDialog)
    .component('pv-data-table',     DataTable)
    .component('pv-dialog',         Dialog)
    .component('pv-select-button',  SelectButton)
    .component('pv-float-label',    FloatLabel)
    .component('pv-icon-field',     IconField)
    .component('pv-input-icon',     InputIcon)
    .component('pv-input-text',     InputText)
    .component('pv-input-number',   InputNumber)
    .component('pv-menu',           Menu)
    .component('pv-progress-spinner', ProgressSpinner)
    .component('pv-rating',         Rating)
    .component('pv-drawer',         Drawer)
    .component('pv-tag',            Tag)
    .component('pv-textarea',       Textarea)
    .component('pv-toolbar',        Toolbar)
    .component('pv-toast',          Toast)
    .component('pv-message',     Message)
    .component('pv-field-set',     Fieldset)
    .component('pv-dropdown', AutoComplete)
    .use(router)
    .mount('#app')