import * as React from 'react';

/**
* propsObj:
* @param onSearchTermChange
*/
class SearchBar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            st_term: 'default text',
            st_customProp: 'customProp'
        };

        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(evt) {

        this.setState({ st_term: evt.target.value });
        this.props.onSearchTermChange(evt.target.value); // -->callback fn for up way data binding
    }

    render() {
        return (
            <div className="search-bar">
                <input
                    value={this.state.st_term}
                    data-custom-prop={this.state.st_customProp}
                    onChange = { evt => this.onInputChange(evt) } />

                Input result: {this.state.st_term}
            </div>
        );
    }
}

export default SearchBar;