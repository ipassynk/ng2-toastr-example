import { Ng2ToastrExamplePage } from './app.po';

describe('ng2-toastr-example App', () => {
  let page: Ng2ToastrExamplePage;

  beforeEach(() => {
    page = new Ng2ToastrExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
