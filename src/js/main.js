import nodeListForEach from './node-list-for-each';
import menuOpen from './menu-open';
import technologiesAnimation from './technologies-animation';
import headerScroll from './header';
import ankors from './ankors';

class App {
  static init() {
    nodeListForEach();
    menuOpen();
    technologiesAnimation();
    headerScroll();
    ankors();
  }
}


App.init();
window.App = App;
