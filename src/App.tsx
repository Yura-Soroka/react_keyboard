import React from 'react';

export class App extends React.Component {
  state= {
    pressedKey: null,
  };

  hendleDocumentKeyUp = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.hendleDocumentKeyUp);
  }

  componentWillUnmount(): void {
    document.addEventListener('keyup', this.hendleDocumentKeyUp);
  }

  render(): React.ReactNode {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        {pressedKey ? (
          <p className="App__message">The last pressed key is [{pressedKey}]</p>
        ) : (
          <p className="App__message">Nothing was pressed yet</p>
        )}
      </div>
    );
  }
}
