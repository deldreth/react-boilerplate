// @flow
import React from 'react';

export type PostType = {
  id: number,
  title: string,
  body: string
};

type Props = {
  post: PostType
};
type DefaultProps = {
  post: {
    id: '',
    title: '',
    body: ''
  }
};
type State = {};

export default class Post extends React.Component {
  props: Props;
  defaultProps: DefaultProps;
  state: State;

  render () {
    const { post } = this.props;

    return (
      <div className='col-md-12'>
        <div className='panel panel-default'>
          <div className='panel-heading'>
            {post.id}: {post.title}
          </div>
          <div className='panel-body'>
            {post.body}
          </div>
        </div>
      </div>
    );
  }
}
