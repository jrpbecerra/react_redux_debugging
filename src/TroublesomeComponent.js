import { counterSlice, selectCounter } from "./counterSlice";
import { PureComponent } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const randomString = () => Math.random().toString(36).slice(2);

class TroublesomeComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.uniqueId = this.uniqueId ? this.uniqueId : randomString();
    this.props.incrementCounter();
    console.log(this.uniqueId);
  }

  componentDidMount() {
    //this.props.incrementCounter();
  }

  render() {
    return (
      <div>
        <div>counter</div>
        <div>{this.props.count}</div>
        <Link to="/">back to belac</Link>
      </div>
    );
  }
}

export default connect((state) => ({ count: selectCounter(state) }), {
  incrementCounter: counterSlice.actions.increment,
})(TroublesomeComponent);

