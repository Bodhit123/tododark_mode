import React from "react";
import { Button } from "react-bootstrap";
import toast, { Toaster } from "react-hot-toast";

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
  }

  render() {
    return (
      <>
        <Toaster position="top-center" reverseOrder={false} />
        <div className="mx-3 my-1 todo">
          <h3>TODO</h3>
          {this.state.items.length < 20 ? (
            <TodoList items={this.state.items} />
          ) : (
            <TodoList items={[]}></TodoList> &&
            this.setState(() => ({ items: [], text: "" }))
          )}
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="new-todo">What needs to be done?</label>
            <input
              id="new-todo"
              onChange={this.handleChange}
              onFocus={this.handleFocus}
              value={this.state.text}
            />
            <br />
            <Button
              className="fw-bold  my-2"
              variant="success"
              onClick={() => {
                if (this.state.text.length === 0) {
                  return;
                }
                const newItem = {
                  text: this.state.text,
                  id: Date.now(),
                };
                toast.success("Added " + this.state.text);
                this.setState((state) => ({
                  items: state.items.concat(newItem),
                }));
              }}
            >
              Add #{this.state.items.length + 1}
            </Button>
          </form>
        </div>
      </>
    );
  }

  handleFocus(e) {
    this.setState({
      text: "",
    });
  }
  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.state.text.length === 0) {
      return;
    }
    toast.success("Added " + this.state.text);
    const newItem = {
      text: this.state.text,
      id: Date.now(),
    };
    this.setState((state) => ({
      items: state.items.concat(newItem),
      text: "",
    }));
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }
}

export default TodoApp;
