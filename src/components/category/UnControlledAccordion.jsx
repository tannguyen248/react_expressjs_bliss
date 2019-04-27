import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const styles = {
  root: {
    backgroundColor: 'rgba(0,0,0,.03)',
    borderBottom: '1px solid rgba(0,0,0,.125)',
    marginBottom: -1,
    minHeight: 56
  }
};

class UnControlledAccordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: true
    };
  }

  handleChange = () => {
    this.setState((state, props) => ({
      isExpanded: !state.isExpanded
    }));
  };

  render() {
    const { title, content, classes } = this.props;
    return (
      <div>
        {title && content && (
          <ExpansionPanel
            expanded={this.state.isExpanded}
            onChange={this.handleChange}
            square={true}
          >
            <ExpansionPanelSummary
              expandIcon={<FontAwesomeIcon icon="angle-down" />}
              className={classes.root}
            >
              <Typography variant="caption">{title}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>{content}</Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        )}
      </div>
    );
  }
}

export default withStyles(styles)(UnControlledAccordion);
