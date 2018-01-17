import dva from 'dva';
import './index.css';
import "./normalize.css";
import Cookies from "js-cookie";
import {jumpToVerify} from "./utils/tools";

// 1. Initialize
const app = dva();

/* 验证登录 */
if(!Cookies.get('access_token')){
  jumpToVerify();
}

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/demand').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
