import { useState, useEffect } from "react";

// The UserProfile component fetches and displays a user's info and their posts.
// It demonstrates common React patterns: state, side effects, loading & error handling and cleanup.
function UserProfile({ userId }) {
    // useState creates state variables and their setters.
    // `user` will hold the fetched user object (or null when none).
    const [user, setUser] = useState(null);

    // `posts` will be an array of post objects related to the user.
    const [posts, setPosts] = useState([]);

    // `loading` keeps track of loading states for user and posts separately.
    // We keep them together in an object so we can update parts without losing the other part.
    const [loading, setLoading] = useState({
        user: false,   // true while user is being fetched
        posts: false   // true while posts are being fetched
    });

    // `error` keeps track of any error messages for user and posts.
    const [error, setError] = useState({
        user: null,    // error message string if user fetch fails
        posts: null    // error message string if posts fetch fails
    });

    // ------------------------------------------------------------------
    // Effect: Fetch user data when `userId` changes
    // ------------------------------------------------------------------
    useEffect(() => {
        // If there's no userId, clear the user state and exit early.
        if (!userId) {
            setUser(null);
            return; // nothing to fetch
        }

        // Create an AbortController so we can cancel the fetch if the component unmounts
        // or userId changes before the fetch completes.
        const abortController = new AbortController();

        // Define an async function to fetch user data.
        const fetchUser = async () => {
            // Set loading state for user to true (preserve other loading flags using previous state).
            setLoading(prev => ({ ...prev, user: true }));

            // Clear previous user error before attempting a new fetch.
            setError(prev => ({ ...prev, user: null }));

            try {
                // Simulate network/API delay so students can see the loading indicator.
                await new Promise(resolve => setTimeout(resolve, 1000));

                // Perform the actual fetch.
                // We pass the abortController.signal to allow cancellation.
                const response = await fetch(`/api/users/${userId}`, {
                    signal: abortController.signal
                });

                // If the HTTP status is not in the 200-299 range, treat it as an error.
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                // Parse the JSON response body into an object.
                const userData = await response.json();

                // Save the user into state so React will re-render and show the data.
                setUser(userData);
            } catch (err) {
                // If the fetch was aborted, fetch throws an AbortError (or we used the signal).
                // We don't want to set an error for aborts because they are expected during cleanup.
                if (err.name !== 'AbortError') {
                    // Save the error message into state for displaying to the user.
                    setError(prev => ({ ...prev, user: err.message }));
                }
            } finally {
                // No matter success or error, set loading.user back to false.
                setLoading(prev => ({ ...prev, user: false }));
            }
        };

        // Start the fetch.
        fetchUser();

        // Cleanup function for this effect: abort the in-flight fetch if userId changes or
        // the component unmounts. This prevents setting state on an unmounted component.
        return () => {
            abortController.abort();
        };
    }, [userId]); // re-run this effect when userId changes

    // ------------------------------------------------------------------
    // Effect: Fetch posts when `user` changes (i.e., after user is loaded)
    // ------------------------------------------------------------------
    useEffect(() => {
        // If there's no user loaded yet, clear posts and do nothing.
        if (!user) {
            setPosts([]);
            return;
        }

        // Create an AbortController for the posts fetch as well.
        const abortController = new AbortController();

        const fetchPosts = async () => {
            // Set posts loading flag and clear previous posts error.
            setLoading(prev => ({ ...prev, posts: true }));
            setError(prev => ({ ...prev, posts: null }));

            try {
                // Small delay to simulate network latency for demonstration.
                await new Promise(resolve => setTimeout(resolve, 800));

                // Fetch the posts for the loaded user using their id.
                const response = await fetch(`/api/users/${user.id}/posts`, {
                    signal: abortController.signal
                });

                // Check response status and error if not ok.
                if (!response.ok) {
                    throw new Error(`Failed to fetch posts: ${response.status}`);
                }

                // Parse posts JSON and save to state.
                const postsData = await response.json();
                setPosts(postsData);
            } catch (err) {
                // Ignore aborts but save other errors into state.
                if (err.name !== 'AbortError') {
                    setError(prev => ({ ...prev, posts: err.message }));
                }
            } finally {
                // Turn off the posts loading flag.
                setLoading(prev => ({ ...prev, posts: false }));
            }
        };

        // Trigger fetching posts.
        fetchPosts();

        // Cleanup: abort posts fetch on dependency change / unmount.
        return () => {
            abortController.abort();
        };
    }, [user]); // re-run this effect when `user` object changes

    // ------------------------------------------------------------------
    // Effect: Update page title when the user changes
    // ------------------------------------------------------------------
    useEffect(() => {
        // If we have a user, include their name in the document title.
        if (user) {
            document.title = `Profile: ${user.name}`;
        } else {
            // Otherwise use a generic title.
            document.title = 'User Profile';
        }

        // Cleanup: when effect is torn down (component unmounts or before next run),
        // reset the title to a default value. This keeps global side-effects tidy.
        return () => {
            document.title = 'React App';
        };
    }, [user]); // re-run when `user` changes

    // ------------------------------------------------------------------
    // Effect: Mock/fake the fetch API for demo purposes so this component works
    // without a real backend. This is only for teaching/demo; in real apps
    // you would not overwrite window.fetch.
    // ------------------------------------------------------------------
    useEffect(() => {
        // Example mock data for users and posts.
        const mockUsers = {
            1: { id: 1, name: 'John Doe', email: 'john@example.com', avatar: 'avatar1.jpg' },
            2: { id: 2, name: 'Jane Smith', email: 'jane@example.com', avatar: 'avatar2.jpg' }
        };

        const mockPosts = {
            1: [
                { id: 1, title: 'My First Post', content: 'Hello worlds!', date: '2024-01-15' },
                { id: 2, title: 'React Tips', content: 'useEffect is powerful', date: '2024-01-16' }
            ],
            2: [
                { id: 3, title: 'Javascript Tricks', content: 'Async/await is great!', date: '2024-01-17' }
            ]
        };

        // Keep the original fetch so we can restore it when this effect cleans up.
        const originalFetch = window.fetch;

        // Override window.fetch with a simple mock for the demo.
        window.fetch = async (url, options) => {
            // If the provided AbortSignal says the request was aborted, throw an AbortError-like object.
            if (options?.signal?.aborted) {
                // Note: real fetch would throw a DOMException named 'AbortError'.
                const err = new Error('AbortError');
                err.name = 'AbortError';
                throw err;
            }

            // If the URL matches our users endpoint (but not posts), return a user.
            if (url.includes('/api/users/') && !url.includes('/posts')) {
                const userId = parseInt(url.split('/').pop());
                const user = mockUsers[userId];

                if (user) {
                    return {
                        ok: true,
                        json: async () => user
                    };
                } else {
                    // Simulate a 404 Not Found response shape.
                    return { ok: false, status: 404 };
                }
            }

            // If the URL matches posts endpoint, return the user's posts.
            if (url.includes('/post')) {
                // url structure expected: /api/users/:id/posts
                const userId = parseInt(url.split('/')[3]);
                const posts = mockPosts[userId] || [];

                return {
                    ok: true,
                    json: async () => posts
                };
            }

            // For any other URL, fall back to the original fetch.
            return originalFetch(url, options);
        };

        // Cleanup: restore the original fetch when component unmounts.
        return () => {
            window.fetch = originalFetch;
        };
    }, []); // empty dependency -> run once on mount

    // ------------------------------------------------------------------
    // Render logic: show different UIs depending on userId, loading, errors, and data.
    // ------------------------------------------------------------------

    // If parent didn't pass a userId, prompt the user to select one.
    if (!userId) {
        return (
            <div className="user-profile">
                <p>Please select a user to view their profile.</p>
            </div>
        );
    }

    // Main rendered UI when a userId was provided.
    return (
        <div className="user-profile">
            <div className="user-section">
                <h2>User Profile</h2>

                {/* Show loading state for the user fetch */}
                {loading.user && <div className="loading">Loading user...</div>}

                {/* Show an error message and a simple retry button if fetching user failed */}
                {error.user && (
                    <div className="error">
                        Error loading user: {error.user}
                        {/* Using window.location.reload for demo; in real apps provide a proper retry function. */}
                        <button onClick={() => window.location.reload()}>Retry</button>
                    </div>
                )}

                {/* When user is available and not loading, display the user's info */}
                {user && !loading.user && (
                    <div className="user-info">
                        <img src={user.avatar} alt={user.name} />
                        <h3>{user.name}</h3>
                        <p>{user.email}</p>
                    </div>
                )}
            </div>

            <div className="posts-section">
                <h3>User Posts</h3>

                {/* Loading indicator for posts */}
                {loading.posts && <div className="loading">Loading posts...</div>}

                {/* Error message for posts */}
                {error.posts && (
                    <div className="error">
                        Error loading posts: {error.posts}
                    </div>
                )}

                {/* Render list of posts when available */}
                {posts.length > 0 && !loading.posts && (
                    <div className="posts-lists">
                        {posts.map(post => (
                            <div key={post.id} className="post-card">
                                <h4>{post.title}</h4>
                                <p>{post.content}</p>
                                <small>{post.date}</small>
                            </div>
                        ))}
                    </div>
                )}

                {/* If there are no posts (and no error/loading), show a friendly message */}
                {posts.length === 0 && !loading.posts && !error.posts && user && (
                    <p>No posts found for this user.</p>
                )}
            </div>
        </div>
    );
}

export default UserProfile;

