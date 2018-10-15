elation.elements.define('myapp-confabulator', class extends elation.elements.base {
  // The init function gets called to define the object, and is used to define any attributes the element has
  // Don't forget to call super.init() to set up any attributes which we've inherited!
  init() {
    super.init();
    this.defineAttributes({
      'done': { type: 'boolean', default: false }
    });
  }
  // The create function gets called for each instance of this element as it's added to the page
  create() {
    this.innerHTML = 'Hello world!';

    // Set up an event listener for the 'click' handler.  All standard DOM events can be handled this way,
    // as well as any custom events that this component might fire in response to some change
    this.addEventListener('click', (ev) => this.handleClick(ev));
  }
  handleClick(ev) {
    console.log('I was clicked!');
    this.innerHTML = 'Goodbye everybody';
    this.done = true;
  }
});
