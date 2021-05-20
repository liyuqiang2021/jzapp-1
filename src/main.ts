import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Nav from '@/components/Nav.vue';
import Layout from '@/components/Layout.vue';
import Icon from '@/components/Icon.vue';

Vue.config.productionTip = false;

Vue.component('Nav', Nav);
Vue.component('Layout', Layout);
Vue.component('Icon', Icon);

//全局声明
declare global {
  interface Window {
    //   store: {
    //     tagList: Tag[];
    //     findTag: (id: string) => Tag;
    //     createTag: (name: string) => void;
    //     removeTag: (id: string) => boolean;
    //     updateTag: TagListModel['update'];
    //     recordList: RecordItem[];
    //     createRecord: (record: RecordItem) => void;
    //   }
  }
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
