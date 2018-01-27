import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchSinglePost } from '../actions';

class PostsShow extends Component{
    componentDidMount(){
        const { id } = this.props.match.params;
        this.props.fetchSinglePost(id);
    }
    
    render() {
        const { post } = this.props;

        if (!post){
            return (
                <div>
                    Loading...
                </div>
            );
        }

        return (
            <div>
                <div id="BackToPosts">
                    <Link to="/" className="btn btn-primary">Back to Posts</Link>
                </div>
                <h3>{post.title}</h3>
                <h6>Categories: {post.categories}</h6>
                <p>{post.content}</p>
            </div>
        );
    }
}

// ownProps is the props object headed to this component
function mapStateToProps({ posts }, ownProps){
    return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchSinglePost })(PostsShow);