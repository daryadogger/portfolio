import nodeListForEach from './node-list-for-each';
import menuOpen from './menu-open';
import technologiesAnimation from './technologies-animation';

class App {
  static init() {
    nodeListForEach();
    menuOpen();
    technologiesAnimation();
  }
}


App.init();
window.App = App;
