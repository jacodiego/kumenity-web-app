import './assets/base.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';

import Aura from '@/presets/aura'

import Button from "primevue/button";
import StyleClass from "primevue/styleclass";

import InputTextField from '@/components/atoms/InputTextField.vue'
import CheckboxField from '@/components/atoms/CheckboxField.vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(PrimeVue, {
    unstyled: true,
    pt: Aura
})
app.component("InputTextField", InputTextField);
app.component("CheckboxField", CheckboxField);
app.component("Button", Button);
app.directive("styleclass", StyleClass);

app.use(createPinia())
app.use(router)

app.mount('#app')
