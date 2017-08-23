var Enum = require('enumify').Enum,
  utils = require('./utils');

var Shapes = require('react-shapes');
var InstructionComponent = require('./InstructionComponent');
var FeedbackComponent = require('./FeedbackComponent');

class Phase extends Enum {}
Phase.initEnum([
  'INSTRUCTION',
  'FEEDBACK'
]);

class ExperimentComponent extends React.Component {
  constructor(props) {
    super(props);
    var that = this;
    that.state = {
      phase: Phase.INSTRUCTION
    };

    // TODO: this is pretty horrendous. Really, we should have this in the
    // InstructionComponent and lift up state (Google it) from there.
    // But we're in a rush...
    window.onkeyup = function(e) {
      console.log(that)
      if (that.state.phase === Phase.INSTRUCTION) {
        that.setState({
          value: 0,
          phase: Phase.FEEDBACK
        });
        console.log('hello!');
      }
    };
  }

  render() {
    console.log('rendering...')
    console.log(this.state.phase)

    return (
      // <FeedbackComponent dummy='ruh roh' />
      Hello, world
    )
    // TODO: Another horrible thing. Should pass state into components so they
    // conditionally render. But being super aggro here
    // if (this.state.phase === Phase.INSTRUCTION) {
    // return (
    // <InstructionComponent />
    // );
    // } else {
    // var instructions = document.getElementsByClassName('instruction-container')
    // while (instructions.length > 0) instructions[0].remove();
    // return (
    // <FeedbackComponent dummy='ruh roh' />
    // );
    // }
  }
};

module.exports = ExperimentComponent;
