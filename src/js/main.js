import nodeListForEach from './node-list-for-each';
import menuOpen from './menu-open';

class App {
  static init() {
    nodeListForEach();
    menuOpen();
  }
}


App.init();
window.App = App;
