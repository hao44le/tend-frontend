import WsbnModule from './wsbn';
import WsbnController from './wsbn.controller';
import WsbnComponent from './wsbn.component';
import WsbnTemplate from './wsbn.html';

describe('Wsbn', () => {
  let $rootScope, makeController;

  beforeEach(window.module(WsbnModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new WsbnController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(WsbnTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = WsbnComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(WsbnTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(WsbnController);
    });
  });
});
