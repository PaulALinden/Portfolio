//Image urls for producer consumer project
import producerConsumer from '../media/producerconsumer/producerconsumer.png'
import startProd from '../media/producerconsumer/start.png'
import beginProd from '../media/producerconsumer/begin.png'
import addProd from '../media/producerconsumer/addProducers.png'
import bufferMiddle from '../media/producerconsumer/bufferMid.png'
import bufferFull from '../media/producerconsumer/bufferFull.png'
import removeProducer from '../media/producerconsumer/removeProducers.png'
import saveState from '../media/producerconsumer/saveState.png'
import loadState from '../media/producerconsumer/loadState.png'
//Image urls for min-max project
import minMax from '../media/minmaxalg/minmax.png'
import startGame from '../media/minmaxalg/start.png'
import firstMove from '../media/minmaxalg/firstMove.png'
import defend from '../media/minmaxalg/defend.png'
import endGame from '../media/minmaxalg/end.png'
//Image urls for state machine project
import stateMachine from '../media/statemachine/statemachine.png'
import startState from '../media/statemachine/start.png'
import selectMode from '../media/statemachine/select.png'
import displayDate from '../media/statemachine/displayDate.png'
import changeDate from '../media/statemachine/changeDate.png'
import displayNew from '../media/statemachine/displayNew.png'
import cantChange from '../media/statemachine/cantChange.png'
//Image urls for swosh project
import main from '../media/swosh-media/swosh.png';
import login from '../media/swosh-media/login.gif';
import transfer from '../media/swosh-media/transfer.gif';
import history from '../media/swosh-media/history.gif';
import table from '../media/swosh-media/table_plus.png';
//Image urls for react shop project
import reactShop from '../media/react-shop/react-shop.png';
import sortingFilter from '../media/react-shop/sorting-filter.gif';
import stockUpdate from '../media/react-shop/stock-update.gif';
import checkOut from '../media/react-shop/checkout.gif';
//Image urls for rest service project
import restService from '../media/rest-service/rest-service.png';
import get from '../media/rest-service/get.gif';
import post from '../media/rest-service/post.gif';
import put from '../media/rest-service/put.gif';
import del from '../media/rest-service/delete.gif'
//Image urls for pic finder project
import start from '../media/search-js/start.jpg';
import search from '../media/search-js/search.gif';
import layout from '../media/search-js/layout.gif';
import advSearch from '../media/search-js/adv-search.gif';
//Image urls for swifty project
import swiftyCart from '../media/swifty/cart.png';
import swiftyDeliver from '../media/swifty/cart.png';
import swiftyHome from '../media/swifty/home.png';
import swiftyLoading from '../media/swifty/loading.png';
import loginSwifty from '../media/swifty/login.png';
import swiftyProfile from '../media/swifty/profile.png';
import swiftyRegister from '../media/swifty/register.png';
import swiftySpecs from '../media/swifty/specs.png';
import {swiftyDescriptions} from "./imageDescriptions";


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

const producerConsumerImages = [producerConsumer, startProd, beginProd, addProd, bufferMiddle, bufferFull, removeProducer, saveState, loadState];
const minMaxImages = [minMax, startGame, firstMove, defend, endGame];
const stateMachineImages = [stateMachine, startState, selectMode, displayDate, changeDate, displayNew, cantChange];
const swoshImages = [main, login, transfer, history, table];
const reactShopImages = [reactShop, sortingFilter, stockUpdate, checkOut];
const restServiceImages = [restService, get, post, put, del];
const searchJs = [start, search, layout, advSearch];

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
