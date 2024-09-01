//Image urls for producer consumer project
import producerConsumer from '../media/producerconsumer/producerconsumer.webp'
import startProd from '../media/producerconsumer/start.webp'
import beginProd from '../media/producerconsumer/begin.webp'
import addProd from '../media/producerconsumer/addProducers.webp'
import bufferMiddle from '../media/producerconsumer/bufferMid.webp'
import bufferFull from '../media/producerconsumer/bufferFull.webp'
import removeProducer from '../media/producerconsumer/removeProducers.webp'
import saveState from '../media/producerconsumer/saveState.webp'
import loadState from '../media/producerconsumer/loadState.webp'
//Image urls for min-max project
import minMax from '../media/minmaxalg/minmax.webp'
import startGame from '../media/minmaxalg/start.webp'
import firstMove from '../media/minmaxalg/firstMove.webp'
import defend from '../media/minmaxalg/defend.webp'
import endGame from '../media/minmaxalg/end.webp'
//Image urls for state machine project
import stateMachine from '../media/statemachine/statemachine.webp'
import startState from '../media/statemachine/start.webp'
import selectMode from '../media/statemachine/select.webp'
import displayDate from '../media/statemachine/displayDate.webp'
import changeDate from '../media/statemachine/changeDate.webp'
import displayNew from '../media/statemachine/displayNew.webp'
import cantChange from '../media/statemachine/cantChange.webp'
//Image urls for swosh project
import main from '../media/swosh-media/swosh.webp';
import login from '../media/swosh-media/login.gif';
import transfer from '../media/swosh-media/transfer.gif';
import history from '../media/swosh-media/history.gif';
import table from '../media/swosh-media/table_plus.webp';
//Image urls for react shop project
import reactShop from '../media/react-shop/react-shop.webp';
import sortingFilter from '../media/react-shop/sorting-filter.gif';
import stockUpdate from '../media/react-shop/stock-update.gif';
import checkOut from '../media/react-shop/checkout.gif';
//Image urls for rest service project
import restService from '../media/rest-service/rest-service.webp';
import get from '../media/rest-service/get.gif';
import post from '../media/rest-service/post.gif';
import put from '../media/rest-service/put.gif';
import del from '../media/rest-service/delete.gif'
//Image urls for pic finder project
import start from '../media/search-js/start.webp';
import search from '../media/search-js/search.gif';
import layout from '../media/search-js/layout.gif';
import advSearch from '../media/search-js/adv-search.gif';
//Image urls for swifty project
import swiftyCart from '../media/swifty/cart.webp';
import swiftyDeliver from '../media/swifty/deliver.webp';
import swiftyHome from '../media/swifty/home.webp';
import swiftyLoading from '../media/swifty/loading.webp';
import loginSwifty from '../media/swifty/login.webp';
import swiftyProfile from '../media/swifty/profile.webp';
import swiftyRegister from '../media/swifty/register.webp';
import swiftySpecs from '../media/swifty/specs.webp';
import {swiftyDescriptions} from "./imageDescriptions";

const paragraphPlaceholder = {
    swe: 'Förbereder information om projektet. Kom tillbaka snart för att få veta mer!',
    eng: 'Preparing information about the project. Come back soon to learn more!'
};

const swiftyImages = [
    [loginSwifty, swiftyDescriptions.login],
    [swiftyRegister, swiftyDescriptions.signup],
    [swiftyLoading, swiftyDescriptions.loading],
    [swiftyHome, swiftyDescriptions.home],
    [swiftyProfile, swiftyDescriptions.profil],
    [swiftySpecs, swiftyDescriptions.shop],
    [swiftyCart, swiftyDescriptions.cart],
    [swiftyDeliver, swiftyDescriptions.deliver]
];

const producerConsumerImages = [
    [producerConsumer, paragraphPlaceholder],
    [startProd, paragraphPlaceholder],
    [beginProd, paragraphPlaceholder],
    [addProd, paragraphPlaceholder],
    [bufferMiddle, paragraphPlaceholder],
    [bufferFull, paragraphPlaceholder],
    [removeProducer, paragraphPlaceholder],
    [saveState, paragraphPlaceholder],
    [loadState, paragraphPlaceholder]
];

const minMaxImages = [
    [minMax, paragraphPlaceholder],
    [startGame, paragraphPlaceholder],
    [firstMove, paragraphPlaceholder],
    [defend, paragraphPlaceholder],
    [endGame, paragraphPlaceholder]
];

const stateMachineImages = [
    [stateMachine, paragraphPlaceholder],
    [startState, paragraphPlaceholder],
    [selectMode, paragraphPlaceholder],
    [displayDate, paragraphPlaceholder],
    [changeDate, paragraphPlaceholder],
    [displayNew, paragraphPlaceholder],
    [cantChange, paragraphPlaceholder]
];

const swoshImages = [
    [main, paragraphPlaceholder],
    [login, paragraphPlaceholder],
    [transfer, paragraphPlaceholder],
    [history, paragraphPlaceholder],
    [table, paragraphPlaceholder]
];

const reactShopImages = [
    [reactShop, paragraphPlaceholder],
    [sortingFilter, paragraphPlaceholder],
    [stockUpdate, paragraphPlaceholder],
    [checkOut, paragraphPlaceholder]
];

const restServiceImages = [
    [restService, paragraphPlaceholder],
    [get, paragraphPlaceholder],
    [post, paragraphPlaceholder],
    [put, paragraphPlaceholder],
    [del, paragraphPlaceholder]
];

const searchJs = [
    [start, paragraphPlaceholder],
    [search, paragraphPlaceholder],
    [layout, paragraphPlaceholder],
    [advSearch, paragraphPlaceholder]
];


export const imageArr = {
    swiftyImages,
    producerConsumerImages,
    minMaxImages,
    stateMachineImages,
    swoshImages,
    reactShopImages,
    restServiceImages,
    searchJs
};
