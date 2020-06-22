import Vue from 'vue';

// 引入启动界面
import App from './App.vue';

// 引入路由文件
import router from './route';

// 引入基础和公共样式
import '@yelloxing/normalize.css'; import './assets/style.scss';

// 引入全局过滤器
import './filters/index';

// 引入全局指令
import './directives/index';

// 引入全局组件
import './components/index';

//根对象
window.vm = new Vue({

    //挂载点
    el: document.getElementById('root'),

    // 启用路由
    router,

    // 启动vue
    render: createElement => createElement(App)

});
