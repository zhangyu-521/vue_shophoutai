import Vue from 'vue'
import {Container, 
    Aside, 
    Main, 
    Header,
    Button,
    Form,
    FormItem,
    Input,
    Message,
    Menu,
    Breadcrumb,
    BreadcrumbItem,
    MenuItem,
    Submenu,
    Card,
    Row,
    Col,
    TableColumn,
    Table,
    Switch,
    Tooltip,
    Pagination,
    Dialog,
    MessageBox,
   

} from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Container)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Header)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Submenu)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Card)
Vue.use(Row)
Vue.use(Col)
Vue.use(TableColumn)
Vue.use(Table)
Vue.use(Switch)
Vue.use(Tooltip)
Vue.use(Pagination)
Vue.use(Dialog)
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm


