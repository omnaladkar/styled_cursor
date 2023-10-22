

interface StyledCursorOptions {
    cursorImage: string;
  }
  
  class StyledCursor {
    private cursorImage: string;
  
    constructor(options: StyledCursorOptions) {
      this.cursorImage = options.cursorImage;
    }
  
    initialize() {
        document.body.style.cursor = `url(${this.cursorImage}), auto`;
    }
  }
  
  export default StyledCursor;
  