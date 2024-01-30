class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timePassedInMilliSeconds: 0
    }
  }

  render () {
    return(
      <div>
        <h2 className="border px-3 py-4 rounded my-3 mx-auto text-center" style={{maxWidth: "300px"}}>{Math.floor(this.state.timePassedInMilliSeconds / 1000)} s</h2>
        <div className="d-flex justify-content-center">
          <button className="btn btn-outline-primary mr-2">start</button>
          <button className="btn btn-outline-danger mr-2">stop</button>
          <button className="btn btn-outline-warning">reset</button>
        </div>
      </div>
    )
  }
}


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<StopWatch/>);