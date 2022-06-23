import React, { Fragment, MouseEvent } from "react";
import style from "./style.module.css";

export class ThirdPage extends React.Component {
  state = { width: 0, height: 0, moveX: "", moveY: "" };

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  handleMouseMove = (event: MouseEvent) => {
    const { width, height } = this.state;

    this.setState({
      moveX: (width / 2 - event.nativeEvent.clientX) * 0.1 + "px",
      moveY: (height / 2 - event.nativeEvent.clientY) * 0.1 + "px",
    });
  };

  render() {
    const { moveX, moveY } = this.state;

    return (
      <Fragment>
        <div className={style.container}>
          <div
            className={style.background}
            onMouseMove={this.handleMouseMove}
            style={{ marginLeft: moveX, marginTop: moveY }}
          ></div>
        </div>
      </Fragment>
    );
  }
}
