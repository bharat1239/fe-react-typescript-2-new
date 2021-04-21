import React from 'react';
import { Link } from 'react-router-dom';

// @ts-ignore
import * as styles from '../../styles';
import { StyleConstants } from '../styleConstants';

interface State {
  errorMessage: string;
}

class MyErrorBoundary extends React.Component<any, State> {
  static getDerivedStateFromError(error: any) {
    return { errorMessage: error.toString() };
  }

  state = {
    errorMessage: '',
  };

  render() {
    if (this.state.errorMessage) {
      return (
        <div className={styles.errorContainer}>
          <div className={styles.errorMessage}>
            {this.state.errorMessage}
          </div>
          <div className={styles.returnHome}>
            <Link
              to={'/'}
              style={{
                textDecoration: 'none',
                color: StyleConstants.colors.linkButton,
              }}
            >
              Return to home
            </Link>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default MyErrorBoundary;
