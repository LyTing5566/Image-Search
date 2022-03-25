import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form" action="">
          <div className="field">
            <label htmlFor="">Image Search</label>

            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
            {/* onInputChange  加上() 代表要馬上執行  沒加的話是要等待執行*/}
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
