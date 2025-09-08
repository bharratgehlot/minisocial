import { useState, useEffect } from 'react';
import { postsAPI } from '../services/api';
import Navbar from '../components/Navbar';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await postsAPI.getPosts();
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const handleCreatePost = async (e) => {
    e.preventDefault();
    if (!newPost.trim()) return;

    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('content', newPost);
      
      await postsAPI.createPost(formData);
      setNewPost('');
      fetchPosts();
    } catch (error) {
      console.error('Error creating post:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLike = async (postId) => {
    try {
      await postsAPI.likePost(postId);
      fetchPosts();
    } catch (error) {
      console.error('Error liking post:', error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <div className="columns">
          <div className="column is-8 is-offset-2">
            {/* Create Post Form */}
            <div className="box mb-5">
              <h2 className="title is-4" style={{ color: '#FF4D6D' }}>
                What's on your mind?
              </h2>
              <form onSubmit={handleCreatePost}>
                <div className="field">
                  <div className="control">
                    <textarea
                      className="textarea"
                      placeholder="Share something with your college community..."
                      value={newPost}
                      onChange={(e) => setNewPost(e.target.value)}
                      rows="3"
                    />
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <button 
                      className={`button is-primary ${loading ? 'is-loading' : ''}`}
                      type="submit"
                    >
                      Post
                    </button>
                  </div>
                </div>
              </form>
            </div>

            {/* Posts Feed */}
            {posts.map((post) => (
              <div key={post._id} className="box mb-4">
                <article className="media">
                  <div className="media-content">
                    <div className="content">
                      <p>
                        <strong style={{ color: '#00D4FF' }}>
                          {post.author.name}
                        </strong>
                        <small className="ml-2 has-text-grey">
                          {post.author.college}
                        </small>
                        <br />
                        {post.content}
                        <br />
                        <small className="has-text-grey">
                          {new Date(post.createdAt).toLocaleDateString()}
                        </small>
                      </p>
                    </div>
                    <nav className="level is-mobile">
                      <div className="level-left">
                        <button 
                          className="button is-small is-white"
                          onClick={() => handleLike(post._id)}
                        >
                          ❤️ {post.likes.length}
                        </button>
                        <button className="button is-small is-white ml-2">
                          💬 {post.comments.length}
                        </button>
                      </div>
                    </nav>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;