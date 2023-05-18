// const heading= React.createElement("h1",{id:"heading",xyz:"abc"},["hello world from react!"]);

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "nested"),
    React.createElement("h2", {}, "nested"),
  ]),
 React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "nested"),
    React.createElement("h2", {}, "nested"),
  ])]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
