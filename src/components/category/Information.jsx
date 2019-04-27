import React from 'react';
import UnControlledAccordion from './UnControlledAccordion';

class Information extends React.Component {
  render() {
    const { name, description, temperament, weight, life_span } = this.props;
    const data = [
      { title: 'Name', content: name },
      { title: 'Description', content: description },
      { title: 'Temperament', content: temperament },
      { title: 'Weight', content: weight.metric },
      { title: 'Life span', content: life_span }
    ];

    return (
      <div>
        {this.props &&
          data.map(x => {
            return (
              <UnControlledAccordion
                key={x.title}
                title={x.title}
                content={x.content}
              />
            );
          })}
      </div>
    );
  }
}
export default Information;
