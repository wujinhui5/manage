import Vue from 'vue';
import {
    Pagination,
    Dialog,
    DatePicker,
    Header,
    Main,
    Row,
    Col,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Submenu,
    Menu,
    MenuItem,
    MenuItemGroup,
    Container,
    Table,
    TableColumn,
    Form,
    FormItem,
    Button,
    Input,
    Breadcrumb,
    BreadcrumbItem,
    Option,
    Select,
    Card,
    Message
} from 'element-ui';

Vue.use(Pagination);
Vue.use(Dialog);
Vue.use(Header);
Vue.use(Main);
Vue.use(DatePicker);
Vue.use(Row);
Vue.use(Col);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Submenu);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Container);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Button);
Vue.use(Input);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Option);
Vue.use(Card);
Vue.use(Select);

Vue.prototype.$message = Message;