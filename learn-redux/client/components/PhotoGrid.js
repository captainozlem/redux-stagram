import React from 'react';
import Photo from './Photo';

const PhotoGrid = React.createClass({
  render() {
    return (
      <div className="photo-grid">
        {this.props.posts.map((post, i) => (
          <Photo {...this.props} key={i} i={i} post={post} />
        ))}{' '}
        {/* {console.log('is there any comments over here??', this.props.comments)} */}
      </div>
    );
  }
});

export default PhotoGrid;
