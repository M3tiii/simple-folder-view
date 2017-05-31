import { FolderViewPage } from './app.po';

describe('folder-view App', () => {
  let page: FolderViewPage;

  beforeEach(() => {
    page = new FolderViewPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
