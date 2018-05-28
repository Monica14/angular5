import { ProjectTitlePage } from './app.po';

describe('project-title App', function() {
  let page: ProjectTitlePage;

  beforeEach(() => {
    page = new ProjectTitlePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
