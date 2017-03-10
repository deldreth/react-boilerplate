// @flow
import React from 'react';
import { connect } from 'react-redux';

import Post from '../components/post';
import type { PostType } from '../components/post';

type Props = {
  posts: Array<PostType>
};

class Posts extends React.Component {
  props: Props;

  renderPosts () {
    if ( this.props.posts.length > 0 ) {
      return (
        <div id='posts'>
        {
          this.props.posts.map( ( post: PostType ) => (
            <Post post={post}/>
          ) )
        }
        </div>
      );
    }

    return null;
  }

  render () {
    return this.renderPosts();
  }
}

const mapStateToProps = ( state: Object ) => {
  return {
    posts: state.post.posts
  };
};

const mapDispatchToProps = ( dispatch: Function ) => {
  return {

  };
};

export default connect( mapStateToProps, mapDispatchToProps )( Posts );
