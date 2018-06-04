import TopModule from './top';
import TopController from './top.controller';
import TopComponent from './top.component';
import TopTemplate from './top.html';

describe('Top', () => {
  let $rootScope, makeController;

  beforeEach(window.module(TopModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new TopController();
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
      expect(TopTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = TopComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(TopTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(TopController);
    });
  });
});
